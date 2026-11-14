import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import ThumbnailGallery from "@/components/ThumbnailGallery";
import VideoPlayer from "@/components/VideoPlayer";
import { PrimaryButton } from "@/components/ui";
import {
  buildPageMetadata,
  getAllNormalizedProjects,
  getBreadcrumbSchema,
  getNormalizedProjectBySlug,
  getProjectSchema,
} from "@/data/seo";

export function generateStaticParams() {
  return getAllNormalizedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getNormalizedProjectBySlug(slug);
  if (!project) return {};

  return buildPageMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/projects/${project.slug}`,
    image: project.preview,
    keywords: [
      project.title,
      project.categoryLabel,
      ...(project.capabilities || []),
    ],
    type: "article",
  });
}

export default async function IndividualProjectPage({ params }) {
  const { slug } = await params;
  const project = getNormalizedProjectBySlug(slug);
  if (!project) notFound();

  const videoSlides = project.slides.filter((s) => s.type === "video");
  const imageSlides = project.slides.filter((s) => s.type === "image");

  const allProjects = getAllNormalizedProjects();
  const related = allProjects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  const projectSchema = getProjectSchema(project);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ]);

  return (
    <article className="mx-auto max-w-[1200px] px-6 pt-8 pb-20 md:px-10">
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-muted">
        <ol className="flex flex-wrap items-center gap-2 font-display">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/projects" className="hover:text-accent">
              Projects
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={project.categoryHref} className="hover:text-accent">
              {project.categoryLabel}
            </Link>
          </li>
        </ol>
      </nav>

      {/* Project Header */}
      <header className="mx-auto mt-12 max-w-[920px] text-center">
        <Reveal>
          <Link
            href={project.categoryHref}
            className="inline-block font-display text-xs tracking-widest text-accent uppercase transition-colors hover:text-paper"
          >
            {project.platform}
          </Link>
        </Reveal>
        <Reveal
          as="h1"
          className="mt-4 font-display text-3xl leading-[1.05] tracking-[-0.03em] md:text-[54px]"
        >
          {project.title}
        </Reveal>
        {project.subtitle && (
          <Reveal delay={80}>
            <p className="mt-4 font-display text-lg text-muted md:text-2xl">
              {project.subtitle}
            </p>
          </Reveal>
        )}

        <Reveal
          delay={130}
          className="mx-auto mt-8 max-w-[820px] space-y-5 text-lg leading-[1.5] text-muted md:text-xl"
        >
          {project.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </Reveal>

        {project.capabilities?.length > 0 && (
          <Reveal
            delay={180}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          >
            {project.capabilities.map((cap) => (
              <span
                key={cap}
                className="border border-line px-4 py-1.5 font-display text-[11px] text-paper/90"
              >
                {cap}
              </span>
            ))}
          </Reveal>
        )}

        {project.liveUrl && (
          <Reveal delay={210} className="mt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent px-6 py-3 font-display text-xs text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Visit {project.liveLabel || "Live Website"} ↗
            </a>
          </Reveal>
        )}
      </header>

      {/* Video Showcases (if present) */}
      {(project.video || videoSlides.length > 0) && (
        <section className="mx-auto mt-16 max-w-[1040px] space-y-12">
          {project.video && (
            <Reveal>
              <VideoPlayer
                src={project.video.src}
                poster={project.video.poster}
                title={project.title}
                aspect="16 / 9"
              />
            </Reveal>
          )}
          {videoSlides.map((vid, idx) => (
            <Reveal key={vid.src || idx}>
              {vid.title && (
                <h2 className="mb-4 text-center font-display text-lg text-paper md:text-xl">
                  {vid.title}
                </h2>
              )}
              <VideoPlayer
                src={vid.src}
                poster={vid.poster}
                title={vid.title || project.title}
                aspect={vid.w && vid.h ? `${vid.w} / ${vid.h}` : "16 / 9"}
                className={vid.h > vid.w ? "mx-auto max-w-md" : ""}
              />
            </Reveal>
          ))}
        </section>
      )}

      {/* Image Gallery */}
      {imageSlides.length > 0 && (
        <section className="mx-auto mt-16 max-w-[1040px]">
          {project.galleryStyle === "row" ? (
            <ProGallery items={imageSlides} layout="row" gap={14} />
          ) : imageSlides.length <= 3 ? (
            <ProGallery
              items={imageSlides}
              layout="masonry"
              columns={imageSlides.length === 1 ? 1 : 2}
              gap={24}
              radius={20}
              showInfo="below"
            />
          ) : (
            <ThumbnailGallery
              items={imageSlides}
              ratio={
                imageSlides[0]?.w &&
                imageSlides[0]?.h &&
                imageSlides[0].h > imageSlides[0].w
                  ? "4 / 5"
                  : "16 / 9"
              }
            />
          )}
        </section>
      )}

      {/* Related Projects in Category */}
      {related.length > 0 && (
        <section className="mt-24 border-t border-line pt-16">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-2xl md:text-3xl">
              More in {project.categoryLabel}
            </h2>
            <Link
              href={project.categoryHref}
              className="font-display text-xs text-accent transition-colors hover:text-paper"
            >
              View All {project.categoryLabel} →
            </Link>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group flex flex-col justify-between rounded-[22px] border border-line bg-ink p-7 transition-colors hover:border-paper/60"
              >
                <div>
                  <p className="font-display text-[11px] text-accent uppercase">
                    {item.categoryLabel}
                  </p>
                  <h3 className="mt-2 font-display text-base leading-snug text-paper transition-colors group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">
                    {item.summary}
                  </p>
                </div>
                <span className="mt-5 font-display text-xs text-paper group-hover:text-accent">
                  View Project →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="mt-20 border-t border-line pt-16 text-center">
        <p className="mx-auto max-w-[680px] text-lg text-muted">
          Interested in animation, motion-driven brand experiences, or a custom-designed and developed website?
        </p>
        <div className="mt-8">
          <PrimaryButton href="/contact">Get in Touch</PrimaryButton>
        </div>
      </div>
    </article>
  );
}
