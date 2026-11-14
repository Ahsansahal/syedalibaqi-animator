import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Placeholder from "@/components/Placeholder";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import ThumbnailGallery from "@/components/ThumbnailGallery";
import VideoPlayer from "@/components/VideoPlayer";
import WebDevelopmentPortfolio from "@/components/WebDevelopmentPortfolio";
import galleries from "@/data/galleries";
import { buildPageMetadata, getBreadcrumbSchema } from "@/data/seo";
import { projects } from "@/data/site";

export const metadata = buildPageMetadata({
  title: "Projects & Selected Portfolio",
  description:
    "Selected projects by Syed Ali Abdul Baqi spanning motion-driven brand campaigns, visual identities, packaging, OOH, and custom website design & development across WordPress, Shopify, React.js, Next.js, and Laravel.",
  path: "/projects",
  image: projects.headerImage,
  keywords: [
    "Animation and Motion Design Portfolio",
    "Custom Website Design Portfolio",
    "Brand Campaigns and Visual Identity",
    "Website Designer and Developer Projects",
  ],
});

function ProjectVideo({ video, title }) {
  return (
    <div className="mx-auto mt-6 max-w-[980px]">
      <VideoPlayer src={video.src} poster={video.poster} title={title} aspect="16 / 9" />
    </div>
  );
}

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Header banner with title + intro overlaid */}
      <header className="relative -mt-28 flex min-h-[583px] flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center">
        {projects.headerImage ? (
          <Image
            src={projects.headerImage}
            alt="Selected creative, motion, and custom website projects by Syed Ali Abdul Baqi"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <Placeholder label="" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative">
          <Reveal as="h1" className="font-display text-page-title" style={{ letterSpacing: "-0.06em" }}>
            {projects.title}
          </Reveal>
          <Reveal delay={150} className="mx-auto mt-10 max-w-[822px] text-lg leading-[1.4] md:text-xl">
            <p>{projects.intro}</p>
          </Reveal>
        </div>
      </header>
      <div className="mt-8 flex justify-center">
        <svg viewBox="0 0 40 21" className="animate-nudge h-[21px] w-10" aria-hidden="true">
          <path d="M2 2l18 17L38 2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-[980px] space-y-28 px-6 pt-24 pb-20">
        {projects.items.map((p) => {
          const items = galleries[p.gallery];
          return (
            <section key={p.slug || p.title} id={p.slug}>
              <Reveal className="text-center">
                <h2 className="font-display text-2xl leading-tight md:text-[40px]">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {p.title}
                  </Link>
                </h2>
                {p.subtitle && (
                  <p className="mt-4 font-display text-lg md:text-[22px]">{p.subtitle}</p>
                )}
              </Reveal>
              <Reveal className="mx-auto mt-10 max-w-[843px] space-y-5 text-center text-lg leading-[1.4]">
                {p.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <p className="pt-2">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="font-display text-xs text-accent transition-colors hover:text-paper"
                  >
                    View Project Page →
                  </Link>
                </p>
              </Reveal>

              <div className="mt-12">
                {p.video && p.videoPosition === "before" && (
                  <ProjectVideo video={p.video} title={p.title} />
                )}
                {items &&
                  (p.galleryStyle === "row" ? (
                    <div className="mt-6">
                      <ProGallery items={items} layout="row" gap={12} />
                    </div>
                  ) : (
                    <ThumbnailGallery
                      items={items}
                      ratio={
                        items[0]?.w && items[0]?.h && items[0].h > items[0].w
                          ? "4 / 5"
                          : "16 / 9"
                      }
                      className="mt-6"
                    />
                  ))}
                {p.video && p.videoPosition === "after" && (
                  <ProjectVideo video={p.video} title={p.title} />
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Connected Custom Website Design & Development + 7-Category Portfolio */}
      <section className="mx-auto max-w-[1611px] border-t border-line px-6 pt-24 pb-20 md:px-10">
        <WebDevelopmentPortfolio showHeading showCapabilities />
      </section>
    </>
  );
}
