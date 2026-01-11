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
- `.inside-left` - Left inside page
- `.inside-right` - Right inside page (message)
- `.cover-back` - Back cover

### Typography Classes
- `.text-chinese` - Chinese font
- `.text-english` - English font (italic)

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

/* Dimensions */
--card-width: 400px;
--card-height: 600px;

/* Animation */
--transition-duration: 0.8s;
```

## Assets

| Image | Description |
|-------|-------------|
| `cover_front.PNG` | Museum gallery VIP invitation |
| `inside_left.PNG` | Water lilies garden scene |
| `inside_right.PNG` | Chinese birthday letter |
| `cover_back.PNG` | Beach sunset scene |

## Commands

```bash
# Start local server (Python)
python -m http.server 8000

# Start local server (Node)
npx serve
```

## Responsive Breakpoints

- Default: 400px × 600px card
- ≤480px: 320px × 480px card
- ≤360px: 280px × 420px card
