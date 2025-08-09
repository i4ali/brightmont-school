import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resource Center | BrightMont Montessori Academy',
  description: 'Access parent resources, forms, school calendar, policies, and helpful information for BrightMont Montessori Academy families.',
};

export default function ResourceCenter() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              📚 Resource Center
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Everything you need to support your child's Montessori journey at BrightMont, all in one convenient location.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              🚀 Quick Access
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Find what you need quickly with our organized resource categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resource-center/nutritious-meals" className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105 block">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🍽️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Nutritious Meals</h3>
              <p className="text-green-100 font-medium">Family-style dining with fresh, healthy meals prepared daily</p>
            </Link>

            <Link href="/resource-center/parent-resources" className="bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105 block">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Parent Resources</h3>
              <p className="text-purple-100 font-medium">Local community resources and support guides</p>
            </Link>

            <Link href="/contact" className="bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105 block">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🚨</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Emergency Info</h3>
              <p className="text-orange-100 font-medium">Safety procedures and contact information</p>
            </Link>
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📞 Need Additional Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team is here to help with any questions about forms, policies, or your child's experience at BrightMont.
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
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-colors"
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