export default function InfantProgram() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">👶</div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              👶 Infant Program
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Nurturing care for your precious little ones from 6 weeks to 18 months
            </p>
            <div className="bg-blue-100 inline-block px-4 py-2 rounded-full border-2 border-blue-300">
              <span className="text-blue-800 font-bold">Ages: 6 weeks - 18 months</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">💕 A Foundation for Life</h2>

              <p className="text-gray-700 mb-6 text-lg font-medium">
                Our infant program provides a safe, loving environment where your baby's first experiences away from home are positive and nurturing. We understand that each infant has unique needs and develops at their own pace, so we provide individualized care that respects your baby's natural rhythms.
              </p>

              <p className="text-gray-700 mb-8 font-medium">
                During these crucial early months, infants are rapidly developing trust, security, and their first understanding of the world around them. Our experienced caregivers work closely with families to ensure consistency between home and school, creating a seamless transition that supports your child's healthy development.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/classroom-infant.svg"
                alt="BrightMont infant classroom environment"
                className="w-full max-w-lg rounded-3xl shadow-lg border-4 border-blue-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6">
              ⭐ What Makes Our Infant Program Special
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">💗</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-600">Individual Care Plans</h3>
              <p className="text-gray-700 font-medium">Each baby follows their own feeding, sleeping, and play schedule based on their unique needs and family preferences.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-green-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-green-600">Low Ratios</h3>
              <p className="text-gray-700 font-medium">Small group sizes ensure each infant receives plenty of individual attention and care throughout the day.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-purple-600">Experienced Caregivers</h3>
              <p className="text-gray-700 font-medium">Our staff are trained in infant development and CPR certified, providing expert care for your little one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
              🎨 Daily Activities & Development
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">🧠 Sensory Development</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-2xl">
                  <h4 className="font-bold mb-1 text-blue-700">Tummy Time</h4>
                  <p className="text-gray-700 font-medium text-sm">Supervised tummy time to strengthen neck and shoulder muscles</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl">
                  <h4 className="font-bold mb-1 text-blue-700">Sensory Play</h4>
                  <p className="text-gray-700 font-medium text-sm">Safe textures, sounds, and visual stimulation appropriate for each developmental stage</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl">
                  <h4 className="font-bold mb-1 text-blue-700">Music & Movement</h4>
                  <p className="text-gray-700 font-medium text-sm">Gentle music, singing, and movement activities to stimulate brain development</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-green-200">
              <h3 className="text-2xl font-bold text-green-600 mb-6">💬 Language & Social</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-2xl">
                  <h4 className="font-bold mb-1 text-green-700">Reading Time</h4>
                  <p className="text-gray-700 font-medium text-sm">Board books and picture books to introduce language patterns and sounds</p>
                </div>
                <div className="bg-green-50 p-4 rounded-2xl">
                  <h4 className="font-bold mb-1 text-green-700">Conversation</h4>
                  <p className="text-gray-700 font-medium text-sm">Caregivers narrate activities and respond to babies' coos and babbling</p>
                </div>
                <div className="bg-green-50 p-4 rounded-2xl">
                  <h4 className="font-bold mb-1 text-green-700">Social Interaction</h4>
                  <p className="text-gray-700 font-medium text-sm">Gentle introduction to peers and group activities as developmentally appropriate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Details */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">🍼 Feeding & Nutrition</h3>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Flexible feeding schedules based on each baby's needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Support for breastfeeding mothers with proper storage and warming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Introduction to solid foods following pediatrician and family guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Clean, sanitized bottles and feeding equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Daily feeding reports for parents</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-green-200">
              <h3 className="text-2xl font-bold text-green-600 mb-6">😴 Rest & Sleep</h3>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Individual cribs with personal bedding from home</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Flexible nap schedules following each baby's natural rhythm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Quiet, dim environment for peaceful sleep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Safe sleep practices and regular monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Sleep reports shared with families daily</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Communication */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              🤝 Partnership with Parents
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              We believe that strong communication between home and school is essential for your infant's wellbeing and development.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border-4 border-purple-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-2xl">
                <h4 className="font-bold text-purple-600 mb-3">📝 Daily Reports Include:</h4>
                <ul className="text-sm text-gray-700 space-y-1 font-medium">
                  <li>• Feeding times and amounts</li>
                  <li>• Diaper changes and bathroom times</li>
                  <li>• Sleep duration and quality</li>
                  <li>• Activities and milestones</li>
                  <li>• Mood and behavior observations</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <h4 className="font-bold text-blue-600 mb-3">💬 Communication Methods:</h4>
                <ul className="text-sm text-gray-700 space-y-1 font-medium">
                  <li>• Daily reports through application</li>
                  <li>• Regular parent conferences</li>
                  <li>• Open door policy for visits</li>
                  <li>• Photos and updates throughout the day</li>
                  <li>• Milestone celebrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
