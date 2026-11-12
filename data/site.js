/**
 * Central content & profile configuration for Syed Ali Abdul Baqi.
 *
 * Priority hierarchy:
 * 01 — Motion Design & Animation (Primary Focus)
 * 02 — Website Design & UI/UX
 * 03 — Website Development & Full-Stack Engineering
 */

export const site = {
  name: "Syed Ali Abdul Baqi",
  role: "Motion Designer & Creative Developer",
  secondaryRole: "Motion Designer · Website Designer · Full-Stack Developer",
  location: "United Kingdom",
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
      { label: "Motion Design & Animation", href: "/projects?category=motion-animation" },
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
  { text: "Motion Design · GSAP · ScrollTrigger", direction: "rtl" },
  { text: "Interactive Animations · Showreels · Micro-interactions", direction: "ltr" },
  { text: "Website Design · UI/UX · Visual Systems", direction: "rtl" },
  { text: "WordPress · Shopify · React.js · Next.js · Laravel", direction: "ltr" },
];

export const home = {
  eyebrow: "Syed Ali Abdul Baqi",
  roleTitle: "Motion Designer & Creative Developer",
  heroLines: ["MOTION DESIGNER", "& CREATIVE", "DEVELOPER"],
  intro:
    "I create visually engaging digital experiences through advanced motion design, GSAP animations, interactive web experiences, and modern website design and development.",
  primaryCta: { label: "Explore Work", href: "/projects" },
  secondaryCta: { label: "Let's Talk", href: "/contact" },
  priorities: [
    { index: "01", label: "Motion Design & GSAP", href: "/projects?category=motion-animation" },
    { index: "02", label: "Website Design & UI/UX", href: "/projects?category=website-design" },
    { index: "03", label: "Full-Stack Web Engineering", href: "#development-portfolio" },
  ],
  showreel: {
    label: "Featured Showreel",
    src: "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
    poster: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
    title: "Fabulatte — Motion & Creative Showreel",
    meta: "Kinetic Typography · Transitions · Brand Motion",
  },
};

export const skillsHierarchy = {
  motion: {
    priority: "01",
    eyebrow: "Primary Focus",
    title: "Motion Design & Animation",
    tagline:
      "Choreographed timelines, scroll-driven storytelling, tactile micro-interactions, and high-energy video reels.",
    skills: [
      "Motion Design",
      "GSAP",
      "ScrollTrigger",
      "Scroll-Based Animations",
      "Interactive Animations",
      "Website Animations",
      "Micro-interactions",
      "Motion Graphics",
      "Creative Transitions",
      "Video & Showreels",
    ],
    previewVideo: {
      src: "/videos/2520e1_894e994732e24e81ae31dcc9d9853a37.mp4",
      poster: "/images/2520e1_894e994732e24e81ae31dcc9d9853a37f003.jpg",
      caption: "Kinetic Typography & Motion Rhythm",
    },
  },
  webDesign: {
    priority: "02",
    eyebrow: "Visual Craft & Systems",
    title: "Website Design & UI/UX",
    tagline:
      "Editorial layouts, structured typography and color tokens, and conversion-focused interfaces built around clarity.",
    skills: [
      "Website Design",
      "UI/UX Design",
      "Landing Page Design",
      "Responsive Design",
      "Interactive UI",
      "Wireframing",
      "Visual Systems",
      "Typography & Layout",
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
    title: "Website Development",
    tagline:
      "Clean, responsive builds across leading CMS platforms, modern React frameworks, and full-stack PHP/Laravel.",
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
    title: "Direction & Storyboard",
    detail: "Defining motion rhythm, visual narrative, and clear interactive goals.",
  },
  {
    step: "02",
    title: "UI/UX & Visual Systems",
    detail: "Designing typography scales, color tokens, and responsive screen layouts.",
  },
  {
    step: "03",
    title: "Motion & GSAP Craft",
    detail: "Building scroll-triggered animations, smooth transitions, and video reels.",
  },
  {
    step: "04",
    title: "Full-Stack Launch",
    detail: "Shipping fast production builds in Next.js, React, WordPress, Shopify, or Laravel.",
  },
];

export const work = {
  title: ["Motion Design", "& Animation"],
  intro:
    "Showreels, hero campaign films, kinetic typography, and looping motion visuals crafted for global brands.",
};

export const caseStudy = {
  headerImage: "/images/2520e1_a7dbf2f3534b41738be94fc6c3b5b5cd_mv2.png",
  title: "Case Study: EVO ICL",
  subtitle: "Reframing Vision Correction Through Motion & Inclusive Storytelling",
  intro: [
    "EVO ICL is a globally recognised implantable collamer lens enabling people to live free from glasses or contact lenses. While known for clinical excellence, athlete-only campaigns had narrowed perception toward an elite niche.",
    "This integrated motion and visual campaign broadened appeal across Fearless, Creator, and Timeless lifestyle audiences.",
  ],
  heroFilm: {
    heading: 'Hero Film: "What\'s Your Superpower?"',
    body: 'A flagship hero film unifying lifestyle storytelling around everyday confidence, creative freedom, and clarity — showcased across digital channels and live international events.',
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
  headerVideo: "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
  headerImage: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
  title: "Selected Work",
  intro:
    "Motion design and animation first — alongside website UI/UX systems and dedicated WordPress, Shopify, React.js, Next.js, and Laravel work.",
};

export const generativeAI = {
  title: ["AI-Enhanced", "Motion & Visuals"],
  intro: [
    "Visual and motion studies combining generative workflows with compositing, retouching, and Finishing in Photoshop and After Effects.",
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
  eyebrow: "Syed Ali Abdul Baqi",
  headline: "Motion Designer & Creative Developer.",
  bio: [
    "I specialize in motion design, GSAP and ScrollTrigger animations, interactive web experiences, and visual storytelling — bringing energy, rhythm, and clarity to digital products.",
    "Alongside motion, I design responsive website interfaces and build production web platforms across WordPress, Shopify, React.js, Next.js, and Laravel.",
  ],
  tools: [
    "After Effects",
    "GSAP & ScrollTrigger",
    "Premiere Pro",
    "Figma",
    "Photoshop & Illustrator",
    "Next.js & React.js",
    "WordPress & Shopify",
    "Laravel & Tailwind CSS",
  ],
  quote: '"Motion gives digital design its pulse — turning static screens into experiences people remember."',
  author: "— Syed Ali Abdul Baqi",
  reelHeading: "Featured Showreel",
  storyVideo: {
    src: "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
    poster: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
  },
};

export const contact = {
  heading: "LET'S WORK TOGETHER",
  taglineTop: "Have a motion, website design,",
  taglineBottom: "or full-stack build in mind?",
  summary:
    "Available for motion design, GSAP web animations, UI/UX website design, and custom WordPress, Shopify, React.js, Next.js & Laravel projects.",
};
