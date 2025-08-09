export default function School() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our School
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              BrightMont Montessori Academy provides a nurturing environment where children develop independence, confidence, and a love of learning
            </p>
          </div>
        </div>
      </section>

      {/* School Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About BrightMont Montessori Academy</h2>
            
            <p className="text-gray-700 mb-6">
              Located in the heart of Spring, Texas, BrightMont Montessori Academy has been serving families with children ages 6 weeks to 6 years. Our school is designed to provide a warm, nurturing environment where children can explore, discover, and develop at their own pace.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To provide a comprehensive Montessori education that respects each child's individual development while fostering independence, creativity, and critical thinking skills. We believe in nurturing the whole child – academically, socially, emotionally, and physically.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Facilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Prepared Environment</h4>
                <p className="text-gray-600">
                  Our classrooms are carefully designed to meet the developmental needs of each age group, with child-sized furniture and materials that encourage independence and exploration.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Outdoor Spaces</h4>
                <p className="text-gray-600">
                  Safe, secure outdoor play areas where children can connect with nature and develop gross motor skills through active play.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Learning Materials</h4>
                <p className="text-gray-600">
                  Authentic Montessori materials that are self-correcting and designed to build specific skills while maintaining the child's interest.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Nutrition Center</h4>
                <p className="text-gray-600">
                  On-site kitchen where we prepare nutritious, fresh meals daily, accommodating dietary restrictions and preferences.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">School Hours & Information</h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Operating Hours:</h4>
                  <p className="text-gray-700">Monday - Friday: 6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ages Served:</h4>
                  <p className="text-gray-700">6 weeks to 6 years</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location:</h4>
                  <p className="text-gray-700">17710 S. Cypress Villas Dr<br/>Spring, Texas 77379</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact:</h4>
                  <p className="text-gray-700">
                    Phone: (281) 251-3851<br/>
                    Email: info@brightmontschool.com
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accreditation & Standards</h3>
            <p className="text-gray-700 mb-6">
              BrightMont Montessori Academy maintains high standards of excellence in early childhood education. Our teachers are trained in Montessori methodology and continue their professional development to ensure the best possible learning experience for your child.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}