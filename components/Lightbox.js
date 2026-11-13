"use client";

import { useEffect } from "react";
import Placeholder from "./Placeholder";

/** Full-screen viewer for gallery items (images + videos) with keyboard nav. */
export default function Lightbox({ items, index, onClose, onStep }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onStep]);

  const item = items[index];
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex flex-col bg-black/95" onClick={onClose}>
      <div className="flex items-center justify-between px-4 py-3.5 text-sm text-muted sm:p-5">
        <span>
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-2xl leading-none text-paper ring-1 ring-white/15 transition-colors hover:bg-accent hover:text-ink"
        >
          ×
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-14 md:px-20" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          aria-label="Previous"
          onClick={() => onStep(-1)}
          className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-2xl text-paper ring-1 ring-white/20 transition-colors hover:bg-accent hover:text-ink md:left-6"
        >
          ‹
        </button>
        {!item.src ? (
          <div className="relative aspect-video w-full max-w-4xl">
            <Placeholder video={item.type === "video"} label={item.title || "Media coming soon"} />
          </div>
        ) : item.type === "video" ? (
          <video key={item.src} src={item.src} poster={item.poster} controls autoPlay playsInline className="max-h-full max-w-full" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={item.src} src={item.src} alt={item.title || ""} className="max-h-full max-w-full object-contain" />
        )}
        <button
          type="button"
          aria-label="Next"
          onClick={() => onStep(1)}
          className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-2xl text-paper ring-1 ring-white/20 transition-colors hover:bg-accent hover:text-ink md:right-6"
        >
          ›
        </button>
      </div>
      {(item.title || item.description) && (
        <div className="px-4 py-4 text-center sm:p-6" onClick={(e) => e.stopPropagation()}>
          {item.title && <p className="font-display text-base sm:text-lg">{item.title}</p>}
          {item.description && <p className="mt-1 text-sm whitespace-pre-line text-muted sm:text-base">{item.description}</p>}
        </div>
      )}
    </div>
  );
}
