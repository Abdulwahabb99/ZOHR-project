'use client';

import { useEffect, useRef } from 'react';

/**
 * Portfolio Section Component
 * 
 * Features:
 * - Image grid with hover effects
 * - Lazy loading for images
 * - Modal/overlay on hover
 */
export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.portfolio-item');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.portfolio-item');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const portfolioItems = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Development',
      gradient: 'from-green-400 to-green-600',
    },
    {
      title: 'Restaurant App',
      category: 'Mobile App',
      gradient: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Portfolio Website',
      category: 'Web Design',
      gradient: 'from-indigo-400 to-indigo-600',
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-element opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped businesses
            achieve their goals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item opacity-0 translate-y-8 transition-all duration-700 group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Placeholder Image with Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transform group-hover:scale-110 transition-transform duration-500`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-30">
                    {item.title}
                  </div>
                </div>
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-blue-300 font-medium">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

