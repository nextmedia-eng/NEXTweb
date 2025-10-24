
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Publication {
  id: number;
  category: string;
  topic: string;
  title: string;
  description: string;
  author: string;
  date: string;
  views: number;
  thumbnail: string;
}

export default function PublicationsFilterPage() {
  const [showIntroDropdown, setShowIntroDropdown] = useState(false);
  const [showResearchDropdown, setShowResearchDropdown] = useState(false);
  const [showCommunicationDropdown, setShowCommunicationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('한국어');
  const [activeCategory, setActiveCategory] = useState('전체 발간물');
  const [activeTopic, setActiveTopic] = useState('전체 주제');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [publishYear, setPublishYear] = useState('전체 연도');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('최신순');

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setShowLanguageDropdown(false);
  };

  const categories = ['전체 발간물', '보고서', '이슈페이퍼', '이슈브리프', '이슈&폴리시', '기타'];
  const topics = ['전체 주제', 'Amory Lovins', 'Buildings', 'China', 'Cities', 'Climate Data', 'Climate Finance', 'Electricity', 'Finance', 'General', 'Global South'];

  const publications: Publication[] = [
    {
      id: 1,
      category: '이슈페이퍼',
      topic: 'Electricity',
      title: '[이슈페이퍼] 석유화학산업단지의 전환, 지역에서 답을 찾다',
      description: '국내 경제 석유화학산업단지의 역할, 대상, 출입의 범위가 정책성의 실효성에 영향을 준다. 그러나 3차의 정책성의 석유화학산업은 실질 및 정책 나눔목표로 자 정책의 범위 정책의 내용 정책의 고기 지역 정책의 범위 실정 및 인정...',
      author: '김정식',
      date: '2025.07.02',
      views: 241,
      thumbnail: 'https://readdy.ai/api/search-image?query=Industrial%20petrochemical%20complex%20with%20modern%20facilities%20and%20environmental%20transformation%2C%20professional%20research%20report%20cover%20design%20with%20clean%20industrial%20landscape&width=300&height=200&seq=pub1&orientation=landscape'
    },
    {
      id: 2,
      category: '보고서',
      topic: 'Climate Finance',
      title: '[보고서] 재생에너지 확산을 위한 정책 방향과 과제',
      description: '재생에너지 산업의 지속가능한 성장을 위한 정책 프레임워크를 제시하고, 해상풍력과 태양광 발전의 효율적 확산 방안을 분석합니다. 국내외 사례 비교를 통해 실현 가능한 정책 대안을 모색합니다.',
      author: '박민수',
      date: '2025.06.28',
      views: 387,
      thumbnail: 'https://readdy.ai/api/search-image?query=Renewable%20energy%20landscape%20with%20wind%20turbines%20and%20solar%20panels%2C%20professional%20policy%20report%20cover%20with%20sustainable%20energy%20infrastructure&width=300&height=200&seq=pub2&orientation=landscape'
    },
    {
      id: 3,
      category: '이슈브리프',
      topic: 'Buildings',
      title: '[이슈브리프] 탄소중립 달성을 위한 산업부문 전략',
      description: '2050 탄소중립 목표 달성을 위한 주요 산업부문의 감축 전략과 기술 혁신 방향을 제시합니다. 철강, 시멘트, 화학 등 핵심 산업의 탈탄소화 로드맵을 분석합니다.',
      author: '이현정',
      date: '2025.06.25',
      views: 156,
      thumbnail: 'https://readdy.ai/api/search-image?query=Carbon%20neutral%20industrial%20facility%20with%20clean%20technology%20and%20green%20manufacturing%20processes%2C%20professional%20brief%20report%20cover%20design&width=300&height=200&seq=pub3&orientation=landscape'
    },
    {
      id: 4,
      category: '이슈&폴리시',
      topic: 'Finance',
      title: '[이슈&폴리시] 기후리스크 평가 모델의 금융 적용 방안',
      description: '기후변화로 인한 물리적·전환 리스크를 정량화하는 평가 모델을 개발하고, 금융기관의 리스크 관리 체계에 적용하는 방안을 제시합니다. ESG 투자와 연계한 실무 가이드라인을 포함합니다.',
      author: '최영호',
      date: '2025.06.20',
      views: 298,
      thumbnail: 'https://readdy.ai/api/search-image?query=Climate%20risk%20assessment%20dashboard%20with%20financial%20data%20analysis%2C%20professional%20policy%20document%20cover%20with%20environmental%20finance%20graphics&width=300&height=200&seq=pub4&orientation=landscape'
    },
    {
      id: 5,
      category: '보고서',
      topic: 'Electricity',
      title: '[보고서] 전력시장 제도 개선 방안 연구',
      description: '전력시장의 효율성 제고를 위한 제도 개선 방안을 제시합니다. 용량시장 도입, 보조서비스 시장 확대, 분산자원 참여 확대 등 주요 이슈를 다룹니다.',
      author: '송용원',
      date: '2025.06.15',
      views: 423,
      thumbnail: 'https://readdy.ai/api/search-image?query=Electrical%20power%20grid%20control%20center%20with%20monitoring%20systems%20and%20market%20analysis%20displays%2C%20professional%20energy%20report%20cover%20design&width=300&height=200&seq=pub5&orientation=landscape'
    },
    {
      id: 6,
      category: '기타',
      topic: 'Cities',
      title: '[기타] 에너지 전환 시대의 일자리 창출 전략',
      description: '에너지 전환 과정에서 발생하는 일자리 변화를 분석하고, 신규 일자리 창출과 기존 일자리의 전환 방안을 제시합니다. 지역별 맞춤형 고용 정책을 포함합니다.',
      author: '김윤성',
      date: '2025.06.10',
      views: 189,
      thumbnail: 'https://readdy.ai/api/search-image?query=Green%20energy%20workers%20and%20renewable%20energy%20job%20training%20facility%2C%20professional%20employment%20strategy%20document%20cover%20with%20sustainable%20career%20development&width=300&height=200&seq=pub6&orientation=landscape'
    },
    {
      id: 7,
      category: '보고서',
      topic: 'China',
      title: '[보고서] 중국의 신재생에너지 정책 동향 분석',
      description: '중국의 신재생에너지 정책 변화와 시장 동향을 분석하고, 한국에 미치는 영향을 평가합니다. 태양광, 풍력, 배터리 산업의 경쟁력 변화를 중심으로 다룹니다.',
      author: '이수진',
      date: '2025.06.05',
      views: 312,
      thumbnail: 'https://readdy.ai/api/search-image?query=Chinese%20renewable%20energy%20infrastructure%20with%20solar%20panels%20and%20wind%20farms%2C%20professional%20policy%20analysis%20report%20cover%20with%20modern%20energy%20facilities&width=300&height=200&seq=pub7&orientation=landscape'
    },
    {
      id: 8,
      category: '이슈페이퍼',
      topic: 'Climate Data',
      title: '[이슈페이퍼] 기후 데이터 활용 방안과 정책 과제',
      description: '기후 변화 대응을 위한 데이터 수집, 분석, 활용 체계를 제시합니다. 빅데이터와 AI 기술을 활용한 기후 예측 모델의 정확성 향상 방안을 다룹니다.',
      author: '박지영',
      date: '2025.05.30',
      views: 267,
      thumbnail: 'https://readdy.ai/api/search-image?query=Climate%20data%20visualization%20dashboard%20with%20weather%20monitoring%20systems%20and%20environmental%20analytics%2C%20professional%20research%20paper%20cover%20design&width=300&height=200&seq=pub8&orientation=landscape'
    },
    {
      id: 9,
      category: '이슈브리프',
      topic: 'Global South',
      title: '[이슈브리프] 개발도상국의 에너지 전환 지원 방안',
      description: '개발도상국의 지속가능한 에너지 전환을 위한 국제 협력 방안을 제시합니다. 기술 이전, 재정 지원, 역량 강화 프로그램의 효과적 운영 방안을 분석합니다.',
      author: '김태현',
      date: '2025.05.25',
      views: 198,
      thumbnail: 'https://readdy.ai/api/search-image?query=Developing%20countries%20renewable%20energy%20projects%20with%20solar%20installations%20and%20community%20development%2C%20professional%20brief%20report%20cover%20with%20sustainable%20development%20theme&width=300&height=200&seq=pub9&orientation=landscape'
    },
    {
      id: 10,
      category: '이슈&폴리시',
      topic: 'Amory Lovins',
      title: '[이슈&폴리시] 에너지 효율성 혁신과 미래 전망',
      description: 'Amory Lovins의 에너지 효율성 이론을 바탕으로 한국의 에너지 정책 방향을 제시합니다. 통합적 설계와 시스템 사고를 통한 에너지 혁신 방안을 다룹니다.',
      author: '정민호',
      date: '2025.05.20',
      views: 345,
      thumbnail: 'https://readdy.ai/api/search-image?query=Energy%20efficiency%20innovation%20concept%20with%20smart%20building%20systems%20and%20integrated%20design%2C%20professional%20policy%20document%20cover%20with%20futuristic%20energy%20solutions&width=300&height=200&seq=pub10&orientation=landscape'
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const categoryMatch = activeCategory === '전체 발간물' || pub.category === activeCategory;
    const topicMatch = activeTopic === '전체 주제' || pub.topic === activeTopic;
    const searchMatch = searchTerm === '' ||
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && topicMatch && searchMatch;
  });

  const sortedPublications = [...filteredPublications].sort((a, b) => {
    switch (sortOrder) {
      case '최신순':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case '오래된순':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case '조회순':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case '보고서':
        return 'bg-[#1C8E8C] text-white';
      case '이슈페이퍼':
        return 'bg-[#276EF1] text-white';
      case '이슈브리프':
        return 'bg-[#8850E1] text-white';
      case '이슈&폴리시':
        return 'bg-[#555555] text-white';
      case '기타':
        return 'bg-[#AAAAAA] text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const getTopicCount = (topic: string) => {
    if (topic === '전체 주제') {
      return publications.filter(pub => {
        const categoryMatch = activeCategory === '전체 발간물' || pub.category === activeCategory;
        return categoryMatch;
      }).length;
    }
    return publications.filter(pub => {
      const categoryMatch = activeCategory === '전체 발간물' || pub.category === activeCategory;
      const topicMatch = pub.topic === topic;
      return categoryMatch && topicMatch;
    }).length;
  };

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
                    <Link to="/members" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      구성원
                    </Link>
                    <Link to="/annual-reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
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
                onMouseEnter={() => setShowResearchDropdown(true)}
                onMouseLeave={() => setShowResearchDropdown(false)}
              >
                <button className="text-white hover:text-brand-green px-3 py-2 text-sm font-medium flex items-center">
                  연구
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                {showResearchDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <Link to="/publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      발간물
                    </Link>
                    <Link to="/publications-filter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      발간물-필터
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
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Academic%20research%20library%20with%20publications%20and%20documents%2C%20professional%20scholarly%20environment%20with%20books%20and%20research%20papers%2C%20modern%20academic%20publishing%20facility&width=1200&height=600&seq=publications-filter-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">발간물 필터</h1>
              <p className="text-xl font-light opacity-90">Publications Filter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <Link
              to="/research-topics"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              연구 주제
            </Link>
            <Link
              to="/publications"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              발간물
            </Link>
            <Link
              to="/publications-filter"
              className="py-4 px-2 border-b-2 border-blue-600 text-blue-600 font-medium text-sm whitespace-nowrap transition-colors"
            >
              발간물-필터
            </Link>
            <Link
              to="/publications-horizontal"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              발간물-가로
            </Link>
            <Link
              to="/database"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              데이터베이스
            </Link>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 p-1 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Topic Filter Only */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">FILTER BY TOPIC</h3>
              <div className="space-y-2">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                      activeTopic === topic
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{topic}</span>
                    <span className="text-xs text-gray-500">({getTopicCount(topic)})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Search and Filter Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  {/* Items per page */}
                  <div className="relative">
                    <select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus-border-blue-500"
                    >
                      <option>10개씩 보기</option>
                      <option>20개씩 보기</option>
                      <option>50개씩 보기</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>

                  {/* Publish year */}
                  <div className="relative">
                    <select
                      value={publishYear}
                      onChange={(e) => setPublishYear(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus-border-blue-500"
                    >
                      <option>전체 연도</option>
                      <option>2025</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  {/* Search */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="키워드를 입력해주세요"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus-border-blue-500"
                    />
                    <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-7
                    transition-colors whitespace-nowrap">
                    검색
                  </button>
                </div>
              </div>
            </div>

            {/* Results and Sort */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">
                총 <span className="font-semibold text-blue-600">{sortedPublications.length}</span>개의 발간물
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">정렬:</span>
                <div className="flex bg-gray-100 rounded-md p-1">
                  {['최신순', '오래된순', '조회순'].map((sort) => (
                    <button
                      key={sort}
                      onClick={() => setSortOrder(sort)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        sortOrder === sort
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {sort}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Publications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedPublications.map((publication) => (
                <div key={publication.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={publication.thumbnail}
                    alt={publication.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-2">
                        <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${getTypeColor(publication.category)}`}>
                          {publication.category}
                        </span>
                        <span className="inline-block px-3 py-1 rounded text-xs font-bold bg-gray-100 text-gray-700">
                          {publication.topic}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-xs">
                        <i className="ri-calendar-line mr-1"></i>
                        {publication.date}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {publication.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {publication.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-700 font-medium">작성자: {publication.author}</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <i className="ri-eye-line mr-1"></i>
                        {publication.views}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        to={`/publication/${publication.id}`}
                        className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
                      >
                        <i className="ri-eye-line mr-2"></i>
                        자세히 보기
                      </Link>
                      <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                        <i className="ri-download-line mr-2"></i>
                        원문 다운로드
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
            <p className="text-gray-400 text-base leading-relaxed">
              © 2024 NEXT group. All rights reserved. |
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 ml-2">
                Website Builder
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
