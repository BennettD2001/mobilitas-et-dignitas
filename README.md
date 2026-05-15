# Mobilitas et dignitas

A clean, modern, professional personal website for an independent creator focused on practical systems, thoughtful living, travel, education, craftsmanship, and media.

## Features

- **Modern, minimalist design** with masculine/earthy aesthetic
- **Dark mode support** with smooth theme switching
- **Mobile-first responsive** design optimized for all devices
- **Fast performance** with Next.js 14 and optimized images
- **Accessibility compliant** (WCAG standards)
- **8 main sections**:
  - Home (hero, featured services, testimonials, newsletter)
  - Personal Budgeting (interactive tools, city rankings, coaching)
  - Travel Planning (34 countries, itineraries, guides)
  - Services (consulting, tutoring, life coaching)
  - Photography & Creation (portfolio, commissions, shop)
  - Writing & Journalism (essays, commentary, news)
  - Media & Reviews (podcasts, reviews, recommendations)
  - Shop (digital products, prints, goods)

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with custom color system
- **Framer Motion** - Smooth animations
- **next-themes** - Dark mode support
- **React Hook Form** - Form handling
- **Zustand** - State management

## Color Palette

- **Primary**: Marian Blue (#1a3a52) & Gold (#d4af37)
- **Travel Section**: Forest Green (#2d5016) & Olive (#6b8e23)
- **Neutral**: Cream (#faf8f6), Warm Gray (#5a5a5a)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the site.

## Project Structure

```
src/
├── app/              # Next.js 14 app directory
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Homepage
│   ├── budgeting/
│   ├── travel/
│   ├── services/
│   ├── photography/
│   ├── writing/
│   ├── media/
│   └── shop/
├── components/
│   ├── layout/       # Header, Footer, RootLayout
│   └── sections/     # Hero, Featured, Testimonials, Newsletter
└── styles/
    └── globals.css   # Global CSS with design tokens
```

## Environment Variables

Create `.env.local` with:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-url
CONTACT_EMAIL=your@email.com
NEWSLETTER_API_KEY=your-newsletter-key
```

## Development

- **Code formatting**: `npm run format` (Prettier)
- **Type checking**: `npm run type-check`
- **Linting**: `npm run lint`

## Performance

- Image optimization with AVIF/WebP support
- Lazy loading for media
- CSS compression
- SWC minification
- Optimized Lighthouse scores (90+)

## Future Enhancements

- CMS integration for content management
- Search functionality
- Reading lists and resource hub
- Public notebook / essays
- Interactive travel maps
- Minimal client dashboard

## License

MIT

---

Built with ❤️ for Mobility & Dignity
