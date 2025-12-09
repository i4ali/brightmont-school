export default function PrimaryProgram() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">✏️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              ✏️ Pre-K Program
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Texas Rising Star certified program using the research-based Frog Street curriculum
            </p>
            <div className="bg-purple-100 inline-block px-4 py-2 rounded-full border-2 border-purple-300">
              <span className="text-purple-800 font-bold">Ages: 3 - 5 years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">🌟 Excellence in Early Education</h2>

          <p className="text-gray-700 mb-6 text-lg font-medium">
            Our Pre-K program combines the highest quality standards of Texas Rising Star with the proven Frog Street curriculum to provide your child with exceptional school readiness preparation. We create engaging, developmentally appropriate experiences that build strong foundations in literacy, mathematics, science, and social-emotional skills.
          </p>

          <p className="text-gray-700 mb-8 font-medium">
            Through purposeful play, hands-on activities, and individualized instruction, children develop the confidence, curiosity, and skills they need to succeed in kindergarten and beyond. Our certified teachers are trained in the latest early childhood education practices and committed to nurturing each child's unique potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border-4 border-blue-200">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">⭐</span>
                <h3 className="text-xl font-bold text-blue-700">Texas Rising Star</h3>
              </div>
              <p className="text-gray-700 font-medium text-sm">
                Our program meets the highest quality standards set by the Texas Workforce Commission for early childhood education.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-3xl border-4 border-green-200">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🐸</span>
                <h3 className="text-xl font-bold text-green-700">Frog Street Curriculum</h3>
              </div>
              <p className="text-gray-700 font-medium text-sm">
                Research-based curriculum designed to prepare children for kindergarten success through engaging, thematic learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frog Street Curriculum Domains */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6">
              🐸 Frog Street Learning Domains
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Comprehensive curriculum covering all areas of early childhood development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-600">Language & Early Literacy</h3>
              <p className="text-gray-700 font-medium">Phonological awareness, vocabulary development, print concepts, and early reading skills through stories and songs.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-green-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🔢</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-green-600">Mathematics</h3>
              <p className="text-gray-700 font-medium">Number recognition, counting, patterns, shapes, measurement, and problem-solving through hands-on activities.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-purple-600">Science & Discovery</h3>
              <p className="text-gray-700 font-medium">Exploration of the natural world, simple experiments, observation skills, and scientific thinking.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-orange-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-orange-600">Social Studies</h3>
              <p className="text-gray-700 font-medium">Community helpers, cultural awareness, family structures, and understanding the world around us.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-pink-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-pink-600">Social-Emotional Learning</h3>
              <p className="text-gray-700 font-medium">Self-regulation, emotional awareness, friendship skills, and conflict resolution strategies.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-cyan-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-cyan-600">Creative Arts</h3>
              <p className="text-gray-700 font-medium">Music, movement, visual arts, and dramatic play to encourage creativity and self-expression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Rising Star Quality */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">
              ⭐ Texas Rising Star Quality Standards
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Our commitment to excellence in every aspect of early childhood education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-yellow-200">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">👩‍🏫 Teacher Excellence</h3>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Certified early childhood educators with ongoing professional development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Specialized training in Frog Street curriculum implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Low teacher-to-child ratios for individualized attention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Regular assessments to track each child's progress</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">🏫 Learning Environment</h3>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Purposefully designed classrooms with organized learning centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Age-appropriate materials and resources for hands-on learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Safe, clean, and nurturing spaces for exploration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Outdoor play areas for physical development and nature exploration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-green-200">
              <h3 className="text-2xl font-bold text-green-600 mb-6">👨‍👩‍👧 Family Engagement</h3>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Regular communication through our parent app and newsletters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Parent-teacher conferences to discuss progress and goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Family events and volunteer opportunities throughout the year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Resources and tips for continuing learning at home</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">📊 Assessment & Progress</h3>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Ongoing observation and documentation of learning milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Frog Street assessments aligned with Texas Pre-K Guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Individualized learning plans based on each child's needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Portfolio collections showcasing growth and achievements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              🕐 A Day of Learning & Discovery
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Structured routines that balance learning, play, and rest
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-200">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">7:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-purple-600">Arrival & Morning Centers</h3>
                <p className="text-gray-700 font-medium text-sm">Children settle in with breakfast and choose from learning centers while teachers greet each family.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-200">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">9:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-blue-600">Circle Time & Frog Street Lesson</h3>
                <p className="text-gray-700 font-medium text-sm">Whole group instruction with songs, stories, and introduction to the day's thematic learning concepts.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-green-200">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">9:45</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-green-600">Small Group & Center Time</h3>
                <p className="text-gray-700 font-medium text-sm">Hands-on activities in literacy, math, science, and art centers with individualized teacher guidance.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-orange-200">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">11:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-orange-600">Outdoor Play & Gross Motor</h3>
                <p className="text-gray-700 font-medium text-sm">Physical development activities, nature exploration, and active play on our playground.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-pink-200">
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">12:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-pink-600">Lunch & Rest Time</h3>
                <p className="text-gray-700 font-medium text-sm">Nutritious family-style lunch followed by quiet rest or calming activities.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-3xl shadow-lg border-4 border-cyan-200">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">2:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-cyan-600">Afternoon Enrichment</h3>
                <p className="text-gray-700 font-medium text-sm">Creative arts, music and movement, and extended learning activities until pickup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kindergarten Readiness */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
              🎓 Kindergarten Ready!
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Our Pre-K graduates enter kindergarten confident, capable, and excited to learn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-600">Early Literacy</h3>
              <p className="text-gray-700 font-medium text-sm">Letter recognition, phonemic awareness, and pre-reading skills</p>
            </div>

            <div className="text-center bg-white p-6 rounded-3xl shadow-lg border-4 border-green-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔢</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-green-600">Math Foundations</h3>
              <p className="text-gray-700 font-medium text-sm">Counting, number concepts, patterns, and basic operations</p>
            </div>

            <div className="text-center bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">👫</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-purple-600">Social Skills</h3>
              <p className="text-gray-700 font-medium text-sm">Cooperation, communication, and positive peer relationships</p>
            </div>

            <div className="text-center bg-white p-6 rounded-3xl shadow-lg border-4 border-orange-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-orange-600">Independence</h3>
              <p className="text-gray-700 font-medium text-sm">Self-help skills, following directions, and classroom routines</p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-3xl border-4 border-purple-200">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Ready to Enroll?</h3>
            <p className="text-gray-700 font-medium mb-6">Give your child the best start with our Texas Rising Star certified Pre-K program!</p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
            >
              📞 Schedule a Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
