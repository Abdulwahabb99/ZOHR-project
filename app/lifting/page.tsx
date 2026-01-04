"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LiftingPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".service-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll(".service-item");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const services = [
    {
      title: "Offshore Rigging",
      items: ["Lifting Survey", "Drop Object Survey", "Rope Access"],
      category: "Offshore Rigging",
      imageUrl: "https://mpleg.com/images/slider/ded8ca0e-b.jpg",
    },
    {
      title: "Onshore Rigging",
      items: ["Lifting Survey", "Drop Object Survey", "Rope Access"],
      category: "Onshore Rigging",
      imageUrl: "https://mpleg.com/images/slider/1701f1ab-1.jpg",
    },
    {
      title: "Fork Lift",
      items: ["Load Test", "Hire"],
      category: "Fork Lift",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663100854088-bd8ab87870a7?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Mobile Crane",
      items: ["Load Test", "Hire"],
      category: "Mobile Crane",
      imageUrl: "/mobile.jpeg",
    },
    {
      title: "Offshore Crane",
      items: ["Load Test", "Maintenance"],
      category: "Offshore Crane",
      imageUrl: "/offshore.jpeg",
    },
    {
      title: "Overhead Crane",
      items: ["Load Test", "Maintenance"],
      category: "Overhead Crane",
      imageUrl: "./overhead.jpeg",
    },

    {
      title: "Magnetic Penetration Inspection (MPI)",
      items: ["Non-Destructive Test (NDT)"],
      category: "Magnetic Penetration Inspection",
      imageUrl: "/MPI.jpeg",
    },
    {
      title: "Dye Penetration Inspection (DPI)",
      items: ["Non-Destructive Test (NDT)"],
      category: "Dye Penetration Inspection",
      imageUrl: "/DYE.jpeg",
    },
    {
      title: "Ultrasonic Test (UT)",
      items: ["Thickness", "Shock Wave"],
      category: "Ultrasonic Test",
      imageUrl: "/UT.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Inspection</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Lifting</h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            ZOHR for Supplies and Services is committed to supporting safe
            working environments by identifying defects at an early stage,
            before they develop into serious failures or incidents. All
            inspections and services are carried out in accordance with
            applicable regulations, international standards, and industry best
            practices. We maintain a user-friendly digital database system that
            provides our clients with instant access to inspection records,
            certification, and test reports anytime and from anywhere, ensuring
            full transparency and traceability. Our experienced and qualified
            team is competent to inspect, test, and certify a wide range of
            lifting equipment, delivering reliable and efficient services
            tailored to client needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Our crew is qualified to work with all the following lifting
            equipment:
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
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
                  loading="lazy"
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
