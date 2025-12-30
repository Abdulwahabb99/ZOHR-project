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
            observer.unobserve(entry.target);
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
      title: 'Crane Inspection Services',
      category: 'Lifting Equipment',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=800&fit=crop&q=80',
    },
    {
      title: 'Marine Services',
      category: 'Offshore Operations',
      imageUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=800&fit=crop&q=80',
    },
    {
      title: 'Load Testing',
      category: 'Safety Compliance',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&q=80',
    },
    {
      title: 'Training Programs',
      category: 'Professional Development',
      imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop&q=80',
    },
    {
      title: 'Equipment Certification',
      category: 'Quality Assurance',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&q=80',
    },
    {
      title: 'Safety Inspection',
      category: 'Industrial Services',
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=800&fit=crop&q=80',
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-12 md:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
            Our Projects
          </h2>
          {/* Underline */}
          <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Some of our latest successful projects that we are proud to present it to you
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
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

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

