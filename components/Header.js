"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";

function stripQuery(href) {
  return href.split("?")[0];
}

function isActive(pathname, item) {
  if (item.href === "/") return pathname === "/";
  return [item, ...(item.children ?? [])].some((i) => {
    const base = stripQuery(i.href);
    return base !== "/" && pathname.startsWith(base);
  });
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const primaryPhone = site.phones?.[0];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-ink/92 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 md:px-12">
          <Link
            href="/"
            className="min-w-0 truncate font-display text-xs tracking-[-0.02em] text-paper transition-colors hover:text-accent sm:text-sm"
          >
            {site.name}
          </Link>

          {/* Desktop menu */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-5 font-display text-xs tracking-[0.06em] xl:gap-8">
              {navigation.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    aria-haspopup={item.children ? "true" : undefined}
                    className={`inline-block py-3 whitespace-nowrap transition-colors hover:text-accent ${
                      isActive(pathname, item) ? "text-accent" : "text-paper/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="invisible absolute top-full left-1/2 min-w-64 -translate-x-1/2 translate-y-2 rounded-2xl bg-neutral-950/98 py-3 opacity-0 shadow-2xl ring-1 ring-white/12 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-5 py-2 text-xs whitespace-nowrap text-paper/85 transition-colors hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="relative z-50 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full transition-colors hover:bg-white/[0.06] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-6 bg-paper transition sm:w-7 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-paper transition sm:w-7 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-paper transition sm:w-7 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — rendered outside <header> so backdrop-filter never traps fixed coordinates */}
      <nav
        id="mobile-nav-drawer"
        aria-label="Mobile"
        aria-hidden={!open}
        className={`fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto overscroll-contain bg-ink/[0.98] px-5 pt-4 pb-12 backdrop-blur-xl transition-opacity duration-250 sm:top-24 sm:px-6 lg:hidden ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-xl divide-y divide-white/10">
          {navigation.map((item) => (
            <li key={item.label} className="py-1.5">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-[46px] items-center justify-between py-2 font-display text-xl tracking-[-0.02em] sm:text-2xl ${
                  isActive(pathname, item) ? "text-accent" : "text-paper"
                }`}
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="text-sm text-muted">
                  →
                </span>
              </Link>
              {item.children && (
                <div className="mt-1 mb-3 flex flex-wrap gap-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="inline-flex min-h-[38px] items-center rounded-full bg-white/[0.06] px-3.5 py-1.5 font-display text-[11px] tracking-[0.04em] text-paper/90 ring-1 ring-white/12 transition-colors hover:bg-accent hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center gap-3 border-t border-white/12 pt-6">
          <a
            href={`mailto:${site.email}`}
            onClick={() => setOpen(false)}
            className="inline-flex min-h-[44px] items-center rounded-full bg-accent px-5 py-2.5 font-display text-xs tracking-[0.12em] text-ink uppercase"
          >
            Email Directly
          </a>
          {primaryPhone?.whatsapp && (
            <a
              href={`https://wa.me/${primaryPhone.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-[44px] items-center rounded-full border border-white/25 px-5 py-2.5 font-display text-xs tracking-[0.12em] text-paper uppercase"
            >
              WhatsApp
            </a>
          )}
        </div>
      </nav>
    </>
  );
}
