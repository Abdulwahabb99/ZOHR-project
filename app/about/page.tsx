import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
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
            <span className="text-gray-900">About Us</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
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
                  ZOHR for Supplies and Services was established based on the
                  experience, ambition, and determination of skilled Egyptian
                  professionals aiming to add real value to the lifting and
                  marine sectors. The company focuses on the lifting niche,
                  recognizing it as a critical foundation for protecting lives,
                  assets, and project integrity.
                </p>

                <p>
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

                <p>
                  We are dedicated to supplying safe, high-quality products and
                  delivering reliable services at realistic prices. ZOHR is
                  known for its responsive and dependable service, supported by
                  experienced engineers and technical personnel who place
                  safety, quality, and customer satisfaction at the core of
                  everything they do.
                </p>

                <p>
                  Our engineering team brings extensive experience in crane
                  inspection, load testing, and the supply and certification of
                  all types of lifting equipment, in accordance with British
                  Standards, international safety standards, and applicable
                  regional regulations.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative w-full aspect-[3/3] rounded-lg overflow-hidden shadow-2xl bg-blue-900">
                <img
                  src="/aboutUs.jpeg"
                  alt="Marine Petroleum Lifting - When you are sleeping we're working hard and growing"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ZOHR</h2>
            <p className="text-lg text-gray-700 mb-8">
              ZOHR for Supplies and Services is committed to supporting safe
              working environments by identifying defects at an early stage,
              before they develop into serious failures or incidents. All
              inspections and services are carried out in accordance with
              applicable regulations, international standards, and industry best
              practices. We maintain a user-friendly digital database system
              that provides our clients with instant access to inspection
              records, certification, and test reports anytime and from
              anywhere, ensuring full transparency and traceability. Our
              experienced and qualified team is competent to inspect, test, and
              certify a wide range of lifting equipment, delivering reliable and
              efficient services tailored to client needs.{" "}
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="font-semibold min-w-[80px]">Office:</span>
                <span>
                  AL-HABIB TOWER, 5TH FLOOR, 2 DAR EL-SALAM STREET, ASAFRA,
                  SECOND MONTAZAH, ALEXANDRIA, EGYPT
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[80px]">E-mail:</span>
                <a
                  href="mailto:technical.support@zohr-co.com"
                  className="text-blue-600 hover:underline"
                >
                  technical.support@zohr-co.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[80px]">Call Us:</span>
                <div className="space-y-1">
                  <div>+2 (015) 15807021</div>
                  <div>+2 (015) 15807026</div>
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
