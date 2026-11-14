/**
 * Central content file for the whole site, migrated from the original Wix site
 * (syedalibaqi.co.uk) and aligned with Syed Ali Abdul Baqi's professional positioning:
 *
 * 1. Animation & Motion Design — Primary specialization
 * 2. Custom Website Design & Development — Secondary specialization
 * 3. Full-Stack Website Development — WordPress, Shopify, React.js, Next.js & Laravel
 *
 * Gallery items live in ./galleries.js; Portfolio & platform items live in ./webPortfolio.js.
 */

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://syedalibaqi.co.uk",
  name: "Syed Ali Abdul Baqi",
  role: "Visual Artist, Motion Designer & Website Designer-Developer",
  location: "London",
  country: "United Kingdom",
  email: "Syed_ali_baqi@hotmail.com",
  phones: [
    { label: "+44 7415 253939", tel: "+447415253939", whatsapp: "447415253939" },
  ],
  cvUrl: null,
  copyright: "© 2026-27 by Syed Ali Abdul Baqi",
  positioningStatement:
    "I create animations, motion-driven experiences, and custom-designed websites that I develop using modern technologies and platforms.",
  defaultOgImage: "/images/2520e1_b191a0a4b2df483caeae69dd792332e7_mv2.png",
  socialBios: {
    headline:
      "Motion Designer & Website Designer-Developer | Animation, Motion-Driven Experiences & Custom Websites (WordPress, Shopify, React.js, Next.js & Laravel)",
    short:
      "I create animations, motion-driven experiences, and custom-designed websites that I develop using WordPress, Shopify, React.js, Next.js, and Laravel. Based in London.",
    long:
      "London-based Visual Artist, Motion Designer, and Custom Website Designer & Developer. I create animations, motion-driven brand experiences, and custom-designed websites developed end to end across WordPress, Shopify, React.js, Next.js, and Laravel.",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "Animation & Motion Design", href: "/work" },
      { label: "Website Design & Development", href: "/website-design-development" },
      { label: "Case Study", href: "/case-study" },
      { label: "Projects", href: "/projects" },
    ],
  },
  { label: "Album art", href: "/album-art" },
  { label: "Clients", href: "/clients" },
  { label: "About Ali", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Animation & Motion Design", href: "/work" },
  { label: "Custom Website Design & Development", href: "/website-design-development/custom-website-design" },
  { label: "WordPress", href: "/website-design-development/wordpress" },
  { label: "Shopify", href: "/website-design-development/shopify" },
  { label: "Projects", href: "/projects" },
  { label: "About Ali", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Scrolling marquee rows (Home + About), styled in the original Wix display aesthetic.
export const marquees = [
  { text: "Animation & Motion Design", direction: "rtl" },
  { text: "Custom Website Design & Development", direction: "ltr" },
  { text: "WordPress · Shopify · React.js · Next.js · Laravel", direction: "rtl" },
  { text: "Brand Identity & Visual Storytelling", direction: "ltr" },
];

export const home = {
  heroLines: ["Syed Ali Abdul Baqi,", "VISUAL ARTIST,", "LONDON"],
  positioningStatement:
    "I create animations, motion-driven experiences, and custom-designed websites that I develop using modern technologies and platforms.",
  showreel: {
    label: "Showreel",
    src: "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
    poster: "/images/2520e1_b191a0a4b2df483caeae69dd792332e7_mv2.png",
    title: "Click to view showreel",
  },
  projectsButton: { label: "Projects", href: "/projects" },
  glimpseLabel: "Glimpse",
  webPortfolioLabel: "Custom Website Design & Development",
};

/**
 * Connected Website Service definition — keeping custom visual design and
 * multi-platform technical development unified as one cohesive offering.
 */
export const websiteServices = {
  title: "Custom Website Design & Development",
  lead:
    "I design and develop custom websites based on project requirements, business goals, and the appropriate technology stack — uniting visual website design and full-stack technical development into a single connected workflow.",
  designGroup: {
    heading: "1. Custom Website Design",
    href: "/website-design-development/custom-website-design",
    summary:
      "Bespoke visual direction and responsive website layouts crafted around brand identity, conversion clarity, and real technical implementation.",
    items: [
      "Custom Business Website Design",
      "Creative Website Design",
      "Landing Page Design",
      "Responsive Website Design",
      "Custom Website Layouts",
      "Website Redesign & Modernization",
      "Interactive Website Experiences",
    ],
  },
  developmentGroup: {
    heading: "2. Website Development",
    summary:
      "Custom-coded websites engineered from the ground up with React.js, Next.js, and Laravel alongside dedicated WordPress and Shopify platform builds.",
    customDevelopment: {
      label: "Custom Website Development",
      shortLabel: "Custom Websites",
      href: "/website-design-development/custom-website-design",
      detail:
        "Bespoke frontend and full-stack websites custom-engineered around your goals using modern frameworks:",
      frameworks: [
        {
          label: "React.js Website Development",
          shortLabel: "React.js",
          href: "/website-design-development/reactjs",
          detail: "Interactive web experiences, motion-driven interfaces & modular components.",
        },
        {
          label: "Next.js Website Development",
          shortLabel: "Next.js",
          href: "/website-design-development/nextjs",
          detail: "Fast App Router websites, static/SSR performance & technical SEO.",
        },
        {
          label: "Laravel Website Development",
          shortLabel: "Laravel",
          href: "/website-design-development/laravel",
          detail: "Custom business web applications, MySQL schemas, client portals & REST APIs.",
        },
      ],
    },
    platforms: [
      {
        label: "WordPress Website Development",
        shortLabel: "WordPress",
        href: "/website-design-development/wordpress",
        detail: "Custom PHP themes, ACF/block architectures, corporate CMS sites & WooCommerce.",
      },
      {
        label: "Shopify Website Development",
        shortLabel: "Shopify",
        href: "/website-design-development/shopify",
        detail: "Online Store 2.0 storefronts, bespoke Liquid templates & D2C merchandising.",
      },
    ],
    items: [
      {
        label: "Custom Website Development (React.js, Next.js & Laravel)",
        shortLabel: "Custom Website Development",
        href: "/website-design-development/custom-website-design",
        detail: "Bespoke frontend and full-stack websites built with React.js, Next.js, and Laravel.",
      },
      {
        label: "WordPress Website Development",
        shortLabel: "WordPress",
        href: "/website-design-development/wordpress",
        detail: "Custom PHP themes, ACF/block architectures, corporate CMS sites & WooCommerce.",
      },
      {
        label: "Shopify Website Development",
        shortLabel: "Shopify",
        href: "/website-design-development/shopify",
        detail: "Online Store 2.0 storefronts, bespoke Liquid templates & D2C merchandising.",
      },
    ],
  },
};

export const work = {
  title: ["Animation", "& Motion Design"],
  intro:
    "As my primary specialization, animation and motion design sit at the heart of every campaign — taking projects from initial ideation through motion graphics, kinetic typography, sound design, and visual storytelling that elevate brand impact.",
};

export const caseStudy = {
  headerImage: "/images/2520e1_a7dbf2f3534b41738be94fc6c3b5b5cd_mv2.png",
  title: "Case Study: EVO ICL",
  subtitle: "Reframing Vision Correction Through Inclusive Segmentation",
  intro: [
    "EVO ICL is a globally recognised vision correction solution and an implantable collamer lens that enables people to live without the need for glasses or contact lenses acting as a barrier in their daily lives. It is known for premium, high performance outcomes. However, recent campaigns such as those featuring Lucy Bronze have unintentionally reinforced the perception that EVO ICL is primarily for an elite, high income audience.",
    "This project repositions the brand through inclusive customer segmentation, making EVO ICL feel accessible, relatable and desirable across broader lifestyle groups.",
  ],
  heroFilm: {
    heading: 'Hero Film: "What\'s Your Superpower?"',
    body: 'A central hero film titled "What\'s your superpower?" unified the segmented storytelling approach by positioning clear vision as a source of confidence, freedom and self expression rather than a clinical outcome. It brought together the Fearless, the Dreamer and the Bold through distinct visuals and real life scenarios, framing vision correction as a personal superpower that empowers different lifestyles in different ways. This ensured consistency across all content while still allowing each audience to feel individually represented, with an aspirational yet grounded tone. The film was also showcased at a live event to amplify impact and create a shared, high attention storytelling moment.',
    video: {
      src: "/videos/2520e1_7a25770b0b454a53a033770487dbc8ac.mp4",
      poster: "/images/2520e1_7a25770b0b454a53a033770487dbc8acf002.jpg",
    },
  },
  partnership: {
    heading: "A summary of a year-long partnership with the brand",
    video: {
      src: "/videos/2520e1_197f1593b401417482c1ce67cbc94719.mp4",
      poster: "/images/2520e1_197f1593b401417482c1ce67cbc94719f002.jpg",
    },
    body: "This piece brings together the creative output and campaign work developed over this period. It reflects the creative direction I led and the assets I produced across multiple activations.",
  },
  cta: { label: "View projects", href: "/projects" },
};

/**
 * Projects page. `gallery` keys refer to ./galleries.js.
 * galleryStyle: "row" = strip of portrait images, "thumbnails" = slideshow with thumbnail strip.
 * `video` (optional) + `videoPosition` ("before" | "after" the gallery).
 */
export const projects = {
  headerImage: "/images/2520e1_1065a251d75f4ba1b8e356d00f16129c_mv2.jpg",
  title: "Projects",
  intro:
    "Spanning animation, motion-driven brand campaigns, visual identities, and custom-designed & developed websites — each project is rooted in strategy, shaped by storytelling, and built with close attention to craft.",
  items: [
    {
      slug: "staar-surgical-project-bronze",
      title: "Staar Surgical: Project Bronze",
      categoryLabel: "Animation & Motion Design · Brand Campaign",
      categoryHref: "/work",
      body: [
        "STAAR Surgical has partnered with footballer Lucy Bronze to front the EVO ICL campaign, highlighting the lens implant as a lifestyle-enhancing vision correction solution that offers clarity, freedom, and safety without compromise. The campaign centers on Lucy's reputation for precision, performance, and vision on the field to inspire audiences considering alternatives to glasses and contact lenses. Production involves email campaigns and social media creatives that showcase Lucy's story, emphasize EVO ICL's key benefits - sharp vision, reversibility, and long-term safety - and position the brand as a trusted, aspirational choice for people seeking clear sight and greater lifestyle freedom.",
      ],
      gallery: "projectBronze",
      galleryStyle: "row",
      video: {
        src: "/videos/2520e1_13127af86a0c48479b5b905dbf3cc4d1.mp4",
        poster: "/images/2520e1_13127af86a0c48479b5b905dbf3cc4d1f002.jpg",
      },
      videoPosition: "after",
    },
    {
      slug: "ocl-vision-make-the-switch",
      title: "OCL Vision: Make the switch",
      subtitle: "Social Media & Motion Campaign",
      categoryLabel: "Animation & Motion Design · Social Campaign",
      categoryHref: "/work",
      body: [
        'The "Make the Switch" campaign targeted glasses and contact lens wearers aged 22–40, highlighting the frustrations of foggy lenses, dryness, and daily maintenance in a fast-paced lifestyle. Led by OCL Vision, a trusted leader in eye health and vision correction, the goal is to drive consultation bookings by positioning laser vision correction as the smart switch for living life without interruptions.',
      ],
      gallery: "projectOcl",
      galleryStyle: "row",
      video: {
        src: "/videos/2520e1_c458a697031a477fb59c0adb4bf3b8e1.mp4",
        poster: "/images/2520e1_c458a697031a477fb59c0adb4bf3b8e1f000.jpg",
      },
      videoPosition: "before",
    },
    {
      slug: "chatori-brand-identity-packaging",
      title: "Chatori: Brand Identity, Menu & Packaging",
      subtitle: "Desi Pop-Art Street Food Identity",
      categoryLabel: "Brand Identity & Packaging",
      categoryHref: "/projects",
      body: [
        "Expressive Desi pop-art visual identity created for street-food brand Chatori, spanning primary emblem design, full illustrated hospitality menu layout, takeaway chai cups and kraft bags, vertical street-pole OOH banners, and a 6-part pun-driven poster campaign.",
      ],
      gallery: "projectChatori",
      galleryStyle: "thumbnails",
    },
    {
      slug: "rezilo-london-ooh-launch-campaign",
      title: "Rezilo: London OOH & Launch Campaign",
      subtitle: "Out-of-Home & Brand Rollout",
      categoryLabel: "Brand Campaign & Custom Web Direction",
      categoryHref: "/website-design-development/custom-website-design",
      body: [
        "High-impact out-of-home campaign rollout across London Underground carriages, Paddington and Victoria station billboards, and street transit shelters for recovery brand Rezilo, paired with dark-mode metallic and cobalt brand lockups.",
      ],
      gallery: "projectRezilo",
      galleryStyle: "thumbnails",
    },
    {
      slug: "yeah-scoopy-packaging-digital-ooh",
      title: "Yeah! Scoopy: Packaging & Digital OOH",
      subtitle: "Artisanal Ice Cream Identity",
      categoryLabel: "Packaging & Digital OOH",
      categoryHref: "/projects",
      body: [
        "Complete 5-flavour retail ice cream tub packaging range (Mint Choc Chip, Vanilla Bean, Strawberry, Pistachio, and Mango) alongside mall escalator murals, vertical digital totems, promenade banners, and summer campaign posters.",
      ],
      gallery: "projectScoopy",
      galleryStyle: "thumbnails",
    },
    {
      slug: "desi-chai-london-brand-packaging",
      title: "Desi Chai London: Brand & Packaging",
      subtitle: "London Hospitality Identity",
      categoryLabel: "Brand Identity & Custom Web Layouts",
      categoryHref: "/website-design-development/custom-website-design",
      body: [
        "Hospitality brand system and tactile packaging suite crafted for Desi Chai London — uniting custom logo lockups, typography and colour palettes with branded chai cups, maska bun sleeves, takeaway paper bags, loyalty cards, and staff apparel.",
      ],
      gallery: "projectDesiChai",
      galleryStyle: "thumbnails",
    },
    {
      slug: "lure-jewellery-luxury-editorial",
      title: "Lure Jewellery: Luxury Editorial Series",
      subtitle: "Monochrome & Champagne-Gold Direction",
      categoryLabel: "Editorial Art Direction",
      categoryHref: "/projects",
      body: [
        "High-contrast monochrome editorial photography paired with selective champagne-gold jewellery highlights, boutique exhibition invitations, and seasonal social storytelling for Lure Jewellery.",
      ],
      gallery: "projectLure",
      galleryStyle: "row",
    },
    {
      slug: "gnatural-botanical-art-direction",
      title: "G'Natural: Botanical Art Direction",
      subtitle: "Skincare & Essential Oil Visuals",
      categoryLabel: "Art Direction & E-Commerce Merchandising",
      categoryHref: "/website-design-development/shopify",
      body: [
        "Botanical product art direction series blending natural ingredient compositions, soft studio lighting, and colour-coded skincare storytelling across Sweet Orange, Pure Rosehip, Lavender, Almond, Tea Tree, and Herbal Hair Oil blends.",
      ],
      gallery: "projectGNatural",
      galleryStyle: "thumbnails",
    },
    {
      slug: "nandos-peri-peri-campaign-posters",
      title: "Nando's: PERi-PERi Campaign Posters",
      subtitle: "Digital & Social Campaign",
      categoryLabel: "Digital & Social Campaign",
      categoryHref: "/projects",
      body: [
        "Bold copy-led digital posters celebrating Nando's flame-grilled platters, unmistakable tone of voice, and signature PERi-PERi spice levels.",
      ],
      gallery: "projectNandos",
      galleryStyle: "row",
    },
    {
      slug: "durex-conceptual-moment-marketing",
      title: "Durex: Conceptual & Moment Marketing",
      subtitle: "Social Campaign Series",
      categoryLabel: "Conceptual Digital Campaign",
      categoryHref: "/projects",
      body: [
        "Sharp minimalist visual metaphors and topical moment-marketing creatives produced across New Year countdowns, sporting events, and seasonal campaigns.",
      ],
      gallery: "projectDurex",
      galleryStyle: "thumbnails",
    },
    {
      slug: "dewa-trust-inclusive-education-series",
      title: "Dewa Trust: Inclusive Education Series",
      subtitle: "Cultural & Institutional Awareness",
      categoryLabel: "Institutional Campaign & Web Headers",
      categoryHref: "/website-design-development/custom-website-design",
      body: [
        "11-part institutional awareness campaign celebrating inclusive learning since 1967 across World Art Day, Earth Day, World Book Day, World Health Day, and student impact stories.",
      ],
      gallery: "projectDewa",
      galleryStyle: "thumbnails",
    },
    {
      slug: "admiah-digital-branding",
      title: "Admiah Digital: Branding",
      categoryLabel: "Brand Identity & Custom Business Web Design",
      categoryHref: "/website-design-development/custom-website-design",
      body: [
        "Agency Brief: Admiah Digital is a Google Ads agency specializing in highly targeted advertising campaigns that help businesses maximize ROI through data-driven precision and measurable growth. The brief was to create a clean, modern logo and brand identity in a single day that reflects the company's expertise, trustworthiness, and results-focused approach, with a digital-first design adaptable for web, social, and ad placements.",
      ],
      gallery: "projectAdmiah",
      galleryStyle: "thumbnails",
    },
    {
      slug: "totle-kidswear-brand-identity",
      title: "Brand Identity: Totle (Kidswear)",
      categoryLabel: "Brand Identity & Responsive Web Layouts",
      categoryHref: "/website-design-development/custom-website-design",
      body: [
        "Agency Brief: A fashion label specialising in children's apparel aiming to break into the sector with vibrant branding that conveys children's enthusiasm and energy across logo lockups, character mascot options, colour palettes, and retail packaging.",
      ],
      gallery: "projectTotle",
      galleryStyle: "thumbnails",
    },
    {
      slug: "tratech-consulting-rebranding",
      title: "Tratech Consulting: Rebranding",
      categoryLabel: "Corporate Rebranding & Website Modernization",
      categoryHref: "/website-design-development/custom-website-design",
      body: [
        "Agency Brief: Tratech Consulting engaged us to refresh their logo and evolve the overall brand identity across updated colours, typography, custom iconography, and digital applications — highlighting expertise, reliability, and adaptability in competitive markets.",
      ],
      gallery: "projectTratech",
      galleryStyle: "thumbnails",
    },
    {
      slug: "fitbox-brand-refresh",
      title: "FITBOX: Brand refresh",
      categoryLabel: "Brand Identity Refresh",
      categoryHref: "/projects",
      body: [
        "Agency Brief: A rapid brand refresh designed to update and modernize the look and feel of the brand while staying true to existing identity elements for continuity and recall.",
        "Year: 2026-27",
      ],
      gallery: "projectFitbox",
      galleryStyle: "thumbnails",
    },
    {
      slug: "titan-diversity-inclusion-campaign",
      title: "Titan: D&I campaign",
      categoryLabel: "Digital Campaign & Responsive HTML Layouts",
      categoryHref: "/website-design-development/custom-website-design",
      body: [
        "Agency Brief: Titan from the TATA group commissioned an internal communication campaign of digital emailers promoting Diversity and Inclusion awareness across employees.",
        "Year: 2020",
      ],
      gallery: "projectTitan",
      galleryStyle: "thumbnails",
    },
    {
      slug: "surrey-hills-coffee-co",
      title: "Surrey Hills Coffee Co.",
      subtitle: "Brief from the agency",
      categoryLabel: "Brand Identity & Packaging",
      categoryHref: "/projects",
      body: [
        "Brand identity, sustainable packaging, outdoor posters, and mobile van livery created for artisan coffee brand Surrey Hills Coffee Co. visiting popular walking spots across the Surrey Hills area.",
        "Year: 2026-27",
      ],
      gallery: "projectSurrey",
      galleryStyle: "thumbnails",
    },
  ],
};

export const generativeAI = {
  title: ["AI-Enhanced", "Creative Storytelling"],
  intro: [
    "This space showcases my finished artworks - visuals and videos born from a fusion of generative AI and traditional graphic design practices.",
    "Each piece begins with AI-generated imagery or motion, then evolves through detailed editing in Photoshop and After Effects to achieve the final, polished result. The outcome: fully realized concepts that blur the line between imagination and reality.",
  ],
};

export const albumArt = {
  titleTop: "Album",
  titleBottom: "Art",
  // The four "phone" tiles in the hero (2 stills + 2 looping videos)
  phones: [
    { type: "image", src: "/images/2520e1_66be641019144fd6bd977104d7f254fd_mv2.png", alt: "Custom album cover artwork preview" },
    {
      type: "video",
      src: "/videos/2520e1_77f7f535c0984cdb818f8f478e7121c6.mp4",
      poster: "/images/2520e1_77f7f535c0984cdb818f8f478e7121c6f000.jpg",
    },
    {
      type: "video",
      src: "/videos/2520e1_6cfee54e92444b3db995852447b996ea.mp4",
      poster: "/images/2520e1_6cfee54e92444b3db995852447b996eaf000.jpg",
    },
    { type: "image", src: "/images/2520e1_81b9190b0ba943ee8adf7cf29b9d3e68_mv2.png", alt: "Animated album art cover visual" },
  ],
};

export const clients = {
  title: ["Shaping brands", "one story at a time."],
  intro:
    "Selected international brands, healthcare leaders, hospitality concepts, and retail businesses across motion campaigns, brand storytelling, and custom website projects.",
};

export const about = {
  quote: '"Creativity takes courage"',
  author: "-Henri Matisse",
  storyHeading: "My Story",
  storyVideo: {
    src: "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
    poster: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
  },
  positioningStatement:
    "I create animations, motion-driven experiences, and custom-designed websites that I develop using modern technologies and platforms.",
  bio: [
    "A former dancer turned London-based visual artist, motion designer, and custom website designer & developer with over eight years of creative experience, I translate the rhythm and foundations of movement into visual storytelling and modern digital builds.",
    "With a multidisciplinary background spanning animation, motion graphics, cinematography, and brand direction, I partner with organisations across healthcare, sports nutrition, food and beverage, retail, hospitality, and B2B consulting — delivering work across the United Kingdom, Europe, the Middle East, South Asia, and the United States.",
    "When creating for the web, I keep visual design and technical engineering tightly connected: designing custom websites around each client's business goals and developing them end to end across WordPress, Shopify, React.js, Next.js, and Laravel.",
  ],
  specializations: [
    {
      order: "01",
      tag: "Primary Specialization",
      title: "Animation & Motion Design",
      description:
        "Showreels, hero campaign films, kinetic typography, stop-motion, social motion spots, and motion-driven digital storytelling.",
      href: "/work",
      cta: "View Animation & Motion →",
    },
    {
      order: "02",
      tag: "Secondary Specialization",
      title: "Custom Website Design & Development",
      description:
        "Connected visual website design and custom-coded full-stack development — responsive business websites, creative landing pages, and bespoke builds engineered with React.js, Next.js, and Laravel.",
      frameworks: [
        { label: "React.js", href: "/website-design-development/reactjs" },
        { label: "Next.js", href: "/website-design-development/nextjs" },
        { label: "Laravel", href: "/website-design-development/laravel" },
      ],
      href: "/website-design-development/custom-website-design",
      cta: "Explore Custom Websites →",
    },
    {
      order: "03",
      tag: "CMS & E-Commerce Platforms",
      title: "WordPress & Shopify Development",
      description:
        "Dedicated CMS and e-commerce platform builds — custom WordPress PHP themes & WooCommerce websites alongside conversion-led Shopify Online Store 2.0 storefronts.",
      href: "/website-design-development#technologies",
      cta: "Explore Platforms →",
    },
  ],
};

export const contact = {
  heading: "GET IN TOUCH",
  taglineTop: "Your product is almost",
  taglineBottom: "INVISIBLE without branding.",
  intro:
    "Available for animation & motion design, brand campaigns, and custom website design & development across WordPress, Shopify, React.js, Next.js, and Laravel.",
  whatsappIcon: "/images/2520e1_851d878d92cc4b3991e5f04dbcc8c693_mv2.png",
};
