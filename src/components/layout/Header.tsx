
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showIntroDropdown, setShowIntroDropdown] = useState(false);
  const [showResearchDropdown, setShowResearchDropdown] = useState(false);
  const [showCommunicationDropdown, setShowCommunicationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('한국어');

  const closeAllDropdowns = () => {
    setShowIntroDropdown(false);
    setShowResearchDropdown(false);
    setShowCommunicationDropdown(false);
    setShowLanguageDropdown(false);
  };

  const handleDropdownToggle = (dropdownType: string) => {
    closeAllDropdowns();
    switch (dropdownType) {
      case 'intro':
        setShowIntroDropdown(true);
        break;
      case 'research':
        setShowResearchDropdown(true);
        break;
      case 'communication':
        setShowCommunicationDropdown(true);
        break;
      case 'language':
        setShowLanguageDropdown(true);
        break;
    }
  };

  const handleDropdownClick = (dropdownType: string) => {
    closeAllDropdowns();
    setTimeout(() => {
      switch (dropdownType) {
        case 'intro':
          setShowIntroDropdown(true);
          break;
        case 'research':
          setShowResearchDropdown(true);
          break;
        case 'communication':
          setShowCommunicationDropdown(true);
          break;
        case 'language':
          setShowLanguageDropdown(true);
          break;
      }
    }, 50);
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setShowLanguageDropdown(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center header-logo">
            <Link to="/">
              <img
                src="https://static.readdy.ai/image/cdb089564af8ef48c74c43b5090337d9/ef78455875ededa63353d8f62ea81fe1.png"
                alt="NEXT Group Logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {/* 소개 메뉴 */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownToggle('intro')}
              onMouseLeave={() => setShowIntroDropdown(false)}
              onClick={() => handleDropdownClick('intro')}
            >
              <button className="text-white hover:text-brand-green px-3 py-2 text-sm font-medium flex items-center">
                소개
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              {showIntroDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                    NEXT group
                  </Link>
                  <Link to="/about/members" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                    구성원
                  </Link>
                  <Link to="/about/annual-reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                    연간 보고서
                  </Link>
                  <a
                    href="https://nextgroup.career.greetinghr.com/ko/career"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green"
                  >
                    인재 채용
                  </a>
                </div>
              )}
            </div>

            {/* 연구 메뉴 */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownToggle('research')}
              onMouseLeave={() => setShowResearchDropdown(false)}
              onClick={() => handleDropdownClick('research')}
            >
              <button className="text-white hover:text-brand-green px-3 py-2 text-sm font-medium flex items-center">
                연구
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              {showResearchDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link to="/research/research-topics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                    연구 주제
                  </Link>
                  <Link to="/research/publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                    발간물
                  </Link>
                  <Link to="/research/database" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                    데이터베이스
                  </Link>
                </div>
              )}
            </div>

            {/* 소통 메뉴 */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownToggle('communication')}
              onMouseLeave={() => setShowCommunicationDropdown(false)}
              onClick={() => handleDropdownClick('communication')}
            >
              <button className="text-white hover:text-brand-green px-3 py-2 text-sm font-medium flex items-center">
                소통
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              {showCommunicationDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link to="/communication/notices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                    공지사항
                  </Link>
                  <Link to="/communication/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                    행사
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownToggle('language')}
              onMouseLeave={() => setShowLanguageDropdown(false)}
            >
              <button className="text-white hover:text-brand-green px-3 py-2 text-sm font-medium flex items-center">
                <i className="ri-global-line mr-2"></i>
                {currentLanguage}
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              {showLanguageDropdown && (
                <div className="absolute top-full right-0 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <button
                    onClick={() => handleLanguageChange('한국어')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green"
                  >
                    한국어
                  </button>
                  <button
                    onClick={() => handleLanguageChange('English')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green"
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
