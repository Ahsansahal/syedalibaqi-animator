/**
 * Portfolio Categories, Technology Capabilities & Project Data.
 *
 * Separate Portfolio Categories:
 * 1. Animation & Motion Design
 * 2. Custom Website Design
 * 3. WordPress
 * 4. Shopify
 * 5. React.js
 * 6. Next.js
 * 7. Laravel
 *
 * Positioning Rule:
 * Website design and website development are presented as one connected service —
 * Custom Website Design & Development — spanning bespoke visual layouts and
 * multi-platform engineering across WordPress, Shopify, React.js, Next.js & Laravel.
 */

const imageSlide = (src, w, h, title, description) => ({
  type: "image",
  src,
  w,
  h,
  ...(title ? { title } : {}),
  ...(description ? { description } : {}),
});

const videoSlide = (src, poster, w, h, title, description) => ({
  type: "video",
  src,
  poster,
  w,
  h,
  ...(title ? { title } : {}),
  ...(description ? { description } : {}),
});

export const webPortfolioCategories = [
  { id: "all", label: "All" },
  {
    id: "animation-motion-design",
    label: "Animation & Motion Design",
    href: "/work",
  },
  {
    id: "custom-website-design",
    label: "Custom Website Design & Development",
    href: "/website-design-development/custom-website-design",
    subCategories: [
      { id: "all", label: "All Custom" },
      {
        id: "design",
        label: "Custom Design",
        href: "/website-design-development/custom-website-design",
      },
      {
        id: "reactjs",
        label: "React.js",
        href: "/website-design-development/reactjs",
      },
      {
        id: "nextjs",
        label: "Next.js",
        href: "/website-design-development/nextjs",
      },
      {
        id: "laravel",
        label: "Laravel",
        href: "/website-design-development/laravel",
      },
    ],
  },
  {
    id: "wordpress",
    label: "WordPress",
    href: "/website-design-development/wordpress",
  },
  {
    id: "shopify",
    label: "Shopify",
    href: "/website-design-development/shopify",
  },
];

/**
 * Dedicated search-intent-mapped category & technology pages under
 * /website-design-development/[category].
 */
export const webCategoryPages = {
  "custom-website-design": {
    slug: "custom-website-design",
    label: "Custom Website Design & Development",
    eyebrow: "Custom Website Design & Development · React.js, Next.js & Laravel",
    heading: "Custom Website Design & Custom-Coded Development",
    seoTitle: "Custom Website Design & Development | React.js, Next.js & Laravel",
    seoDescription:
      "Custom website design and bespoke full-stack development by Syed Ali Abdul Baqi in London — responsive business websites, creative landing pages, and custom-coded builds in React.js, Next.js, and Laravel.",
    keywords: [
      "Custom Website Design",
      "Custom Website Development",
      "React.js Website Development",
      "Next.js Website Development",
      "Laravel Website Development",
      "Responsive Website Design",
      "Landing Page Design",
    ],
    intro:
      "Every custom website unites bespoke visual direction with custom-coded frontend and full-stack engineering — designed around your business goals and developed from the ground up using React.js, Next.js, and Laravel.",
    body: [
      "Rather than treating website visuals as isolated static mockups, I design custom websites with real responsive behaviour, motion rhythm, content hierarchy, and custom code architecture in mind.",
      "Within Custom Website Development, projects are engineered across React.js for interactive experiences, Next.js for ultra-fast App Router performance and SEO, and Laravel for bespoke PHP/MySQL business platforms, portals, and APIs.",
    ],
    capabilities: [
      "Custom Business Website Design & Development",
      "Creative Website & Landing Page Design",
      "Responsive Website Layouts & Modernization",
      "React.js Interactive Website Development",
      "Next.js Full-Stack & SEO Website Development",
      "Laravel Custom PHP/MySQL Web Applications & Portals",
      "Interactive Motion-Driven Web Experiences",
    ],
    frameworks: [
      {
        label: "React.js Website Development",
        shortLabel: "React.js",
        href: "/website-design-development/reactjs",
        detail: "Interactive web experiences, motion-driven interfaces & modular React 19 components.",
      },
      {
        label: "Next.js Website Development",
        shortLabel: "Next.js",
        href: "/website-design-development/nextjs",
        detail: "Fast App Router websites, static/SSR performance, Tailwind CSS & technical SEO.",
      },
      {
        label: "Laravel Website Development",
        shortLabel: "Laravel",
        href: "/website-design-development/laravel",
        detail: "Custom business web applications, MySQL schemas, client portals & REST APIs.",
      },
    ],
    ogImage: "/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png",
  },
  wordpress: {
    slug: "wordpress",
    label: "WordPress",
    eyebrow: "Website Development Technology · CMS",
    heading: "WordPress Website Development",
    seoTitle: "WordPress Website Development | Custom Themes & Business Websites",
    seoDescription:
      "Custom WordPress website development by Syed Ali Abdul Baqi — bespoke WordPress business websites, custom PHP themes, ACF & block architectures, website redesigns, and WooCommerce builds.",
    keywords: [
      "WordPress Website Development",
      "Custom WordPress Website Design and Development",
      "Custom Business Website Development",
      "WordPress Theme Development London",
      "WooCommerce Website Development",
    ],
    intro:
      "Custom-designed and developed WordPress websites engineered for businesses that want bespoke visual identity paired with flexible, intuitive content management.",
    body: [
      "Each WordPress build combines custom website design with clean PHP theme architecture, structured Advanced Custom Fields (ACF), Gutenberg or Elementor Pro editorial blocks, and fast front-end performance.",
      "Whether launching a new corporate website, modernizing an outdated business site, or adding WooCommerce product catalogues, every WordPress project is tailored around search visibility, security, and effortless publishing.",
    ],
    capabilities: [
      "Custom WordPress Theme Design & Development",
      "Business & Corporate WordPress Websites",
      "Structured ACF, Gutenberg & Elementor Pro Architectures",
      "WooCommerce Storefront Integration",
      "WordPress Website Redesign & Speed Optimization",
      "Technical SEO & Responsive Mobile Performance",
    ],
    ogImage: "/images/2520e1_aafe43cb93724db68fce8f354f1e96e2_mv2.png",
  },
  shopify: {
    slug: "shopify",
    label: "Shopify",
    eyebrow: "Website Development Technology · E-Commerce",
    heading: "Shopify Website Development",
    seoTitle: "Shopify Website Development | Custom E-Commerce Storefronts",
    seoDescription:
      "Custom Shopify website development by Syed Ali Abdul Baqi — bespoke Online Store 2.0 storefronts, Liquid templates, D2C product merchandising, and responsive e-commerce experiences.",
    keywords: [
      "Shopify Website Development",
      "Custom Shopify Storefront Design",
      "Shopify Online Store 2.0 Development",
      "E-Commerce Website Designer and Developer",
      "Responsive Shopify Theme Development",
    ],
    intro:
      "Conversion-focused Shopify websites combining brand-led storefront design with custom Online Store 2.0 and Liquid development for retail and D2C brands.",
    body: [
      "Great e-commerce websites require visual merchandising and technical storefront execution to work as one system. I design and build custom Shopify storefronts featuring clear collection structures, persuasive product pages, bundle promotions, and fast mobile shopping flows.",
      "From bespoke Liquid sections and seasonal campaign landing pages to mobile-first retail layouts, each storefront is built to showcase products memorably and convert visitors cleanly.",
    ],
    capabilities: [
      "Custom Shopify Online Store 2.0 Theme Development",
      "Bespoke Liquid Sections & Product Page Templates",
      "D2C Brand Storefront Design & Merchandising",
      "Interactive Product Carousels & Bundle Promotions",
      "Mobile-First E-Commerce Checkout & Navigation Flows",
      "Campaign Landing Pages & Seasonal Storefront Rollouts",
    ],
    ogImage: "/images/wetransfer/g-natural/17-carousel-1.png",
  },
  reactjs: {
    slug: "reactjs",
    label: "React.js",
    parentCategory: {
      label: "Custom Website Development",
      href: "/website-design-development/custom-website-design",
    },
    eyebrow: "Custom Website Development · React.js",
    heading: "React.js Custom Website Development",
    seoTitle: "React.js Website Development & Interactive Web Experiences",
    seoDescription:
      "Custom React.js development by Syed Ali Abdul Baqi — interactive websites, motion-driven frontend experiences, modular component architectures, and responsive single-page applications.",
    keywords: [
      "React.js Development",
      "React.js Website Development",
      "Interactive Website Experiences",
      "Custom Frontend Website Development",
      "Motion-Driven React Websites",
    ],
    intro:
      "Interactive, motion-rich websites and frontend applications designed and developed with modern React.js component architecture.",
    body: [
      "When a project calls for fluid filtering, rich media galleries, custom animations, or dynamic client-side interactivity, React.js provides the ideal foundation to unite motion design with responsive web engineering.",
      "I design and develop modular React 19 interfaces with clean state management, accessible keyboard and touch interactions, viewport-aware video playback, and smooth transitions.",
    ],
    capabilities: [
      "Custom React.js Website & Interface Development",
      "Motion-Driven & Interactive Website Experiences",
      "Modular Reusable React Component Architecture",
      "Interactive Media Galleries, Filtering & Lightboxes",
      "REST & Headless CMS API Frontend Integration",
      "Responsive Cross-Device Performance & Accessibility",
    ],
    ogImage: "/images/2520e1_c2cb7c4e55574989b6fbf36c7276ee18_mv2.png",
  },
  nextjs: {
    slug: "nextjs",
    label: "Next.js",
    parentCategory: {
      label: "Custom Website Development",
      href: "/website-design-development/custom-website-design",
    },
    eyebrow: "Custom Website Development · Next.js",
    heading: "Next.js Custom Website Development",
    seoTitle: "Next.js Website Development | Fast Custom Websites & SEO",
    seoDescription:
      "Custom Next.js website development by Syed Ali Abdul Baqi — high-performance App Router websites, motion-driven brand platforms, server-rendered SEO architecture, and responsive Tailwind CSS builds.",
    keywords: [
      "Next.js Development",
      "Next.js Website Development",
      "Custom Website Development",
      "Website Designer and Developer London",
      "Fast SEO-Friendly Next.js Websites",
    ],
    intro:
      "High-speed, search-optimized custom websites designed and developed on Next.js App Router — pairing distinctive creative direction with modern full-stack performance.",
    body: [
      "Next.js bridges expressive motion-driven website design with instant page loads, static and server rendering, automatic image optimization, and rock-solid technical SEO.",
      "I design and develop custom Next.js websites for brands, studios, and businesses that want standout visual storytelling without sacrificing Core Web Vitals or organic search discoverability.",
    ],
    capabilities: [
      "Next.js App Router Custom Website Development",
      "Static & Server-Rendered SEO Page Architecture",
      "Motion-Driven Brand & Creative Portfolio Websites",
      "Tailwind CSS Responsive Layout Engineering",
      "Image, Video & Core Web Vitals Optimization",
      "Structured Data (JSON-LD) & Headless CMS Integration",
    ],
    ogImage: "/images/2520e1_b191a0a4b2df483caeae69dd792332e7_mv2.png",
  },
  laravel: {
    slug: "laravel",
    label: "Laravel",
    parentCategory: {
      label: "Custom Website Development",
      href: "/website-design-development/custom-website-design",
    },
    eyebrow: "Custom Website Development · Laravel",
    heading: "Laravel Custom Website Development",
    seoTitle: "Laravel Website Development | Custom Business Web Applications",
    seoDescription:
      "Custom Laravel website development by Syed Ali Abdul Baqi — bespoke business websites, full-stack PHP & MySQL web applications, client portals, admin dashboards, and REST APIs.",
    keywords: [
      "Laravel Website Development",
      "Custom Business Website Development",
      "Full-Stack Website Development",
      "Custom PHP Laravel Web Applications",
      "Bespoke Business Portals and Websites",
    ],
    intro:
      "Custom-designed and full-stack engineered Laravel websites, business portals, and tailored web applications built around complex operational workflows.",
    body: [
      "When a business outgrows off-the-shelf templates and plugins, Laravel enables secure, scalable custom website development backed by structured relational databases and clean MVC engineering.",
      "I pair custom visual website design with Laravel backend development — delivering cohesive public websites, authenticated customer portals, custom management dashboards, and third-party API integrations.",
    ],
    capabilities: [
      "Custom Business Website Development with Laravel",
      "Full-Stack PHP, MySQL & Blade MVC Architecture",
      "Authenticated Client Portals & Custom Dashboards",
      "Bespoke Booking, Enquiry & Workflow Systems",
      "RESTful API Design & Third-Party Integrations",
      "Secure, Scalable Database Modelling & Maintenance",
    ],
    ogImage: "/images/2520e1_67e9549ba4e842a2b40101ae6b5ce8b8_mv2.png",
  },
};

export const webPortfolioProjects = [
  // =========================================================================
  // 1. ANIMATION & MOTION DESIGN
  // =========================================================================
  {
    id: "evo-icl-superpower-motion-campaign",
    category: "animation-motion-design",
    categoryLabel: "Animation & Motion Design",
    categoryHref: "/work",
    platform: "Animation & Motion Design · Hero Film & Showreel",
    name: 'EVO ICL — "What\'s Your Superpower?" Film & Impact Reel',
    seoTitle: 'EVO ICL Motion Film & Campaign Showreel — Animation & Motion Design',
    seoDescription:
      'Hero campaign film "What\'s Your Superpower?" and 90-second annual marketing impact showreel created by Syed Ali Abdul Baqi for EVO ICL.',
    description:
      'Flagship hero film ("What\'s Your Superpower?"), 90-second marketing impact showreel, and vertical social motion spots repositioning EVO ICL across lifestyle segments.',
    overview: [
      'Created for globally recognised vision correction brand EVO ICL, the central hero film "What\'s Your Superpower?" unified inclusive audience segmentation across Fearless, Dreamer, and Bold lifestyle groups — showcased across digital channels and live brand events.',
      "Alongside the hero film, I directed and animated a 90-second annual partnership impact showreel and vertical 9:16 social motion reels communicating campaign strategy, visual identity, and measurable results.",
    ],
    capabilities: [
      "Animation & Motion Design",
      "Creative Direction & Visual Storytelling",
      "Hero Event Film & Social Motion Reels",
      "Kinetic Typography & Sound-Synced Editing",
    ],
    hasVideo: true,
    preview: "/images/2520e1_7a25770b0b454a53a033770487dbc8acf002.jpg",
    slides: [
      videoSlide(
        "/videos/2520e1_7a25770b0b454a53a033770487dbc8ac.mp4",
        "/images/2520e1_7a25770b0b454a53a033770487dbc8acf002.jpg",
        1920,
        1080,
        'EVO ICL — Hero Film: "What\'s Your Superpower?"'
      ),
      videoSlide(
        "/videos/2520e1_197f1593b401417482c1ce67cbc94719.mp4",
        "/images/2520e1_197f1593b401417482c1ce67cbc94719f003.jpg",
        1920,
        1080,
        "EVO ICL — 90s Marketing Year Impact Showreel"
      ),
      videoSlide(
        "/videos/2520e1_fffdf32433d84d0db760e794b13527a6.mp4",
        "/images/2520e1_fffdf32433d84d0db760e794b13527a6f003.jpg",
        1080,
        1920,
        "EVO ICL — Vertical Lifestyle Motion Reel"
      ),
      imageSlide("/images/2520e1_d42c85fc1e2e4fdfaced6244ccd3431e_mv2.png", 1080, 1350, "EVO ICL — Lifestyle Segment Creative I"),
      imageSlide("/images/2520e1_7816963a0b334a9499674f179423d05e_mv2.png", 1080, 1350, "EVO ICL — Lifestyle Segment Creative II"),
    ],
  },
  {
    id: "fabulatte-brand-motion-showreel",
    category: "animation-motion-design",
    categoryLabel: "Animation & Motion Design",
    categoryHref: "/work",
    platform: "Animation & Motion Design · Creative Showreel",
    name: "Fabulatte — Dynamic Brand & Motion Design Showreel",
    seoTitle: "Fabulatte Motion Design Showreel — Animation & Motion Graphics",
    seoDescription:
      "High-energy agency showreel combining kinetic typography, dynamic transitions, and rhythmic motion design across European brand campaigns.",
    description:
      "High-impact creative showreel weaving together European brand campaigns, bold kinetic typography, custom transitions, and rhythmic motion editing.",
    overview: [
      "Designed to make an immediate visual impression, the Fabulatte showreel brings together multi-market branding, digital campaigns, and motion graphics delivered across Europe.",
      "Fast-paced rhythmic cuts, expressive kinetic typography, and seamless custom transitions establish a cohesive, energetic visual narrative from the opening frame.",
    ],
    capabilities: [
      "Motion Graphics & Showreel Direction",
      "Kinetic Typography",
      "Custom Visual Transitions",
      "Rhythmic Audio-Visual Editing",
    ],
    hasVideo: true,
    preview: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
    slides: [
      videoSlide(
        "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
        "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
        1920,
        1080,
        "Fabulatte — Creative & Motion Showreel"
      ),
    ],
  },
  {
    id: "oral-reconstruction-symposium-motion",
    category: "animation-motion-design",
    categoryLabel: "Animation & Motion Design",
    categoryHref: "/work",
    platform: "Animation & Motion Design · Event Promo Film",
    name: "Oral Reconstruction International Symposium — Lisbon Promo",
    seoTitle: "Oral Reconstruction Symposium Lisbon Promo — Motion Design",
    seoDescription:
      "International event promo animation featuring bold kinetic typography and dynamic transitions for the Oral Reconstruction International Symposium in Lisbon.",
    description:
      "International event promo film for Lisbon, Portugal — combining dynamic motion transitions, bold kinetic typography, and high-tempo visual pacing.",
    overview: [
      "Produced to intrigue and inspire clinicians globally, this promotional motion piece positioned the Oral Reconstruction International Symposium in Lisbon, Portugal as a flagship international gathering.",
      "Sharp typographic choreography, quick-cut architectural and clinical sequences, and energetic motion transitions sustain audience attention across event and social placements.",
    ],
    capabilities: [
      "Event Promo Animation",
      "Kinetic Typography & Motion Pacing",
      "International Healthcare Campaign Motion",
    ],
    hasVideo: true,
    preview: "/images/2520e1_894e994732e24e81ae31dcc9d9853a37f003.jpg",
    slides: [
      videoSlide(
        "/videos/2520e1_894e994732e24e81ae31dcc9d9853a37.mp4",
        "/images/2520e1_894e994732e24e81ae31dcc9d9853a37f003.jpg",
        1920,
        1080,
        "Oral Reconstruction International Symposium — Lisbon Event Promo"
      ),
    ],
  },
  {
    id: "staar-surgical-lucy-bronze-motion",
    category: "animation-motion-design",
    categoryLabel: "Animation & Motion Design",
    categoryHref: "/work",
    platform: "Animation & Motion Design · Athlete Campaign",
    name: "STAAR Surgical × Lucy Bronze MBE — Motion Campaign",
    seoTitle: "STAAR Surgical × Lucy Bronze Motion Campaign — Animation & Video",
    seoDescription:
      "Motion campaign videos and digital creatives starring footballer Lucy Bronze MBE for STAAR Surgical EVO ICL.",
    description:
      "Athlete partnership motion campaign and vertical social reels starring Lucy Bronze MBE for STAAR Surgical's EVO ICL vision correction campaign.",
    overview: [
      "Partnering with professional footballer Lucy Bronze MBE, this motion and digital campaign highlighted precision, performance, and visual freedom with EVO ICL implantable lenses.",
      "Deliverables spanned horizontal campaign motion spots, David Lloyd vertical reels, emailer visuals, and social storytelling assets tailored for UK audiences.",
    ],
    capabilities: [
      "Brand Partnership Motion Design",
      "16:9 & 9:16 Multi-Format Video Production",
      "Integrated Digital & Social Storytelling",
    ],
    hasVideo: true,
    preview: "/images/2520e1_13127af86a0c48479b5b905dbf3cc4d1f002.jpg",
    slides: [
      videoSlide(
        "/videos/2520e1_13127af86a0c48479b5b905dbf3cc4d1.mp4",
        "/images/2520e1_13127af86a0c48479b5b905dbf3cc4d1f002.jpg",
        1920,
        1080,
        "STAAR Surgical × Lucy Bronze MBE — Campaign Film"
      ),
      videoSlide(
        "/videos/2520e1_5af6ac55bbc94681bdf2b1c76760e019.mp4",
        "/images/2520e1_5af6ac55bbc94681bdf2b1c76760e019f003.jpg",
        1080,
        1920,
        "David Lloyd × STAAR Surgical — Vertical Motion Reel"
      ),
      imageSlide("/images/2520e1_6374251645a145bcae69ad7ea8242a9a_mv2.jpg", 1081, 1351, "Lucy Bronze × EVO ICL Key Visual"),
    ],
  },
  {
    id: "ocl-vision-motion-advert-series",
    category: "animation-motion-design",
    categoryLabel: "Animation & Motion Design",
    categoryHref: "/work",
    platform: "Animation & Motion Design · YouTube & Social Ads",
    name: 'OCL Vision — "Make the Switch" & YouTube Motion Adverts',
    seoTitle: "OCL Vision Motion Adverts & Social Video Campaign",
    seoDescription:
      'YouTube advertising film and "Make the Switch" motion campaign created for London eye health clinic OCL Vision.',
    description:
      'Emotionally driven YouTube commercial and "Make the Switch" motion campaign driving laser vision consultation bookings for OCL Vision.',
    overview: [
      'Produced for leading London eye health clinic OCL Vision, the YouTube advert and "Make the Switch" campaign dramatise everyday frustrations of prescription glasses and contact lenses for active 22–40 audiences.',
      "Story-driven pacing, crisp typographic supers, and relatable lifestyle motion assets turned clinical messaging into an engaging conversion campaign.",
    ],
    capabilities: [
      "YouTube Commercial Motion & Direction",
      "Conversion-Focused Social Motion Ads",
      "Campaign Concept & Visual Execution",
    ],
    hasVideo: true,
    preview: "/images/2520e1_496ea031ef16481f845a2511d960b811f003.jpg",
    slides: [
      videoSlide(
        "/videos/2520e1_496ea031ef16481f845a2511d960b811.mp4",
        "/images/2520e1_496ea031ef16481f845a2511d960b811f003.jpg",
        1920,
        1080,
        "OCL Vision — Laser Vision Correction YouTube Advert"
      ),
      videoSlide(
        "/videos/2520e1_c458a697031a477fb59c0adb4bf3b8e1.mp4",
        "/images/2520e1_c458a697031a477fb59c0adb4bf3b8e1f000.jpg",
        1920,
        1080,
        'OCL Vision — "Make the Switch" Motion Spot'
      ),
    ],
  },
  {
    id: "grenade-freedom-in-motion-campaigns",
    category: "animation-motion-design",
    categoryLabel: "Animation & Motion Design",
    categoryHref: "/work",
    platform: "Animation & Motion Design · Sports Nutrition Motion",
    name: 'Grenade Sports Nutrition — "Freedom in Motion" & Campaign Films',
    seoTitle: "Grenade Sports Nutrition Motion Design & Campaign Videos",
    seoDescription:
      'High-energy motion design and campaign animations ("Freedom in Motion" & National Sports Day) created for Grenade Sports Nutrition.',
    description:
      'End-to-end concept, visual design, and high-energy motion execution across "Freedom in Motion" and National Sports Day campaigns for Grenade.',
    overview: [
      "Built around athletic momentum and bold brand attitude, these motion campaigns for Grenade Sports Nutrition span social reels, digital activations, and outdoor rollout visuals.",
      "Punchy frame-by-frame energy, dynamic product motion, and unmistakable typographic impact reinforce Grenade's high-performance positioning.",
    ],
    capabilities: [
      "2D & Product Motion Graphics",
      "Multi-Channel Social & Outdoor Motion",
      "Art Direction & Kinetic Editing",
    ],
    hasVideo: true,
    preview: "/images/2520e1_f589b1e2ed8744fd9c261179cff14e5d_mv2.jpg",
    slides: [
      videoSlide(
        "/videos/2520e1_242939bf3eb1423987394b0adb001535.mp4",
        "/images/2520e1_f589b1e2ed8744fd9c261179cff14e5d_mv2.jpg",
        1920,
        1080,
        "Grenade Sports Nutrition — National Sports Day Motion"
      ),
      videoSlide(
        "/videos/2520e1_a0830daff0fc4e5e86d27420745b8508.mp4",
        "/images/2520e1_a0830daff0fc4e5e86d27420745b8508f003.jpg",
        1920,
        1080,
        "Grenade — Freedom in Motion"
      ),
    ],
  },
  {
    id: "qmart-stop-motion-animation",
    category: "animation-motion-design",
    categoryLabel: "Animation & Motion Design",
    categoryHref: "/work",
    platform: "Animation & Motion Design · Stop-Motion & Social",
    name: "Q-Mart — Stop-Motion Animation & Looping Promo",
    seoTitle: "Q-Mart Stop-Motion Animation & Social Motion Graphics",
    seoDescription:
      "Playful stop-motion animation and looping social motion creative conceptualized and animated for Q-Mart.",
    description:
      "Tactile stop-motion animation and looping motion social promo conceptualized, art-directed, and animated for retail brand Q-Mart.",
    overview: [
      "Crafted to stand out organically in fast-scrolling retail feeds, the World Pasta Day stop-motion spot and looping promotional creative pair tactile movement with playful art direction.",
      "Every frame was conceptualized, styled, and animated end to end to give everyday grocery products memorable personality.",
    ],
    capabilities: [
      "Stop-Motion Animation",
      "Looping Social Motion Creatives",
      "Concept & Tactile Set Styling",
    ],
    hasVideo: true,
    preview: "/images/2520e1_fdb6decba33b4781b92e05cc28fcec67f003.jpg",
    slides: [
      videoSlide(
        "/videos/2520e1_fdb6decba33b4781b92e05cc28fcec67.mp4",
        "/images/2520e1_fdb6decba33b4781b92e05cc28fcec67f003.jpg",
        1080,
        1080,
        "Q-Mart — World Pasta Day Stop-Motion Animation"
      ),
      imageSlide(
        "/images/2520e1_982b5f91cef24d28bb80a13aded58c8b_mv2.gif",
        1200,
        1200,
        "Q-Mart — Looping Animated Promo"
      ),
    ],
  },

  // =========================================================================
  // 2. CUSTOM WEBSITE DESIGN
  // =========================================================================
  {
    id: "fabulatte-agency-landing-page-design",
    category: "custom-website-design",
    categoryLabel: "Custom Website Design",
    categoryHref: "/website-design-development/custom-website-design",
    platform: "Custom Website Design · Landing Page Design",
    name: "Fabulatte — Custom Agency Landing Page Design",
    seoTitle: "Fabulatte Custom Agency Landing Page Design",
    seoDescription:
      "Dark-mode custom agency landing page design ('Strategy first. Always.') combining bold hero presentation, custom page layout, and conversion CTAs.",
    description:
      "Full-page dark-mode agency landing page design ('Strategy first. Always.') uniting bold hero device framing, structured section hierarchy, and conversion-focused CTAs.",
    overview: [
      "Designed as a high-impact custom landing page for creative agency Fabulatte, this full-page layout pairs dark-mode editorial contrast with clear service storytelling and direct enquiry prompts.",
      "Every section — from the showreel hero showcase to capability highlights and call-to-action blocks — was structured for responsive desktop and mobile implementation.",
    ],
    capabilities: [
      "Landing Page Design",
      "Creative Website Design",
      "Responsive Website Design",
      "Custom Website Layouts",
    ],
    preview: "/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png",
    slides: [
      imageSlide("/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png", 1920, 2501, "Fabulatte — Full Custom Landing Page Design"),
      imageSlide("/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg", 1920, 1080, "Fabulatte — Hero Showreel Frame"),
    ],
  },
  {
    id: "rezilo-product-launch-website-design",
    category: "custom-website-design",
    categoryLabel: "Custom Website Design",
    categoryHref: "/website-design-development/custom-website-design",
    platform: "Custom Website Design · Responsive Product Web",
    name: "Rezilo — Custom Product Launch & Mobile Website Layouts",
    seoTitle: "Rezilo Custom Product Website & Responsive Mobile Layouts",
    seoDescription:
      "Dark-mode D2C product launch website sections, custom specification graphics, and responsive mobile web layouts designed for recovery brand Rezilo.",
    description:
      "Dark-mode D2C product launch page sections, custom technical specification graphics, and responsive mobile web screens designed for recovery brand Rezilo.",
    overview: [
      "For London recovery technology brand Rezilo, I designed dark-mode product launch web layouts that translate technical device specifications and recovery benefits into clear, persuasive visual sections.",
      "Responsive mobile and desktop layouts maintain consistent cobalt-and-metallic brand atmosphere from hero product showcase through conversion blocks.",
    ],
    capabilities: [
      "Custom Business Website Design",
      "Responsive Website Design",
      "Product Launch Landing Page Design",
      "Interactive Website Experiences",
    ],
    preview: "/images/wetransfer/rezilo/09-chatgpt-image-jul-15-2026-10-58-56-pm.jpg",
    slides: [
      imageSlide("/images/wetransfer/rezilo/09-chatgpt-image-jul-15-2026-10-58-56-pm.jpg", 1536, 1024, "Rezilo — Responsive Mobile Website Screens"),
      imageSlide("/images/wetransfer/rezilo/03-chatgpt-image-jul-15-2026-07-41-56-pm.jpg", 1254, 1254, "Rezilo — Hero Product Feature Section"),
      imageSlide("/images/wetransfer/rezilo/02-chatgpt-image-jul-15-2026-07-32-58-pm.jpg", 1254, 1254, "Rezilo — Technical Specification Iconography"),
      imageSlide("/images/wetransfer/rezilo/04-chatgpt-image-jul-15-2026-08-33-15-pm.jpg", 1254, 1254, "Rezilo — Product Benefit Web Card"),
      imageSlide("/images/wetransfer/rezilo/10-rezilo-end-your-day-better-1200x1200.jpg", 1200, 1200, "Rezilo — Conversion Promo Layout"),
    ],
  },
  {
    id: "tratech-corporate-website-redesign",
    category: "custom-website-design",
    categoryLabel: "Custom Website Design",
    categoryHref: "/website-design-development/custom-website-design",
    platform: "Custom Website Design · Website Redesign & Modernization",
    name: "Tratech Consulting — Corporate Website Redesign & Visual System",
    seoTitle: "Tratech Consulting Corporate Website Redesign & Modular Layouts",
    seoDescription:
      "Corporate website modernization for Tratech Consulting featuring modular web page layouts, Silka & Poppins web typography, and custom digital iconography.",
    description:
      "Corporate website modernization featuring modular page layout templates, custom web iconography, Silka & Poppins web typography, and digital colour architecture.",
    overview: [
      "Tratech Consulting commissioned a comprehensive digital brand evolution and corporate website modernization to communicate technical authority across competitive B2B markets.",
      "The resulting custom website layout system pairs structured Silka and Poppins web typography with bespoke iconography, balanced colour palettes, and reusable page section templates ready for CMS development.",
    ],
    capabilities: [
      "Website Redesign & Modernization",
      "Custom Business Website Design",
      "Custom Website Layouts",
      "Web Typography & Iconography",
    ],
    preview: "/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png",
    slides: [
      imageSlide("/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png", 1366, 768, "Tratech — Digital Web System Overview"),
      imageSlide("/images/2520e1_67e9549ba4e842a2b40101ae6b5ce8b8_mv2.png", 1366, 768, "Tratech — Custom Web Iconography"),
      imageSlide("/images/2520e1_e39a8141703b42119dcd0fadc8971fc9_mv2.png", 1366, 768, "Tratech — Web Typography Hierarchy"),
      imageSlide("/images/2520e1_65f0a9ff3b1a4ca58727392336f7a034_mv2.png", 1366, 768, "Tratech — Digital Colour Architecture"),
      imageSlide("/images/2520e1_aafe43cb93724db68fce8f354f1e96e2_mv2.png", 1366, 768, "Tratech — Modular Website Page Templates"),
    ],
  },
  {
    id: "admiah-digital-business-website-design",
    category: "custom-website-design",
    categoryLabel: "Custom Website Design",
    categoryHref: "/website-design-development/custom-website-design",
    platform: "Custom Website Design · Custom Business Website Design",
    name: "Admiah Digital — Agency Website Grid & Visual Direction",
    seoTitle: "Admiah Digital Custom Business Website Grid & Visual Direction",
    seoDescription:
      "Digital-first business website layout grids, web typography, and dark/light colour architecture created for Google Ads agency Admiah Digital.",
    description:
      "Digital-first business website visual direction defining geometric grid construction, responsive web typography, and dark/light brand colour schemes.",
    overview: [
      "Created for performance marketing and Google Ads agency Admiah Digital, this digital-first visual foundation establishes crisp geometric layout grids, legible web typography, and high-contrast dark and light colour schemes.",
      "Every element was engineered to scale consistently across agency landing pages, case-study sections, and paid digital placements.",
    ],
    capabilities: [
      "Custom Business Website Design",
      "Landing Page Design",
      "Custom Website Layouts",
      "Responsive Web Colour & Type Direction",
    ],
    preview: "/images/2520e1_427eb28792ed4b338d7840f790a5c0bb_mv2.png",
    slides: [
      imageSlide("/images/2520e1_427eb28792ed4b338d7840f790a5c0bb_mv2.png", 1366, 768, "Admiah Digital — Dark Web Brand Lockup"),
      imageSlide("/images/2520e1_250c8754a68d4cf5a24bba9aae4769da_mv2.png", 1366, 768, "Admiah Digital — Geometric Grid Structure"),
      imageSlide("/images/2520e1_4c1ffe21fc6d4e48bd7e9e0531162b3d_mv2.png", 1366, 768, "Admiah Digital — Web Typography"),
      imageSlide("/images/2520e1_af893d32e393440587c7434a1b338b0f_mv2.png", 1366, 768, "Admiah Digital — Digital Colour Palette"),
      imageSlide("/images/2520e1_f7784e764260440989fc17151f91cad5_mv2.png", 1366, 768, "Admiah Digital — Web Hex Specifications"),
    ],
  },
  {
    id: "desi-chai-creative-website-layouts",
    category: "custom-website-design",
    categoryLabel: "Custom Website Design",
    categoryHref: "/website-design-development/custom-website-design",
    platform: "Custom Website Design · Creative Website Design",
    name: "Desi Chai London — Web Typography, Colour & Editorial Grids",
    seoTitle: "Desi Chai London Creative Website Layouts & Typography System",
    seoDescription:
      "Hospitality web typography scales (Mohabatin & Montserrat), hex colour palette, and editorial layout grids crafted for Desi Chai London.",
    description:
      "Expressive hospitality web typography scales (Mohabatin & Montserrat), hex colour specifications, and responsive editorial layout grids for Desi Chai London.",
    overview: [
      "For London hospitality brand Desi Chai London, I developed the digital typography hierarchy, warm spice-inspired hex colour system, and editorial web layout grids connecting physical café culture with online storytelling.",
      "Display and body type pairings ensure strong personality on hero headers alongside clean readability across menus, location pages, and mobile screens.",
    ],
    capabilities: [
      "Creative Website Design",
      "Custom Website Layouts",
      "Responsive Web Typography & Colour Systems",
    ],
    preview: "/images/wetransfer/desi-chai-london/08-slide-6.jpg",
    slides: [
      imageSlide("/images/wetransfer/desi-chai-london/08-slide-6.jpg", 1920, 1080, "Desi Chai London — Digital Brand & Layout Overview"),
      imageSlide("/images/wetransfer/desi-chai-london/04-slide-10.jpg", 1920, 1080, "Desi Chai London — Web Typography Scale"),
      imageSlide("/images/wetransfer/desi-chai-london/09-slide-8.jpg", 1920, 1080, "Desi Chai London — Web Hex Colour System"),
      imageSlide("/images/wetransfer/desi-chai-london/06-slide-4.jpg", 1920, 1080, "Desi Chai London — Editorial Layout Grid I"),
      imageSlide("/images/wetransfer/desi-chai-london/11-slide-7.jpg", 1920, 1080, "Desi Chai London — Editorial Layout Grid II"),
    ],
  },
  {
    id: "dewa-trust-responsive-web-headers",
    category: "custom-website-design",
    categoryLabel: "Custom Website Design",
    categoryHref: "/website-design-development/custom-website-design",
    platform: "Custom Website Design · Custom Website Layouts",
    name: "Dewa Trust — Responsive Widescreen Web Portal Headers",
    seoTitle: "Dewa Trust Responsive Web Portal Hero Banners & Layouts",
    seoDescription:
      "1702×630 widescreen institutional web portal hero banners ('Born To Stand Out!') framed for desktop and tablet website layouts.",
    description:
      "1702×630 widescreen institutional website hero banners ('Born To Stand Out!') framed cleanly for responsive desktop and tablet viewports.",
    overview: [
      "Designed for inclusive education institution Dewa Trust, these widescreen website hero banners establish an uplifting focal point across institutional portal and campaign landing pages.",
      "Safe-zone composition keeps photography, headline messaging, and calls to action balanced across desktop monitors and tablet breakpoints.",
    ],
    capabilities: [
      "Custom Website Layouts",
      "Responsive Website Design",
      "Institutional Web Banner Direction",
    ],
    preview: "/images/wetransfer/dewa-trust/01-cover-photo.jpg",
    slides: [
      imageSlide("/images/wetransfer/dewa-trust/01-cover-photo.jpg", 1702, 630, "Dewa Trust — Widescreen Website Hero I"),
      imageSlide("/images/wetransfer/dewa-trust/02-cover-photo2.jpg", 1702, 630, "Dewa Trust — Widescreen Website Hero II"),
    ],
  },
  {
    id: "totle-responsive-mobile-web-screens",
    category: "custom-website-design",
    categoryLabel: "Custom Website Design",
    categoryHref: "/website-design-development/custom-website-design",
    platform: "Custom Website Design · Responsive Website Design",
    name: "Totle Kidswear — Responsive Mobile Web & Digital Brand Layouts",
    seoTitle: "Totle Kidswear Responsive Mobile Website Screens & Brand Design",
    seoDescription:
      "Playful responsive mobile website layouts, digital colour system, and web typography created for children's apparel brand Totle.",
    description:
      "Playful responsive mobile web screens, vibrant digital colour palette, and custom typography designed for children's fashion label Totle.",
    overview: [
      "Created for children's apparel label Totle, these responsive mobile web layouts translate energetic mascot branding and vibrant colour palettes into intuitive mobile browsing experiences.",
      "High-contrast typography and touch-friendly product presentation keep mobile retail exploration joyful and effortless.",
    ],
    capabilities: [
      "Responsive Website Design",
      "Creative Website Design",
      "Mobile-First Retail Web Layouts",
    ],
    preview: "/images/2520e1_77f8426bbb934b4389d6813d29987856_mv2.jpg",
    slides: [
      imageSlide("/images/2520e1_77f8426bbb934b4389d6813d29987856_mv2.jpg", 8000, 4501, "Totle — Responsive Mobile Web Screens"),
      imageSlide("/images/2520e1_beee4da7e3ec488bb61b3f3903bead08_mv2.jpg", 8000, 4501, "Totle — Digital Colour System"),
      imageSlide("/images/2520e1_df25d33bc58443ada8c3962e8f003f36_mv2.jpg", 8000, 4501, "Totle — Web Typography"),
    ],
  },
  {
    id: "titan-responsive-html-campaign-layouts",
    category: "custom-website-design",
    categoryLabel: "Custom Website Design",
    categoryHref: "/website-design-development/custom-website-design",
    platform: "Custom Website Design · Responsive Digital Layouts",
    name: "Titan — Responsive HTML Digital Campaign Layouts",
    seoTitle: "Titan Responsive HTML Digital Campaign & Emailer Layouts",
    seoDescription:
      "7-part responsive digital HTML emailer and editorial campaign layout series created for Titan (TATA Group).",
    description:
      "7-part vertical digital HTML campaign and emailer series combining scannable editorial grids with clear responsive typographic hierarchy.",
    overview: [
      "Commissioned for Titan (TATA Group), this 7-part digital communication series uses structured single-column responsive layouts that render cleanly across desktop and mobile clients.",
      "Thoughtful illustration framing, generous whitespace, and clear typographic rhythm turn complex organizational themes into engaging digital reading experiences.",
    ],
    capabilities: [
      "Responsive Digital & HTML Layouts",
      "Custom Editorial Grid Design",
      "Visual Storytelling",
    ],
    preview: "/images/2520e1_4afb83907f1e4d28ad0be27a9fc8f6da_mv2.jpg",
    slides: [
      imageSlide("/images/2520e1_4afb83907f1e4d28ad0be27a9fc8f6da_mv2.jpg", 1080, 1504, "Titan Responsive Digital Layout I"),
      imageSlide("/images/2520e1_b2aa1028fb6e4becaf76dfd0a247075c_mv2.jpg", 1080, 1350, "Titan Responsive Digital Layout II"),
      imageSlide("/images/2520e1_f66eb05535754e0980a30406e84a3c53_mv2.jpg", 2481, 3508, "Titan Responsive Digital Layout III"),
      imageSlide("/images/2520e1_52cc7d1aefb2434586de5a0bbac2c0c8_mv2.jpg", 2481, 3508, "Titan Responsive Digital Layout IV"),
    ],
  },

  // =========================================================================
  // 3. WORDPRESS WEBSITE DEVELOPMENT
  // =========================================================================
  {
    id: "wordpress-custom-business-websites",
    category: "wordpress",
    categoryLabel: "WordPress",
    categoryHref: "/website-design-development/wordpress",
    platform: "WordPress Website Development · Custom Themes, ACF & WooCommerce",
    name: "Custom WordPress Business Websites & Theme Development",
    seoTitle: "Custom WordPress Business Website Design & Theme Development",
    seoDescription:
      "Bespoke WordPress website development combining custom landing and corporate layouts with PHP themes, ACF/Gutenberg blocks, and WooCommerce.",
    description:
      "Custom-designed and developed WordPress business websites built with bespoke PHP themes, structured ACF/Gutenberg & Elementor Pro architectures, and WooCommerce. Client URLs shared on request.",
    overview: [
      "I design and develop custom WordPress websites from the ground up so businesses get a distinctive, conversion-ready visual presence paired with clean, maintainable CMS management.",
      "Builds cover custom PHP theme development, flexible Advanced Custom Fields (ACF) and block templates, technical on-page SEO, Core Web Vitals optimization, and WooCommerce integration.",
    ],
    capabilities: [
      "WordPress Website Development",
      "Custom PHP Theme & Block Development",
      "Custom Business Website Design & Redesign",
      "WooCommerce & Lead-Generation Builds",
    ],
    preview: "/images/2520e1_aafe43cb93724db68fce8f354f1e96e2_mv2.png",
    slides: [
      imageSlide("/images/2520e1_aafe43cb93724db68fce8f354f1e96e2_mv2.png", 1366, 768, "Modular WordPress CMS Section Architecture"),
      imageSlide("/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png", 1920, 2501, "Custom Conversion Landing Page Layout"),
      imageSlide("/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png", 1366, 768, "Corporate Website Design & Brand System"),
    ],
  },

  // =========================================================================
  // 4. SHOPIFY WEBSITE DEVELOPMENT
  // =========================================================================
  {
    id: "gulahmed-ecommerce-storefront-design",
    category: "shopify",
    categoryLabel: "Shopify",
    categoryHref: "/website-design-development/shopify",
    platform: "Shopify & E-Commerce · Online Storefront & Mobile Retail",
    name: "GulAhmed — Online Storefront Campaigns & Mobile Retail Web",
    seoTitle: "GulAhmed E-Commerce Storefront & Mobile Retail Web Design",
    seoDescription:
      "Online e-commerce storefront banners, launch countdown headers, Ideas Home merchandising cards, and 9:16 mobile shopping screens for GulAhmed.",
    description:
      "Online storefront seasonal clearance banners, launch countdown headers, Ideas Home product merchandising cards, and mobile shopping layouts created for GulAhmed.",
    overview: [
      "Produced for major textile and home retail brand GulAhmed (gulahmedshop.com), this e-commerce storefront suite spans seasonal clearance hero headers, launch countdown banners, Ideas Home collection cards, and 9:16 vertical mobile shopping screens.",
      "Clear pricing hierarchy, promotional urgency, and mobile-first framing support high-volume online retail traffic across desktop and smartphone shoppers.",
    ],
    capabilities: [
      "E-Commerce Storefront Design & Merchandising",
      "Responsive Desktop & Mobile Retail Layouts",
      "High-Volume Seasonal Sale Campaign Visuals",
    ],
    liveUrl: "https://www.gulahmedshop.com",
    liveLabel: "gulahmedshop.com",
    preview: "/images/wetransfer/gulahmed/05-94ad8dbd-a00b-4e3e-9502-412c8b6c5d87.jpg",
    slides: [
      imageSlide("/images/wetransfer/gulahmed/05-94ad8dbd-a00b-4e3e-9502-412c8b6c5d87.jpg", 1280, 1280, "GulAhmed — Online Storefront Sale Hero"),
      imageSlide("/images/wetransfer/gulahmed/04-80984262-135960921193773-3164357274617511936.jpg", 960, 960, "GulAhmed — Year-End Clearance Banner"),
      imageSlide("/images/wetransfer/gulahmed/02-0df19760-32c8-40c7-9663-9b7e1f331a5b.jpg", 1000, 1000, "GulAhmed — Product Pricing Merchandising Card"),
      imageSlide("/images/wetransfer/gulahmed/01-09690142-e80b-4acb-a6bd-a7d128495759.jpg", 1280, 1280, "GulAhmed — Storefront Launch Countdown"),
      imageSlide("/images/wetransfer/gulahmed/06-9a93948b-a794-4c44-8c55-84f08c4b1a84.jpg", 1000, 1000, "GulAhmed Ideas Home — Luxury Collection"),
      imageSlide("/images/wetransfer/gulahmed/07-ad5b4834-8db6-427b-b3e4-f16e28ccb81c.jpg", 720, 1280, "GulAhmed — Mobile Bedding Pricing Layout"),
      imageSlide("/images/wetransfer/gulahmed/03-7eb71849-551b-4795-9350-dc1aa4127cc2.jpg", 720, 1280, "GulAhmed — Mobile Retail Sale Screen"),
    ],
  },
  {
    id: "shopify-gnatural-d2c-storefront",
    category: "shopify",
    categoryLabel: "Shopify",
    categoryHref: "/website-design-development/shopify",
    platform: "Shopify Website Development · OS 2.0, Liquid & D2C Merchandising",
    name: "Shopify Custom Storefront Sections & G'Natural D2C Merchandising",
    seoTitle: "Shopify Storefront Development & G'Natural D2C Merchandising",
    seoDescription:
      "Custom Shopify Online Store 2.0 sections, Liquid product templates, D2C skincare benefit cards, and 4-slide bundle promo carousels.",
    description:
      "Custom Shopify Online Store 2.0 sections, Liquid product templates, skincare product benefit cards, and a 4-slide D2C bundle promo carousel showcased with G'Natural.",
    overview: [
      "Designed and structured for modern Shopify Online Store 2.0 e-commerce builds, this showcase pairs custom Liquid section architecture with conversion-focused D2C skincare product cards and multi-slide bundle carousels created for G'Natural.",
      "Ingredient storytelling, scannable product benefits, and cohesive bundle merchandising help shoppers compare routines quickly and increase average order value.",
    ],
    capabilities: [
      "Shopify Website Development (OS 2.0 & Liquid)",
      "D2C Product Merchandising & Bundle Carousels",
      "Responsive Mobile-First Storefront Design",
    ],
    preview: "/images/wetransfer/g-natural/17-carousel-1.png",
    slides: [
      imageSlide("/images/wetransfer/g-natural/17-carousel-1.png", 600, 600, "G'Natural — D2C Bundle Carousel Slide 01"),
      imageSlide("/images/wetransfer/g-natural/18-carousel-2.png", 600, 600, "G'Natural — D2C Bundle Carousel Slide 02"),
      imageSlide("/images/wetransfer/g-natural/19-carousel-3.png", 600, 600, "G'Natural — D2C Bundle Carousel Slide 03"),
      imageSlide("/images/wetransfer/g-natural/20-carousel-4.png", 600, 600, "G'Natural — D2C Bundle Carousel Slide 04"),
      imageSlide("/images/wetransfer/g-natural/10-april-gn-cc10.png", 900, 900, "G'Natural — Energy Booster Storefront Card"),
      imageSlide("/images/wetransfer/g-natural/13-april-gn-cc4.png", 900, 900, "G'Natural — Deep Pore Detox Scrub Card"),
      imageSlide("/images/wetransfer/g-natural/11-april-gn-cc11.png", 900, 900, "G'Natural — Essential Oil Trio Card"),
    ],
  },

  // =========================================================================
  // 5. CUSTOM WEBSITE DEVELOPMENT — REACT.JS, NEXT.JS & LARAVEL
  // =========================================================================
  {
    id: "reactjs-interactive-gallery-engine",
    category: "custom-website-design",
    subCategory: "reactjs",
    categoryLabel: "Custom Website Development · React.js",
    categoryHref: "/website-design-development/reactjs",
    platform: "Custom Website Development · React.js Interactive Experiences",
    name: "React.js Interactive Media Galleries, Category Filter & Lightbox",
    seoTitle: "React.js Custom Website Development — Interactive Media & Motion",
    seoDescription:
      "Modular React 19 frontend engineering powering masonry, filmstrip, and thumbnail galleries, instant category filtering, and viewport-aware video playback.",
    description:
      "Modular React 19 interactive components powering masonry, grid, and filmstrip galleries, instant category filtering, keyboard lightbox navigation, and viewport-aware video playback.",
    overview: [
      "Engineered within Custom Website Development using React 19 hooks and client component architecture, this interactive media suite powers smooth multi-layout visual storytelling across masonry, grid, horizontal strip, and thumbnail-slider views.",
      "IntersectionObserver-driven video playback, reduced-motion accessibility support, keyboard lightbox controls, and zero-reload category filtering create a fast, tactile browsing experience.",
    ],
    capabilities: [
      "Custom Website Development (React.js)",
      "Interactive Website Experiences",
      "Viewport-Aware Motion & Video Playback",
      "Accessible Keyboard & Touch Controls",
    ],
    preview: "/images/2520e1_c2cb7c4e55574989b6fbf36c7276ee18_mv2.png",
    slides: [
      imageSlide("/images/2520e1_c2cb7c4e55574989b6fbf36c7276ee18_mv2.png", 3456, 2234, "Interactive Media & Split-Frame Presentation"),
      imageSlide("/images/2520e1_d42c85fc1e2e4fdfaced6244ccd3431e_mv2.png", 1080, 1350, "Segmented Interactive Gallery Card"),
    ],
  },

  {
    id: "nextjs-motion-portfolio-website",
    category: "custom-website-design",
    subCategory: "nextjs",
    categoryLabel: "Custom Website Development · Next.js",
    categoryHref: "/website-design-development/nextjs",
    platform: "Custom Website Development · Next.js App Router, Tailwind CSS & SEO",
    name: "Syed Ali Abdul Baqi — Next.js 15 Motion & Web Portfolio Platform",
    seoTitle: "Next.js 15 Custom Website Development — Motion & Creative Platform",
    seoDescription:
      "Custom website designed and developed on Next.js 15 App Router and Tailwind CSS with static generation, scroll-reveal motion, and structured JSON-LD SEO.",
    description:
      "Custom-designed and developed on Next.js 15 App Router and Tailwind CSS — combining static route generation, responsive image optimization, scroll-reveal motion, and structured SEO.",
    overview: [
      "Designed and custom-developed end to end on Next.js 15 App Router with React 19 and Tailwind CSS v4, this platform showcases animation reels, brand campaigns, and custom website builds within a fast dark-theme editorial architecture.",
      "Static route generation, responsive WebP/AVIF image delivery, semantic JSON-LD structured data, and smooth scroll-triggered reveal animations deliver instant load times alongside strong search visibility.",
    ],
    capabilities: [
      "Custom Website Development (Next.js App Router)",
      "Custom Website Design & Responsive Layouts",
      "Scroll-Triggered Motion & Video Showreels",
      "Technical SEO, Sitemap & Structured Data",
    ],
    liveUrl: "https://syedalibaqi.co.uk",
    liveLabel: "syedalibaqi.co.uk",
    preview: "/images/2520e1_b191a0a4b2df483caeae69dd792332e7_mv2.png",
    slides: [
      imageSlide("/images/2520e1_b191a0a4b2df483caeae69dd792332e7_mv2.png", 2880, 1620, "Next.js Showreel & Multi-Device Showcase"),
      imageSlide("/images/2520e1_1065a251d75f4ba1b8e356d00f16129c_mv2.jpg", 1920, 1080, "Next.js Editorial Projects Banner & Layout"),
    ],
  },

  {
    id: "laravel-custom-business-web-applications",
    category: "custom-website-design",
    subCategory: "laravel",
    categoryLabel: "Custom Website Development · Laravel",
    categoryHref: "/website-design-development/laravel",
    platform: "Custom Website Development · Laravel PHP, MySQL, Blade & REST APIs",
    name: "Laravel Custom Business Websites, Portals & Web Applications",
    seoTitle: "Laravel Custom Website Development — Business Portals & Web Apps",
    seoDescription:
      "Full-stack Laravel custom website and web application development by Syed Ali Abdul Baqi covering custom PHP/MySQL schemas, client portals, dashboards, and APIs.",
    description:
      "Full-stack Laravel MVC custom website development covering bespoke business websites, relational MySQL schemas, authenticated portals, dashboards, and RESTful APIs. Walkthroughs shared on request.",
    overview: [
      "As part of Custom Website Development for businesses requiring workflows beyond standard CMS plugins, I design custom front-end layouts and develop full-stack Laravel applications tailored around exact operational logic.",
      "Architecture spans relational MySQL database design, secure role-based authentication, Blade and modern JavaScript frontends, admin reporting dashboards, and third-party API integrations.",
    ],
    capabilities: [
      "Custom Website Development (Laravel)",
      "Custom Business Website Development",
      "Relational MySQL & MVC Backend Engineering",
      "Authenticated Client Portals & REST APIs",
    ],
    preview: "/images/2520e1_67e9549ba4e842a2b40101ae6b5ce8b8_mv2.png",
    slides: [
      imageSlide("/images/2520e1_67e9549ba4e842a2b40101ae6b5ce8b8_mv2.png", 1366, 768, "Custom Web Application Iconography & Modules"),
      imageSlide("/images/2520e1_c746dc4046464d708e4a1d28db020f97_mv2.png", 1366, 768, "Structured Modular Application Framework"),
    ],
  },
];
