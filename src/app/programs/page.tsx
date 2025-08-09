import Link from 'next/link';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Age-appropriate Montessori programs designed to meet each child's developmental needs from 6 weeks to 6 years
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Infant Program */}
            <Link href="/programs/infant" className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-6xl">👶</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-blue-600">Infant Program</h2>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">6 weeks - 18 months</span>
                </div>
                <p className="text-gray-600 mb-4">
                  A nurturing environment focused on sensory development, basic motor skills, and establishing trust and security.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-6">
                  <li>• Individual feeding and sleeping schedules</li>
                  <li>• Sensory exploration activities</li>
                  <li>• Language development through songs and stories</li>
                  <li>• Safe, clean environment with age-appropriate toys</li>
                </ul>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Toddler Program */}
            <Link href="/programs/toddler" className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-6xl">🧸</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-green-600">Toddler Program</h2>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">18 months - 3 years</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Fostering independence and language development through structured activities and social interaction.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-6">
                  <li>• Toilet learning support</li>
                  <li>• Language explosion activities</li>
                  <li>• Practical life skills</li>
                  <li>• Social skills and grace and courtesy</li>
                </ul>
                <span className="text-green-600 font-semibold group-hover:text-green-700">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Primary Program */}
            <Link href="/programs/primary" className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-6xl">🎒</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-purple-600">Pre-K Program</h2>
                  <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">3 - 6 years</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Academic readiness combined with social and emotional growth in a mixed-age classroom environment.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-6">
                  <li>• Mathematics and language arts</li>
                  <li>• Science and cultural studies</li>
                  <li>• Creative arts and music</li>
                  <li>• Leadership development</li>
                </ul>
                <span className="text-purple-600 font-semibold group-hover:text-purple-700">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* School Age Program */}
            <Link href="/programs/school-age" className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-6xl">📚</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-orange-600">School Age Program</h2>
                  <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full">6+ years</span>
                </div>
                <p className="text-gray-600 mb-4">
                  After-school care with homework support and enrichment activities for school-age children.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-6">
                  <li>• Homework assistance</li>
                  <li>• Enrichment activities</li>
                  <li>• Physical activities and sports</li>
                  <li>• Social interaction with peers</li>
                </ul>
                <span className="text-orange-600 font-semibold group-hover:text-orange-700">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Summer Camp */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/programs/summer-camp" className="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
            <div className="lg:flex">
              <div className="lg:w-1/3 h-64 lg:h-auto bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <div className="text-8xl">☀️</div>
              </div>
              <div className="lg:w-2/3 p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-yellow-600">Summer Camp Program</h2>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">All Ages</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Fun-filled summer activities that combine learning with play, featuring outdoor exploration, arts and crafts, water play, and special themed weeks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Outdoor nature exploration</li>
                    <li>• Arts and crafts projects</li>
                    <li>• Water play activities</li>
                  </ul>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Science experiments</li>
                    <li>• Special themed weeks</li>
                    <li>• Field trips and guest visitors</li>
                  </ul>
                </div>
                <span className="text-yellow-600 font-semibold group-hover:text-yellow-700">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A Day at BrightMont
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our daily routine is designed to provide structure while allowing flexibility for each child's individual needs
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-semibold">7:00</span>
                </div>
                <div>
                  <h3 className="font-semibold">Arrival & Free Choice</h3>
                  <p className="text-gray-600 text-sm">Children choose from various activities and materials</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-green-600 font-semibold">9:30</span>
                </div>
                <div>
                  <h3 className="font-semibold">Circle Time & Lessons</h3>
                  <p className="text-gray-600 text-sm">Group activities, songs, and individual lessons</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-semibold">11:30</span>
                </div>
                <div>
                  <h3 className="font-semibold">Outdoor Play</h3>
                  <p className="text-gray-600 text-sm">Fresh air and physical activity in our playground</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-yellow-600 font-semibold">12:00</span>
                </div>
                <div>
                  <h3 className="font-semibold">Lunch & Rest</h3>
                  <p className="text-gray-600 text-sm">Nutritious meals and quiet time for younger children</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-red-600 font-semibold">2:00</span>
                </div>
                <div>
                  <h3 className="font-semibold">Afternoon Activities</h3>
                  <p className="text-gray-600 text-sm">Continued learning, creative arts, and enrichment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}