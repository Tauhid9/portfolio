# Modal & Image Gallery Features

## Overview

Your portfolio now includes advanced interactive features:
- **Image Auto-Rotation** on project and blog cards
- **Detailed Modal Views** for projects and blog articles
- **Image Gallery** with navigation and indicators
- **Multiple Images** per project and article

---

## Features

### 1. **Project Cards with Auto-Rotating Images**

Each project card now displays:
- Automatically rotating images on hover (2-second intervals)
- Image counter showing current position (visible on hover)
- "Details" button to open full project modal
- Seamless image transitions

**Files:**
- `components/features/project-card.tsx`
- `components/modals/project-details-modal.tsx`
- `data/projects.ts`

### 2. **Project Details Modal**

Click "Details" on any project card to view:
- **Full-screen Image Gallery**: Navigate with arrows or dot indicators
- **Auto-rotating images**: Displays 2-4 screenshots of your project
- **Project Description**: Detailed longDescription of your work
- **Category**: Project classification
- **All Technologies**: Complete tech stack
- **Action Buttons**: Links to GitHub code and live demo
- **Close Button**: Easy modal dismissal

### 3. **Blog Cards with Auto-Rotating Images**

Each blog article card includes:
- Automatically rotating images on hover
- Image counter
- "Read Article →" button to open full article modal
- Smooth transitions and hover effects

**Files:**
- `components/features/blog-card.tsx`
- `components/modals/blog-details-modal.tsx`
- `data/blog.ts`

### 4. **Blog Details Modal**

Click "Read Article" on any blog card to view:
- **Full-screen Image Gallery**: Multiple article images with navigation
- **Article Metadata**: Author, date, read time, category
- **Full Content**: Complete article text
- **Tags**: All tags associated with the article
- **Share Button**: For sharing the article
- **Visual Design**: Professional, readable layout

---

## Data Structure

### Projects

```typescript
interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string               // Thumbnail image
  images: string[]            // Array of 4+ images for modal gallery
  technologies: string[]
  github?: string
  live?: string
  featured: boolean
  category: string
}
```

Each project now includes an `images` array with 4 screenshots.

### Blog Posts

```typescript
interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string               // Thumbnail image
  images: string[]            // Array of 4+ images for modal gallery
  author: string
  date: string
  readTime: number
  category: string
  tags: string[]
  slug: string
}
```

Each blog post now includes an `images` array with 4 related images.

---

## Customization Guide

### Adding New Projects/Articles

1. **Add to data file** (`data/projects.ts` or `data/blog.ts`)
2. **Include images array** with 4+ URLs:
   ```typescript
   images: [
     "https://images.unsplash.com/...",
     "https://images.unsplash.com/...",
     "https://images.unsplash.com/...",
     "https://images.unsplash.com/..."
   ]
   ```

### Customizing Image Rotation Speed

In `components/features/project-card.tsx` and `components/features/blog-card.tsx`:

```typescript
const interval = setInterval(nextImage, 2000)  // 2000ms = 2 seconds
```

Change `2000` to your desired milliseconds (e.g., 3000 for 3 seconds).

### Customizing Modal Appearance

Edit the modal components:
- `components/modals/project-details-modal.tsx`
- `components/modals/blog-details-modal.tsx`

Key CSS classes to modify:
- `max-w-4xl` - Modal width
- `max-h-[90vh]` - Modal height
- `h-96` - Image height in modal

### Image Gallery Navigation

Navigation buttons appear on hover over the main image. You can customize:

**In Project Modal:**
```typescript
<button
  onClick={prevImage}
  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white"
>
  <ChevronLeft className="w-6 h-6" />
</button>
```

**In Blog Modal:**
Same structure with ChevronRight for next navigation.

---

## Interactive Elements

### Image Carousel Controls

- **Previous/Next Buttons**: Appear on hover, navigate images
- **Dot Indicators**: Click any dot to jump to that image
- **Auto-rotation**: Images cycle every 2 seconds on hover
- **Image Counter**: Shows current position (e.g., "2/4")

### Modal Actions

**Project Modal:**
- View Code (GitHub link)
- Live Demo (deployed site link)
- Close button (X icon)

**Blog Modal:**
- Share Article button
- Close button (X icon)

---

## Technical Details

### State Management

Both components use React `useState` for:
- `isModalOpen`: Controls modal visibility
- `currentImageIndex`: Tracks active image in carousel

### Performance

- Images are lazy-loaded
- CSS transitions are GPU-optimized
- Modals use fixed positioning with z-index 50
- No external carousel libraries needed

### Accessibility

- Proper `aria-label` attributes on buttons
- Semantic HTML structure
- Keyboard-accessible buttons
- Image alt text for all images

---

## Browser Support

- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (11+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Troubleshooting

**Images not auto-rotating:**
- Check if `images` array exists in data file
- Ensure image URLs are valid and accessible
- Check browser console for CORS errors

**Modal not opening:**
- Verify `ProjectDetailsModal` and `BlogDetailsModal` are imported
- Check that `isModalOpen` state is properly toggled
- Ensure `onClose` handler is connected

**Images not showing in gallery:**
- Verify image URLs are correct
- Check that images array has at least 1 image
- Ensure no CORS restrictions on image URLs

---

## Future Enhancements

Possible additions:
- Keyboard navigation (arrow keys)
- Image preloading for smoother transitions
- Lightbox view for full-size images
- Touch/swipe support for mobile
- Image filters or effects
- Custom image captions
- Analytics on modal views

---

## File Structure

```
components/
├── features/
│   ├── project-card.tsx        # Enhanced with modal & carousel
│   └── blog-card.tsx           # Enhanced with modal & carousel
└── modals/
    ├── project-details-modal.tsx   # New: Full project details
    └── blog-details-modal.tsx      # New: Full article details

data/
├── projects.ts                 # Updated with images[]
└── blog.ts                     # Updated with images[]
```

---

## Questions?

Refer to the main portfolio documentation in `PORTFOLIO_GUIDE.md` for general setup and customization.
