export default function SummerCamp() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">☀️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Summer Camp Program
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Fun-filled summer adventures combining learning with play
            </p>
            <div className="bg-yellow-100 inline-block px-4 py-2 rounded-full">
              <span className="text-yellow-800 font-semibold">All Ages Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Summer Adventure Awaits!</h2>
            
            <p className="text-gray-700 mb-6">
              Our Summer Camp program transforms the long summer months into an exciting adventure filled with discovery, creativity, and friendship. Designed for children of all ages, our camp provides a perfect balance of structured activities and free exploration, ensuring every child has a memorable and enriching summer experience.
            </p>

            <p className="text-gray-700 mb-8">
              From nature exploration and science experiments to arts and crafts and water play, our diverse activities keep children engaged while supporting their continued learning and development. Our experienced counselors create a safe, supportive environment where children can try new things, make friends, and create lasting summer memories.
            </p>
          </div>
        </div>
      </section>

      {/* Camp Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Summer Camp Highlights
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Outdoor Adventures</h3>
              <p className="text-gray-600 text-sm">Nature walks, gardening, outdoor games, and exploration of our natural environment.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Water Play Fun</h3>
              <p className="text-gray-600 text-sm">Splash days, water tables, sprinkler play, and safe water activities to beat the summer heat.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Science Experiments</h3>
              <p className="text-gray-600 text-sm">Hands-on experiments, discovery activities, and STEM projects that make learning exciting.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Arts & Crafts</h3>
              <p className="text-gray-600 text-sm">Creative projects, painting, sculpting, and artistic expression with various materials and techniques.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Special Themes</h3>
              <p className="text-gray-600 text-sm">Weekly themes like "Under the Sea," "Space Adventure," and "Around the World" for focused exploration.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Field Trips</h3>
              <p className="text-gray-600 text-sm">Educational and fun outings to local parks, museums, and attractions (when possible).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Themes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Weekly Adventure Themes
            </h2>
            <p className="text-lg text-gray-600">
              Each week brings a new exciting theme with related activities, crafts, and learning experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="font-semibold text-blue-800 mb-2">Under the Sea</h3>
              <p className="text-sm text-gray-600">Ocean animals, water experiments, and marine biology exploration</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-green-800 mb-2">Space Adventure</h3>
              <p className="text-sm text-gray-600">Planets, stars, astronauts, and cosmic science activities</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🦁</div>
              <h3 className="font-semibold text-yellow-800 mb-2">Safari Adventure</h3>
              <p className="text-sm text-gray-600">African animals, habitats, and wildlife conservation learning</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🏰</div>
              <h3 className="font-semibold text-purple-800 mb-2">Medieval Times</h3>
              <p className="text-sm text-gray-600">Knights, castles, dragons, and historical exploration</p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🌺</div>
              <h3 className="font-semibold text-red-800 mb-2">Around the World</h3>
              <p className="text-sm text-gray-600">Cultural exploration, foods, languages, and global traditions</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-semibold text-indigo-800 mb-2">Mad Science</h3>
              <p className="text-sm text-gray-600">Chemistry experiments, physics fun, and scientific discovery</p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-semibold text-pink-800 mb-2">Art Masters</h3>
              <p className="text-sm text-gray-600">Famous artists, art techniques, and creative masterpieces</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🏕️</div>
              <h3 className="font-semibold text-orange-800 mb-2">Camping Fun</h3>
              <p className="text-sm text-gray-600">Outdoor skills, nature crafts, and wilderness exploration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A Day at Summer Camp
            </h2>
            <p className="text-lg text-gray-600">
              Structured activities balanced with free play and exploration time
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-yellow-600 font-bold text-sm">7:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Arrival & Morning Activities</h3>
                <p className="text-gray-600 text-sm">Welcome circle, sharing time, and choice of quiet morning activities to ease into the day.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">9:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Theme Activities</h3>
                <p className="text-gray-600 text-sm">Weekly theme-based activities including crafts, experiments, and special projects related to our adventure.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">10:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Outdoor Exploration</h3>
                <p className="text-gray-600 text-sm">Nature walks, playground time, water play, or outdoor games depending on weather and theme.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-purple-600 font-bold text-sm">12:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Lunch & Rest</h3>
                <p className="text-gray-600 text-sm">Nutritious lunch followed by quiet time, stories, or rest for younger campers.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">2:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Creative Time</h3>
                <p className="text-gray-600 text-sm">Arts and crafts, music and movement, dramatic play, or special visitor presentations.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-orange-600 font-bold text-sm">3:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Free Play & Wrap-up</h3>
                <p className="text-gray-600 text-sm">Choice time, reflection on the day's adventures, and preparation for pick-up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Programming for All Ages
            </h2>
            <p className="text-lg text-gray-600">
              Activities adapted for different developmental stages and interests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Little Explorers</h3>
              <p className="text-gray-600 mb-4 font-semibold">Ages 2-4</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Sensory exploration activities</li>
                <li>• Simple crafts and finger painting</li>
                <li>• Water table and sandbox play</li>
                <li>• Story time and sing-alongs</li>
                <li>• Shorter activity periods with more transitions</li>
                <li>• Rest time and quiet activities</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Adventure Seekers</h3>
              <p className="text-gray-600 mb-4 font-semibold">Ages 5-8</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Structured theme activities and projects</li>
                <li>• Beginning science experiments</li>
                <li>• Complex arts and crafts</li>
                <li>• Cooperative games and team activities</li>
                <li>• Nature exploration and gardening</li>
                <li>• Beginning cooking activities</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Junior Counselors</h3>
              <p className="text-gray-600 mb-4 font-semibold">Ages 9+</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Leadership opportunities with younger campers</li>
                <li>• Advanced STEM projects and experiments</li>
                <li>• Creative writing and storytelling</li>
                <li>• Cooking and meal preparation</li>
                <li>• Special interest clubs and activities</li>
                <li>• Community service projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join the Summer Fun!
            </h2>
            <p className="text-lg text-gray-600">
              Registration details and important information for our Summer Camp program
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Program Details:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Duration:</strong> 10-week summer program</li>
                  <li>• <strong>Hours:</strong> 7:30 AM - 6:00 PM</li>
                  <li>• <strong>Ages:</strong> 2 years - 12 years</li>
                  <li>• <strong>Schedule:</strong> Monday through Friday</li>
                  <li>• <strong>Field Trips:</strong> Weekly outings (when possible)</li>
                  <li>• <strong>Meals:</strong> Lunch and snacks provided</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">What to Bring:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Clothing:</strong> Play clothes that can get messy</li>
                  <li>• <strong>Swimwear:</strong> For water play days</li>
                  <li>• <strong>Sunscreen:</strong> Applied before arrival</li>
                  <li>• <strong>Hat:</strong> For outdoor activities</li>
                  <li>• <strong>Water Bottle:</strong> Labeled with child's name</li>
                  <li>• <strong>Backpack:</strong> For take-home projects</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Early registration recommended as spaces fill quickly!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                >
                  Register Now
                </a>
                <a
                  href="/contact"
                  className="border-2 border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
                >
                  Get More Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}