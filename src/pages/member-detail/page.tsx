
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function MemberDetailPage() {
  const { id } = useParams();
  const [showIntroDropdown, setShowIntroDropdown] = useState(false);
  const [showResearchDropdown, setShowResearchDropdown] = useState(false);
  const [showCommunicationDropdown, setShowCommunicationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('한국어');

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setShowLanguageDropdown(false);
  };

  // 구성원 데이터 (실제로는 API에서 가져올 데이터)
  const memberData = {
    'song-yonghyeon': {
      name: '송용현',
      position: '부대표·최고기술책임자',
      role: '기술 기능 총괄 · 전력시장 시뮬레이션 및 에너지전환 전략',
      email: 'yh.song@nextgroup.or.kr',
      photo: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20technology%20executive%20portrait%20in%20formal%20business%20suit%2C%20confident%20and%20intelligent%20appearance%20with%20clean%20background%2C%20CTO%20and%20deputy%20director%20headshot%20for%20energy%20policy%20think%20tank&width=400&height=500&seq=song-yonghyeon&orientation=portrait',
      introduction: '송용현 부대표는 최고기술책임자로서 넥스트의 운영 및 연구개발에 필요한 기술적 역할과 활동을 총괄하고 있습니다. 연구주제로 에너지시장 모델링을 담당하고 있으며, 재생에너지 계통연계를 위한 비증설대안과 전원믹스 최적화 방안을 제시하고자 합니다. 국내 에너지시장에 적용되는 모델링 방법론을 개발하여 국가 기후환경회의로부터 표창을 수여받았으며, 이를 기반으로 한 데이터베이스 확산에 주력하고 있습니다. 에너지정책 컨설팅 기업인 ENEG Inc. 대표이사로 재직한 바 있습니다.',
      education: [
        '서울대학교 전기공학과 박사 (2019)',
        '서울대학교 전기공학과 학사 (2013)'
      ],
      career: [
        '사단법인 넥스트 (부대표 · 최고기술책임자, 2020 - 현재)',
        'The International Network of Energy Transition Think Tanks(INETTT) (Executive Board member, 2024 - 현재)',
        '국민통합위원회 과학기술과의 동행 특위(특위위원, 2024.04 - 2024.08)',
        '미국 로랜스버클리국립연구소 (파견연구원, 2021.11 - 2022.11)',
        'ENEG Inc. (CEO, 2019 - 현재)'
      ],
      publications: [
        '[보고서] NEXT Electricity Outlook 2025 - Part 2: Coal Phase-Out Watcher',
        '[보고서] NEXT Electricity Outlook 2024 - Part 1: Coal Phase-Out Watcher',
        '[해설서] 기후정책 가이드북: 기후테크의 기회와 장벽',
        '[이슈브리프] 지붕형 태양광의 증가, 우리가 대비해야 할 점은?: 캘리포니아 사례로 보는 솔루션',
        '[기타] Implementation Cost Estimation for Net Zero Electricity System based on Optimal Storage Mix Model',
        '[이슈브리프] 재생에너지 중심 시스템 실현을 위한 영국의 계통혁신 전략',
        '[이슈브리프] 급증하는 수도권 전력수요, 기존 계통체계로는 대응 안돼'
      ]
    }
  };

  const member = memberData[id as keyof typeof memberData];

  if (!member) {
    return <div>구성원을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
                onMouseEnter={() => setShowIntroDropdown(true)}
                onMouseLeave={() => setShowIntroDropdown(false)}
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
                    <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      인재 채용
                    </Link>
                  </div>
                )}
              </div>

              {/* 연구 메뉴 */}
              <div
                className="relative"
                onMouseEnter={() => setShowResearchDropdown(true)}
                onMouseLeave={() => setShowResearchDropdown(false)}
              >
                <button className="text-white hover:text-brand-green px-3 py-2 text-sm font-medium flex items-center">
                  연구
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                {showResearchDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <Link to="/research-topics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      연구 주제
                    </Link>
                    <Link to="/publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      발간물
                    </Link>
                    <Link to="/database" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      데이터베이스
                    </Link>
                  </div>
                )}
              </div>

              {/* 소통 메뉴 */}
              <div
                className="relative"
                onMouseEnter={() => setShowCommunicationDropdown(true)}
                onMouseLeave={() => setShowCommunicationDropdown(false)}
              >
                <button className="text-white hover:text-brand-green px-3 py-2 text-sm font-medium flex items-center">
                  소통
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                {showCommunicationDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <Link to="/notices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      공지사항
                    </Link>
                    <Link to="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      행사
                    </Link>
                    <Link to="/zero-energy-bar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      제로에너지바
                    </Link>
                  </div>
                )}
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div
                className="relative"
                onMouseEnter={() => setShowLanguageDropdown(true)}
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

      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 mt-16"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20business%20office%20building%20with%20clean%20architecture%20and%20professional%20team%20members%2C%20corporate%20headquarters%20with%20glass%20facade%20and%20sustainable%20design%20elements%2C%20professional%20business%20environment%20with%20meeting%20rooms%20and%20collaborative%20spaces&width=1200&height=600&seq=member-detail-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">구성원</h1>
              <p className="text-xl font-light opacity-90">Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <Link
              to="/about"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              NEXT group
            </Link>
            <Link
              to="/about/members"
              className="py-4 px-2 border-b-2 border-blue-600 text-blue-600 font-medium text-sm whitespace-nowrap transition-colors"
            >
              구성원
            </Link>
            <a
              href="https://nextgroup.career.greetinghr.com/ko/career"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              인재 채용
            </a>
          </div>
        </div>
      </section>

      {/* Member Detail Content */}
      <section className="py-16 bg-white min-h-[800px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Profile */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden sticky top-32">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h2>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                  <div className="flex items-center text-gray-600 text-sm">
                    <i className="ri-mail-line mr-2"></i>
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* 소개 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-user-line mr-3 text-blue-600"></i>
                  소개
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">{member.introduction}</p>
                </div>
              </div>

              {/* 학력 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-graduation-cap-line mr-3 text-blue-600"></i>
                  학력
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2">
                    {member.education.map((edu, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <i className="ri-circle-fill text-blue-600 text-xs mt-2 mr-3"></i>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 경력 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-briefcase-line mr-3 text-blue-600"></i>
                  경력
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    {member.career.map((career, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <i className="ri-circle-fill text-blue-600 text-xs mt-2 mr-3"></i>
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 관련 발간물 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-file-text-line mr-3 text-blue-600"></i>
                  관련 발간물
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    {member.publications.map((publication, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <i className="ri-circle-fill text-blue-600 text-xs mt-2 mr-3"></i>
                        {publication}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Members Button */}
          <div className="mt-12 text-center">
            <Link
              to="/about/members"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-7 transition-colors whitespace-nowrap"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              구성원 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section - Logo, Icons, and Tax Office Link */}
            <div>
              {/* Logo */}
              <div className="mb-6">
                <img
                  src="https://static.readdy.ai/image/cdb089564af8ef48c74c43b5090337d9/ef78455875ededa63353d8f62ea81fe1.png"
                  alt="NEXT Group Logo"
                  className="h-16 w-auto"
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.linkedin.com/company/next-group-korea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a
                  href="https://t.me/NEXTGroup2050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600"
                >
                  <i className="ri-telegram-fill"></i>
                </a>
                <a
                  href="https://www.youtube.com/@zeroenergybar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600"
                >
                  <i className="ri-youtube-fill"></i>
                </a>
              </div>

              {/* Tax Office Link */}
              <div>
                <p className="text-brand-green text-sm">
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
            <div>
              <h3 className="font-semibold mb-4">연락처</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>
                  <i className="ri-map-pin-line mr-2"></i>서울시 강남구 봉은사로 213 센트럴타워
                  8-9층
                </p>
                <p>
                  <i className="ri-phone-line mr-2"></i>070-4940-9009
                </p>
                <p>
                  <i className="ri-mail-line mr-2"></i>일반문의: contact@nextgroup.or.kr
                </p>
                <p>
                  <i className="ri-mail-line mr-2"></i>미디어 문의: media@nextgroup.or.kr
                </p>
              </div>
            </div>

            {/* Right Section - Quick Links with Scroll Button */}
            <div className="relative">
              {/* Scroll to Top Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
              >
                <i className="ri-arrow-up-line text-white text-xl"></i>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 NEXT Group. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">개인정보처리방침</span>
              <span className="text-gray-400 text-sm">이용약관</span>
              <a
                href="https://readdy.ai/?origin=logo"
                className="text-gray-400 hover:text-white text-sm"
              >
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
