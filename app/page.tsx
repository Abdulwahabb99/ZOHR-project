import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

/**
 * Home Page
 * 
 * This is the main landing page that combines all sections:
 * - Navbar: Fixed navigation with smooth scroll behavior
 * - Hero: Eye-catching hero section with CTAs
 * - About: Information about the company/services
 * - Services: Showcase of offered services
 * - Portfolio: Display of previous work
 * - Contact: Contact form section
 * - Footer: Site footer with links and information
 * 
 * Performance optimizations:
 * - Components are lazy-loaded where appropriate
 * - Images use Next.js Image component for optimization
 * - Animations use Intersection Observer for performance
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
