import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About BrightMont
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Dedicated to providing exceptional Montessori education that nurtures each child's natural curiosity and love of learning
            </p>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about-us/school" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our School</h2>
                <p className="text-gray-600 mb-6">
                  Learn about our facilities, mission, and the unique environment we've created for children to thrive.
                </p>
                <span className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/about-us/principals-welcome" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Principal's Welcome</h2>
                <p className="text-gray-600 mb-6">
                  A personal message from our principal about our commitment to excellence in early childhood education.
                </p>
                <span className="text-green-600 font-semibold hover:text-green-700">
                  Read Message →
                </span>
              </div>
            </Link>

            <Link href="/about-us/philosophy" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
                <p className="text-gray-600 mb-6">
                  Discover the Montessori principles and educational philosophy that guide our approach to learning.
                </p>
                <span className="text-purple-600 font-semibold hover:text-purple-700">
                  Explore Philosophy →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Families Choose BrightMont
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-lg font-semibold mb-2">Experienced Educators</h3>
              <p className="text-gray-600 text-sm">Certified Montessori teachers with years of experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2">Nurturing Environment</h3>
              <p className="text-gray-600 text-sm">A warm, home-like atmosphere for optimal learning</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-lg font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-gray-600 text-sm">Individual attention for every child</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-lg font-semibold mb-2">Nutritious Meals</h3>
              <p className="text-gray-600 text-sm">Fresh, healthy meals prepared daily</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}