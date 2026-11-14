import JsonLd from "@/components/JsonLd";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import galleries from "@/data/galleries";
import { buildPageMetadata, getBreadcrumbSchema } from "@/data/seo";
import { clients } from "@/data/site";

export const metadata = buildPageMetadata({
  title: "Clients & Brand Collaborations",
  description:
    "Brands and organisations Syed Ali Abdul Baqi has partnered with across animation, motion design, brand storytelling, and custom website design & development.",
  path: "/clients",
  keywords: [
    "Motion Design Clients",
    "Website Design and Development Clients",
    "Brand Collaborations London",
  ],
});

export default function ClientsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Clients", path: "/clients" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="mx-auto max-w-[980px] px-6 pt-16 pb-20 text-center">
        <Reveal as="h1" className="font-display text-[clamp(2.2rem,7.5vw,98px)] leading-[0.95] tracking-[-0.04em]">
          {clients.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Reveal>
        {clients.intro && (
          <Reveal delay={120} className="mx-auto mt-8 max-w-[760px] text-lg text-muted md:text-xl">
            <p>{clients.intro}</p>
          </Reveal>
        )}
      </section>
      <section className="mx-auto max-w-[1628px] px-6 pb-16 md:px-16">
        <ProGallery
          items={galleries.clients}
          layout="grid"
          columns={5}
          gap={48}
          ratio="1 / 1"
          showInfo="hover"
          lightbox={false}
        />
      </section>
    </>
  );
}
