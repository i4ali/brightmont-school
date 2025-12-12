export default function School() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              🏫 BrightMont Learning Center
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Excellence in Early Childhood Education Through Quality Standards
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-yellow-100 px-4 py-2 rounded-full border-2 border-yellow-300">
                <span className="text-yellow-800 font-bold">⭐ Texas Rising Star Certified</span>
              </div>
              <div className="bg-green-100 px-4 py-2 rounded-full border-2 border-green-300">
                <span className="text-green-800 font-bold">🐸 Frog Street Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">📚 About Our Learning Center</h2>

          <p className="text-gray-700 mb-6 text-lg font-medium">
            Located in the heart of Spring, Texas, BrightMont Learning Center has been serving families with children ages 6 weeks to 12 years. Our school is designed to provide a warm, nurturing environment where children receive developmentally appropriate education that prepares them for kindergarten and beyond.
          </p>

          <p className="text-gray-700 mb-8 font-medium">
            BrightMont Learning Center provides a high-quality, nurturing environment where children develop school readiness skills, social-emotional growth, and a strong foundation for lifelong learning success.
          </p>
        </div>
      </section>

      {/* Texas Rising Star */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">
              ⭐ Texas Rising Star Certified Program
            </h2>
            <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
              We are proud to maintain our Texas Rising Star certification, demonstrating our commitment to quality that exceeds state minimum standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-yellow-200 text-center">
              <div className="text-3xl mb-3">👩‍🏫</div>
              <h3 className="font-bold text-yellow-700 mb-2">Qualified Staff</h3>
              <p className="text-gray-700 text-sm font-medium">Highly qualified director and teaching staff</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-orange-200 text-center">
              <div className="text-3xl mb-3">💕</div>
              <h3 className="font-bold text-orange-700 mb-2">Positive Interactions</h3>
              <p className="text-gray-700 text-sm font-medium">Teacher-child interactions and classroom management</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-red-200 text-center">
              <div className="text-3xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold text-red-700 mb-2">Family Engagement</h3>
              <p className="text-gray-700 text-sm font-medium">Comprehensive program administration and family engagement</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-pink-200 text-center">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="font-bold text-pink-700 mb-2">Safe Environment</h3>
              <p className="text-gray-700 text-sm font-medium">Safe, stimulating indoor and outdoor learning environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-4 border-purple-200">
            <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">🎯 Our Mission</h2>
            <p className="text-gray-700 text-lg font-medium text-center">
              To provide comprehensive early childhood education that prepares each child for school success while fostering social-emotional development, critical thinking skills, and a love of learning. We believe in partnering with families to nurture the whole child – academically, socially, emotionally, and physically.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-K Partnership Excellence */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              🤝 Pre-K Partnership Excellence
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Partnering with Local School Districts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Partnership Benefits</h3>
              <p className="text-gray-700 mb-4 font-medium">
                As a Texas Rising Star certified program, we are eligible to partner with local school districts through the Pre-K Partnership of Texas program.
              </p>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Provide state-funded Pre-K education for eligible 3- and 4-year-olds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Offer full-day care with integrated Pre-K instruction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Ensure seamless transition to kindergarten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Access additional resources and professional development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">Eligibility Requirements</h3>
              <p className="text-gray-700 mb-4 font-medium">
                We serve children who meet Pre-K eligibility requirements, including:
              </p>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Educationally disadvantaged (eligible for free/reduced meals)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Limited English proficiency learners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Children of military families</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Homeless or in foster care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Children of first responders (Star of Texas Award recipients)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frog Street Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
              🐸 Frog Street Curriculum
            </h2>
            <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
              A comprehensive, research-based early childhood program that aligns with Texas Pre-K Guidelines and school readiness standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border-4 border-blue-200">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold text-blue-700 mb-2">Early Literacy</h3>
              <p className="text-gray-700 text-sm font-medium">Phonological awareness and language development</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-3xl border-4 border-green-200">
              <div className="text-3xl mb-3">🔢</div>
              <h3 className="font-bold text-green-700 mb-2">Mathematics</h3>
              <p className="text-gray-700 text-sm font-medium">Mathematical thinking with hands-on activities</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border-4 border-purple-200">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-purple-700 mb-2">Science</h3>
              <p className="text-gray-700 text-sm font-medium">Exploration and inquiry-based learning</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-3xl border-4 border-orange-200">
              <div className="text-3xl mb-3">💕</div>
              <h3 className="font-bold text-orange-700 mb-2">Social-Emotional</h3>
              <p className="text-gray-700 text-sm font-medium">Character development and healthy habits</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-3xl border-4 border-green-200">
            <h3 className="text-xl font-bold text-green-700 mb-4 text-center">School Readiness Focus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-gray-700 font-medium text-sm">Pre-reading and early writing skills using systematic phonics instruction</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-gray-700 font-medium text-sm">Number recognition and basic math concepts through manipulative-based learning</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-gray-700 font-medium text-sm">Following multi-step directions and classroom routines</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-gray-700 font-medium text-sm">Social interaction and cooperation through guided play</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-gray-700 font-medium text-sm">Independence in personal care tasks and self-help skills</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-gray-700 font-medium text-sm">Critical thinking and problem-solving strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Facilities */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6">
              🏠 Our Quality Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">📐 Developmentally Appropriate Classrooms</h3>
              <ul className="space-y-2 text-gray-700 font-medium text-sm">
                <li>• Age-appropriate furniture and learning centers</li>
                <li>• Rich literacy environments with diverse books</li>
                <li>• STEM exploration stations</li>
                <li>• Art and creativity spaces</li>
                <li>• Quiet areas for individual activities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">🌳 Safe Outdoor Learning Spaces</h3>
              <ul className="space-y-2 text-gray-700 font-medium text-sm">
                <li>• Age-appropriate playground equipment</li>
                <li>• Nature exploration opportunities</li>
                <li>• Gross motor skill development activities</li>
                <li>• Outdoor learning gardens</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-orange-200">
              <h3 className="text-xl font-bold text-orange-600 mb-4">🍽️ Nutrition Center</h3>
              <ul className="space-y-2 text-gray-700 font-medium text-sm">
                <li>• USDA Child and Adult Care Food Program compliant</li>
                <li>• Fresh, nutritious meals prepared daily</li>
                <li>• Accommodation for dietary restrictions</li>
                <li>• Family-style dining to promote social skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Family Partnership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
              👨‍👩‍👧 Family Partnership & Community
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-4 border-purple-200">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Strong Family Connections</h3>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Daily communication through our mobile app and parent conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Family engagement activities and educational workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Volunteer opportunities and family events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Parent education resources and support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-4 border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Community Partnerships</h3>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Collaboration with local school districts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Connections with community health and social services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Professional development partnerships with early childhood organizations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Qualified Team */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
              👩‍🏫 Our Qualified Team
            </h2>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-green-200">
            <h3 className="text-xl font-bold text-green-700 mb-4 text-center">Professional Excellence</h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Teachers meeting or exceeding Texas Rising Star qualification requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Specialized training in Frog Street curriculum implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Ongoing professional development and training in early childhood best practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>CPR and First Aid certified staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Background checks and screening for all team members</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* School Hours & Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-8 text-center">🕐 School Hours & Information</h2>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl border-4 border-cyan-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold mb-2 text-cyan-600">⏰ Operating Hours</h4>
                <p className="text-gray-700 font-medium">Monday - Friday: 6:30 AM - 6:00 PM</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold mb-2 text-green-600">👶 Ages Served</h4>
                <p className="text-gray-700 font-medium">6 weeks to 12 years<br/>(Pre-K partnerships available for eligible 3- and 4-year-olds)</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold mb-2 text-blue-600">📍 Location</h4>
                <p className="text-gray-700 font-medium">17710 S. Cypress Villas Dr<br/>Spring, Texas 77379</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold mb-2 text-purple-600">📞 Contact</h4>
                <p className="text-gray-700 font-medium">
                  Phone: (281) 251-3851<br/>
                  Email: info@brightmontschool.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              ✅ Quality Assurance & Accreditation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-700 mb-4">⭐ Texas Rising Star Certification</h3>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Exceeding state licensing requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Continuous quality improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Enhanced payment rates for families receiving child care assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Regular assessment and monitoring to maintain high standards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-orange-200">
              <h3 className="text-xl font-bold text-orange-700 mb-4">📋 Licensing & Compliance</h3>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Licensed by Texas Health and Human Services Commission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Active Child Care Services (CCS) Provider Agreement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Compliance with all state health and safety regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Regular monitoring and assessment visits</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-8 rounded-3xl shadow-lg border-4 border-red-200">
            <h3 className="text-xl font-bold text-red-700 mb-4 text-center">🌟 Commitment to Excellence</h3>
            <p className="text-gray-700 font-medium text-center mb-4">
              We continuously strive for improvement through:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-red-50 p-4 rounded-2xl text-center">
                <p className="text-gray-700 font-medium text-sm">Annual program evaluations and quality assessments</p>
              </div>
              <div className="bg-red-50 p-4 rounded-2xl text-center">
                <p className="text-gray-700 font-medium text-sm">Family feedback and satisfaction surveys</p>
              </div>
              <div className="bg-red-50 p-4 rounded-2xl text-center">
                <p className="text-gray-700 font-medium text-sm">Professional development for all staff members</p>
              </div>
              <div className="bg-red-50 p-4 rounded-2xl text-center">
                <p className="text-gray-700 font-medium text-sm">Implementation of best practices in early childhood education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl mb-8 font-medium">
            At BrightMont Learning Center, we understand that quality early childhood education sets the foundation for lifelong success. Through our Texas Rising Star certification and Pre-K Partnership opportunities, we provide families with peace of mind knowing their children receive the highest quality care and education available in Texas.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            📞 Schedule a Tour Today
          </a>
        </div>
      </section>
    </div>
  );
}
