export default function Discover() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
              1
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover BrightMont
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience our Montessori environment firsthand with a personalized tour
            </p>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Schedule a Tour?</h2>
            
            <p className="text-gray-700 mb-6">
              A tour of BrightMont Montessori Academy is the best way to understand our educational philosophy and see how our prepared environments support each child's natural development. During your visit, you'll witness the magic of Montessori education in action and discover why families choose our school for their children.
            </p>

            <p className="text-gray-700 mb-8">
              Our personalized tours allow you to ask questions, meet our teachers, and observe children engaged in meaningful work. You'll see firsthand how we foster independence, creativity, and a love of learning in our carefully designed classrooms.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What You'll Experience During Your Tour
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Classroom Observation</h3>
              <p className="text-gray-600 text-sm">Watch children engaged in self-directed learning with authentic Montessori materials across all curriculum areas.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Meet Our Teachers</h3>
              <p className="text-gray-600 text-sm">Get to know our certified Montessori educators and learn about their approach to guiding children's learning.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning Materials</h3>
              <p className="text-gray-600 text-sm">Explore the specially designed Montessori materials that make abstract concepts concrete and accessible.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Facilities Tour</h3>
              <p className="text-gray-600 text-sm">See our prepared environments, outdoor spaces, kitchen, and all the facilities that support your child's development.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Program Information</h3>
              <p className="text-gray-600 text-sm">Learn about our programs for different age groups, schedules, tuition, and enrollment procedures.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Q&A Session</h3>
              <p className="text-gray-600 text-sm">Ask questions about our philosophy, curriculum, daily routines, and how we can support your child's unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Choose Your Tour Experience
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Individual Tours</h3>
              <p className="text-gray-700 mb-4">
                Perfect for families who want personalized attention and the opportunity to ask specific questions about their child's needs.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>One-on-one time with admissions director</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Customized tour based on your interests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Extended time for questions and discussion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Available Monday-Friday, 9:00 AM - 3:00 PM</span>
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> 45-60 minutes<br/>
                  <strong>Best for:</strong> Families ready to make enrollment decisions
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Group Information Sessions</h3>
              <p className="text-gray-700 mb-4">
                Great for families in the early stages of school selection who want to learn about Montessori education alongside other parents.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Montessori philosophy presentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Program overview for all age groups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Meet other prospective families</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Held monthly on Saturday mornings</span>
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> 90 minutes<br/>
                  <strong>Best for:</strong> Families new to Montessori education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Preparing for Your Visit
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Questions about your child's specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Information about your child's interests and development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Your child (optional - some prefer to visit alone first)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Notepad for important information</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tour Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Please arrive 5 minutes before your scheduled time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>We maintain quiet voices to respect working children</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Photography is allowed in designated areas only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Please turn cell phones to silent mode</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Times to Visit */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Best Times to Observe
            </h2>
            <p className="text-lg text-gray-600">
              Different times of day offer unique perspectives on our Montessori environment
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">AM</span>
                </div>
                <h4 className="font-semibold mb-2">Morning Work Cycle</h4>
                <p className="text-sm text-gray-600">9:00 AM - 11:30 AM<br/>See the 3-hour uninterrupted work period in action</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">12</span>
                </div>
                <h4 className="font-semibold mb-2">Lunch Community</h4>
                <p className="text-sm text-gray-600">12:00 PM - 1:00 PM<br/>Experience grace and courtesy during family-style lunch</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">PM</span>
                </div>
                <h4 className="font-semibold mb-2">Afternoon Activities</h4>
                <p className="text-sm text-gray-600">2:00 PM - 4:00 PM<br/>See creative arts, outdoor play, and extended day programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Tour CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Discover BrightMont?
          </h2>
          <p className="text-xl mb-8">
            Schedule your personalized tour today and see why families choose our Montessori academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Your Tour
            </a>
            <a
              href="tel:281-251-3851"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (281) 251-3851
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-400">
            <p className="text-blue-100">
              <strong>School Hours:</strong> Monday - Friday, 6:30 AM - 6:00 PM<br/>
              <strong>Tour Times:</strong> Monday - Friday, 9:00 AM - 3:00 PM<br/>
              <strong>Group Sessions:</strong> First Saturday of each month, 10:00 AM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}