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
      {/* Page Header with Background Image */}

      {/* Content Section */}
     
    </section>
  );
}
