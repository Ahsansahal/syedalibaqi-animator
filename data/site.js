/**
 * Central content file for the whole site, migrated from the original Wix site
 * (syedalibaqi.co.uk). Pages are presentational and read everything from here.
 * Gallery items live in ./galleries.js; Website Design & Development items live in ./webPortfolio.js.
 */

export const site = {
  name: "Syed Ali Abdul Baqi",
  role: "Visual Artist",
  location: "London",
  email: "Syed_ali_baqi@hotmail.com",
  phones: [
    { label: "+44 7415 253939", tel: "+447415253939", whatsapp: "447415253939" },
  ],
  cvUrl: null,
  copyright: "© 2026-27 by Syed Ali Abdul Baqi",
};

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "Animation and Motion Graphics", href: "/work" },
      { label: "Case Study", href: "/case-study" },
      { label: "Projects", href: "/projects" },
    ],
  },
  { label: "Generative AI", href: "/generative-ai" },
  { label: "Album art", href: "/album-art" },
  { label: "Clients", href: "/clients" },
  { label: "About Ali", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Scrolling marquee rows (Home + About). Text kept exactly as on the original site.
export const marquees = [
  { text: "Visual Stategy", direction: "rtl" },
  { text: "Brand Voice", direction: "ltr" },
  { text: "Brand Identity", direction: "rtl" },
  { text: "Motion Design", direction: "ltr" },
];

export const home = {
  heroLines: ["Syed Ali Abdul Baqi,", "VISUAL ARTIST,", "LONDON"],
  showreel: {
    label: "Showreel",
    src: "/videos/2520e1_7602b66129df4bfc9931873c3ef2baf7.mp4",
    poster: "/images/2520e1_b191a0a4b2df483caeae69dd792332e7_mv2.png",
    title: "Click to view showreel",
  },
  projectsButton: { label: "Projects", href: "/projects" },
  glimpseLabel: "Glimpse",
  webPortfolioLabel: "Website Design & Development",
};

export const work = {
  title: ["Animation", "& Video work"],
  intro:
    "Across a range of projects, the scope has consistently involved ideation to creative execution - merging animation, graphic design, sound design and generative AI tools to create authentic and immersive outcomes that strengthen brand impact.",
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
    "From building brands from the ground up to refining existing identities, each project is rooted in strategy, shaped by storytelling, and executed with a strong attention to detail, reflecting my approach to design - thoughtful, functional, and visually driven.",
  items: [
    {
      title: "Staar Surgical: Project Bronze",
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
      title: "OCL Vision: Make the switch",
      subtitle: "Social Media Campaign",
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
      title: "Chatori: Brand Identity, Menu & Packaging",
      subtitle: "Desi Pop-Art Street Food Identity",
      body: [
        "Expressive Desi pop-art visual identity created for street-food brand Chatori, spanning primary emblem design, full illustrated hospitality menu layout, takeaway chai cups and kraft bags, vertical street-pole OOH banners, and a 6-part pun-driven poster campaign.",
      ],
      gallery: "projectChatori",
      galleryStyle: "thumbnails",
    },
    {
      title: "Rezilo: London OOH & Launch Campaign",
      subtitle: "Out-of-Home & Brand Rollout",
      body: [
        "High-impact out-of-home campaign rollout across London Underground carriages, Paddington and Victoria station billboards, and street transit shelters for recovery brand Rezilo, paired with dark-mode metallic and cobalt brand lockups.",
      ],
      gallery: "projectRezilo",
      galleryStyle: "thumbnails",
    },
    {
      title: "Yeah! Scoopy: Packaging & Digital OOH",
      subtitle: "Artisanal Ice Cream Identity",
      body: [
        "Complete 5-flavour retail ice cream tub packaging range (Mint Choc Chip, Vanilla Bean, Strawberry, Pistachio, and Mango) alongside mall escalator murals, vertical digital totems, promenade banners, and summer campaign posters.",
      ],
      gallery: "projectScoopy",
      galleryStyle: "thumbnails",
    },
    {
      title: "Desi Chai London: Brand & Packaging",
      subtitle: "London Hospitality Identity",
      body: [
        "Hospitality brand system and tactile packaging suite crafted for Desi Chai London — uniting custom logo lockups, typography and colour palettes with branded chai cups, maska bun sleeves, takeaway paper bags, loyalty cards, and staff apparel.",
      ],
      gallery: "projectDesiChai",
      galleryStyle: "thumbnails",
    },
    {
      title: "Lure Jewellery: Luxury Editorial Series",
      subtitle: "Monochrome & Champagne-Gold Direction",
      body: [
        "High-contrast monochrome editorial photography paired with selective champagne-gold jewellery highlights, boutique exhibition invitations, and seasonal social storytelling for Lure Jewellery.",
      ],
      gallery: "projectLure",
      galleryStyle: "row",
    },
    {
      title: "G'Natural: Botanical Art Direction",
      subtitle: "Skincare & Essential Oil Visuals",
      body: [
        "Botanical product art direction series blending natural ingredient compositions, soft studio lighting, and colour-coded skincare storytelling across Sweet Orange, Pure Rosehip, Lavender, Almond, Tea Tree, and Herbal Hair Oil blends.",
      ],
      gallery: "projectGNatural",
      galleryStyle: "thumbnails",
    },
    {
      title: "Nando's: PERi-PERi Campaign Posters",
      subtitle: "Digital & Social Campaign",
      body: [
        "Bold copy-led digital posters celebrating Nando's flame-grilled platters, unmistakable tone of voice, and signature PERi-PERi spice levels.",
      ],
      gallery: "projectNandos",
      galleryStyle: "row",
    },
    {
      title: "Durex: Conceptual & Moment Marketing",
      subtitle: "Social Campaign Series",
      body: [
        "Sharp minimalist visual metaphors and topical moment-marketing creatives produced across New Year countdowns, sporting events, and seasonal campaigns.",
      ],
      gallery: "projectDurex",
      galleryStyle: "thumbnails",
    },
    {
      title: "Dewa Trust: Inclusive Education Series",
      subtitle: "Cultural & Institutional Awareness",
      body: [
        "11-part institutional awareness campaign celebrating inclusive learning since 1967 across World Art Day, Earth Day, World Book Day, World Health Day, and student impact stories.",
      ],
      gallery: "projectDewa",
      galleryStyle: "thumbnails",
    },
    {
      title: "Admiah Digital: Branding",
      body: [
        "Agency Brief: Admiah Digital is a Google Ads agency specializing in highly targeted advertising campaigns that help businesses maximize ROI through data-driven precision and measurable growth. The brief was to create a clean, modern logo and brand identity in a single day that reflects the company's expertise, trustworthiness, and results-focused approach, with a digital-first design adaptable for web, social, and ad placements.",
      ],
      gallery: "projectAdmiah",
      galleryStyle: "thumbnails",
    },
    {
      title: "Brand Identity: Totle (Kidswear)",
      body: [
        "Agency Brief: A fashion label specialising in children's apparel aiming to break into the sector with vibrant branding that conveys children's enthusiasm and energy across logo lockups, character mascot options, colour palettes, and retail packaging.",
      ],
      gallery: "projectTotle",
      galleryStyle: "thumbnails",
    },
    {
      title: "Tratech Consulting: Rebranding",
      body: [
        "Agency Brief: Tratech Consulting engaged us to refresh their logo and evolve the overall brand identity across updated colours, typography, custom iconography, and digital applications — highlighting expertise, reliability, and adaptability in competitive markets.",
      ],
      gallery: "projectTratech",
      galleryStyle: "thumbnails",
    },
    {
      title: "FITBOX: Brand refresh",
      body: [
        "Agency Brief: A rapid brand refresh designed to update and modernize the look and feel of the brand while staying true to existing identity elements for continuity and recall.",
        "Year: 2026-27",
      ],
      gallery: "projectFitbox",
      galleryStyle: "thumbnails",
    },
    {
      title: "Titan: D&I campaign",
      body: [
        "Agency Brief: Titan from the TATA group commissioned an internal communication campaign of digital emailers promoting Diversity and Inclusion awareness across employees.",
        "Year: 2020",
      ],
      gallery: "projectTitan",
      galleryStyle: "thumbnails",
    },
    {
      title: "Surrey Hills Coffee Co.",
      subtitle: "Brief from the agency",
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
  title: ["Shaping brands", "one story at a time."],
};

export const about = {
  quote: '"Creativity takes courage"',
  author: "-Henri Matisse",
  storyHeading: "My Story",
  storyVideo: {
    src: "/videos/2520e1_2630dd87512f4167b86fc56a0a9fca2c.mp4",
    poster: "/images/2520e1_2630dd87512f4167b86fc56a0a9fca2cf003.jpg",
  },
};

export const contact = {
  heading: "GET IN TOUCH",
  taglineTop: "Your product is almost",
  taglineBottom: "INVISIBLE without branding.",
  whatsappIcon: "/images/2520e1_851d878d92cc4b3991e5f04dbcc8c693_mv2.png",
};
