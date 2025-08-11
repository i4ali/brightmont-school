export default function PrincipalsWelcome() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Principal's Welcome
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A warm welcome to the BrightMont Montessori Academy family
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to BrightMont!</h2>
                
                <p className="text-gray-700 mb-6">
                  Dear Families,
                </p>

                <p className="text-gray-700 mb-6">
                  It is my great pleasure to welcome you to BrightMont Montessori Academy. As the principal of this wonderful school, I am honored to be part of your child's educational journey during these crucial early years.
                </p>

                <p className="text-gray-700 mb-6">
                  Our school was founded on the belief that every child is unique and deserves an education that respects their individual learning style and developmental pace. The Montessori method provides the perfect framework for this approach, allowing children to explore, discover, and learn in an environment that fosters independence, creativity, and critical thinking.
                </p>

                <p className="text-gray-700 mb-6">
                  At BrightMont, we understand that choosing the right school for your child is one of the most important decisions you'll make. That's why we've created an environment where children feel safe, valued, and excited to learn. Our experienced teachers are not just educators; they are guides who observe each child carefully and provide the support needed for optimal growth.
                </p>

                <p className="text-gray-700 mb-6">
                  We believe in the partnership between home and school. Your involvement and support are crucial to your child's success, and we encourage open communication throughout your child's time with us. Together, we can help your child develop not only academically but also socially and emotionally.
                </p>

                <p className="text-gray-700 mb-6">
                  Thank you for considering BrightMont Montessori Academy for your child's education. We look forward to the opportunity to serve your family and to watching your child flourish in our nurturing environment.
                </p>

                <p className="text-gray-700 mb-8">
                  Warmest regards,<br/>
                  <strong>The BrightMont Administration Team</strong>
                </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing the highest quality Montessori education and care for your child
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Nurturing Care</h3>
              <p className="text-gray-600">
                Every child receives individual attention and care in a loving, supportive environment.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">
                High standards of education that prepare children for future academic success.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">
                Each child's unique learning style and interests guide their educational experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}