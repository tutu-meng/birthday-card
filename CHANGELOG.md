# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixed - 2026-01-11
- **Remove click hint light dot**
  - Removed pulsing light dot - not needed

- **Switch from PNG to WebP for faster loading**
  - All images now use .webp format
  - Removed PNG files to reduce repository size

- **Add background music (bgm.mp3)**
  - Updated audio source to use `assets/bgm.mp3`

- **Replace click hint bubble with pulsing light dot**
  - Removed "👆 点击打开" text bubble
  - Added elegant golden pulsing light dot in center of card
  - Includes ripple animation effect for subtle guidance

- **Hide overlaid text on cover-front and inside-left**
  - Text already exists in the images, no need to display
  - HTML kept for accessibility/SEO (screen reader friendly)
  - Using visually-hidden CSS technique

- **Inside-right now uses `assets/inside_right.PNG` image**
  - Changed from HTML text content to background image
  - Consistent with other pages (cover-front, inside-left, cover-back)

- **Ticket-007: Bug Fix - Proper Book-style Card Navigation**
  - **Problem:** Card didn't behave like a real book
  - **Solution:** Implemented correct book flip mechanics:
    - **Cover (State 0):** Single page width, cover-front visible
    - **Open (State 1):** Double width, inside-left + inside-right side by side
    - **Back (State 2):** Single page width, cover-back visible
  - **Flip animations:**
    - Cover-front flips around LEFT edge when opening
    - Inside-right flips around LEFT edge (spine) when closing to back
    - Cover-back opens around RIGHT edge
  - **CSS Layout:**
    - `cover-front`: `transform-origin: left center`
    - `inside-right`: `transform-origin: left center` (flips around spine)
    - `cover-back`: `transform-origin: right center`
    - Card body width: 1x (closed/back) or 2x (open)
  - **Click behavior:**
    - Click cover-front → Opens (flips left along left edge)
    - Click inside-left → Closes to cover (flips right along spine)
    - Click inside-right → Closes to back (flips right along spine)
    - Click cover-back → Opens (flips left along right edge)

### Added - 2026-01-11
- **Ticket-006: Polish - Mobile Responsiveness & Metadata**
  - **CSS Mobile Responsiveness:**
    - Card width: `min(90vw, 400px)` for fluid mobile sizing
    - Breakpoints: 380px (small phones), 481px (tablets), 768px (desktop), 1024px (large)
    - Dynamic viewport height: `100dvh` for mobile browsers
    - Adjusted perspective for smaller screens
    - Reduced padding and font sizes for small phones
  - **Open Graph Meta Tags:**
    - `og:title`, `og:description`, `og:image` for social sharing
    - Twitter Card meta tags
    - Theme color meta tag
  - **Favicon:**
    - Emoji favicon (🐻) using SVG data URI
    - Apple touch icon linked to cover image
  - **Viewport improvements:**
    - Disabled user scaling for app-like experience
    - `overflow-x: hidden` to prevent horizontal scroll

- **Ticket-005: JavaScript Logic - Interaction & Audio**
  - **Click-to-open functionality:**
    - Card opens/closes on click
    - Toggle `.open` class on `.card-body`
    - Click hint shown initially, hides after first interaction
  - **Background music control:**
    - Audio element with loop and preload
    - Music FAB (Floating Action Button) in top-right corner
    - Visual indicator: animated sound waves when playing
    - Handles browser autoplay policies gracefully
  - **Keyboard accessibility:**
    - Enter/Space to toggle card
    - 'M' key to toggle music
    - Escape to close card
  - **CSS additions:**
    - FAB button styles with hover/active states
    - Sound wave animation (@keyframes wave)
    - Click hint with bounce animation
    - Responsive sizing for FAB

- **Ticket-004: Visual UI - Inside Pages Implementation**
  - **Inside Left Page:**
    - Set background image via CSS (inside_left.PNG)
    - Added white semi-transparent overlay (rgba(255,255,255,0.15))
    - Implemented right-edge shadow for spine depth effect
    - Added quote text with text-shadow for legibility
  - **Inside Right Page:**
    - Warm paper texture background (#fffbf0)
    - Left-edge inner shadow for spine depth
    - Full letter content in semantic HTML
    - Typography: Noto Serif SC with traditional Chinese text indentation
    - Sections: greeting, opening, body paragraphs, wish, signature
  - Responsive typography for all breakpoints

- **Ticket-003: Visual UI - Front Cover Implementation**
  - Updated HTML with semantic text overlay structure
  - Added cover-front background image via CSS
  - Implemented dark gradient overlay for text readability
  - Styled typography:
    - Title: 爱的印象派 · 人生画展 (Noto Serif SC, Gold)
    - Subtitle: Impression of Love Exhibition (Playfair Display, Italic)
    - Dedication: 致我最爱的布朗熊先生
  - Created VIP badge with frosted glass effect
  - Added text-shadow for contrast against oil painting background
  - Responsive typography scaling for all breakpoints

- **Ticket-002: Core CSS - 3D Folding Mechanics**
  - Updated CSS variables for 9:16 aspect ratio
  - Added `--perspective: 1500px` for 3D scene
  - Implemented book-style folding with `transform-origin: left center`
  - Created `.open` class for flip animation (`rotateY(-180deg)`)
  - Set up `backface-visibility: hidden` for proper page flipping
  - Added transition timing (1.2s cubic-bezier)
  - Updated responsive breakpoints for new aspect ratio

- **Ticket-001: Project Setup & Basic HTML Skeleton**
  - Created `index.html` with HTML5 boilerplate
    - Proper meta tags (charset, viewport)
    - Google Fonts linked (Noto Serif SC, Playfair Display)
    - Semantic HTML structure for 3D folding card
  - Created `style.css` with:
    - CSS custom properties for theming
    - Card container and body styles
    - Card face styles (cover-front, inside-left, inside-right, cover-back)
    - Responsive breakpoints (480px, 360px)
    - Monet-inspired color palette
  - Created `script.js` with basic initialization
  - Organized assets in `assets/` folder
  - Created documentation in `docs/`:
    - README.md
    - project_context.md
    - developer_guide.md
    - quick_reference.md
