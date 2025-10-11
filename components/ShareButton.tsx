"use client";
export default function ShareButton() {
  return (
    <button
      onClick={() => navigator.share?.({ title: document.title, url: location.href })}
      aria-label="Share this page"
      className="inline-flex items-center"
    >
      Share
    </button>
  );
}
