import fs from "fs"; import path from "path";

const root = process.cwd();
const targets = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(tsx|jsx)$/.test(e.name)) targets.push(p);
  }
}
walk(path.join(root, "app"));
if (fs.existsSync(path.join(root,"components"))) walk(path.join(root,"components"));

function ensureOnce(src, insertAfter, snippet) {
  if (src.includes(snippet)) return src;
  const idx = src.indexOf(insertAfter);
  return idx === -1 ? src : src.slice(0, idx + insertAfter.length) + "\n" + snippet + "\n" + src.slice(idx + insertAfter.length);
}

for (const f of targets) {
  let s = fs.readFileSync(f, "utf8");
  let orig = s;

  // 1) LANDMARKS in layout: add skip link + main id/role (safe no-op on others)
  if (f.endsWith("app/layout.tsx") || f.endsWith("app/layout.jsx")) {
    s = ensureOnce(s, "<body", `<a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2">Skip to content</a>`);
    s = s.replace(/<main([^>]*?)>/, (m, attrs) => /id="main"/.test(attrs) ? m : `<main id="main" role="main"${attrs}>`);
    s = s.replace(/<header(?![^>]*role=)/, `<header role="banner"`);
    s = s.replace(/<nav(?![^>]*aria-label=)/, `<nav aria-label="primary"`);
    s = s.replace(/<footer(?![^>]*role=)/, `<footer role="contentinfo"`);
  }

  // 2) FORM ARIA: inputs/textarea/select with react-hook-form register("field")
  const controlRegex = /<(input|textarea|select)([^>]*?)\{\.\.\.register\("([^"\)]+)"/g;
  s = s.replace(controlRegex, (m, tag, attrs, field) => {
    let out = `<${tag}${attrs}{...register("${field}"`;
    // inject aria-invalid / aria-describedby if missing
    if (!/aria-invalid=/.test(m)) out = out.replace(/\)"/, `)" aria-invalid={!!errors?.${field} || undefined}"`);
    if (!/aria-describedby=/.test(m)) out = out.replace(/\)"/, `)" aria-describedby={errors?.${field} ? "${field}-error" : undefined}"`);
    return out;
  });

  // 3) ERROR MESSAGE: {errors.field && (<p ...>msg</p>)}
  const errBlock = /\{errors\.([A-Za-z0-9_]+)\s*&&\s*\((\s*)<p([^>]*)>([\s\S]*?)<\/p>\s*\)\s*\}/g;
  s = s.replace(errBlock, (m, field, ws, attrs, inner) => {
    let a = attrs;
    if (!/role=/.test(a)) a = ` role="alert"${a}`;
    if (!/id=/.test(a)) a = ` id="${field}-error"${a}`;
    if (!/className=/.test(a)) a = ` className="mt-1 text-sm text-destructive"${a}`;
    return `{errors.${field} && (${ws}<p${a}>${inner}</p>)}`;
  });

  // 4) SINGLE H1 per page: if no <h1>, promote first <h2> to h1
  if (/page\.tsx$/.test(f) && !/<h1[\s>]/.test(s)) {
    s = s.replace(/<h2([\s>])/, "<h1$1");
    s = s.replace(/<\/h2>/, "</h1>");
  }

  // 5) TOUCH TARGETS: add min height to obvious buttons/links with className
  s = s.replace(/<button([^>]*className=")([^"]*)"/g, (m, pre, cls) => {
    if (/\bmin-h-\[44px\]/.test(cls)) return m;
    return `<button${pre}${cls} min-h-[44px] px-4 py-3"`;
  });
  s = s.replace(/<a([^>]*className=")([^"]*)"/g, (m, pre, cls) => {
    if (/\bmin-h-\[44px\]/.test(cls)) return m;
    return `<a${pre}${cls} min-h-[44px]"`;
  });

  if (s !== orig) fs.writeFileSync(f, s);
}
console.log("A11y codemod complete for", targets.length, "files");
