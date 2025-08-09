export default function Fees() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-yellow-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
              4
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tuition & Fees
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transparent pricing and flexible payment options for your family
            </p>
          </div>
        </div>
      </section>

      {/* Investment in Education */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">An Investment in Your Child's Future</h2>
            
            <p className="text-gray-700 mb-6">
              At BrightMont Montessori Academy, we believe that quality early childhood education is one of the most important investments you can make in your child's future. Our tuition structure reflects the exceptional care, individualized attention, and authentic Montessori education that your child will receive.
            </p>

            <p className="text-gray-700 mb-8">
              We strive to make our programs accessible to families while maintaining the high standards that make our school special. Our transparent fee structure includes all educational materials, nutritious meals, and most activities, so you won't encounter surprise costs throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Tuition Rates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2024-2025 Tuition Rates
            </h2>
            <p className="text-lg text-gray-600">
              All rates are monthly tuition fees
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Full-Time Programs */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">Full-Time Programs</h3>
              <p className="text-gray-600 text-sm mb-6">Monday - Friday, 6:30 AM - 6:00 PM</p>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">Infant Program</h4>
                      <p className="text-sm text-gray-600">6 weeks - 18 months</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-yellow-600">$1,895</p>
                      <p className="text-sm text-gray-500">per month</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">Toddler Program</h4>
                      <p className="text-sm text-gray-600">18 months - 3 years</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-yellow-600">$1,695</p>
                      <p className="text-sm text-gray-500">per month</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">Pre-K Program</h4>
                      <p className="text-sm text-gray-600">3 - 6 years</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-yellow-600">$1,495</p>
                      <p className="text-sm text-gray-500">per month</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">School Age Program</h4>
                      <p className="text-sm text-gray-600">After school care, 6+ years</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-yellow-600">$895</p>
                      <p className="text-sm text-gray-500">per month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part-Time & Special Programs */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Part-Time & Special Programs</h3>
              <p className="text-gray-600 text-sm mb-6">Flexible options for various schedules</p>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">Half-Day Pre-K</h4>
                      <p className="text-sm text-gray-600">8:00 AM - 12:00 PM or 12:00 PM - 4:00 PM</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">$995</p>
                      <p className="text-sm text-gray-500">per month</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">3-Day Program</h4>
                      <p className="text-sm text-gray-600">Mon/Wed/Fri, All programs</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">$1,195</p>
                      <p className="text-sm text-gray-500">per month</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">Drop-in Care</h4>
                      <p className="text-sm text-gray-600">Occasional care, when available</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">$65</p>
                      <p className="text-sm text-gray-500">per day</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">Summer Camp</h4>
                      <p className="text-sm text-gray-600">10-week program, all ages</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">$1,295</p>
                      <p className="text-sm text-gray-500">per month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Additional Fees
            </h2>
            <p className="text-lg text-gray-600">
              One-time and annual fees to support your child's education
            </p>
          </div>
          
          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">One-Time Fees:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Application Fee</span>
                    <span className="font-semibold">$75</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Registration Fee</span>
                    <span className="font-semibold">$200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Security Deposit*</span>
                    <span className="font-semibold">$500</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">*Refundable upon withdrawal with 30-day notice</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Annual Fees:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Materials & Supplies Fee</span>
                    <span className="font-semibold">$150</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Technology Fee</span>
                    <span className="font-semibold">$50</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Field Trip Fund (Pre-K+)</span>
                    <span className="font-semibold">$100</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What's Included in Tuition
            </h2>
            <p className="text-lg text-gray-600">
              Your tuition covers comprehensive care and education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Montessori Materials</h3>
              <p className="text-gray-600 text-sm">Access to authentic Montessori learning materials in all curriculum areas</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Nutritious Meals</h3>
              <p className="text-gray-600 text-sm">Fresh breakfast, lunch, and afternoon snack prepared in our kitchen daily</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Certified Teachers</h3>
              <p className="text-gray-600 text-sm">Montessori-trained educators with ongoing professional development</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enrichment Activities</h3>
              <p className="text-gray-600 text-sm">Art, music, nature studies, and special programs included in daily curriculum</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Individual Attention</h3>
              <p className="text-gray-600 text-sm">Small class sizes ensuring personalized care and education for every child</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Family Communication</h3>
              <p className="text-gray-600 text-sm">Regular updates, conferences, and ongoing communication about your child's progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Flexible Payment Options
            </h2>
            <p className="text-lg text-gray-600">
              We offer several convenient ways to pay tuition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Payment Schedule Options</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Monthly:</strong> Due on the 1st of each month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Quarterly:</strong> 3% discount on quarterly payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Annual:</strong> 5% discount for full year paid in advance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Sibling Discount:</strong> 10% off second child's tuition</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Payment Methods</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Auto-Pay:</strong> Automatic bank draft (2% discount)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Online Portal:</strong> Credit/debit card payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Check:</strong> Made payable to BrightMont Academy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>FSA/HSA:</strong> Dependent care accounts accepted</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Financial Assistance
            </h2>
            <p className="text-lg text-gray-600">
              We believe every child deserves access to quality Montessori education
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                BrightMont Montessori Academy offers need-based financial assistance to qualifying families. Our scholarship program is funded through our annual giving campaign and community partnerships, allowing us to make Montessori education accessible to diverse families.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Scholarship Opportunities:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Need-based tuition assistance</li>
                    <li>• Single parent family scholarships</li>
                    <li>• Teacher and first responder discounts</li>
                    <li>• Military family discounts</li>
                    <li>• Partial and full scholarship options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Application Process:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Complete financial assistance application</li>
                    <li>• Submit tax returns and financial documents</li>
                    <li>• Applications due by April 1st for fall enrollment</li>
                    <li>• Awards announced by May 15th</li>
                    <li>• Renewable annually with reapplication</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Financial assistance applications are separate from enrollment applications. Please contact our admissions office to request financial assistance materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Policies */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Important Tuition Policies
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Late Payment Policy</h4>
              <p className="text-gray-700 text-sm">Tuition is due on the 1st of each month. A $50 late fee applies to payments received after the 10th. Students may be withdrawn from the program if payment is more than 30 days overdue.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Withdrawal Policy</h4>
              <p className="text-gray-700 text-sm">30-day written notice is required for withdrawal. Tuition for the notice period is due regardless of attendance. The security deposit will be refunded after the notice period, minus any outstanding charges.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Absence Policy</h4>
              <p className="text-gray-700 text-sm">Tuition remains the same regardless of absences, holidays, or temporary school closures. No credits or refunds are given for missed days due to illness, family vacations, or other personal reasons.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Rate Changes</h4>
              <p className="text-gray-700 text-sm">Tuition rates are reviewed annually and may be adjusted for the following school year. Families receive 60-day advance notice of any rate changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Questions About Tuition?
          </h2>
          <p className="text-xl mb-8">
            Our admissions team is here to help you understand our fee structure and explore payment options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:281-251-3851"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              Call (281) 251-3851
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-yellow-400">
            <p className="text-yellow-100 text-sm">
              <strong>Financial Assistance Available</strong><br/>
              Don't let tuition concerns prevent you from applying - we're committed to making<br/>
              quality Montessori education accessible to all families.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}