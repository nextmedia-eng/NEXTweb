
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Publication {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  views: number;
  thumbnail: string;
}

export default function PublicationsHorizontalPage() {
  const [showIntroDropdown, setShowIntroDropdown] = useState(false);
  const [showResearchDropdown, setShowResearchDropdown] = useState(false);
  const [showCommunicationDropdown, setShowCommunicationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('한국어');
  const [activeCategory, setActiveCategory] = useState('전체 발간물');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [publishYear, setPublishYear] = useState('전체 연도');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('최신순');

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setShowLanguageDropdown(false);
  };

  const categories = ['전체 발간물', '보고서', '이슈페이퍼', '이슈브리프', '이슈&폴리시', '기타'];

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

  const publications: Publication[] = [
    {
      id: 1,
      category: '이슈페이퍼',
      title: '[이슈페이퍼] 석유화학산업단지의 전환, 지역에서 답을 찾다',
      description: '국내 경제 석유화학산업단지의 역할, 대상, 출입의 범위가 정책성의 실효성에 영향을 준다. 그러나 3차의 정책성의 석유화학산업은 실질 및 정책 나눔목표로 자 정책의 범위 정책의 내용 정책의 고기 지역 정책의 범위 실정 및 인정하여 석유화학산업단지의 전환 방향을 제시하고 지역 맞춤형 정책 방안을 모색합니다.',
      author: '김정식',
      date: '2025.07.02',
      views: 241,
      thumbnail: 'https://readdy.ai/api/search-image?query=Industrial%20petrochemical%20complex%20with%20modern%20facilities%20and%20environmental%20transformation%2C%20professional%20research%20report%20cover%20design%20with%20clean%20industrial%20landscape&width=200&height=150&seq=pub1h&orientation=landscape'
    },
    {
      id: 2,
      category: '보고서',
      title: '[보고서] 재생에너지 확산을 위한 정책 방향과 과제',
      description: '재생에너지 산업의 지속가능한 성장을 위한 정책 프레임워크를 제시하고, 해상풍력과 태양광 발전의 효율적 확산 방안을 분석합니다. 국내외 사례 비교를 통해 실현 가능한 정책 대안을 모색하며, 에너지 전환 정책의 실효성을 높이기 위한 구체적인 실행 방안을 제안합니다.',
      author: '박민수',
      date: '2025.06.28',
      views: 387,
      thumbnail: 'https://readdy.ai/api/search-image?query=Renewable%20energy%20landscape%20with%20wind%20turbines%20and%20solar%20panels%2C%20professional%20policy%20report%20cover%20with%20sustainable%20energy%20infrastructure&width=200&height=150&seq=pub2h&orientation=landscape'
    },
    {
      id: 3,
      category: '이슈브리프',
      title: '[이슈브리프] 탄소중립 달성을 위한 산업부문 전략',
      description: '2050 탄소중립 목표 달성을 위한 주요 산업부문의 감축 전략과 기술 혁신 방향을 제시합니다. 철강, 시멘트, 화학 등 핵심 산업의 탈탄소화 로드맵을 분석하고, 산업 전환을 위한 정책 지원 방안과 기업의 대응 전략을 종합적으로 검토합니다.',
      author: '이현정',
      date: '2025.06.25',
      views: 156,
      thumbnail: 'https://readdy.ai/api/search-image?query=Carbon%20neutral%20industrial%20facility%20with%20clean%20technology%20and%20green%20manufacturing%20processes%2C%20professional%20brief%20report%20cover%20design&width=200&height=150&seq=pub3h&orientation=landscape'
    },
    {
      id: 4,
      category: '이슈&폴리시',
      title: '[이슈&폴리시] 기후리스크 평가 모델의 금융 적용 방안',
      description: '기후변화로 인한 물리적·전환 리스크를 정량화하는 평가 모델을 개발하고, 금융기관의 리스크 관리 체계에 적용하는 방안을 제시합니다. ESG 투자와 연계한 실무 가이드라인을 포함하며, 기후 리스크 관리를 위한 규제 체계 개선 방안을 제안합니다.',
      author: '최영호',
      date: '2025.06.20',
      views: 298,
      thumbnail: 'https://readdy.ai/api/search-image?query=Climate%20risk%20assessment%20dashboard%20with%20financial%20data%20analysis%2C%20professional%20policy%20document%20cover%20with%20environmental%20finance%20graphics&width=200&height=150&seq=pub4h&orientation=landscape'
    },
    {
      id: 5,
      category: '보고서',
      title: '[보고서] 전력시장 제도 개선 방안 연구',
      description: '전력시장의 효율성 제고를 위한 제도 개선 방안을 제시합니다. 용량시장 도입, 보조서비스 시장 확대, 분산자원 참여 확대 등 주요 이슈를 다루며, 전력시장 운영의 투명성과 공정성을 높이기 위한 구체적인 개선 방안을 제안합니다.',
      author: '송용원',
      date: '2025.06.15',
      views: 423,
      thumbnail: 'https://readdy.ai/api/search-image?query=Electrical%20power%20grid%20control%20center%20with%20monitoring%20systems%20and%20market%20analysis%20displays%2C%20professional%20energy%20report%20cover%20design&width=200&height=150&seq=pub5h&orientation=landscape'
    },
    {
      id: 6,
      category: '기타',
      title: '[기타] 에너지 전환 시대의 일자리 창출 전략',
      description: '에너지 전환 과정에서 발생하는 일자리 변화를 분석하고, 신규 일자리 창출과 기존 일자리의 전환 방안을 제시합니다. 지역별 맞춤형 고용 정책을 포함하며, 에너지 전환이 고용에 미치는 영향을 종합적으로 평가하고 대응 방안을 모색합니다.',
      author: '김윤성',
      date: '2025.06.10',
      views: 189,
      thumbnail: 'https://readdy.ai/api/search-image?query=Green%20energy%20workers%20and%20renewable%20energy%20job%20training%20facility%2C%20professional%20employment%20strategy%20document%20cover%20with%20sustainable%20career%20development&width=200&height=150&seq=pub6h&orientation=landscape'
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const categoryMatch = activeCategory === '전체 발간물' || pub.category === activeCategory;
    const searchMatch = searchTerm === '' ||
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Academic%20research%20library%20with%20publications%20and%20documents%2C%20professional%20scholarly%20environment%20with%20books%20and%20research%20papers%2C%20modern%20academic%20publishing%20facility&width=1200&height=600&seq=publications-hero-h&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">발간물-가로</h1>
              <p className="text-xl font-light opacity-90">Publications - Horizontal Layout</p>
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
              to="/publications-horizontal"
              className="py-4 px-2 border-b-2 border-blue-600 text-blue-600 font-medium text-sm whitespace-nowrap transition-colors"
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

      {/* Search and Filter Section */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Items per page */}
              <div className="relative">
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>전체 연도</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
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
                  className="w-64 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-7 ...whitespace-nowrap">
                검색
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results and Sort */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
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
        </div>
      </section>

      {/* Publications List - Horizontal Layout */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sortedPublications.map((publication) => (
              <div key={publication.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0 w-48">
                    <img
                      src={publication.thumbnail}
                      alt={publication.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${getTypeColor(publication.category)}`}>
                          {publication.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <i className="ri-calendar-line mr-1"></i>
                          {publication.date}
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                          <i className="ri-eye-line mr-1"></i>
                          {publication.views}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {publication.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {publication.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 font-medium">작성자: {publication.author}</span>
                      
                      <div className="flex gap-2">
                        <Link
                          to={`/publication/${publication.id}`}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
                        >
                          <i className="ri-eye-line mr-2"></i>
                          자세히 보기
                        </Link>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                          <i className="ri-download-line mr-2"></i>
                          원문 다운로드
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
