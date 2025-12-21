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
                Overview :
              </h2>
              
              <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  Dedicated to offering safe, quality products at realistic prices, Safety Services Group is well known for its fast, reliable services, backed by highly experienced professionals who care, with a cosmopolitan professional staff.
                </p>
                
                <p>
                  The company engineers have years of experience in Crane Testing, Supply and Certification of all kinds of Lifting Equipment in accordance with British stander and the UAE Federal Law and International Safety standards.
                </p>
                
                <p>
                  The group has now expanded its operations with a wide range of quality products and services to meet the vast requirements of Marine, Lifting, Oil and Gas Industries across the Europe, Middle East and Asian countries.
                </p>
                
                <p>
                  The strict adherence of the group to the safety of the equipment tested or supplied is met with the In-house 100 Tone Tensile Test Bed for carrying out Proof Load Testing and Loose Lifting Equipment Testing facilities.
                </p>
                
                <p>
                  A total area of 700 sq. feet is currently being fully utilized by the Head Office in free zone in Damietta.
                </p>
                
                <p>
                  The company is the first in the Middle East to have the manufacturing facility for slings with Sockets. The other specialty products include Chain Slings and Fittings, Shackles, Anchors, Anchor Chain and accessories, Cargo and Safety Nets, Pilot Ladders, Synthetic Ropes, Mooring Tails, Fire Extinguishers, Breathing Apparatus and other related Safety Equipment. Various training programmers offered by the group includes First Aid, H2S, Fire Fighting, HSE Awareness, Site Safety Awareness, Desert Driving, Site Risk Assessment, Crane and Fork Lift Operation, Slinging & Rigging etc. are conducted by qualified multilingual Professionals.
                </p>
                
                <p>
                  The Group's Marine Electronic Division is providing service & supply of quality products supported by expert personnel.
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
