# Training Website - Next.js Project

A fully responsive, modern website built with Next.js, React, and Tailwind CSS. This project demonstrates best practices in web development including responsive design, animations, performance optimization, and clean code structure.

## 🚀 Features

- **Fully Responsive Design**: Mobile-first approach supporting screens from 320px and up
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: 
  - Lazy loading for images and components
  - Optimized Core Web Vitals
  - Target Lighthouse score ≥ 90
- **Smooth Animations**: 
  - Scroll-based reveal animations
  - Hover effects on interactive elements
  - Smooth transitions between sections
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Modern CSS Animations**

## 📁 Project Structure

```
training-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page combining all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Responsive navigation with hamburger menu
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── AboutSection.tsx    # About section with content
│   ├── ServicesSection.tsx # Services showcase
│   ├── PortfolioSection.tsx # Portfolio grid
│   ├── ContactSection.tsx  # Contact form
│   ├── Footer.tsx          # Site footer
│   └── SmoothScroll.tsx   # Smooth scroll utility
└── public/                 # Static assets
```

## 🎨 Components Overview

### Navbar
- Fixed navigation bar that appears on scroll
- Responsive hamburger menu for mobile devices
- Smooth scroll to sections
- Active link highlighting

### Hero Section
- Animated text reveal on scroll
- Call-to-action buttons
- Statistics/features display
- Gradient backgrounds

### About Section
- Two-column layout (image + content)
- Feature list with checkmarks
- Scroll-triggered animations

### Services Section
- Card-based grid layout
- Hover effects on cards
- Responsive 3-column grid

### Portfolio Section
- Image grid with hover overlays
- Gradient placeholders (replace with actual images)
- Lazy loading support

### Contact Section
- Contact form with validation-ready structure
- Responsive form layout
- Gradient background

### Footer
- Multi-column layout
- Social media links
- Footer navigation links
- Copyright information

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9.0 or higher (recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd training-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## 🎭 Animations

The project uses CSS animations and Intersection Observer API for scroll-triggered animations:

- **Fade In**: Elements fade in as they enter the viewport
- **Slide Up**: Elements slide up from below
- **Hover Effects**: Interactive elements have hover states
- **Smooth Transitions**: All state changes are smoothly animated

## ⚡ Performance Optimizations

- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Lazy Loading**: Components and images load as needed
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Intersection Observer**: Efficient scroll-based animations

## 📝 Code Comments

All components include detailed comments explaining:
- Component purpose and features
- Key implementation details
- Performance considerations
- Responsive behavior

## 🔧 Customization

### Colors
Edit the Tailwind classes in components to change the color scheme. The project uses:
- Primary: Blue (`blue-600`)
- Secondary: Purple (`purple-600`)
- Accent colors for gradients

### Content
Replace placeholder content in each component with your actual content.

### Images
Replace gradient placeholders in:
- `AboutSection.tsx`
- `PortfolioSection.tsx`

Use Next.js Image component for optimized images:
```tsx
import Image from 'next/image';
<Image src="/your-image.jpg" alt="Description" width={800} height={600} />
```

## 📚 Learning Resources

This project demonstrates:
- Next.js App Router structure
- React hooks (useState, useEffect, useRef)
- TypeScript with React
- Tailwind CSS utility classes
- Responsive design patterns
- Performance optimization techniques
- Animation best practices

## 🎯 Next Steps

To extend this project:
1. Add actual images to replace placeholders
2. Implement form validation in ContactSection
3. Add more pages (About, Services detail pages)
4. Integrate a CMS for content management
5. Add dark mode toggle
6. Implement analytics
7. Add unit tests

## 📄 License

This is a training project for educational purposes.

## 🤝 Contributing

This is a training project. Feel free to use it as a learning resource and modify it to suit your needs.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
