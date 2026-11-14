import Link from "next/link";
import { footerLinks, site } from "@/data/site";

/** Matches the original Wix footer: rule, internal specialization links, copyright left, name link right. */
export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-10 md:px-24">
      <hr className="border-t border-paper/80" />
      <nav aria-label="Footer" className="mt-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-[13px] text-muted">{site.copyright}</p>
        <Link href="/" className="font-display text-2xl hover:underline md:text-[33px]">
          {site.name}
        </Link>
      </div>
    </footer>
  );
}
