import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              🏫 About BrightMont
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Dedicated to providing exceptional early childhood education that nurtures each child's natural curiosity and love of learning
            </p>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about-us/school" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-blue-200">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">🏫</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Our School</h2>
                <p className="text-gray-700 mb-6 font-medium">
                  Learn about our facilities, mission, and the unique environment we've created for children to thrive.
                </p>
                <span className="text-blue-600 font-bold hover:text-blue-700">
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/about-us/principals-welcome" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-green-200">
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-400 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">👋</span>
                </div>
                <h2 className="text-2xl font-bold text-green-600 mb-4">Principal's Welcome</h2>
                <p className="text-gray-700 mb-6 font-medium">
                  A personal message from our principal about our commitment to excellence in early childhood education.
                </p>
                <span className="text-green-600 font-bold hover:text-green-700">
                  Read Message →
                </span>
              </div>
            </Link>

            <Link href="/about-us/philosophy" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-purple-200">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">💡</span>
                </div>
                <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Philosophy</h2>
                <p className="text-gray-700 mb-6 font-medium">
                  Discover the guiding principles and educational philosophy that shape our approach to learning.
                </p>
                <span className="text-purple-600 font-bold hover:text-purple-700">
                  Explore Philosophy →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              ✨ Why Families Choose BrightMont
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-blue-200">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Experienced Educators</h3>
              <p className="text-gray-700 font-medium">Certified teachers with years of experience</p>
            </div>
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-green-200">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-600">Nurturing Environment</h3>
              <p className="text-gray-700 font-medium">A warm, home-like atmosphere for optimal learning</p>
            </div>
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-purple-200">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600">Small Class Sizes</h3>
              <p className="text-gray-700 font-medium">Individual attention for every child</p>
            </div>
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-orange-200">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🍎</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-600">Nutritious Meals</h3>
              <p className="text-gray-700 font-medium">Fresh, healthy meals prepared daily</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
