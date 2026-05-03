/**
 * Central style configuration. Colors in app/globals.css.
 */

export const vars = {
  overlay: "var(--overlay)",
  overlaySolid: "var(--overlay-solid)",
  lime: "var(--lime)",
  background: "var(--background)",
} as const;

export const classes = {
  page: "min-h-screen font-sans bg-background text-foreground",

  /* Header / top bar – fully transparent at top, solid when scrolled */
  topBar: "sticky top-0 z-50 flex items-center justify-between px-4 py-3 md:px-8 md:py-4 text-white transition-[background-color,backdrop-filter] duration-200",
  topBarTransparent: "bg-transparent",
  topBarScrolled: "bg-overlay-solid backdrop-blur-sm",
  topBarContact: "hidden md:flex flex-col text-xs text-white/90 leading-tight",
  topBarNav: "hidden md:flex items-center gap-6",
  topBarLink: "text-white/90 hover:text-white text-sm font-medium transition-colors",
  topBarSignUp: "text-white/90 hover:text-white text-sm font-medium transition-colors",
  btnPrimaryHeader: "rounded-full bg-lime px-4 py-2 text-foreground text-sm font-medium hover:opacity-90 inline-flex items-center gap-2 transition-opacity",
  loginDot: "w-1.5 h-1.5 rounded-full bg-foreground shrink-0",
  mobileMenuButton: "md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors",
  mobileMenu: "absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 md:hidden",
  mobileMenuLink: "block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0",
  mobileMenuCtas: "p-4 flex gap-2 border-t border-white/10",

  /* Hero */
  hero: "relative min-h-[70vh] flex flex-col md:flex-row md:items-center",
  heroOverlay: "absolute inset-0 bg-black/50",
  heroContent: "relative z-10 px-4 py-16 md:px-12 md:py-24 max-w-xl",
  heroTagline: "inline-block rounded-full px-3 py-1 text-sm text-white bg-black/40 mb-4",
  heroTitle: "text-4xl md:text-5xl font-bold text-white leading-tight",
  heroBody: "mt-4 text-lg text-white/90",
  heroCta: "rounded-full mt-6 inline-flex items-center gap-3 bg-lime px-6 py-3 text-foreground font-medium hover:opacity-90",
  heroCtaCircle: "w-8 h-8 rounded-full bg-foreground/20 flex items-center justify-center shrink-0",

  /* Mission block */
  missionBox: "relative z-10 md:max-w-sm p-6 rounded-lg bg-black/50 text-white",
  missionTitle: "text-sm font-medium mb-2",
  missionBody: "text-sm text-white/90 leading-relaxed",
  missionLink: "mt-3 inline-flex items-center gap-1 text-white text-sm font-medium hover:underline",

  /* About section – same horizontal margins as hero (px-4 md:px-12), container left-aligned to match */
  sectionLight: "bg-background px-4 py-12 md:px-12 md:py-16",
  container: "mx-auto max-w-6xl w-full",
  containerAbout: "w-full",
  tabs: "flex gap-2 mb-8",
  tab: "rounded-full px-4 py-2 text-sm font-medium border border-border-light bg-background text-foreground",
  tabActive: "rounded-full px-4 py-2 text-sm font-medium bg-lime text-foreground border border-lime",
  whoWeAreGrid: "grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-10",
  whoWeAreLeft: "md:col-span-4",
  whoWeAreRight: "md:col-span-8",
  subheading: "text-sm text-foreground text-left",
  contentTitle: "text-2xl md:text-3xl font-bold text-foreground leading-snug mb-4 text-left",
  contentBody: "text-text-muted mb-6 max-w-3xl text-left",
  contentCta: "rounded-full inline-flex border border-border-light px-4 py-2 text-foreground font-medium hover:bg-white/80",

  /* Feature cards – 4 square boxes, larger size, equal height, left-aligned text */
  cardsGrid: "grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mt-10 items-stretch",
  card: "rounded-lg bg-white border border-border-light p-6 flex flex-col h-full relative aspect-square min-h-0 overflow-hidden text-left",
  cardImageOnly: "rounded-lg bg-white border border-border-light p-0 flex flex-col h-full relative aspect-square min-h-0 overflow-hidden",
  cardHighlight: "rounded-lg bg-lime border border-lime text-foreground p-6 flex flex-col h-full relative aspect-square min-h-0 overflow-hidden text-left",
  cardImage: "relative overflow-hidden rounded-t-lg mb-4",
  cardImageFill: "absolute inset-0 overflow-hidden",
  cardImageWithCaption: "relative min-h-0 flex-1 overflow-hidden rounded-t-lg mb-4",
  cardStat: "text-3xl font-bold text-left",
  cardStatHighlight: "text-3xl font-bold text-foreground text-left",
  cardTitle: "text-lg font-semibold mt-2 text-left",
  cardTitleHighlight: "text-lg font-semibold mt-2 text-foreground text-left",
  cardDesc: "text-sm text-text-muted mt-2 flex-1 text-left leading-relaxed",
  cardDescHighlight: "text-sm text-foreground/90 mt-2 flex-1 text-left leading-relaxed",
  readMoreCircle: "absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-white shrink-0",
  readMoreCircleHighlight: "absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/20 flex items-center justify-center text-foreground shrink-0",

  imageCover: "object-cover",

  /* Stats strip */
  statsStrip: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 md:py-16",
  statItem: "text-center",
  statValue: "text-3xl md:text-4xl font-bold text-lime",
  statLabel: "text-sm text-text-muted mt-1",

  /* Why choose us */
  whySection: "py-12 md:py-16",
  whyGrid: "grid md:grid-cols-2 gap-10 md:gap-12 items-center",
  whyTitle: "text-2xl md:text-3xl font-bold text-foreground mb-2",
  whySubtitle: "text-lg text-lime font-medium mb-4",
  whyBody: "text-text-muted mb-8",
  whyList: "space-y-4",
  whyBullet: "flex items-center gap-3 text-foreground",
  whyBulletCircle: "w-6 h-6 rounded-full bg-lime flex items-center justify-center shrink-0",

  /* Stay connected / events */
  eventsSection: "py-12 md:py-16",
  eventsTitle: "text-2xl md:text-3xl font-bold text-foreground mb-2 text-left",
  eventsSubtitle: "text-text-muted mb-8 text-left",
  eventsGrid: "grid md:grid-cols-3 gap-6",
  eventCard: "rounded-lg bg-white border border-border-light overflow-hidden text-left transition-shadow hover:shadow-md",
  eventCardImage: "relative aspect-[4/3] overflow-hidden",
  eventCardBody: "p-4",
  eventCardTitle: "font-semibold text-foreground",
  eventCardMeta: "text-sm text-lime mt-1",
  eventCardDesc: "text-sm text-text-muted mt-2",

  /* Footer */
  footer: "bg-overlay-solid text-white py-12 md:py-16",
  footerInner: "max-w-6xl w-full mx-auto px-4 md:px-12",
  footerGrid: "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10",
  footerBrand: "md:col-span-4",
  footerBrandName: "text-lg font-semibold mb-2",
  footerTagline: "text-sm text-white/80",
  footerColumn: "md:col-span-2",
  footerColumnTitle: "text-sm font-semibold uppercase tracking-wider mb-4",
  footerLinks: "space-y-2",
  footerLink: "text-sm text-white/80 hover:text-white transition-colors",
  footerContact: "md:col-span-2",
  footerNewsletter: "md:col-span-4",
  footerNewsletterTitle: "text-sm font-semibold uppercase tracking-wider mb-3",
  footerInput: "w-full px-3 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm outline-none focus:border-lime transition-colors",
  footerSubmit: "mt-2 rounded-full bg-lime px-4 py-2 text-foreground text-sm font-medium hover:opacity-90 w-full",
  footerBottom: "mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70",
  footerBottomLinks: "flex gap-6",
} as const;
