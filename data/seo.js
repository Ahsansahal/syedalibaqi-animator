import galleries from "@/data/galleries";
import { projects, site, websiteServices } from "@/data/site";
import { webPortfolioProjects } from "@/data/webPortfolio";

/**
 * Builds consistent Next.js App Router Metadata objects mapped to search intent,
 * OpenGraph social sharing, Twitter cards, and canonical URLs.
 */
export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = site.defaultOgImage,
  keywords,
  type = "website",
  absoluteTitle = false,
}) {
  const canonicalUrl = new URL(path, site.url).toString();
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: "en_GB",
      type,
      images: [
        {
          url: image,
          alt: `${title} — ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/**
 * Root JSON-LD @graph defining Syed Ali Abdul Baqi's entity, specializations,
 * and connected Custom Website Design & Development service catalog.
 */
export function getRootGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        image: `${site.url}${site.defaultOgImage}`,
        jobTitle: "Motion Designer & Custom Website Designer-Developer",
        description: site.positioningStatement,
        email: site.email,
        telephone: site.phones[0]?.tel,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location,
          addressCountry: "GB",
        },
        knowsAbout: [
          "Animation & Motion Design",
          "Motion Graphics",
          "Custom Website Design",
          "Custom Website Development",
          "Responsive Website Design",
          "Landing Page Design",
          "Website Redesign & Modernization",
          "Interactive Website Experiences",
          "WordPress Website Development",
          "Shopify Website Development",
          "React.js Website Development",
          "Next.js Website Development",
          "Laravel Website Development",
          "Full-Stack Website Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.positioningStatement,
        publisher: { "@id": `${site.url}/#person` },
        inLanguage: "en-GB",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: `${site.name} — Animation, Motion Design & Custom Website Design & Development`,
        url: site.url,
        image: `${site.url}${site.defaultOgImage}`,
        description: site.positioningStatement,
        email: site.email,
        telephone: site.phones[0]?.tel,
        founder: { "@id": `${site.url}/#person` },
        areaServed: [
          { "@type": "City", name: "London" },
          { "@type": "Country", name: "United Kingdom" },
          "Worldwide",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Animation, Motion Design & Custom Website Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Animation & Motion Design",
                description:
                  "Showreels, hero campaign films, kinetic typography, stop-motion, and motion-driven brand experiences.",
                url: `${site.url}/work`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Website Design & Development",
                description: websiteServices.lead,
                url: `${site.url}/website-design-development/custom-website-design`,
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Custom Website Development Frameworks",
                  itemListElement: websiteServices.developmentGroup.customDevelopment.frameworks.map(
                    (fw) => ({
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: fw.label,
                        description: fw.detail,
                        url: `${site.url}${fw.href}`,
                      },
                    })
                  ),
                },
              },
            },
            ...websiteServices.developmentGroup.platforms.map((tech) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: tech.label,
                description: tech.detail,
                url: `${site.url}${tech.href}`,
              },
            })),
          ],
        },
      },
    ],
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function getServicePageSchema({ name, description, path, capabilities = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#person` },
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "Country", name: "United Kingdom" },
      "Worldwide",
    ],
    ...(capabilities.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} Capabilities`,
            itemListElement: capabilities.map((cap) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: typeof cap === "string" ? cap : cap.label,
              },
            })),
          },
        }
      : {}),
  };
}

export function getProjectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seoDescription,
    url: `${site.url}/projects/${project.slug}`,
    image: project.preview ? `${site.url}${project.preview}` : undefined,
    creator: { "@id": `${site.url}/#person` },
    genre: project.categoryLabel,
    keywords: project.capabilities?.join(", "),
  };
}

/**
 * Unified resolver returning normalized individual project records across both
 * the 7-category portfolio (`webPortfolioProjects`) and the brand/campaign
 * showcase (`projects.items`).
 */
export function getAllNormalizedProjects() {
  const fromPortfolio = webPortfolioProjects.map((p) => ({
    slug: p.id,
    source: "portfolio",
    title: p.name,
    seoTitle: p.seoTitle || p.name,
    seoDescription: p.seoDescription || p.description,
    category: p.category,
    categoryLabel: p.categoryLabel,
    categoryHref: p.categoryHref,
    platform: p.platform,
    summary: p.description,
    paragraphs: p.overview?.length ? p.overview : [p.description],
    capabilities: p.capabilities || [],
    liveUrl: p.liveUrl || null,
    liveLabel: p.liveLabel || null,
    preview: p.preview,
    slides: p.slides || [],
    video: null,
    galleryStyle: "portfolio",
  }));

  const fromCreative = projects.items.map((item) => {
    const galleryItems = galleries[item.gallery] || [];
    const preview =
      galleryItems[0]?.src || item.video?.poster || site.defaultOgImage;
    return {
      slug: item.slug,
      source: "creative",
      title: item.title,
      subtitle: item.subtitle || null,
      seoTitle: `${item.title} — ${item.categoryLabel || "Creative Project"}`,
      seoDescription: item.body[0]?.slice(0, 158) || item.title,
      category: "creative-campaign",
      categoryLabel: item.categoryLabel || "Brand & Creative Campaign",
      categoryHref: item.categoryHref || "/projects",
      platform: item.categoryLabel || "Brand & Creative Campaign",
      summary: item.body[0] || "",
      paragraphs: item.body,
      capabilities: [
        item.categoryLabel || "Creative Direction",
        "Visual Storytelling",
        "Brand Execution",
      ],
      liveUrl: null,
      liveLabel: null,
      preview,
      slides: galleryItems,
      video: item.video || null,
      videoPosition: item.videoPosition || "after",
      galleryStyle: item.galleryStyle || "thumbnails",
    };
  });

  return [...fromPortfolio, ...fromCreative];
}

export function getNormalizedProjectBySlug(slug) {
  return getAllNormalizedProjects().find((p) => p.slug === slug) || null;
}
