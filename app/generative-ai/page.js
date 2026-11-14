import JsonLd from "@/components/JsonLd";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import galleries from "@/data/galleries";
import { buildPageMetadata, getBreadcrumbSchema } from "@/data/seo";
import { generativeAI } from "@/data/site";

export const metadata = buildPageMetadata({
  title: "AI-Enhanced Motion & Creative Storytelling",
  description:
    "AI-enhanced visual art and motion studies refined through Photoshop and After Effects by Syed Ali Abdul Baqi.",
  path: "/generative-ai",
  image: "/images/2520e1_36a47bc9502d4a4898e557affce7f258_mv2.jpg",
});

export default function GenerativeAIPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "AI-Enhanced Creative Storytelling", path: "/generative-ai" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="mx-auto max-w-[1124px] px-6 pt-20 pb-20 text-center">
        <Reveal as="h1" className="font-display text-page-title" style={{ letterSpacing: "normal" }}>
          {generativeAI.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Reveal>
        <Reveal delay={150} className="mx-auto mt-12 max-w-[890px] space-y-1 font-display text-base leading-[1.8] md:text-xl">
          {generativeAI.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </section>
      <section className="mx-auto max-w-[1628px] px-4 pb-16 md:px-10">
        <ProGallery items={galleries.generativeAI} layout="masonry" columns={3} gap={20} radius={30} showInfo="none" />
      </section>
    </>
  );
}
