export default function Footer() {
  return (
    <footer className="bg-brand-dark-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo, Icons, and Tax Office Link */}
          <div className="flex flex-col justify-between h-full">
            {/* Logo */}
            <div className="mb-6">
              <img
                src="https://static.readdy.ai/image/cdb089564af8ef48c74c43b5090337d9/ef78455875ededa63353d8f62ea81fe1.png"
                alt="NEXT group Logo"
                className="h-20 w-auto"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/company/next-group-korea/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a
                href="https://t.me/NEXTGroup2050"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600"
              >
                <i className="ri-telegram-fill text-lg"></i>
              </a>
              <a
                href="https://www.youtube.com/@zeroenergybar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600"
              >
                <i className="ri-youtube-fill text-lg"></i>
              </a>
            </div>

            {/* Tax Office Link */}
            <div className="mt-auto">
              <p className="text-brand-green text-base leading-relaxed">
                <a
                  href="https://www.nts.go.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300"
                >
                  국세청(공익법인 결산 및 공시)
                </a>
              </p>
            </div>
          </div>

          {/* Middle Section - Contact Info */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-semibold mb-4 text-lg leading-relaxed">연락처</h3>
              <div className="space-y-2 text-gray-400 text-base leading-relaxed">
                <p>
                  <i className="ri-map-pin-line mr-2 text-lg"></i>서울시 강남구 봉은사로 213 센트럴타워
                  8-9층
                </p>
                <p>
                  <i className="ri-phone-line mr-2 text-lg"></i>070-4940-9009
                </p>
                <p>
                  <i className="ri-mail-line mr-2 text-lg"></i>일반문의: contact@nextgroup.or.kr
                </p>
                <p>
                  <i className="ri-mail-line mr-2 text-lg"></i>미디어 문의: media@nextgroup.or.kr
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Scroll Button */}
          <div className="relative flex justify-end">
            {/* Scroll to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer mr-12"
            >
              <i className="ri-arrow-up-line text-white text-2xl"></i>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-base leading-relaxed">© 2024 NEXT group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
