import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header with Background Image */}
      <div 
        className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://mpleg.com/images/slider/437f3242-2.jpg)`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/90 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Us</span>
          </nav>
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About ZOHR
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p className="text-lg md:text-xl text-gray-800 font-medium">
                  ZOHR for Supplies and Services was established based on the experience, ambition, and determination of skilled Egyptian professionals aiming to add real value to the lifting and marine sectors. The company focuses on the lifting niche, recognizing it as a critical foundation for protecting lives, assets, and project integrity.
                </p>
                
                <p>
                  ZOHR is committed to raising industry standards by enhancing the competence of lifting supervisors and riggers through appropriate training, while also improving the safety and reliability of lifting equipment through professional inspection, testing, and certification services. Our goal is to support project completion with the highest levels of safety, efficiency, and technical compliance, while maintaining competitive pricing and minimizing downtime — without compromising safety.
                </p>
                
                <p>
                  We are dedicated to supplying safe, high-quality products and delivering reliable services at realistic prices. ZOHR is known for its responsive and dependable service, supported by experienced engineers and technical personnel who place safety, quality, and customer satisfaction at the core of everything they do.
                </p>
                
                <p>
                  Our engineering team brings extensive experience in crane inspection, load testing, and the supply and certification of all types of lifting equipment, in accordance with British Standards, international safety standards, and applicable regional regulations.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-2xl bg-blue-900">
                <img
                  src="https://mpleg.com/images/WhatsApp%20Image%202021-10-21%20at%2012_34_17%20PM.jpeg"
                  alt="Marine Petroleum Lifting - When you are sleeping we're working hard and growing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">MPLEG</h2>
            <p className="text-lg text-gray-700 mb-8">
              We are a group of innovative mindset work together to give you a unique experience.
            </p>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="font-semibold min-w-[80px]">Office:</span>
                <span>Apartment no. 2 Building no. 4 Faisal City - Alexandria - Egypt</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[80px]">E-mail:</span>
                <a href="mailto:m.mpl@mpleg.com" className="text-blue-600 hover:underline">
                  m.mpl@mpleg.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[80px]">Call Us:</span>
                <div className="space-y-1">
                  <div>+2 (03) 5372108</div>
                  <div>+2 (012) 29595209</div>
                  <div>+2 (012) 22301036</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
