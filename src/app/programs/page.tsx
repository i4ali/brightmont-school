import Link from 'next/link';

export default function Programs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              🎓 Our Programs
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Age-appropriate educational programs designed to meet each child's developmental needs from 6 weeks to 6 years
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Infant Program */}
            <Link href="/programs/infant" className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden border-4 border-blue-200">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-6xl">👶</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-blue-600">Infant Program</h2>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">6 weeks - 18 months</span>
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  A nurturing environment focused on sensory development, basic motor skills, and establishing trust and security.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6 font-medium">
                  <li>• Individual feeding and sleeping schedules</li>
                  <li>• Sensory exploration activities</li>
                  <li>• Language development through songs and stories</li>
                  <li>• Safe, clean environment with age-appropriate toys</li>
                </ul>
                <span className="text-blue-600 font-bold group-hover:text-blue-700">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Toddler Program */}
            <Link href="/programs/toddler" className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden border-4 border-green-200">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-6xl">🖍️</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-green-600">Toddler Program</h2>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">18 months - 3 years</span>
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  Fostering independence and language development through structured activities and social interaction.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6 font-medium">
                  <li>• Toilet learning support</li>
                  <li>• Language explosion activities</li>
                  <li>• Practical life skills</li>
                  <li>• Social skills and grace and courtesy</li>
                </ul>
                <span className="text-green-600 font-bold group-hover:text-green-700">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Primary Program */}
            <Link href="/programs/primary" className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden border-4 border-purple-200">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-6xl">✏️</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-purple-600">Pre-K Program</h2>
                  <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">3 - 5 years</span>
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  Academic readiness combined with social and emotional growth in a mixed-age classroom environment.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6 font-medium">
                  <li>• Mathematics and language arts</li>
                  <li>• Science and cultural studies</li>
                  <li>• Creative arts and music</li>
                  <li>• Leadership development</li>
                </ul>
                <span className="text-purple-600 font-bold group-hover:text-purple-700">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* School Age Program */}
            <Link href="/programs/school-age" className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden border-4 border-orange-200">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-6xl">📚</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-orange-600">School Age Program</h2>
                  <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">4+ years</span>
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  After-school care with homework support and enrichment activities for school-age children.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6 font-medium">
                  <li>• Homework assistance</li>
                  <li>• Enrichment activities</li>
                  <li>• Physical activities and sports</li>
                  <li>• Social interaction with peers</li>
                </ul>
                <span className="text-orange-600 font-bold group-hover:text-orange-700">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Summer Camp */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/programs/summer-camp" className="group block bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden border-4 border-yellow-200">
            <div className="lg:flex">
              <div className="lg:w-1/3 h-64 lg:h-auto bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <div className="text-8xl">🎨</div>
              </div>
              <div className="lg:w-2/3 p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-yellow-600">🎨 Summer Camp Program</h2>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">All Ages</span>
                </div>
                <p className="text-gray-700 mb-6 text-lg font-medium">
                  Fun-filled summer activities that combine learning with play, featuring outdoor exploration, arts and crafts, water play, and special themed weeks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <ul className="text-sm text-gray-600 space-y-1 font-medium">
                    <li>• Outdoor nature exploration</li>
                    <li>• Arts and crafts projects</li>
                    <li>• Water play activities</li>
                  </ul>
                  <ul className="text-sm text-gray-600 space-y-1 font-medium">
                    <li>• Science experiments</li>
                    <li>• Special themed weeks</li>
                    <li>• Field trips and guest visitors</li>
                  </ul>
                </div>
                <span className="text-yellow-600 font-bold group-hover:text-yellow-700">
                  Discover Summer Fun →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Daily Schedule Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
              🕐 A Day at BrightMont
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
              Our daily routine is designed to provide structure while allowing flexibility for each child's individual needs
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center bg-white p-4 rounded-3xl shadow-lg border-4 border-blue-200">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">7:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-blue-600">Arrival & Free Choice</h3>
                  <p className="text-gray-700 font-medium text-sm">Children choose from various activities and materials</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-4 rounded-3xl shadow-lg border-4 border-green-200">
                <div className="bg-gradient-to-br from-green-400 to-green-500 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">9:30</span>
                </div>
                <div>
                  <h3 className="font-bold text-green-600">Circle Time & Lessons</h3>
                  <p className="text-gray-700 font-medium text-sm">Group activities, songs, and individual lessons</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-4 rounded-3xl shadow-lg border-4 border-purple-200">
                <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-sm">11:30</span>
                </div>
                <div>
                  <h3 className="font-bold text-purple-600">Outdoor Play</h3>
                  <p className="text-gray-700 font-medium text-sm">Fresh air and physical activity in our playground</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-4 rounded-3xl shadow-lg border-4 border-orange-200">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-sm">12:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-orange-600">Lunch & Rest</h3>
                  <p className="text-gray-700 font-medium text-sm">Nutritious meals and quiet time for younger children</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-4 rounded-3xl shadow-lg border-4 border-pink-200">
                <div className="bg-gradient-to-br from-pink-400 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">2:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-pink-600">Afternoon Activities</h3>
                  <p className="text-gray-700 font-medium text-sm">Continued learning, creative arts, and enrichment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
