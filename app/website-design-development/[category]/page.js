import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import WebDevelopmentPortfolio from "@/components/WebDevelopmentPortfolio";
import { PrimaryButton } from "@/components/ui";
import {
  buildPageMetadata,
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/data/seo";
import { webCategoryPages, webPortfolioCategories } from "@/data/webPortfolio";

export function generateStaticParams() {
  return Object.keys(webCategoryPages).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const page = webCategoryPages[category];
  if (!page) return {};

  return buildPageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/website-design-development/${page.slug}`,
    image: page.ogImage,
    keywords: page.keywords,
  });
}

export default async function WebsiteCategoryPage({ params }) {
  const { category } = await params;
  const page = webCategoryPages[category];
  if (!page) notFound();

  const serviceSchema = getServicePageSchema({
    name: page.heading,
    description: page.seoDescription,
    path: `/website-design-development/${page.slug}`,
    capabilities: page.capabilities,
  });

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    {
      name: "Custom Website Design & Development",
      path: "/website-design-development",
    },
    ...(page.parentCategory
      ? [{ name: page.parentCategory.label, path: page.parentCategory.href }]
      : []),
    { name: page.label, path: `/website-design-development/${page.slug}` },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  const siblingCategories = [
    ...webPortfolioCategories.filter(
      (c) => c.id !== "all" && c.id !== page.slug && c.href
    ),
    ...(webPortfolioCategories
      .find((c) => c.id === "custom-website-design")
      ?.subCategories?.filter(
        (sub) => sub.href && sub.id !== "design" && sub.id !== page.slug
      ) || []),
  ];

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1280px] px-6 pt-8 text-xs text-muted md:px-10"
      >
        <ol className="flex flex-wrap items-center gap-2 font-display">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/website-design-development"
              className="hover:text-accent"
            >
              Custom Website Design &amp; Development
            </Link>
          </li>
          {page.parentCategory && (
            <>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={page.parentCategory.href}
                  className="hover:text-accent"
                >
                  {page.parentCategory.label}
                </Link>
              </li>
            </>
          )}
          <li aria-hidden="true">/</li>
          <li className="text-paper">{page.label}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-[1060px] px-6 pt-12 pb-16 text-center">
        <Reveal>
          <p className="font-display text-xs tracking-widest text-accent uppercase">
            {page.eyebrow}
          </p>
        </Reveal>
        <Reveal as="h1" className="mt-4 font-display text-page-title">
          {page.heading}
        </Reveal>
        <Reveal
          delay={100}
          className="mx-auto mt-8 max-w-[820px] text-lg leading-[1.5] text-paper/90 md:text-xl"
        >
          <p>{page.intro}</p>
        </Reveal>
        <Reveal
          delay={160}
          className="mx-auto mt-6 max-w-[820px] space-y-4 text-base leading-[1.55] text-muted md:text-lg"
        >
          {page.body.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </Reveal>
      </section>

      {/* Capabilities under this specialization */}
      <section className="mx-auto max-w-[1140px] px-6 pb-20">
        <Reveal className="rounded-[26px] border border-line bg-ink p-8 md:p-10">
          <h2 className="font-display text-xl text-paper md:text-2xl">
            {page.label} Capabilities
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {page.capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-start gap-3 text-base text-paper/90 md:text-lg"
              >
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent"
                  aria-hidden="true"
                />
                <span>{cap}</span>
              </li>
            ))}
          </ul>

          {page.frameworks?.length > 0 && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <p className="font-display text-xs tracking-widest text-accent uppercase">
                Custom Website Development Stack
              </p>
              <h3 className="mt-2 font-display text-lg text-paper md:text-xl">
                Frameworks Included Within Custom Website Development
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                {page.frameworks.map((fw) => (
                  <Link
                    key={fw.href}
                    href={fw.href}
                    className="group flex flex-col justify-between rounded-[20px] border border-line p-5 transition-colors hover:border-accent"
                  >
                    <div>
                      <h4 className="font-display text-base text-paper transition-colors group-hover:text-accent">
                        {fw.shortLabel}
                      </h4>
                      <p className="mt-2 text-sm leading-[1.45] text-muted">
                        {fw.detail}
                      </p>
                    </div>
                    <span className="mt-4 font-display text-xs text-accent">
                      Explore {fw.shortLabel} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </section>

      {/* Portfolio filtered to this category */}
      <section className="mx-auto max-w-[1611px] border-t border-line px-6 pt-20 pb-20 md:px-10">
        <Reveal className="mx-auto max-w-[980px] text-center">
          <h2 className="font-display text-3xl leading-[0.95] tracking-[-0.04em] md:text-[48px]">
            {page.label} Portfolio Examples
          </h2>
          <p className="mx-auto mt-4 max-w-[740px] text-lg text-muted">
            Selected {page.label} work — or switch tabs below to explore connected categories.
          </p>
        </Reveal>
        <WebDevelopmentPortfolio
          showHeading={false}
          initialCategory={page.slug}
        />
      </section>

      {/* Related Categories & Internal Links */}
      <section className="mx-auto max-w-[1280px] border-t border-line px-6 py-16 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-xl md:text-2xl">
            Explore Other Specializations &amp; Technologies
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {siblingCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="border border-line px-5 py-2.5 font-display text-xs text-paper transition-colors hover:border-accent hover:text-accent"
              >
                {cat.label} →
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <PrimaryButton href="/contact">Start a Project</PrimaryButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
