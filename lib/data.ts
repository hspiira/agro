/**
 * Site content. Edit here to change copy, links, and image URLs.
 */

export const site = {
  name: "Heritage Grove",
} as const;

export const header = {
  phone: "+1 800-123-2474",
  email: "support@heritagegrove.com",
  links: [
    { href: "#", label: "Home" },
    { href: "#marketplace", label: "Marketplace" },
    { href: "#blog", label: "Blog" },
    { href: "#community", label: "Community" },
  ],
  signUp: { href: "#", label: "Sign Up" },
  login: { href: "#", label: "Login" },
} as const;

export const hero = {
  tagline: "Sustainable Farming",
  title: "Bringing innovation to your farming journey.",
  body: "From precision agriculture to sustainable practices, we help you grow more efficiently and profitably. Coffee, bananas, livestock, beans, and Irish potatoes — join us in transforming the way you farm.",
  ctaLabel: "Get Started",
  image: {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
    alt: "Farmer in field",
  },
  mission: {
    title: "Our Mission",
    body: "To empower farmers with innovative tools and practices that enhance productivity, sustainability, and efficiency — from coffee to cattle — shaping the future of farming.",
    linkLabel: "Learn More",
    href: "#about",
  },
} as const;

export const about = {
  tabs: [
    { id: "about", label: "About Us" },
    { id: "journey", label: "Journey" },
    { id: "vision", label: "Vision" },
    { id: "mission", label: "Mission" },
  ],
  activeTabId: "about",
  whoWeAre: {
    subheading: "Who we are at Heritage Grove",
    title: "With years of expertise in both farming and tech, we're committed to helping farmers grow smarter and achieve better yields. Together, we're shaping the future of farming for a more sustainable world.",
    body: "By combining innovation with sustainability, we empower farmers to increase productivity, reduce waste, and contribute to a healthier planet. From coffee and bananas to sheep, cattle, goats, and Irish potatoes — we're here for the long haul.",
    ctaLabel: "Learn More",
    ctaHref: "#",
  },
  featureCards: [
    {
      id: "image-1",
      img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
      imgAlt: "Farming",
      highlight: false,
    },
    {
      id: "years",
      stat: "10+",
      subtitle: "Years of Agricultural Innovation",
      desc: "With a decade of experience, we've pioneered advancements in precision agriculture, helping farmers increase yields while reducing resource use.",
      highlight: false,
    },
    {
      id: "image-2",
      img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80",
      imgAlt: "Fresh produce",
      highlight: false,
    },
    {
      id: "satisfaction",
      stat: "85%",
      subtitle: "Customer Satisfaction Rate",
      desc: "Our users trust us to deliver valuable tools and support that enable them to work smarter and grow better.",
      highlight: true,
    },
  ],
} as const;

export const statsStrip = {
  items: [
    { value: "10+", label: "Years of farming" },
    { value: "85%", label: "Customer satisfaction" },
    { value: "500+", label: "Farms we work with" },
    { value: "Fresh", label: "Daily harvest" },
  ],
} as const;

export const whyChooseUs = {
  title: "Why Heritage Grove",
  subtitle: "Empowering sustainable agriculture.",
  body: "We support farmers and communities with quality produce and livestock, from coffee and bananas to sheep, cattle, goats, and Irish potatoes.",
  bullets: [
    "Sustainable farming practices",
    "Quality produce & livestock",
    "Expert support & delivery",
    "Rooted in community",
  ],
} as const;

export const stayConnected = {
  title: "Stay connected",
  subtitle: "Events and updates from the farm.",
  cards: [
    {
      id: "workshop",
      title: "Farm tour & tasting",
      date: "Seasonal",
      desc: "Visit the farm and taste our coffee, produce, and more.",
      img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80",
      imgAlt: "Farm visit",
    },
    {
      id: "harvest",
      title: "Harvest season updates",
      date: "Monthly",
      desc: "Availability for bananas, beans, potatoes, and livestock.",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80",
      imgAlt: "Harvest",
    },
    {
      id: "community",
      title: "Community markets",
      date: "Weekly",
      desc: "Find us at local markets with fresh produce and eggs.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
      imgAlt: "Community",
    },
  ],
} as const;

export const footer = {
  brandName: "Heritage Grove",
  tagline: "Farm-fresh coffee, bananas, livestock, beans, and Irish potatoes for our community.",
  columns: [
    { title: "Produce", links: [{ href: "#", label: "Coffee" }, { href: "#", label: "Bananas" }, { href: "#", label: "Beans" }, { href: "#", label: "Irish potatoes" }] },
    { title: "Livestock", links: [{ href: "#", label: "Sheep & cattle" }, { href: "#", label: "Goats & poultry" }, { href: "#", label: "Pigs & duck" }] },
  ],
  contactTitle: "Contact",
  contactEmail: "support@heritagegrove.com",
  contactPhone: "+1 800-123-2474",
  newsletterTitle: "Stay informed",
  newsletterPlaceholder: "Your email",
  newsletterButton: "Subscribe",
  bottomLinks: [{ href: "#", label: "Privacy" }, { href: "#", label: "Terms" }, { href: "#", label: "Contact" }],
  copyright: "© Heritage Grove",
} as const;
