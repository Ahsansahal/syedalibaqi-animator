import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CvButton } from "@/components/ui";
import { contact, site } from "@/data/site";

export const metadata = { title: "Contact" };

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-[#25D366] transition-transform group-hover:scale-110"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pt-12 pb-24 md:px-12">
      <Reveal className="font-display text-xs tracking-[0.26em] text-accent uppercase">
        Motion · Design · Development
      </Reveal>
      <Reveal
        as="h1"
        delay={60}
        className="mt-4 font-display text-[clamp(2.3rem,6.5vw,84px)] leading-[0.92] tracking-[-0.045em]"
      >
        {contact.heading}
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/12 pt-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal className="font-display text-2xl leading-tight tracking-[-0.035em] md:text-[38px]">
            <p>{contact.taglineTop}</p>
            <p className="mt-1 text-accent">{contact.taglineBottom}</p>
          </Reveal>

          {contact.summary && (
            <Reveal delay={100} className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted">
              <p>{contact.summary}</p>
            </Reveal>
          )}

          <Reveal delay={150} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-white/[0.06] px-6 py-3 font-display text-xs tracking-[0.14em] text-paper uppercase ring-1 ring-white/12 transition-colors hover:text-accent"
            >
              Explore Portfolio →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-white/[0.06] px-6 py-3 font-display text-xs tracking-[0.14em] text-paper uppercase ring-1 ring-white/12 transition-colors hover:text-accent"
            >
              About &amp; Skills →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={130}
          className="flex flex-col justify-between rounded-[22px] bg-neutral-950/90 p-7 ring-1 ring-white/12 md:p-9 lg:col-span-5"
        >
          <div className="space-y-7">
            <div>
              <p className="font-display text-xs tracking-[0.2em] text-muted uppercase">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block break-all font-display text-base text-paper transition-colors hover:text-accent md:text-lg"
              >
                {site.email}
              </a>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="font-display text-xs tracking-[0.2em] text-muted uppercase">
                Phone &amp; WhatsApp
              </p>
              <div className="mt-3 space-y-3">
                {site.phones.map((p) => (
                  <div key={p.label} className="flex flex-wrap items-center gap-4">
                    <a
                      href={`tel:${p.tel}`}
                      className="font-display text-lg text-paper transition-colors hover:text-accent"
                    >
                      {p.label}
                    </a>
                    {p.whatsapp && (
                      <a
                        href={`https://wa.me/${p.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Chat on WhatsApp ${p.label}`}
                        className="group inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-2 text-xs text-paper ring-1 ring-white/12 transition-colors hover:ring-[#25D366]"
                      >
                        <WhatsAppIcon />
                        <span>WhatsApp</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {site.cvUrl && (
            <div className="mt-8 border-t border-white/10 pt-6">
              <CvButton href={site.cvUrl} />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
