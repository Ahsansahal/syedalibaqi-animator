import Image from "next/image";
import Placeholder from "@/components/Placeholder";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import { PrimaryButton } from "@/components/ui";
import galleries from "@/data/galleries";
import { caseStudy as cs } from "@/data/site";

export const metadata = { title: "Case Study" };

export default function CaseStudyPage() {
  return (
    <article className="-mt-20 sm:-mt-24">
      {/* Banner image with the title overlaid */}
      <header className="relative flex min-h-[260px] w-full items-end justify-center overflow-hidden px-4 pt-24 pb-10 sm:min-h-[320px] sm:px-6 sm:pt-28 sm:pb-12">
        {cs.headerImage ? <Image src={cs.headerImage} alt="" fill priority sizes="100vw" className="object-cover" /> : <Placeholder label="Header image" />}
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-center font-display text-[clamp(1.7rem,5vw,56px)] leading-[1.04] tracking-[-0.03em]">
          {cs.title}
        </h1>
      </header>

      <div className="mx-auto max-w-[980px] px-4 sm:px-6">
        <Reveal className="mt-14 text-center sm:mt-20">
          <p className="font-display text-base sm:text-lg md:text-xl">{cs.subtitle}</p>
        </Reveal>
        <Reveal className="mx-auto mt-6 max-w-[755px] space-y-5 text-center text-base leading-[1.55] sm:mt-8 sm:space-y-6 sm:text-lg sm:leading-[1.45]">
          {cs.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-[1000px] px-4 sm:mt-16 sm:px-6">
        <ProGallery items={galleries.caseStudySegments} layout="grid" columns={3} gap={20} ratio="1080 / 1350" />
      </div>

      <div className="mx-auto max-w-[980px] px-4 sm:px-6">
        <Reveal className="mx-auto mt-14 max-w-[755px] text-center sm:mt-16">
          <h2 className="font-display text-xl sm:text-2xl md:text-[30px]">{cs.heroFilm.heading}</h2>
          <p className="mt-5 text-base leading-[1.55] sm:mt-6 sm:text-lg sm:leading-[1.45]">{cs.heroFilm.body}</p>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-10 max-w-[1029px] px-4 sm:mt-14">
        <VideoPlayer src={cs.heroFilm.video.src} poster={cs.heroFilm.video.poster} title={cs.heroFilm.heading} aspect="1029 / 560" />
      </Reveal>

      <Reveal className="mx-auto mt-14 max-w-[755px] px-4 text-center sm:mt-20 sm:px-6">
        <p className="text-lg leading-[1.45] sm:text-xl">{cs.partnership.heading}</p>
      </Reveal>
      <Reveal className="mx-auto mt-10 max-w-[1029px] px-4 sm:mt-16">
        <VideoPlayer src={cs.partnership.video.src} poster={cs.partnership.video.poster} title={cs.partnership.heading} aspect="1029 / 560" />
      </Reveal>
      <Reveal className="mx-auto mt-10 max-w-[755px] px-4 text-center sm:mt-16 sm:px-6">
        <p className="text-base leading-[1.55] sm:text-xl sm:leading-[1.4]">{cs.partnership.body}</p>
      </Reveal>

      <div className="mt-14 px-4 pb-8 text-center sm:mt-20 sm:px-6">
        <PrimaryButton href={cs.cta.href}>{cs.cta.label}</PrimaryButton>
      </div>
    </article>
  );
}
