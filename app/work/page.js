import Link from "next/link";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import galleries from "@/data/galleries";
import { work } from "@/data/site";

export const metadata = { title: "Motion Design & Animation" };

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-[980px] px-6 pt-16 pb-16 text-center">
        <Reveal className="font-display text-xs tracking-[0.28em] text-accent uppercase">
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
          className="mx-auto mt-10 max-w-[792px] text-lg leading-relaxed text-muted md:text-xl"
        >
          <p>{work.intro}</p>
        </Reveal>
        <Reveal delay={200} className="mt-8">
          <Link
            href="/projects?category=motion-animation"
            className="inline-flex items-center justify-center border border-line bg-neutral-950 px-6 py-3 font-display text-xs tracking-[0.16em] text-paper uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Explore Categorized Portfolio →
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pb-20 md:px-10">
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
