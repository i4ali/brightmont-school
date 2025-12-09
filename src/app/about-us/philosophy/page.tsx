export default function Philosophy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              💡 Our Philosophy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Grounded in child-centered principles and enhanced with modern educational practices
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">📚 Our Learning Approach</h2>

          <p className="text-gray-700 mb-8 text-lg">
            At BrightMont Learning Center, we believe that children are natural learners who possess an innate curiosity about the world around them. Our educational philosophy is built on child-centered principles, enhanced with modern understanding of child development.
          </p>

          <h3 className="text-2xl font-bold text-purple-600 mb-6">🎯 Core Principles</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all">
              <h4 className="text-lg font-bold mb-3 text-blue-600">💙 Respect for the Child</h4>
              <p className="text-gray-700 font-medium">
                Every child is treated as a unique individual with their own timeline for development. We honor each child's natural rhythm of learning and growing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-green-200 hover:shadow-xl transition-all">
              <h4 className="text-lg font-bold mb-3 text-green-600">🏠 Prepared Environment</h4>
              <p className="text-gray-700 font-medium">
                Our carefully designed classrooms provide order, beauty, and accessibility, allowing children to explore and learn independently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-200 hover:shadow-xl transition-all">
              <h4 className="text-lg font-bold mb-3 text-purple-600">👥 Mixed-Age Groups</h4>
              <p className="text-gray-700 font-medium">
                Children learn from peers of different ages, fostering leadership, empathy, and collaborative learning experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-orange-200 hover:shadow-xl transition-all">
              <h4 className="text-lg font-bold mb-3 text-orange-600">🌟 Freedom within Limits</h4>
              <p className="text-gray-700 font-medium">
                Children have the freedom to choose their activities within a structured environment that promotes responsibility and self-regulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Child-Centered Learning */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-4">🧒 Child-Centered Learning</h3>
          <p className="text-gray-700 mb-6 text-lg">
            We believe that children learn best when they are actively engaged in their own learning process. Our approach emphasizes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-5 rounded-3xl shadow-lg border-4 border-blue-200">
              <h4 className="font-bold text-blue-600 mb-2">🎨 Self-directed activity</h4>
              <p className="text-gray-700 font-medium">Children choose from a range of developmentally appropriate activities</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-lg border-4 border-green-200">
              <h4 className="font-bold text-green-600 mb-2">🖐️ Hands-on learning</h4>
              <p className="text-gray-700 font-medium">Concrete materials that children can manipulate and explore</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-lg border-4 border-purple-200">
              <h4 className="font-bold text-purple-600 mb-2">🤝 Collaborative play</h4>
              <p className="text-gray-700 font-medium">Working together in a supportive community environment</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-lg border-4 border-orange-200">
              <h4 className="font-bold text-orange-600 mb-2">💫 Intrinsic motivation</h4>
              <p className="text-gray-700 font-medium">Learning driven by natural curiosity rather than external rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role of the Teacher */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">👨‍🏫 The Role of the Teacher</h3>
          <p className="text-gray-700 mb-6 text-lg">
            Our teachers serve as guides and observers, carefully watching each child to understand their interests and developmental needs. They:
          </p>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-3xl mb-8 border-4 border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-2xl">
                <h4 className="font-bold text-green-600 mb-2">👀 Observe and Assess</h4>
                <p className="text-gray-700 font-medium">Continuously observe children to understand their development and interests</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <h4 className="font-bold text-blue-600 mb-2">📖 Facilitate Learning</h4>
                <p className="text-gray-700 font-medium">Introduce new concepts and materials when children show readiness</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <h4 className="font-bold text-purple-600 mb-2">🌟 Model Behavior</h4>
                <p className="text-gray-700 font-medium">Demonstrate grace, courtesy, and problem-solving skills</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <h4 className="font-bold text-orange-600 mb-2">💪 Support Independence</h4>
                <p className="text-gray-700 font-medium">Encourage children to solve problems and make decisions on their own</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Plus */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">✨ Learning Plus</h3>
          <p className="text-gray-700 mb-6 text-lg">
            Our "Learning Plus" approach means we honor our guiding principles while incorporating modern research and practices that enhance children's learning experience. This includes:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white p-5 rounded-3xl shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all">
              <h4 className="font-bold text-blue-600 mb-2">💕 Social-Emotional Learning</h4>
              <p className="text-gray-700 font-medium">Explicit instruction in emotional intelligence, empathy, and social skills</p>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-lg border-4 border-green-200 hover:shadow-xl transition-all">
              <h4 className="font-bold text-green-600 mb-2">💻 Technology Integration</h4>
              <p className="text-gray-700 font-medium">Thoughtful use of technology to enhance learning when developmentally appropriate</p>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-lg border-4 border-purple-200 hover:shadow-xl transition-all">
              <h4 className="font-bold text-purple-600 mb-2">🌳 Environmental Awareness</h4>
              <p className="text-gray-700 font-medium">Connecting children with nature and fostering environmental stewardship</p>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-lg border-4 border-orange-200 hover:shadow-xl transition-all">
              <h4 className="font-bold text-orange-600 mb-2">🌍 Cultural Diversity</h4>
              <p className="text-gray-700 font-medium">Celebrating diversity and building global awareness and understanding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Whole Child Development */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">🌈 Development of the Whole Child</h3>
          <p className="text-gray-700 mb-6 text-lg">
            We recognize that children develop in multiple dimensions simultaneously. Our program addresses:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2 text-blue-600">🧠 Cognitive Development</h4>
              <p className="text-gray-700 font-medium">Critical thinking, problem-solving, and academic skills</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-green-200 hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2 text-green-600">🏃 Physical Development</h4>
              <p className="text-gray-700 font-medium">Both fine and gross motor skills through purposeful movement</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-200 hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2 text-purple-600">👫 Social Development</h4>
              <p className="text-gray-700 font-medium">Cooperation, communication, and community building</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-orange-200 hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2 text-orange-600">💖 Emotional Development</h4>
              <p className="text-gray-700 font-medium">Self-awareness, self-regulation, and emotional intelligence</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
