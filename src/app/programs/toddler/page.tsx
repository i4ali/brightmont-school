export default function ToddlerProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">🧸</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Toddler Program
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Fostering independence and discovery for curious toddlers
            </p>
            <div className="bg-green-100 inline-block px-4 py-2 rounded-full">
              <span className="text-green-800 font-semibold">Ages: 18 months - 3 years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Magic of Discovery</h2>
            
            <p className="text-gray-700 mb-6">
              The toddler years are filled with rapid growth, boundless curiosity, and the emergence of independence. Our toddler program is designed to support this critical developmental period by providing a structured yet flexible environment where children can explore, learn, and develop essential life skills.
            </p>

            <p className="text-gray-700 mb-8">
              We understand that toddlers are eager to do things for themselves, and our Montessori approach honors this natural drive for independence. Through carefully prepared environments and age-appropriate activities, we help toddlers develop confidence, language skills, and social awareness while respecting their individual pace of development.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Toddler Program Highlights
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Practical Life Skills</h3>
              <p className="text-gray-600 text-sm">Activities like pouring, sorting, and cleaning that develop fine motor skills and independence.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Language Explosion</h3>
              <p className="text-gray-600 text-sm">Rich vocabulary development through stories, songs, and meaningful conversations throughout the day.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Social Development</h3>
              <p className="text-gray-600 text-sm">Learning to interact with peers, share, take turns, and develop empathy in a supportive environment.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Toilet Learning</h3>
              <p className="text-gray-600 text-sm">Gentle, individualized approach to toilet learning that respects each child's readiness and timeline.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sensory Exploration</h3>
              <p className="text-gray-600 text-sm">Hands-on materials and activities that engage all the senses and support cognitive development.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Grace & Courtesy</h3>
              <p className="text-gray-600 text-sm">Learning social skills, manners, and how to interact respectfully with others and the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A Typical Day
            </h2>
            <p className="text-lg text-gray-600">
              Our structured yet flexible schedule provides predictability while allowing for individual needs
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-green-600 font-bold">7:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Arrival & Free Choice</h3>
                <p className="text-gray-600">Children choose from practical life activities, puzzles, and quiet play. Individual greetings help ease the transition from home.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-blue-600 font-bold">9:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Morning Snack & Circle Time</h3>
                <p className="text-gray-600">Healthy snack followed by songs, stories, and group activities that build language and social skills.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-purple-600 font-bold">9:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Work Time</h3>
                <p className="text-gray-600">Individual and small group activities including practical life, sensorial, language, and art materials.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-yellow-600 font-bold">11:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Outdoor Play</h3>
                <p className="text-gray-600">Fresh air and gross motor development in our secure playground with age-appropriate equipment.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-red-600 font-bold">12:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Lunch & Rest</h3>
                <p className="text-gray-600">Family-style lunch followed by quiet time or nap for those who need it, with quiet activities for non-nappers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Learning Through Play
            </h2>
            <p className="text-lg text-gray-600">
              Our classroom areas are designed to promote specific developmental skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Practical Life Area</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Food preparation:</strong> Washing, cutting soft fruits, spreading, pouring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Care of environment:</strong> Sweeping, dusting, plant care, table washing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Care of self:</strong> Hand washing, teeth brushing, dressing frames</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Grace and courtesy:</strong> Greeting friends, carrying objects, walking on the line</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Sensorial Area</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Size discrimination:</strong> Pink tower, brown stairs, red rods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Color exploration:</strong> Color tablets, sorting activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Texture experiences:</strong> Fabric box, touch boards, mystery bag</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Sound activities:</strong> Sound cylinders, musical instruments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Language Area</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Vocabulary building:</strong> Classified cards, object-to-picture matching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Pre-reading:</strong> Story time, picture books, rhyming games</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Pre-writing:</strong> Finger painting, playdough, tracing activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Oral language:</strong> Songs, finger plays, conversation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">Art & Creative Expression</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Process art:</strong> Painting, collaging, clay work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Music and movement:</strong> Instruments, dancing, rhythm activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Dramatic play:</strong> Dress-up clothes, dollhouse, kitchen area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Construction:</strong> Blocks, puzzles, threading activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Toilet Learning */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Supportive Toilet Learning
            </h2>
            <p className="text-lg text-gray-600">
              We partner with families to make toilet learning a positive experience
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Our Approach:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Follow each child's individual readiness signs</li>
                  <li>• Consistent routines and positive reinforcement</li>
                  <li>• Child-sized toilets and step stools for independence</li>
                  <li>• Regular communication with families about progress</li>
                  <li>• Patient, encouraging support during accidents</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Signs of Readiness:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Staying dry for longer periods</li>
                  <li>• Showing interest in the toilet</li>
                  <li>• Communicating bathroom needs</li>
                  <li>• Walking steadily and climbing stairs</li>
                  <li>• Following simple instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}