'use client';

import { useEffect, useRef } from 'react';

/**
 * Services Section Component
 * 
 * Features:
 * - Card-based layout with hover effects
 * - Scroll animations
 * - Responsive grid
 */
export default function ServicesSection() {
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
      const elements = sectionRef.current.querySelectorAll('.service-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.service-card');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const services = [
    {
      title: 'Web Development',
      description:
        'Custom websites built with modern technologies and best practices.',
      icon: '🌐',
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful and intuitive designs that enhance user experience.',
      icon: '🎨',
    },
    {
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
    },
    {
      title: 'E-Commerce',
      description:
        'Full-featured online stores with secure payment integration.',
      icon: '🛒',
    },
    {
      title: 'SEO Optimization',
      description:
        'Improve your search engine rankings and drive organic traffic.',
      icon: '🔍',
    },
    {
      title: 'Consulting',
      description:
        'Expert advice to help you make the right digital decisions.',
      icon: '💡',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-element opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your
            business thrive online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

