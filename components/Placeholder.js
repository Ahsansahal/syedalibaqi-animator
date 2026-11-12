/** Striped stand-in block shown wherever media hasn't been added yet. Fills its parent. */
export default function Placeholder({ label = "Image", video = false, className = "" }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(45deg,#0d0d0d_0_14px,#151515_14px_28px)] text-neutral-500 ${className}`}
    >
      {video && (
        <span className="flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-neutral-600">
          <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      )}
      <span className="px-4 text-center text-xs tracking-[0.25em] uppercase">{label}</span>
    </div>
  );
}
