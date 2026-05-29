# IZZ Tech Inc. — Website Design Document
**Version:** 1.0  
**Date:** May 29, 2026  
**Handoff To:** AI IDE (Cursor, Windsurf, etc.)  
**Stack:** Next.js 14 + Tailwind CSS + Framer Motion  
**Hosting:** Vercel  
**Domain:** izztech.io  

---

## Project Overview

Build a premium agency website for IZZ Tech Inc., an AI automation and lead generation agency specializing in sports brands, NIL athletes, and performance-focused businesses. The site must communicate technical authority, modern aesthetics, and convert visitors into booked calls.

---

## Brand Identity

| Element | Value |
|---|---|
| **Company Name** | IZZ Tech Inc. |
| **Founder** | Ibraham (Abe) Zbib |
| **Tagline** | *AI-Powered Systems for High-Performance Brands* |
| **Niche** | Sports brands, NIL athletes, performance businesses |
| **Contact Email** | ibraham@izztech.io |
| **Domain** | izztech.io |

### Color Palette
```css
:root {
  --background: #0A0A0F;        /* Near black — primary background */
  --surface: #111118;           /* Card/section background */
  --surface-elevated: #1A1A26;  /* Elevated elements */
  --accent-primary: #6C63FF;    /* Electric violet — primary accent */
  --accent-secondary: #00D4FF;  /* Cyan — secondary accent */
  --accent-glow: rgba(108, 99, 255, 0.15); /* Glow effect */
  --text-primary: #F0F0F5;      /* Primary text */
  --text-secondary: #8888AA;    /* Secondary/muted text */
  --text-accent: #6C63FF;       /* Accent text */
  --border: rgba(255,255,255,0.08); /* Subtle borders */
  --border-accent: rgba(108, 99, 255, 0.3); /* Accent borders */
}
```

### Typography
```css
/* Display font — headings */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');

/* Body font — paragraphs and UI */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

/* Mono font — code/technical elements */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

--font-display: 'Syne', sans-serif;
--font-body: 'DM Sans', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Aesthetic Direction
Dark, technical, premium. Think: Bloomberg Terminal meets modern SaaS. Clean grid layouts with precise typography. Subtle animated gradients and glow effects. No stock photos — icons, data visualizations, and abstract geometric elements only. The site should feel like it was built by someone who deeply understands both tech and performance.

---

## Site Architecture

```
/                   → Home (landing page)
/services           → Services detail page
/about              → About Abe + IZZ Tech story
/contact            → Contact / Book a call
```

Single page scroll is acceptable for v1. All sections on one page with anchor links.

---

## Page Sections (In Order)

### 1. Navigation
- Fixed top navbar, blur backdrop on scroll
- Logo: "IZZ" in accent color + "TECH" in white, monospace font
- Links: Services, About, Contact
- CTA button: "Book a Call" → mailto:ibraham@izztech.io
- Mobile: hamburger menu with full-screen overlay

```
[IZZ TECH]    Services   About   Contact   [Book a Call →]
```

---

### 2. Hero Section
**Layout:** Full viewport height. Left-aligned text. Right side: animated abstract graphic (geometric grid or data flow visualization using CSS/SVG — no images).

**Headline (H1):**
```
AI-Powered Systems
for High-Performance
Brands.
```
Display font, 72-80px, bold. "High-Performance" in gradient text (violet to cyan).

**Subheadline:**
```
We build automated lead generation, AI scoring systems, 
and intelligent workflows — so your business runs smarter 
while you focus on winning.
```
Body font, 18px, secondary text color.

**CTAs:**
- Primary: `Get Started →` (filled button, accent color)
- Secondary: `See Our Work ↓` (ghost button)

**Animated Element (right side):**
SVG or CSS animated grid showing data nodes connecting — represents AI automation flow. Use CSS keyframe animations. Subtle pulse effects on nodes.

**Background:**
Subtle gradient mesh in bottom-left. Grain texture overlay at 3% opacity.

---

### 3. Stats Bar
Thin horizontal strip between hero and services. Dark surface background.

```
[ 2  Active Clients ]  [ $3,000+  Revenue Generated ]  [ 100%  Client Retention ]  [ 48hr  Avg Delivery ]
```

Each stat: large number in accent color, label in secondary text. Animated count-up on scroll into view.

---

### 4. Services Section
**Headline:** `What We Build`
**Subheadline:** `End-to-end AI systems tailored for sports and performance brands.`

**Service Cards (3 cards in a grid):**

**Card 1 — AI Lead Generation**
- Icon: target/funnel SVG
- Title: AI-Powered Lead Generation
- Description: Automated social monitoring across TikTok, Instagram, and Twitter/X with AI lead scoring, NIL athlete database integration, and daily email digests.
- Tag: `Most Popular`

**Card 2 — Automation Infrastructure**
- Icon: workflow/nodes SVG
- Title: n8n Automation Infrastructure
- Description: Custom workflow automation that connects your tools, eliminates manual tasks, and keeps your business running 24/7 without you.

**Card 3 — Digital Presence**
- Icon: card/browser SVG
- Title: Digital Business Card & One-Pagers
- Description: Clean, fast, mobile-first digital business cards and one-page sites that make your brand impossible to forget.

**Card Styling:**
- Dark surface background with subtle border
- Hover: border glows with accent color, slight upward translate
- Icon in accent color with glow background

---

### 5. Process Section
**Headline:** `How It Works`
**Layout:** Horizontal step flow on desktop, vertical on mobile

```
[ 01 Discovery ] → [ 02 Build ] → [ 03 Deliver ] → [ 04 Optimize ]
```

Each step has a number (large, faded accent color), title, and 1-2 sentence description.

- **01 Discovery:** We learn your business, goals, and current workflow gaps.
- **02 Build:** We design and build your custom AI system from scratch.
- **03 Deliver:** Full handoff with documentation and onboarding support.
- **04 Optimize:** Ongoing maintenance and updates via monthly retainer.

---

### 6. About Section
**Headline:** `Built by a Builder`
**Layout:** Two columns. Left: text. Right: abstract geometric element (no photo).

**Body text:**
```
IZZ Tech was founded by Ibraham Zbib — a technologist and 
entrepreneur obsessed with building systems that create leverage.

We work with sports brands, NIL athletes, and performance-driven 
businesses who need intelligent automation, not generic software.

Every system we build is custom, documented, and designed to scale.
```

**CTA:** `Work With Us →`

---

### 7. CTA Section
**Full-width dark section with gradient border**

**Headline:** `Ready to Build Something?`
**Subheadline:** `Let's talk about what AI automation can do for your business.`
**Button:** `Book a Call → ibraham@izztech.io`

Background: subtle animated gradient glow effect behind the section.

---

### 8. Footer
```
IZZ TECH INC.                    Services   About   Contact
ibraham@izztech.io               
Palm City, FL                    © 2026 IZZ Tech Inc. All rights reserved.
```

Minimal. Dark. No social links until accounts are set up.

---

## Technical Requirements

### Performance
- Lighthouse score target: 90+
- No heavy images — SVG and CSS only for graphics
- Lazy load below-fold content
- Font preloading for display font

### Animations (Framer Motion)
- Hero text: staggered fade-up on load (0.1s delay between lines)
- Stats: count-up animation on scroll into view
- Service cards: fade-up stagger on scroll
- Process steps: sequential reveal on scroll
- All hover states: 200ms ease transitions
- Navbar: fade in on scroll with blur backdrop

### Responsive Breakpoints
```
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: > 1024px
```

### Mobile Considerations
- Hero headline drops to 40px on mobile
- Stats bar becomes 2x2 grid on mobile
- Service cards stack to single column
- Process steps go vertical
- Navigation becomes hamburger menu

### File Structure
```
/app
  layout.tsx          → Root layout, fonts, metadata
  page.tsx            → Home page (all sections)
  globals.css         → CSS variables, base styles
/components
  Navbar.tsx
  Hero.tsx
  Stats.tsx
  Services.tsx
  Process.tsx
  About.tsx
  CTA.tsx
  Footer.tsx
/public
  favicon.ico
```

### Metadata (SEO)
```typescript
export const metadata = {
  title: 'IZZ Tech Inc. | AI Automation for High-Performance Brands',
  description: 'IZZ Tech builds AI-powered lead generation systems, automation infrastructure, and digital products for sports brands and NIL athletes.',
  keywords: ['AI automation', 'lead generation', 'NIL athletes', 'sports tech', 'n8n automation'],
  openGraph: {
    title: 'IZZ Tech Inc.',
    description: 'AI-Powered Systems for High-Performance Brands',
    url: 'https://izztech.io',
  }
}
```

---

## Vercel Deployment

### Environment Variables
None required for v1.

### Deploy Steps
```bash
# 1. Create Next.js app
npx create-next-app@latest izztech-website --typescript --tailwind --app

# 2. Install dependencies
npm install framer-motion

# 3. Push to GitHub
git init && git add . && git commit -m "initial commit"
gh repo create izztech-website --public --push

# 4. Import to Vercel
# Go to vercel.com → New Project → Import from GitHub

# 5. Add custom domain in Vercel
# Project Settings → Domains → Add izztech.io
# Vercel will provide DNS records — add to Spaceship Advanced DNS
```

### DNS Records to Add in Spaceship (after Vercel setup)
Vercel will provide these after you add the domain — typically:
```
Type: A      Host: @    Value: 76.76.21.21
Type: CNAME  Host: www  Value: cname.vercel-dns.com
```

---

## Content To Update Later

- [ ] Add client testimonial from Markus after project delivery
- [ ] Add case study: Mental Endurance Academy lead gen results
- [ ] Add social links once business accounts created
- [ ] Add "Book a Call" Calendly link once set up
- [ ] Update stats as business grows

---

## What NOT to Build in V1

- Blog
- Client portal
- Payment integration
- Complex animations that hurt performance
- Stock photography
- Anything that takes more than a weekend

**Keep it clean. Keep it fast. Ship it.**

---

*IZZ Tech Inc. | ibraham@izztech.io | izztech.io*
