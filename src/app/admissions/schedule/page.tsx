export default function Schedule() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
              3
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              📅 Schedule Review
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet with our team to discuss your application and plan your child's program
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">🤝 Application Review Meeting</h2>

          <p className="text-gray-700 mb-6 text-lg font-medium">
            After submitting your application, we'll schedule a comprehensive review meeting where our admissions team will discuss your child's needs, answer your questions, and work together to create the best possible educational plan. This personal meeting ensures that both you and our school are prepared for your child's success.
          </p>

          <p className="text-gray-700 mb-8 font-medium">
            During this meeting, we'll review your application materials, discuss any special considerations, and help you understand exactly how our learning approach will benefit your child. This is also an excellent opportunity to address any concerns and finalize program details.
          </p>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6">
              📋 Types of Review Meetings
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-purple-200">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-600">Standard Application Review</h3>
              <p className="text-gray-700 mb-4 font-medium">
                For most families, this comprehensive meeting covers all aspects of enrollment and program planning.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Review of application and documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Discussion of child's developmental needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Program recommendations and scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Tuition and payment planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Timeline for enrollment completion</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded-2xl">
                <p className="text-sm text-purple-800 font-medium">
                  <strong>Duration:</strong> 30-45 minutes<br/>
                  <strong>Participants:</strong> Parents/guardians and admissions director
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-blue-200">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl">💙</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-600">Special Needs Consultation</h3>
              <p className="text-gray-700 mb-4 font-medium">
                For children with special needs, learning differences, or developmental considerations, we provide extended consultation meetings.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Review of IEPs, 504 plans, or assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Discussion with special education coordinator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Accommodation planning and support strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Collaboration with outside therapists/specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Individualized program development</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-2xl">
                <p className="text-sm text-blue-800 font-medium">
                  <strong>Duration:</strong> 60-90 minutes<br/>
                  <strong>Participants:</strong> Parents, admissions director, and special needs coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
              ⭐ What to Expect During Your Meeting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border-4 border-purple-200">
                <h3 className="text-lg font-bold text-purple-700 mb-3">📋 Application Review</h3>
                <p className="text-gray-700 text-sm font-medium">We'll go through your completed application together, clarifying any questions and discussing your child's background, interests, and developmental needs.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border-4 border-blue-200">
                <h3 className="text-lg font-bold text-blue-700 mb-3">🎯 Program Matching</h3>
                <p className="text-gray-700 text-sm font-medium">Based on your child's age and needs, we'll recommend the most appropriate program and discuss scheduling options that work for your family.</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-3xl border-4 border-green-200">
                <h3 className="text-lg font-bold text-green-700 mb-3">🌟 Transition Planning</h3>
                <p className="text-gray-700 text-sm font-medium">We'll create a personalized transition plan to help your child adjust comfortably to their new environment and routine.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-3xl border-4 border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-700 mb-3">❓ Questions & Concerns</h3>
                <p className="text-gray-700 text-sm font-medium">This is your opportunity to ask any questions about our philosophy, daily routines, policies, or anything else that's important to your family.</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-3xl border-4 border-orange-200">
                <h3 className="text-lg font-bold text-orange-700 mb-3">➡️ Next Steps</h3>
                <p className="text-gray-700 text-sm font-medium">We'll outline the remaining enrollment steps, including fee payment, orientation scheduling, and first day preparation.</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-3xl border-4 border-pink-200">
                <h3 className="text-lg font-bold text-pink-700 mb-3">📄 Documentation</h3>
                <p className="text-gray-700 text-sm font-medium">Review any outstanding documentation needs and ensure all required forms are complete and properly filed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Preparation */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              📝 Preparing for Your Meeting
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              How to make the most of your application review meeting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-purple-200">
              <h3 className="text-xl font-bold mb-6 text-purple-600">📋 What to Bring</h3>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Any additional documentation or forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>List of questions or concerns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Calendar for scheduling planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Insurance information (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Previous school contact information</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-blue-200">
              <h3 className="text-xl font-bold mb-6 text-blue-600">❓ Questions to Consider</h3>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>What does a typical day look like for my child?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>How do you handle transitions and separation anxiety?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>What communication can I expect from teachers?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>How do you support children with different learning styles?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>What parent involvement opportunities exist?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🌟 Ready to Schedule Your Review?
          </h2>
          <p className="text-xl mb-8">
            Complete your application first, then contact us to schedule your comprehensive review meeting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule Meeting
            </a>
            <a
              href="tel:281-251-3851"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call (281) 251-3851
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/30">
            <p className="text-white/90 text-sm font-medium">
              Meeting times available: Monday - Friday, 9:00 AM - 4:00 PM<br/>
              Evening and Saturday appointments available by special arrangement
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
