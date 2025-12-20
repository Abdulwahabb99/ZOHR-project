'use client';

import { useEffect } from 'react';

/**
 * SmoothScroll Component
 * 
 * This component handles smooth scrolling behavior for anchor links.
 * It intercepts clicks on anchor links and smoothly scrolls to the target.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            e.preventDefault();
            const offset = 80; // Account for fixed navbar
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null; // This component doesn't render anything
}

