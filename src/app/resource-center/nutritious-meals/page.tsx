import Image from 'next/image';

export const metadata = {
  title: 'Nutritious Meals | Resource Center | BrightMont Learning Center',
  description: 'We offer nutritious meals for kids in a family style at our School Kitchen, prepared daily. Our menus are nutritious and tasty for kids to enjoy.',
};

export default function NutritiousMeals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
            🍽️ Nutritious Meals 🥗
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Healthy, delicious meals prepared fresh daily in our school kitchen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-orange-200 hover:shadow-2xl transition-all duration-300">
            <div className="mb-6">
              <Image
                src="/Brightmont-Food-scaled.jpg"
                alt="Nutritious meal with pasta, broccoli, and oranges served on child's plate"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">🍝 Daily Fresh Meals</h2>
            <p className="text-gray-700 leading-relaxed">
              Our nutritious and colorful meals feature fresh pasta, steamed vegetables, 
              and seasonal fruits that kids love to eat and parents trust.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-green-200 hover:shadow-2xl transition-all duration-300">
            <div className="mb-6">
              <Image
                src="/Easter-Party-Lunch.jpg"
                alt="Children sitting around table enjoying family-style meal in dining area"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">👨‍👩‍👧‍👦 Family Style Dining</h2>
            <p className="text-gray-700 leading-relaxed">
              Children gather around tables in our warm dining area, learning social skills 
              and enjoying meals together in a family-style environment.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-yellow-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-4">
              🍳 Our Meal Program 🥛
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-lg">
              We offer <strong>Nutritious Meals for Kids</strong> in a family style at our School Kitchen, prepared daily. 
              Our menus are nutritious and tasty for kids to enjoy. They are served in dining area where kids will 
              have meals in family style sitting.
            </p>

            <p className="text-lg">
              We provide <strong>breakfast</strong>, <strong>lunch</strong> and <strong>afternoon snacks</strong>. 
              We will also honor specific request for meals or have a parent bring the meal for their child if wishes to do so.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center border-2 border-blue-300">
              <div className="text-4xl mb-3">🥐</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Breakfast</h3>
              <p className="text-blue-700 text-sm">
                Healthy start to the day with a nutritious breakfast
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center border-2 border-green-300">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Fresh Lunch</h3>
              <p className="text-green-700 text-sm">
                Balanced, delicious meals prepared daily in our kitchen
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 text-center border-2 border-orange-300">
              <div className="text-4xl mb-3">🧃</div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">Afternoon Snacks</h3>
              <p className="text-orange-700 text-sm">
                Energizing snacks to keep kids happy and satisfied
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300">
            <h3 className="text-xl font-bold text-purple-800 mb-3">🎯 Special Dietary Needs</h3>
            <p className="text-purple-700">
              We understand every child is unique! We're happy to accommodate specific meal requests 
              or welcome parents to bring meals for their children when needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}