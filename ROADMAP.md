# Alm Agros — Business Transformation Roadmap

> **Document purpose**: Technical and business roadmap for transforming the Alm Agros marketing site into a fully operational farm-to-consumer and farm-to-business platform. Every recommendation is grounded in verified research on the Ugandan agricultural market, mobile-commerce infrastructure, and competitive analysis of East African agri-tech platforms.

---

## Table of Contents

1. [Market Context & Evidence](#1-market-context--evidence)
2. [The Problem Alm Agros Solves](#2-the-problem-alm-agros-solves)
3. [Product Lines — Pricing & Market Data](#3-product-lines--pricing--market-data)
4. [Payments Infrastructure in Uganda](#4-payments-infrastructure-in-uganda)
5. [Competitive Landscape](#5-competitive-landscape)
6. [Mubende District — Operational Context](#6-mubende-district--operational-context)
7. [Phase 1 — Foundation (MVP)](#7-phase-1--foundation-mvp)
8. [Phase 2 — B2B Wholesale Portal](#8-phase-2--b2b-wholesale-portal)
9. [Phase 3 — Trust & Traceability](#9-phase-3--trust--traceability)
10. [Phase 4 — Operational Backend](#10-phase-4--operational-backend)
11. [Code Quality Debt](#11-code-quality-debt)
12. [Localization Requirements](#12-localization-requirements)

---

## 1. Market Context & Evidence

### Uganda Agriculture — Scale

| Metric | Value | Source |
|--------|-------|--------|
| Agriculture sector GDP contribution | 23.8% of GDP (FY2022/23) | UBOS 2024 |
| Agriculture sector market value | USD 4.07 billion (2024) | Mordor Intelligence |
| Projected value by 2029 | ~USD 5 billion (CAGR 4.2%) | Mordor Intelligence |
| Population employed in agriculture | ~70% | FAO Uganda |
| Coffee export earnings | USD 1.7 billion (Feb 2025 cumulative) | UCDA 2025 |
| Annual crop output growth | ~2% p.a. vs population growth of 3.3% | World Bank |

**Why this matters for Alm Agros**: The gap between food production growth (2%) and population growth (3.3%) creates sustained price pressure and urgency for efficient direct supply chains. Farms that build direct-to-consumer channels today capture durable margin over the next decade.

### Mobile & Internet Access

| Metric | Value | Source |
|--------|-------|--------|
| Active SIM connections | 33M+ (67.7% penetration) | GeoPoll 2024 |
| 4G population coverage | 82% nationwide | MTN/Airtel 2024 |
| Internet users via mobile | 95% of all internet users | DataReportal 2024 |
| MTN Mubende CSSR (call success rate) | 99% (DCR 0.1%) | MTN Uganda 2024 |
| Average mobile download speed (MTN) | 16.3 Mbps national average | MTN Uganda 2024 |

**Why this matters**: The app must be mobile-first without compromise. 95% of target customers will never visit on a laptop. The service worker / PWA offline capability is not a nice-to-have — it is a requirement for Mubende's rural connectivity pockets and data-bundle-constrained urban users.

---

## 2. The Problem Alm Agros Solves

### The Middlemen Chain

The standard Ugandan agricultural supply chain for matooke:

```
Farmer (Mubende)
  → bicycle/motorbike collector (+25%)
    → small truck aggregator (+20%)
      → wholesale market (Kalerwe/Owino) (+30%)
        → retail market stall (+20%)
          → Consumer
```

**Each layer adds 25–40% to the price.** Farmers receive 40–60% less than what Kampala consumers pay. A direct farm-to-consumer channel eliminates 3–4 intermediary margins.

**Evidence**: Research from ILRI's Uganda Matooke Value Chain analysis documents that farm-gate price (UGX 5,000–8,000/bunch) reaches the retail consumer at UGX 10,000–35,000/bunch — a 2–4x markup across the chain.

### The Trust Gap

Ugandan consumers are highly wary of online fraud. Without visible trust signals — mobile money payment logos, a physical farm address, real customer testimonials with named businesses — conversion rates on e-commerce platforms are low. Alm Agros has a major advantage: a named, located, photographable farm with a 12-year track record. That story needs to be the centre of the digital product, not a secondary page.

### The Post-Harvest Loss Problem

Post-harvest losses for perishable produce in Uganda are estimated at **30–50%** without cold chain infrastructure. Uganda's cold storage currently covers only 9 of 16 Kampala city districts (TraceData Research 2024). For Alm Agros:

- Coffee (dried/processed): lower risk — long shelf life
- Matooke: medium risk — 7–14 day shelf life after cutting
- Premium beef: high risk — requires cold chain from slaughter to delivery

The app's inventory and order management system must account for real perishable stock, not infinite virtual inventory.

---

## 3. Product Lines — Pricing & Market Data

### Coffee

Uganda is the world's 8th largest coffee producer. Coffee is its #1 export earner at USD 1.7 billion (Feb 2025). Prices surged ~76% year-on-year by early 2025 driven by global supply shortages.

| Grade | Farm Gate (UGX/kg) | Export FOB (USD/kg) | Notes |
|-------|-------------------|---------------------|-------|
| FAQ Robusta | UGX 12,000–13,500 | $2.50–$3.00 | Standard grade |
| Arabica parchment | UGX 14,000–15,500 | ~$4.64 | Q1 2025 avg |
| Bugisu AB | — | ~$4.63 | Named origin |
| Bugisu PB (Peaberry) | — | $8.18 | Feb 2025 peak |
| Uganda average all grades | — | $5.03 | Feb 2025 |

**Source**: UCDA (Uganda Coffee Development Authority), AGnimble Market Trends Q1 2025, Daily Coffee News.

**Certifications that add premium**:
- Rainforest Alliance: +$0.05–$0.10/lb (~UGX 400–800/kg) paid by buyer
- Fair Trade: +$0.20/lb minimum price guarantee
- Organic: +8–12% over commodity price
- Specialty (SCA 85+ cupping score): access to specialty roaster markets at significantly higher prices

**Consumer retail price range** (Kampala, roasted):
- Ground coffee 250g: UGX 12,000–18,000
- Whole bean 500g: UGX 22,000–35,000
- Specialty single-origin 250g: UGX 25,000–45,000

**Current app price** (`UGX 45,000/kg`): Correct range for Arabica at consumer margin. Dark Roast at `UGX 55,000/500g` (= UGX 110,000/kg) is at the top end of specialty pricing — justified only if positioned as premium single-origin.

### Matooke & Bananas

| Chain Point | Price per Bunch | Notes |
|-------------|----------------|-------|
| Farm gate (Mubende) | UGX 5,000–8,000 | Medium bunch ~20–23 kg |
| Wholesale (Kampala) | UGX 8,000–13,000 | Kalerwe market |
| Retail (Kampala) | UGX 10,000–35,000 | Seasonal variation is wide |
| Peak season (low supply) | UGX 25,000–35,000 | Sep–Nov, Mar–May |

**Source**: ACSA Uganda weekly price reports, ILRI Matooke Value Chain analysis.

**B2B opportunity** (highest priority):
- Restaurant: 5–20 bunches/week at UGX 14,000–18,000/bunch
- Hotel: 20–100 bunches/week at UGX 13,000–16,000/bunch
- Institutional caterer: 50–500 bunches/event

**Direct delivery to Kampala hotels/restaurants cuts 2–3 middleman layers, achievable 35% margin improvement** over selling into the wholesale market.

**Current app price** (`UGX 12,000/bunch`): This is the farm-gate wholesale price. Consumer and restaurant price should be UGX 18,000–25,000/bunch at direct-to-consumer margin.

### Beef

Uganda does not have a USDA-style beef grading system. "Premium" in the Ugandan market means: known breed, feedlot-finished, verified slaughter age and health record, MAAIF-approved abattoir, and specific cuts vacuum-packed or fresh-delivered same-day.

| Cut | Retail Price (Kampala, 2024–2026) |
|-----|----------------------------------|
| Beef with bones | UGX 8,000–10,000/kg |
| Standard boneless | UGX 12,000–15,000/kg |
| Premium boneless | UGX 15,000–20,000/kg |
| Sirloin / fillet | UGX 18,000–22,000/kg |
| Minced beef | UGX 10,000–14,000/kg |

**Source**: Selina Wamucii Uganda beef price index, ILRI Uganda Beef Value Chain analysis.

**Cattle purchase price**: UGX 1,800,000–4,000,000 per head (live, Mubende region).

**Current app price** (`UGX 28,000/kg` for "Premium Beef Cuts"): Slightly above the premium retail range of UGX 15,000–22,000/kg. Defensible as a premium delivery product if targeted at Kampala restaurants; may reduce conversion for direct consumer sales. Recommend tiered pricing: stew cuts at UGX 18,000/kg, premium cuts at UGX 26,000–30,000/kg.

---

## 4. Payments Infrastructure in Uganda

### Mobile Money Dominance

| Provider | 2024 Performance | Coverage |
|----------|-----------------|----------|
| MTN Mobile Money | Revenue UGX 981.94 billion | Dominant in most regions |
| Airtel Money | ~10% less revenue than MTN | Strong competitor, fast expansion |

**Mobile money is the primary payment channel for all Ugandan demographics**, not just rural or low-income users. Kampala's middle class pays for restaurant deliveries, groceries, and services via MoMo. Any checkout without MoMo support will fail.

### Recommended Payment Integration: Pesapal

For Alm Agros' scale (starting up, Uganda-focused), **Pesapal** is the recommended first integration:

- Covers MTN MoMo + Airtel Money + Visa/Mastercard in one SDK
- Uganda-registered and operational since 2009
- UGX settlement to local bank account (T+1)
- Mobile money fee: ~1.5–3.5%
- Has a hosted checkout page (no PCI DSS burden on Alm Agros)
- Already used by major Ugandan businesses (Jumia Uganda, ride-hailing services)

**Alternative when scaling**: MTN MoMo Direct API (momodeveloper.mtn.com) at 1–2% fee — lower cost but requires separate Airtel integration and more dev work.

### Critical Security Note

Always implement **server-side webhook verification** for payment confirmations. Fake payment confirmation attacks (sending a forged "payment received" callback) are documented in Uganda's e-commerce ecosystem. Never trust a client-side payment status.

### Cash on Delivery

COD is still widely expected in Uganda, especially for first-time buyers. Offering COD alongside MoMo reduces cart abandonment for new customers. The app should support a "Pay on delivery" option with order confirmation via WhatsApp.

---

## 5. Competitive Landscape

### Key Players in East Africa

| Company | Model | Funding | Relevance to Alm Agros |
|---------|-------|---------|----------------------|
| **Twiga Foods** (Kenya) | B2B farm-to-kiosk logistics | ~$160M raised | Shows B2B volume is the sustainable revenue model |
| **Apollo Agriculture** (Kenya) | Crop finance + satellite underwriting | $40M Series B | Shows data-driven farm operations are investable |
| **EzyAgric** (Uganda) | Farm records + micro-loans + market linkages | Local VC | Most direct local competitor — 106,000+ farmers |
| **EzyFarm** (Uganda) | Farm-to-buyer marketplace | Award-winning | Broad marketplace; Alm Agros can win on brand specificity |
| **BVL Technologies** (Uganda) | Crop traceability + logistics tracking | Local | Shows traceability is a viable Uganda product |
| **Emata** (Uganda) | Agri-loans at 5x lower than informal rates | Expanding | Potential integration partner for buyer credit |

### The Gap Alm Agros Fills

**There is no premium farm-branded, direct-to-consumer marketplace for a specific named Ugandan farm** selling traceable, certified products with subscription and B2B ordering. Twiga is B2B-only and Kenya-focused. EzyAgric serves smallholder farmers, not premium farm brands. Alm Agros can be Uganda's first recognisable farm brand — the equivalent of what Burt's Bees is to apiculture or what Blue Bottle did for single-origin coffee.

---

## 6. Mubende District — Operational Context

| Factor | Detail |
|--------|--------|
| Location | 0°35'N, 31°21'E — 160 km west of Kampala |
| Highway | Kampala–Fort Portal Highway (paved) |
| Drive time to Kampala | 2–3 hours |
| Elevation | 1,060–1,540 m above sea level |
| Annual rainfall | Up to 1,200 mm (bimodal: Mar–May, Sep–Nov) |
| Soil | Deep red/brown loam — part of Uganda's "fertile crescent" |
| 4G coverage | Both MTN and Airtel — 99% call success rate in district |
| Notable farm | Kaweri Coffee Plantation (1,626 ha — Uganda's largest) |
| Cattle context | Within Uganda's cattle corridor; Kisombwa Ranching Scheme nearby |

**Mubende's 1,300m elevation produces dense, hard beans** with mild acidity suitable for Arabica production (unlike most of western Uganda which is lower-altitude Robusta country). This is a quality differentiator that the app and branding should communicate.

**The 160 km on a paved highway is a competitive advantage** over farms further west. A refrigerated or insulated delivery van can reach Kampala in 2–3 hours — sufficient for same-day or next-day delivery of beef and fresh matooke without cold chain loss.

---

## 7. Phase 1 — Foundation (MVP)

**Goal**: Replace the current WhatsApp order hack with a real transactional system. Enable customers to browse, order, and pay — with confirmation.

### 7.1 Mobile Money Checkout

**Implementation**: Integrate Pesapal's hosted checkout.

```
Customer selects items → enters phone number
  → Pesapal triggers MoMo STK push
    → customer enters PIN on their phone
      → Pesapal webhook confirms to Alm Agros server
        → order created → WhatsApp confirmation sent
```

**Required credentials before going live**:
- Uganda Revenue Authority TIN
- National Identification Number (NIN) of director
- Verified bank account (Centenary Bank, Stanbic, Absa Uganda all work well)
- Certificate of incorporation

### 7.2 Product Variants

Current data model has no variants. Every product needs weight/size/cut options:

```typescript
// lib/types.ts — new type
export type ProductVariant = {
  sku: string;
  label: string;       // "500g", "1kg", "Fillet", "Stew Cut"
  price: number;       // in UGX (number, not string)
  unit: string;        // "kg", "bunch", "500g pack"
  stock?: number;      // undefined = available; 0 = out of stock
};
```

**Why price as `number` not `string`**: Current `"UGX 45,000"` string makes calculations impossible — cart totals, discount logic, and invoice generation all require numeric values. Format to display string at the component layer.

### 7.3 Corrected Pricing

| Product | Current App Price | Correct Market Price | Basis |
|---------|------------------|---------------------|-------|
| Arabica Coffee Beans | UGX 45,000/kg | UGX 45,000–52,000/kg | ✅ Correct range |
| Dark Roast Coffee | UGX 55,000/500g | UGX 28,000–38,000/500g | ❌ 45% over market |
| East African Bananas | UGX 12,000/bunch | UGX 18,000–22,000/bunch | ❌ Farm-gate price, not consumer |
| Premium Beef Cuts | UGX 28,000/kg | UGX 18,000–30,000/kg by cut | Needs cut variants |

### 7.4 WhatsApp Business API

Replace the current URL-constructed message (`https://wa.me/...?text=...`) with the official WhatsApp Business API:

- Structured order confirmation templates (requires Meta Business verification)
- Two-way messaging for delivery updates
- Broadcast lists for weekly stock availability announcements to B2B buyers

### 7.5 Delivery Zones

Define 3 zones from Mubende:

| Zone | Area | Delivery Fee | Lead Time |
|------|------|-------------|-----------|
| Zone A | Kampala metropolitan | UGX 15,000–25,000 | Next day |
| Zone B | Greater Kampala (Wakiso, Mukono, Mpigi) | UGX 10,000–15,000 | Next day |
| Zone C | Mubende town and local | UGX 3,000–5,000 | Same day |

---

## 8. Phase 2 — B2B Wholesale Portal

**Goal**: Capture the hotel and restaurant market in Kampala, which is the highest-value channel.

**Evidence for prioritisation**: Kampala's 5-star and 4-star hotels buy 20–100 matooke bunches per week. At UGX 16,000/bunch direct-supply price, a single hotel account is worth UGX 1,280,000–6,400,000/month. Ten hotel accounts = UGX 12.8–64M/month from matooke alone.

### 8.1 Wholesale Pricing Tiers

```typescript
export const wholesaleTiers = {
  retail:        { minOrderUGX: 0,       discount: 0    },
  smallBusiness: { minOrderUGX: 500_000, discount: 0.10 },
  restaurant:    { minOrderUGX: 1_500_000, discount: 0.18 },
  hotel:         { minOrderUGX: 3_000_000, discount: 0.25 },
} as const;
```

### 8.2 Required Features

- **Bulk order form**: Product + quantity + requested delivery date
- **Invoice generation**: PDF with URA-format (TIN, VAT 18%, itemised lines)
- **Net-30 credit terms**: Track outstanding balances for vetted accounts
- **Weekly order templates**: B2B buyers save and re-submit their standard order
- **Business KYC**: TIN verification before wholesale pricing is shown

### 8.3 Key B2B Targets

Segment by approach channel:
1. **High-end restaurants** (Kampala): Fave, Haandi, 1000 Cups Coffee — premium beef and specialty coffee
2. **Hotels**: Serena, Kampala Sheraton, Protea — matooke and beef for in-house restaurants
3. **School caterers**: 50–500 matooke bunches per event; institutional pricing
4. **Supermarkets**: Carrefour Uganda, Shoprite — require supply chain documentation but volume is high

---

## 9. Phase 3 — Trust & Traceability

**Evidence**: Ugandan consumers cite distrust of online vendors as the #1 reason for not purchasing online (GeoPoll 2024). Trust signals are conversion.

### 9.1 Product Traceability

Each product batch gets a traceability ID:

```
COF-ARA-BLK3-APR26-001
 │    │    │    │    └─ Batch sequence
 │    │    │    └─ Harvest month/year
 │    │    └─ Farm block identifier
 │    └─ Arabica variety
 └─ Coffee
```

Product page shows: block harvested from, harvest date, processing method (washed/natural/honey), drying days, moisture content at packaging.

### 9.2 Certifications to Pursue

Priority order based on market premium vs. cost of certification:

| Certification | Estimated Cost | Annual Premium Benefit | Timeline |
|--------------|---------------|----------------------|---------|
| Rainforest Alliance | USD 800–2,500 (farm size dependent) | UGX 400–800/kg on coffee | 6–12 months |
| Uganda Organic (NOGAMU) | USD 300–600 | +8–12% on all organic lines | 3–6 months |
| UCDA Export License | Required for export | Opens international B2B | 2–4 months |
| SCA Specialty Cupping | USD 50–200 per lot | Access to specialty roaster market | Ongoing |

### 9.3 Farm Transparency Page

A dedicated `/farm` page (not just an about section) showing:
- Live UCDA published coffee farm-gate price vs Alm Agros consumer price
- Farm block map (OpenStreetMap-based, no Google Maps cost)
- Real farm photos with timestamps (not stock Unsplash images — this is a critical trust issue)
- Employee count and community impact figures

---

## 10. Phase 4 — Operational Backend

**Goal**: Replace manual WhatsApp order management with a real operations system.

### 10.1 Inventory Management

| Product | Tracking Unit | Perishability | Notes |
|---------|--------------|---------------|-------|
| Coffee (parchment) | kg | Low — months | Track by lot/grade |
| Coffee (roasted) | 250g/500g packs | Medium — 3–6 months | Track by roast date |
| Matooke | Bunches | Medium — 7–14 days after cutting | Seasonal availability |
| Beef | kg by cut | High — 2–4 days fresh, 3 months frozen | Cold chain required |

### 10.2 Driver App

A minimal separate route (`/driver`) visible only to authenticated drivers:

```
Today's deliveries (sorted by zone)
  → Customer name + phone
  → Order items + weights
  → Delivery address
  → "Mark Delivered" button (sends customer confirmation SMS/WhatsApp)
```

### 10.3 Financial Dashboard (Farm Owner View)

```
/admin
  ├── Revenue by product (this week / this month)
  ├── Orders: pending / packed / dispatched / delivered
  ├── Top customers by order value
  ├── Inventory levels with low-stock alerts
  └── Outstanding B2B invoices
```

### 10.4 Harvest Calendar

Bimodal rainfall seasons drive supply:
- **Long rains harvest**: April–June (coffee, matooke)
- **Short rains harvest**: October–December

The app should reflect upcoming harvest availability so B2B buyers can pre-order. A simple "Next harvest: estimated X tonnes, available from [date]" on the product page is sufficient for Phase 4.

---

## 11. Code Quality Debt

These are engineering issues that must be resolved before Phase 2 features are built on top of them.

### Critical (Fix Now)

| Issue | File | Fix |
|-------|------|-----|
| Dual CSS token systems | `globals.css` | Make `--m-*` vars reference desktop tokens |
| `font-money` stale fallback | `globals.css:65` | Remove Cormorant Garamond reference |
| `--m-sub` fails WCAG AA | `globals.css` | Change opacity from 0.28 to ≥0.5 |
| `AlmAgrosSite.tsx` is 710 lines | `app/components/` | Split into `sections/` directory |
| Price stored as string | `lib/data.ts` | Refactor to `number` type in UGX |
| Duplicate product image | `lib/data.ts` | Dark Roast needs different image |
| `SectionLabel` defined twice | Two files | Mobile component should be shared |
| `CartSheet` has business logic | `m/shop/CartSheet.tsx` | Extract WhatsApp message builder to `lib/orders.ts` |

### Architecture (Fix Before Phase 2)

| Issue | Impact |
|-------|--------|
| No server-side anything | Cart is client-only; orders never persisted |
| No authentication | Admin, B2B, and driver views all require auth |
| No database | Product data hardcoded in `data.ts`; cannot update prices without a deploy |
| No API routes | Payment webhooks, order creation, inventory updates need server endpoints |

**Recommended stack for Phase 2**:
- Database: Supabase (Postgres, Row Level Security, Auth) — free tier sufficient to start
- API: Next.js Route Handlers (already in App Router)
- Auth: Supabase Auth (email/password for admin, phone OTP for customers)
- File storage: Supabase Storage (farm photos, invoices)
- Background jobs: Vercel Cron (for harvest calendar updates, low-stock alerts)

---

## 12. Localization Requirements

### Language

| Language | Role | Priority |
|----------|------|----------|
| English | Primary — official language, business | Ship with |
| Luganda | Secondary — trade language across Kampala and Mubende | Phase 2 |

Luganda is the de facto trade language used across central Uganda including Mubende District, spoken natively by ~18% of the population and understood by a much larger percentage in Kampala commerce. WhatsApp order confirmations and notifications in Luganda would differentiate the platform and build rapport with local buyers.

**Key Luganda terms for product UI**:
- Matooke → already universal in Uganda English
- Ente → cattle/cow
- Ssente → money
- Kujula → to order/buy
- Webale nyo → thank you very much (use in confirmation messages)

### Currency & Numbers

| Format | Standard | Example |
|--------|----------|---------|
| Currency | UGX prefix, comma thousands separator | UGX 1,500,000 |
| No decimal | Smallest useful unit is 100 UGX | UGX 45,000 not UGX 45,000.00 |
| Large numbers | Write out, no abbreviations | UGX 1,500,000 not UGX 1.5M |
| Never display USD | Use UGX exclusively for consumers | Exception: export/B2B coffee pricing |

### Date & Time

- Format: DD/MM/YYYY (British-influence standard in Uganda)
- Time: 12-hour AM/PM
- Seasons: Reference harvest seasons by rain name ("long rains harvest, April–June") not calendar quarters

### Cultural UX Considerations

| Consideration | Implementation |
|---------------|---------------|
| WhatsApp-first communication | Every order confirmation: "Share on WhatsApp" primary CTA |
| Cash on delivery | Always offer alongside mobile money — reduces first-order friction |
| Photo-heavy product pages | Real farm photography, not Unsplash stock — show the actual product |
| Community social proof | Testimonials from named businesses with logos (Serena Hotel, etc.) |
| Offline capability | Draft orders must save locally; sync on reconnect |
| Low-data mode | Image compression, lazy loading, skeleton screens |
| Trust signals above the fold | MoMo logos, physical address, farm photos — before any product listing |
| Religious/cultural calendar | Beef demand peaks: Christmas, Easter, Eid al-Adha |

---

## Summary — Priority Matrix

| Feature | Revenue Impact | Effort | Phase |
|---------|--------------|--------|-------|
| Mobile Money checkout (Pesapal) | 🔴 Critical | Medium | 1 |
| Product variants (weight/cut) | 🔴 Critical | Low | 1 |
| Correct pricing in data.ts | 🔴 Critical | Trivial | Now |
| Desktop nav on /m/ routes | 🟡 High | Low | Now |
| B2B wholesale pricing tiers | 🔴 Critical | Medium | 2 |
| URA-compliant invoice PDF | 🔴 Critical for B2B | Medium | 2 |
| Product traceability page | 🟡 High | Medium | 3 |
| Farm transparency / live prices | 🟡 High | Medium | 3 |
| Inventory management | 🟡 High | High | 4 |
| Driver delivery app | 🟡 High | Medium | 4 |
| Luganda localisation | 🟢 Medium | Medium | 2 |
| Harvest calendar | 🟢 Medium | Low | 4 |
| USSD fallback ordering | 🟢 Medium | High | Post-Phase 4 |

---

*Last updated: May 2026. All pricing data from Q1 2025 sources. Mobile money fees subject to change per MNO tariff updates. Consult UCDA for current coffee floor prices before updating product pricing.*
