
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface DatabaseItem {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  views: number;
  thumbnail: string;
}

export default function DatabasePage() {
  const [showIntroDropdown, setShowIntroDropdown] = useState(false);
  const [showResearchDropdown, setShowResearchDropdown] = useState(false);
  const [showCommunicationDropdown, setShowCommunicationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('한국어');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [publishYear, setPublishYear] = useState('전체 연도');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('최신순');

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setShowLanguageDropdown(false);
  };

  const databaseItems: DatabaseItem[] = [
    {
      id: 1,
      title: '탄소에산 데이터베이스',
      description: '지구 온도가 1.5°C 제한에서 위해서 우리나라는 2028년까지 2035년 국가결정기여(NDC, Nationally Determined Contribution) 목표를 상향해 제출해야 한다. 본 데이터베이스는 탄소예산이라는 과학적 해동 지침을 통해 국가 2035 NDC 목표를 설정하고...',
      author: '김해진',
      date: '2025.02.14',
      views: 2404,
      thumbnail: 'https://readdy.ai/api/search-image?query=Carbon%20emission%20database%20dashboard%20with%20environmental%20data%20visualization%2C%20professional%20green%20technology%20interface%20with%20charts%20and%20graphs%20showing%20carbon%20footprint%20analysis&width=200&height=150&seq=db1&orientation=landscape'
    },
    {
      id: 2,
      title: '전력 수요 예측 데이터베이스',
      description: '시역별 전력 수요 패턴 및 예측 모델을 기반으로 구축된 데이터베이스입니다. 시간대별, 계절별 전력 수요 변화를 분석하고 미래 전력 수요을 예측할 수 있는 다양한 데이터를 제공합니다.',
      author: '이민수',
      date: '2024.11.05',
      views: 892,
      thumbnail: 'https://readdy.ai/api/search-image?query=Electricity%20demand%20forecasting%20database%20with%20power%20grid%20analytics%2C%20professional%20energy%20management%20dashboard%20with%20electrical%20consumption%20charts%20and%20prediction%20models&width=200&height=150&seq=db2&orientation=landscape'
    },
    {
      id: 3,
      title: '재생에너지 발전량 데이터베이스',
      description: '국내 재생에너지 발전 현황과 잠재량을 종합적으로 분석한 데이터베이스입니다. 태양광, 풍력, 수력 등 재생에너지원별 발전량 데이터와 지역별 분포 현황을 제공하며, 정책 수립에 필요한 기초 자료를 포함합니다.',
      author: '박지영',
      date: '2024.10.28',
      views: 1567,
      thumbnail: 'https://readdy.ai/api/search-image?query=Renewable%20energy%20generation%20database%20with%20solar%20and%20wind%20power%20statistics%2C%20clean%20energy%20data%20visualization%20dashboard%20with%20sustainable%20power%20analytics&width=200&height=150&seq=db3&orientation=landscape'
    },
    {
      id: 4,
      title: '에너지 효율 건물 데이터베이스',
      description: '국내 건물 에너지 효율 등급 및 성능 데이터를 체계적으로 정리한 데이터베이스입니다. 건물 유형별, 지역별 에너지 소비 패턴과 효율 개선 사례를 분석하여 제로에너지 건물 정책 수립을 지원합니다.',
      author: '최현우',
      date: '2024.09.15',
      views: 743,
      thumbnail: 'https://readdy.ai/api/search-image?query=Energy%20efficient%20building%20database%20with%20green%20architecture%20analytics%2C%20sustainable%20construction%20data%20dashboard%20with%20building%20performance%20metrics&width=200&height=150&seq=db4&orientation=landscape'
    },
    {
      id: 5,
      title: '산업부문 온실가스 배출 데이터베이스',
      description: '국내 주요 산업부문의 온실가스 배출 현황과 감축 잠재량을 분석한 종합 데이터베이스입니다. 철강, 시멘트, 화학 등 업종별 배출량 추이와 감축 기술 적용 효과를 제공하여 산업 탈탄소화 정책을 지원합니다.',
      author: '정수민',
      date: '2024.08.22',
      views: 1289,
      thumbnail: 'https://readdy.ai/api/search-image?query=Industrial%20greenhouse%20gas%20emissions%20database%20with%20factory%20pollution%20analytics%2C%20environmental%20monitoring%20dashboard%20with%20carbon%20emission%20tracking%20systems&width=200&height=150&seq=db5&orientation=landscape'
    },
    {
      id: 6,
      title: '교통부문 에너지 소비 데이터베이스',
      description: '국내 교통수단별 에너지 소비량과 친환경 교통 전환 현황을 분석한 데이터베이스입니다. 전기차, 수소차 보급 현황과 대중교통 이용 패턴을 통해 교통부문 탈탄소화 정책 방향을 제시합니다.',
      author: '김태현',
      date: '2024.07.18',
      views: 956,
      thumbnail: 'https://readdy.ai/api/search-image?query=Transportation%20energy%20consumption%20database%20with%20electric%20vehicle%20analytics%2C%20sustainable%20mobility%20data%20dashboard%20with%20traffic%20and%20fuel%20efficiency%20metrics&width=200&height=150&seq=db6&orientation=landscape'
    }
  ];

  const filteredItems = databaseItems.filter(item => {
    const searchMatch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase());
    return searchMatch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20database%20server%20room%20with%20data%20visualization%20screens%2C%20professional%20technology%20environment%20with%20digital%20analytics%20and%20information%20systems&width=1200&height=600&seq=database-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">데이터베이스</h1>
              <p className="text-xl font-light opacity-90">Database</p>
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
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              발간물-가로
            </Link>
            <Link
              to="/database"
              className="py-4 px-2 border-b-2 border-blue-600 text-blue-600 font-medium text-sm whitespace-nowrap transition-colors"
            >
              데이터베이스
            </Link>
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
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-7 whitespace-nowrap">
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
              총 <span className="font-semibold text-blue-600">{sortedItems.length}</span>개의 데이터베이스
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

      {/* Database List - Horizontal Layout */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sortedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0 w-48">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          데이터베이스
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <i className="ri-calendar-line mr-1"></i>
                          {item.date}
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                          <i className="ri-eye-line mr-1"></i>
                          {item.views}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 font-medium">구축자: {item.author}</span>
                      
                      <div className="flex gap-2">
                        <Link
                          to={`/database/${item.id}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-7 transition-colors whitespace-nowrap"
                        >
                          <i className="ri-eye-line mr-2"></i>
                          자세히 보기
                        </Link>
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
