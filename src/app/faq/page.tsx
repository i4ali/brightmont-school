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

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-3xl border-4 border-red-200">
              <h3 className="text-lg font-bold text-red-600 mb-2">📖 What curriculum do you use?</h3>
              <p className="text-gray-700 font-medium">We use the research-based Frog Street Curriculum and are a Texas Rising Star certified program. Our curriculum covers six learning domains: Language & Early Literacy, Mathematics, Science & Discovery, Social Studies, Social-Emotional Learning, and Creative Arts.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-3xl border-4 border-indigo-200">
              <h3 className="text-lg font-bold text-indigo-600 mb-2">👩‍🏫 What are your teachers' qualifications?</h3>
              <p className="text-gray-700 font-medium">All our teachers are certified early childhood educators with specialized training in our curriculum. Every staff member is CPR and First Aid certified, has completed background checks, and participates in ongoing professional development.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-3xl border-4 border-teal-200">
              <h3 className="text-lg font-bold text-teal-600 mb-2">📱 How will I know what my child is doing each day?</h3>
              <p className="text-gray-700 font-medium">We provide daily reports through our parent app, including feeding schedules, nap times, activities, and photos. We also have an open-door policy for parent visits and offer regular parent-teacher conferences.</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-3xl border-4 border-rose-200">
              <h3 className="text-lg font-bold text-rose-600 mb-2">🥜 Can you accommodate food allergies or dietary restrictions?</h3>
              <p className="text-gray-700 font-medium">Yes! Our kitchen staff can accommodate allergies, dietary restrictions, and special requests. We're USDA Child and Adult Care Food Program compliant and work with families to ensure every child's nutritional needs are met.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-3xl border-4 border-amber-200">
              <h3 className="text-lg font-bold text-amber-600 mb-2">🚽 How do you handle potty training?</h3>
              <p className="text-gray-700 font-medium">We support toilet learning with a gentle, individualized approach based on each child's readiness. Our toddler teachers work closely with parents to maintain consistency between home and school, and we always handle accidents with patience and encouragement.</p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-3xl border-4 border-violet-200">
              <h3 className="text-lg font-bold text-violet-600 mb-2">✅ Are you a licensed childcare facility?</h3>
              <p className="text-gray-700 font-medium">Yes, we are fully licensed by the Texas Health and Human Services Commission and are a Texas Rising Star certified program, which recognizes high-quality childcare providers that exceed minimum state standards.</p>
            </div>

            <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-3xl border-4 border-lime-200">
              <h3 className="text-lg font-bold text-lime-600 mb-2">🤝 Do you accept childcare assistance programs?</h3>
              <p className="text-gray-700 font-medium">Yes, we are an active Child Care Services (CCS) provider and accept childcare subsidies. Contact our office to discuss eligibility and enrollment with assistance programs.</p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-3xl border-4 border-sky-200">
              <h3 className="text-lg font-bold text-sky-600 mb-2">🎓 Do you offer free Pre-K?</h3>
              <p className="text-gray-700 font-medium">We participate in the Texas Pre-K Partnership program, which provides free Pre-K for eligible 3 and 4-year-olds. Contact us to learn about eligibility requirements and available spots.</p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 p-6 rounded-3xl border-4 border-fuchsia-200">
              <h3 className="text-lg font-bold text-fuchsia-600 mb-2">👀 Can I visit or observe my child during the day?</h3>
              <p className="text-gray-700 font-medium">Absolutely! We have an open-door policy and welcome parent visits anytime. You're always welcome to observe your child in their classroom, join us for lunch, or participate in special activities.</p>
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
