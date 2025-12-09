export const metadata = {
  title: 'FAQ | BrightMont Learning Center',
  description: 'Frequently asked questions about BrightMont Learning Center programs, hours, meals, enrollment, and more.',
};

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              ❓ Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about our programs, enrollment, and services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border-4 border-blue-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">🕐 What are your school hours?</h3>
              <p className="text-gray-700 font-medium">We're open Monday through Friday from 6:30 AM to 6:00 PM to accommodate working families' schedules.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-3xl border-4 border-green-200">
              <h3 className="text-lg font-bold text-green-600 mb-2">🍽️ Do you provide meals?</h3>
              <p className="text-gray-700 font-medium">Yes! We provide nutritious breakfast, lunch, and afternoon snacks prepared fresh in our kitchen daily. We can accommodate dietary restrictions and allergies.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border-4 border-purple-200">
              <h3 className="text-lg font-bold text-purple-600 mb-2">👶 What ages do you serve?</h3>
              <p className="text-gray-700 font-medium">We serve children from 6 weeks to 6 years old in age-appropriate programs, plus after-school care for school-age children and summer camp for all ages.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-3xl border-4 border-orange-200">
              <h3 className="text-lg font-bold text-orange-600 mb-2">🏫 How do I schedule a tour?</h3>
              <p className="text-gray-700 font-medium">You can schedule a tour by calling us at (281) 251-3851, emailing us at info@brightmontschool.com, or using our contact form. Tours are available Monday through Friday.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-3xl border-4 border-pink-200">
              <h3 className="text-lg font-bold text-pink-600 mb-2">💰 Do you offer financial assistance?</h3>
              <p className="text-gray-700 font-medium">Yes, we offer need-based financial assistance and various scholarships. Contact our admissions office to learn more about available options and application procedures.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-3xl border-4 border-cyan-200">
              <h3 className="text-lg font-bold text-cyan-600 mb-2">📝 What is your enrollment process?</h3>
              <p className="text-gray-700 font-medium">Our enrollment process includes scheduling a tour, submitting an application, meeting with our team, and completing enrollment paperwork. Visit our Admissions page for detailed steps.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-3xl border-4 border-yellow-200">
              <h3 className="text-lg font-bold text-yellow-600 mb-2">☀️ Do you offer summer programs?</h3>
              <p className="text-gray-700 font-medium">Yes! Our Summer Camp program offers fun-filled activities combining learning with play, including outdoor adventures, arts and crafts, science experiments, and weekly themed activities.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-3xl border-4 border-green-200">
              <h3 className="text-lg font-bold text-green-600 mb-2">🚗 Do you provide transportation?</h3>
              <p className="text-gray-700 font-medium">We coordinate pick-up from local elementary schools for our School Age program. Contact us for details about transportation options in your area.</p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-3xl border-4 border-purple-200">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Still have questions?</h3>
            <p className="text-gray-700 font-medium mb-6">We're here to help! Contact us and we'll be happy to answer any questions you have.</p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
            >
              📞 Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
