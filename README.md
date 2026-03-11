# Primero Dental Clinic

A premium, high-performance web application for Primero Dental Clinic, Nasr City, Cairo.

## Features
- **Modern UI/UX**: Premium dark mode aesthetic with high contrast and smooth animations.
- **Dynamic Content**: Full bilingual support (English & Arabic) using a centralized translation system.
- **Advanced SEO**: Comprehensive Schema.org markup (Dentist, MedicalBusiness) and AI-search optimized metadata.
- **Interactive Gallery**: Before & After comparison tool and professional patient smile showcase.
- **Video Integration**: High-quality YouTube Shorts embeds for clinical highlights.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences.

## Tech Stack
- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **SEO**: [react-helmet-async](https://github.com/staylor/react-helmet-async)

## Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Structure
- `src/components`: UI components (Navbar, Gallery, Hero, etc.)
- `src/lib/translations.ts`: Centralized multilingual strings.
- `src/pages/Index.tsx`: Main landing page assembly and SEO metadata.
- `public/images/gallery`: High-quality patient result assets.
