import JsonLd from "@/components/JsonLd";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import WebDevelopmentPortfolio from "@/components/WebDevelopmentPortfolio";
import galleries from "@/data/galleries";
import {
  buildPageMetadata,
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/data/seo";
import { work } from "@/data/site";

export const metadata = buildPageMetadata({
  title: "Animation & Motion Design Portfolio",
  description:
    "Animation, motion design, kinetic typography, hero campaign films, stop-motion, and showreels by Syed Ali Abdul Baqi in London.",
  path: "/work",
  image: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
  keywords: [
    "Animation and Motion Design",
    "Motion Graphics Designer London",
    "Brand Showreels and Motion Films",
    "Kinetic Typography and Animation",
  ],
});

export default function WorkPage() {
  const serviceSchema = getServicePageSchema({
    name: "Animation & Motion Design",
    description: work.intro,
    path: "/work",
    capabilities: [
      "Motion Design & Motion Graphics",
      "Showreels & Hero Campaign Films",
      "Kinetic Typography",
      "Stop-Motion Animation",
      "Social & Digital Motion Spots",
    ],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Animation & Motion Design", path: "/work" },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="mx-auto max-w-[980px] px-6 pt-16 pb-20 text-center">
        <Reveal as="h1" className="font-display text-page-title">
          {work.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Reveal>
        <Reveal delay={150} className="mx-auto mt-12 max-w-[792px] text-lg leading-[1.45] md:text-xl">
          <p>{work.intro}</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-[1494px] px-4 pb-16 md:px-10">
        <ProGallery items={galleries.animationWork} layout="stack" columns={1} gap={0} showInfo="none" />
      </section>

      {/* Connected Custom Website Design & Development + 7-Category Portfolio */}
      <section className="mx-auto max-w-[1611px] border-t border-line px-4 pt-24 pb-20 md:px-10">
        <WebDevelopmentPortfolio showHeading />
      </section>
    </>
  );
}
