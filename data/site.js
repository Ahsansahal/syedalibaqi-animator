/**
 * Central content & profile configuration for Syed Ali Abdul Baqi.
 *
 * Positioning:
 * Multidisciplinary Visual Artist, Motion Designer, Website Designer & Full-Stack Developer
 * 01 — Visual Art, Motion Design & Animation (Primary Focus)
 * 02 — Website Design, Storefront UI & UI/UX Systems
 * 03 — Website Development (WordPress, Shopify, React.js, Next.js, Laravel)
 */

export const site = {
  name: "Syed Ali Abdul Baqi",
  role: "Visual Artist, Motion Designer & Web Developer",
  secondaryRole: "Visual Artist · Motion Designer · Website Designer & Developer",
  location: "London, United Kingdom",
  email: "Syed_ali_baqi@hotmail.com",
  phones: [
    {
      label: "+44 7415 253939",
      tel: "+447415253939",
      whatsapp: "447415253939",
    },
  ],
  cvUrl: null,
  copyright: `© ${new Date().getFullYear()} Syed Ali Abdul Baqi`,
};

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Portfolio",
    href: "/projects",
    children: [
      { label: "All Work", href: "/projects" },
      { label: "Visual Art & Branding", href: "/projects?category=visual-art" },
      { label: "Motion & Animation", href: "/projects?category=motion-animation" },
      { label: "Website Design", href: "/projects?category=website-design" },
      { label: "WordPress", href: "/projects?category=wordpress" },
      { label: "Shopify", href: "/projects?category=shopify" },
      { label: "React.js", href: "/projects?category=reactjs" },
      { label: "Next.js", href: "/projects?category=nextjs" },
      { label: "Laravel", href: "/projects?category=laravel" },
    ],
  },
  { label: "Showreels", href: "/work" },
  { label: "Case Study", href: "/case-study" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const marquees = [
  { text: "Visual Artist · Motion Design · Art Direction · Cinematography", direction: "rtl" },
  { text: "Brand Campaigns · Packaging · Digital OOH · Visual Storytelling", direction: "ltr" },
  { text: "Website Design · UI/UX Systems · GSAP & ScrollTrigger", direction: "rtl" },
  { text: "WordPress · Shopify · React.js · Next.js · Laravel", direction: "ltr" },
];

export const home = {
  eyebrow: "London, United Kingdom · 8+ Years Experience",
  subtitleTag: "Visual Artist · Motion Designer · Website Designer & Developer",
  roleTitle: "Visual Artist, Motion Designer & Web Developer",
  heroLines: ["SYED ALI BAQI,", "VISUAL ARTIST", "& WEB DEVELOPER"],
  intro:
    "Multidisciplinary visual artist, motion designer, website UI/UX designer, and full-stack developer — merging visual storytelling, brand campaigns, and GSAP motion with custom WordPress, Shopify, React.js, Next.js & Laravel websites.",
  artistStatement: [
    "A former dancer turned visual artist and graphic designer with eight years of experience, I translate the foundations of movement into visual design. With a background in photography, animation, and cinematography, I take a multidisciplinary approach to storytelling merging my passion for performance with the power of design, motion graphics, and modern web creation.",
    "Projects span industries including food and beverage, sports nutrition, health and wellness, healthcare, luxury retail, real estate, tourism, and (DEI) recruitment. With creative campaigns, websites, and branded assets reaching communities across international markets including Pakistan, the United Kingdom, Spain, Italy, France, Portugal (Lisbon), Greece, and the US (Miami).",
  ],
  primaryCta: { label: "Explore Portfolio", href: "#portfolio" },
  secondaryCta: { label: "Let's Talk", href: "/contact" },
  priorities: [
    { index: "01", label: "Visual Art, Branding & Motion", href: "#portfolio" },
    { index: "02", label: "Website Design & UI/UX Systems", href: "/projects?category=website-design" },
    { index: "03", label: "WordPress · Shopify · React · Next.js · Laravel", href: "#development-portfolio" },
  ],
  showreel: {
    label: "Featured Showreel",
    src: "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
    poster: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
    title: "Visual Art, Motion & Creative Direction Showreel",
    meta: "Visual Storytelling · Kinetic Typography · Brand Motion · Digital Craft",
  },
};

export const skillsHierarchy = {
  motion: {
    priority: "01",
    eyebrow: "Primary Identity",
    title: "Visual Art, Motion Design & Animation",
    tagline:
      "Translating the foundations of movement, photography, and cinematography into bold visual design, brand campaigns, packaging, OOH, and choreographed GSAP motion.",
    skills: [
      "Visual Art & Art Direction",
      "Motion Design & Animation",
      "GSAP & ScrollTrigger",
      "Brand Identity & Packaging",
      "Campaigns & Digital OOH",
      "Photography & Cinematography",
      "Interactive Web Animations",
      "Kinetic Typography",
      "Creative Transitions",
      "Video & Showreels",
    ],
    previewVideo: {
      src: "/videos/2520e1_894e994732e24e81ae31dcc9d9853a37.mp4",
      poster: "/images/2520e1_894e994732e24e81ae31dcc9d9853a37f003.jpg",
      caption: "Kinetic Typography, Visual Rhythm & Direction",
    },
  },
  webDesign: {
    priority: "02",
    eyebrow: "Digital Craft & Systems",
    title: "Website Design & UI/UX",
    tagline:
      "Editorial landing pages, D2C e-commerce storefronts, structured typography and color token systems, and conversion-focused responsive layouts.",
    skills: [
      "Website Design",
      "UI/UX Design",
      "Landing Page Design",
      "E-Commerce Storefront UI",
      "Responsive Website Layouts",
      "Interactive UI Concepts",
      "Visual Design Systems",
      "Typography & Color Systems",
    ],
    previews: [
      {
        src: "/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png",
        label: "Landing UI",
      },
      {
        src: "/images/wetransfer/desi-chai-london/04-slide-10.jpg",
        label: "Type System",
      },
      {
        src: "/images/wetransfer/rezilo/09-chatgpt-image-jul-15-2026-10-58-56-pm.jpg",
        label: "Product UI",
      },
    ],
  },
  development: {
    priority: "03",
    eyebrow: "Platforms & Engineering",
    title: "Website Development & Full-Stack",
    tagline:
      "Fast, production-grade websites and custom web applications built across leading CMS platforms, React/Next.js frameworks, and Laravel.",
    groups: [
      {
        label: "CMS & E-Commerce",
        items: [
          { name: "WordPress Development", href: "/projects?category=wordpress" },
          { name: "Shopify Development", href: "/projects?category=shopify" },
        ],
      },
      {
        label: "Frontend Frameworks",
        items: [
          { name: "React.js", href: "/projects?category=reactjs" },
          { name: "Next.js", href: "/projects?category=nextjs" },
        ],
      },
      {
        label: "Backend & Full-Stack",
        items: [
          { name: "Laravel", href: "/projects?category=laravel" },
          { name: "Full-Stack Development" },
          { name: "Frontend Development" },
        ],
      },
      {
        label: "Core Technologies",
        items: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "JavaScript" },
          { name: "Tailwind CSS" },
          { name: "Bootstrap" },
        ],
      },
    ],
  },
};

export const workflow = [
  {
    step: "01",
    title: "Visual Direction & Story",
    detail: "Merging photography, cinematography, and brand narrative into a cohesive visual direction.",
  },
  {
    step: "02",
    title: "Campaigns & UI/UX Systems",
    detail: "Crafting brand touchpoints, packaging, OOH, typography scales, and responsive web layouts.",
  },
  {
    step: "03",
    title: "Motion & GSAP Craft",
    detail: "Animating hero films, social reels, kinetic type, and scroll-triggered web interactions.",
  },
  {
    step: "04",
    title: "Full-Stack Web Launch",
    detail: "Engineering fast production sites in WordPress, Shopify, React.js, Next.js, or Laravel.",
  },
];

export const work = {
  title: ["Motion Design", "& Visual Reels"],
  intro:
    "Showreels, hero campaign films, kinetic typography, and looping motion visuals crafted across international markets.",
};

export const caseStudy = {
  headerImage: "/images/2520e1_a7dbf2f3534b41738be94fc6c3b5b5cd_mv2.png",
  title: "Case Study: EVO ICL",
  subtitle: "Reframing Vision Correction Through Visual Art, Motion & Inclusive Storytelling",
  intro: [
    "EVO ICL is a globally recognised implantable collamer lens enabling people to live free from glasses or contact lenses. While known for clinical excellence, athlete-only campaigns had narrowed perception toward an elite niche.",
    "This integrated visual and motion campaign broadened appeal across Fearless, Creator, and Timeless lifestyle audiences.",
  ],
  heroFilm: {
    heading: 'Hero Film: "What\'s Your Superpower?"',
    body: "A flagship hero film unifying lifestyle storytelling around everyday confidence, creative freedom, and clarity — showcased across digital channels and live international events.",
    video: {
      src: "/videos/2520e1_7a25770b0b454a53a033770487dbc8ac.mp4",
      poster: "/images/2520e1_7a25770b0b454a53a033770487dbc8acf002.jpg",
    },
  },
  partnership: {
    heading: "Annual Brand Partnership & Impact Showreel",
    video: {
      src: "/videos/2520e1_197f1593b401417482c1ce67cbc94719.mp4",
      poster: "/images/2520e1_197f1593b401417482c1ce67cbc94719f002.jpg",
    },
    body: "90-second motion reel bringing together campaign direction, digital creative, and measurable audience impact.",
  },
  cta: { label: "Explore Full Portfolio", href: "/projects" },
};

export const projects = {
  headerVideo: "/videos/2520e1_496ea031ef16481f845a2511d960b811.mp4",
  headerImage: "/images/2520e1_496ea031ef16481f845a2511d960b811f003.jpg",
  title: "Selected Works",
  intro:
    "40+ curated works spanning visual art, brand identity, packaging, OOH campaigns, motion showreels, UI/UX website design, and WordPress, Shopify, React.js, Next.js & Laravel builds.",
};

export const generativeAI = {
  title: ["AI-Enhanced", "Visuals & Motion"],
  intro: [
    "Visual art and motion studies combining generative workflows with compositing, retouching, and finishing in Photoshop and After Effects.",
  ],
};

export const albumArt = {
  titleTop: "Album",
  titleBottom: "Art",
  phones: [
    { type: "image", src: "/images/2520e1_66be641019144fd6bd977104d7f254fd_mv2.png" },
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
    { type: "image", src: "/images/2520e1_81b9190b0ba943ee8adf7cf29b9d3e68_mv2.png" },
  ],
};

export const clients = {
  title: ["Selected brands", "& collaborations."],
};

export const about = {
  eyebrow: "Syed Ali Abdul Baqi · Visual Artist & Web Creator",
  headline: "Translating Movement into Visual Art, Motion & Modern Web.",
  bio: [
    "A former dancer turned visual artist and graphic designer with eight years of experience, I translate the foundations of movement into visual design. With a background in photography, animation, and cinematography, I take a multidisciplinary approach to storytelling — merging my passion for performance with the power of design and motion graphics.",
    "Projects span industries including food and beverage, sports nutrition, health and wellness, healthcare, luxury retail, real estate, tourism, and (DEI) recruitment. With creative campaigns and branded assets reaching communities across international markets including Pakistan, the United Kingdom, Spain, Italy, France, Portugal (Lisbon), Greece, and the US (Miami).",
    "Alongside visual direction and motion graphics, I design conversion-focused website UI/UX systems and engineer custom web platforms across WordPress, Shopify, React.js, Next.js, and Laravel.",
  ],
  industries: [
    "Food & Beverage",
    "Sports Nutrition",
    "Health & Wellness",
    "Healthcare",
    "Luxury & Retail",
    "Real Estate",
    "Tourism",
    "DEI Recruitment",
  ],
  markets: [
    "United Kingdom (London)",
    "Pakistan",
    "Spain",
    "Italy",
    "France",
    "Portugal (Lisbon)",
    "Greece",
    "United States (Miami)",
  ],
  tools: [
    "After Effects",
    "Photoshop & Illustrator",
    "Premiere Pro",
    "Photography & Cinematography",
    "Figma UI/UX",
    "GSAP & ScrollTrigger",
    "WordPress & Shopify",
    "React.js & Next.js",
    "Laravel & Tailwind CSS",
  ],
  quote:
    '"From performance to pixels — movement is the foundation that turns visual art, motion, and digital design into stories people feel."',
  author: "— Syed Ali Abdul Baqi",
  reelHeading: "Featured Visual & Motion Showreel",
  storyVideo: {
    src: "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
    poster: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
  },
};

export const contact = {
  heading: "LET'S WORK TOGETHER",
  taglineTop: "Need a visual artist, motion designer,",
  taglineBottom: "or website designer & developer?",
  summary:
    "Available for visual art direction, brand & OOH campaigns, motion design, UI/UX website design, and custom WordPress, Shopify, React.js, Next.js & Laravel builds.",
};
