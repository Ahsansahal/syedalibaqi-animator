import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const primaryPhone = site.phones[0];
  return (
    <footer className="mx-auto w-full max-w-[1440px] px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-12 md:px-12">
      <div className="border-t border-white/15 pt-8">
        <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <div className="min-w-0">
            <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
              {site.role}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm text-muted sm:gap-x-6">
              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-accent"
              >
                {site.email}
              </a>
              {primaryPhone && (
                <a
                  href={`tel:${primaryPhone.tel}`}
                  className="transition-colors hover:text-accent"
                >
                  {primaryPhone.label}
                </a>
              )}
              {primaryPhone?.whatsapp && (
                <a
                  href={`https://wa.me/${primaryPhone.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              )}
              <Link href="/projects" className="transition-colors hover:text-accent">
                Portfolio
              </Link>
              <Link href="/generative-ai" className="transition-colors hover:text-accent">
                Generative AI
              </Link>
              <Link href="/album-art" className="transition-colors hover:text-accent">
                Album Art
              </Link>
              <Link href="/about" className="transition-colors hover:text-accent">
                About
              </Link>
              <Link href="/contact" className="transition-colors hover:text-accent">
                Contact
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted/75">{site.copyright}</p>
          </div>

          <Link
            href="/"
            className="font-display text-2xl tracking-[-0.03em] transition-colors hover:text-accent md:text-[30px]"
          >
            {site.name}
          </Link>
        </div>
      </div>
    </footer>
  );
}
