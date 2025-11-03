# Estrella Rodriguez Development Guidelines

Auto-generated from all feature plans. Last updated: [DATE]

## Constitutional Requirements

All development MUST comply with these principles:
- ✅ **Educational Design**: Colorful, cheerful interface for children/young users
- ✅ **Vanilla Web Technologies**: HTML5, CSS3, vanilla JavaScript only
- ✅ **Smooth Animations**: 60fps entrance/exit animations required
- ✅ **Responsive Design**: Mobile, tablet, desktop compatibility
- ✅ **SEO Excellence**: Semantic HTML5, complete meta tags, sitemap
- ✅ **Performance**: <3s load time, optimized images and animations

## Active Technologies

HTML5 (semantic markup), CSS3 (Grid, Flexbox, animations), Vanilla JavaScript (ES6+)

## Project Structure

```text
index.html                 # Main educational task room
css/
├── main.css              # Educational theming and layout
├── animations.css        # Smooth entrance/exit animations
└── responsive.css        # Mobile-first responsive design

js/
├── main.js              # Core application logic
├── animations.js        # Animation controllers (60fps)
├── navigation.js        # Mobile menu and navigation
└── storage.js           # localStorage persistence

assets/
├── images/              # Optimized educational images
├── icons/               # Educational themed icons
└── fonts/               # Web fonts if needed

pages/                   # Additional content pages
└── [additional pages]

docs/                    # Documentation and SEO files
├── README.md
└── sitemap.xml         # SEO sitemap
```

## Code Style

### HTML5
- Use semantic HTML5 elements (header, nav, main, section, article, footer)
- Proper heading hierarchy (h1 → h2 → h3)
- Include accessibility attributes (alt text, aria-labels)
- Valid markup with proper DOCTYPE

### CSS3
- Mobile-first responsive design using CSS Grid and Flexbox
- Smooth CSS transitions and keyframe animations (60fps target)
- Educational color schemes with good contrast ratios
- Organized into logical files (main, animations, responsive)

### JavaScript (ES6+)
- Clean, well-commented, modular code
- Event-driven architecture with proper error handling
- localStorage for data persistence
- Performance-optimized animations and DOM manipulation

## Performance Guidelines

- Target <3s initial load time
- Optimize images (WebP format, lazy loading)
- Implement smooth 60fps animations
- Minimize HTTP requests
- Use semantic HTML for SEO benefits

## SEO Requirements

- Complete meta tags for all pages
- Semantic HTML5 structure
- Proper heading hierarchy
- Create and maintain sitemap.xml
- Add structured data where appropriate

## Recent Changes

[LAST 3 FEATURES AND WHAT THEY ADDED]

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
