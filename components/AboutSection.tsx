"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/**
 * About Section Component
 *
 * Features:
 * - Scroll-triggered animations
 * - Responsive grid layout
 * - Image placeholder with lazy loading
 * - Header with background image
 */
export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-in-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements =
          sectionRef.current.querySelectorAll(".fade-in-element");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-white">
      {/* Content Section */}
      <div className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image/Visual Section */}
            <img
                  src="/Professional Services.jpeg"
                  alt="ZOHR - Lifting and Marine Services"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

            {/* Content Section */}
            <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">ZOHR</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  ZOHR for Supplies and Services was established based on the
                  experience, ambition, and determination of skilled Egyptian
                  professionals aiming to add real value to the lifting and
                  marine sectors. The company focuses on the lifting niche,
                  recognizing it as a critical foundation for protecting lives,
                  assets, and project integrity.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ZOHR is committed to raising industry standards by enhancing
                  the competence of lifting supervisors and riggers through
                  appropriate training, while also improving the safety and
                  reliability of lifting equipment through professional
                  inspection, testing, and certification services. Our goal is
                  to support project completion with the highest levels of
                  safety, efficiency, and technical compliance, while
                  maintaining competitive pricing and minimizing downtime —
                  without compromising safety.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are dedicated to supplying safe, high-quality products and
                  delivering reliable services at realistic prices. ZOHR is
                  known for its responsive and dependable service, supported by
                  experienced engineers and technical personnel who place
                  safety, quality, and customer satisfaction at the core of
                  everything they do.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our engineering team brings extensive experience in crane
                  inspection, load testing, and the supply and certification of
                  all types of lifting equipment, in accordance with British
                  Standards, international safety standards, and applicable
                  regional regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
