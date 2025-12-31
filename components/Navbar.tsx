'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type NavLink = 
  | { href: string; label: string; children?: never }
  | { href?: never; label: string; children: { href: string; label: string }[] };

/**
 * Navbar Component
 * 
 * Features:
 * - Responsive navigation with hamburger menu for mobile
 * - Smooth scroll behavior
 * - Sticky header that appears on scroll
 * - Active link highlighting
 * - Dropdown menu support
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar background and pathname changes
  useEffect(() => {
    // On other pages, always show solid background
    if (pathname !== '/') {
      setIsScrolled(true);
      return;
    }

    // On home page, handle scroll-based background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial state for home page
    setIsScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close dropdown when pathname changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside or on a link
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  // Toggle mobile dropdown menu
  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDropdownOpen && !target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { 
      label: 'Inspection',
      children: [
        { href: '/lifting', label: 'Lifting' },
      ]
    },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm ${
        !isScrolled ? 'md:bg-transparent md:backdrop-blur-none md:shadow-none' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center h-full transition-opacity duration-200 hover:opacity-80"
            onClick={handleLinkClick}
          >
            <Image
              src="/logo.jpeg"
              alt="ZOHR Logo"
              width={120}
              height={50}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.href ? (
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors duration-200 relative ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {link.label}
                    {/* Hover underline effect */}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-blue-600' : 'bg-white'
                    }`} />
                  </Link>
                ) : (
                  <div className="relative dropdown-container">
                    <button
                      onClick={toggleDropdown}
                      className={`font-medium transition-colors duration-200 relative flex items-center ${
                        isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isDropdownOpen && link.children && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.href}
                            onClick={handleLinkClick}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              pathname === child.href
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 bg-gray-900 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 bg-gray-900 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 bg-gray-900 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.href ? (
                  <Link
                    href={link.href}
                    className={`block font-medium transition-colors duration-200 py-2 ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-900 hover:text-blue-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={toggleMobileDropdown}
                      className="flex items-center justify-between w-full font-medium text-gray-900 py-2 hover:text-blue-600 transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isMobileDropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {link.children && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isMobileDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pl-4 space-y-2 pt-2">
                          {link.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={child.href}
                              className={`block text-sm transition-colors duration-200 py-1 ${
                                pathname === child.href
                                  ? 'text-blue-600 font-medium'
                                  : 'text-gray-600 hover:text-blue-600'
                              }`}
                              onClick={handleLinkClick}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

