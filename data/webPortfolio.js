/**
 * Separate Website Design & Development Portfolio Data.
 *
 * Categories:
 * - All
 * - Website Design / UI/UX
 * - WordPress
 * - Shopify
 * - React.js
 * - Next.js
 * - Laravel
 *
 * Uses only real project visuals from the extracted WeTransfer & studio folders.
 * Live website links are included strictly where verified on the project assets.
 */

const slide = (src, w, h, title, description) => ({
  type: "image",
  src,
  w,
  h,
  ...(title ? { title } : {}),
  ...(description ? { description } : {}),
});

export const webPortfolioCategories = [
  { id: "all", label: "All" },
  { id: "website-design", label: "Website Design / UI/UX" },
  { id: "wordpress", label: "WordPress" },
  { id: "shopify", label: "Shopify" },
  { id: "reactjs", label: "React.js" },
  { id: "nextjs", label: "Next.js" },
  { id: "laravel", label: "Laravel" },
];

export const webPortfolioProjects = [
  {
    id: "fabulatte-landing-ui",
    category: "website-design",
    platform: "Website Design / UI/UX",
    name: "Fabulatte — Agency Landing Page UI",
    description:
      "Full-page dark-mode landing layout ('Strategy first. Always.') combining hero device framing, structured copy hierarchy, and clear CTA placement.",
    preview: "/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png",
    slides: [
      slide("/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png", 1920, 2501, "Fabulatte — Full Landing Page UI"),
      slide("/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg", 1920, 1080, "Fabulatte — Showreel Hero Frame"),
    ],
  },
  {
    id: "gulahmed-storefront-ui",
    category: "website-design",
    platform: "Website Design / UI/UX · E-Commerce Storefront",
    name: "GulAhmed — Online Storefront & Ideas Home UI",
    description:
      "Online storefront seasonal clearance banners, launch countdown headers, and Ideas Home product merchandising cards created for GulAhmed.",
    liveUrl: "https://www.gulahmedshop.com",
    liveLabel: "gulahmedshop.com",
    preview: "/images/wetransfer/gulahmed/05-94ad8dbd-a00b-4e3e-9502-412c8b6c5d87.jpg",
    slides: [
      slide("/images/wetransfer/gulahmed/05-94ad8dbd-a00b-4e3e-9502-412c8b6c5d87.jpg", 1280, 1280, "GulAhmed — Online Storefront Sale Banner"),
      slide("/images/wetransfer/gulahmed/04-80984262-135960921193773-3164357274617511936.jpg", 960, 960, "GulAhmed — Year End Clearance Hero"),
      slide("/images/wetransfer/gulahmed/02-0df19760-32c8-40c7-9663-9b7e1f331a5b.jpg", 1000, 1000, "GulAhmed — Product Pricing UI Card"),
      slide("/images/wetransfer/gulahmed/01-09690142-e80b-4acb-a6bd-a7d128495759.jpg", 1280, 1280, "GulAhmed — Launch Countdown Banner"),
      slide("/images/wetransfer/gulahmed/06-9a93948b-a794-4c44-8c55-84f08c4b1a84.jpg", 1000, 1000, "GulAhmed Ideas Home — Luxury Collection"),
    ],
  },
  {
    id: "rezilo-product-mobile-ui",
    category: "website-design",
    platform: "Website Design / UI/UX · Mobile & D2C UI",
    name: "Rezilo — Product Launch & Mobile Interface UI",
    description:
      "Dark-mode D2C product presentation cards, custom specification iconography, and mobile screen layouts for recovery device Rezilo.",
    preview: "/images/wetransfer/rezilo/09-chatgpt-image-jul-15-2026-10-58-56-pm.jpg",
    slides: [
      slide("/images/wetransfer/rezilo/09-chatgpt-image-jul-15-2026-10-58-56-pm.jpg", 1536, 1024, "Rezilo — Mobile Interface Screens"),
      slide("/images/wetransfer/rezilo/03-chatgpt-image-jul-15-2026-07-41-56-pm.jpg", 1254, 1254, "Rezilo — Hero Product Feature UI"),
      slide("/images/wetransfer/rezilo/02-chatgpt-image-jul-15-2026-07-32-58-pm.jpg", 1254, 1254, "Rezilo — Feature Iconography & Specs"),
      slide("/images/wetransfer/rezilo/04-chatgpt-image-jul-15-2026-08-33-15-pm.jpg", 1254, 1254, "Rezilo — Recovery Benefit Card"),
      slide("/images/wetransfer/rezilo/10-rezilo-end-your-day-better-1200x1200.jpg", 1200, 1200, "Rezilo — Conversion Promo Card"),
    ],
  },
  {
    id: "gnatural-d2c-carousel-ui",
    category: "website-design",
    platform: "Website Design / UI/UX · D2C Merchandising",
    name: "G'Natural — Skincare Storefront Cards & Carousel UI",
    description:
      "Conversion-focused D2C skincare product benefit cards and a 4-slide bundle promo carousel designed for G'Natural.",
    preview: "/images/wetransfer/g-natural/10-april-gn-cc10.png",
    slides: [
      slide("/images/wetransfer/g-natural/10-april-gn-cc10.png", 900, 900, "G'Natural — Energy Booster UI Card"),
      slide("/images/wetransfer/g-natural/13-april-gn-cc4.png", 900, 900, "G'Natural — Deep Pore Detox Scrub Card"),
      slide("/images/wetransfer/g-natural/11-april-gn-cc11.png", 900, 900, "G'Natural — Essential Oil Trio Card"),
      slide("/images/wetransfer/g-natural/12-april-gn-cc3.png", 900, 900, "G'Natural — Botanical Blend Card"),
      slide("/images/wetransfer/g-natural/14-april-gn-cc5.png", 900, 900, "G'Natural — Peppermint & Lavender Card"),
      slide("/images/wetransfer/g-natural/15-april-gn-cc6.png", 900, 900, "G'Natural — Daily Cleansing Routine Card"),
      slide("/images/wetransfer/g-natural/16-april-gn-cc7.png", 900, 900, "G'Natural — Orange & Lavender Card"),
      slide("/images/wetransfer/g-natural/17-carousel-1.png", 600, 600, "G'Natural — Bundle Carousel Slide 01"),
      slide("/images/wetransfer/g-natural/18-carousel-2.png", 600, 600, "G'Natural — Bundle Carousel Slide 02"),
      slide("/images/wetransfer/g-natural/19-carousel-3.png", 600, 600, "G'Natural — Bundle Carousel Slide 03"),
      slide("/images/wetransfer/g-natural/20-carousel-4.png", 600, 600, "G'Natural — Bundle Carousel Slide 04"),
    ],
  },
  {
    id: "desi-chai-design-system",
    category: "website-design",
    platform: "Website Design / UI/UX · Design System",
    name: "Desi Chai London — Typography & Color System",
    description:
      "Structured display and UI typography scales (Mohabatin & Montserrat), hex colour tokens, and digital brand layout grids.",
    preview: "/images/wetransfer/desi-chai-london/08-slide-6.jpg",
    slides: [
      slide("/images/wetransfer/desi-chai-london/08-slide-6.jpg", 1920, 1080, "Desi Chai London — System Overview"),
      slide("/images/wetransfer/desi-chai-london/04-slide-10.jpg", 1920, 1080, "Desi Chai London — Typography Scale"),
      slide("/images/wetransfer/desi-chai-london/09-slide-8.jpg", 1920, 1080, "Desi Chai London — Hex Colour Tokens"),
      slide("/images/wetransfer/desi-chai-london/06-slide-4.jpg", 1920, 1080, "Desi Chai London — Editorial Grid I"),
      slide("/images/wetransfer/desi-chai-london/11-slide-7.jpg", 1920, 1080, "Desi Chai London — Editorial Grid II"),
    ],
  },
  {
    id: "gulahmed-mobile-retail-screens",
    category: "website-design",
    platform: "Website Design / UI/UX · Mobile Retail",
    name: "GulAhmed — 9:16 Mobile Retail & Flash-Sale UI",
    description:
      "Mobile-first vertical shopping screens, bedding price badges, and flash-sale layouts designed for mobile shoppers.",
    liveUrl: "https://www.gulahmedshop.com",
    liveLabel: "gulahmedshop.com",
    preview: "/images/wetransfer/gulahmed/07-ad5b4834-8db6-427b-b3e4-f16e28ccb81c.jpg",
    slides: [
      slide("/images/wetransfer/gulahmed/07-ad5b4834-8db6-427b-b3e4-f16e28ccb81c.jpg", 720, 1280, "GulAhmed — Mobile Bedding Price UI"),
      slide("/images/wetransfer/gulahmed/03-7eb71849-551b-4795-9350-dc1aa4127cc2.jpg", 720, 1280, "GulAhmed — Mobile Sale Screen"),
      slide("/images/wetransfer/gulahmed/08-be5003cb-df25-44e2-b7b7-0ea95f4a30b5.jpg", 720, 1280, "GulAhmed — Vertical Apparel UI"),
      slide("/images/wetransfer/gulahmed/09-cfaf0615-6feb-4d73-b8ae-7dd0f4abda5b.jpg", 720, 1280, "GulAhmed — Mobile Flash Promo"),
    ],
  },
  {
    id: "tratech-ui-system",
    category: "website-design",
    platform: "Website Design / UI/UX · Interface System",
    name: "Tratech Consulting — Digital UI & Iconography",
    description:
      "Corporate digital design system featuring custom UI iconography, Silka & Poppins web typography, colour tokens, and modular layout templates.",
    preview: "/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png",
    slides: [
      slide("/images/2520e1_30df2a95e70341c1b5e3d032577e6a7a_mv2.png", 1366, 768, "Tratech — Digital System Overview"),
      slide("/images/2520e1_67e9549ba4e842a2b40101ae6b5ce8b8_mv2.png", 1366, 768, "Tratech — Custom UI Iconography"),
      slide("/images/2520e1_e39a8141703b42119dcd0fadc8971fc9_mv2.png", 1366, 768, "Tratech — Web Typography"),
      slide("/images/2520e1_65f0a9ff3b1a4ca58727392336f7a034_mv2.png", 1366, 768, "Tratech — Digital Colour System"),
      slide("/images/2520e1_aafe43cb93724db68fce8f354f1e96e2_mv2.png", 1366, 768, "Tratech — Modular Interface Templates"),
    ],
  },
  {
    id: "admiah-digital-ui-tokens",
    category: "website-design",
    platform: "Website Design / UI/UX · Visual System",
    name: "Admiah Digital — Web Grid & Color Tokens",
    description:
      "Digital-first agency visual system specifying geometric grid construction, web typography, and dark/light interface colour tokens.",
    preview: "/images/2520e1_427eb28792ed4b338d7840f790a5c0bb_mv2.png",
    slides: [
      slide("/images/2520e1_427eb28792ed4b338d7840f790a5c0bb_mv2.png", 1366, 768, "Admiah Digital — Dark Interface Lockup"),
      slide("/images/2520e1_250c8754a68d4cf5a24bba9aae4769da_mv2.png", 1366, 768, "Admiah Digital — Construction Grid"),
      slide("/images/2520e1_4c1ffe21fc6d4e48bd7e9e0531162b3d_mv2.png", 1366, 768, "Admiah Digital — Web Typography"),
      slide("/images/2520e1_af893d32e393440587c7434a1b338b0f_mv2.png", 1366, 768, "Admiah Digital — Colour System"),
      slide("/images/2520e1_f7784e764260440989fc17151f91cad5_mv2.png", 1366, 768, "Admiah Digital — Hex Tokens"),
    ],
  },
  {
    id: "dewa-trust-web-headers",
    category: "website-design",
    platform: "Website Design / UI/UX · Web Banners",
    name: "Dewa Trust — Widescreen Web Header Banners",
    description:
      "1702×630 widescreen web portal and header banners ('Born To Stand Out!') framed for desktop and tablet viewports.",
    preview: "/images/wetransfer/dewa-trust/01-cover-photo.jpg",
    slides: [
      slide("/images/wetransfer/dewa-trust/01-cover-photo.jpg", 1702, 630, "Dewa Trust — Widescreen Web Header I"),
      slide("/images/wetransfer/dewa-trust/02-cover-photo2.jpg", 1702, 630, "Dewa Trust — Widescreen Web Header II"),
    ],
  },
  {
    id: "totle-mobile-interface",
    category: "website-design",
    platform: "Website Design / UI/UX · Mobile UI",
    name: "Totle — Mobile App & Digital Brand Screens",
    description:
      "Playful mobile interface mockups, digital colour system, and responsive brand typography for kidswear label Totle.",
    preview: "/images/2520e1_77f8426bbb934b4389d6813d29987856_mv2.jpg",
    slides: [
      slide("/images/2520e1_77f8426bbb934b4389d6813d29987856_mv2.jpg", 8000, 4501, "Totle — Mobile Interface Screens"),
      slide("/images/2520e1_beee4da7e3ec488bb61b3f3903bead08_mv2.jpg", 8000, 4501, "Totle — Colour Palette"),
      slide("/images/2520e1_df25d33bc58443ada8c3962e8f003f36_mv2.jpg", 8000, 4501, "Totle — Typography"),
    ],
  },
  {
    id: "titan-digital-mailers",
    category: "website-design",
    platform: "Website Design / UI/UX · Responsive HTML Mailers",
    name: "Titan — Responsive Digital Mailer Layouts",
    description:
      "7-part vertical digital emailer series combining scannable editorial grids with clear typographic hierarchy.",
    preview: "/images/2520e1_4afb83907f1e4d28ad0be27a9fc8f6da_mv2.jpg",
    slides: [
      slide("/images/2520e1_4afb83907f1e4d28ad0be27a9fc8f6da_mv2.jpg", 1080, 1504, "Titan Mailer I"),
      slide("/images/2520e1_b2aa1028fb6e4becaf76dfd0a247075c_mv2.jpg", 1080, 1350, "Titan Mailer II"),
      slide("/images/2520e1_f66eb05535754e0980a30406e84a3c53_mv2.jpg", 2481, 3508, "Titan Mailer III"),
      slide("/images/2520e1_52cc7d1aefb2434586de5a0bbac2c0c8_mv2.jpg", 2481, 3508, "Titan Mailer IV"),
    ],
  },

  // Platform-specific Website Development showcases
  {
    id: "nextjs-portfolio-application",
    category: "nextjs",
    platform: "Next.js · App Router & Tailwind CSS",
    name: "Syed Ali Abdul Baqi — Portfolio Website",
    description:
      "Built on Next.js 15 App Router with static route generation, optimized responsive imagery, smooth reveal animations, and multi-page creative galleries.",
    preview: "/images/2520e1_b191a0a4b2df483caeae69dd792332e7_mv2.png",
    slides: [
      slide("/images/2520e1_b191a0a4b2df483caeae69dd792332e7_mv2.png", 2880, 1620, "Showreel & Multi-Device Showcase"),
      slide("/images/2520e1_1065a251d75f4ba1b8e356d00f16129c_mv2.jpg", 1920, 1080, "Projects Banner & Editorial Layout"),
    ],
  },
  {
    id: "reactjs-interactive-gallery-ui",
    category: "reactjs",
    platform: "React.js · React 19 Client UI",
    name: "Interactive ProGallery, Thumbnail Slider & Lightbox",
    description:
      "Modular React 19 interactive components powering masonry, grid, and filmstrip galleries, category filtering, keyboard lightbox navigation, and viewport-aware video playback.",
    preview: "/images/2520e1_c2cb7c4e55574989b6fbf36c7276ee18_mv2.png",
    slides: [
      slide("/images/2520e1_c2cb7c4e55574989b6fbf36c7276ee18_mv2.png", 3456, 2234, "Interactive Media & Split Frame Presentation"),
      slide("/images/2520e1_d42c85fc1e2e4fdfaced6244ccd3431e_mv2.png", 1080, 1350, "Segmented Gallery Card Component"),
    ],
  },
  {
    id: "wordpress-cms-builds",
    category: "wordpress",
    platform: "WordPress · Custom PHP Themes, ACF & WooCommerce",
    name: "WordPress Custom Themes & CMS Development",
    description:
      "Bespoke WordPress theme development, structured ACF/Gutenberg & Elementor Pro page architectures, and WooCommerce builds. Live client URLs shared on request.",
    preview: "/images/2520e1_aafe43cb93724db68fce8f354f1e96e2_mv2.png",
    slides: [
      slide("/images/2520e1_aafe43cb93724db68fce8f354f1e96e2_mv2.png", 1366, 768, "Modular CMS Content Block Layout"),
      slide("/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png", 1920, 2501, "Conversion Landing Page Layout"),
    ],
  },
  {
    id: "shopify-storefront-builds",
    category: "shopify",
    platform: "Shopify · OS 2.0, Liquid & D2C E-Commerce",
    name: "Shopify Storefront Themes & Conversion UX",
    description:
      "Custom Shopify OS 2.0 sections, Liquid product templates, bundle carousels, and mobile-first D2C storefront merchandising. Private store walkthroughs shared on request.",
    preview: "/images/wetransfer/g-natural/17-carousel-1.png",
    slides: [
      slide("/images/wetransfer/g-natural/17-carousel-1.png", 600, 600, "D2C Bundle Carousel UI — Slide 01"),
      slide("/images/wetransfer/g-natural/18-carousel-2.png", 600, 600, "D2C Bundle Carousel UI — Slide 02"),
      slide("/images/wetransfer/g-natural/19-carousel-3.png", 600, 600, "D2C Bundle Carousel UI — Slide 03"),
      slide("/images/wetransfer/g-natural/20-carousel-4.png", 600, 600, "D2C Bundle Carousel UI — Slide 04"),
    ],
  },
  {
    id: "laravel-fullstack-builds",
    category: "laravel",
    platform: "Laravel · PHP, MySQL, Blade & REST APIs",
    name: "Laravel Full-Stack Web Applications & Portals",
    description:
      "Custom Laravel MVC engineering covering relational MySQL schemas, authenticated dashboards, custom portals, and RESTful integrations. Walkthroughs shared on request.",
    preview: "/images/2520e1_67e9549ba4e842a2b40101ae6b5ce8b8_mv2.png",
    slides: [
      slide("/images/2520e1_67e9549ba4e842a2b40101ae6b5ce8b8_mv2.png", 1366, 768, "Application UI & System Iconography"),
      slide("/images/2520e1_c746dc4046464d708e4a1d28db020f97_mv2.png", 1366, 768, "Structured Architecture Framework"),
    ],
  },
];
