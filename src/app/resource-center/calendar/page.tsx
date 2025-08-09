import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2024-2025 Calendar | Resource Center | BrightMont Montessori Academy',
  description: 'Important dates, holidays, and school events throughout the 2024-2025 academic year at BrightMont Montessori Academy.',
};

export default function Calendar() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              📅 2024-2025 School Calendar
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Important dates, holidays, and school events throughout the academic year.
            </p>
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">🎉 Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">AUG</span>
                      <span className="text-lg font-bold">26</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">First Day of School</h4>
                      <p className="text-gray-600">Welcome back celebration and orientation</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">SEP</span>
                      <span className="text-lg font-bold">15</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Parent Education Night</h4>
                      <p className="text-gray-600">Montessori method workshop for families</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">OCT</span>
                      <span className="text-lg font-bold">31</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Harvest Festival</h4>
                      <p className="text-gray-600">Community celebration with families</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">NOV</span>
                      <span className="text-lg font-bold">25</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Thanksgiving Break</h4>
                      <p className="text-gray-600">School closed Nov 25-29</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">DEC</span>
                      <span className="text-lg font-bold">23</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Winter Break Begins</h4>
                      <p className="text-gray-600">School closed Dec 23 - Jan 3</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">MAR</span>
                      <span className="text-lg font-bold">10</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Spring Break</h4>
                      <p className="text-gray-600">School closed March 10-14</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4">🕐 School Hours</h3>
                <div className="space-y-2 text-green-800">
                  <p><span className="font-semibold">Monday - Friday:</span> 6:30 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Saturday - Sunday:</span> Closed</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-yellow-900 mb-4">🎯 Important Holidays</h3>
                <div className="space-y-2 text-yellow-800 text-sm">
                  <p>• Labor Day: September 2</p>
                  <p>• Thanksgiving: Nov 25-29</p>
                  <p>• Winter Break: Dec 23 - Jan 3</p>
                  <p>• Martin Luther King Jr: Jan 20</p>
                  <p>• Presidents Day: Feb 17</p>
                  <p>• Spring Break: March 10-14</p>
                  <p>• Memorial Day: May 26</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-4">📋 Important Notes</h3>
                <div className="space-y-2 text-purple-800 text-sm">
                  <p>• Tuition is due on the 1st of each month</p>
                  <p>• Parent-teacher conferences scheduled twice yearly</p>
                  <p>• Field trips announced monthly</p>
                  <p>• Emergency closures communicated via app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-green-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📞 Questions About School Events?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Contact our office for more information about upcoming events or to request calendar updates.
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
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-colors"
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