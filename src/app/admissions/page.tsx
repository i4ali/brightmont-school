import Link from 'next/link';

export default function Admissions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              📋 Admissions
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Begin your child's learning journey at BrightMont Learning Center
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Simple 4-Step Enrollment Process
            </h2>
            <p className="text-lg text-gray-600">
              We've made enrolling your child easy and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Link href="/admissions/discover" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-blue-700 transition-colors">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discover</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a tour to experience our learning environment firsthand and meet our dedicated teachers.
                </p>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                  Schedule Tour →
                </span>
              </div>
            </Link>

            <Link href="/admissions/apply" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-green-700 transition-colors">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Apply</h3>
                <p className="text-gray-600 mb-6">
                  Complete your application and submit required documents for your child's enrollment.
                </p>
                <span className="text-green-600 font-semibold group-hover:text-green-700">
                  Start Application →
                </span>
              </div>
            </Link>

            <Link href="/admissions/schedule" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-purple-700 transition-colors">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule</h3>
                <p className="text-gray-600 mb-6">
                  Meet with our admissions team for application review and program planning.
                </p>
                <span className="text-purple-600 font-semibold group-hover:text-purple-700">
                  Schedule Meeting →
                </span>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-yellow-700 transition-colors">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enroll</h3>
                <p className="text-gray-600 mb-6">
                  Contact us to complete enrollment and welcome to the BrightMont family!
                </p>
                <span className="text-yellow-600 font-semibold group-hover:text-yellow-700">
                  Contact Us →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose BrightMont */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose BrightMont?
            </h2>
            <p className="text-lg text-gray-600">
              Discover what makes our learning center special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Child-Centered Education</h3>
              <p className="text-gray-600 text-sm">Certified teachers using hands-on materials and methods to foster independence and love of learning.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Small Class Sizes</h3>
              <p className="text-gray-600 text-sm">Low student-to-teacher ratios ensure individualized attention and support for each child's unique development.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Nutritious Meals</h3>
              <p className="text-gray-600 text-sm">Fresh, healthy meals prepared daily in our kitchen, accommodating dietary restrictions and preferences.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Extended Hours</h3>
              <p className="text-gray-600 text-sm">Open from 6:30 AM to 6:00 PM, Monday through Friday, to accommodate working families' schedules.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600 text-sm">Our graduates enter elementary school with strong academic foundations, confidence, and exceptional social skills.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Partnership</h3>
              <p className="text-gray-600 text-sm">Strong home-school communication and parent involvement opportunities to support your child's growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Admission Requirements
            </h2>
            <p className="text-lg text-gray-600">
              What you'll need to complete your child's enrollment
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Required Documents:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Completed application form</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Current immunization records</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Recent physical examination form</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Emergency contact information</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Age Requirements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Infant Program:</strong> 6 weeks - 18 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Toddler Program:</strong> 18 months - 3 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Pre-K Program:</strong> 3 - 6 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>School Age:</strong> 6+ years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Summer Camp:</strong> All ages welcome</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Families Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from parents who have chosen BrightMont for their children
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <blockquote className="text-xl text-gray-700 italic mb-4">
                "The teachers and the care they provide cannot be compared to any other daycare or learning center around. Our daughter has flourished in this environment and we couldn't be happier with our choice."
              </blockquote>
              <cite className="text-lg font-semibold text-gray-900">
                - Tara Gonzalez, M. Ed. Dyslexia Specialist
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Child's Learning Journey?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to schedule a tour and learn more about our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Tour
            </Link>
            <a
              href="tel:281-251-3851"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (281) 251-3851
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}