'use client';

import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LiftingPage() {
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
      const elements = sectionRef.current.querySelectorAll('.service-item');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.service-item');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const services = [
    {
      title: 'Offshore Rigging',
      items: ['Lifting Survey', 'Drop Object Survey', 'Rope Access'],
      category: 'Offshore Rigging',
      imageUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Onshore Rigging',
      items: ['Lifting Survey', 'Drop Object Survey', 'Rope Access'],
      category: 'Onshore Rigging',
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Fork Lift',
      items: ['Load Test', 'Hire'],
      category: 'Fork Lift',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1663100854088-bd8ab87870a7?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Mobile Crane',
      items: ['Load Test', 'Hire'],
      category: 'Mobile Crane',
      imageUrl: 'https://images.unsplash.com/photo-1614259890258-5c1e04bb6c9c?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Davit Winch',
      items: ['Load Test', 'Maintenance'],
      category: 'Davit Winch',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Overhead Crane',
      items: ['Load Test', 'Maintenance'],
      category: 'Overhead Crane',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Lifting Beam',
      items: ['Load Test', 'Hire'],
      category: 'Lifting Beam',
      imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'DP Anchor Vessel',
      items: ['Load Test', 'Hire'],
      category: 'DP Anchor Vessel',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Magnetic Penetration Inspection (MPI)',
      items: ['Non-Destructive Test (NDT)'],
      category: 'Magnetic Penetration Inspection',
      imageUrl: 'https://images.unsplash.com/photo-1581090480858-5c473d2d26d5?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Dye Penetration Inspection (DPI)',
      items: ['Non-Destructive Test (NDT)'],
      category: 'Dye Penetration Inspection',
      imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Ultrasonic Test (UT)',
      items: ['Thickness', 'Shock Wave'],
      category: 'Ultrasonic Test',
      imageUrl: 'https://images.unsplash.com/photo-1581092160401-2d7817172b79?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Load Cell up-to 120Ton',
      items: ['Hire', 'Selling'],
      category: 'Load Cell',
      imageUrl: 'https://images.unsplash.com/photo-1581092160804-4d8c71c48c9d?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Water Bags up-to 35Ton',
      items: ['Hire', 'Selling'],
      category: 'Water Bags',
      imageUrl: 'https://images.unsplash.com/photo-1581092160569-6ad3c5b7e0e3?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Life Boat Water Bags',
      items: ['Test', 'Hire', 'Selling'],
      category: 'Life Boat Water Bags',
      imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop&q=80',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Inspection</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div 
        className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=600&fit=crop&q=80)`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Lifting</h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Marine Petroleum Lifting hopes to help you work in a safe environment by detecting defects before they cause severe damage. We are inspected according to the relevant regulations and standards. We maintain an easy-to-use database system that ensures you instant access to certification and test reports wherever you are and anytime you want.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Our crew is qualified to work with all the following lifting equipment:
          </p>
        </div>

        {/* Services Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item opacity-0 translate-y-8 transition-all duration-700 group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-600 flex items-center text-sm"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

