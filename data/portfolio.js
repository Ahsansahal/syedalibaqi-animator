/**
 * Motion-First Portfolio Data for Syed Ali Abdul Baqi.
 *
 * Exact category hierarchy:
 * 1. All Work
 * 2. Motion Design & Animation (Primary — shown first by default)
 * 3. Website Design
 * 4. WordPress
 * 5. Shopify
 * 6. React.js
 * 7. Next.js
 * 8. Laravel
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
    tagline: "Motion design & animation first — alongside website design and full-stack builds.",
  },
  {
    id: "motion-animation",
    label: "Motion Design & Animation",
    tagline: "Showreels, kinetic typography, brand hero films, and interactive motion loops.",
  },
  {
    id: "website-design",
    label: "Website Design",
    tagline: "Landing pages, UI/UX concepts, typography & color systems, and storefront visuals.",
  },
  {
    id: "wordpress",
    label: "WordPress",
    tagline: "Custom PHP themes, Gutenberg & Elementor architectures, and WooCommerce builds.",
    platformShowcase: {
      eyebrow: "WordPress Architecture",
      title: "Bespoke WordPress Themes & Scalable CMS Builds",
      summary:
        "Custom WordPress development combining clean template hierarchies, flexible ACF / block editing, GSAP scroll interactions, and fast Core Web Vitals.",
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
  // PRIORITY 01 — MOTION DESIGN & ANIMATION (Displayed First by Default)
  // =========================================================================
  {
    id: "fabulatte-agency-showreel",
    category: "motion-animation",
    categoryLabel: "Motion Design & Animation",
    gridSpan: "wide",
    aspect: "16 / 9",
    title: "Fabulatte — Agency Showreel",
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
    categoryLabel: "Motion Design & Animation",
    gridSpan: "narrow",
    aspect: "9 / 14",
    title: "Spotify Canvas & Motion Loops",
    shortSummary: "Seamless vertical motion loops and AI-composited animations crafted in After Effects.",
    thumbnail: "/images/2520e1_77f7f535c0984cdb818f8f478e7121c6f000.jpg",
    previewVideo: "/videos/2520e1_77f7f535c0984cdb818f8f478e7121c6.mp4",
    description: [
      "Looping vertical Spotify Canvas animations and AI-assisted motion studies composited and finished in After Effects.",
    ],
    deliverables: [
      "9:16 seamless music motion loops",
      "After Effects compositing & animated GIFs",
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
    categoryLabel: "Motion Design & Animation",
    gridSpan: "lead",
    aspect: "16 / 9",
    title: "EVO ICL — 'What's Your Superpower?' Film & Reel",
    shortSummary: "Global hero film, 90-second impact showreel, and multi-format social motion cuts.",
    thumbnail: "/images/2520e1_7a25770b0b454a53a033770487dbc8acf002.jpg",
    previewVideo: "/videos/2520e1_7a25770b0b454a53a033770487dbc8ac.mp4",
    caseStudyHref: "/case-study",
    description: [
      "Flagship hero film ('What's Your Superpower?'), 90-second annual impact reel, and vertical social motion series produced for global vision correction brand EVO ICL.",
    ],
    deliverables: [
      "Event & digital Hero Film ('What's Your Superpower?')",
      "90-second annual marketing impact showreel",
      "9:16 vertical & 1:1 social motion cutdowns",
    ],
    tags: ["Hero Film", "Motion Graphics", "Showreel"],
    media: [
      vid(
        "/videos/2520e1_7a25770b0b454a53a033770487dbc8ac.mp4",
        "/images/2520e1_7a25770b0b454a53a033770487dbc8acf002.jpg",
        1920,
        1080,
        "EVO ICL — Hero Film: What's Your Superpower?"
      ),
      vid(
        "/videos/2520e1_197f1593b401417482c1ce67cbc94719.mp4",
        "/images/2520e1_197f1593b401417482c1ce67cbc94719f003.jpg",
        1920,
        1080,
        "EVO ICL — Annual Impact Showreel"
      ),
      vid(
        "/videos/2520e1_8281e3fb86384d9ea9115beb58e4d587.mp4",
        "/images/2520e1_8281e3fb86384d9ea9115beb58e4d587f003.jpg",
        1080,
        1080,
        "EVO ICL — Clear Vision Motion Spot"
      ),
      vid(
        "/videos/2520e1_fffdf32433d84d0db760e794b13527a6.mp4",
        "/images/2520e1_fffdf32433d84d0db760e794b13527a6f003.jpg",
        1080,
        1920,
        "EVO ICL — Vertical Social Reel"
      ),
      vid(
        "/videos/2520e1_5af6ac55bbc94681bdf2b1c76760e019.mp4",
        "/images/2520e1_5af6ac55bbc94681bdf2b1c76760e019f003.jpg",
        1080,
        1920,
        "David Lloyd × STAAR — Vertical Motion"
      ),
      img("/images/2520e1_d42c85fc1e2e4fdfaced6244ccd3431e_mv2.png", 1080, 1350, "EVO ICL — For The Fearless"),
    ],
  },
  {
    id: "oral-reconstruction-symposium-lisbon",
    category: "motion-animation",
    categoryLabel: "Motion Design & Animation",
    gridSpan: "companion",
    aspect: "16 / 9",
    title: "Oral Reconstruction Symposium — Lisbon",
    shortSummary: "High-energy conference promo film driven by bold kinetic typography and editorial transitions.",
    thumbnail: "/images/2520e1_894e994732e24e81ae31dcc9d9853a37f003.jpg",
    previewVideo: "/videos/2520e1_894e994732e24e81ae31dcc9d9853a37.mp4",
    description: [
      "International event promo film for the Oral Reconstruction International Symposium in Lisbon, combining bold kinetic typography with rapid destination cuts.",
    ],
    deliverables: [
      "16:9 international conference promo film",
      "Kinetic title cards & animated transitions",
    ],
    tags: ["Kinetic Type", "Creative Transitions", "Promo Film"],
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
    categoryLabel: "Motion Design & Animation",
    gridSpan: "half",
    aspect: "16 / 9",
    title: "STAAR Surgical × Lucy Bronze",
    shortSummary: "Athlete partnership motion film and broadcast-inspired campaign rollout.",
    thumbnail: "/images/2520e1_13127af86a0c48479b5b905dbf3cc4d1f002.jpg",
    previewVideo: "/videos/2520e1_13127af86a0c48479b5b905dbf3cc4d1.mp4",
    description: [
      "Sports motion campaign starring England footballer Lucy Bronze MBE for STAAR Surgical, featuring dynamic pacing and broadcast-style typography.",
    ],
    deliverables: [
      "16:9 athlete partnership motion film",
      "Portrait social & campaign visuals",
    ],
    tags: ["Motion Film", "Sports Motion", "Broadcast Type"],
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
    id: "ocl-vision-motion-campaign",
    category: "motion-animation",
    categoryLabel: "Motion Design & Animation",
    gridSpan: "half",
    aspect: "16 / 9",
    title: "OCL Vision — YouTube Commercial & Motion",
    shortSummary: "Narrative video commercial and social motion overlays for London clinic OCL Vision.",
    thumbnail: "/images/2520e1_c458a697031a477fb59c0adb4bf3b8e1f000.jpg",
    previewVideo: "/videos/2520e1_c458a697031a477fb59c0adb4bf3b8e1.mp4",
    description: [
      "YouTube commercial and 'Make the Switch' motion campaign combining lifestyle storytelling with crisp motion typography.",
    ],
    deliverables: [
      "16:9 YouTube commercial & social motion spot",
      "4-part campaign visual series",
    ],
    tags: ["Video Commercial", "Motion Graphics", "Storytelling"],
    media: [
      vid(
        "/videos/2520e1_c458a697031a477fb59c0adb4bf3b8e1.mp4",
        "/images/2520e1_c458a697031a477fb59c0adb4bf3b8e1f000.jpg",
        1920,
        1080,
        "OCL Vision — Make the Switch Film"
      ),
      vid(
        "/videos/2520e1_496ea031ef16481f845a2511d960b811.mp4",
        "/images/2520e1_496ea031ef16481f845a2511d960b811f003.jpg",
        1920,
        1080,
        "OCL Vision — Laser Vision YouTube Ad"
      ),
      img("/images/2520e1_0cbe37ed1648498890f6808f09967b77_mv2.jpg", 1080, 1351, "Make the Switch — Key Visual"),
      img("/images/2520e1_58ef680ab194452cb272025c445cff41_mv2.jpg", 1080, 1351, "Lifestyle Split Visual"),
    ],
  },
  {
    id: "grenade-motion-films",
    category: "motion-animation",
    categoryLabel: "Motion Design & Animation",
    gridSpan: "lead",
    aspect: "16 / 9",
    title: "Grenade Sports Nutrition — Motion Films",
    shortSummary: "End-to-end concept, design, and animated brand films for Grenade activations.",
    thumbnail: "/images/2520e1_a0830daff0fc4e5e86d27420745b8508f003.jpg",
    previewVideo: "/videos/2520e1_242939bf3eb1423987394b0adb001535.mp4",
    description: [
      "Animated campaign videos crafted from concept through motion execution for UK sports nutrition brand Grenade.",
    ],
    deliverables: [
      "National Sports Day & Independence Day motion films",
      "Product launch graphics",
    ],
    tags: ["Motion Design", "2D/3D Compositing", "Brand Film"],
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
    id: "qmart-motion-social",
    category: "motion-animation",
    categoryLabel: "Motion Design & Animation",
    gridSpan: "companion",
    aspect: "16 / 10",
    title: "Q Mart — Playful Retail Motion & GIFs",
    shortSummary: "Tactile square-format animations and looping GIF promos for retail campaigns.",
    thumbnail: "/images/2520e1_fdb6decba33b4781b92e05cc28fcec67f003.jpg",
    previewVideo: "/videos/2520e1_fdb6decba33b4781b92e05cc28fcec67.mp4",
    description: [
      "Playful stop-motion-inspired animation and animated GIF visuals crafted for retail brand Q Mart.",
    ],
    deliverables: [
      "World Pasta Day 1:1 motion animation",
      "Animated retail GIF creative",
    ],
    tags: ["Motion Graphics", "GIF Animation", "Micro-motion"],
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
  // PRIORITY 02 — WEBSITE DESIGN & UI/UX
  // =========================================================================
  {
    id: "fabulatte-digital-landing",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "lead",
    aspect: "16 / 10",
    title: "Fabulatte — Agency Landing Page Layout",
    shortSummary: "Dark-mode landing page and digital layout built around bold editorial hierarchy.",
    thumbnail: "/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png",
    description: [
      "High-contrast dark-mode landing layout crafted for Fabulatte ('Strategy first. Always.'), pairing device hero framing with clear conversion CTAs.",
    ],
    deliverables: [
      "Full vertical dark-mode landing layout",
      "Hero device framing & CTA hierarchy",
    ],
    tags: ["Landing Page Design", "UI/UX Design", "Dark UI"],
    media: [
      img("/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png", 1920, 2501, "Fabulatte — Full Landing Layout"),
      img("/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg", 1920, 1080, "Fabulatte — Visual Showcase"),
    ],
  },
  {
    id: "rezilo-digital-product-system",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "companion",
    aspect: "16 / 10",
    title: "Rezilo — Product Launch UI & Visual System",
    shortSummary: "Dark-mode product feature cards, iconography, mobile UI mockups, and London rollout.",
    thumbnail: "/images/wetransfer/rezilo/09-chatgpt-image-jul-15-2026-10-58-56-pm.jpg",
    description: [
      "Digital product presentation system for muscle recovery device Rezilo ('Recovery, Reinvented.'), spanning dark-mode feature breakdown UI cards, custom iconography, mobile mockups, and London transit placements.",
    ],
    deliverables: [
      "Product feature & comparison UI layouts",
      "Mobile interface mockups & cobalt/black visual system",
      "London OOH & launch visuals",
    ],
    tags: ["Interactive Concepts", "Visual Systems", "UI/UX Design"],
    media: [
      img("/images/wetransfer/rezilo/09-chatgpt-image-jul-15-2026-10-58-56-pm.jpg", 1536, 1024, "Rezilo — Mobile Interface Mockups"),
      img("/images/wetransfer/rezilo/03-chatgpt-image-jul-15-2026-07-41-56-pm.jpg", 1254, 1254, "Rezilo — Hero Product Feature Card"),
      img("/images/wetransfer/rezilo/02-chatgpt-image-jul-15-2026-07-32-58-pm.jpg", 1254, 1254, "Rezilo — Iconography & Benefit Breakdown"),
      img("/images/wetransfer/rezilo/04-chatgpt-image-jul-15-2026-08-33-15-pm.jpg", 1254, 1254, "Rezilo — Post-Workout Feature Card"),
      img("/images/wetransfer/rezilo/10-rezilo-end-your-day-better-1200x1200.jpg", 1200, 1200, "Rezilo — End Your Day Better"),
      img("/images/wetransfer/rezilo/05-chatgpt-image-jul-15-2026-09-30-58-pm.jpg", 1254, 1254, "Rezilo — Street Transit Display"),
      img("/images/wetransfer/rezilo/06-chatgpt-image-jul-15-2026-09-59-19-pm.jpg", 1536, 1024, "Rezilo — Underground Interior Banner"),
      img("/images/wetransfer/rezilo/07-chatgpt-image-jul-15-2026-10-02-01-pm.jpg", 1535, 1024, "Rezilo — Paddington Billboard"),
      img("/images/wetransfer/rezilo/08-chatgpt-image-jul-15-2026-10-04-03-pm.jpg", 1535, 1024, "Rezilo — Victoria Platform Display"),
      img("/images/wetransfer/rezilo/01-chatgpt-image-jul-15-2026-06-59-10-pm.png", 1536, 1024, "Rezilo — Wordmark on Dark"),
      img("/images/wetransfer/rezilo/11-whatsapp-image-2026-07-14-at-7-24-43-pm.jpg", 1600, 900, "Rezilo — Cobalt Lockup"),
    ],
  },
  {
    id: "desi-chai-london-system",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "half",
    aspect: "16 / 9",
    title: "Desi Chai London — Typography & Color System",
    shortSummary: "Structured display and UI type scales, hex color tokens, and hospitality identity.",
    thumbnail: "/images/wetransfer/desi-chai-london/08-slide-6.jpg",
    description: [
      "Visual design system for Desi Chai London establishing heading/subheading/body typography (Mohabatin & Montserrat), hex color tokens, and physical-to-digital brand touchpoints.",
    ],
    deliverables: [
      "UI typography hierarchy & type specimen slides",
      "Hex color palette & storefront visual system",
    ],
    tags: ["Typography & Color", "Visual Systems", "Design System"],
    media: [
      img("/images/wetransfer/desi-chai-london/08-slide-6.jpg", 1920, 1080, "Desi Chai London — Storefront Signage"),
      img("/images/wetransfer/desi-chai-london/04-slide-10.jpg", 1920, 1080, "Typography Scale — Mohabatin & Montserrat"),
      img("/images/wetransfer/desi-chai-london/09-slide-8.jpg", 1920, 1080, "Color Token System"),
      img("/images/wetransfer/desi-chai-london/05-slide-3.jpg", 1920, 1080, "Logo Lockup System"),
      img("/images/wetransfer/desi-chai-london/06-slide-4.jpg", 1920, 1080, "Editorial Layout I"),
      img("/images/wetransfer/desi-chai-london/11-slide-7.jpg", 1920, 1080, "Editorial Layout II"),
      img("/images/wetransfer/desi-chai-london/07-slide-5.jpg", 1920, 1080, "Loyalty Cards & Apparel"),
      img("/images/wetransfer/desi-chai-london/01-coffee-cup-mockup.jpg", 1920, 1440, "Branded Cup Mockup"),
      img("/images/wetransfer/desi-chai-london/02-maska-bun.jpg", 2400, 1600, "Tableware Sleeve"),
      img("/images/wetransfer/desi-chai-london/03-paper-bag-mockup-series-01.jpg", 2400, 2400, "Takeaway Bag"),
      img("/images/wetransfer/desi-chai-london/10-slide-9.jpg", 1920, 1080, "Counter Packaging"),
    ],
  },
  {
    id: "tratech-digital-system",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "half",
    aspect: "16 / 9",
    title: "Tratech Consulting — Digital UI & Iconography",
    shortSummary: "Grid-aligned UI iconography, web typography rules, and corporate visual system.",
    thumbnail: "/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png",
    description: [
      "Digital-first design system for Tratech Consulting built around custom UI iconography, Silka/Poppins web typography, and structured layout grids.",
    ],
    deliverables: [
      "Custom UI iconography grid & digital color palette",
      "Web typography & modular layout templates",
    ],
    tags: ["Visual Systems", "UI Iconography", "Typography & Layout"],
    media: [
      img("/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png", 1366, 768, "Tratech — Digital System Overview"),
      img("/images/2520e1_67e9549ba4e842a2b40101ae6b5ce8b8_mv2.png", 1366, 768, "Tratech — Custom UI Iconography"),
      img("/images/2520e1_e39a8141703b42119dcd0fadc8971fc9_mv2.png", 1366, 768, "Tratech — Web Typography"),
      img("/images/2520e1_65f0a9ff3b1a4ca58727392336f7a034_mv2.png", 1366, 768, "Tratech — Digital Color System"),
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
    id: "gulahmed-storefront-visuals",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "GulAhmed — Online Storefront & Sale Banners",
    shortSummary: "Conversion-focused promotional banners and mobile retail visuals for gulahmedshop.com.",
    thumbnail: "/images/wetransfer/gulahmed/05-94ad8dbd-a00b-4e3e-9502-412c8b6c5d87.jpg",
    description: [
      "Online storefront promotional banners, Ideas Home product cards, and mobile 9:16 sale layouts designed for GulAhmed (gulahmedshop.com).",
    ],
    deliverables: [
      "Online store clearance & flash-sale hero banners",
      "Desktop square & 9:16 mobile retail layouts",
    ],
    tags: ["Conversion Design", "Storefront Visuals", "Responsive Layouts"],
    media: [
      img("/images/wetransfer/gulahmed/05-94ad8dbd-a00b-4e3e-9502-412c8b6c5d87.jpg", 1280, 1280, "GulAhmed — Flat 40% Off Banner"),
      img("/images/wetransfer/gulahmed/06-9a93948b-a794-4c44-8c55-84f08c4b1a84.jpg", 1000, 1000, "GulAhmed Ideas Home — Collection Card"),
      img("/images/wetransfer/gulahmed/04-80984262-135960921193773-3164357274617511936.jpg", 960, 960, "GulAhmed — Year End Sale Banner"),
      img("/images/wetransfer/gulahmed/02-0df19760-32c8-40c7-9663-9b7e1f331a5b.jpg", 1000, 1000, "GulAhmed — Product Pricing Card"),
      img("/images/wetransfer/gulahmed/01-09690142-e80b-4acb-a6bd-a7d128495759.jpg", 1280, 1280, "GulAhmed — Countdown Banner"),
      img("/images/wetransfer/gulahmed/03-7eb71849-551b-4795-9350-dc1aa4127cc2.jpg", 720, 1280, "GulAhmed — Mobile Story Layout I"),
      img("/images/wetransfer/gulahmed/07-ad5b4834-8db6-427b-b3e4-f16e28ccb81c.jpg", 720, 1280, "GulAhmed — Mobile Bedding Pricing"),
      img("/images/wetransfer/gulahmed/08-be5003cb-df25-44e2-b7b7-0ea95f4a30b5.jpg", 720, 1280, "GulAhmed — Vertical Apparel Layout"),
      img("/images/wetransfer/gulahmed/09-cfaf0615-6feb-4d73-b8ae-7dd0f4abda5b.jpg", 720, 1280, "GulAhmed — Flash Promo Layout"),
    ],
  },
  {
    id: "g-natural-product-ui",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "G'Natural — Product Merchandising & Carousel UI",
    shortSummary: "D2C skincare product cards, ingredient callouts, and promotional bundle carousels.",
    thumbnail: "/images/wetransfer/g-natural/10-april-gn-cc10.png",
    description: [
      "20-piece online product merchandising suite and 4-slide bundle carousel created for botanical skincare brand G'Natural.",
    ],
    deliverables: [
      "E-commerce product feature cards",
      "4-slide promotional bundle carousel",
    ],
    tags: ["Conversion Design", "Product UI", "Visual Concepts"],
    media: [
      img("/images/wetransfer/g-natural/10-april-gn-cc10.png", 900, 900, "G'Natural — Energy Booster Card"),
      img("/images/wetransfer/g-natural/13-april-gn-cc4.png", 900, 900, "G'Natural — Deep Pore Detox Scrub"),
      img("/images/wetransfer/g-natural/11-april-gn-cc11.png", 900, 900, "G'Natural — Essential Oil Trio"),
      img("/images/wetransfer/g-natural/12-april-gn-cc3.png", 900, 900, "G'Natural — Botanical Blend"),
      img("/images/wetransfer/g-natural/14-april-gn-cc5.png", 900, 900, "G'Natural — Peppermint & Lavender"),
      img("/images/wetransfer/g-natural/16-april-gn-cc7.png", 900, 900, "G'Natural — Orange & Lavender"),
      img("/images/wetransfer/g-natural/15-april-gn-cc6.png", 900, 900, "G'Natural — Cleansing Routine"),
      img("/images/wetransfer/g-natural/02-04d.png", 800, 800, "G'Natural — Orange Oil Feature"),
      img("/images/wetransfer/g-natural/06-07.png", 800, 800, "G'Natural — Rosehip Oil Feature"),
      img("/images/wetransfer/g-natural/04-05-01.png", 800, 800, "G'Natural — Lavender Oil Feature"),
      img("/images/wetransfer/g-natural/09-15.png", 800, 800, "G'Natural — Herbal Hair Blend"),
      img("/images/wetransfer/g-natural/01-02.png", 800, 800, "G'Natural — Love of Nature"),
      img("/images/wetransfer/g-natural/03-05.png", 800, 800, "G'Natural — Almond Care"),
      img("/images/wetransfer/g-natural/05-06.png", 800, 800, "G'Natural — Tea Tree Care"),
      img("/images/wetransfer/g-natural/07-08.png", 800, 800, "G'Natural — Skincare Visual"),
      img("/images/wetransfer/g-natural/08-10.png", 800, 800, "G'Natural — Interactive Visual"),
      img("/images/wetransfer/g-natural/17-carousel-1.png", 600, 600, "G'Natural — Bundle Carousel 01"),
      img("/images/wetransfer/g-natural/18-carousel-2.png", 600, 600, "G'Natural — Bundle Carousel 02"),
      img("/images/wetransfer/g-natural/19-carousel-3.png", 600, 600, "G'Natural — Bundle Carousel 03"),
      img("/images/wetransfer/g-natural/20-carousel-4.png", 600, 600, "G'Natural — Bundle Carousel 04"),
    ],
  },
  {
    id: "admiah-digital-identity",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Admiah Digital — Agency Visual System",
    shortSummary: "Geometric grid construction, web typography, and high-contrast yellow/ink UI tokens.",
    thumbnail: "/images/2520e1_427eb28792ed4b338d7840f790a5c0bb_mv2.png",
    description: [
      "Digital-first visual system designed for performance marketing agency Admiah Digital across dark and light interfaces.",
    ],
    deliverables: [
      "Geometric mark & grid system",
      "Typography & hex color specifications",
    ],
    tags: ["Visual Systems", "Typography & Color", "UI Identity"],
    media: [
      img("/images/2520e1_427eb28792ed4b338d7840f790a5c0bb_mv2.png", 1366, 768, "Admiah Digital — Dark Lockup"),
      img("/images/2520e1_ccc64c6a62e7486697bf879ff2c795b4_mv2.png", 1366, 768, "Admiah Digital — Monogram"),
      img("/images/2520e1_250c8754a68d4cf5a24bba9aae4769da_mv2.png", 1366, 768, "Admiah Digital — Construction Grid"),
      img("/images/2520e1_4c1ffe21fc6d4e48bd7e9e0531162b3d_mv2.png", 1366, 768, "Admiah Digital — Typography"),
      img("/images/2520e1_af893d32e393440587c7434a1b338b0f_mv2.png", 1366, 768, "Admiah Digital — Color System"),
      img("/images/2520e1_f7784e764260440989fc17151f91cad5_mv2.png", 1366, 768, "Admiah Digital — Hex Tokens"),
      img("/images/2520e1_bc1850f18fba45049269a92fdc9d30ef_mv2.jpg", 1920, 2400, "Admiah Digital — Collateral"),
    ],
  },
  {
    id: "titan-digital-emailer-layouts",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Titan (TATA Group) — Digital Mailer Layouts",
    shortSummary: "Structured vertical HTML/digital emailer layouts with editorial grid typography.",
    thumbnail: "/images/2520e1_4afb83907f1e4d28ad0be27a9fc8f6da_mv2.jpg",
    description: [
      "Multi-part vertical digital mailer series created for Titan Company (TATA Group), combining scannable editorial grids with conceptual product art direction.",
    ],
    deliverables: [
      "7 responsive-ready vertical mailer layouts",
      "Editorial grid & typographic hierarchy",
    ],
    tags: ["Digital Layouts", "Typography & Layout", "Editorial UI"],
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
  {
    id: "dewa-trust-web-banners",
    category: "website-design",
    categoryLabel: "Website Design",
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Dewa Trust — Widescreen Web Banners & Digital Series",
    shortSummary: "Widescreen header banners and structured digital awareness layouts for Dewa Trust.",
    thumbnail: "/images/wetransfer/dewa-trust/01-cover-photo.jpg",
    description: [
      "Widescreen web/social header banners ('Born To Stand Out!') and digital campaign layouts designed for Dewa Trust.",
    ],
    deliverables: [
      "Widescreen header cover layouts (1702×630)",
      "11 digital awareness & educational cards",
    ],
    tags: ["Web Banners", "Visual Layouts", "Digital Design"],
    media: [
      img("/images/wetransfer/dewa-trust/01-cover-photo.jpg", 1702, 630, "Dewa Trust — Widescreen Header I"),
      img("/images/wetransfer/dewa-trust/02-cover-photo2.jpg", 1702, 630, "Dewa Trust — Widescreen Header II"),
      img("/images/wetransfer/dewa-trust/06-deewa-trust-april-cc-2.jpg", 1115, 1229, "Empowering Education Since 1967"),
      img("/images/wetransfer/dewa-trust/09-deewa-trust-april-cc-7.jpg", 1115, 1229, "World Art Day Layout"),
      img("/images/wetransfer/dewa-trust/04-deewa-trust-april-cc-10.jpg", 1115, 1229, "Earth Day Layout"),
      img("/images/wetransfer/dewa-trust/10-deewa-trust-april-cc-8.jpg", 1115, 1229, "World Book Day Layout"),
      img("/images/wetransfer/dewa-trust/11-deewa-trust-april-cc-9.jpg", 1115, 1229, "Education Support Card"),
      img("/images/wetransfer/dewa-trust/03-deewa-trust-april-cc-1.png", 1115, 1229, "Inclusive Learning Card"),
      img("/images/wetransfer/dewa-trust/05-deewa-trust-april-cc-11.png", 1115, 1229, "Interactive Math Card"),
      img("/images/wetransfer/dewa-trust/07-deewa-trust-april-cc-5.png", 1115, 1229, "World Health Day Card"),
      img("/images/wetransfer/dewa-trust/08-deewa-trust-april-cc-6.jpg", 1115, 1229, "Student Feature"),
      img("/images/wetransfer/dewa-trust/12-deewa-trust-april-cc-square.jpg", 1080, 1080, "Square Campaign Card I"),
      img("/images/wetransfer/dewa-trust/13-deewa-trust-april-ccs-square.png", 1080, 1080, "Square Campaign Card II"),
    ],
  },

  // =========================================================================
  // PRIORITY 03 — INDEPENDENT DEVELOPMENT PORTFOLIOS (NEXT.JS & REACT.JS)
  // =========================================================================
  {
    id: "nextjs-portfolio-platform",
    category: "nextjs",
    categoryLabel: "Next.js",
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Motion-First Creative Portfolio Platform",
    shortSummary: "Next.js 15 App Router architecture with static prerendering, GSAP ScrollTrigger, and optimized media.",
    thumbnail: "/images/portfolio/nextjs-home.png",
    description: [
      "Production Next.js 15 web application engineered with App Router, static route generation, URL-synced portfolio views, and GSAP scroll choreography.",
    ],
    deliverables: [
      "Next.js 15 App Router multi-page architecture",
      "Automated image & lazy video optimization",
      "SEO metadata & static prerendering",
    ],
    tags: ["Next.js 15", "App Router", "SSR / SSG"],
    media: [
      img("/images/portfolio/nextjs-home.png", 1440, 900, "Next.js 15 — Motion Hero & Showreel Stage"),
      img("/images/portfolio/nextjs-portfolio.png", 1440, 900, "Next.js 15 — Editorial Portfolio Grid"),
      img("/images/portfolio/nextjs-about.png", 1440, 900, "Next.js 15 — Skills & Profile Architecture"),
    ],
  },
  {
    id: "reactjs-interactive-media-suite",
    category: "reactjs",
    categoryLabel: "React.js",
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Interactive Motion Lab & Media Explorer",
    shortSummary: "Modular React 19 UI components for live motion demos, category filtering, and modal playback.",
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

  // =========================================================================
  // SELECTED BRAND, PACKAGING & CAMPAIGN WORK (Visible in All Work)
  // =========================================================================
  {
    id: "chatori-brand-packaging",
    category: "visual-archive",
    categoryLabel: "Brand & Packaging",
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Chatori — Brand Identity, Menu & Packaging",
    shortSummary: "Pop-art street food identity, menu layout, takeaway packaging, and OOH banners.",
    thumbnail: "/images/wetransfer/chatori/12-chatgpt-image-jul-29-2026-06-41-22-pm.jpg",
    description: [
      "Expressive Desi pop-art identity, full menu layout, cup/bag packaging, and street pole OOH banners for Chatori.",
    ],
    deliverables: [
      "Logo, menu layout & takeaway packaging",
      "Pop-art food campaign series",
    ],
    tags: ["Brand Identity", "Menu Layout", "Packaging"],
    media: [
      img("/images/wetransfer/chatori/12-chatgpt-image-jul-29-2026-06-41-22-pm.jpg", 1536, 1024, "Chatori — Key Visual"),
      img("/images/wetransfer/chatori/01-chatgpt-image-jul-28-2026-05-57-48-pm.png", 1254, 1254, "Chatori — Logo Mark"),
      img("/images/wetransfer/chatori/08-chatgpt-image-jul-28-2026-09-58-00-pm.jpg", 1086, 1448, "Chatori — Full Menu Layout"),
      img("/images/wetransfer/chatori/04-chatgpt-image-jul-28-2026-07-08-19-pm.jpg", 1402, 1122, "Chatori — Chai Cup Packaging"),
      img("/images/wetransfer/chatori/10-chatgpt-image-jul-28-2026-10-14-16-pm.jpg", 1254, 1254, "Chatori — Paper Bag"),
      img("/images/wetransfer/chatori/11-chatgpt-image-jul-29-2026-05-52-44-pm.jpg", 1024, 1536, "Chatori — Street OOH Banner"),
      img("/images/wetransfer/chatori/05-chatgpt-image-jul-28-2026-08-36-55-pm.jpg", 1254, 1254, "Chatori — Naan Sense"),
      img("/images/wetransfer/chatori/06-chatgpt-image-jul-28-2026-08-45-41-pm.jpg", 1254, 1254, "Chatori — Butter Believe It"),
      img("/images/wetransfer/chatori/07-chatgpt-image-jul-28-2026-09-16-27-pm.jpg", 1254, 1254, "Chatori — Desi Platter"),
      img("/images/wetransfer/chatori/02-chatgpt-image-jul-28-2026-06-27-54-pm.jpg", 1254, 1254, "Chatori — Illustration I"),
      img("/images/wetransfer/chatori/03-chatgpt-image-jul-28-2026-06-34-41-pm.jpg", 1254, 1254, "Chatori — Illustration II"),
      img("/images/wetransfer/chatori/09-chatgpt-image-jul-28-2026-10-09-03-pm.jpg", 1122, 1402, "Chatori — Golgappa Poster"),
    ],
  },
  {
    id: "yeah-scoopy-ice-cream",
    category: "visual-archive",
    categoryLabel: "Packaging & OOH",
    gridSpan: "half",
    aspect: "16 / 10",
    title: "Yeah! Scoopy — Packaging & Digital OOH",
    shortSummary: "Multi-flavour ice cream tub packaging, mall digital totems, and escalator murals.",
    thumbnail: "/images/wetransfer/yeah-scoopy/10-chatgpt-image-jul-26-2026-02-53-29-pm.jpg",
    description: [
      "Pastel tub packaging series, digital mall totems, and summer OOH visuals created for artisanal ice cream brand Yeah! Scoopy.",
    ],
    deliverables: [
      "5-flavour ice cream tub packaging",
      "Digital OOH totems & escalator murals",
    ],
    tags: ["Packaging", "Digital OOH", "Art Direction"],
    media: [
      img("/images/wetransfer/yeah-scoopy/10-chatgpt-image-jul-26-2026-02-53-29-pm.jpg", 1672, 941, "Yeah! Scoopy — Tub Range"),
      img("/images/wetransfer/yeah-scoopy/04-chatgpt-image-jul-17-2026-07-32-15-pm.jpg", 1536, 1024, "Yeah! Scoopy — Escalator Mural"),
      img("/images/wetransfer/yeah-scoopy/11-chatgpt-image-jul-26-2026-03-58-01-pm.jpg", 1402, 1122, "Yeah! Scoopy — Flavour Flatlay"),
      img("/images/wetransfer/yeah-scoopy/03-chatgpt-image-jul-17-2026-06-46-59-pm.jpg", 1024, 1536, "Yeah! Scoopy — Digital Totem"),
      img("/images/wetransfer/yeah-scoopy/01-chatgpt-image-jul-17-2026-06-32-10-pm.jpg", 1086, 1448, "Yeah! Scoopy — Poster"),
      img("/images/wetransfer/yeah-scoopy/02-chatgpt-image-jul-17-2026-06-43-02-pm.jpg", 1024, 1536, "Yeah! Scoopy — Promenade Banner"),
      img("/images/wetransfer/yeah-scoopy/05-chatgpt-image-jul-17-2026-08-03-56-pm.jpg", 1307, 1203, "Yeah! Scoopy — Lifestyle I"),
      img("/images/wetransfer/yeah-scoopy/06-chatgpt-image-jul-25-2026-05-02-50-pm.jpg", 941, 1672, "Yeah! Scoopy — Mint Choc Chip"),
      img("/images/wetransfer/yeah-scoopy/07-chatgpt-image-jul-25-2026-05-07-44-pm.jpg", 941, 1672, "Yeah! Scoopy — Vanilla Bean"),
      img("/images/wetransfer/yeah-scoopy/08-chatgpt-image-jul-25-2026-11-25-45-am.jpg", 1122, 1402, "Yeah! Scoopy — Summer Portrait"),
      img("/images/wetransfer/yeah-scoopy/09-chatgpt-image-jul-26-2026-01-11-48-pm.jpg", 1023, 1537, "Yeah! Scoopy — Multi-Scoop"),
    ],
  },
  {
    id: "lure-jewellery-campaign",
    category: "visual-archive",
    categoryLabel: "Editorial Campaign",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Lure Jewellery — Editorial Luxury Series",
    shortSummary: "Monochrome and champagne-gold editorial campaign for statement jewellery.",
    thumbnail: "/images/wetransfer/lure-jewellery/07-lure-may-cc8.png",
    description: [
      "Selective-gold monochrome editorial visuals produced for Lure Jewellery exhibitions and seasonal collections.",
    ],
    deliverables: ["Editorial campaign series", "Exhibition & seasonal visuals"],
    tags: ["Art Direction", "Luxury Editorial", "Campaign"],
    media: [
      img("/images/wetransfer/lure-jewellery/07-lure-may-cc8.png", 900, 900, "Lure — Glamour"),
      img("/images/wetransfer/lure-jewellery/08-lure-may-cc9.png", 900, 900, "Lure — Go Bold"),
      img("/images/wetransfer/lure-jewellery/05-lure-may-cc1.png", 900, 900, "Lure — Ear Pieces"),
      img("/images/wetransfer/lure-jewellery/01-exhibition-post-lure.png", 900, 900, "Lure — Eid Exhibition"),
      img("/images/wetransfer/lure-jewellery/06-lure-may-cc6.png", 900, 900, "Lure — Collection Card"),
      img("/images/wetransfer/lure-jewellery/03-lure-june-cc4.png", 900, 900, "Lure — Story I"),
      img("/images/wetransfer/lure-jewellery/04-lure-june-cc401.png", 900, 900, "Lure — Story II"),
      img("/images/wetransfer/lure-jewellery/09-mother-s-day.png", 900, 900, "Lure — Mother's Day"),
      img("/images/wetransfer/lure-jewellery/02-lure-june-cc-ig.png", 900, 900, "Lure — Feature"),
    ],
  },
  {
    id: "nandos-peri-peri-campaign",
    category: "visual-archive",
    categoryLabel: "Digital Campaign",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Nando's — PERi-PERi Campaign",
    shortSummary: "Copy-led digital campaign posters celebrating Nando's iconic PERi-PERi range.",
    thumbnail: "/images/wetransfer/nandos/02-23428985-dcbe-4630-94e5-76a1e88e6b1d.jpg",
    description: [
      "Bold typography-driven digital posters created around Nando's signature tone of voice and PERi-PERi sauces.",
    ],
    deliverables: ["Match-day & product campaign visuals"],
    tags: ["Campaign", "Typography", "Nando's"],
    media: [
      img("/images/wetransfer/nandos/02-23428985-dcbe-4630-94e5-76a1e88e6b1d.jpg", 1000, 1000, "Nando's — Classics"),
      img("/images/wetransfer/nandos/01-22979029-5032-4af9-a47d-7f2cbe753de0.jpg", 654, 970, "Nando's — Basted"),
      img("/images/wetransfer/nandos/03-d83c4e12-b760-4f5c-9a60-2f953ab4a65f.jpg", 654, 970, "Nando's — Platter"),
      img("/images/wetransfer/nandos/04-f9bd10ea-f537-4a40-8dd2-e0a3a0430bd5.jpg", 654, 970, "Nando's — Extra Hot"),
    ],
  },
  {
    id: "durex-digital-campaigns",
    category: "visual-archive",
    categoryLabel: "Digital Campaign",
    gridSpan: "third",
    aspect: "1 / 1",
    title: "Durex — Moment-Marketing Series",
    shortSummary: "Minimalist conceptual ads and topical digital creatives for Durex.",
    thumbnail: "/images/wetransfer/durex/06-newyear3.png",
    description: [
      "Conceptual social and digital campaign visuals crafted for Durex across seasonal and cultural moments.",
    ],
    deliverables: ["6 conceptual campaign graphics"],
    tags: ["Conceptual Ads", "Digital Creative", "Durex"],
    media: [
      img("/images/wetransfer/durex/06-newyear3.png", 1000, 1000, "Durex — New Year"),
      img("/images/wetransfer/durex/01-2561fb4b-ff7f-424e-a4d5-6bf1d80e5d82.jpg", 900, 900, "Durex — Minimalist Concept"),
      img("/images/wetransfer/durex/04-9eedc826-a9a8-42be-a846-e8eba507486b.jpg", 900, 900, "Durex — Summer Flatlay"),
      img("/images/wetransfer/durex/02-65587441-23843499281230576-689767319196821094.jpg", 540, 540, "Durex — Cricket Topical"),
      img("/images/wetransfer/durex/03-66647919-23843515145310576-416153488988517171.jpg", 540, 540, "Durex — Notification UI Hook"),
      img("/images/wetransfer/durex/05-c28a4f06-49b7-4dd0-893b-c8d6e3f30136.jpg", 900, 900, "Durex — Awareness"),
    ],
  },
  {
    id: "totle-kidswear-branding",
    category: "visual-archive",
    categoryLabel: "Brand Identity",
    gridSpan: "third",
    aspect: "16 / 10",
    title: "Totle Kidswear — Identity & Mobile Touchpoints",
    shortSummary: "Playful mascot identity, mobile screen mockups, color palette, and packaging.",
    thumbnail: "/images/2520e1_f8700f7be10842a88d42248a95f9d686_mv2.jpg",
    description: [
      "Complete brand system, character mascot, mobile interface mockups, and packaging for kids' apparel brand Totle.",
    ],
    deliverables: ["Logo, mascot, palette & mobile mockups"],
    tags: ["Brand System", "Mobile Mockups", "Packaging"],
    media: [
      img("/images/2520e1_4938a3e9f5114148b5adf4cccba5154c_mv2.jpg", 2400, 1350, "Totle — Mascot Mark"),
      img("/images/2520e1_77f8426bbb934b4389d6813d29987856_mv2.jpg", 2400, 1350, "Totle — Mobile Experience"),
      img("/images/2520e1_e77056a883ec4dccbf990ea119f6d879_mv2.jpg", 2400, 1350, "Totle — Apparel Tags"),
      img("/images/2520e1_577ca55083a24ea1b75a41702d8e0fed_mv2.jpg", 2400, 1350, "Totle — Retail Bag"),
      img("/images/2520e1_beee4da7e3ec488bb61b3f3903bead08_mv2.jpg", 2400, 1350, "Totle — Color Palette"),
      img("/images/2520e1_df25d33bc58443ada8c3962e8f003f36_mv2.jpg", 2400, 1350, "Totle — Typography"),
    ],
  },
  {
    id: "fitbox-brand-refresh",
    category: "visual-archive",
    categoryLabel: "Brand Identity",
    gridSpan: "third",
    aspect: "16 / 10",
    title: "FITBOX — Athletic Brand Refresh",
    shortSummary: "High-contrast dark athletic identity, display typography, and apparel system.",
    thumbnail: "/images/2520e1_08516072a0a84f0c9c657f48e0fc4e23_mv2.png",
    description: [
      "Athletic brand refresh modernizing FITBOX's logo geometry, typography, and high-contrast palette.",
    ],
    deliverables: ["Logo evolution & athletic brand guidelines"],
    tags: ["Brand Refresh", "Typography", "Visual System"],
    media: [
      img("/images/2520e1_08516072a0a84f0c9c657f48e0fc4e23_mv2.png", 1920, 1080, "FITBOX — Apparel"),
      img("/images/2520e1_299dc02d6fb240838ec27b905b4bc9a6_mv2.png", 1920, 1080, "FITBOX — Before & After"),
      img("/images/2520e1_e08b45e7460b495f83852db99291c5c8_mv2.png", 1920, 1080, "FITBOX — Display Type"),
      img("/images/2520e1_a75fc958c2294745803c525919ef7285_mv2.png", 1920, 1080, "FITBOX — Palette"),
      img("/images/2520e1_51efaa9cd65e4abaab3d004ec27ea630_mv2.png", 1920, 1080, "FITBOX — Lockups"),
    ],
  },
  {
    id: "surrey-hills-coffee-co",
    category: "visual-archive",
    categoryLabel: "Brand & Packaging",
    gridSpan: "third",
    aspect: "16 / 10",
    title: "Surrey Hills Coffee Co. — UK Artisan Identity",
    shortSummary: "Heritage coffee emblem, mobile van livery, compostable cups, and retail pouches.",
    thumbnail: "/images/2520e1_976719cd82434e12a575b38707278738_mv2.jpg",
    description: [
      "Sustainable UK coffee brand identity spanning emblem design, van livery, pouches, and outdoor posters.",
    ],
    deliverables: ["Identity, packaging & vehicle livery"],
    tags: ["Brand Identity", "Packaging", "OOH"],
    media: [
      img("/images/2520e1_976719cd82434e12a575b38707278738_mv2.jpg", 2400, 1664, "Surrey Hills — Cups"),
      img("/images/2520e1_ec0da9795a354e619fe519d9a6199fd5_mv2.jpg", 2400, 1350, "Surrey Hills — Coffee Van"),
      img("/images/2520e1_f95e67d3ef184ef3a2670ff20cb8e0a4_mv2.jpg", 2400, 1350, "Surrey Hills — Coffee Pouch"),
      img("/images/2520e1_ea30b999253b44ea87c5de79c3874b98_mv2.jpg", 2400, 1350, "Surrey Hills — Outdoor Posters"),
      img("/images/2520e1_037ebc86f78943079de4ca4271380fd2_mv2.jpg", 2400, 1350, "Surrey Hills — Emblem"),
    ],
  },
];
