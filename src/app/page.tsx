import Link from 'next/link';
import ImageSlider from './components/ImageSlider';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Overlaid Text on Images */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        {/* Background Image Slider */}
        <div className="absolute inset-0 bg-gray-200 z-10">
          <ImageSlider
            images={[
              {
                src: "/slide_min_1.jpg",
                alt: "Happy children in the classroom raising their hands"
              },
              {
                src: "/slide_min_2.jpg", 
                alt: "Smiling child in school uniform in classroom environment"
              }
            ]}
            autoSlide={true}
            interval={4000}
            className="w-full h-full"
          />
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-20 flex items-center justify-center h-full pointer-events-none">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl pointer-events-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              <span className="text-cyan-200">bright beginnings.</span><br/>
              <span className="text-green-300">strong futures.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md font-medium">
              Where early learners and school-age children find support, structure and room to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-xl"
              >
                📅 Schedule Tour
              </Link>
              <Link
                href="/admissions"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl"
              >
                🌟 Learn About Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium">
              Our philosophy combines child-focused development with evidence-based practices, creating strong foundations for lifelong learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-4 border-blue-200">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-600">Purposeful Play & Enrichment</h3>
              <p className="text-gray-700 font-medium">Hands-on learning, structured activities and guided play that spark curiosity and build skills.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-4 border-green-200">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-green-600">High-Quality Early Learning</h3>
              <p className="text-gray-700 font-medium">We deliver structured, research-based education (Frog Street) that builds real foundations in literacy, math, social-emotional skills and school readiness.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-4 border-purple-200">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-600">Clean, Safe, Well-Maintained Facility</h3>
              <p className="text-gray-700 font-medium">We uphold strong safety standards, cleanliness and organization—giving parents peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              🌈 Programs by Age Group
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              Specialized programs designed for each developmental stage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/programs/infant" className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center">
                <span className="text-4xl mb-4 block">👶</span>
                <h3 className="text-2xl font-bold mb-3">Infant</h3>
                <p className="mb-4 font-semibold text-white">6 weeks–12 months</p>
              </div>
            </Link>
            <Link href="/programs/toddler" className="bg-gradient-to-br from-green-400 to-green-500 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🖍️</span>
                <h3 className="text-2xl font-bold mb-3">Toddlers</h3>
                <p className="mb-4 font-semibold text-white">12–18 months</p>
              </div>
            </Link>
            <Link href="/programs/toddler" className="bg-gradient-to-br from-teal-400 to-teal-500 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🧸</span>
                <h3 className="text-2xl font-bold mb-3">2's</h3>
                <p className="mb-4 font-semibold text-white">19 months–2 years</p>
              </div>
            </Link>
            <Link href="/programs/primary" className="bg-gradient-to-br from-purple-400 to-purple-500 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center">
                <span className="text-4xl mb-4 block">✏️</span>
                <h3 className="text-2xl font-bold mb-3">PreK3</h3>
                <p className="mb-4 font-semibold text-white">3 years</p>
              </div>
            </Link>
            <Link href="/programs/primary" className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center">
                <span className="text-4xl mb-4 block">📖</span>
                <h3 className="text-2xl font-bold mb-3">PreK4</h3>
                <p className="mb-4 font-semibold text-white">4 years</p>
              </div>
            </Link>
            <Link href="/programs/school-age" className="bg-gradient-to-br from-orange-400 to-yellow-500 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🎒</span>
                <h3 className="text-2xl font-bold mb-3">Before & After School Care</h3>
                <p className="mb-4 font-semibold text-white">School-age</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
              🌟 Simple Enrollment Process
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              Four easy steps to join our BrightMont family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-600">🔍 Discover</h3>
              <p className="text-gray-700 font-medium">Schedule a tour and learn about our programs</p>
            </div>
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3 text-green-600">📝 Apply</h3>
              <p className="text-gray-700 font-medium">Submit your application and required documents</p>
            </div>
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-600">📅 Schedule</h3>
              <p className="text-gray-700 font-medium">Meet with our team for application review</p>
            </div>
            <div className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-2xl font-bold mb-3 text-orange-600">🎓 Enroll</h3>
              <p className="text-gray-700 font-medium">Complete enrollment and fee assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
              🎯 Enrichment Programs
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              Enhancing each child's learning journey through meaningful, hands-on experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-center">
              <div className="text-4xl mb-4">🍳</div>
              <h4 className="font-bold text-xl mb-3">Culinary Experiences</h4>
              <p className="text-white/90">Hands-on kitchen activities that spark creativity and independence.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-center">
              <div className="text-4xl mb-4">🧘</div>
              <h4 className="font-bold text-xl mb-3">Yoga & Mindfulness</h4>
              <p className="text-white/90">Movement and mindfulness to build balance, focus and calm.</p>
            </div>
            <div className="bg-gradient-to-br from-red-400 to-red-500 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="font-bold text-xl mb-3">Spanish Language Exposure</h4>
              <p className="text-white/90">Fun language exposure through songs, stories and play.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BrightMont */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
              ✨ Why Choose BrightMont?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-blue-200">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-blue-600">Strong Curriculum & Learning</h3>
            </div>
            <div className="text-center bg-white p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-pink-200">
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-lg font-bold text-pink-600">Warm, Dedicated Teachers</h3>
            </div>
            <div className="text-center bg-white p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-green-200">
              <div className="bg-gradient-to-br from-green-400 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-green-600">Safe, Clean Environment</h3>
            </div>
            <div className="text-center bg-white p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-cyan-200">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-bold text-cyan-600">Clear Parent Communication</h3>
            </div>
            <div className="text-center bg-white p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-orange-200">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-orange-600">Culinary, Yoga & Spanish Enrichment</h3>
            </div>
            <div className="text-center bg-white p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-purple-200">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-2xl">🤗</span>
              </div>
              <h3 className="text-lg font-bold text-purple-600">Inclusive, Welcoming Community</h3>
            </div>
            <div className="text-center bg-white p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-teal-200 col-span-2 md:col-span-1">
              <div className="bg-gradient-to-br from-teal-400 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-lg font-bold text-teal-600">Programs From Infants to School-Age</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <span className="text-6xl mb-6 block">😍</span>
            <blockquote className="text-2xl md:text-3xl text-gray-800 mb-6 italic font-medium">
              "The teachers and the care they provide cannot be compared to any other daycare or learning center around."
            </blockquote>
            <cite className="text-xl font-bold text-purple-600">
              - Tara Gonzalez, M. Ed. Dyslexia Specialist
            </cite>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">📱 Stay Connected</h2>
          <p className="text-xl mb-8 font-medium">Get updates about school events and educational tips</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 bg-white border-4 border-white focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-lg"
            />
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-xl">
              ✨ Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}