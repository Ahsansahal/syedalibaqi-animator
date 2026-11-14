import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import Placeholder from "@/components/Placeholder";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import galleries from "@/data/galleries";
import { buildPageMetadata, getBreadcrumbSchema } from "@/data/seo";
import { albumArt } from "@/data/site";

export const metadata = buildPageMetadata({
  title: "Album Art & Animated Cover Visuals",
  description:
    "Animated album cover visuals, motion loops, and illustrated cover artwork created by London visual artist and motion designer Syed Ali Abdul Baqi.",
  path: "/album-art",
  image: "/images/2520e1_cdf442ea30274bb483cd29e9a82aae9d_mv2.png",
  keywords: [
    "Animated Album Art",
    "Motion Cover Art",
    "Music Visuals and Animation",
    "Syed Ali Abdul Baqi",
  ],
});

export default function AlbumArtPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Album Art", path: "/album-art" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero: "Album" top-left, 4 phone tiles, "Art" bottom-right (overlapping, like the original) */}
      <section className="relative mx-auto max-w-[1126px] px-6 pt-10 pb-24">
        <Reveal as="h1" className="relative z-10 font-display text-[clamp(3.5rem,13vw,176px)] leading-[0.85]">
          {albumArt.titleTop}{" "}
          <span className="sr-only">{albumArt.titleBottom}</span>
        </Reveal>
        <div className="relative z-0 -mt-4 grid grid-cols-2 gap-5 md:-mt-6 md:grid-cols-4">
          {albumArt.phones.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className="relative overflow-hidden rounded-[28px]"
              style={{ aspectRatio: "267 / 443" }}
            >
              {p.type === "video" ? (
                <VideoPlayer ambient src={p.src} poster={p.poster} title="Album art animation" />
              ) : !p.src ? (
                <Placeholder label="Artwork" />
              ) : (
                <Image
                  src={p.src}
                  alt={p.alt || "Album art visual"}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              )}
            </Reveal>
          ))}
        </div>
        <Reveal
          className="relative z-10 -mt-10 text-right font-display text-[clamp(3.5rem,13vw,176px)] leading-[0.85] md:-mt-16"
          aria-hidden="true"
        >
          {albumArt.titleBottom}
        </Reveal>
      </section>

      <section className="mx-auto max-w-[980px] px-6 pb-16">
        <ProGallery items={galleries.albumArt} layout="grid" columns={4} gap={16} ratio="1 / 1" />
      </section>
    </>
  );
}
