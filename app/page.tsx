import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

/**
 * Home Page
 * 
 * This is the main landing page with:
 * - Hero slider
 * - About section
 * - Portfolio section (Our Projects)
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
