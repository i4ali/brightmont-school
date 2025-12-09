export default function PrincipalsWelcome() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              👋 Principal's Welcome
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A warm welcome to the BrightMont Learning Center family
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-3xl border-4 border-green-200">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">💌 Welcome to BrightMont!</h2>

            <p className="text-gray-700 mb-6 text-lg">
              Dear Families,
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              It is my great pleasure to welcome you to BrightMont Learning Center. As the principal of this wonderful school, I am honored to be part of your child's educational journey during these crucial early years.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Our school was founded on the belief that every child is unique and deserves an education that respects their individual learning style and developmental pace. Our child-centered approach provides the perfect framework for this, allowing children to explore, discover, and learn in an environment that fosters independence, creativity, and critical thinking.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              At BrightMont, we understand that choosing the right school for your child is one of the most important decisions you'll make. That's why we've created an environment where children feel safe, valued, and excited to learn. Our experienced teachers are not just educators; they are guides who observe each child carefully and provide the support needed for optimal growth.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              We believe in the partnership between home and school. Your involvement and support are crucial to your child's success, and we encourage open communication throughout your child's time with us. Together, we can help your child develop not only academically but also socially and emotionally.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Thank you for considering BrightMont Learning Center for your child's education. We look forward to the opportunity to serve your family and to watching your child flourish in our nurturing environment.
            </p>

            <p className="text-gray-700 mb-2 text-lg">
              Warmest regards,
            </p>
            <p className="text-green-700 font-bold text-lg">
              The BrightMont Administration Team
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              ⭐ Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
              We are dedicated to providing the highest quality early childhood education and care for your child
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-blue-200">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Nurturing Care</h3>
              <p className="text-gray-700 font-medium">
                Every child receives individual attention and care in a loving, supportive environment.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-green-200">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-600">Academic Excellence</h3>
              <p className="text-gray-700 font-medium">
                High standards of education that prepare children for future academic success.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-purple-200">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600">Personalized Learning</h3>
              <p className="text-gray-700 font-medium">
                Each child's unique learning style and interests guide their educational experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
