'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Egypt Branch */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                EGYPT BRANCH
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Address:</span>
                  <span>
                    Apartment NO 2 building NO 4 Faisal City - ALEXANDRIA - EGYPT
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Phone:</span>
                  <div className="space-y-1">
                    <div>002-01229595209</div>
                    <div>002-01222301036</div>
                    <div>002035372108</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Email:</span>
                  <div className="space-y-1">
                    <a
                      href="mailto:m.mpl@mpleg.com"
                      className="text-blue-600 hover:underline block"
                    >
                      m.mpl@mpleg.com
                    </a>
                    <a
                      href="mailto:m.mpleg@gmail.com"
                      className="text-blue-600 hover:underline block"
                    >
                      m.mpleg@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">CEO:</span>
                  <span>MOHAMED SALAH ELDIN</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Sales Manager:</span>
                  <span>MOHAMED SAKR</span>
                </div>
              </div>
            </div>

            {/* Saudi Arabia Branch */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                SAUDI ARABIA BRANCH
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Address:</span>
                  <span>ELKHUBAR SAUDI ARABIA</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Phone:</span>
                  <span>00966509566208</span>
                </div>
              </div>
            </div>

            {/* Romania Branch */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ROMANIA BRANCH
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Address:</span>
                  <span>
                    BUCURESTI NOI, SEMICENTRAL SECTOR BUCURESTI ROMANIA
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Phone:</span>
                  <span>0040768029378</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Message Us
              </h2>
              <p className="text-gray-600 mb-6">
                Please fill out the following form and we will get in touch with you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

