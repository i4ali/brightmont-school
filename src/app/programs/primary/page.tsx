export default function PrimaryProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">🎒</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pre-K Program
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Building academic foundations and social skills for school readiness
            </p>
            <div className="bg-purple-100 inline-block px-4 py-2 rounded-full">
              <span className="text-purple-800 font-semibold">Ages: 3 - 6 years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Heart of Montessori Education</h2>
            
            <p className="text-gray-700 mb-6">
              Our Pre-K program represents the cornerstone of Montessori education, serving children during their most receptive learning years. This multi-age environment allows children to develop at their own pace while building academic skills, social competence, and emotional maturity that will serve them throughout their educational journey.
            </p>

            <p className="text-gray-700 mb-8">
              In our carefully prepared classroom, children engage with concrete learning materials that make abstract concepts accessible and meaningful. Through self-directed activity, collaborative learning, and individualized guidance from our trained teachers, students develop independence, confidence, and a lifelong love of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pre-K Program Excellence
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mixed-Age Learning</h3>
              <p className="text-gray-600 text-sm">3, 4, and 5-year-olds learn together, fostering leadership, mentorship, and collaborative skills.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
              <p className="text-gray-600 text-sm">Strong foundations in mathematics, language arts, science, and cultural studies through hands-on materials.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Individual Progress</h3>
              <p className="text-gray-600 text-sm">Each child works at their own pace with materials that meet their current developmental needs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Leadership Skills</h3>
              <p className="text-gray-600 text-sm">Older students mentor younger ones, developing confidence, responsibility, and teaching skills.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Social-Emotional Growth</h3>
              <p className="text-gray-600 text-sm">Development of empathy, conflict resolution, and emotional intelligence through daily interactions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">School Readiness</h3>
              <p className="text-gray-600 text-sm">Comprehensive preparation for elementary school success through academic skills and independence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Curriculum Areas
            </h2>
            <p className="text-lg text-gray-600">
              Our five core areas provide a complete foundation for lifelong learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Mathematics</h3>
              <p className="text-gray-700 mb-4">
                Concrete materials make abstract mathematical concepts accessible and engaging for young learners.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Number concepts:</strong> Quantity recognition, counting, number symbols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Operations:</strong> Addition, subtraction, multiplication, division using golden beads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Geometry:</strong> Shapes, spatial relationships, geometric solids</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Measurement:</strong> Linear, volume, weight, time concepts</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Language Arts</h3>
              <p className="text-gray-700 mb-4">
                Phonetic approach to reading and writing that builds strong literacy foundations naturally.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Oral language:</strong> Vocabulary enrichment, storytelling, conversation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Pre-writing:</strong> Fine motor development, letter formation, tracing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Phonics:</strong> Letter sounds, word building, reading readiness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Reading:</strong> Sight words, fluency, comprehension</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Science & Nature</h3>
              <p className="text-gray-700 mb-4">
                Hands-on exploration of the natural world develops scientific thinking and environmental awareness.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Botany:</strong> Plant parts, life cycles, gardening activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Zoology:</strong> Animal classification, habitats, life cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Physical science:</strong> Simple experiments, observation skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Earth science:</strong> Weather, seasons, environmental stewardship</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">Cultural Studies</h3>
              <p className="text-gray-700 mb-4">
                Exploration of world cultures, geography, and history builds global awareness and appreciation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Geography:</strong> Land and water forms, continents, countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>History:</strong> Time concepts, timelines, historical figures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Cultural diversity:</strong> Traditions, celebrations, foods from around the world</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Peace education:</strong> Conflict resolution, global citizenship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Daily Schedule
            </h2>
            <p className="text-lg text-gray-600">
              A balanced day that honors the child's natural rhythms and learning styles
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-purple-600 font-bold text-sm">7:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Arrival & Morning Work</h3>
                <p className="text-gray-600 text-sm">Children choose their first work of the day, settling into the prepared environment with purpose and focus.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">8:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Uninterrupted Work Period</h3>
                <p className="text-gray-600 text-sm">Three-hour work cycle allowing deep concentration and mastery of chosen materials across all curriculum areas.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">11:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Group Time & Outdoor Play</h3>
                <p className="text-gray-600 text-sm">Circle time for songs, stories, and group lessons followed by outdoor exploration and physical activity.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-yellow-600 font-bold text-sm">12:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Lunch & Community Time</h3>
                <p className="text-gray-600 text-sm">Family-style lunch promoting social skills, nutrition education, and grace and courtesy.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">1:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Afternoon Activities</h3>
                <p className="text-gray-600 text-sm">Extended day students continue with creative arts, practical life, and individualized lessons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Readiness */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kindergarten Readiness
            </h2>
            <p className="text-lg text-gray-600">
              Our graduates enter elementary school confident, capable, and excited to learn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic Skills</h3>
              <p className="text-gray-600">Reading, writing, and mathematical concepts well beyond kindergarten expectations</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Maturity</h3>
              <p className="text-gray-600">Leadership, collaboration, and conflict resolution skills for positive peer interactions</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Independence</h3>
              <p className="text-gray-600">Self-direction, responsibility, and intrinsic motivation for continued learning success</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}