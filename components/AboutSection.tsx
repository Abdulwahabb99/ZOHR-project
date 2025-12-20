'use client';

import { useEffect, useRef } from 'react';

/**
 * About Section Component
 * 
 * Features:
 * - Scroll-triggered animations
 * - Responsive grid layout
 * - Image placeholder with lazy loading
 */
export default function AboutSection() {
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
      const elements = sectionRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.fade-in-element');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image/Visual Section */}
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-700">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden shadow-xl">
              {/* Placeholder for image - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-blue-600 opacity-20">
                  About Us
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Create Digital
              <span className="block text-blue-600">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team of passionate designers and developers work together to
              create digital experiences that not only look stunning but also
              perform exceptionally well.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in the industry, we've helped numerous
              businesses transform their online presence and achieve their goals.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                'Modern & Responsive Design',
                'Performance Optimized',
                'SEO Friendly',
                'User-Centered Approach',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 fade-in-element opacity-0 translate-y-4 transition-all duration-500"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

