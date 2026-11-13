import Link from "next/link";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import galleries from "@/data/galleries";
import { work } from "@/data/site";

export const metadata = { title: "Motion Design & Animation" };

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-[980px] px-4 pt-10 pb-12 text-center sm:px-6 sm:pt-16 sm:pb-16">
        <Reveal className="font-display text-xs tracking-[0.22em] text-accent uppercase sm:tracking-[0.28em]">
          Motion Graphics · Showreels · Commercials
        </Reveal>
        <Reveal as="h1" delay={70} className="mt-4 font-display text-page-title">
          {work.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Reveal>
        <Reveal
          delay={140}
          className="mx-auto mt-6 max-w-[792px] text-base leading-relaxed text-muted sm:mt-10 sm:text-lg md:text-xl"
        >
          <p>{work.intro}</p>
        </Reveal>
        <Reveal delay={200} className="mt-7 sm:mt-8">
          <Link
            href="/projects?category=motion-animation"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-line bg-neutral-950 px-6 py-3 font-display text-xs tracking-[0.14em] text-paper uppercase transition-colors hover:border-accent hover:text-accent sm:tracking-[0.16em]"
          >
            Explore Categorized Portfolio →
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pb-16 sm:pb-20 md:px-10">
        <ProGallery
          items={galleries.animationWork}
          layout="stack"
          columns={1}
          gap={48}
          showInfo="below"
        />
      </section>
    </>
  );
}
