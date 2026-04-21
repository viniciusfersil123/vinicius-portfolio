# Carousel Individual Image Offset Guide

## Overview
The carousel on the main page now supports **individual offset control** for each image. You can adjust the horizontal (X) and vertical (Y) positioning of each image independently.

## How to Use

### In `src/components/Highlights.tsx`

Each highlight object now accepts `offsetX` and `offsetY` properties:

```tsx
const highlights: Highlight[] = [
  {
    titleKey: "home.highlights.0.title",
    img: "/teaser_1.jpg",
    captionKey: "home.highlights.0.caption",
    offsetX: "0px",      // Horizontal offset (e.g., "0px", "10%", "-20px")
    offsetY: "-60%",     // Vertical offset (e.g., "-60%", "0px", "50px")
  },
  {
    titleKey: "home.highlights.1.title",
    img: "/teaser_2.jpg",
    captionKey: "home.highlights.1.caption",
    offsetX: "15px",     // Different offset for this image
    offsetY: "-40%",
  },
  // ... more highlights
];
```

## Offset Values

### `offsetX` (Horizontal)
- Default: `"0px"`
- Examples: `"0px"`, `"10px"`, `"-20px"`, `"10%"`, `"20%"`
- Positive values move the image to the right
- Negative values move the image to the left

### `offsetY` (Vertical)
- Default: `"-60%"`
- Examples: `"-60%"`, `"-40%"`, `"0px"`, `"20px"`
- Positive values move the image down
- Negative values move the image up

## Type Definition

```tsx
type Highlight = {
  titleKey: string;
  img: string;
  captionKey: string;
  offsetX?: string;    // Optional, defaults to "0px"
  offsetY?: string;    // Optional, defaults to "-60%"
};
```

## How It Works

1. Each image in the carousel has its own CSS custom properties
2. These are passed as inline styles to the `<img>` element
3. The CSS uses `object-position` with these values to crop the image
4. No global settings needed - each image can have unique positioning

## Example: Fine-tuning Images

```tsx
const highlights: Highlight[] = [
  {
    titleKey: "home.highlights.0.title",
    img: "/teaser_1.jpg",
    captionKey: "home.highlights.0.caption",
    offsetX: "0px",
    offsetY: "-50%",     // Adjusted to show more of the bottom
  },
  {
    titleKey: "home.highlights.1.title",
    img: "/teaser_2.jpg",
    captionKey: "home.highlights.1.caption",
    offsetX: "-10px",    // Shifted left
    offsetY: "-60%",
  },
  {
    titleKey: "home.highlights.2.title",
    img: "/teaser_3.jpg",
    captionKey: "home.highlights.2.caption",
    offsetX: "5px",      // Shifted right slightly
    offsetY: "-70%",     // Adjusted to show more of the top
  },
];
```

## Mobile Responsiveness

The offsets are applied consistently across all screen sizes. If you need different offsets for mobile, you can add media query logic in the component (though CSS custom properties work on all screens).

## CSS Implementation

The underlying CSS uses:
```css
.highlight-media img {
  object-position:
    calc(50% + var(--highlight-media-offset-x, 0px))
    calc(100% + var(--highlight-media-offset-y, -60%));
}
```

This allows each image to have its own positioning while maintaining the original cropping behavior.
