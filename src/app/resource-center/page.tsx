import { Metadata } from 'next';

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
              Resource Center
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Everything you need to support your child's Montessori journey at BrightMont, all in one convenient location.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find what you need quickly with our organized resource categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Forms & Documents</h3>
              <p className="text-sm text-blue-700">Essential forms and enrollment documents</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 12V11m0 0l3-3m-3 3l-3-3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">School Calendar</h3>
              <p className="text-sm text-green-700">Important dates and events</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-yellow-900 mb-2">Parent Handbook</h3>
              <p className="text-sm text-yellow-700">Policies and procedures guide</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-2">Emergency Info</h3>
              <p className="text-sm text-purple-700">Safety procedures and contacts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Forms & Documents Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Forms & Documents
            </h2>
            <p className="text-lg text-gray-600">
              Download and complete the necessary forms for enrollment and ongoing communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Enrollment Application</h3>
                  <p className="text-sm text-gray-500">PDF • 3 pages</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Complete application form for new student enrollment with required information and signatures.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Download Form
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Health Records</h3>
                  <p className="text-sm text-gray-500">PDF • 2 pages</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Medical history, immunization records, and emergency contact information form.
              </p>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Download Form
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Tuition Agreement</h3>
                  <p className="text-sm text-gray-500">PDF • 4 pages</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Financial agreement outlining tuition rates, payment schedules, and policies.
              </p>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                Download Form
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Absence Request</h3>
                  <p className="text-sm text-gray-500">PDF • 1 page</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Form to request planned absences and maintain communication with teachers.
              </p>
              <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
                Download Form
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Emergency Authorization</h3>
                  <p className="text-sm text-gray-500">PDF • 1 page</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Authorization for emergency medical treatment and designated pickup persons.
              </p>
              <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                Download Form
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Parent Communication</h3>
                  <p className="text-sm text-gray-500">PDF • 1 page</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Communication preferences and conference request form for parent-teacher meetings.
              </p>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Download Form
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* School Calendar Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              2024-2025 School Calendar
            </h2>
            <p className="text-lg text-gray-600">
              Important dates, holidays, and school events throughout the academic year.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">AUG</span>
                      <span className="text-lg font-bold">26</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">First Day of School</h4>
                      <p className="text-gray-600">Welcome back celebration and orientation</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">SEP</span>
                      <span className="text-lg font-bold">15</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Parent Education Night</h4>
                      <p className="text-gray-600">Montessori method workshop for families</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">OCT</span>
                      <span className="text-lg font-bold">31</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Harvest Festival</h4>
                      <p className="text-gray-600">Community celebration with families</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">NOV</span>
                      <span className="text-lg font-bold">25</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Thanksgiving Break</h4>
                      <p className="text-gray-600">School closed Nov 25-29</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">School Hours</h3>
                <div className="space-y-2 text-green-800">
                  <p><span className="font-semibold">Monday - Friday:</span> 6:30 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Saturday - Sunday:</span> Closed</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-900 mb-4">Important Holidays</h3>
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
            </div>
          </div>
        </div>
      </div>

      {/* Parent Resources Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Parent Resources
            </h2>
            <p className="text-lg text-gray-600">
              Helpful guides and resources to support your child's Montessori education at home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Parent Handbook</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide covering school policies, procedures, and expectations for the school year.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Download PDF →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Montessori at Home</h3>
              <p className="text-gray-600 mb-4">
                Tips and activities to extend Montessori principles into your home environment and daily routines.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Download Guide →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Child Development Milestones</h3>
              <p className="text-gray-600 mb-4">
                Age-appropriate developmental milestones and what to expect during your child's Montessori journey.
              </p>
              <button className="text-yellow-600 font-semibold hover:text-yellow-700">
                View Milestones →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Additional Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team is here to help with any questions about forms, policies, or your child's experience at BrightMont.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:(281)251-3851"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Call (281) 251-3851
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}