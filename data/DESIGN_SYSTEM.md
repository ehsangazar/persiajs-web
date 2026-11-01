# PersiaJS Design System

## Based on Lion Logo Brand Identity

---

## 🎨 Color Palette

### Primary Colors (From Logo)

```css
--lion-orange: #f59e0b; /* Main brand color - Lion's mane */
--lion-gold: #fbbf24; /* Golden accent - Lion's face */
--lion-rust: #ea580c; /* Deep orange - Lion's features */
--lion-red: #dc2626; /* Accent red - Logo highlights */
--lion-amber: #fcd34d; /* Light amber - Highlights */
```

### Neutral Colors (White Theme)

```css
--white: #ffffff; /* Primary background */
--gray-50: #f9fafb; /* Secondary background */
--gray-100: #f3f4f6; /* Tertiary background */
--gray-200: #e5e7eb; /* Borders */
--gray-300: #d1d5db; /* Dividers */
--gray-400: #9ca3af; /* Disabled */
--gray-500: #6b7280; /* Secondary text */
--gray-600: #4b5563; /* Body text */
--gray-700: #374151; /* Headings */
--gray-800: #1f2937; /* Dark headings */
--gray-900: #111827; /* Primary text */
```

### Semantic Colors

```css
--success: #10b981; /* Green */
--warning: #f59e0b; /* Orange (brand) */
--error: #ef4444; /* Red */
--info: #3b82f6; /* Blue */
```

---

## 🎭 Gradients

### Primary Gradients

```css
--gradient-lion: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
--gradient-warm: linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #dc2626 100%);
--gradient-sunset: linear-gradient(
  135deg,
  #fbbf24 0%,
  #f59e0b 50%,
  #ea580c 100%
);
--gradient-overlay: linear-gradient(
  135deg,
  rgba(245, 158, 11, 0.95) 0%,
  rgba(220, 38, 38, 0.95) 100%
);
```

### Subtle Gradients (for backgrounds)

```css
--gradient-light: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
--gradient-soft: linear-gradient(to bottom, #ffffff 0%, #fef3c7 100%);
```

---

## 📐 Typography

### Font Families

```css
--font-primary: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-heading: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Font Sizes

```css
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 3.75rem; /* 60px */
--text-7xl: 4.5rem; /* 72px */
```

### Font Weights

```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

---

## 🎯 Spacing Scale

### Base Spacing Scale

```css
--space-1: 0.25rem; /* 4px - Tiny gaps, icon padding */
--space-2: 0.5rem; /* 8px - Small gaps, icon spacing */
--space-3: 0.75rem; /* 12px - Tight spacing */
--space-4: 1rem; /* 16px - Base spacing unit */
--space-5: 1.25rem; /* 20px - Comfortable spacing */
--space-6: 1.5rem; /* 24px - Standard card padding */
--space-8: 2rem; /* 32px - Section padding, card gaps */
--space-10: 2.5rem; /* 40px - Larger gaps */
--space-12: 3rem; /* 48px - Section spacing */
--space-16: 4rem; /* 64px - Large section spacing */
--space-20: 5rem; /* 80px - Extra large spacing */
--space-24: 6rem; /* 96px - Maximum spacing */
```

### Component-Specific Spacing

#### Button Padding

```css
/* Small buttons */
padding: 10px 16px; /* py-2.5 px-4 */

/* Medium buttons (default) */
padding: 12px 24px; /* py-3 px-6 */

/* Large buttons */
padding: 14px 32px; /* py-3.5 px-8 */
```

#### Card Padding

```css
/* Small cards */
padding: 1rem; /* p-4 */

/* Medium cards (default) */
padding: 1.5rem; /* p-6 */

/* Large cards */
padding: 2rem; /* p-8 */
```

#### Section Padding

```css
/* Mobile section padding */
padding-top: 5rem; /* py-20 */
padding-bottom: 5rem;

/* Desktop section padding */
padding-top: 8rem; /* md:py-32 */
padding-bottom: 8rem;
```

#### Gap Spacing

```css
/* Grid gaps - Mobile */
gap: 1rem; /* gap-4 */

/* Grid gaps - Desktop */
gap: 1.5rem; /* md:gap-6 */

/* Button icon gaps */
gap: 10px; /* gap-2.5 (buttons) */
gap: 12px; /* gap-3 (large buttons) */
```

#### Touch Target Minimums

```css
/* Interactive elements */
min-height: 44px; /* WCAG AA compliant */
min-width: 44px;
padding: 12px 24px; /* Ensures 44px height */
```

---

## 🔲 Border Radius

```css
--radius-sm: 0.375rem; /* 6px */
--radius-md: 0.5rem; /* 8px */
--radius-lg: 0.75rem; /* 12px */
--radius-xl: 1rem; /* 16px */
--radius-2xl: 1.5rem; /* 24px */
--radius-full: 9999px; /* Pill shape */
```

---

## 🌟 Shadows

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-lion: 0 20px 40px -10px rgba(245, 158, 11, 0.3);
```

---

## 🎬 Animation & Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

---

## 🦁 Logo Usage

### Logo Colors

- **Primary**: Orange (#F59E0B)
- **On White Background**: Full color logo
- **On Dark Background**: White/light version
- **Minimum Size**: 120px width
- **Clear Space**: Minimum 20px around logo

### Logo Variants

1. **Full Color**: Use on white/light backgrounds
2. **Monochrome Orange**: Use when single color needed
3. **White**: Use on dark backgrounds or photos
4. **Black**: Use for print when color not available

---

## 📱 Component Specifications

### Buttons

#### Button Sizes

```css
/* Small Button */
padding: 10px 16px; /* px-4 py-2.5 */
min-height: 40px;
font-size: 0.875rem; /* text-sm */
gap: 8px; /* gap-2 */

/* Medium Button (Default) */
padding: 12px 24px; /* px-6 py-3 */
min-height: 44px; /* Accessibility minimum */
font-size: 1rem; /* text-base */
gap: 10px; /* gap-2.5 */

/* Large Button */
padding: 14px 32px; /* px-8 py-3.5 */
min-height: 48px;
font-size: 1.125rem; /* text-lg */
gap: 12px; /* gap-3 */
```

#### Primary Button

```css
background: var(--gradient-lion);
color: white;
padding: 12px 24px; /* px-6 py-3 */
min-height: 44px;
border-radius: var(--radius-lg);
font-weight: var(--font-semibold);
box-shadow: var(--shadow-md);
transition: var(--transition-base);
gap: 10px; /* Space between icon and text */
```

**Hover State:**

- Shadow: `var(--shadow-lg)` with orange tint
- Transform: `translateY(-2px)` (subtle lift)
- Background: Darker gradient overlay

**Active State:**

- Transform: `translateY(0)` (reset)
- Shadow: `var(--shadow-md)`

#### Secondary Button

```css
background: white;
color: var(--lion-orange);
border: 2px solid var(--lion-orange);
padding: 12px 24px; /* px-6 py-3 */
min-height: 44px;
border-radius: var(--radius-lg);
font-weight: var(--font-semibold);
box-shadow: var(--shadow-sm);
gap: 10px;
```

**Hover State:**

- Background: Gradient from orange-50 to red-50
- Shadow: `var(--shadow-md)` with orange tint
- Transform: `translateY(-2px)`

#### Ghost Button

```css
background: transparent;
color: var(--lion-orange);
padding: 12px 24px; /* px-6 py-3 */
min-height: 44px;
border-radius: var(--radius-lg);
font-weight: var(--font-medium);
gap: 10px;
```

**Hover State:**

- Background: `rgba(245, 158, 11, 0.08)` (orange-50/80)
- Transform: `translateY(-2px)`

#### Outline Button

```css
background: transparent;
color: var(--gray-700);
border: 2px solid var(--gray-300);
padding: 12px 24px; /* px-6 py-3 */
min-height: 44px;
border-radius: var(--radius-lg);
font-weight: var(--font-semibold);
box-shadow: var(--shadow-sm);
gap: 10px;
```

**Hover State:**

- Border: `var(--lion-orange)`
- Color: `var(--lion-orange)`
- Background: `rgba(245, 158, 11, 0.05)` (orange-50/50)
- Transform: `translateY(-2px)`

#### Button Accessibility

- **Minimum Touch Target**: 44px × 44px (WCAG AA compliant)
- **Focus Ring**: 2px solid orange with 2px offset
- **Disabled State**: 50% opacity, no hover effects
- **Icon Spacing**: 8-12px gap between icon and text

### Cards

```css
background: white;
border-radius: var(--radius-2xl);
box-shadow: var(--shadow-md);
padding: var(--space-6); /* p-6 (24px) - Mobile */
padding: var(--space-8); /* p-8 (32px) - Desktop */
border: 1px solid var(--gray-200);
transition: var(--transition-base);
gap: var(--space-4); /* gap-4 between card elements */
```

**Responsive Padding:**

- Mobile: `padding: 1.5rem` (24px)
- Desktop: `padding: 2rem` (32px)

**Hover State:**

- Shadow: `var(--shadow-xl)`
- Transform: `translateY(-4px)` or `translateY(-8px)`
- Border: `var(--orange-200)` or `var(--orange-500)`

### Hover States

- **Lift Effect**: `transform: translateY(-2px)` (subtle, professional)
- **Shadow Increase**: Use next shadow level (sm → md → lg)
- **Shadow Tint**: Add colored shadow (e.g., `shadow-orange-500/30`)
- **Color Transition**: Smooth color changes (300ms ease-out)
- **Border Color**: Transition from gray to orange
- **Background Overlay**: Subtle gradient overlay on primary buttons

### Active States

- **Transform Reset**: `translateY(0)` (immediate feedback)
- **Shadow Reduction**: Return to base shadow level
- **Color Darken**: Slightly darker background on click

---

## 🎨 Usage Guidelines

### Hero Section

- **Background**: White with lion gradient overlay or pattern
- **Typography**: Large, bold headings in gray-900
- **Accent**: Orange gradient for CTAs and highlights
- **Imagery**: Use lion logo prominently

### Content Sections

- **Background**: Alternate between white and gray-50
- **Cards**: White cards with subtle shadows
- **Borders**: Use gray-200 for subtle dividers
- **Icons**: Use lion-orange for primary actions

### Text Colors

- **Headings**: gray-900 or gray-800
- **Body**: gray-600 or gray-700
- **Muted**: gray-500
- **Links**: lion-orange with hover to lion-rust

### Accent Usage

- Use orange gradient sparingly for emphasis
- Apply to CTAs, active states, and highlights
- Use for hover states on interactive elements
- Feature in hero section prominently

---

## ♿ Accessibility

### Color Contrast Ratios

- **Primary Text**: 7:1 minimum (gray-900 on white)
- **Body Text**: 4.5:1 minimum (gray-600 on white)
- **Large Text**: 3:1 minimum
- **Interactive Elements**: 3:1 minimum

### Focus States

```css
outline: 2px solid var(--lion-orange);
outline-offset: 2px;
border-radius: 4px;
```

**Focus Ring Specifications:**

- Width: `2px` solid
- Color: `var(--lion-orange)` (#F59E0B)
- Offset: `2px` from element
- Border Radius: `4px` for rounded elements
- Background Offset: `var(--white)` for better visibility

---

## 📐 Grid & Layout

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

### Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

## 🎯 Brand Personality

### Voice & Tone

- **Professional** yet approachable
- **Confident** like a lion
- **Warm** and welcoming
- **Empowering** and inspiring

### Visual Style

- **Clean** and modern
- **Bold** typography
- **Warm** color palette
- **Friendly** and inviting

---

## 🚀 Implementation Checklist

- [x] Extract colors from logo
- [x] Define color palette
- [x] Create typography scale
- [x] Define spacing system
- [x] Establish shadow system
- [x] Create component styles
- [x] Document usage guidelines
- [ ] Update website CSS
- [ ] Redesign hero section
- [ ] Apply to all components

---

**Version**: 2.0  
**Last Updated**: November 2025  
**Based On**: PersiaJS Lion Logo
