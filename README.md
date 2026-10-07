# Prof. Dr. Md. Nurul Islam — Vice-Chancellor Information Hub

Official information portal and portfolio website for **Professor Dr. Md. Nurul Islam**, Vice-Chancellor of Jahangirnagar University (JU), Savar, Dhaka.

Hosted on GitHub Pages: [https://saddamuw.github.io/professor-nurul-islam/](https://saddamuw.github.io/professor-nurul-islam/)

## Key Features
- **Modern Dark & Light Mode Theme**: Automatic system detection with manual toggle.
- **JU VC Information Hub**: Up-to-date role as Vice-Chancellor of Jahangirnagar University (Appointed 26 September 2026).
- **Responsive & Lightweight**: Built with clean Vanilla HTML, CSS, and JS (No heavy framework dependencies).
- **Interactive News & Events Hub**: Categorized and filterable press releases and media coverage.
- **Photo Gallery & Lightbox**: WebP-optimized high-resolution visual archive with keyboard & swipe modal view.
- **Verified Works**: Accurate publications, timeline, and research domain focus areas.

## How to Update Content

All dynamic content is stored in `js/data.js`.

### Adding a News Article
Open `js/data.js` and add an entry under `newsEvents`:
```javascript
{
  title: "Headline of the News",
  outlet: "BSS News / Daily Star",
  date: "DD MMM 2026",
  lang: "EN", // or "BN"
  category: "ju-vc",
  desc: "Brief summary of the activity...",
  link: "https://..."
}
```

### Adding a Gallery Photo
Place your optimized image in `images/gallery/` and add to `js/data.js` under `gallery`:
```javascript
{
  slug: "my-photo-slug",
  cat: "leadership", // or "campus"
  title: "Photo Title",
  desc: "Photo description...",
  src: "images/gallery/my-photo.webp",
  thumb: "images/gallery/my-photo-sm.webp",
  license: "CC BY 4.0",
  artist: "Photographer Name"
}
```

## Structure
```
├── index.html           # Main HTML5 layout & SEO schema
├── css/
│   └── style.css        # Modern design system & dark mode tokens
├── js/
│   ├── data.js          # Profile, timeline, news, gallery data
│   └── script.js        # Dynamic rendering, filters, theme toggle
├── images/
│   ├── gallery/         # WebP optimized gallery photos & thumbnails
│   └── *-logo.webp      # Optimized university logos
├── sitemap.xml
└── README.md
```
