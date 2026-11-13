import Link from "next/link";
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
    <section className="mx-auto max-w-[1240px] px-4 pt-8 pb-20 sm:px-6 sm:pt-12 sm:pb-24 md:px-12">
      <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
        Visual Artist · Motion · Web Design &amp; Dev
      </p>
      <h1 className="mt-3 font-display text-[clamp(2rem,6.5vw,84px)] leading-[0.94] tracking-[-0.045em] text-paper sm:mt-4">
        {contact.heading}
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/12 pt-10 sm:mt-14 sm:gap-10 sm:pt-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <div className="font-display text-xl leading-tight tracking-[-0.035em] text-paper sm:text-2xl md:text-[38px]">
            <p>{contact.taglineTop}</p>
            <p className="mt-1.5 text-[#ff5a48]">{contact.taglineBottom}</p>
          </div>

          {contact.summary && (
            <p className="mt-5 max-w-[560px] text-base leading-relaxed text-paper/80 sm:mt-6 sm:text-lg">
              {contact.summary}
            </p>
          )}

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
            <Link
              href="/projects"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white/[0.08] px-5 py-3 font-display text-xs tracking-[0.14em] text-paper uppercase ring-1 ring-white/20 transition-colors hover:bg-accent hover:text-ink hover:ring-accent sm:px-6"
            >
              Explore Portfolio →
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white/[0.08] px-5 py-3 font-display text-xs tracking-[0.14em] text-paper uppercase ring-1 ring-white/20 transition-colors hover:bg-accent hover:text-ink hover:ring-accent sm:px-6"
            >
              About &amp; Skills →
            </Link>
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-between rounded-[20px] bg-neutral-950 p-6 ring-1 ring-white/15 sm:rounded-[22px] sm:p-7 md:p-9 lg:col-span-5">
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
        </div>
      </div>
    </section>
  );
}
