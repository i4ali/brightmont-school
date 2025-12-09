'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    program: '',
    startDate: '',
    message: '',
    inquiry: 'general'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        childAge: '',
        program: '',
        startDate: '',
        message: '',
        inquiry: 'general'
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              📞 Contact Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We'd love to hear from you! Get in touch to learn more about our programs or schedule a visit
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-8">🤝 Get in Touch</h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border-4 border-blue-200">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-600 mb-1">Address</h3>
                      <p className="text-gray-700 font-medium">
                        17710 S. Cypress Villas Dr<br/>
                        Spring, Texas 77379
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-3xl border-4 border-green-200">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-green-400 to-green-500 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-600 mb-1">Phone</h3>
                      <p className="text-gray-700 font-medium">
                        <a href="tel:281-251-3851" className="hover:text-green-600 transition-colors">
                          (281) 251-3851
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border-4 border-purple-200">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple-600 mb-1">Email</h3>
                      <p className="text-gray-700 font-medium">
                        <a href="mailto:info@brightmontschool.com" className="hover:text-purple-600 transition-colors">
                          info@brightmontschool.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-3xl border-4 border-yellow-200">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-2xl">🕐</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-orange-600 mb-1">Hours</h3>
                      <p className="text-gray-700 font-medium">
                        Monday - Friday<br/>
                        6:30 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-3xl border-4 border-pink-200">
                  <h3 className="text-lg font-bold text-pink-600 mb-4">📣 Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/BrightmontSchoolSpring"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/brightmontacademy4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-pink-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-2.003 6.197A3.803 3.803 0 0110 2.394a3.803 3.803 0 012.003 3.803v7.606A3.803 3.803 0 0110 17.606a3.803 3.803 0 01-2.003-3.803V6.197z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 p-8 rounded-3xl border-4 border-cyan-200">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-8">💬 Send Us a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border-4 border-green-300 text-green-700 rounded-2xl">
                  <div className="flex items-center font-medium">
                    <span className="text-2xl mr-2">✅</span>
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-bold text-gray-700 mb-2">
                      Type of Inquiry
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                    >
                      <option value="general">General Information</option>
                      <option value="tour">Schedule a Tour</option>
                      <option value="admissions">Admissions Question</option>
                      <option value="programs">Program Information</option>
                      <option value="tuition">Tuition & Fees</option>
                      <option value="employment">Employment Opportunity</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-bold text-gray-700 mb-2">
                      Child's Age (if applicable)
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-orange-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    >
                      <option value="">Select Age</option>
                      <option value="6-weeks-18-months">6 weeks - 18 months</option>
                      <option value="18-months-3-years">18 months - 3 years</option>
                      <option value="3-6-years">3 - 6 years</option>
                      <option value="6-plus">6+ years</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-sm font-bold text-gray-700 mb-2">
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                    >
                      <option value="">Select Program</option>
                      <option value="infant">Infant Program</option>
                      <option value="toddler">Toddler Program</option>
                      <option value="pre-k">Pre-K Program</option>
                      <option value="school-age">School Age Program</option>
                      <option value="summer-camp">Summer Camp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-sm font-bold text-gray-700 mb-2">
                    Desired Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-cyan-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please tell us more about your inquiry or any specific questions you have..."
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-4 px-6 rounded-full text-lg font-bold text-white shadow-lg ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 hover:shadow-xl'
                    } transition-all`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      '📨 Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">🗺️ Visit Our Campus</h2>
            <p className="text-lg text-gray-700 font-medium">
              Located in the heart of Spring, Texas, easily accessible from surrounding communities
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-green-200">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.8!2d-95.4!3d30.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA2JzAwLjAiTiA5NcKwMjQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BrightMont School Location"
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-green-50 to-cyan-50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-green-700">📍 17710 S. Cypress Villas Dr, Spring, TX 77379</p>
                  <p className="text-gray-700 font-medium">Convenient location with easy access from I-45 and Beltway 8</p>
                </div>
                <a
                  href="https://maps.google.com/?q=17710+S.+Cypress+Villas+Dr,+Spring,+TX+77379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all"
                >
                  🚗 Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}