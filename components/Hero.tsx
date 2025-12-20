'use client';

import { useEffect, useRef } from 'react';

/**
 * Hero Section Component
 * 
 * Features:
 * - Animated text reveal on scroll
 * - Call-to-action buttons with hover effects
 * - Responsive typography
 * - Smooth fade-in animations
 */
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate all child elements with delays
            const elements = entry.target.querySelectorAll('.hero-element');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 md:pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Main Heading with animation */}
          <h1 className="hero-element text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight opacity-0 translate-y-8 transition-all duration-1000">
            <span className="block">Build Amazing</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          {/* Subheading */}
          <p className="hero-element text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-1000">
            Create stunning websites and applications that captivate your audience
            and drive results. Modern design meets powerful functionality.
          </p>

          {/* CTA Buttons */}
          <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 opacity-0 translate-y-8 transition-all duration-1000">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
              Learn More
            </button>
          </div>

          {/* Stats or Features */}
          <div className="hero-element grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24 opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

