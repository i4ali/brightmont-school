export default function Schedule() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
              3
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Schedule Review
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet with our team to discuss your application and plan your child's program
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Review Meeting</h2>
            
            <p className="text-gray-700 mb-6">
              After submitting your application, we'll schedule a comprehensive review meeting where our admissions team will discuss your child's needs, answer your questions, and work together to create the best possible educational plan. This personal meeting ensures that both you and our school are prepared for your child's success.
            </p>

            <p className="text-gray-700 mb-8">
              During this meeting, we'll review your application materials, discuss any special considerations, and help you understand exactly how our Montessori approach will benefit your child. This is also an excellent opportunity to address any concerns and finalize program details.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Types of Review Meetings
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Standard Application Review</h3>
              <p className="text-gray-600 mb-4">
                For most families, this comprehensive meeting covers all aspects of enrollment and program planning.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
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
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Duration:</strong> 30-45 minutes<br/>
                  <strong>Participants:</strong> Parents/guardians and admissions director
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Special Needs Consultation</h3>
              <p className="text-gray-600 mb-4">
                For children with special needs, learning differences, or developmental considerations, we provide extended consultation meetings.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
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
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Duration:</strong> 60-90 minutes<br/>
                  <strong>Participants:</strong> Parents, admissions director, and special needs coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What to Expect During Your Meeting
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Application Review</h3>
                <p className="text-gray-700 text-sm">We'll go through your completed application together, clarifying any questions and discussing your child's background, interests, and developmental needs.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Program Matching</h3>
                <p className="text-gray-700 text-sm">Based on your child's age and needs, we'll recommend the most appropriate program and discuss scheduling options that work for your family.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Transition Planning</h3>
                <p className="text-gray-700 text-sm">We'll create a personalized transition plan to help your child adjust comfortably to their new environment and routine.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Questions & Concerns</h3>
                <p className="text-gray-700 text-sm">This is your opportunity to ask any questions about our philosophy, daily routines, policies, or anything else that's important to your family.</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Next Steps</h3>
                <p className="text-gray-700 text-sm">We'll outline the remaining enrollment steps, including fee payment, orientation scheduling, and first day preparation.</p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">Documentation</h3>
                <p className="text-gray-700 text-sm">Review any outstanding documentation needs and ensure all required forms are complete and properly filed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Preparation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Preparing for Your Meeting
            </h2>
            <p className="text-lg text-gray-600">
              How to make the most of your application review meeting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">What to Bring</h3>
              <ul className="space-y-3 text-gray-700">
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

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Questions to Consider</h3>
              <ul className="space-y-3 text-gray-700">
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

      {/* Child Observation Visit */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Child Observation Visit
            </h2>
            <p className="text-lg text-gray-600">
              Optional classroom visit for your child (recommended for children 3+)
            </p>
          </div>
          
          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                For children ages 3 and older, we may recommend a brief classroom observation visit. This allows us to see how your child interacts with the Montessori environment and helps us better understand their learning style and social needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What Happens During the Visit:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• 30-45 minute classroom observation</li>
                    <li>• Child works with materials independently</li>
                    <li>• Teacher observes interaction style</li>
                    <li>• Assessment of readiness for program</li>
                    <li>• Feedback session with parents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits for Your Child:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Familiar environment on first day</li>
                    <li>• Reduced first-day anxiety</li>
                    <li>• Teacher understanding of preferences</li>
                    <li>• Smoother transition into program</li>
                    <li>• Confidence in new setting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Possible Meeting Outcomes
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg font-semibold text-green-800">Acceptance & Enrollment</h3>
              </div>
              <p className="text-green-700 text-sm">Your child is accepted into the program! We'll move forward with enrollment finalization, fee payment, and start date planning.</p>
            </div>
            
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg font-semibold text-yellow-800">Conditional Acceptance</h3>
              </div>
              <p className="text-yellow-700 text-sm">Acceptance pending completion of additional requirements such as documentation, observation visit, or waitlist position.</p>
            </div>
            
            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg font-semibold text-blue-800">Waitlist Placement</h3>
              </div>
              <p className="text-blue-700 text-sm">Program is currently full, but your child is placed on our priority waitlist with estimated timeline for potential opening.</p>
            </div>
            
            <div className="bg-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                </svg>
                <h3 className="text-lg font-semibold text-purple-800">Alternative Recommendations</h3>
              </div>
              <p className="text-purple-700 text-sm">We may suggest a different program, start date, or additional resources that would better meet your child's current needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Schedule Your Review?
          </h2>
          <p className="text-xl mb-8">
            Complete your application first, then contact us to schedule your comprehensive review meeting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Meeting
            </a>
            <a
              href="tel:281-251-3851"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call (281) 251-3851
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-purple-400">
            <p className="text-purple-100 text-sm">
              Meeting times available: Monday - Friday, 9:00 AM - 4:00 PM<br/>
              Evening and Saturday appointments available by special arrangement
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}