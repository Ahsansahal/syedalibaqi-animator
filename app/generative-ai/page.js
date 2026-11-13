import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import galleries from "@/data/galleries";
import { generativeAI } from "@/data/site";

export const metadata = { title: "Generative AI" };

export default function GenerativeAIPage() {
  return (
    <>
      <section className="mx-auto max-w-[1124px] px-4 pt-10 pb-12 text-center sm:px-6 sm:pt-20 sm:pb-20">
        <Reveal as="h1" className="font-display text-page-title" style={{ letterSpacing: "normal" }}>
          {generativeAI.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Reveal>
        <Reveal delay={150} className="mx-auto mt-7 max-w-[890px] space-y-1 font-display text-sm leading-[1.8] sm:mt-12 sm:text-base md:text-xl">
          {generativeAI.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </section>
      <section className="mx-auto max-w-[1628px] px-4 pb-16 md:px-10">
        <ProGallery items={galleries.generativeAI} layout="masonry" columns={3} gap={20} radius={22} showInfo="none" />
      </section>
    </>
  );
}
