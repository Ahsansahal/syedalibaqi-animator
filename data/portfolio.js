/**
 * Multidisciplinary Portfolio Data for Syed Ali Abdul Baqi
 * Visual Artist · Motion Designer · Website Designer & Full-Stack Developer
 *
 * Categories:
 * 1. All Work
 * 2. Motion & Animation (11 video-first motion reels & campaign films)
 * 3. Visual Art & Branding (18 WeTransfer & studio brand, packaging, OOH & campaign series)
 * 4. Website Design (10 UI/UX landing pages, D2C storefronts, design systems & digital layouts)
 * 5. WordPress (Independent CMS platform showcase)
 * 6. Shopify (Independent D2C e-commerce platform showcase)
 * 7. React.js (Interactive UI & media explorer codebase)
 * 8. Next.js (Production Next.js 15 App Router platform)
 * 9. Laravel (Independent full-stack MVC & API platform showcase)
 */

const img = (src, w, h, title) => ({
  type: "image",
  src,
  w,
  h,
  ...(title ? { title } : {}),
});

const vid = (src, poster, w, h, title) => ({
  type: "video",
  src,
  poster,
  w,
  h,
  ...(title ? { title } : {}),
});

export const portfolioCategories = [
  {
    id: "all",
    label: "All Work",
    tagline:
      "41 curated works across visual art & brand campaigns, motion & animation, UI/UX website design, and full-stack web builds.",
  },
  {
    id: "visual-art",
    label: "Visual Art & Branding",
    tagline:
      "Brand identity systems, packaging design, London & mall digital OOH, luxury editorials, conceptual ads, and AI-composited visual art.",
  },
  {
    id: "motion-animation",
    label: "Motion & Animation",
    tagline:
      "Showreels, hero campaign films, kinetic typography, commercial edits, and seamless vertical motion loops.",
  },
  {
    id: "website-design",
    label: "Website Design",
    tagline:
      "Landing page UI, D2C e-commerce storefronts, mobile retail layouts, typography & color token systems, and responsive digital mailers.",
  },
  {
    id: "wordpress",
    label: "WordPress",
    tagline: "Custom PHP themes, Gutenberg & Elementor Pro architectures, and WooCommerce storefronts.",
    platformShowcase: {
      eyebrow: "WordPress Architecture",
      title: "Bespoke WordPress Themes & Scalable CMS Builds",
      summary:
        "Custom WordPress development combining clean PHP template hierarchies, flexible ACF / block editing, GSAP scroll interactions, and fast Core Web Vitals.",
      note: "Live client URLs and private agency builds are shared directly on request.",
      previewVisual: "/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png",
      previewCaption: "Custom Theme & Conversion Layout Architecture",
      capabilities: [
        "Custom PHP & Block Themes",
        "ACF & Structured Content Models",
        "Elementor Pro & Gutenberg Systems",
        "WooCommerce Storefronts & Speed Tuning",
      ],
      stack: ["WordPress", "PHP", "ACF", "WooCommerce", "GSAP", "JavaScript"],
    },
  },
  {
    id: "shopify",
    label: "Shopify",
    tagline: "Shopify OS 2.0 storefronts, custom Liquid sections, and conversion-focused D2C UX.",
    platformShowcase: {
      eyebrow: "Shopify Storefronts",
      title: "Custom Shopify OS 2.0 Themes & Conversion UX",
      summary:
        "Mobile-first Shopify builds engineered with modular Liquid sections, metafield schemas, tactile micro-interactions, and streamlined product-to-cart flows.",
      note: "Live D2C Shopify store links and walkthroughs are available upon inquiry.",
      previewVisual: "/images/wetransfer/gulahmed/05-94ad8dbd-a00b-4e3e-9502-412c8b6c5d87.jpg",
      previewCaption: "D2C Merchandising & Storefront Experience",
      capabilities: [
        "Shopify OS 2.0 Custom Sections",
        "Liquid Templates & Metafields",
        "PDP, Bundle & Slide-Cart UX",
        "Storefront Performance & CRO",
      ],
      stack: ["Shopify", "Liquid", "OS 2.0", "JavaScript", "CSS", "Tailwind CSS"],
    },
  },
  {
    id: "reactjs",
    label: "React.js",
    tagline: "Interactive component systems, stateful media explorers, and smooth client UI.",
  },
  {
    id: "nextjs",
    label: "Next.js",
    tagline: "High-performance Next.js App Router platforms with SSR/SSG and GSAP choreography.",
  },
  {
    id: "laravel",
    label: "Laravel",
    tagline: "Full-stack Laravel web applications, custom dashboards, and REST API backends.",
    platformShowcase: {
      eyebrow: "Laravel Full-Stack",
      title: "Custom Web Applications, Portals & API Backends",
      summary:
        "Structured Laravel MVC engineering covering relational database schemas, Eloquent models, authenticated admin dashboards, and RESTful integrations.",
      note: "Private client portals and codebase walkthroughs are shared on request.",
      previewVisual: "/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png",
      previewCaption: "Full-Stack Application & System Architecture",
      capabilities: [
        "Laravel MVC & Eloquent ORM",
        "Role-Based Dashboards & Portals",
        "RESTful APIs & Third-Party Webhooks",
        "MySQL Schema Design & Security",
      ],
      stack: ["Laravel", "PHP", "MySQL", "REST API", "Blade", "Tailwind CSS"],
    },
  },
];

export const portfolioProjects = [
  // =========================================================================
  // 01 — MOTION DESIGN & ANIMATION (11 Distinct Video-First Projects)
  // =========================================================================
  {
    id: "fabulatte-agency-showreel",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    featuredHome: true,
    gridSpan: "wide",
    aspect: "16 / 9",
    title: "Fabulatte — Creative Agency Showreel",
    shortSummary: "Fast-paced brand showreel blending kinetic typography, whip transitions, and rhythmic motion.",
    thumbnail: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
    previewVideo: "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
    description: [
      "Creative showreel produced for European consultancy Fabulatte, uniting kinetic typography, custom transitions, and sound-synced editorial pacing.",
    ],
    deliverables: [
      "Full HD 16:9 agency showreel",
      "Kinetic typography & custom motion transitions",
      "Rhythmic sound-synced edit",
    ],
    tags: ["Showreel", "Motion Design", "Kinetic Type"],
    media: [
      vid(
        "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
        "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
        1920,
        1080,
        "Fabulatte — Creative Showreel"
      ),
      img("/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png", 1920, 2501, "Fabulatte — Companion Digital Layout"),
    ],
  },
  {
    id: "animated-album-canvas-ai",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    featuredHome: true,
    gridSpan: "narrow",
    aspect: "9 / 14",
    title: "Spotify Canvas & Generative Loops",
    shortSummary: "Seamless 9:16 vertical motion loops and AI-composited animations crafted in After Effects.",
    thumbnail: "/images/2520e1_77f7f535c0984cdb818f8f478e7121c6f000.jpg",
    previewVideo: "/videos/2520e1_77f7f535c0984cdb818f8f478e7121c6.mp4",
    description: [
      "Looping vertical Spotify Canvas animations and AI-assisted motion sequences composited and finished in After Effects.",
    ],
    deliverables: [
      "9:16 seamless Spotify Canvas motion loops",
      "After Effects compositing & animated GIF loops",
    ],
    tags: ["Motion Loops", "After Effects", "Visual Motion"],
    media: [
      vid(
        "/videos/2520e1_77f7f535c0984cdb818f8f478e7121c6.mp4",
        "/images/2520e1_77f7f535c0984cdb818f8f478e7121c6f000.jpg",
        1080,
        1920,
        "Animated Canvas — Chill Out Tim"
      ),
      vid(
        "/videos/2520e1_6cfee54e92444b3db995852447b996ea.mp4",
        "/images/2520e1_6cfee54e92444b3db995852447b996eaf000.jpg",
        1080,
        1920,
        "Animated Canvas — Deserted Space"
      ),
      vid(
        "/videos/2520e1_713879b437254f4f90a1aca7b92f0f0c.mp4",
        "/images/2520e1_713879b437254f4f90a1aca7b92f0f0cf003.jpg",
        1080,
        1920,
        "Vertical Generative Motion Reel"
      ),
      vid(
        "/videos/2520e1_796bfab1a901435fa0f88b0f4dccdb9b.mp4",
        "/images/2520e1_796bfab1a901435fa0f88b0f4dccdb9bf003.jpg",
        1920,
        1080,
        "See Life With Clarity — Motion Sequence"
      ),
      vid(
        "/videos/2520e1_4481373c771543d19a27ea4d78531c32.mp4",
        "/images/2520e1_4481373c771543d19a27ea4d78531c32f003.jpg",
        1080,
        1350,
        "Day & Night Motion Composite"
      ),
      img("/images/2520e1_e73f268a1c4c4b0ab940fc8728a86ae3_mv2.gif", 1080, 1080, "Animated Artwork Loop (GIF)"),
    ],
  },
  {
    id: "evo-icl-superpower-motion",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    featuredHome: true,
    gridSpan: "lead",
    aspect: "16 / 9",
    title: "EVO ICL — 'What's Your Superpower?' Hero Film",
    shortSummary: "Global hero film reframing vision correction around everyday lifestyle storytelling.",
    thumbnail: "/images/2520e1_7a25770b0b454a53a033770487dbc8acf002.jpg",
    previewVideo: "/videos/2520e1_7a25770b0b454a53a033770487dbc8ac.mp4",
    caseStudyHref: "/case-study",
    description: [
      "Flagship hero film ('What's Your Superpower?') and lifestyle visual segmentation produced for global vision correction brand EVO ICL across digital channels and international events.",
    ],
    deliverables: [
      "Event & digital Hero Film ('What's Your Superpower?')",
      "Fearless, Creator & Timeless visual segments",
    ],
    tags: ["Hero Film", "Visual Storytelling", "Cinematography"],
    media: [
      vid(
        "/videos/2520e1_7a25770b0b454a53a033770487dbc8ac.mp4",
        "/images/2520e1_7a25770b0b454a53a033770487dbc8acf002.jpg",
        1920,
        1080,
        "EVO ICL — Hero Film: What's Your Superpower?"
      ),
      img("/images/2520e1_d42c85fc1e2e4fdfaced6244ccd3431e_mv2.png", 1080, 1350, "EVO ICL — For The Fearless"),
      img("/images/2520e1_7816963a0b334a9499674f179423d05e_mv2.png", 1080, 1350, "EVO ICL — For The Creator"),
      img("/images/2520e1_dc367bda52954241818657325c866726_mv2.png", 1080, 1350, "EVO ICL — For The Timeless"),
    ],
  },
  {
    id: "oral-reconstruction-symposium-lisbon",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    featuredHome: true,
    gridSpan: "companion",
    aspect: "16 / 10",
    title: "Oral Reconstruction Symposium — Lisbon",
    shortSummary: "High-energy Lisbon conference promo film driven by bold kinetic typography and rapid cuts.",
    thumbnail: "/images/2520e1_894e994732e24e81ae31dcc9d9853a37f003.jpg",
    previewVideo: "/videos/2520e1_894e994732e24e81ae31dcc9d9853a37.mp4",
    description: [
      "International event promo film for the Oral Reconstruction International Symposium in Lisbon, Portugal — combining bold kinetic typography with rapid destination sequences.",
    ],
    deliverables: [
      "16:9 international conference promo film",
      "Kinetic title cards & animated transitions",
    ],
    tags: ["Kinetic Type", "Lisbon Event", "Promo Film"],
    media: [
      vid(
        "/videos/2520e1_894e994732e24e81ae31dcc9d9853a37.mp4",
        "/images/2520e1_894e994732e24e81ae31dcc9d9853a37f003.jpg",
        1920,
        1080,
        "Oral Reconstruction Symposium — Promo Film"
      ),
      img("/images/2520e1_a668f41910664af6b6eb306c24255583_mv2.png", 1920, 1080, "Symposium Title Lockup"),
      img("/images/2520e1_b8c4725627014866b7466dba07fd44c4_mv2.png", 1920, 1080, "Lisbon Global Emblem"),
    ],
  },
  {
    id: "staar-surgical-project-bronze",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    featuredHome: true,
    gridSpan: "half",
    aspect: "16 / 9",
    title: "STAAR Surgical × Lucy Bronze MBE",
    shortSummary: "Athlete partnership motion film and broadcast-inspired UK campaign rollout.",
    thumbnail: "/images/2520e1_13127af86a0c48479b5b905dbf3cc4d1f002.jpg",
    previewVideo: "/videos/2520e1_13127af86a0c48479b5b905dbf3cc4d1.mp4",
    description: [
      "Sports motion campaign starring England footballer Lucy Bronze MBE for STAAR Surgical, featuring dynamic pacing, portrait key visuals, and broadcast-style typography.",
    ],
    deliverables: [
      "16:9 athlete partnership motion film",
      "Portrait social & editorial campaign visuals",
    ],
    tags: ["Sports Motion", "UK Campaign", "Broadcast Type"],
    media: [
      vid(
        "/videos/2520e1_13127af86a0c48479b5b905dbf3cc4d1.mp4",
        "/images/2520e1_13127af86a0c48479b5b905dbf3cc4d1f002.jpg",
        1920,
        1080,
        "STAAR Surgical × Lucy Bronze — Motion Film"
      ),
      img("/images/2520e1_6374251645a145bcae69ad7ea8242a9a_mv2.jpg", 1081, 1351, "Lucy Bronze × EVO ICL"),
      img("/images/2520e1_647f5dbabc094630b14dcea3264c21da_mv2.jpg", 1081, 1351, "Editorial Monochrome Frame"),
      img("/images/2520e1_bb91e56a661346419c1b46e6f23b035e_mv2.jpg", 1081, 1351, "Sharp Vision On Pitch"),
    ],
  },
  {
    id: "grenade-motion-films",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    featuredHome: true,
    gridSpan: "half",
    aspect: "16 / 9",
    title: "Grenade Sports Nutrition — Motion Films",
    shortSummary: "End-to-end concept, art direction, and animated brand films for Grenade activations.",
    thumbnail: "/images/2520e1_a0830daff0fc4e5e86d27420745b8508f003.jpg",
    previewVideo: "/videos/2520e1_242939bf3eb1423987394b0adb001535.mp4",
    description: [
      "Animated campaign videos crafted from concept through motion execution for sports nutrition leader Grenade.",
    ],
    deliverables: [
      "National Sports Day & Independence Day motion films",
      "Product launch graphics",
    ],
    tags: ["Sports Nutrition", "Motion Design", "Brand Film"],
    media: [
      vid(
        "/videos/2520e1_242939bf3eb1423987394b0adb001535.mp4",
        "/images/2520e1_242939bf3eb1423987394b0adb001535f003.jpg",
        1920,
        1080,
        "Grenade — National Sports Day Motion"
      ),
      vid(
        "/videos/2520e1_a0830daff0fc4e5e86d27420745b8508.mp4",
        "/images/2520e1_a0830daff0fc4e5e86d27420745b8508f003.jpg",
        1920,
        1080,
        "Grenade — Independence Day Animation"
      ),
      img("/images/2520e1_f589b1e2ed8744fd9c261179cff14e5d_mv2.jpg", 1200, 743, "Grenade — Campaign Visual"),
    ],
  },
  {
    id: "evo-icl-impact-showreel",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    gridSpan: "lead",
    aspect: "16 / 9",
    title: "EVO ICL — 90s Annual Brand Impact Showreel",
    shortSummary: "90-second international marketing impact showreel and square social motion spots.",
    thumbnail: "/images/2520e1_197f1593b401417482c1ce67cbc94719f003.jpg",
    previewVideo: "/videos/2520e1_197f1593b401417482c1ce67cbc94719.mp4",
    caseStudyHref: "/case-study",
    description: [
      "90-second annual brand partnership showreel bringing together international creative direction, social motion assets, and measurable audience growth.",
    ],
    deliverables: [
      "90-second 16:9 annual impact showreel",
      "1:1 Clear Vision motion spot",
    ],
    tags: ["Impact Reel", "Motion Graphics", "Global Campaign"],
    media: [
      vid(
        "/videos/2520e1_197f1593b401417482c1ce67cbc94719.mp4",
        "/images/2520e1_197f1593b401417482c1ce67cbc94719f003.jpg",
        1920,
        1080,
        "EVO ICL — 90s Annual Impact Showreel"
      ),
      vid(
        "/videos/2520e1_8281e3fb86384d9ea9115beb58e4d587.mp4",
        "/images/2520e1_8281e3fb86384d9ea9115beb58e4d587f003.jpg",
        1080,
        1080,
        "EVO ICL — Clear Vision 1:1 Motion Spot"
      ),
    ],
  },
  {
    id: "david-lloyd-staar-reels",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    gridSpan: "companion",
    aspect: "16 / 10",
    title: "David Lloyd × STAAR — Vertical Social Reels",
    shortSummary: "High-retention 9:16 vertical motion reels produced for UK health & club partnerships.",
    thumbnail: "/images/2520e1_5af6ac55bbc94681bdf2b1c76760e019f003.jpg",
    previewVideo: "/videos/2520e1_5af6ac55bbc94681bdf2b1c76760e019.mp4",
    description: [
      "Mobile-first 9:16 vertical motion reels created for the David Lloyd Clubs × STAAR Surgical UK lifestyle activation.",
    ],
    deliverables: [
      "9:16 Reels & TikTok motion cuts",
      "Animated caption & brand overlays",
    ],
    tags: ["Vertical Reels", "Social Motion", "UK Partnership"],
    media: [
      vid(
        "/videos/2520e1_5af6ac55bbc94681bdf2b1c76760e019.mp4",
        "/images/2520e1_5af6ac55bbc94681bdf2b1c76760e019f003.jpg",
        1080,
        1920,
        "David Lloyd × STAAR — Vertical Motion Reel"
      ),
      vid(
        "/videos/2520e1_fffdf32433d84d0db760e794b13527a6.mp4",
        "/images/2520e1_fffdf32433d84d0db760e794b13527a6f003.jpg",
        1080,
        1920,
        "EVO ICL — Vertical Lifestyle Reel"
      ),
    ],
  },
  {
    id: "ocl-vision-motion-campaign",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    gridSpan: "third",
    aspect: "16 / 10",
    title: "OCL Vision — 'Make the Switch' Film",
    shortSummary: "Lifestyle motion spot and split-frame visual campaign for London eye clinic OCL Vision.",
    thumbnail: "/images/2520e1_c458a697031a477fb59c0adb4bf3b8e1f000.jpg",
    previewVideo: "/videos/2520e1_c458a697031a477fb59c0adb4bf3b8e1.mp4",
    description: [
      "'Make the Switch' integrated motion and print/digital campaign crafted for London clinic OCL Vision.",
    ],
    deliverables: [
      "16:9 'Make the Switch' motion spot",
      "Split-perspective campaign key visuals",
    ],
    tags: ["Healthcare Motion", "London", "Campaign Film"],
    media: [
      vid(
        "/videos/2520e1_c458a697031a477fb59c0adb4bf3b8e1.mp4",
        "/images/2520e1_c458a697031a477fb59c0adb4bf3b8e1f000.jpg",
        1920,
        1080,
        "OCL Vision — Make the Switch Film"
      ),
      img("/images/2520e1_0cbe37ed1648498890f6808f09967b77_mv2.jpg", 1080, 1351, "Make the Switch — Key Visual"),
      img("/images/2520e1_58ef680ab194452cb272025c445cff41_mv2.jpg", 1080, 1351, "Lifestyle Split Visual"),
    ],
  },
  {
    id: "ocl-vision-youtube-commercial",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    gridSpan: "third",
    aspect: "16 / 10",
    title: "OCL Vision — Laser Vision YouTube Ad",
    shortSummary: "Narrative YouTube commercial pairing everyday humour with crisp motion supers.",
    thumbnail: "/images/2520e1_496ea031ef16481f845a2511d960b811f003.jpg",
    previewVideo: "/videos/2520e1_496ea031ef16481f845a2511d960b811.mp4",
    description: [
      "Narrative YouTube commercial highlighting everyday contact-lens and glasses frustrations with clean typographic callouts.",
    ],
    deliverables: [
      "Full HD 16:9 YouTube pre-roll commercial",
      "Motion title cards & endframe",
    ],
    tags: ["YouTube Ad", "Cinematography", "Motion Type"],
    media: [
      vid(
        "/videos/2520e1_496ea031ef16481f845a2511d960b811.mp4",
        "/images/2520e1_496ea031ef16481f845a2511d960b811f003.jpg",
        1920,
        1080,
        "OCL Vision — Laser Vision YouTube Commercial"
      ),
    ],
  },
  {
    id: "qmart-motion-social",
    category: "motion-animation",
    categoryLabel: "Motion & Animation",
    gridSpan: "third",
    aspect: "16 / 10",
    title: "Q Mart — Stop-Motion & Retail GIFs",
    shortSummary: "Tactile square-format stop-motion animation and looping GIF promos for retail.",
    thumbnail: "/images/2520e1_fdb6decba33b4781b92e05cc28fcec67f003.jpg",
    previewVideo: "/videos/2520e1_fdb6decba33b4781b92e05cc28fcec67.mp4",
    description: [
      "Playful stop-motion-inspired animation and animated GIF visuals crafted for retail brand Q Mart.",
    ],
    deliverables: [
      "World Pasta Day 1:1 motion animation",
      "Animated retail GIF creative",
    ],
    tags: ["Stop-Motion", "GIF Animation", "Food & Retail"],
    media: [
      vid(
        "/videos/2520e1_fdb6decba33b4781b92e05cc28fcec67.mp4",
        "/images/2520e1_fdb6decba33b4781b92e05cc28fcec67f003.jpg",
        1080,
        1080,
        "Q Mart — World Pasta Day Motion"
      ),
      img("/images/2520e1_982b5f91cef24d28bb80a13aded58c8b_mv2.gif", 1200, 1200, "Q Mart — Animated GIF Tribute"),
    ],
  },

  // =========================================================================
  // 02 — VISUAL ART, BRAND IDENTITY, PACKAGING & CAMPAIGNS (18 Projects)
  // =========================================================================
  {
    id: "chatori-brand-menu-identity",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    featuredHome: true,
    gridSpan: "lead",
    aspect: "16 / 10",
    title: "Chatori — Desi Pop-Art Identity & Menu Design",
    shortSummary: "Vibrant Desi street-food brand identity, custom emblem, and full illustrated menu architecture.",
    thumbnail: "/images/wetransfer/chatori/12-chatgpt-image-jul-29-2026-06-41-22-pm.jpg",
    description: [
      "Expressive Desi pop-art visual identity for street-food brand Chatori, spanning logo emblem craft, vibrant key visuals, and structured full-page menu design.",
    ],
    deliverables: [
      "Custom Chatori brand mark & colour world",
      "Full illustrated hospitality menu layout",
      "Launch key visual",
    ],
    tags: ["Visual Art", "Brand Identity", "Menu Design"],
    media: [
      img("/images/wetransfer/chatori/12-chatgpt-image-jul-29-2026-06-41-22-pm.jpg", 1536, 1024, "Chatori — Brand Key Visual"),
      img("/images/wetransfer/chatori/08-chatgpt-image-jul-28-2026-09-58-00-pm.jpg", 1086, 1448, "Chatori — Full Illustrated Menu Design"),
      img("/images/wetransfer/chatori/01-chatgpt-image-jul-28-2026-05-57-48-pm.png", 1254, 1254, "Chatori — Primary Brand Mark"),
    ],
  },
  {
    id: "rezilo-london-ooh-campaign",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    featuredHome: true,
    gridSpan: "companion",
    aspect: "4 / 3.35",
    title: "Rezilo — London Underground & Transit OOH",
    shortSummary: "High-impact London Underground, Paddington, Victoria, and street transit billboard campaign.",
    thumbnail: "/images/wetransfer/rezilo/07-chatgpt-image-jul-15-2026-10-02-01-pm.jpg",
    description: [
      "Out-of-home campaign rollout across London Underground carriages, Paddington & Victoria station billboards, and street-level transit shelters for recovery brand Rezilo.",
    ],
    deliverables: [
      "Paddington & Victoria station billboard visuals",
      "London Underground & street transit placements",
      "Dark-mode wordmark & cobalt brand lockups",
    ],
    tags: ["London OOH", "Art Direction", "Brand Rollout"],
    media: [
      img("/images/wetransfer/rezilo/07-chatgpt-image-jul-15-2026-10-02-01-pm.jpg", 1535, 1024, "Rezilo — Paddington Station Billboard"),
      img("/images/wetransfer/rezilo/08-chatgpt-image-jul-15-2026-10-04-03-pm.jpg", 1535, 1024, "Rezilo — Victoria Platform Display"),
      img("/images/wetransfer/rezilo/06-chatgpt-image-jul-15-2026-09-59-19-pm.jpg", 1536, 1024, "Rezilo — London Underground Interior Banner"),
      img("/images/wetransfer/rezilo/05-chatgpt-image-jul-15-2026-09-30-58-pm.jpg", 1254, 1254, "Rezilo — Street Transit Shelter"),
      img("/images/wetransfer/rezilo/01-chatgpt-image-jul-15-2026-06-59-10-pm.png", 1536, 1024, "Rezilo — Metallic Wordmark"),
      img("/images/wetransfer/rezilo/11-whatsapp-image-2026-07-14-at-7-24-43-pm.jpg", 1600, 900, "Rezilo — Cobalt Brand Lockup"),
    ],
  },
  {
    id: "yeah-scoopy-digital-ooh",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    featuredHome: true,
    gridSpan: "companion",
    aspect: "4 / 3.35",
    title: "Yeah! Scoopy — Mall Totems & Escalator OOH",
    shortSummary: "Playful escalator murals, mall digital totems, promenade banners, and summer OOH posters.",
    thumbnail: "/images/wetransfer/yeah-scoopy/04-chatgpt-image-jul-17-2026-07-32-15-pm.jpg",
    description: [
      "Environmental and digital OOH campaign for artisanal ice cream brand Yeah! Scoopy, bringing pastel joy across mall escalator murals, vertical digital totems, and outdoor promenade banners.",
    ],
    deliverables: [
      "Shopping mall escalator mural & digital totem screens",
      "Outdoor promenade banners & summer lifestyle posters",
    ],
    tags: ["Digital OOH", "Environmental Art", "Food & Beverage"],
    media: [
      img("/images/wetransfer/yeah-scoopy/04-chatgpt-image-jul-17-2026-07-32-15-pm.jpg", 1536, 1024, "Yeah! Scoopy — Mall Escalator Mural"),
      img("/images/wetransfer/yeah-scoopy/03-chatgpt-image-jul-17-2026-06-46-59-pm.jpg", 1024, 1536, "Yeah! Scoopy — Digital Mall Totem"),
      img("/images/wetransfer/yeah-scoopy/02-chatgpt-image-jul-17-2026-06-43-02-pm.jpg", 1024, 1536, "Yeah! Scoopy — Outdoor Promenade Banner"),
      img("/images/wetransfer/yeah-scoopy/01-chatgpt-image-jul-17-2026-06-32-10-pm.jpg", 1086, 1448, "Yeah! Scoopy — Campaign Poster"),
      img("/images/wetransfer/yeah-scoopy/05-chatgpt-image-jul-17-2026-08-03-56-pm.jpg", 1307, 1203, "Yeah! Scoopy — Summer Lifestyle Key Visual"),
      img("/images/wetransfer/yeah-scoopy/08-chatgpt-image-jul-25-2026-11-25-45-am.jpg", 1122, 1402, "Yeah! Scoopy — Editorial Portrait"),
    ],
  },
  {
    id: "yeah-scoopy-packaging",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    featuredHome: true,
    gridSpan: "lead",
    aspect: "16 / 10",
    title: "Yeah! Scoopy — 5-Flavour Ice Cream Tub Packaging",
    shortSummary: "Pastel artisanal tub packaging line, flavour flatlays, and vertical hero product visuals.",
    thumbnail: "/images/wetransfer/yeah-scoopy/10-chatgpt-image-jul-26-2026-02-53-29-pm.jpg",
    description: [
      "Complete 5-flavour retail tub packaging system and tactile flavour art direction for Yeah! Scoopy across Mint Choc Chip, Vanilla Bean, Strawberry, Pistachio, and Mango.",
    ],
    deliverables: [
      "5-flavour retail ice cream tub packaging range",
      "Overhead flavour flatlays & vertical hero product shots",
    ],
    tags: ["Packaging Design", "Visual Art", "Product Direction"],
    media: [
      img("/images/wetransfer/yeah-scoopy/10-chatgpt-image-jul-26-2026-02-53-29-pm.jpg", 1672, 941, "Yeah! Scoopy — Full 5-Flavour Tub Lineup"),
      img("/images/wetransfer/yeah-scoopy/11-chatgpt-image-jul-26-2026-03-58-01-pm.jpg", 1402, 1122, "Yeah! Scoopy — Overhead Flavour Flatlay"),
      img("/images/wetransfer/yeah-scoopy/06-chatgpt-image-jul-25-2026-05-02-50-pm.jpg", 941, 1672, "Yeah! Scoopy — Mint Choc Chip Tub"),
      img("/images/wetransfer/yeah-scoopy/07-chatgpt-image-jul-25-2026-05-07-44-pm.jpg", 941, 1672, "Yeah! Scoopy — Vanilla Bean Tub"),
      img("/images/wetransfer/yeah-scoopy/09-chatgpt-image-jul-26-2026-01-11-48-pm.jpg", 1023, 1537, "Yeah! Scoopy — Multi-Scoop Editorial"),
    ],
  },
  {
    id: "lure-jewellery-editorial",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    featuredHome: true,
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Lure Jewellery — Monochrome & Gold Editorial",
    shortSummary: "Selective champagne-gold and monochrome luxury art direction for statement jewellery.",
    thumbnail: "/images/wetransfer/lure-jewellery/07-lure-may-cc8.png",
    description: [
      "High-contrast monochrome photography paired with selective champagne-gold jewellery highlights and refined serif editorial typography for Lure.",
    ],
    deliverables: [
      "Glamour, Go Bold & Ear Pieces editorial visuals",
      "Luxury collection lookbook cards",
    ],
    tags: ["Luxury Editorial", "Art Direction", "Visual Design"],
    media: [
      img("/images/wetransfer/lure-jewellery/07-lure-may-cc8.png", 900, 900, "Lure Jewellery — Glamour Editorial"),
      img("/images/wetransfer/lure-jewellery/08-lure-may-cc9.png", 900, 900, "Lure Jewellery — Go Bold Statement"),
      img("/images/wetransfer/lure-jewellery/05-lure-may-cc1.png", 900, 900, "Lure Jewellery — Sculptural Ear Pieces"),
      img("/images/wetransfer/lure-jewellery/06-lure-may-cc6.png", 900, 900, "Lure Jewellery — Signature Collection"),
    ],
  },
  {
    id: "g-natural-botanical-art",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    featuredHome: true,
    gridSpan: "third",
    aspect: "1 / 1",
    title: "G'Natural — Botanical Essential Oil Art Direction",
    shortSummary: "9 lush botanical visual compositions for Orange, Rosehip, Lavender, Almond & Tea Tree oils.",
    thumbnail: "/images/wetransfer/g-natural/02-04d.png",
    description: [
      "9-part botanical product art direction series blending natural ingredient photography, soft shadows, and colour-coded skincare storytelling for G'Natural.",
    ],
    deliverables: [
      "9 botanical essential oil & herbal blend visuals",
      "Ingredient-led colour & composition direction",
    ],
    tags: ["Product Art", "Health & Wellness", "Visual Storytelling"],
    media: [
      img("/images/wetransfer/g-natural/02-04d.png", 800, 800, "G'Natural — Sweet Orange Oil Composition"),
      img("/images/wetransfer/g-natural/06-07.png", 800, 800, "G'Natural — Pure Rosehip Oil"),
      img("/images/wetransfer/g-natural/04-05-01.png", 800, 800, "G'Natural — Soothing Lavender Oil"),
      img("/images/wetransfer/g-natural/09-15.png", 800, 800, "G'Natural — Herbal Hair Oil Blend"),
      img("/images/wetransfer/g-natural/01-02.png", 800, 800, "G'Natural — For the Love of Nature"),
      img("/images/wetransfer/g-natural/03-05.png", 800, 800, "G'Natural — Sweet Almond Care"),
      img("/images/wetransfer/g-natural/05-06.png", 800, 800, "G'Natural — Tea Tree Botanical"),
      img("/images/wetransfer/g-natural/07-08.png", 800, 800, "G'Natural — Botanical Ritual"),
      img("/images/wetransfer/g-natural/08-10.png", 800, 800, "G'Natural — Natural Radiance"),
    ],
  },
  {
    id: "nandos-peri-peri-campaign",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    featuredHome: true,
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Nando's — PERi-PERi Copy-Led Posters",
    shortSummary: "Witty typography-driven digital posters celebrating Nando's iconic PERi-PERi flame-grilled range.",
    thumbnail: "/images/wetransfer/nandos/02-23428985-dcbe-4630-94e5-76a1e88e6b1d.jpg",
    description: [
      "Bold copy-led campaign posters crafted around Nando's unmistakable tone of voice, flame-grilled platters, and PERi-PERi heat levels.",
    ],
    deliverables: [
      "4 digital & social campaign posters",
      "Hand-crafted typographic layouts",
    ],
    tags: ["Food & Beverage", "Campaign Art", "Nando's"],
    media: [
      img("/images/wetransfer/nandos/02-23428985-dcbe-4630-94e5-76a1e88e6b1d.jpg", 1000, 1000, "Nando's — Flame-Grilled Classics"),
      img("/images/wetransfer/nandos/01-22979029-5032-4af9-a47d-7f2cbe753de0.jpg", 654, 970, "Nando's — PERi-PERi Basted"),
      img("/images/wetransfer/nandos/03-d83c4e12-b760-4f5c-9a60-2f953ab4a65f.jpg", 654, 970, "Nando's — Sharing Platter"),
      img("/images/wetransfer/nandos/04-f9bd10ea-f537-4a40-8dd2-e0a3a0430bd5.jpg", 654, 970, "Nando's — Extra Hot Hook"),
    ],
  },
  {
    id: "desi-chai-hospitality-packaging",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    featuredHome: true,
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Desi Chai London — Cup, Maska Bun & Bag Packaging",
    shortSummary: "London café packaging suite spanning chai cups, maska bun sleeves, bags, and staff apparel.",
    thumbnail: "/images/wetransfer/desi-chai-london/01-coffee-cup-mockup.jpg",
    description: [
      "Tactile hospitality packaging and in-store collateral crafted for Desi Chai London — translating London street culture and South Asian chai heritage onto takeaway cups, food sleeves, kraft bags, and loyalty cards.",
    ],
    deliverables: [
      "Branded hot cup & maska bun food sleeve packaging",
      "Takeaway paper bag series, loyalty cards & counter displays",
    ],
    tags: ["Packaging", "London Hospitality", "Brand Collateral"],
    media: [
      img("/images/wetransfer/desi-chai-london/01-coffee-cup-mockup.jpg", 1920, 1440, "Desi Chai London — Branded Chai Cup"),
      img("/images/wetransfer/desi-chai-london/02-maska-bun.jpg", 2400, 1600, "Desi Chai London — Maska Bun Packaging"),
      img("/images/wetransfer/desi-chai-london/03-paper-bag-mockup-series-01.jpg", 2400, 2400, "Desi Chai London — Takeaway Paper Bag"),
      img("/images/wetransfer/desi-chai-london/07-slide-5.jpg", 1920, 1080, "Desi Chai London — Loyalty Cards & Staff Apparel"),
      img("/images/wetransfer/desi-chai-london/10-slide-9.jpg", 1920, 1080, "Desi Chai London — Counter Packaging Suite"),
    ],
  },
  {
    id: "durex-digital-campaigns",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    featuredHome: true,
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Durex — Minimalist Conceptual & Moment Ads",
    shortSummary: "6 sharp minimalist visual metaphors and cultural moment-marketing creatives for Durex.",
    thumbnail: "/images/wetransfer/durex/06-newyear3.png",
    description: [
      "Conceptual visual ads produced for Durex across New Year, cricket tournaments, summer campaigns, and mobile notification UI hooks.",
    ],
    deliverables: [
      "6 minimalist conceptual & topical social ads",
      "Copywriting & visual metaphor direction",
    ],
    tags: ["Conceptual Art", "Moment Marketing", "Durex"],
    media: [
      img("/images/wetransfer/durex/06-newyear3.png", 1000, 1000, "Durex — New Year Countdown Concept"),
      img("/images/wetransfer/durex/01-2561fb4b-ff7f-424e-a4d5-6bf1d80e5d82.jpg", 900, 900, "Durex — Minimalist Visual Metaphor"),
      img("/images/wetransfer/durex/04-9eedc826-a9a8-42be-a846-e8eba507486b.jpg", 900, 900, "Durex — Summer Essentials Flatlay"),
      img("/images/wetransfer/durex/02-65587441-23843499281230576-689767319196821094.jpg", 540, 540, "Durex — Cricket Match-Day Topical"),
      img("/images/wetransfer/durex/03-66647919-23843515145310576-416153488988517171.jpg", 540, 540, "Durex — Notification UI Concept"),
      img("/images/wetransfer/durex/05-c28a4f06-49b7-4dd0-893b-c8d6e3f30136.jpg", 900, 900, "Durex — Bold Campaign Poster"),
    ],
  },
  {
    id: "chatori-packaging-ooh",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Chatori — Chai Cup, Bag & Street Pole OOH",
    shortSummary: "Illustrated takeaway chai cups, kraft bags, and vertical street pole banners for Chatori.",
    thumbnail: "/images/wetransfer/chatori/04-chatgpt-image-jul-28-2026-07-08-19-pm.jpg",
    description: [
      "Physical packaging and outdoor street banner touchpoints extending Chatori's Desi pop-art aesthetic onto cups, bags, and urban lampposts.",
    ],
    deliverables: [
      "Illustrated chai cup & takeaway paper bag mockups",
      "Vertical outdoor street pole banner",
    ],
    tags: ["Packaging", "Street OOH", "Illustration"],
    media: [
      img("/images/wetransfer/chatori/04-chatgpt-image-jul-28-2026-07-08-19-pm.jpg", 1402, 1122, "Chatori — Illustrated Chai Cup"),
      img("/images/wetransfer/chatori/10-chatgpt-image-jul-28-2026-10-14-16-pm.jpg", 1254, 1254, "Chatori — Takeaway Paper Bag"),
      img("/images/wetransfer/chatori/11-chatgpt-image-jul-29-2026-05-52-44-pm.jpg", 1024, 1536, "Chatori — Vertical Street Pole OOH"),
    ],
  },
  {
    id: "chatori-pop-art-posters",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Chatori — Pop-Art Street-Food Poster Series",
    shortSummary: "6 punchy pun-driven Desi pop-art posters ('Naan Sense', 'Butter Believe It', Golgappa).",
    thumbnail: "/images/wetransfer/chatori/05-chatgpt-image-jul-28-2026-08-36-55-pm.jpg",
    description: [
      "6-poster illustrated campaign combining South Asian truck-art energy, bold comic halftones, and playful food wordplay.",
    ],
    deliverables: [
      "6 square & portrait pop-art campaign posters",
      "Custom character & food illustration direction",
    ],
    tags: ["Pop Art", "Poster Series", "Visual Storytelling"],
    media: [
      img("/images/wetransfer/chatori/05-chatgpt-image-jul-28-2026-08-36-55-pm.jpg", 1254, 1254, "Chatori — Naan Sense Poster"),
      img("/images/wetransfer/chatori/06-chatgpt-image-jul-28-2026-08-45-41-pm.jpg", 1254, 1254, "Chatori — Butter Believe It Poster"),
      img("/images/wetransfer/chatori/07-chatgpt-image-jul-28-2026-09-16-27-pm.jpg", 1254, 1254, "Chatori — Desi Platter Visual"),
      img("/images/wetransfer/chatori/09-chatgpt-image-jul-28-2026-10-09-03-pm.jpg", 1122, 1402, "Chatori — Golgappa Cravings Poster"),
      img("/images/wetransfer/chatori/02-chatgpt-image-jul-28-2026-06-27-54-pm.jpg", 1254, 1254, "Chatori — Pop-Art Character I"),
      img("/images/wetransfer/chatori/03-chatgpt-image-jul-28-2026-06-34-41-pm.jpg", 1254, 1254, "Chatori — Pop-Art Character II"),
    ],
  },
  {
    id: "lure-jewellery-exhibitions",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Lure Jewellery — Exhibition & Seasonal Stories",
    shortSummary: "Eid exhibition invites, Mother's Day tributes, and editorial social stories for Lure.",
    thumbnail: "/images/wetransfer/lure-jewellery/01-exhibition-post-lure.png",
    description: [
      "Seasonal campaign visuals and boutique exhibition announcements designed for luxury jewellery house Lure.",
    ],
    deliverables: [
      "Eid Exhibition & Mother's Day campaign visuals",
      "June IG & editorial story series",
    ],
    tags: ["Exhibition Art", "Luxury Retail", "Social Campaign"],
    media: [
      img("/images/wetransfer/lure-jewellery/01-exhibition-post-lure.png", 900, 900, "Lure Jewellery — Private Exhibition Invite"),
      img("/images/wetransfer/lure-jewellery/09-mother-s-day.png", 900, 900, "Lure Jewellery — Mother's Day Tribute"),
      img("/images/wetransfer/lure-jewellery/02-lure-june-cc-ig.png", 900, 900, "Lure Jewellery — June Editorial Feature"),
      img("/images/wetransfer/lure-jewellery/03-lure-june-cc4.png", 900, 900, "Lure Jewellery — Fine Craft Story I"),
      img("/images/wetransfer/lure-jewellery/04-lure-june-cc401.png", 900, 900, "Lure Jewellery — Fine Craft Story II"),
    ],
  },
  {
    id: "dewa-trust-awareness-series",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Dewa Trust — Cultural & Inclusive Education Series",
    shortSummary: "11-part impact campaign across World Art Day, Earth Day, Book Day & inclusive learning.",
    thumbnail: "/images/wetransfer/dewa-trust/09-deewa-trust-april-cc-7.jpg",
    description: [
      "11-poster social and institutional awareness campaign celebrating inclusive education since 1967 for Dewa Trust.",
    ],
    deliverables: [
      "11 awareness & donor-impact campaign posters",
      "Consistent institutional colour & photo-collage language",
    ],
    tags: ["Social Impact", "Campaign Series", "Visual Design"],
    media: [
      img("/images/wetransfer/dewa-trust/09-deewa-trust-april-cc-7.jpg", 1115, 1229, "Dewa Trust — World Art Day"),
      img("/images/wetransfer/dewa-trust/06-deewa-trust-april-cc-2.jpg", 1115, 1229, "Dewa Trust — Empowering Education Since 1967"),
      img("/images/wetransfer/dewa-trust/04-deewa-trust-april-cc-10.jpg", 1115, 1229, "Dewa Trust — Earth Day"),
      img("/images/wetransfer/dewa-trust/10-deewa-trust-april-cc-8.jpg", 1115, 1229, "Dewa Trust — World Book Day"),
      img("/images/wetransfer/dewa-trust/11-deewa-trust-april-cc-9.jpg", 1115, 1229, "Dewa Trust — Education Support"),
      img("/images/wetransfer/dewa-trust/03-deewa-trust-april-cc-1.png", 1115, 1229, "Dewa Trust — Inclusive Learning"),
      img("/images/wetransfer/dewa-trust/05-deewa-trust-april-cc-11.png", 1115, 1229, "Dewa Trust — Interactive Math"),
      img("/images/wetransfer/dewa-trust/07-deewa-trust-april-cc-5.png", 1115, 1229, "Dewa Trust — World Health Day"),
      img("/images/wetransfer/dewa-trust/08-deewa-trust-april-cc-6.jpg", 1115, 1229, "Dewa Trust — Student Spotlight"),
      img("/images/wetransfer/dewa-trust/12-deewa-trust-april-cc-square.jpg", 1115, 1229, "Dewa Trust — Campaign Square I"),
      img("/images/wetransfer/dewa-trust/13-deewa-trust-april-ccs-square.png", 1115, 1229, "Dewa Trust — Campaign Square II"),
    ],
  },
  {
    id: "ai-visual-storytelling",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "AI-Enhanced Visual Art & Composites",
    shortSummary: "Surreal editorial portraits and cinematic composites finished in Photoshop & After Effects.",
    thumbnail: "/images/2520e1_36a47bc9502d4a4898e557affce7f258_mv2.jpg",
    description: [
      "Visual art studies combining generative concepting with meticulous colour grading, retouching, and compositing in Photoshop.",
    ],
    deliverables: [
      "7 vertical 4:5 editorial visual art composites",
      "Bespoke lighting, retouching & colour grading",
    ],
    tags: ["Visual Art", "Compositing", "Generative Craft"],
    media: [
      img("/images/2520e1_36a47bc9502d4a4898e557affce7f258_mv2.jpg", 1080, 1350, "AI Visual Study I"),
      img("/images/2520e1_3fdcb09331474f37bc012de06741c1af_mv2.jpg", 1081, 1351, "AI Visual Study II"),
      img("/images/2520e1_600ab5fe3d8a4591b9825392c6cb95bb_mv2.jpg", 1080, 1350, "AI Visual Study III"),
      img("/images/2520e1_44f4e1bec9ee4b6b93744927de285ab2_mv2.jpg", 1081, 1351, "AI Visual Study IV"),
      img("/images/2520e1_b305664c68af4da7a36e3dcdfb8c1f48_mv2.png", 1080, 1350, "AI Visual Study V"),
      img("/images/2520e1_6f37f85e32fb473c900cfc585fc63b13_mv2.jpg", 1080, 1350, "AI Visual Study VI"),
      img("/images/2520e1_e57ff052f1944b14a058ecfc72252161_mv2.jpg", 1080, 1350, "AI Visual Study VII"),
    ],
  },
  {
    id: "album-art-cover-series",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Album Art & Illustrated Music Covers",
    shortSummary: "Atmospheric 1:1 album cover artworks, custom lettering, and animated release visuals.",
    thumbnail: "/images/2520e1_cdf442ea30274bb483cd29e9a82aae9d_mv2.png",
    description: [
      "Square-format album cover art and illustrated release visuals translating musical mood and rhythm into striking cover imagery.",
    ],
    deliverables: [
      "6 high-resolution 1:1 streaming cover artworks",
      "Animated release loop & mobile mockups",
    ],
    tags: ["Album Art", "Visual Artist", "Illustration"],
    media: [
      img("/images/2520e1_cdf442ea30274bb483cd29e9a82aae9d_mv2.png", 1080, 1080, "Album Cover I"),
      img("/images/2520e1_73686bac6c55483fb398eaabdafd3648_mv2.jpg", 2000, 2000, "Album Cover II"),
      img("/images/2520e1_b06d23ed822144dc8e1869fad48c94cd_mv2.png", 1397, 1397, "Album Cover III"),
      img("/images/2520e1_e73f268a1c4c4b0ab940fc8728a86ae3_mv2.gif", 1080, 1080, "Animated Release Cover (GIF)"),
      img("/images/2520e1_e5b536fc93234d3ca0d4ae206b84c276_mv2.jpg", 2000, 2000, "Album Cover IV"),
      img("/images/2520e1_d4494d0aeb914fa1ae8ce4a658ea17ac_mv2.jpg", 2400, 2400, "Album Cover V"),
    ],
  },
  {
    id: "surrey-hills-coffee-co",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    gridSpan: "third",
    aspect: "16 / 10",
    title: "Surrey Hills Coffee Co. — UK Artisan Identity",
    shortSummary: "Heritage coffee emblem, mobile van livery, compostable cups, and retail pouches.",
    thumbnail: "/images/2520e1_976719cd82434e12a575b38707278738_mv2.jpg",
    description: [
      "Sustainable UK coffee brand identity spanning emblem design, mobile van livery, retail coffee pouches, and outdoor posters.",
    ],
    deliverables: ["Identity, packaging & vehicle livery"],
    tags: ["UK Brand", "Packaging", "Vehicle Livery"],
    media: [
      img("/images/2520e1_976719cd82434e12a575b38707278738_mv2.jpg", 2400, 1664, "Surrey Hills — Compostable Cups"),
      img("/images/2520e1_ec0da9795a354e619fe519d9a6199fd5_mv2.jpg", 2400, 1350, "Surrey Hills — Mobile Coffee Van"),
      img("/images/2520e1_f95e67d3ef184ef3a2670ff20cb8e0a4_mv2.jpg", 2400, 1350, "Surrey Hills — Retail Coffee Pouch"),
      img("/images/2520e1_ea30b999253b44ea87c5de79c3874b98_mv2.jpg", 2400, 1350, "Surrey Hills — Outdoor Posters"),
      img("/images/2520e1_037ebc86f78943079de4ca4271380fd2_mv2.jpg", 2400, 1350, "Surrey Hills — Heritage Emblem"),
    ],
  },
  {
    id: "totle-kidswear-branding",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    gridSpan: "third",
    aspect: "16 / 10",
    title: "Totle Kidswear — Mascot Identity & Packaging",
    shortSummary: "Playful mascot identity, mobile screen mockups, colour palette, and retail tags.",
    thumbnail: "/images/2520e1_f8700f7be10842a88d42248a95f9d686_mv2.jpg",
    description: [
      "Complete brand system, character mascot, mobile interface mockups, and retail packaging for kids' apparel brand Totle.",
    ],
    deliverables: ["Logo, mascot, palette & retail packaging"],
    tags: ["Brand System", "Packaging", "Retail"],
    media: [
      img("/images/2520e1_4938a3e9f5114148b5adf4cccba5154c_mv2.jpg", 2400, 1350, "Totle — Mascot Mark"),
      img("/images/2520e1_77f8426bbb934b4389d6813d29987856_mv2.jpg", 2400, 1350, "Totle — Mobile Experience"),
      img("/images/2520e1_e77056a883ec4dccbf990ea119f6d879_mv2.jpg", 2400, 1350, "Totle — Apparel Hangtags"),
      img("/images/2520e1_577ca55083a24ea1b75a41702d8e0fed_mv2.jpg", 2400, 1350, "Totle — Retail Bag"),
      img("/images/2520e1_beee4da7e3ec488bb61b3f3903bead08_mv2.jpg", 2400, 1350, "Totle — Colour Palette"),
      img("/images/2520e1_df25d33bc58443ada8c3962e8f003f36_mv2.jpg", 2400, 1350, "Totle — Typography"),
    ],
  },
  {
    id: "fitbox-brand-refresh",
    category: "visual-art",
    categoryLabel: "Visual Art & Branding",
    gridSpan: "third",
    aspect: "16 / 10",
    title: "FITBOX — High-Contrast Athletic Brand Refresh",
    shortSummary: "Bold athletic logo geometry, display typography, and dark-mode fitness apparel system.",
    thumbnail: "/images/2520e1_08516072a0a84f0c9c657f48e0fc4e23_mv2.png",
    description: [
      "Athletic brand refresh modernizing FITBOX's logo geometry, display typography, and high-contrast performance palette.",
    ],
    deliverables: ["Logo evolution & athletic brand guidelines"],
    tags: ["Brand Refresh", "Fitness", "Visual System"],
    media: [
      img("/images/2520e1_08516072a0a84f0c9c657f48e0fc4e23_mv2.png", 1920, 1080, "FITBOX — Athletic Apparel"),
      img("/images/2520e1_299dc02d6fb240838ec27b905b4bc9a6_mv2.png", 1920, 1080, "FITBOX — Before & After"),
      img("/images/2520e1_e08b45e7460b495f83852db99291c5c8_mv2.png", 1920, 1080, "FITBOX — Display Type"),
      img("/images/2520e1_a75fc958c2294745803c525919ef7285_mv2.png", 1920, 1080, "FITBOX — Colour System"),
      img("/images/2520e1_51efaa9cd65e4abaab3d004ec27ea630_mv2.png", 1920, 1080, "FITBOX — Lockups"),
    ],
  },

  // =========================================================================
  // 03 — WEBSITE DESIGN, STOREFRONT UI & DESIGN SYSTEMS (10 Projects)
  // =========================================================================
  {
    id: "fabulatte-digital-landing",
    category: "website-design",
    categoryLabel: "Website Design",
    featuredHome: true,
    gridSpan: "lead",
    aspect: "16 / 10",
    title: "Fabulatte — Dark-Mode Agency Landing Page UI",
    shortSummary: "High-contrast dark-mode landing page and digital conversion layout built around bold editorial type.",
    thumbnail: "/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png",
    description: [
      "Full-page dark-mode landing layout crafted for Fabulatte ('Strategy first. Always.'), pairing device hero framing with structured services hierarchy and clear conversion CTAs.",
    ],
    deliverables: [
      "Full vertical dark-mode landing page UI",
      "Hero device framing & CTA conversion hierarchy",
    ],
    tags: ["Landing Page UI", "UI/UX Design", "Dark Mode"],
    media: [
      img("/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png", 1920, 2501, "Fabulatte — Full Landing Page UI"),
      img("/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg", 1920, 1080, "Fabulatte — Hero Reel Integration"),
    ],
  },
  {
    id: "rezilo-digital-product-system",
    category: "website-design",
    categoryLabel: "Website Design",
    featuredHome: true,
    gridSpan: "companion",
    aspect: "4 / 3.35",
    title: "Rezilo — D2C Product Launch UI & Mobile Screens",
    shortSummary: "Dark-mode D2C product feature cards, custom iconography, and mobile UI mockups.",
    thumbnail: "/images/wetransfer/rezilo/09-chatgpt-image-jul-15-2026-10-58-56-pm.jpg",
    description: [
      "Digital D2C product presentation UI for muscle recovery device Rezilo ('Recovery, Reinvented.'), featuring cobalt-accented dark UI cards, custom feature iconography, and mobile screen mockups.",
    ],
    deliverables: [
      "D2C product feature & benefit breakdown UI cards",
      "Mobile interface mockups & custom icon set",
    ],
    tags: ["D2C Product UI", "Mobile UI/UX", "Visual System"],
    media: [
      img("/images/wetransfer/rezilo/09-chatgpt-image-jul-15-2026-10-58-56-pm.jpg", 1536, 1024, "Rezilo — Mobile Interface Mockups"),
      img("/images/wetransfer/rezilo/03-chatgpt-image-jul-15-2026-07-41-56-pm.jpg", 1254, 1254, "Rezilo — Hero Product UI Card"),
      img("/images/wetransfer/rezilo/02-chatgpt-image-jul-15-2026-07-32-58-pm.jpg", 1254, 1254, "Rezilo — Iconography & Spec Breakdown"),
      img("/images/wetransfer/rezilo/04-chatgpt-image-jul-15-2026-08-33-15-pm.jpg", 1254, 1254, "Rezilo — Post-Workout Recovery Card"),
      img("/images/wetransfer/rezilo/10-rezilo-end-your-day-better-1200x1200.jpg", 1200, 1200, "Rezilo — Conversion Promo Card"),
    ],
  },
  {
    id: "gulahmed-storefront-visuals",
    category: "website-design",
    categoryLabel: "Website Design",
    featuredHome: true,
    gridSpan: "third",
    aspect: "1 / 1",
    title: "GulAhmed — Online Storefront & Ideas Home UI",
    shortSummary: "High-converting e-commerce storefront banners and pricing cards for gulahmedshop.com.",
    thumbnail: "/images/wetransfer/gulahmed/05-94ad8dbd-a00b-4e3e-9502-412c8b6c5d87.jpg",
    description: [
      "Desktop & square online storefront banners, seasonal clearance headers, and Ideas Home merchandising cards crafted for GulAhmed (gulahmedshop.com).",
    ],
    deliverables: [
      "Online store seasonal sale & countdown banners",
      "Ideas Home product merchandising & pricing cards",
    ],
    tags: ["Storefront UI", "E-Commerce CRO", "GulAhmed"],
    media: [
      img("/images/wetransfer/gulahmed/05-94ad8dbd-a00b-4e3e-9502-412c8b6c5d87.jpg", 1280, 1280, "GulAhmed — Flat 40% Off Storefront Banner"),
      img("/images/wetransfer/gulahmed/06-9a93948b-a794-4c44-8c55-84f08c4b1a84.jpg", 1000, 1000, "GulAhmed Ideas Home — Collection Merchandising"),
      img("/images/wetransfer/gulahmed/04-80984262-135960921193773-3164357274617511936.jpg", 960, 960, "GulAhmed — Year End Clearance Hero"),
      img("/images/wetransfer/gulahmed/02-0df19760-32c8-40c7-9663-9b7e1f331a5b.jpg", 1000, 1000, "GulAhmed — Product Pricing UI Card"),
      img("/images/wetransfer/gulahmed/01-09690142-e80b-4acb-a6bd-a7d128495759.jpg", 1280, 1280, "GulAhmed — Launch Countdown Banner"),
    ],
  },
  {
    id: "g-natural-product-ui",
    category: "website-design",
    categoryLabel: "Website Design",
    featuredHome: true,
    gridSpan: "third",
    aspect: "1 / 1",
    title: "G'Natural — D2C Skincare Cards & Carousel UI",
    shortSummary: "11 clinical D2C skincare benefit cards and a seamless 4-slide bundle carousel UI.",
    thumbnail: "/images/wetransfer/g-natural/10-april-gn-cc10.png",
    description: [
      "Conversion-focused D2C product merchandising cards and interactive 4-slide bundle carousel designed for botanical skincare storefront G'Natural.",
    ],
    deliverables: [
      "7 clinical benefit & routine product UI cards",
      "4-slide swipeable bundle promo carousel",
    ],
    tags: ["D2C Merchandising", "Carousel UI", "Conversion Design"],
    media: [
      img("/images/wetransfer/g-natural/10-april-gn-cc10.png", 900, 900, "G'Natural — Energy Booster UI Card"),
      img("/images/wetransfer/g-natural/13-april-gn-cc4.png", 900, 900, "G'Natural — Deep Pore Detox Scrub Card"),
      img("/images/wetransfer/g-natural/11-april-gn-cc11.png", 900, 900, "G'Natural — Essential Oil Trio Card"),
      img("/images/wetransfer/g-natural/12-april-gn-cc3.png", 900, 900, "G'Natural — Botanical Blend Card"),
      img("/images/wetransfer/g-natural/14-april-gn-cc5.png", 900, 900, "G'Natural — Peppermint & Lavender Card"),
      img("/images/wetransfer/g-natural/16-april-gn-cc7.png", 900, 900, "G'Natural — Orange & Lavender Card"),
      img("/images/wetransfer/g-natural/15-april-gn-cc6.png", 900, 900, "G'Natural — Daily Cleansing Routine Card"),
      img("/images/wetransfer/g-natural/17-carousel-1.png", 600, 600, "G'Natural — Bundle Carousel Slide 01"),
      img("/images/wetransfer/g-natural/18-carousel-2.png", 600, 600, "G'Natural — Bundle Carousel Slide 02"),
      img("/images/wetransfer/g-natural/19-carousel-3.png", 600, 600, "G'Natural — Bundle Carousel Slide 03"),
      img("/images/wetransfer/g-natural/20-carousel-4.png", 600, 600, "G'Natural — Bundle Carousel Slide 04"),
    ],
  },
  {
    id: "desi-chai-london-system",
    category: "website-design",
    categoryLabel: "Website Design",
    featuredHome: true,
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Desi Chai London — Typography & Color Tokens",
    shortSummary: "Structured display and UI type scales (Mohabatin & Montserrat), hex tokens, and signage.",
    thumbnail: "/images/wetransfer/desi-chai-london/08-slide-6.jpg",
    description: [
      "Visual design system for Desi Chai London establishing heading/subheading/body typography rules, hex colour tokens, logo lockups, and digital-to-storefront guidelines.",
    ],
    deliverables: [
      "UI typography scale & specimen slides",
      "Hex colour token system & brand guidelines",
    ],
    tags: ["Design System", "Typography & Color", "London"],
    media: [
      img("/images/wetransfer/desi-chai-london/08-slide-6.jpg", 1920, 1080, "Desi Chai London — Storefront & System Overview"),
      img("/images/wetransfer/desi-chai-london/04-slide-10.jpg", 1920, 1080, "Typography Scale — Mohabatin & Montserrat"),
      img("/images/wetransfer/desi-chai-london/09-slide-8.jpg", 1920, 1080, "Hex Colour Token System"),
      img("/images/wetransfer/desi-chai-london/05-slide-3.jpg", 1920, 1080, "Primary & Secondary Logo Lockups"),
      img("/images/wetransfer/desi-chai-london/06-slide-4.jpg", 1920, 1080, "Editorial Grid Layout I"),
      img("/images/wetransfer/desi-chai-london/11-slide-7.jpg", 1920, 1080, "Editorial Grid Layout II"),
    ],
  },
  {
    id: "gulahmed-mobile-retail-ui",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "third",
    aspect: "4 / 5",
    title: "GulAhmed — 9:16 Mobile Flash-Sale & Retail UI",
    shortSummary: "Mobile-first vertical shopping screens, bedding price callouts, and flash-sale layouts.",
    thumbnail: "/images/wetransfer/gulahmed/07-ad5b4834-8db6-427b-b3e4-f16e28ccb81c.jpg",
    description: [
      "Mobile-first 9:16 retail promo screens designed for GulAhmed shoppers, pairing clear pricing badges with thumb-friendly CTA hierarchy.",
    ],
    deliverables: [
      "4 vertical 720×1280 mobile retail screens",
      "Apparel & Ideas Home mobile pricing overlays",
    ],
    tags: ["Mobile Retail UI", "Responsive Design", "E-Commerce"],
    media: [
      img("/images/wetransfer/gulahmed/07-ad5b4834-8db6-427b-b3e4-f16e28ccb81c.jpg", 720, 1280, "GulAhmed — Mobile Bedding Pricing Screen"),
      img("/images/wetransfer/gulahmed/03-7eb71849-551b-4795-9350-dc1aa4127cc2.jpg", 720, 1280, "GulAhmed — Mobile Story Sale Layout"),
      img("/images/wetransfer/gulahmed/08-be5003cb-df25-44e2-b7b7-0ea95f4a30b5.jpg", 720, 1280, "GulAhmed — Vertical Apparel Showcase"),
      img("/images/wetransfer/gulahmed/09-cfaf0615-6feb-4d73-b8ae-7dd0f4abda5b.jpg", 720, 1280, "GulAhmed — Mobile Flash Promo Screen"),
    ],
  },
  {
    id: "tratech-digital-system",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "third",
    aspect: "4 / 5",
    title: "Tratech Consulting — Digital UI & Iconography",
    shortSummary: "12-slide corporate UI system featuring custom iconography, web typography, and layout grids.",
    thumbnail: "/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png",
    description: [
      "Digital-first design system for UK tech & DEI recruitment consultancy Tratech Consulting — built around custom UI iconography, Silka/Poppins web typography, and modular layout templates.",
    ],
    deliverables: [
      "Custom UI iconography grid & digital colour palette",
      "Web typography & modular interface templates",
    ],
    tags: ["UI Iconography", "DEI Recruitment", "Design System"],
    media: [
      img("/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png", 1366, 768, "Tratech — Digital System Overview"),
      img("/images/2520e1_67e9549ba4e842a2b40101ae6b5ce8b8_mv2.png", 1366, 768, "Tratech — Custom UI Iconography"),
      img("/images/2520e1_e39a8141703b42119dcd0fadc8971fc9_mv2.png", 1366, 768, "Tratech — Web Typography"),
      img("/images/2520e1_65f0a9ff3b1a4ca58727392336f7a034_mv2.png", 1366, 768, "Tratech — Digital Colour System"),
      img("/images/2520e1_aafe43cb93724db68fce8f354f1e96e2_mv2.png", 1366, 768, "Tratech — Interface Content Templates"),
      img("/images/2520e1_251678a313194551a52c7b9b7ef6e746_mv2.png", 1366, 768, "Tratech — Logo Evolution"),
      img("/images/2520e1_c746dc4046464d708e4a1d28db020f97_mv2.png", 1366, 768, "Tratech — Three Pillars Framework"),
      img("/images/2520e1_bc72a3c95fb7438b926546fc00e57c0a_mv2.png", 1366, 768, "Tratech — People Layout"),
      img("/images/2520e1_e9a212cc2bae46e18adbed29c6c8a1f3_mv2.png", 1366, 768, "Tratech — Process Layout"),
      img("/images/2520e1_acf07bfeb2ea4926875ff9e7fe13029f_mv2.png", 1366, 768, "Tratech — Tech Layout"),
      img("/images/2520e1_d53ba4825c2e47218ea6722445f85aa0_mv2.png", 1366, 768, "Tratech — Brand Story"),
      img("/images/2520e1_edfe529cefa04c1789991e54b2fa1d18_mv2.png", 1366, 768, "Tratech — Lockup Variations"),
    ],
  },
  {
    id: "admiah-digital-identity",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "third",
    aspect: "4 / 5",
    title: "Admiah Digital — Agency UI Grid & Color Tokens",
    shortSummary: "Geometric grid construction, web typography, and high-contrast yellow/ink UI tokens.",
    thumbnail: "/images/2520e1_427eb28792ed4b338d7840f790a5c0bb_mv2.png",
    description: [
      "Digital-first visual system designed for performance marketing agency Admiah Digital across dark and light interfaces.",
    ],
    deliverables: [
      "Geometric mark & construction grid",
      "Web typography & hex colour specifications",
    ],
    tags: ["Visual Systems", "Color Tokens", "Agency UI"],
    media: [
      img("/images/2520e1_427eb28792ed4b338d7840f790a5c0bb_mv2.png", 1366, 768, "Admiah Digital — Dark Lockup"),
      img("/images/2520e1_ccc64c6a62e7486697bf879ff2c795b4_mv2.png", 1366, 768, "Admiah Digital — Monogram"),
      img("/images/2520e1_250c8754a68d4cf5a24bba9aae4769da_mv2.png", 1366, 768, "Admiah Digital — Construction Grid"),
      img("/images/2520e1_4c1ffe21fc6d4e48bd7e9e0531162b3d_mv2.png", 1366, 768, "Admiah Digital — Typography"),
      img("/images/2520e1_af893d32e393440587c7434a1b338b0f_mv2.png", 1366, 768, "Admiah Digital — Colour System"),
      img("/images/2520e1_f7784e764260440989fc17151f91cad5_mv2.png", 1366, 768, "Admiah Digital — Hex Tokens"),
      img("/images/2520e1_bc1850f18fba45049269a92fdc9d30ef_mv2.jpg", 1920, 2400, "Admiah Digital — Collateral"),
    ],
  },
  {
    id: "dewa-trust-web-banners",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Dewa Trust — Widescreen Web Header Banners",
    shortSummary: "1702×630 widescreen portal hero banners ('Born To Stand Out!') for Dewa Trust.",
    thumbnail: "/images/wetransfer/dewa-trust/01-cover-photo.jpg",
    description: [
      "Widescreen web portal and social header banners ('Born To Stand Out!') crafted with clear typographic focal points and institutional branding for Dewa Trust.",
    ],
    deliverables: [
      "2 widescreen web & portal header banners (1702×630)",
      "Responsive desktop-to-tablet safe-zone framing",
    ],
    tags: ["Web Headers", "Banner UI", "Layout Design"],
    media: [
      img("/images/wetransfer/dewa-trust/01-cover-photo.jpg", 1702, 630, "Dewa Trust — Widescreen Web Header I"),
      img("/images/wetransfer/dewa-trust/02-cover-photo2.jpg", 1702, 630, "Dewa Trust — Widescreen Web Header II"),
    ],
  },
  {
    id: "titan-digital-emailer-layouts",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Titan (TATA Group) — Responsive Digital Mailer UI",
    shortSummary: "7 structured vertical HTML/digital emailer layouts with editorial grid typography.",
    thumbnail: "/images/2520e1_4afb83907f1e4d28ad0be27a9fc8f6da_mv2.jpg",
    description: [
      "7-part vertical digital mailer series created for Titan Company (TATA Group) DEI communications, combining scannable editorial grids with conceptual product art direction.",
    ],
    deliverables: [
      "7 responsive-ready vertical mailer layouts",
      "Editorial grid & typographic hierarchy",
    ],
    tags: ["Digital Mailer UI", "Editorial Grid", "DEI Campaign"],
    media: [
      img("/images/2520e1_4afb83907f1e4d28ad0be27a9fc8f6da_mv2.jpg", 1080, 1504, "Titan Mailer — Empathy"),
      img("/images/2520e1_b2aa1028fb6e4becaf76dfd0a247075c_mv2.jpg", 1080, 1350, "Titan Mailer — Diversity"),
      img("/images/2520e1_f66eb05535754e0980a30406e84a3c53_mv2.jpg", 1697, 2400, "Titan Mailer — Perspective"),
      img("/images/2520e1_52cc7d1aefb2434586de5a0bbac2c0c8_mv2.jpg", 1697, 2400, "Titan Mailer — Elements"),
      img("/images/2520e1_e81874fa76a749a7a0315327f0d07baf_mv2.jpg", 1697, 2400, "Titan Mailer — Clear Sight"),
      img("/images/2520e1_7fd35075128440b789fd521bad6105d9_mv2.jpg", 1697, 2400, "Titan Mailer — Transparency"),
      img("/images/2520e1_07ade36868844ab6a82e292196d4d283_mv2.jpg", 1697, 2400, "Titan Mailer — Resilience"),
    ],
  },

  // =========================================================================
  // 04 — INDEPENDENT DEVELOPMENT PORTFOLIOS (NEXT.JS & REACT.JS)
  // =========================================================================
  {
    id: "nextjs-portfolio-platform",
    category: "nextjs",
    categoryLabel: "Next.js",
    featuredHome: true,
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Visual Artist & Motion Portfolio Platform",
    shortSummary: "Next.js 15 App Router architecture with static prerendering, AVIF media, and GSAP ScrollTrigger.",
    thumbnail: "/images/portfolio/nextjs-home.png",
    description: [
      "Production Next.js 15 web application engineered with App Router, static route generation, URL-synced portfolio views, AVIF/WebP image optimization, and GSAP scroll choreography.",
    ],
    deliverables: [
      "Next.js 15 App Router multi-page architecture",
      "AVIF image pipeline & viewport-gated video streaming",
      "SEO metadata & static prerendering",
    ],
    tags: ["Next.js 15", "App Router", "SSR / SSG"],
    media: [
      img("/images/portfolio/nextjs-home.png", 1440, 900, "Next.js 15 — Hero & Showreel Stage"),
      img("/images/portfolio/nextjs-portfolio.png", 1440, 900, "Next.js 15 — Editorial Portfolio Grid"),
      img("/images/portfolio/nextjs-about.png", 1440, 900, "Next.js 15 — Skills & Profile Architecture"),
    ],
  },
  {
    id: "reactjs-interactive-media-suite",
    category: "reactjs",
    categoryLabel: "React.js",
    featuredHome: true,
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Interactive Motion Lab & Media Explorer",
    shortSummary: "Modular React 19 UI components for live GSAP demos, category filtering, and modal playback.",
    thumbnail: "/images/portfolio/reactjs-modal.png",
    description: [
      "Client-side React 19 component suite powering interactive GSAP motion demonstrations, instant category transitions, keyboard-accessible modals, and viewport-aware video playback.",
    ],
    deliverables: [
      "Interactive React motion preview controls",
      "Accessible keyboard & filmstrip media modal",
      "Viewport-aware ambient video component",
    ],
    tags: ["React.js", "React 19", "Interactive UI"],
    media: [
      img("/images/portfolio/reactjs-modal.png", 1440, 900, "React 19 — Media Modal & Filmstrip"),
      img("/images/portfolio/nextjs-portfolio.png", 1440, 900, "React 19 — Stateful Category Filter"),
    ],
  },
];
