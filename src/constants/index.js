// Navigation
export const navLinks = [
  { title: "Home", path: "/", type: "home" },
  { title: "About Us", path: "/about-us", type: "route" },
  { title: "Contact Us", path: "/contact-us", type: "route" },
  // { title: "Bulk Orders", path: "/bulk-orders", type: "route" },
  // { title: "For Designers", path: "/designers-architects", type: "route" },
];

export const navCta = {
  label: "Discuss Your Project",
  href: "https://wa.me/919548559548?text=Hi%20Sparklus%20Lamps%2C%20I%27d%20like%20to%20discuss%20my%20project.",
};

export const navWhatsApp = {
  href: "https://wa.me/919548559548",
};

export const floatingContactIcons = {
  phoneHref: "tel:+919548559548",
  whatsappHref:
    "https://wa.me/+919548559548?text=Hi,%20I%E2%80%99m%20looking%20for%20customized%20lighting%20fixtures%20for%20my%20space/project.",
};

export const siteActions = {
  projectEnquiry: "/contact-us#project-enquiry",
  visionCta: "/contact-us#bring-your-vision-to-light",
  phone: "tel:+919548559548",
  whatsappConsultation:
    "https://wa.me/919548559548?text=Hi%20Sparklus%20Lamps%2C%20I%27d%20like%20to%20book%20a%20consultation.",
};

// About Us Page
export const aboutPage = {
  hero: {
    label: "About Us",
    title: "From Paper To Light",
    description:
      "At Sparklus Lamps, we transform humble cotton paper into sculptural lighting — handmade, sustainable, and designed to bring warmth and character to every interior.",
    image: "/images/aboutus-hero.png",
  },
  ourStory: {
    heading: "Our Story",
    paragraphs: [
      "Sparklus Lamps was born from a legacy of paper craftsmanship — where raw cotton paper is shaped, folded, and transformed into objects of light.",
      "What began as a small workshop in Bareilly has grown into a studio trusted by designers and architects who value detail, material honesty, and lighting with soul.",
    ],
    founderImage: "/images/ayush.png",
    quote:
      "Our goal is simple – to create lighting that brings warmth, beauty and soul to every space.",
    founderName: "Ayush Tandon",
    founderTitle: "Founder",
  },
  production: {
    heading: "From Cotton Cloth to Finished Light",
    label: "Handcrafted with Care",
    description:
      "Every Sparklus lamp begins as raw cotton paper — folded, shaped, and transformed entirely by hand. Watch our artisans bring each piece from material to glowing finished light.",
    videos: [
      {
        id: "paper-craft",
        // Full URL, youtu.be link, /shorts/ link, or 11-char video ID
        youtubeUrl: "https://youtube.com/shorts/Fcp8esmlaKc",
        poster: "/images/thumbnail1.png",
        ariaLabel: "Paper crafting process",
      },
      {
        id: "finished-light",
        youtubeUrl:
          "https://youtube.com/shorts/mNCTNIqtK1Q?si=Qw2OLcHCDNMnePjX",
        poster: "/images/thumbnail2.png",
        ariaLabel: "Finished lamp coming to life",
      },
    ],
  },
  workshop: {
    heading: "Inside Our Workshop",
    images: [
      "/images/inside/1.png",
      "/images/inside/2.png",
      "/images/inside/3.jpg",
      "/images/inside/4.jpg",
      "/images/inside/5.jpg",
      "/images/inside/6.jpg",
      "/images/inside/7.jpg",
      "/images/inside/8.jpg",
      "/images/inside/9.png",
      "/images/inside/10.png",
    ],
  },
  team: {
    heading: "Meet The Team",
    members: [
      {
        id: 1,
        name: "Ayush Tandon",
        role: "Founder",
        subtitle: "",
        description:
          "Leading vision, craftsmanship, and every detail that defines Sparklus Lamps.",
        image: "/images/ayush.png",
      },
      {
        id: 2,
        name: "Sanjay Tandon",
        role: "Production Head",
        subtitle: "",
        description:
          "Skilled artisans who fold, shape, and assemble every lamp by hand.",
        image: "/images/sanjay.png",
      },
      {
        id: 3,
        name: "Vaibhav Khanna",
        role: "Design Head",
        subtitle: "",
        description:
          "Translating concepts and client visions into refined lighting forms.",
        image: "/images/vaibhav.png",
      },
    ],
  },
  values: {
    heading: "What We Stand For",
    items: [
      {
        id: 1,
        icon: "handmade",
        title: "Handmade",
        description:
          "Every piece is shaped by hand — no mass production, only thoughtful craftsmanship.",
      },
      {
        id: 2,
        icon: "sustainable",
        title: "Sustainable",
        description:
          "We use eco-conscious cotton paper and responsible processes at every stage.",
      },
      {
        id: 3,
        icon: "customisable",
        title: "Customisable",
        description:
          "Materials, colours, and sizes tailored to your project and spatial needs.",
      },
    ],
  },
};

export const contactForm = {
  title: "Project Enquiry",
  fields: {
    name: "Your Name",
    city: "City",
    email: "Email Address",
    phone: "Phone Number",
    projectType: "Project Type",
    bestTimeToCall: "Best Time to Call",
    message: "Tell us about your project",
  },
  projectTypes: [
    "Residential",
    "Hospitality",
    "Commercial",
    "Retail",
    "Restaurant",
    "Hotel",
    "Office",
    "Other",
  ],
  bestTimeOptions: [
    "Morning (10am – 12pm)",
    "Afternoon (12pm – 3pm)",
    "Evening (3pm – 6pm)",
  ],
  submitText: "Send Enquiry",
};

export const contactPage = {
  hero: {
    label: "Let's Connect",
    title: {
      before: "Let's Create Something ",
      highlight: "Unique",
    },
    subtitle:
      "Whether you're designing for a residence, hospitality space, or a bespoke installation — we'd love to hear about your project.",
    image: "/images/work1.jpg",
  },
  conversation: {
    heading: "Start a Conversation",
    items: [
      {
        id: "email",
        icon: "email",
        label: "Email",
        value: "contact@sparkluslamps.com",
      },
      {
        id: "phone",
        icon: "phone",
        label: "Phone",
        value: "+91 95485 59548",
      },
      {
        id: "location",
        icon: "location",
        label: "Studio & Workshop",
        value: "Bareilly, Uttar Pradesh, India",
      },
      {
        id: "clock",
        icon: "clock",
        label: "Response Time",
        value: "We respond within 24–48 hours.",
      },
    ],
  },
  collaboration: {
    working: {
      heading: "Working on a Project?",
      subtitle: "We collaborate with",
      partners: [
        { icon: "designer", label: "Interior Designers" },
        { icon: "architect", label: "Architects" },
        { icon: "hospitality", label: "Hospitality Projects" },
        // { icon: "retail", label: "Retailers" },
        { icon: "bespoke", label: "Bespoke Installations" },
      ],
      ctaText: "Book a Consultation",
      ctaLink:
        "https://wa.me/919548559548?text=Hi%20Sparklus%20Lamps%2C%20I%27d%20like%20to%20book%20a%20consultation.",
    },
  },
  faq: {
    heading: "Frequently Asked Questions",
  },
  process: {
    heading: "What Happens Next?",
    steps: [
      {
        id: 1,
        icon: "submit",
        title: "Submit Enquiry",
        description: "Share your project details through the form.",
        href: "#project-enquiry",
      },
      {
        id: 2,
        icon: "call",
        title: "Consultation Call",
        description: "We understand your vision, space, and requirements.",
        href: siteActions.phone,
      },
      {
        id: 3,
        icon: "design",
        title: "Design Consultation",
        description: "We explore materials, finishes, and custom options.",
        href: siteActions.whatsappConsultation,
        external: true,
      },
      {
        id: 4,
        icon: "prototype",
        title: "Prototype (If Required)",
        description: "Sample or mockup created for your review.",
      },
      {
        id: 5,
        icon: "production",
        title: "Production",
        description: "Handcrafted manufacturing by skilled artisans.",
      },
      {
        id: 6,
        icon: "delivery",
        title: "Delivery",
        description: "Quality-checked, securely packed, and delivered.",
      },
    ],
  },
  bottomCta: {
    heading: "Ready To Bring Your Vision To Light?",
    subtitle:
      "Let's collaborate to transform your space with lighting that feels personal, warm, and beautifully handmade.",
    primaryCta: "Start a Project",
    primaryLink:
      "https://wa.me/919548559548?text=Hi%20Sparklus%20Lamps%2C%20I%27d%20like%20to%20start%20a%20project.",
    secondaryCta: "Download Catalogue",
    secondaryLink: "/final-brochure.pdf",
    secondaryFileName: "Sparklus-Lamps-Brochure.pdf",
    accentImage: "/images/dap.png",
  },
};

export const bulkOrdersPage = {
  hero: {
    title: "Bulk Orders",
    subtitle:
      "Partner with us for hospitality, retail, and large-scale lighting projects.",
  },
  highlights: [
    {
      title: "Volume Pricing",
      description:
        "Competitive rates for bulk and repeat orders tailored to your project scale.",
    },
    {
      title: "Custom Production",
      description:
        "Every piece can be customized to match your brand, space, and design language.",
    },
    {
      title: "Dedicated Support",
      description:
        "A single point of contact from quote to delivery for a seamless experience.",
    },
  ],
};

// Brochure
export const brochure = {
  url: "/final-brochure.pdf",
  fileName: "Sparklus-Lamps-Brochure.pdf",
  title: "Sparklus Lamps Brochure",
};

// Hero Section
export const heroContent = {
  tagline: "Illuminate Your World",
  heading: "Lighting Beyond Function",
  description:
    "We partner with interior designers, architects, and project teams to create handcrafted lighting fixtures tailored to spaces, concepts, and moods.",
  ctaText: "View Brochure",
  // "redirect" — Contact Us vision CTA section | "modal" — in-page brochure viewer
  ctaBehavior: "redirect",
  tags: ["Handmade", "Customizable", "Sustainable"],
};

export const customizationVision = {
  title: "Customized As Per Your Vision",
  subtitle: "Choose materials, colors, and sizes crafted to suit your space.",
  cards: [
    {
      step: "01",
      title: "Material",
      description: "Choose from a range of sustainable and premium materials.",
      image: "/images/material.png",
      layout: "image-left",
      optionsType: "material",
      options: [
        { label: "Handmade Paper", image: "/images/hp.png" },
        { label: "Jute", image: "/images/jute.png" },
        { label: "Cotton Cloth", image: "/images/cotton.png" },
        // { label: "Mixed Materials", image: "/images/work4.jpg" },
      ],
    },
    {
      step: "02",
      title: "Surface & Finish Options",
      description:
        "Personalize every detail with custom colours, textures, and prints.",
      image: "/images/snfoptions.png",
      layout: "image-right",
      optionsType: "color",
      options: [
        { label: "Custom Colours", image: "/images/cc.png" },
        { label: "Custom Prints", image: "/images/cp.png" },
        { label: "Paper Textures", image: "/images/ct.png" },
        // { label: "Custom Colours", image: "/images/work4.jpg" },
      ],
    },
    // {
    //   step: "03",
    //   title: "Size",
    //   description: "We make it in the size that fits your space perfectly.",
    //   image: "/images/work3.jpg",
    //   layout: "image-left",
    //   optionsType: "size",
    //   options: [
    //     {
    //       label: "Small Table Lamps",
    //       image: "/images/work1.jpg",
    //       width: 62,
    //       height: 42,
    //     },
    //     {
    //       label: "Medium Bedside Lamsps",
    //       image: "/images/work2.jpg",
    //       width: 62,
    //       height: 42,
    //     },
    //     {
    //       label: "Large Floor/ Ceiling Lamps",
    //       image: "/images/work3.jpg",
    //       width: 62,
    //       height: 42,
    //     },
    //     {
    //       label: "Oversized Ceiling / Fixtures",
    //       image: "/images/work4.jpg",
    //       width: 62,
    //       height: 42,
    //     },
    //   ],
    // },
  ],
};

// About Section
export const aboutContent = {
  title: "About Sparklus Lamps",
  ourStory: {
    heading: "Our Story",
    image: "/images/our-story.jpg",
    content:
      "Founded with a vision to revolutionize luxury lighting, Sparklus Lamps has been illuminating spaces with elegance and sophistication since our inception. Our journey began with a passion for creating lighting solutions that transcend mere functionality and become works of art.",
  },
  mission: {
    heading: "Our Mission",
    content:
      "To craft exceptional lighting experiences that blend timeless design with cutting-edge technology, bringing warmth, beauty, and luxury into every space we touch.",
  },
  vision: {
    heading: "Our Vision",
    content:
      "To be the world's most sought-after luxury lighting brand, setting new standards in design excellence and customer satisfaction while illuminating lives across the globe.",
  },
};

// Designer Testimonials
export const designerTestimonials = {
  title: "What Designers Say",
  testimonials: [
    {
      id: 1,
      quote:
        "The handcrafted origami lamps from Sparklus Lamps transformed our café into a warm, inviting space that customers instantly notice and appreciate. Their unique design and ambient glow have become a defining feature of My Place Café.",
      author: "Apoorva Saxena",
      company: "My Place Café",
      image: "/images/testimonial-neha.jpg",
    },
    {
      id: 2,
      quote:
        "The Falling Stars lighting installation by Sparklus Lamps has added a unique sense of luxury and sophistication to House of Cards. Its warm ambient glow and striking handcrafted design create the perfect atmosphere for an immersive and premium gaming experience.",
      author: "House of Cards",
      company: "Lucknow",
      image: "/images/testimonial-rahul.jpg",
    },
    {
      id: 3,
      quote:
        "The Bends installation seamlessly blends art and lighting, creating a striking focal point within our workspace. Its fluid form and warm ambient glow have elevated the overall atmosphere, making the space feel more inspiring, modern, and memorable.",
      author: "Beyond Interiors Exteriors",
      company: "Lucknow",
      image: "/images/testimonial-priya.jpg",
    },
  ],
};

// Collaboration Form
export const collaborationForm = {
  title: "Let's Collaborate",
  fields: {
    name: "Your Name",
    studioName: "Studio / Company Name",
    projectType: "Project Type",
    projectLocation: "Project Location",
    estimatedQuantity: "Estimated Quantity",
    timeline: "Timeline",
  },
  projectTypes: [
    "Residential",
    "Hospitality",
    "Commercial",
    "Retail",
    "Restaurant",
    "Hotel",
    "Office",
    "Other",
  ],
  uploadLabel: "Upload Mood Board / Reference Images",
  uploadHint: "Click to upload or drag and drop",
  submitText: "Discuss My Project",
  whatsappNumber: "919548218100",
  whatsappMessage: "Hi Sparklus Lamps, I'd like to discuss my project:",
};

// Download Resources
export const downloadResources = {
  title: "Download Resources",
  description: "Get our trade catalog and capabilities deck.",
  downloadButtonText: "Download Catalog",
  catalogUrl: "/downloads/sparklus-catalog.pdf",
  catalogImage: "/images/work2.jpg",
  whatsappButtonText: "Share Mood Board on WhatsApp",
  whatsappLink:
    "https://wa.me/919548218100?text=Hi%20Sparklus%20Lamps%2C%20I%27d%20like%20to%20share%20my%20mood%20board%20for%20a%20project.",
};

// Craftsmanship Video
export const craftsmanshipVideo = {
  label: "Handcrafted with Care",
  title: "See How It's Made",
  description:
    "From cotton paper to a beautiful lighting piece – every lamp is handcrafted by skilled artisans.",
  buttonText: "Watch the Video",
  youtubeUrl: "",
  poster: "/images/work1.jpg",
};

// Collaboration Process
export const collaborationProcess = {
  label: "Our Collaboration Process",
  heading: {
    before: "From ",
    highlight1: "Vision",
    middle: " to ",
    highlight2: "Beautiful Spaces",
  },
  subtitle:
    "A seamless journey designed for interior designers and architects.",
  steps: [
    {
      id: 1,
      icon: "vision",
      title: "Share Your Vision",
      description:
        "Share your project brief, dimensions, inspiration and requirements.",
      connector: "01",
      href: siteActions.projectEnquiry,
    },
    {
      id: 2,
      icon: "consultation",
      title: "Design Consultation",
      description:
        "We understand your space, discuss lighting needs and explore custom solutions.",
      connector: "02",
      href: siteActions.whatsappConsultation,
      external: true,
    },
    {
      id: 3,
      icon: "finalize",
      title: "Finalize Design",
      description:
        "Confirm dimensions, finishes, colors and technical specifications.",
      connector: "03",
    },
    {
      id: 4,
      icon: "prototype",
      title: "Prototype & Approval",
      description:
        "We create a prototype or visual mockup for your review and approval.",
    },
    {
      id: 5,
      icon: "production",
      title: "Handmade Production",
      description:
        "Each piece is carefully handcrafted by skilled artisans using premium cotton paper.",
      connector: "05",
    },
    {
      id: 6,
      icon: "quality",
      title: "Quality Check & Delivery",
      description:
        "Every piece undergoes a strict quality check before being securely packed and delivered.",
      connector: "06",
    },
    {
      id: 7,
      icon: "installation",
      title: "Installation & Support",
      description:
        "We provide installation guidance and ongoing support for a seamless experience.",
    },
  ],
  footer: "Thoughtful lighting. Handmade with care. Crafted for your vision.",
};

// Past Works
export const pastWorks = [
  {
    id: 1,
    title: "Twisted OriFold",
    location: "Hyderabad, India",
    description: "Waterfront property with custom LED ambience lighting",
    clientRequirements:
      "The client wanted to create a warm and relaxing environment for evening use, movie nights, and unwinding after work. Traditional lighting options felt harsh and lacked character.",
    ourSolution:
      "We designed a custom suspended origami lighting sculpture inspired by flowing organic forms. Handmade paper modules were engineered into a continuous wave-like structure and illuminated using integrated LED strips. Multiple suspension points were strategically placed to maintain the dynamic form while keeping the fixture lightweight. The result is a dramatic architectural centerpiece that creates warmth, movement, and visual interest throughout the space.",
    image: "/images/work4.png",
    year: "2024",
  },
  {
    id: 2,
    title: "Falling Stars",
    location: "Lucknow, India",
    description:
      "Luxury chandelier installation featuring custom crystal designs",
    clientRequirements:
      "The client wanted a modern ceiling light that would complement a luxury interior while providing soft ambient illumination. The challenge was to create a decorative fixture that felt elegant without overpowering the room.",
    ourSolution:
      "We developed a custom handmade paper chandelier composed of repeating curved modules arranged in a circular composition. Integrated LED lighting softly illuminates the paper surfaces, creating a warm glow and intricate shadow patterns. The design delivers both functional lighting and a refined sculptural presence that enhances the ceiling architecture.",
    image: "/images/w1.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Solace Dome",
    location: "Toronto, Canada",
    description:
      "Designed to soften your space, the Solace Dome Lamp features a sculptural dome silhouette handcrafted from cotton paper",
    clientRequirements:
      "The client wanted to create a warm and relaxing environment for evening use, movie nights, and unwinding after work. Traditional lighting options felt harsh and lacked character.",
    ourSolution:
      "We designed a handcrafted table lamp using sustainable handmade paper to diffuse light softly throughout the room. The organic silhouette and warm illumination create a cozy atmosphere while serving as a decorative accent. The lamp transforms the space into a calming retreat and enhances the overall mood of the interior.",
    image: "/images/work2.jpg",
    year: "2023",
  },
  {
    id: 4,
    title: "The Bends",
    location: "Lucknow, India",
    description: "Bespoke theatrical lighting installation",
    clientRequirements:
      "The client sought a distinctive lighting solution for their creative workspace that would reflect innovation and design thinking. The fixture needed to improve the ambience while acting as a conversation piece for visitors and clients.",
    ourSolution:
      "We created a custom suspended origami lighting installation spanning the length of the workspace. The handcrafted paper structure introduces movement and texture while integrated lighting provides a warm, comfortable environment. The installation reinforces the brand identity of the space and creates a memorable experience for everyone entering the office.",
    image: "/images/work3.png",
    year: "2023",
  },
];

// Statistics
export const statistics = [
  {
    id: 1,
    value: "10+",
    label: "Stock keeping units",
    icon: "stock",
  },
  {
    id: 3,
    value: "90+",
    label: "Clients Served",
    icon: "check",
  },
  {
    id: 2,
    value: "100%",
    label: "Customer Satisfaction",
    icon: "star",
  },
  // {
  //   id: 4,
  //   value: "35+",
  //   label: "Global Locations",
  //   icon: "location",
  // },
];

// Products
export const products = [
  {
    id: 1,
    name: "Golden Peacock Ridge",
    description:
      "Perfect blend of Antique Brass Finish Animal Figurine and Sustainable Paper Shade to elevate your Bedside Space.",
    price: "",
    amazonLink: "https://amzn.in/d/gYd6El6",
    images: [
      "/images/product1-1.jpg",
      "/images/product1-2.jpg",
      "/images/product1-3.jpg",
    ],
    category: "Table Lamp",
  },
  {
    id: 2,
    name: "Golden Pleated Canopy",
    description:
      "Designed to add warmth and sophistication, this lamp features a hand-folded cotton paper shade to make your Living room start living again.",
    price: "",
    amazonLink: "https://amzn.in/d/i9ddgfK",
    images: [
      "/images/product2-1.jpg",
      "/images/product2-2.jpg",
      "/images/product2-3.jpg",
    ],
    category: "Floor Lamp",
  },
  {
    id: 3,
    name: "Wavy Golden Umbrella ",
    description:
      "Inspired by mid-century modern aesthetics and timeless design, this Lamp elevates your living room or bedroom corner.",
    price: "",
    amazonLink: "https://amzn.in/d/eatMtxH",
    images: [
      "/images/product3-1.jpg",
      "/images/product3-2.jpg",
      "/images/product3-3.jpg",
    ],
    category: "Table Lamp",
  },
  {
    id: 4,
    name: "Foldable Book Lamp",
    description:
      "It Transform your space with a touch of magic. At first glance, it looks like a beautifully crafted hardcover book, but it transforms into a stunning sculptural light",
    price: "",
    amazonLink: "https://amzn.in/d/6mvZwLY",
    images: [
      "/images/product4-1.jpg",
      "/images/product4-2.jpg",
      "/images/product4-3.jpg",
    ],
    category: "Table Lamp",
  },
];

// FAQs
export const faqs = [
  {
    id: 1,
    question: " What is Sparklus Lamps known for?",
    answer:
      "Sparklus Lamps specializes in handcrafted origami paper lamps and artistic lighting fixtures that bring warmth, depth, and character to interiors. Each piece blends traditional craftsmanship with modern design sensibilities to create light that feels alive in your space.",
  },
  {
    id: 2,
    question: "What materials do you use in your lamps?",
    answer:
      "We craft each lamp using sustainable, premium materials you can choose to suit your space. For the shade and body, we offer Handmade Paper, Jute, and Cotton Cloth — each with its own natural texture and warm, diffused glow. You can further personalize every piece with our Surface & Finish options: Custom Colours, Custom Prints, and Paper Textures. Frames and fittings are made with high-quality metal or wood for lasting beauty and durability.",
  },
  {
    id: 3,
    question:
      " Are your lamps suitable for both residential and commercial interiors?",
    answer:
      "Absolutely. Our designs enhance homes, hotels, restaurants, studios, and boutique spaces alike. Each lamp adds a sculptural, artistic element while maintaining functional illumination.",
  },
  {
    id: 4,
    question: "How durable are paper lamps?",
    answer:
      "Our lamps are designed for long-lasting use. The treated handmade paper is sturdy, flexible, and resistant to sagging or fading under regular indoor conditions. With gentle care, they retain their beauty for years.",
  },
  {
    id: 5,
    question: "How do I maintain or clean my paper lamp?",
    answer:
      "Simply dust it occasionally using a soft, dry cloth or air blower. Avoid moisture or harsh cleaners. The natural texture of the paper hides dust well and stays pristine with minimal care.",
  },
  {
    id: 6,
    question: "Where are your products crafted?",
    answer:
      "Every product is handcrafted in India, combining modern design with traditional paper-folding artistry. Each piece reflects hours of meticulous craftsmanship and attention to detail.",
  },
];

// Company Contact Details
export const companyDetails = {
  name: "Sparklus Lamps",
  email: "contact@sparkluslamps.com",
  phone: "+91 95485 59548",
  address: {
    street: "48, Tandon Bara, Beharipur",
    city: "Bareilly",
    state: "Uttar Pradesh",
    zip: "243003",
    country: "India",
  },
  officeHours: {
    weekdays: "Monday - Friday: 10:00 AM - 6:00 PM IST",
    saturday: "Saturday: 11:00 AM - 5:00 PM IST",
    sunday: "Sunday: Closed",
  },
  socialMedia: {
    instagram: "https://instagram.com/sparkluslamps",
    linkedin: "https://www.linkedin.com/in/LightUpWith-Ayush/",
    pinterest: "https://pin.it/2UZatPiAy",
  },
};

// Footer Links
export const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ],
  services: [
    { name: "Custom Lighting Design", path: "/services/custom-design" },
    { name: "Installation Services", path: "/services/installation" },
    { name: "Consultation", path: "/services/consultation" },
    { name: "Maintenance & Support", path: "/services/support" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Return Policy", path: "/return-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
  ],
};

// EmailJS Configuration (Replace with your actual IDs after setting up EmailJS)
export const emailJSConfig = {
  serviceID: "service_i5jby3d",
  templateID: "template_we6yiob",
  publicKey: "tpkQdGlYETA1bygUV",
};
