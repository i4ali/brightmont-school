export default function Discover() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
              1
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              🔍 Discover BrightMont
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience our learning environment firsthand with a personalized tour
            </p>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">🎯 Why Schedule a Tour?</h2>

          <p className="text-gray-700 mb-6 text-lg font-medium">
            A tour of BrightMont Learning Center is the best way to understand our educational philosophy and see how our prepared environments support each child's natural development. During your visit, you'll witness the magic of child-centered education in action and discover why families choose our school for their children.
          </p>

          <p className="text-gray-700 mb-8 font-medium">
            Our personalized tours allow you to ask questions, meet our teachers, and observe children engaged in meaningful work. You'll see firsthand how we foster independence, creativity, and a love of learning in our carefully designed classrooms.
          </p>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6">
              ⭐ What You'll Experience During Your Tour
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">👀</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-600">Classroom Observation</h3>
              <p className="text-gray-700 font-medium text-sm">Watch children engaged in self-directed learning with hands-on materials across all curriculum areas.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-green-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-green-600">Meet Our Teachers</h3>
              <p className="text-gray-700 font-medium text-sm">Get to know our certified educators and learn about their approach to guiding children's learning.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-purple-600">Learning Materials</h3>
              <p className="text-gray-700 font-medium text-sm">Explore the specially designed learning materials that make abstract concepts concrete and accessible.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-yellow-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-600">Facilities Tour</h3>
              <p className="text-gray-700 font-medium text-sm">See our prepared environments, outdoor spaces, kitchen, and all the facilities that support your child's development.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-orange-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-orange-600">Program Information</h3>
              <p className="text-gray-700 font-medium text-sm">Learn about our programs for different age groups, schedules, and enrollment procedures.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-pink-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-pink-600">Q&A Session</h3>
              <p className="text-gray-700 font-medium text-sm">Ask questions about our philosophy, curriculum, daily routines, and how we can support your child's unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
              🎓 Choose Your Tour Experience
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-4 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">👤 Individual Tours</h3>
              <p className="text-gray-700 mb-4 font-medium">
                Perfect for families who want personalized attention and the opportunity to ask specific questions about their child's needs.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 font-medium">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>One-on-one time with admissions director</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Customized tour based on your interests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Extended time for questions and discussion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Available Monday-Friday, 9:00 AM - 11:00 AM AND 2:00 PM - 6:00 PM</span>
                </li>
              </ul>
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-sm text-gray-700 font-medium">
                  <strong>Duration:</strong> 45-60 minutes<br/>
                  <strong>Best for:</strong> Families ready to make enrollment decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Tour CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🌟 Ready to Discover BrightMont?
          </h2>
          <p className="text-xl mb-8">
            Schedule your personalized tour today and see why families choose our learning center
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule Your Tour
            </a>
            <a
              href="tel:281-251-3851"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call (281) 251-3851
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/30">
            <p className="text-white/90 font-medium">
              <strong>School Hours:</strong> Monday - Friday, 6:30 AM - 6:00 PM<br/>
              <strong>Tour Times:</strong> Monday - Friday, 9:00 AM - 11:00 AM AND 2:00 PM - 6:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
