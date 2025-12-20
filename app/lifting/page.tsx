import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LiftingPage() {
  const services = [
    {
      title: 'Offshore Rigging',
      items: ['Lifting Survey', 'Drop Object Survey', 'Rope Access'],
      category: 'Offshore Rigging',
    },
    {
      title: 'Onshore Rigging',
      items: ['Lifting Survey', 'Drop Object Survey', 'Rope Access'],
      category: 'Onshore Rigging',
    },
    {
      title: 'Fork Lift',
      items: ['Load Test', 'Hire'],
      category: 'Fork Lift',
    },
    {
      title: 'Mobile Crane',
      items: ['Load Test', 'Hire'],
      category: 'Mobile Crane',
    },
    {
      title: 'Davit Winch',
      items: ['Load Test', 'Maintenance'],
      category: 'Davit Winch',
    },
    {
      title: 'Overhead Crane',
      items: ['Load Test', 'Maintenance'],
      category: 'Overhead Crane',
    },
    {
      title: 'Lifting Beam',
      items: ['Load Test', 'Hire'],
      category: 'Lifting Beam',
    },
    {
      title: 'DP Anchor Vessel',
      items: ['Load Test', 'Hire'],
      category: 'DP Anchor Vessel',
    },
    {
      title: 'Magnetic Penetration Inspection (MPI)',
      items: ['Non-Destructive Test (NDT)'],
      category: 'Magnetic Penetration Inspection',
    },
    {
      title: 'Dye Penetration Inspection (DPI)',
      items: ['Non-Destructive Test (NDT)'],
      category: 'Dye Penetration Inspection',
    },
    {
      title: 'Ultrasonic Test (UT)',
      items: ['Thickness', 'Shock Wave'],
      category: 'Ultrasonic Test',
    },
    {
      title: 'Load Cell up-to 120Ton',
      items: ['Hire', 'Selling'],
      category: 'Load Cell',
    },
    {
      title: 'Water Bags up-to 35Ton',
      items: ['Hire', 'Selling'],
      category: 'Water Bags',
    },
    {
      title: 'Life Boat Water Bags',
      items: ['Test', 'Hire', 'Selling'],
      category: 'Life Boat Water Bags',
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
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Lifting</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-600 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/portfolio"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View Portfolio →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

