import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { CvButton } from "@/components/ui";
import { buildPageMetadata, getBreadcrumbSchema } from "@/data/seo";
import { contact, site } from "@/data/site";

export const metadata = buildPageMetadata({
  title: "Contact — Animation, Motion & Custom Website Projects",
  description: `Get in touch with ${site.name} in London for animation, motion design, and custom website design & development across WordPress, Shopify, React.js, Next.js, and Laravel.`,
  path: "/contact",
  keywords: [
    "Hire Motion Designer London",
    "Hire Website Designer and Developer",
    "Custom Website Design and Development Enquiry",
    "Syed Ali Abdul Baqi Contact",
  ],
});

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${site.url}/contact`,
    name: `Contact ${site.name}`,
    description: contact.intro,
    mainEntity: { "@id": `${site.url}/#person` },
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <section className="mx-auto max-w-[980px] px-6 pt-16 pb-20">
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Reveal as="h1" className="font-display text-[clamp(2.5rem,7vw,89px)] leading-[0.9] tracking-[-0.05em]">
        {contact.heading}
      </Reveal>

      <div className="mt-24 md:pl-[132px]">
        <Reveal className="font-display text-2xl leading-none tracking-[-0.05em] md:text-[38px]">
          <p>{contact.taglineTop}</p>
          <p className="mt-2">{contact.taglineBottom}</p>
        </Reveal>

        {contact.intro && (
          <Reveal delay={80} className="mt-8 max-w-[680px] text-lg leading-[1.5] text-muted">
            <p>{contact.intro}</p>
          </Reveal>
        )}

        <Reveal delay={120} className="mt-12 space-y-4 text-xl">
          <a
            href={`mailto:${site.email}`}
            className="block font-display text-lg hover:text-accent md:text-xl"
          >
            {site.email}
          </a>
          <div className="space-y-1 leading-[1.5]">
            {site.phones.map((p) => (
              <div key={p.label} className="flex items-center gap-3">
                <a href={`tel:${p.tel}`} className="hover:text-accent">
                  {p.label}
                </a>
                {p.whatsapp && (
                  <a
                    href={`https://wa.me/${p.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${p.label}`}
                  >
                    <Image
                      src={contact.whatsappIcon}
                      alt="WhatsApp"
                      width={28}
                      height={28}
                      className="h-7 w-7 transition-transform hover:scale-110"
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-10 flex flex-wrap gap-3 text-xs font-display">
          <Link
            href="/work"
            className="border border-line px-4 py-2 text-paper transition-colors hover:border-accent hover:text-accent"
          >
            Animation &amp; Motion Design →
          </Link>
          <Link
            href="/website-design-development"
            className="border border-line px-4 py-2 text-paper transition-colors hover:border-accent hover:text-accent"
          >
            Custom Website Design &amp; Development →
          </Link>
        </Reveal>

        <Reveal delay={200} className="mt-14">
          <CvButton href={site.cvUrl} />
        </Reveal>
      </div>
    </section>
  );
}
