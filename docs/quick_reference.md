# Quick Reference

## File Locations

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure |
| `style.css` | All CSS styles |
| `script.js` | JavaScript interactivity |
| `assets/` | Image files |
| `docs/` | Documentation |

## CSS Classes

### Container Classes
- `.card-container` - Main wrapper with perspective
- `.card-body` - 3D transform container

### Card Face Classes
- `.cover-front` - Front cover (visible when closed)
- `.inside-left` - Left inside page (back of cover)
- `.inside-right` - Right inside page (message, stationary)
- `.cover-back` - Back cover

### State Classes
- `.open` - Add to `.card-body` to flip the card open
- `.playing` - Add to `.music-fab` when music is playing
- `.hidden` - Add to `.click-hint` to hide it

### Typography Classes
- `.text-chinese` - Chinese font
- `.text-english` - English font (italic)

### Cover Front Classes
- `.cover-content` - Text overlay container with gradient
- `.cover-header` - Header section (title, subtitle, dedication)
- `.cover-title` - Main title (Chinese, gold)
- `.cover-subtitle` - English subtitle (italic)
- `.cover-dedication` - Dedication line
- `.cover-footer` - Footer with VIP badge
- `.vip-badge` - VIP badge container (frosted glass effect)
- `.vip-label` - "VIP" text
- `.vip-details` - Date and identity info
- `.cover-sparkle` - Decorative sparkle element

### Inside Left Classes
- `.inside-left-content` - Overlay container with spine shadow
- `.inside-left-quote` - English quote text
- `.inside-left-sparkle` - Decorative sparkle element

### Inside Right / Letter Classes
- `.letter` - Letter container with paper texture
- `.letter-greeting` - Greeting line (亲爱的老公：)
- `.letter-opening` - Opening line (生日快乐！)
- `.letter-body` - Main paragraphs container
- `.letter-wish` - Closing wish
- `.letter-signature` - Signature (爱你的老婆)

### UI Controls
- `.music-fab` - Floating music toggle button
- `.music-icon` - Music note emoji icon
- `.music-waves` - Sound wave animation container
- `.wave` - Individual animated wave bar
- `.click-hint` - Pulsing light dot to guide user to click

## CSS Variables

```css
/* Fonts */
--font-chinese: 'Noto Serif SC', serif;
--font-english: 'Playfair Display', serif;

/* Colors */
--color-cream: #faf8f5;
--color-gold: #c9a962;
--color-sage: #8fa68e;
--color-water-lily: #e8ddd4;
--color-shadow: rgba(0, 0, 0, 0.15);
--color-shadow-dark: rgba(0, 0, 0, 0.3);

/* Dimensions - 9:16 aspect ratio, fluid mobile sizing */
--card-width: min(90vw, 400px);
--card-height: calc(var(--card-width) * 16 / 9);

/* Animation */
--transition-duration: 1.2s;
--transition-easing: cubic-bezier(0.4, 0, 0.2, 1);

/* 3D Scene */
--perspective: 1500px;  /* Reduced to 1200px on small phones */
```

## Assets

| File | Description |
|------|-------------|
| `cover_front.PNG` | Museum gallery VIP invitation |
| `inside_left.PNG` | Water lilies garden scene |
| `inside_right.PNG` | Chinese birthday letter |
| `cover_back.PNG` | Beach sunset scene |
| `bgm.mp3` | Background music |

## Commands

```bash
# Start local server (Python)
python -m http.server 8000

# Start local server (Node)
npx serve
```

## Responsive Breakpoints

| Breakpoint | Card Width | Perspective | Target Devices |
|------------|------------|-------------|----------------|
| ≤380px | 90vw | 1200px | iPhone SE, small phones |
| 381-480px | 90vw | 1500px | iPhone 12/14, Pixel |
| 481-767px | 90vw (max 400px) | 1500px | Tablets |
| ≥768px | 400px | 2000px | Desktop |
| ≥1024px | 420px | 2000px | Large desktop |

## Social Sharing Meta Tags

The card includes Open Graph and Twitter Card meta tags for rich link previews:
- `og:title` - 爱的印象派·人生画展
- `og:description` - Impression of Love Exhibition
- `og:image` - cover_front.PNG
- `twitter:card` - summary_large_image

## Favicon

Emoji favicon using SVG data URI: 🐻

## Card Layout & States

| State | Width | Pages Visible | Classes | 说明 |
|-------|-------|---------------|---------|------|
| 封面 | 1x | cover-front | (none) | 单页封面 |
| 内页 | 2x | inside-left + inside-right | `.open` | 双页打开 |
| 封底 | 1x | cover-back | `.open .show-back` | 单页封底 |

### Flip Mechanics (翻页方向)
| Action | Transform Origin | Direction |
|--------|------------------|-----------|
| 封面→内页 | cover-front: `left center` | 沿左边缘翻开 |
| 内页→封面 | (reverse of above) | 沿中缝合上 |
| 内页→封底 | inside-right: `left center` | 沿中缝合上 |
| 封底→内页 | cover-back: `right center` | 沿右边缘翻开 |

### Page Positions
- `cover-front`: `left: 0` - 封面
- `inside-left`: `left: 0` - 左内页
- `inside-right`: `left: var(--card-width)` - 右内页
- `cover-back`: `left: 0` - 封底

### CSS Transforms
- `.card-body.open` → `width: calc(var(--card-width) * 2)`
- `.card-body.show-back` → `width: var(--card-width)` (overrides open)
- `.card-body.open .cover-front` → `transform: rotateY(-180deg)`
- `.card-body.show-back .inside-right` → `transform: rotateY(180deg)`

## JavaScript API

### Key Elements (IDs)
- `#bgMusic` - Audio element for background music
- `#musicToggle` - Music FAB button
- `#clickHint` - Click instruction overlay

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `→` Arrow Right | Go to next state |
| `←` Arrow Left | Go to previous state |
| `Enter` / `Space` | Toggle card open/close |
| `M` | Toggle music play/pause |
| `Escape` | Close card |

### Console Messages
- `🎂 Birthday card initialized successfully` - Init complete
- `📖 Card opened` / `📕 Card closed` - Card state change
- `🎵 Music started playing` - Audio playing
- `⏸️ Music paused` - Audio paused
- `🔇 Autoplay blocked` - Browser blocked autoplay
