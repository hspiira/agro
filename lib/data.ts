/**
 * Alm Agros site content. Edit these typed collections to update copy, links,
 * images, products, and farm contact details without touching layout code.
 */

export const site = {
  name: "Alm Agros",
  location: "Mubende, Uganda",
  tagline: "From the Heart of Uganda, To Your Table",
  founded: "2012",
  email: "hello@almagros.ug",
  phone: "+256 700 000 000",
  alternatePhone: "+256 772 000 000",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#products", label: "Products" },
  { href: "#blog", label: "Blog" },
  { href: "#partnership", label: "Partnership" },
  { href: "#contact", label: "Contact" },
] as const;

export const images = {
  hero: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&q=85&fit=crop",
  about: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80&fit=crop",
  coffee: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80&fit=crop",
  banana: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&q=80&fit=crop",
  cattle: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80&fit=crop",
  farm1: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&fit=crop",
  farm2: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80&fit=crop",
  farm3: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80&fit=crop",
  farm4: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80&fit=crop",
  blog1: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80&fit=crop",
  blog2: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&q=80&fit=crop",
  partner: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80&fit=crop",
} as const;

export const heroStats = [
  { value: "500+", label: "Acres of Farmland" },
  { value: "12+", label: "Years of Farming" },
  { value: "3,000+", label: "Families Served" },
  { value: "100%", label: "Organic Practices" },
] as const;

export const farmValues = [
  { icon: "Organic", title: "Organic First", body: "No harmful chemicals. We protect the soil that feeds every harvest." },
  { icon: "People", title: "Community Rooted", body: "Employing and buying from local families across Mubende District." },
  { icon: "Land", title: "Sustainable Land", body: "Composting, pasture cycles, and careful water use guide our work." },
  { icon: "Direct", title: "Direct to You", body: "Farm-to-table supply for households, cafes, hotels, and partners." },
] as const;

export const activities = [
  {
    image: images.farm1,
    label: "Coffee Harvesting",
    body: "Handpicked at peak ripeness",
    tag: "Annual",
    featured: true,
  },
  { image: images.cattle, label: "Cattle Grazing", body: "Pasture-raised, grass-fed", tag: "Year-round" },
  { image: images.farm3, label: "Banana Plantation", body: "East African highland variety" },
  { image: images.farm4, label: "Soil Preparation", body: "Natural composting cycles" },
  { image: images.farm2, label: "Processing & Drying", body: "Sun-dried coffee beans" },
] as const;

export const products = [
  {
    image: images.coffee,
    name: "Arabica Coffee Beans",
    body: "Sun-dried, single origin",
    price: "UGX 45,000",
    unit: "/kg",
    badge: "Best Seller",
    tone: "accent",
  },
  {
    image: images.banana,
    name: "East African Bananas",
    body: "Matooke and sweet varieties",
    price: "UGX 12,000",
    unit: "/bunch",
    badge: "Fresh",
    tone: "green",
  },
  {
    image: images.cattle,
    name: "Premium Beef Cuts",
    body: "Grass-fed, free-range",
    price: "UGX 28,000",
    unit: "/kg",
    badge: "Order Ahead",
    tone: "muted",
  },
  {
    image: images.coffee,
    name: "Dark Roast Coffee",
    body: "Medium roast, ground",
    price: "UGX 55,000",
    unit: "/500g",
    badge: "New",
    tone: "green",
  },
] as const;

export const blogPosts = [
  {
    image: images.blog1,
    category: "Coffee Farming",
    title: "Best Practices for Coffee Harvesting in Uganda",
    date: "Mar 2026",
    readTime: "5 min read",
  },
  {
    image: images.blog2,
    category: "Animal Care",
    title: "Rotational Grazing for Healthier Cattle and Soil",
    date: "Feb 2026",
    readTime: "7 min read",
  },
  {
    image: images.about,
    category: "Crop Management",
    title: "Banana Bunch Management for Maximum Yield",
    date: "Jan 2026",
    readTime: "4 min read",
  },
] as const;

export const partnershipTypes = [
  "Wholesale Buyer",
  "NGO/Government",
  "Investor",
  "Co-op Partner",
  "Restaurant/Hotel",
] as const;

export const testimonials = [
  {
    quote: "The coffee from Alm Agros is extraordinary: complex, earthy, and perfectly processed. Our cafe cannot source from anyone else.",
    name: "Sarah Namukasa",
    role: "Owner, Kampala Coffee House",
    initials: "SN",
  },
  {
    quote: "Partnering with this farm transformed the food supply chain for 12 schools in Mubende. Exceptional quality, every time.",
    name: "Dr. James Ochieng",
    role: "Food Security Director, USAID Uganda",
    initials: "JO",
  },
  {
    quote: "I placed a wholesale order for my supermarket chain and the bananas arrived perfectly ripened. Consistent quality, every single time.",
    name: "Prosper Mugisha",
    role: "Procurement Manager",
    initials: "PM",
  },
] as const;

export const contactDetails = [
  { title: "Location", body: "Mubende District, Central Uganda\nNear Mubende Town Council" },
  { title: "Phone / WhatsApp", body: "+256 700 000 000\n+256 772 000 000" },
  { title: "Email", body: "hello@almagros.ug" },
  { title: "Farm Hours", body: "Mon-Sat: 7:00am - 6:00pm" },
] as const;

export const footerColumns = [
  { title: "Products", links: ["Coffee Beans", "Bananas", "Beef Cuts", "Roasted Coffee"] },
  { title: "Company", links: ["About Us", "Farm Activities", "Blog", "Careers"] },
  { title: "Connect", links: ["Partnership", "Orders", "WhatsApp Us", "Find Us"] },
] as const;
