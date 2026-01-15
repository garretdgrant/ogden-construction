# Homepage UI/UX Enhancement Guide

**Project:** Ogden Construction Website Redesign
**Design System:** Refined Industrial Craft Aesthetic
**Date:** 2026-01-15
**Purpose:** Comprehensive guide for implementing consistent UI/UX enhancements across all pages

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Typography System](#typography-system)
3. [Color Palette](#color-palette)
4. [Texture & Background Patterns](#texture--background-patterns)
5. [Animation System](#animation-system)
6. [Component Patterns](#component-patterns)
7. [Decorative Elements](#decorative-elements)
8. [Spacing & Layout](#spacing--layout)
9. [Interactive States](#interactive-states)
10. [Implementation Checklist](#implementation-checklist)

---

## Design Philosophy

### Core Aesthetic: Refined Industrial Craft

The design combines the authentic, tactile feel of construction work with premium typography and elegant spatial composition. Think high-end architectural magazine meets mountain craftsmanship.

**Key Principles:**

- **Intentional Subtlety:** Effects are present but not overwhelming
- **Contextual Theming:** Wood/construction motifs without being literal
- **Premium Feel:** High-end magazine aesthetic while maintaining approachability
- **Visual Hierarchy:** Clear progression through staggered animations and spacing
- **Cohesive Color Story:** Warm grays, stone tones, and amber accents throughout

**What Makes This Distinctive:**

- Playfair Display serif for headlines (not overused fonts like Space Grotesk or Inter)
- Wood grain and deck board textures for depth
- Diagonal section dividers for visual flow
- Carpenter's tools as subtle decorative motifs
- Staggered reveal animations for orchestrated page load

---

## Typography System

### Font Stack

**File:** `src/app/layout.tsx`

```typescript
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
```

### Global Typography Rules

**File:** `src/app/globals.css` (lines 98-107)

```css
body {
  @apply bg-background text-foreground;
  font-family: var(--font-inter), sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-playfair), serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}
```

### Typography Scale

**Headlines (H1):**

- Font: Playfair Display, 700 weight
- Size: `text-5xl md:text-7xl lg:text-8xl`
- Leading: `leading-[1.1]`
- Tracking: `-0.02em` (via global CSS)
- Color: `text-white` (Hero), `text-primary` (sections)

**Section Headers (H2):**

- Font: Playfair Display, 700 weight
- Size: `text-5xl md:text-6xl`
- Tracking: `tracking-tight`
- Color: `text-primary`
- Margin: `mb-6`

**Subheadings (H3):**

- Font: Playfair Display, 700 weight
- Size: `text-xl` to `text-2xl`
- Color: `text-primary` with `group-hover:text-accent` transition

**Body Text:**

- Font: Inter, regular weight
- Size: `text-base` (16px) or `text-lg` (18px)
- Leading: `leading-relaxed`
- Color: `text-gray-700` or `text-gray-600`

**Accents/Labels:**

- Font: Inter, 500-600 weight
- Size: `text-sm` or `text-base`
- Transform: Sometimes with font-playfair for special callouts

---

## Color Palette

### Core Colors (Tailwind Config)

**File:** `tailwind.config.ts` (lines 27-38)

```typescript
colors: {
  primary: {
    DEFAULT: "#4b5563", // Warm gray
    foreground: "#fafaf9",
  },
  secondary: {
    DEFAULT: "#78716c", // Warm stone
    foreground: "#fafaf9",
  },
  accent: {
    DEFAULT: "#854d0e", // Warm amber
    foreground: "#fafaf9",
  },
}
```

### Usage Guidelines

**Primary (`#4b5563` - Warm Gray):**

- Main headlines and body text
- Primary buttons
- Border colors at low opacity
- Use for: Headers, primary CTAs, main content

**Secondary (`#78716c` - Warm Stone):**

- Secondary text elements
- Backgrounds (stone-50, stone-100)
- Supporting UI elements
- Use for: Subtext, secondary backgrounds

**Accent (`#854d0e` - Warm Amber):**

- Interactive elements (hover states, links)
- Decorative accents
- Progress indicators
- Call-to-action highlights
- Use for: Links, hover effects, decorative bars, active states

### Opacity Levels for Effects

- `accent/5` - Extremely subtle background wash
- `accent/8` to `accent/10` - Subtle decorative elements
- `accent/20` to `accent/30` - Border accents, subtle backgrounds
- `accent/60` to `accent/80` - Gradients, active elements
- `primary/5` - Background blobs
- `white/15` to `white/20` - Glass morphism effects on dark backgrounds

---

## Texture & Background Patterns

### Available Texture Classes

**File:** `src/app/globals.css` (lines 109-186)

#### 1. Wood Grain Texture (`.texture-wood`)

**Usage:** Services, WhyChooseUs, ServiceArea sections
**Effect:** Subtle vertical wood grain with horizontal striations

```css
.texture-wood {
  position: relative;
}

.texture-wood::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    /* Vertical wood grain lines */
    repeating-linear-gradient(
      90deg,
      rgba(139, 69, 19, 0.015) 0px,
      transparent 1px,
      transparent 4px,
      rgba(139, 69, 19, 0.02) 5px,
      transparent 6px,
      transparent 12px
    ),
    /* Horizontal subtle lines */
      repeating-linear-gradient(
        0deg,
        rgba(120, 113, 108, 0.01) 0px,
        transparent 2px,
        transparent 8px
      ),
    /* Random grain variation */
      repeating-linear-gradient(
        87deg,
        rgba(101, 67, 33, 0.008) 0px,
        transparent 3px,
        transparent 15px,
        rgba(101, 67, 33, 0.012) 16px,
        transparent 18px,
        transparent 30px
      );
  pointer-events: none;
  opacity: 0.6;
}
```

**When to Use:**

- Light background sections (bg-stone-50)
- Areas emphasizing craftsmanship
- Sections with wood/construction context

#### 2. Deck Board Pattern (`.texture-deck-boards`)

**Usage:** Projects, HomeFaq sections
**Effect:** Horizontal deck boards with gaps and vertical grain

```css
.texture-deck-boards {
  position: relative;
  background-color: #fafaf9;
}

.texture-deck-boards::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    /* Deck board separations */
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 80px,
      rgba(120, 113, 108, 0.08) 80px,
      rgba(120, 113, 108, 0.08) 84px,
      transparent 84px,
      transparent 164px
    ),
    /* Wood grain on boards */
      repeating-linear-gradient(
        90deg,
        rgba(139, 69, 19, 0.02) 0px,
        transparent 1px,
        transparent 3px,
        rgba(139, 69, 19, 0.015) 4px,
        transparent 5px,
        transparent 10px
      );
  pointer-events: none;
  opacity: 0.5;
}
```

**When to Use:**

- White background sections
- Project/portfolio areas
- Sections showcasing deck work

#### 3. Diagonal Wood Planks (`.texture-wood-planks`)

**Usage:** Process section
**Effect:** 45-degree diagonal planks with grain

```css
.texture-wood-planks {
  position: relative;
}

.texture-wood-planks::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent 0px,
      transparent 120px,
      rgba(133, 77, 14, 0.03) 120px,
      rgba(133, 77, 14, 0.03) 122px,
      transparent 122px,
      transparent 242px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(139, 69, 19, 0.01) 0px,
      transparent 2px,
      transparent 8px
    );
  pointer-events: none;
  opacity: 0.4;
}
```

**When to Use:**

- Process/timeline sections
- Areas with diagonal flow
- Sections emphasizing step-by-step progression

---

## Animation System

### Core Animations

**File:** `tailwind.config.ts` (lines 40-83)

```typescript
keyframes: {
  "fade-up": {
    "0%": { opacity: "0", transform: "translateY(10px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "fade-in": {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  "slide-in-left": {
    "0%": { opacity: "0", transform: "translateX(-30px)" },
    "100%": { opacity: "1", transform: "translateX(0)" },
  },
  "slide-in-right": {
    "0%": { opacity: "0", transform: "translateX(30px)" },
    "100%": { opacity: "1", transform: "translateX(0)" },
  },
  "scale-in": {
    "0%": { opacity: "0", transform: "scale(0.95)" },
    "100%": { opacity: "1", transform: "scale(1)" },
  },
  "diagonal-slide": {
    "0%": { opacity: "0", transform: "translate(-20px, 20px)" },
    "100%": { opacity: "1", transform: "translate(0, 0)" },
  },
},
animation: {
  "fade-up": "fade-up 0.6s ease-out forwards",
  "fade-in": "fade-in 0.5s ease-out forwards",
  "slide-in-left": "slide-in-left 0.6s ease-out forwards",
  "slide-in-right": "slide-in-right 0.6s ease-out forwards",
  "scale-in": "scale-in 0.5s ease-out forwards",
  "diagonal-slide": "diagonal-slide 0.7s ease-out forwards",
}
```

### Stagger Delays

**File:** `src/app/globals.css` (lines 186-191)

```css
.stagger-1 {
  animation-delay: 0.1s;
}
.stagger-2 {
  animation-delay: 0.2s;
}
.stagger-3 {
  animation-delay: 0.3s;
}
.stagger-4 {
  animation-delay: 0.4s;
}
.stagger-5 {
  animation-delay: 0.5s;
}
.stagger-6 {
  animation-delay: 0.6s;
}
```

### Animation Usage Patterns

#### Hero Section Stagger

```tsx
<h1 className="opacity-0 animate-fade-up">...</h1>
<p className="opacity-0 animate-fade-up stagger-1">...</p>
<div className="opacity-0 animate-fade-up stagger-2">...</div>
<nav className="opacity-0 animate-fade-up stagger-3">...</nav>
<div className="opacity-0 animate-fade-up stagger-4">...</div>
```

#### Service Cards Stagger

```tsx
{
  services.map((service, index) => (
    <div className={`opacity-0 animate-scale-in stagger-${index + 1}`}>
      {/* Card content */}
    </div>
  ));
}
```

#### Project Cards

```tsx
{
  projects.map((project, index) => (
    <div className={`opacity-0 animate-fade-up stagger-${index + 1}`}>
      {/* Project content */}
    </div>
  ));
}
```

#### FAQ Items

```tsx
{
  items.map((item, index) => (
    <div
      className={`opacity-0 animate-fade-up stagger-${Math.min(index + 1, 6)}`}
    >
      {/* Use Math.min to cap at stagger-6 */}
    </div>
  ));
}
```

### Hover Transitions

**Standard Duration:** `transition-all duration-300` or `duration-500`
**Complex Transitions:** `transition-all duration-500` for cards
**Micro-interactions:** `transition-colors duration-200`

---

## Component Patterns

### Section Header Pattern

**Standard Implementation:**

```tsx
<div className="text-center mb-16 max-w-4xl mx-auto">
  <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
    Section Title
  </h2>
  <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
    Section description with{" "}
    <Link
      href="/path"
      className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
    >
      inline link
    </Link>{" "}
    text.
  </p>
</div>
```

**Elements:**

1. **H2 Heading:** Large, bold, Playfair font
2. **Accent Bar:** 24px wide, 4px tall, centered, amber color
3. **Description:** Inter font, medium size, gray color
4. **Inline Links:** Accent color with animated underline

### Card Pattern (Services/Projects)

```tsx
<Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white relative overflow-hidden">
  {/* Decorative accent line */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

  <CardHeader className="pb-4">
    {/* Icon with background glow */}
    <div className="mb-6 relative">
      <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500"></div>
      <Icon className="h-14 w-14 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <CardTitle className="text-2xl font-playfair tracking-tight group-hover:text-accent transition-colors duration-300">
      Card Title
    </CardTitle>
  </CardHeader>

  <CardContent>
    <p className="text-gray-600 leading-relaxed text-base">Description text</p>
    {/* Hover indicator */}
    <div className="mt-4 flex items-center text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span>Learn more</span>
      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300">
        {/* Arrow icon */}
      </svg>
    </div>
  </CardContent>
</Card>
```

**Key Features:**

- Top accent line that expands on hover
- Icon with blur glow effect
- Title color change on hover
- "Learn more" indicator appears on hover
- Lift effect (-translate-y-2) on hover

### CTA Button Pattern

**Primary CTA:**

```tsx
<Link
  href="/path"
  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] group"
>
  Button Text
  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
    {/* Arrow right icon */}
  </svg>
</Link>
```

**Secondary CTA:**

```tsx
<Link
  href="/path"
  className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-10 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
>
  Button Text
  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
    {/* Arrow icon */}
  </svg>
</Link>
```

**Features:**

- Arrow animates right on hover
- Subtle scale increase (1.02)
- Shadow enhancement
- Smooth color transitions

---

## Decorative Elements

### Wood Plank Accents

**Vertical Planks (Left/Right Edges):**

```tsx
<div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
<div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>
```

**Diagonal Planks:**

```tsx
<div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
<div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>
```

**Usage Guidelines:**

- Always use blur-sm for softness
- Gradient fade for natural appearance
- Slight rotation for organic feel
- Low opacity (accent/5 to accent/10)

### Carpenter's Square Motif

**Implementation (FAQ Section):**

```tsx
{/* Carpenter's square decorative accents */}
<div className="absolute top-40 right-10 opacity-5">
  <div className="w-32 h-2 bg-accent"></div>
  <div className="w-2 h-32 bg-accent"></div>
</div>
<div className="absolute bottom-40 left-10 opacity-5 rotate-180">
  <div className="w-24 h-1.5 bg-primary"></div>
  <div className="w-1.5 h-24 bg-primary"></div>
</div>
```

**Usage:**

- Very low opacity (opacity-5)
- L-shaped configuration
- Different sizes for variety
- Positioned in corners

### Decorative Background Blobs

**Soft Gradient Circles:**

```tsx
<div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
```

**Guidelines:**

- Use blur-3xl for maximum softness
- Low opacity (5% or less)
- Vary sizes for organic feel
- Position in opposite corners

### Diagonal Section Dividers

**File:** `src/app/globals.css` (lines 137-144)

```css
.diagonal-divider {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 4rem), 0 100%);
}

.diagonal-divider-reverse {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4rem));
}
```

**Usage:**

- Apply to section element
- Creates diagonal cut at bottom (divider) or top (divider-reverse)
- 4rem (64px) diagonal offset
- Use alternating for visual flow

---

## Spacing & Layout

### Section Padding

**Standard:** `py-24` (96px top/bottom)
**Containers:** `container mx-auto px-4`
**Content Max-Width:** `max-w-4xl mx-auto` or `max-w-5xl mx-auto`

### Grid Layouts

**Service Cards:**

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
  {/* Cards */}
</div>
```

**Project Cards:**

```tsx
<div className="grid md:grid-cols-3 gap-8 lg:gap-10">{/* Projects */}</div>
```

**Why Choose Cards:**

```tsx
<div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
  {/* Reason cards */}
</div>
```

### Spacing Scale

- **Section Spacing:** `mb-12` or `mb-16` between major elements
- **Card Gap:** `gap-8` or `gap-8 lg:gap-10`
- **Text Spacing:** `mb-6` for headers, `mb-8` for descriptions
- **CTA Margin:** `mt-16` or `mt-10` for bottom CTAs

---

## Interactive States

### Link Hover Effects

**Standard Link:**

```tsx
<Link
  href="/path"
  className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
>
  Link Text
</Link>
```

**Features:**

- Color darkens slightly on hover
- Underline thickens (30% to 60% opacity)
- 4px offset for readability
- 2px decoration thickness

### Card Hover Effects

**Lift + Shadow:**

```tsx
className = "hover:shadow-2xl transition-all duration-500 hover:-translate-y-2";
```

**Scale:**

```tsx
className = "hover:scale-[1.02] transition-all duration-300";
```

**Border Shift:**

```tsx
className =
  "border-2 border-stone-200 hover:border-accent/30 transition-all duration-500";
```

### Button Hover States

**Primary Button:**

- Background: `bg-primary hover:bg-primary/90`
- Shadow: `shadow-lg hover:shadow-xl`
- Scale: `hover:scale-[1.02]`

**Glassmorphism (Hero):**

```tsx
className =
  "bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300";
```

---

## Implementation Checklist

### For Each New Page/Section

#### 1. Typography Setup

- [ ] Import and configure Playfair Display + Inter fonts
- [ ] Apply global heading styles (Playfair)
- [ ] Use Inter for body text
- [ ] Implement proper font size scale

#### 2. Section Structure

- [ ] Add proper section padding (`py-24`)
- [ ] Include section header pattern (H2 + accent bar + description)
- [ ] Set max-width constraints (`max-w-4xl` or `max-w-5xl`)
- [ ] Apply appropriate background color

#### 3. Textures & Patterns

- [ ] Choose appropriate texture class:
  - `.texture-wood` for light backgrounds
  - `.texture-deck-boards` for white backgrounds
  - `.texture-wood-planks` for process/timeline areas
- [ ] Add `relative overflow-hidden` to section
- [ ] Position decorative elements (wood planks, blobs, etc.)

#### 4. Animations

- [ ] Add `opacity-0` initial state to animated elements
- [ ] Apply appropriate animation class:
  - `animate-fade-up` for vertical reveals
  - `animate-scale-in` for cards
  - `animate-diagonal-slide` for special effects
- [ ] Implement stagger delays for multiple items
- [ ] Use `Math.min(index + 1, 6)` for long lists

#### 5. Color Application

- [ ] Use `text-primary` for main headings
- [ ] Use `text-gray-700` or `text-gray-600` for body text
- [ ] Use `text-accent` for links and highlights
- [ ] Apply hover states with `hover:text-accent` or `hover:bg-primary/90`

#### 6. Interactive Elements

- [ ] Implement card hover effects (lift, shadow, border change)
- [ ] Add CTA buttons with arrow icons
- [ ] Include hover transitions on all interactive elements
- [ ] Add `group` class for coordinated hover effects

#### 7. Spacing & Layout

- [ ] Use consistent grid patterns
- [ ] Apply proper gap spacing (`gap-8` or `gap-8 lg:gap-10`)
- [ ] Set responsive column counts
- [ ] Include proper margins between sections

#### 8. Decorative Accents

- [ ] Add wood plank accents (vertical or diagonal)
- [ ] Include background blobs for depth
- [ ] Consider carpenter's square motifs for construction context
- [ ] Use diagonal dividers between sections

#### 9. Responsive Design

- [ ] Test all breakpoints (sm, md, lg, xl)
- [ ] Adjust font sizes for mobile (`text-5xl md:text-6xl`)
- [ ] Stack grids appropriately
- [ ] Ensure touch targets are adequate

#### 10. Accessibility

- [ ] Maintain color contrast ratios
- [ ] Include focus states (`:focus-visible`)
- [ ] Add proper alt text for images
- [ ] Ensure keyboard navigation works

---

## Component Examples

### Hero Section Template

```tsx
<div className="relative min-h-[90vh] flex items-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/path/to/image.jpg"
      alt="Descriptive alt text"
      width={1920}
      height={1080}
      priority
      sizes="100vw"
      className="w-full h-[110vh] object-cover scale-105"
    />
  </div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40 z-0" />

  {/* Wood grain overlay */}
  <div className="absolute inset-0 z-0 opacity-30">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            rgba(139, 69, 19, 0.05) 0px,
            transparent 1px,
            transparent 3px,
            rgba(139, 69, 19, 0.08) 4px,
            transparent 5px,
            transparent 12px
          )
        `,
      }}
    ></div>
  </div>

  {/* Decorative elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl z-0" />
  <div className="absolute bottom-20 left-10 w-1 h-32 bg-accent/10 rotate-12 blur-sm z-0" />

  <div className="container relative z-10 mx-auto px-4 py-12">
    <div className="max-w-4xl">{/* Content */}</div>
  </div>
</div>
```

### Service Card Grid Template

```tsx
<section
  id="services"
  className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden"
>
  {/* Decorative wood planks */}
  <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
  <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section header */}
    <div className="text-center mb-16 max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
        Section Title
      </h2>
      <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        Description text
      </p>
    </div>

    {/* Card grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {items.map((item, index) => (
        <Link
          key={index}
          href="/path"
          className={`group block opacity-0 animate-scale-in stagger-${index + 1}`}
        >
          <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white relative overflow-hidden">
            {/* Card content */}
          </Card>
        </Link>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <Link
        href="/path"
        className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] group"
      >
        Button Text
        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
          {/* Arrow icon */}
        </svg>
      </Link>
    </div>
  </div>
</section>
```

---

## File Reference Guide

### Modified Files

1. **`src/app/layout.tsx`**

   - Changed fonts from Geist to Playfair Display + Inter
   - Updated font variable names

2. **`tailwind.config.ts`**

   - Added font families to theme
   - Extended keyframes with 6 new animations
   - Added animation utilities

3. **`src/app/globals.css`**

   - Added global heading font rules
   - Created 3 texture pattern classes
   - Added diagonal divider utilities
   - Added stagger delay classes
   - Enhanced focus states

4. **Component Files:**
   - `src/components/Hero.tsx` - Wood grain overlay, enhanced structure
   - `src/components/Services.tsx` - Wood texture, plank accents, card redesign
   - `src/components/Projects.tsx` - Deck board texture, image treatments
   - `src/components/WhyChooseUs.tsx` - Diagonal slide animation, accent bars
   - `src/components/Process.tsx` - Wood plank texture, timeline design
   - `src/components/ServiceArea.tsx` - Location badges, map-inspired design
   - `src/components/Reviews.tsx` - Quote marks, platform buttons
   - `src/components/HomeFaq.tsx` - Deck boards, carpenter's square motifs

---

## Design Tokens Summary

### Spacing

- Container padding: `px-4`
- Section vertical: `py-24`
- Header margin: `mb-16`
- Card gap: `gap-8` or `gap-8 lg:gap-10`
- CTA margin: `mt-16` or `mt-10`

### Borders

- Standard: `border-2`
- Accent bar: `h-1` (4px)
- Divider line: `h-px` or `h-0.5`

### Shadows

- Card rest: `shadow-lg`
- Card hover: `shadow-2xl`
- CTA: `shadow-lg hover:shadow-xl`

### Border Radius

- Buttons/CTAs: `rounded-lg`
- Cards: `rounded-xl` or `rounded-2xl`
- Badges: `rounded-full`

### Opacity Scales

- Decorative: `opacity-5` to `opacity-30`
- Backgrounds: `bg-accent/5` to `bg-accent/20`
- Overlays: `bg-black/50` to `bg-black/80`

### Blur Levels

- Soft blur: `blur-sm`
- Background elements: `blur-xl` or `blur-3xl`

---

## Best Practices

### DO:

✅ Use Playfair Display for all headings
✅ Apply textures to sections with appropriate context
✅ Stagger animations for lists and grids
✅ Include wood plank accents for construction context
✅ Use consistent spacing scale
✅ Apply hover effects to all interactive elements
✅ Maintain warm color palette (grays, stones, amber)
✅ Test responsive behavior at all breakpoints

### DON'T:

❌ Mix fonts arbitrarily (stick to Playfair + Inter)
❌ Over-apply textures (keep them subtle)
❌ Skip animation delays (causes simultaneous pop-in)
❌ Use generic purple gradients or blue links
❌ Forget hover states on interactive elements
❌ Apply too many decorative elements (less is more)
❌ Use overly bright or saturated colors
❌ Neglect mobile optimization

---

## Testing Checklist

Before marking implementation complete:

- [ ] All fonts load correctly (Playfair + Inter)
- [ ] Textures visible but subtle
- [ ] Animations trigger properly with stagger
- [ ] Hover states work on all interactive elements
- [ ] Colors match design system (no arbitrary values)
- [ ] Spacing is consistent
- [ ] Mobile responsive at all breakpoints
- [ ] Accessibility: focus states, contrast, alt text
- [ ] Performance: no layout shift, smooth animations
- [ ] Cross-browser compatibility

---

## Additional Resources

### Color Values Reference

```css
/* Primary */
--primary: #4b5563 /* Secondary */ --secondary: #78716c /* Accent */
  --accent: #854d0e /* Backgrounds */ --stone-50: #fafaf9 --stone-100: #f5f5f4
  --stone-200: #e7e5e4 /* Text */ --gray-600: #4b5563 --gray-700: #374151;
```

### Animation Timing

```css
/* Standard transitions */
transition-all duration-300  /* Fast micro-interactions */
transition-all duration-500  /* Card/component transitions */
transition-all duration-700  /* Image zoom effects */

/* Animation durations */
0.5s - fade-in, scale-in
0.6s - fade-up, slide-in
0.7s - diagonal-slide
```

---

## Summary

This design system creates a cohesive, professional, and memorable user experience for Ogden Construction. The **Refined Industrial Craft** aesthetic combines premium typography (Playfair Display), subtle wood textures, thoughtful animations, and a warm color palette to convey quality craftsmanship while maintaining modern web standards.

Key differentiators:

- Distinctive serif typography (not overused sans-serif)
- Context-appropriate textures (wood grain, deck boards)
- Orchestrated page load with staggered animations
- Construction-inspired decorative elements (carpenter's square, wood planks)
- Cohesive warm color story

When implementing across the site, maintain these patterns for consistency while adapting decorative elements to suit each page's specific context.
