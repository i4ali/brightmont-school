export default function Apply() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
              2
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Application Process
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Submit your application and required documents to begin enrollment
            </p>
          </div>
        </div>
      </section>

      {/* Application Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Apply?</h2>
            
            <p className="text-gray-700 mb-6">
              Once you've toured our school and decided that BrightMont Montessori Academy is the right fit for your child, the application process is straightforward. We've designed our application to gather the information we need to understand your child's needs and how we can best support their development.
            </p>

            <p className="text-gray-700 mb-8">
              Our admissions team carefully reviews each application to ensure we can provide the appropriate environment and support for your child's success. We welcome children at various developmental stages and work with families to create the best possible educational experience.
            </p>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Application Steps
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to complete your application
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Complete Application Form</h3>
                <p className="text-gray-600 mb-3">Fill out our comprehensive application form with information about your child's development, interests, and any special needs or considerations.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Basic family and child information</li>
                  <li>• Child's developmental history and interests</li>
                  <li>• Previous school experience (if applicable)</li>
                  <li>• Special needs or considerations</li>
                  <li>• Emergency contacts and medical information</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Submit Required Documents</h3>
                <p className="text-gray-600 mb-3">Gather and submit all required documentation to complete your application package.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                  <div>
                    <strong>Required for All Ages:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Child's birth certificate</li>
                      <li>• Current immunization records</li>
                      <li>• Recent physical examination</li>
                      <li>• Emergency contact forms</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Additional for School-Age:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Previous school records</li>
                      <li>• Teacher recommendations</li>
                      <li>• Academic transcripts</li>
                      <li>• Any IEP or 504 plans</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Pay Application Fee</h3>
                <p className="text-gray-600 mb-3">Submit the non-refundable application processing fee to begin the review process.</p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Application Fee:</strong> $75 per child<br/>
                    <strong>Payment Methods:</strong> Check, cash, or online payment<br/>
                    <strong>Note:</strong> Fee is applied toward first month's tuition upon enrollment
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-yellow-600 font-bold">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Application Review</h3>
                <p className="text-gray-600 mb-3">Our admissions team reviews your complete application and may request additional information or schedule a follow-up meeting.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Review process typically takes 3-5 business days</li>
                  <li>• You'll receive confirmation of application receipt</li>
                  <li>• Follow-up contact for any additional questions</li>
                  <li>• Notification of acceptance or waitlist status</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Required Documentation
            </h2>
            <p className="text-lg text-gray-600">
              Detailed information about each required document
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Health & Safety Documents</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Immunization Records</h4>
                  <p className="text-gray-600 text-sm mb-2">Current immunization records from your child's pediatrician, including:</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• DTaP, IPV, MMR, Varicella vaccines</li>
                    <li>• Hepatitis A and B vaccines</li>
                    <li>• Annual flu vaccine (recommended)</li>
                    <li>• Any additional state-required immunizations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Physical Examination</h4>
                  <p className="text-gray-600 text-sm mb-2">Complete physical examination form signed by licensed physician within 12 months, including:</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Overall health assessment</li>
                    <li>• Vision and hearing screening</li>
                    <li>• Any medical conditions or allergies</li>
                    <li>• Medication administration requirements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Information</h4>
                  <p className="text-gray-600 text-sm">Complete emergency contact forms with authorized pickup persons and medical emergency procedures.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Personal & Academic Documents</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Birth Certificate</h4>
                  <p className="text-gray-600 text-sm">Certified copy of child's birth certificate to verify age and identity.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Previous School Records (if applicable)</h4>
                  <p className="text-gray-600 text-sm mb-2">For children with previous school experience:</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Academic transcripts or progress reports</li>
                    <li>• Teacher recommendations</li>
                    <li>• Any special education documentation</li>
                    <li>• Behavioral or social assessments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Special Needs Documentation</h4>
                  <p className="text-gray-600 text-sm">If applicable, please provide IEP, 504 plans, therapy reports, or other professional assessments to help us support your child's needs.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Custody Documentation</h4>
                  <p className="text-gray-600 text-sm">If applicable, legal custody agreements or court orders affecting pickup authorization and emergency contacts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Application Timeline
            </h2>
            <p className="text-lg text-gray-600">
              Understanding our enrollment timeline and important dates
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Fall Enrollment (August Start)</h4>
                <p className="text-gray-600 text-sm mb-2">Applications accepted: November - May</p>
                <p className="text-xs text-gray-500">Priority given to applications received by March 1st</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Spring Enrollment (January Start)</h4>
                <p className="text-gray-600 text-sm mb-2">Applications accepted: September - December</p>
                <p className="text-xs text-gray-500">Limited spaces available for mid-year entry</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Rolling Admissions</h4>
                <p className="text-gray-600 text-sm mb-2">Year-round applications accepted</p>
                <p className="text-xs text-gray-500">Enrollment subject to space availability</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Summer Camp</h4>
                <p className="text-gray-600 text-sm mb-2">Applications accepted: February - May</p>
                <p className="text-xs text-gray-500">Early registration recommended - spaces fill quickly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Priorities */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Admission Priorities
            </h2>
            <p className="text-lg text-gray-600">
              How we prioritize applications when space is limited
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Currently Enrolled Families</h4>
                  <p className="text-gray-600 text-sm">Siblings of current students and families adding additional programs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Alumni Families</h4>
                  <p className="text-gray-600 text-sm">Families with children who previously attended BrightMont</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Early Applications</h4>
                  <p className="text-gray-600 text-sm">Applications received before priority deadline dates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">General Applications</h4>
                  <p className="text-gray-600 text-sm">All other qualified applications in order of receipt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Application Today
          </h2>
          <p className="text-xl mb-8">
            Ready to begin the enrollment process? Contact us to request application materials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Application
            </a>
            <a
              href="tel:281-251-3851"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Call (281) 251-3851
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-green-400">
            <p className="text-green-100 text-sm">
              Questions about the application process? Our admissions team is here to help!<br/>
              <strong>Email:</strong> info@brightmontschool.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}