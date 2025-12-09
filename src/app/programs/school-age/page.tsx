export default function SchoolAgeProgram() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">📚</div>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-6">
              📚 School Age Program
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              After-school care with homework support and enriching activities
            </p>
            <div className="bg-orange-100 inline-block px-4 py-2 rounded-full border-2 border-orange-300">
              <span className="text-orange-800 font-bold">Ages: 4+ years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">🎯 Supporting School Success</h2>

          <p className="text-gray-700 mb-6 text-lg font-medium">
            Our School Age program provides a safe, nurturing environment for elementary school children during after-school hours. We understand that school-age children have unique needs - they require support with homework, opportunities for social interaction, and engaging activities that complement their formal education.
          </p>

          <p className="text-gray-700 mb-8 font-medium">
            With a focus on academic support and enrichment, our program helps children succeed in their primary school while providing the care and supervision working families need. Our experienced staff creates a balance between structured learning time and recreational activities that promote physical, social, and emotional development.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6">
              ⭐ Program Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-orange-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-orange-600">Homework Support</h3>
              <p className="text-gray-700 font-medium">Dedicated time and space for completing assignments with teacher guidance and peer support.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">👫</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-600">Social Interaction</h3>
              <p className="text-gray-700 font-medium">Opportunities to build friendships and develop social skills through group activities and free play.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-green-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-green-600">Enrichment Activities</h3>
              <p className="text-gray-700 font-medium">STEM projects, arts and crafts, cooking, and other hands-on learning experiences.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-purple-600">Physical Activities</h3>
              <p className="text-gray-700 font-medium">Outdoor play, sports, and movement activities to promote healthy physical development.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-cyan-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-cyan-600">Safe Environment</h3>
              <p className="text-gray-700 font-medium">Secure, supervised care with trained staff who understand school-age development.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-pink-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-pink-600">Family Communication</h3>
              <p className="text-gray-700 font-medium">Regular updates on your child's activities, progress, and daily experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
              🕐 After-School Schedule
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              A balanced afternoon that supports both academic success and personal growth
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-orange-200">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">3:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-orange-600">Arrival & Snack</h3>
                <p className="text-gray-700 font-medium text-sm">Welcome from school with healthy snack and time to decompress and share about their day.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-200">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">3:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-blue-600">Homework Time</h3>
                <p className="text-gray-700 font-medium text-sm">Dedicated study period with teacher support, quiet environment, and all necessary supplies available.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-green-200">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">4:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-green-600">Outdoor Activities</h3>
                <p className="text-gray-700 font-medium text-sm">Physical play, sports, and fresh air activities to help children stay active and healthy.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-200">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">5:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-purple-600">Enrichment Activities</h3>
                <p className="text-gray-700 font-medium text-sm">Rotating activities including STEM projects, arts and crafts, cooking, and special interest clubs.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-pink-200">
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">5:45</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-pink-600">Free Play & Pick-up</h3>
                <p className="text-gray-700 font-medium text-sm">Unstructured play time, board games, reading, and preparation for parent pick-up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">📝 Homework Support</h3>
              <p className="text-gray-700 mb-4 font-medium">
                We provide comprehensive homework support to help your child succeed academically while developing good study habits and organizational skills.
              </p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Quiet, organized study spaces with proper lighting and supplies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Teacher assistance with difficult concepts and assignments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Help with organization and time management skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Communication with parents about homework completion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Peer support and collaborative learning opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">🎨 Enrichment Activities</h3>
              <p className="text-gray-700 mb-4 font-medium">
                Beyond homework support, we offer diverse enrichment activities that spark curiosity and develop new skills and interests.
              </p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>STEM projects and science experiments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Arts and crafts with seasonal themes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Cooking and nutrition education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Board games and logic puzzles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Reading clubs and storytelling activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation & Logistics */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
              🚗 Convenient Care for Working Families
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              We understand the challenges of coordinating school schedules with work schedules
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl border-4 border-orange-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded-2xl">
                <h4 className="font-bold text-orange-600 mb-4">📋 Program Details:</h4>
                <ul className="text-sm text-gray-700 space-y-2 font-medium">
                  <li>• Monday through Friday after-school care</li>
                  <li>• Hours: 3:00 PM - 6:00 PM</li>
                  <li>• Holiday and teacher work day care available</li>
                  <li>• Summer program extension available</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <h4 className="font-bold text-green-600 mb-4">🚌 Transportation:</h4>
                <ul className="text-sm text-gray-700 space-y-2 font-medium">
                  <li>• Pick-up coordination with local elementary schools</li>
                  <li>• Safe transportation in licensed vehicles</li>
                  <li>• Trained drivers with background checks</li>
                  <li>• Communication with schools for early dismissals</li>
                  <li>• Weather-related schedule adjustments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
