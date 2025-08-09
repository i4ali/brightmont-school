import Link from 'next/link';
import Image from 'next/image';
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
        <div className="relative z-20 bg-gradient-to-t from-black/40 via-transparent to-black/40 flex items-center justify-center h-full pointer-events-none">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl pointer-events-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 drop-shadow-lg">
              Quality Montessori education for children ages 6 weeks to 6 years
            </p>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              Located in Spring, Texas • Open 6:30 AM - 6:00 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/admissions"
                className="bg-white text-blue-600 border-2 border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Learn About Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Montessori Plus Education */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Montessori Plus Education
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our unique educational approach combines traditional Montessori methods with modern learning techniques, 
              fostering independence, creativity, and a lifelong love of learning in every child.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Child-Led Learning</h3>
              <p className="text-gray-600">Children guide their own educational journey with teacher support</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mixed-Age Classrooms</h3>
              <p className="text-gray-600">Collaborative learning environment that mirrors real-world social dynamics</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Independence Focus</h3>
              <p className="text-gray-600">Building confidence and self-reliance through hands-on experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Programs by Age Group
            </h2>
            <p className="text-lg text-gray-600">
              Specialized programs designed for each developmental stage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/programs/infant" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Infants</h3>
              <p className="text-gray-600 mb-4">6 weeks - 18 months</p>
              <p className="text-sm text-gray-500">Nurturing care focused on sensory development and basic skills</p>
            </Link>
            <Link href="/programs/toddler" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-green-600">Toddlers</h3>
              <p className="text-gray-600 mb-4">18 months - 3 years</p>
              <p className="text-sm text-gray-500">Independence building with language and motor skill development</p>
            </Link>
            <Link href="/programs/primary" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Pre-K</h3>
              <p className="text-gray-600 mb-4">3 - 6 years</p>
              <p className="text-sm text-gray-500">Academic readiness with social and emotional growth</p>
            </Link>
            <Link href="/programs/summer-camp" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">Summer Camp</h3>
              <p className="text-gray-600 mb-4">All ages</p>
              <p className="text-sm text-gray-500">Fun summer activities with continued learning</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple Enrollment Process
            </h2>
            <p className="text-lg text-gray-600">
              Four easy steps to join our BrightMont family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Discover</h3>
              <p className="text-gray-600">Schedule a tour and learn about our programs</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application and required documents</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule</h3>
              <p className="text-gray-600">Meet with our team for application review</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Enroll</h3>
              <p className="text-gray-600">Complete enrollment and fee assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enrichment Programs
            </h2>
            <p className="text-lg text-gray-600">
              Additional activities that enhance your child's learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-green-600 mb-2">🌿</div>
              <h4 className="font-semibold">Nature Learning</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-2">🎨</div>
              <h4 className="font-semibold">Art Activities</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-purple-600 mb-2">🎵</div>
              <h4 className="font-semibold">Music & Dance</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-red-600 mb-2">🗣️</div>
              <h4 className="font-semibold">Language</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-orange-600 mb-2">⚽</div>
              <h4 className="font-semibold">Soccer</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BrightMont */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose BrightMont?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Nutritious Meals</h3>
              <p className="text-gray-600">Daily hot meals prepared with care</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-gray-600">Individual attention for every child</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Teachers</h3>
              <p className="text-gray-600">Qualified educators who care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
            "The teachers and the care they provide cannot be compared to any other daycare or Montessori school around."
          </blockquote>
          <cite className="text-lg font-semibold text-gray-900">
            - Tara Gonzalez, M. Ed. Dyslexia Specialist
          </cite>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-8">Get updates about school events and educational tips</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}