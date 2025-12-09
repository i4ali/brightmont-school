import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Parent Resources | Resource Center | BrightMont Learning Center',
  description: 'Helpful guides and resources to support your child\'s education at home including parent handbook and development milestones.',
};

export default function ParentResources() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              📚 Parent Resources
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Helpful guides and resources to support your child's education at home.
            </p>
          </div>
        </div>
      </div>

      {/* Local Pediatric Offices */}
      <div className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              🏥 Local Pediatric Offices
            </h2>
            <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
              Trusted pediatric care providers in the Spring, Texas area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">🩺 Texas Children's Pediatric</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:281-350-7040" className="text-blue-600 hover:text-blue-700">(281) 350-7040</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 3515 Rayford Road, Spring, TX 77386</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">🏥 Northwood Pediatric Center</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:281-296-7770" className="text-green-600 hover:text-green-700">(281) 296-7770</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 2616 FM-2920 Unit G, Spring, TX 77388</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-purple-200">
              <h3 className="text-xl font-bold text-purple-600 mb-4">🦷 Pediatric Dental</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:281-376-2706" className="text-purple-600 hover:text-purple-700">(281) 376-2706</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 4542 Spring Stubner Road, Spring, TX 77389</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-orange-200">
              <h3 className="text-xl font-bold text-orange-600 mb-4">🦷 Champions Pediatric Dental</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:832-761-7428" className="text-orange-600 hover:text-orange-700">(832) 761-7428</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 19077 Champion Forest Dr, Spring, TX 77379</p>
            </div>
          </div>
        </div>
      </div>

      {/* Family Counselor */}
      <div className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
              🤝 Family Counselor
            </h2>
            <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
              Professional family counseling services in the local area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">🌱 Family Counseling Center of Cypress</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:832-515-7301" className="text-green-600 hover:text-green-700">(832) 515-7301</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 11613 Spring Cypress Road, Unit B, Tomball, TX 77377</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-teal-200">
              <h3 className="text-xl font-bold text-teal-600 mb-4">🌳 The Woodlands Family Counseling Center</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:936-463-8185" className="text-teal-600 hover:text-teal-700">(936) 463-8185</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 33300 Egypt Lane, Magnolia, TX 77354</p>
            </div>
          </div>
        </div>
      </div>

      {/* Food Banks */}
      <div className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              🍎 Food Banks
            </h2>
            <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
              Community food assistance resources for families in need.
            </p>
          </div>

          <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-orange-200">
              <h3 className="text-xl font-bold text-orange-600 mb-4">🏢 Houston Food Bank North Branch</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:713-223-3700" className="text-orange-600 hover:text-orange-700">(713) 223-3700</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 146 Knobcrest Dr, Houston, TX 77060</p>
            </div>
          </div>
        </div>
      </div>

      {/* Area Parks */}
      <div className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6">
              🌳 Area Parks
            </h2>
            <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
              Beautiful local parks perfect for family outings and outdoor activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-cyan-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-4">🌲 Meyer Park</h3>
              <p className="text-gray-700"><strong>Address:</strong> 7700 Cypresswood Drive, Spring, TX 77379</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">🚶‍♀️ Cypresswood Trails</h3>
              <p className="text-gray-700"><strong>Address:</strong> 6727 Cypresswood Drive, Spring, TX 77379</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-indigo-200">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">🏞️ Herman Little Park</h3>
              <p className="text-gray-700"><strong>Address:</strong> 18642 Casper Drive, Spring, TX 77373</p>
            </div>
          </div>
        </div>
      </div>

      {/* Area Emergencies */}
      <div className="py-16 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              🚨 Area Emergencies
            </h2>
            <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
              Important emergency contact numbers for immediate assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-red-200">
              <h3 className="text-xl font-bold text-red-600 mb-4">🚓 Police</h3>
              <p className="text-gray-700"><strong>Number:</strong> <a href="tel:911" className="text-red-600 hover:text-red-700 text-2xl font-bold">911</a></p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-orange-200">
              <h3 className="text-xl font-bold text-orange-600 mb-4">🚒 Fire Department</h3>
              <p className="text-gray-700"><strong>Number:</strong> <a href="tel:281-376-4449" className="text-orange-600 hover:text-orange-700">(281) 376-4449</a></p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-pink-200">
              <h3 className="text-xl font-bold text-pink-600 mb-4">🏛️ DFPS</h3>
              <p className="text-gray-700"><strong>Number:</strong> <a href="tel:936-442-2810" className="text-pink-600 hover:text-pink-700">(936) 442-2810</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Elementary Schools */}
      <div className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
              🏫 Local Elementary Schools
            </h2>
            <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
              Nearby elementary schools for continuing your child's educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-indigo-200">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">🎒 Benfer Elementary School</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:832-484-6000" className="text-indigo-600 hover:text-indigo-700">(832) 484-6000</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 18027-B Kuykendahl Road, Spring, TX 77379</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-purple-200">
              <h3 className="text-xl font-bold text-purple-600 mb-4">📚 Roth Elementary School</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:832-484-6600" className="text-purple-600 hover:text-purple-700">(832) 484-6600</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 21623 Castlemont Klein, TX 77388</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-violet-200">
              <h3 className="text-xl font-bold text-violet-600 mb-4">🌟 Kuehnle Elementary School</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:832-484-6650" className="text-violet-600 hover:text-violet-700">(832) 484-6650</a></p>
              <p className="text-gray-700"><strong>Address:</strong> 5510 Winding Ridge Road, Klein, TX 77379</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🤔 Have Questions?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Our team is here to support you with resources, answer questions, and help you make the most of your child's experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl"
              >
                🌟 Contact Us
              </Link>
              <a
                href="tel:(281)251-3851"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-colors"
              >
                📞 Call (281) 251-3851
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}