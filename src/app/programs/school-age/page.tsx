export default function SchoolAgeProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">📚</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              School Age Program
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              After-school care with homework support and enriching activities
            </p>
            <div className="bg-orange-100 inline-block px-4 py-2 rounded-full">
              <span className="text-orange-800 font-semibold">Ages: 6+ years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Supporting School Success</h2>
            
            <p className="text-gray-700 mb-6">
              Our School Age program provides a safe, nurturing environment for elementary school children during after-school hours. We understand that school-age children have unique needs - they require support with homework, opportunities for social interaction, and engaging activities that complement their formal education.
            </p>

            <p className="text-gray-700 mb-8">
              With a focus on academic support and enrichment, our program helps children succeed in their primary school while providing the care and supervision working families need. Our experienced staff creates a balance between structured learning time and recreational activities that promote physical, social, and emotional development.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Program Features
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Homework Support</h3>
              <p className="text-gray-600 text-sm">Dedicated time and space for completing assignments with teacher guidance and peer support.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Social Interaction</h3>
              <p className="text-gray-600 text-sm">Opportunities to build friendships and develop social skills through group activities and free play.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enrichment Activities</h3>
              <p className="text-gray-600 text-sm">STEM projects, arts and crafts, cooking, and other hands-on learning experiences.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Physical Activities</h3>
              <p className="text-gray-600 text-sm">Outdoor play, sports, and movement activities to promote healthy physical development.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Safe Environment</h3>
              <p className="text-gray-600 text-sm">Secure, supervised care with trained staff who understand school-age development.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Family Communication</h3>
              <p className="text-gray-600 text-sm">Regular updates on your child's activities, progress, and daily experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              After-School Schedule
            </h2>
            <p className="text-lg text-gray-600">
              A balanced afternoon that supports both academic success and personal growth
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-orange-600 font-bold text-sm">3:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Arrival & Snack</h3>
                <p className="text-gray-600 text-sm">Welcome from school with healthy snack and time to decompress and share about their day.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">3:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Homework Time</h3>
                <p className="text-gray-600 text-sm">Dedicated study period with teacher support, quiet environment, and all necessary supplies available.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">4:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Outdoor Activities</h3>
                <p className="text-gray-600 text-sm">Physical play, sports, and fresh air activities to help children stay active and healthy.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-purple-600 font-bold text-sm">5:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Enrichment Activities</h3>
                <p className="text-gray-600 text-sm">Rotating activities including STEM projects, arts and crafts, cooking, and special interest clubs.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-yellow-600 font-bold text-sm">5:45</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Free Play & Pick-up</h3>
                <p className="text-gray-600 text-sm">Unstructured play time, board games, reading, and preparation for parent pick-up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Homework Support</h3>
              <p className="text-gray-700 mb-4">
                We provide comprehensive homework support to help your child succeed academically while developing good study habits and organizational skills.
              </p>
              <ul className="space-y-3 text-gray-600">
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

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Enrichment Activities</h3>
              <p className="text-gray-700 mb-4">
                Beyond homework support, we offer diverse enrichment activities that spark curiosity and develop new skills and interests.
              </p>
              <ul className="space-y-3 text-gray-600">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Convenient Care for Working Families
            </h2>
            <p className="text-lg text-gray-600">
              We understand the challenges of coordinating school schedules with work schedules
            </p>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Program Details:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Monday through Friday after-school care</li>
                  <li>• Hours: 3:00 PM - 6:00 PM</li>
                  <li>• Holiday and teacher work day care available</li>
                  <li>• Summer program extension available</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Transportation:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
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

      {/* Age Groups Served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Age-Appropriate Programming
            </h2>
            <p className="text-lg text-gray-600">
              Activities and support tailored to different developmental stages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">Kindergarten - 2nd Grade</h3>
              <p className="text-gray-600 text-sm mb-4">Ages 5-7</p>
              <ul className="text-left text-sm text-gray-600 space-y-1">
                <li>• Basic homework support and organization</li>
                <li>• Fine motor skill development activities</li>
                <li>• Beginning social skill development</li>
                <li>• Structured play and learning games</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">3rd - 5th Grade</h3>
              <p className="text-gray-600 text-sm mb-4">Ages 8-10</p>
              <ul className="text-left text-sm text-gray-600 space-y-1">
                <li>• Independent homework completion</li>
                <li>• Research and project assistance</li>
                <li>• Leadership opportunities</li>
                <li>• Complex problem-solving activities</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Middle School</h3>
              <p className="text-gray-600 text-sm mb-4">Ages 11+</p>
              <ul className="text-left text-sm text-gray-600 space-y-1">
                <li>• Advanced academic support</li>
                <li>• Study skills and time management</li>
                <li>• Peer mentoring opportunities</li>
                <li>• Special interest clubs and activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}