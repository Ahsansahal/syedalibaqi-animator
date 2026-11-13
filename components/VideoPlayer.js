"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Placeholder from "./Placeholder";

/**
 * High-performance local MP4 player.
 * - Renders an optimized Next.js <Image> (AVIF/WebP) poster immediately with zero MP4 network cost.
 * - `ambient`: defers mounting/streaming the MP4 until after initial page load AND viewport intersection
 *   (or hover), eliminating off-screen multi-megabyte range requests and net::ERR_ABORTED cancellations.
 * - Default (click-to-play): streams MP4 only when the user clicks Play.
 */
export default function VideoPlayer({
  src,
  poster,
  title = "Video",
  ambient = false,
  priority = false,
  sizes = "(min-width: 1024px) 55vw, 100vw",
  className = "",
  aspect,
  fit = "cover",
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const [streamMounted, setStreamMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Wait for initial window load + brief idle slice before starting ambient MP4 streams
  useEffect(() => {
    if (!ambient || !src) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let timerId = null;
    const markReady = () => {
      timerId = window.setTimeout(() => setPageLoaded(true), 250);
    };

    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady, { once: true });
    }

    return () => {
      window.removeEventListener("load", markReady);
      if (timerId) window.clearTimeout(timerId);
    };
  }, [ambient, src]);

  // Track viewport visibility for ambient playback
  useEffect(() => {
    if (!ambient || !src) return;
    const el = containerRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ambient, src]);

  // Latch video stream once both pageLoaded and inView are satisfied
  useEffect(() => {
    if (ambient && pageLoaded && inView && !streamMounted) {
      setStreamMounted(true);
    }
  }, [ambient, pageLoaded, inView, streamMounted]);

  // Play / pause mounted ambient video cleanly as it enters or leaves viewport
  useEffect(() => {
    if (!ambient || !streamMounted) return;
    const el = videoRef.current;
    if (!el) return;

    if (inView) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [ambient, streamMounted, inView]);

  const style = aspect ? { aspectRatio: aspect } : undefined;
  const wrapperLayout = aspect
    ? "relative w-full overflow-hidden bg-black"
    : "absolute inset-0 h-full w-full overflow-hidden bg-black";
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  const isGifPoster = poster?.endsWith(".gif");

  if (!src) {
    return (
      <div
        className={`relative h-full w-full overflow-hidden bg-black ${className}`}
        style={style ?? { aspectRatio: "16 / 9" }}
      >
        <Placeholder video label={title} />
      </div>
    );
  }

  if (ambient) {
    return (
      <div
        ref={containerRef}
        onPointerEnter={() => {
          if (pageLoaded && !streamMounted) {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (!reduce) setStreamMounted(true);
          }
        }}
        className={`${wrapperLayout} ${className}`}
        style={style}
      >
        {poster && (
          <Image
            src={poster}
            alt={title}
            fill
            priority={priority}
            unoptimized={isGifPoster}
            sizes={sizes}
            className={`${fitClass} transition-opacity duration-500 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {streamMounted && (
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            aria-label={title}
            onPlaying={() => setIsPlaying(true)}
            className={`absolute inset-0 block h-full w-full ${fitClass} transition-opacity duration-500 ${
              isPlaying || !poster ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    );
  }

  return (
    <div className={`group ${wrapperLayout} ${className}`} style={style}>
      {poster && !started && (
        <Image
          src={poster}
          alt={title}
          fill
          priority={priority}
          unoptimized={isGifPoster}
          sizes={sizes}
          className={fitClass}
        />
      )}

      {started && (
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          playsInline
          preload="auto"
          aria-label={title}
          className={`block h-full w-full ${fitClass}`}
        />
      )}

      {!started && (
        <button
          type="button"
          onClick={() => setStarted(true)}
          aria-label={`Play ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors hover:bg-black/30"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-black/65 ring-1 ring-white/40 transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
