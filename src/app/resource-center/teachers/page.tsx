import Image from 'next/image';

export const metadata = {
  title: 'Teachers - BrightMont Learning Center',
  description: 'Meet our trained certified educators and support assistants at BrightMont Learning Center in Spring, Texas.',
  keywords: 'teachers, certified educators, Spring TX, trained staff, quality education',
};

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
            👩‍🏫 Our Teachers 👨‍🏫
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team of certified educators
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-transparent bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-3xl blur opacity-30"></div>
                <Image
                  src="/Math-Puzzle.jpg"
                  alt="Teacher working with children on a math puzzle activity, demonstrating hands-on learning approach"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <span className="mr-3">🌟</span>
                  Certified Educators
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Our school is staffed with trained certified educators and support assistants. Each member of our school faculty is sensitive to the needs of the children and their families and has a strong commitment to quality education.
                  </p>
                  
                  <p>
                    The faculty meets frequently to discuss curriculum, plan programs and share and exchange ideas. All our staff are trained with standard aid and C.P.R. and are required to get background checks as per state regulations.
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-10 grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-4 border-2 border-green-200">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✅</span>
                      <span className="font-semibold text-gray-800">Certified Educators</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4 border-2 border-blue-200">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🩹</span>
                      <span className="font-semibold text-gray-800">First Aid & CPR Trained</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 border-2 border-purple-200">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🛡️</span>
                      <span className="font-semibold text-gray-800">Background Checked & State Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}