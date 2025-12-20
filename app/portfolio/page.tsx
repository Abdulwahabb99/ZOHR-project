import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PortfolioPage() {
  const portfolioCategories = [
    {
      title: 'Lifting Supply',
      items: [
        'Life Survey Benefiz',
        'General Project with Siemens at Burllus Power Plant',
        'Kahromika',
        'ROV Load Test',
        'Re-Socketing Off Shore at Bourbon',
      ],
    },
    {
      title: 'Lifting Equipment and Tools Testing',
      items: [
        'Load Test for Arab Contractors',
        'Lifting Survey for Cargil',
        'Re-Socketing Off Shore at Bourbon',
        'Load Test Maersk Discoverer',
        'Lifting Plan for The Egyptian Armed Forces Stadium at The New Administrative Capital',
      ],
    },
    {
      title: 'APLO',
      items: [
        'Lifeboat Inspection at AAST',
        'Re-Socketing Off Shore at Bourbon',
        'Lifting Plan for The Egyptian Armed Forces Stadium at The New Administrative Capital',
        'ROV Load Test',
        'Load Test for Arab Contractors',
      ],
    },
    {
      title: 'Crane Operator Information',
      items: [
        'Crane Certification',
        'Fork Lift Certification',
        'Training Programs',
        'Safety Compliance',
      ],
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
            <span className="text-gray-900">Portfolio</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Portfolio</h1>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white p-4 rounded border border-gray-200 hover:border-blue-500 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{item}</span>
                      <span className="text-blue-600">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Grid - Image Placeholders */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Lifeboat Inspection at AAST',
              'Re-Socketing Off Shore at Bourbon',
              'Lifting Plan for The Egyptian Armed Forces Stadium',
              'ROV Load Test',
              'Load Test for Arab Contractors',
              'Lifting Survey for Cargil',
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg aspect-video flex items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="text-center p-4">
                  <div className="text-4xl mb-2 opacity-50 group-hover:opacity-70 transition-opacity">
                    🏗️
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

