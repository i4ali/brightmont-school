import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">BrightMont School</h3>
            <p className="text-gray-300 mb-2">
              17710 S. Cypress Villas Dr<br />
              Spring, Texas 77379
            </p>
            <p className="text-gray-300 mb-2">
              Phone: (281) 251-3851
            </p>
            <p className="text-gray-300">
              Email: info@brightmontschool.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/infant" className="text-gray-300 hover:text-white transition-colors">
                  Infant (6 weeks - 18 months)
                </Link>
              </li>
              <li>
                <Link href="/programs/toddler" className="text-gray-300 hover:text-white transition-colors">
                  Toddler (18 months - 3 years)
                </Link>
              </li>
              <li>
                <Link href="/programs/primary" className="text-gray-300 hover:text-white transition-colors">
                  Pre-K (3-6 years)
                </Link>
              </li>
              <li>
                <Link href="/programs/summer-camp" className="text-gray-300 hover:text-white transition-colors">
                  Summer Camp
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com/BrightmontSchoolSpring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/brightmontacademy4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
            <h4 className="font-semibold mb-2">Hours</h4>
            <p className="text-gray-300">
              Monday - Friday<br />
              6:30 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 BrightMont Montessori Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;