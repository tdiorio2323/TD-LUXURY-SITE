const { execSync, spawn } = require("node:child_process");
const fs = require("node:fs");

const routes = ["/web", "/design", "/contact"];
const port = 3001; // Use a different port to avoid conflicts

(async () => {
    // ensure build once
    execSync("pnpm build", { stdio: "inherit" });

    // start server on different port
    const srv = spawn("npx", ["next", "start", "-p", port.toString()], { stdio: "inherit" });

    // wait for server
    console.log(`Waiting for server on port ${port}...`);
    await new Promise(r => setTimeout(r, 5000));

    if (!fs.existsSync(".reports")) fs.mkdirSync(".reports");

    for (const route of routes) {
        const outPath = `.reports/lh${route.replace(/\//g, "_")}.json`;
        console.log(`Running Lighthouse for ${route}...`);
        execSync(`npx lighthouse http://localhost:${port}${route} --quiet --only-categories=performance,seo,accessibility --output=json --output-path=${outPath}`, { stdio: "inherit" });
    }

    srv.kill();
    console.log("Lighthouse tests completed!");
})().catch(e => {
    console.error(e);
    process.exit(1);
});