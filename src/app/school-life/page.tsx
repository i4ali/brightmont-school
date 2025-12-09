import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Life | BrightMont Learning Center',
  description: 'Discover daily routines, enrichment activities, and the vibrant community life at BrightMont Learning Center in Spring, Texas.',
};

export default function SchoolLife() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              🏫 School Life at BrightMont
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the daily rhythms, enriching activities, and vibrant community that make learning at BrightMont truly special.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              🕐 Our Daily Rhythm
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each day at BrightMont follows a carefully structured routine that balances focused learning, creative exploration, and peaceful restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-4 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">☀️ Morning Program</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    6:30
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-blue-900">Arrival & Breakfast</h4>
                    <p className="text-blue-700">Gentle transition into the school day with nutritious breakfast options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    8:00
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-blue-900">Morning Work Cycle</h4>
                    <p className="text-blue-700">Uninterrupted 3-hour work period for deep concentration and learning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                    10:30
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-blue-900">Outdoor Play</h4>
                    <p className="text-blue-700">Nature exploration and gross motor development in our garden</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    11:30
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-blue-900">Lunch & Rest</h4>
                    <p className="text-blue-700">Nutritious lunch followed by quiet time or nap for restoration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-3xl p-8 border-4 border-green-200">
              <h3 className="text-2xl font-bold text-green-600 mb-6">🌤️ Afternoon Program</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    1:00
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-green-900">Creative Arts</h4>
                    <p className="text-green-700">Art, music, and creative expression activities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    2:30
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-green-900">Practical Life</h4>
                    <p className="text-green-700">Real-world skills development and community contribution</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                    3:30
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-green-900">Outdoor Exploration</h4>
                    <p className="text-green-700">Garden work, nature studies, and physical activities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    5:00
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-green-900">Reflection & Departure</h4>
                    <p className="text-green-700">Community circle time and peaceful transition home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Activities Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-4">
              ⭐ Enrichment Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core curriculum, we offer specialized activities that nurture creativity, cultural awareness, and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">🎵 Music & Movement</h3>
              <p className="text-gray-600 mb-4">
                Weekly music classes featuring instruments, singing, and rhythmic movement to develop auditory skills and self-expression.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Classical music appreciation</li>
                <li>• Simple instrument instruction</li>
                <li>• Cultural songs and dances</li>
                <li>• Rhythm and coordination activities</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-green-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-4">🌍 Cultural Studies</h3>
              <p className="text-gray-600 mb-4">
                Exploration of world cultures, geography, and traditions through hands-on activities and authentic materials.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Country studies and flag work</li>
                <li>• Cultural celebrations and festivals</li>
                <li>• Traditional crafts and cooking</li>
                <li>• Language exposure and appreciation</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-orange-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-4">🔬 Nature & Science</h3>
              <p className="text-gray-600 mb-4">
                Hands-on exploration of the natural world through gardening, experiments, and outdoor discovery.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Organic garden maintenance</li>
                <li>• Weather observation and tracking</li>
                <li>• Simple science experiments</li>
                <li>• Animal and plant life studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Life Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
              💜 Community & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At BrightMont, we foster a strong sense of community where children learn respect, responsibility, and the joy of contributing to something greater than themselves.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border-4 border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">👥 Mixed-Age Learning</h3>
                  <p className="text-gray-700 font-medium">
                    Our multi-age classrooms allow older children to mentor younger ones, developing leadership skills and empathy while reinforcing their own learning through teaching.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-3xl border-4 border-green-200">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">☮️ Peace & Conflict Resolution</h3>
                  <p className="text-gray-700 font-medium">
                    Children learn to resolve conflicts independently through our peace curriculum, developing emotional intelligence and communication skills that serve them throughout life.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-3xl border-4 border-orange-200">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">🌱 Environmental Stewardship</h3>
                  <p className="text-gray-700 font-medium">
                    Through daily care of our classroom and outdoor environments, children develop a deep connection to nature and responsibility for the world around them.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 border-4 border-purple-200">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                  <span className="text-6xl">💖</span>
                </div>
                <h4 className="text-2xl font-bold text-purple-700 mb-4">⭐ Our Core Values</h4>
                <div className="space-y-3">
                  <p className="font-bold text-purple-600 bg-white rounded-full py-2 px-4">🤝 Respect for Self & Others</p>
                  <p className="font-bold text-pink-600 bg-white rounded-full py-2 px-4">📚 Love of Learning</p>
                  <p className="font-bold text-blue-600 bg-white rounded-full py-2 px-4">💪 Independence & Confidence</p>
                  <p className="font-bold text-green-600 bg-white rounded-full py-2 px-4">🌍 Care for the Environment</p>
                  <p className="font-bold text-orange-600 bg-white rounded-full py-2 px-4">✨ Joy in Discovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🌟 Experience Our Community
          </h2>
          <p className="text-xl mb-8">
            Schedule a visit to see our daily rhythms in action and discover how your child can thrive in our nurturing learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions/discover"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule a Tour
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}