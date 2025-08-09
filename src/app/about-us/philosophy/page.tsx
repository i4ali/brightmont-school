export default function Philosophy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Grounded in Montessori principles and enhanced with modern educational practices
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Montessori Method</h2>
            
            <p className="text-gray-700 mb-6">
              At BrightMont Montessori Academy, we believe that children are natural learners who possess an innate curiosity about the world around them. Our educational philosophy is built on the foundational principles established by Dr. Maria Montessori, enhanced with modern understanding of child development.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Principles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-800">Respect for the Child</h4>
                <p className="text-gray-700">
                  Every child is treated as a unique individual with their own timeline for development. We honor each child's natural rhythm of learning and growing.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-green-800">Prepared Environment</h4>
                <p className="text-gray-700">
                  Our carefully designed classrooms provide order, beauty, and accessibility, allowing children to explore and learn independently.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-purple-800">Mixed-Age Groups</h4>
                <p className="text-gray-700">
                  Children learn from peers of different ages, fostering leadership, empathy, and collaborative learning experiences.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-yellow-800">Freedom within Limits</h4>
                <p className="text-gray-700">
                  Children have the freedom to choose their activities within a structured environment that promotes responsibility and self-regulation.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Child-Centered Learning</h3>
            <p className="text-gray-700 mb-6">
              We believe that children learn best when they are actively engaged in their own learning process. Our approach emphasizes:
            </p>
            
            <ul className="text-gray-700 mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Self-directed activity:</strong> Children choose from a range of developmentally appropriate activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Hands-on learning:</strong> Concrete materials that children can manipulate and explore</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Collaborative play:</strong> Working together in a supportive community environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Intrinsic motivation:</strong> Learning driven by natural curiosity rather than external rewards</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Role of the Teacher</h3>
            <p className="text-gray-700 mb-6">
              Our teachers serve as guides and observers, carefully watching each child to understand their interests and developmental needs. They:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Observe and Assess</h4>
                  <p className="text-gray-600 text-sm">Continuously observe children to understand their development and interests</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Facilitate Learning</h4>
                  <p className="text-gray-600 text-sm">Introduce new concepts and materials when children show readiness</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Model Behavior</h4>
                  <p className="text-gray-600 text-sm">Demonstrate grace, courtesy, and problem-solving skills</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Support Independence</h4>
                  <p className="text-gray-600 text-sm">Encourage children to solve problems and make decisions on their own</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Montessori Plus Education</h3>
            <p className="text-gray-700 mb-6">
              Our "Montessori Plus" approach means we honor traditional Montessori principles while incorporating modern research and practices that enhance children's learning experience. This includes:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start bg-white p-4 border-l-4 border-blue-500">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Social-Emotional Learning</h4>
                  <p className="text-gray-600 text-sm">Explicit instruction in emotional intelligence, empathy, and social skills</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-4 border-l-4 border-green-500">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Technology Integration</h4>
                  <p className="text-gray-600 text-sm">Thoughtful use of technology to enhance learning when developmentally appropriate</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-4 border-l-4 border-purple-500">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Environmental Awareness</h4>
                  <p className="text-gray-600 text-sm">Connecting children with nature and fostering environmental stewardship</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-4 border-l-4 border-yellow-500">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Cultural Diversity</h4>
                  <p className="text-gray-600 text-sm">Celebrating diversity and building global awareness and understanding</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Development of the Whole Child</h3>
            <p className="text-gray-700 mb-6">
              We recognize that children develop in multiple dimensions simultaneously. Our program addresses:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-blue-600">Cognitive Development</h4>
                <p className="text-gray-600 text-sm mb-4">Critical thinking, problem-solving, and academic skills</p>
                
                <h4 className="font-semibold mb-2 text-green-600">Physical Development</h4>
                <p className="text-gray-600 text-sm">Both fine and gross motor skills through purposeful movement</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-600">Social Development</h4>
                <p className="text-gray-600 text-sm mb-4">Cooperation, communication, and community building</p>
                
                <h4 className="font-semibold mb-2 text-yellow-600">Emotional Development</h4>
                <p className="text-gray-600 text-sm">Self-awareness, self-regulation, and emotional intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}