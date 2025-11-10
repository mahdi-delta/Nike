# 🎨 Nike Project Animations

## Overview

This document describes all the animations added to enhance the user experience of the Nike landing page.

## 🎯 Animation Types

### 1. **Scroll Animations**

Animations that trigger when elements come into view during scrolling.

#### Custom Hook: `useScrollAnimation`

-    Location: `src/hooks/useScrollAnimation.js`
-    Uses Intersection Observer API
-    Automatically adds animation classes when elements are in viewport
-    Configurable threshold and root margin

### 2. **Entrance Animations**

#### Fade In

-    **Class**: `animate-fadeIn`
-    **Effect**: Elements fade in with slight upward movement
-    **Duration**: 0.8s
-    **Used in**: Hero section text, statistics

#### Slide In Left

-    **Class**: `slide-in-left` + `animated`
-    **Effect**: Elements slide in from the left
-    **Duration**: 0.8s
-    **Used in**: Hero text, SuperQuality text, SpecialOffer image

#### Slide In Right

-    **Class**: `slide-in-right` + `animated`
-    **Effect**: Elements slide in from the right
-    **Duration**: 0.8s
-    **Used in**: Hero image, SuperQuality image, SpecialOffer text

#### Scale In

-    **Class**: `scale-in` + `animated`
-    **Effect**: Elements scale up from 90% to 100%
-    **Duration**: 0.6s
-    **Used in**: Product cards, service cards, review cards, shoe cards

#### Slide In Up

-    **Class**: `animate-slideInUp`
-    **Effect**: Elements slide up from below
-    **Duration**: 0.8s
-    **Used in**: Navigation bar

### 3. **Hover Animations**

#### Button Component

-    **Scale up** on hover (105%)
-    **Color change** (red → black)
-    **Shadow enhancement**
-    **Icon translation** and rotation
-    **Shine effect** (gradient sweep)
-    **Active state** scale down (95%)

#### Popular Products Card

-    **Image scale** (110%) and slight rotation (2°)
-    **Shadow enhancement** (3xl)
-    **Text color** change to coral-red
-    **Price scale** (110%) with translation
-    **Star rating** pulse animation

#### Service Card

-    **Card lift** effect (scale 105%, translate -8px)
-    **Icon rotation** (12°) and scale (110%)
-    **Gradient background** on icon (coral-red → pink)
-    **Shadow enhancement** (2xl)
-    **Text color** transitions

#### Review Card

-    **Card scale** (105%)
-    **Avatar scale** (110%) with ring effect
-    **Avatar shadow** enhancement
-    **Star rotation** (12°) and scale
-    **Rating color** change to coral-red
-    **Name color** change to coral-red

#### Navigation Links

-    **Underline animation** (width 0 → 100%)
-    **Color change** to coral-red
-    **Underline color** changed to coral-red
-    **Logo scale** on hover (110%)
-    **Hamburger scale** on hover (110%)

#### Images

-    **Hero shoe**: Float animation (3s infinite)
-    **Hero shoe hover**: Scale 105%
-    **SuperQuality shoe**: Scale 110% + rotation 3°
-    **SpecialOffer image**: Scale 105% + rotation -2°

#### Subscribe Form

-    **Input focus**: Scale 105%
-    **Form border**: Changes to coral-red on hover
-    **Shadow enhancement**

### 4. **Continuous Animations**

#### Float

-    **Class**: `animate-float`
-    **Effect**: Smooth up and down movement
-    **Duration**: 3s infinite
-    **Used in**: Main hero shoe image

#### Pulse

-    **Class**: `animate-pulse`
-    **Effect**: Subtle opacity/scale pulse
-    **Used in**: Star rating icons

#### Bounce

-    **Class**: `animate-bounce`
-    **Effect**: Bouncing motion
-    **Duration**: 2s infinite
-    **Used in**: Available for accent elements

### 5. **Stagger Delays**

Elements animate in sequence with delays:

-    `delay-100`: 100ms
-    `delay-200`: 200ms
-    `delay-300`: 300ms
-    `delay-400`: 400ms
-    `delay-500`: 500ms
-    `delay-600`: 600ms

**Applied to**:

-    Statistics counters (Hero section)
-    Product cards (Popular Products)
-    Service cards (Services section)
-    Review cards (Customer Reviews)
-    Shoe selector cards (Hero section)
-    Navigation links

## 🎬 Section-by-Section Breakdown

### Hero Section

-    ✅ Text slides in from left
-    ✅ Image slides in from right
-    ✅ Statistics fade in with stagger
-    ✅ Shoe cards scale in with stagger
-    ✅ Main shoe floats continuously
-    ✅ Main shoe scales on hover

### Navigation

-    ✅ Entire nav slides down on load
-    ✅ Links fade in with stagger
-    ✅ Underline animation on hover
-    ✅ Logo scales on hover
-    ✅ Hamburger scales on hover/click

### Popular Products

-    ✅ Section title fades in
-    ✅ Cards scale in with stagger
-    ✅ Images scale + rotate on hover
-    ✅ Card shadows enhance on hover
-    ✅ Price pops on hover

### Super Quality

-    ✅ Text slides in from left
-    ✅ Image slides in from right
-    ✅ Image scales + rotates on hover

### Services

-    ✅ Cards scale in with stagger
-    ✅ Cards lift on hover
-    ✅ Icons rotate + scale on hover
-    ✅ Icon background gradient on hover

### Special Offer

-    ✅ Image slides in from left
-    ✅ Text slides in from right
-    ✅ Image scales + rotates on hover

### Customer Reviews

-    ✅ Header fades in
-    ✅ Review cards scale in with stagger
-    ✅ Cards scale on hover
-    ✅ Avatars scale with ring effect
-    ✅ Stars rotate on hover

### Subscribe

-    ✅ Section fades in
-    ✅ Form border changes on hover
-    ✅ Input scales on focus

## 🛠️ Implementation Details

### Technologies Used

-    **Tailwind CSS**: Custom animations in config
-    **CSS Transitions**: Smooth state changes
-    **CSS Keyframes**: Custom animation sequences
-    **Intersection Observer API**: Scroll-triggered animations
-    **React Hooks**: Custom hook for scroll detection

### Performance Considerations

-    ✅ Uses CSS transforms (GPU-accelerated)
-    ✅ Intersection Observer for efficient scroll detection
-    ✅ Animations run only once per scroll (won't repeat)
-    ✅ Smooth 60fps animations
-    ✅ No JavaScript-based animations for better performance

### Browser Compatibility

-    ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
-    ✅ Fallback: Elements simply appear without animation
-    ✅ No JavaScript required for animations to work

## 🎨 Customization

### Adjust Animation Speed

Edit `tailwind.config.js`:

```js
animation: {
  fadeIn: 'fadeIn 1.2s ease-out', // Change from 0.8s to 1.2s
}
```

### Adjust Animation Delays

Edit `src/index.css`:

```css
.delay-100 {
     transition-delay: 200ms;
} /* Change from 100ms */
```

### Disable Animations

Remove animation classes from components or set `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
     * {
          animation: none !important;
          transition: none !important;
     }
}
```

## 📱 Responsive Behavior

-    All animations work on mobile devices
-    Touch interactions trigger hover states
-    Animations are optimized for mobile performance
-    Stagger delays adjust based on number of visible items

## 🚀 Future Enhancements

-    [ ] Add page transition animations
-    [ ] Implement loading skeleton animations
-    [ ] Add micro-interactions for form validation
-    [ ] Create cart animation effects
-    [ ] Add parallax scrolling effects
-    [ ] Implement gesture-based animations for mobile

---

**Created**: November 2025  
**Status**: ✅ Production Ready
