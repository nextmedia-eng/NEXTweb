
import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

interface VideoData {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  duration: string;
  thumbnails: {
    maxres?: { url: string; width: number; height: number };
    high?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    default?: { url: string; width: number; height: number };
  };
  tags: string[];
  viewCount: number;
  cast: string[];
}

export default function ZeroEnergyBarPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showIntroDropdown, setShowIntroDropdown] = useState(false);
  const [showResearchDropdown, setShowResearchDropdown] = useState(false);
  const [showCommunicationDropdown, setShowCommunicationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('한국어');
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter states
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    const urlLimit = Number(searchParams.get('limit'));
    const storedLimit = localStorage.getItem('ze_limit');
    const isMobile = window.innerWidth < 768;
    return urlLimit || (storedLimit ? Number(storedLimit) : (isMobile ? 12 : 24));
  });
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'latest');
  const [selectedTag, setSelectedTag] = useState(searchParams.get('tag') || '');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock YouTube video data
  const videos: VideoData[] = [
    {
      id: 'dQw4w9WgXcQ1',
      title: '2025년 전력시장 전망: 재생에너지 확산의 영향',
      description: '재생에너지 발전량 증가가 전력시장 구조에 미치는 영향과 향후 전망을 분석합니다. 태양광과 풍력 발전의 급속한 확산으로 인한 시장 변화를 살펴봅니다.',
      publishedAt: '2024-12-15T10:00:00Z',
      duration: 'PT25M30S',
      thumbnails: {
        high: {
          url: 'https://readdy.ai/api/search-image?query=Modern%20renewable%20energy%20landscape%20with%20solar%20panels%20and%20wind%20turbines%20against%20blue%20sky%2C%20professional%20energy%20infrastructure%20development%2C%20clean%20sustainable%20power%20generation%20systems%20with%20detailed%20technical%20equipment&width=480&height=270&seq=youtube1&orientation=landscape',
          width: 480,
          height: 270
        }
      },
      tags: ['전력시장', '재생에너지', '태양광', '풍력'],
      viewCount: 1250,
      cast: ['이지우 (사)넥스트 연구원']
    },
    {
      id: 'dQw4w9WgXcQ2',
      title: '석탄화력 폐지 로드맵과 대안 에너지원',
      description: '국내 석탄화력발전소의 단계적 폐지 계획과 이를 대체할 에너지원에 대한 심층 분석을 제공합니다. 천연가스와 재생에너지의 역할을 중심으로 살펴봅니다.',
      publishedAt: '2024-12-10T14:30:00Z',
      duration: 'PT32M15S',
      thumbnails: {
        high: {
          url: 'https://readdy.ai/api/search-image?query=Coal%20power%20plant%20transformation%20to%20renewable%20energy%20concept%2C%20industrial%20smokestacks%20with%20green%20technology%20overlay%2C%20sustainable%20energy%20transition%20with%20modern%20infrastructure%20and%20clean%20environment&width=480&height=270&seq=youtube2&orientation=landscape',
          width: 480,
          height: 270
        }
      },
      tags: ['석탄화력', '에너지전환', '천연가스', '정책'],
      viewCount: 980,
      cast: ['송용현 (사)넥스트 부대표', '권용주 국민대 자동차·운송디자인학과 겸임교수']
    },
    {
      id: 'dQw4w9WgXcQ3',
      title: '[탈석탄] 석탄에 종말을 고하다',
      description: '석탄 발전의 환경적 영향과 탈석탄 정책의 필요성에 대해 전문가들이 심도 있게 논의합니다. 국내외 탈석탄 사례와 대안 에너지 전략을 분석합니다.',
      publishedAt: '2024-12-08T16:00:00Z',
      duration: 'PT28M45S',
      thumbnails: {
        high: {
          url: 'https://readdy.ai/api/search-image?query=Coal%20phase-out%20concept%20with%20industrial%20transformation%2C%20old%20coal%20power%20plant%20being%20replaced%20by%20clean%20energy%20infrastructure%2C%20environmental%20protection%20and%20sustainable%20development%20theme&width=480&height=270&seq=youtube3&orientation=landscape',
          width: 480,
          height: 270
        }
      },
      tags: ['탈석탄', '환경정책', '에너지전환', '기후변화'],
      viewCount: 1450,
      cast: ['김민수 에너지경제연구원 연구위원', '박지영 (사)넥스트 선임연구원']
    },
    {
      id: 'dQw4w9WgXcQ4',
      title: '전기차 확산이 전력수급에 미치는 영향',
      description: '전기차 보급 확산에 따른 전력 수요 증가와 충전 인프라 구축이 전력시스템에 미치는 영향을 분석합니다. 스마트 충전 기술의 중요성도 함께 다룹니다.',
      publishedAt: '2024-12-01T11:15:00Z',
      duration: 'PT22M30S',
      thumbnails: {
        high: {
          url: 'https://readdy.ai/api/search-image?query=Electric%20vehicle%20charging%20infrastructure%20with%20modern%20charging%20stations%2C%20clean%20transportation%20technology%20concept%2C%20sustainable%20mobility%20solutions%20with%20green%20energy%20integration%20and%20smart%20grid%20systems&width=480&height=270&seq=youtube4&orientation=landscape',
          width: 480,
          height: 270
        }
      },
      tags: ['전기차', '전력수급', '충전인프라', '스마트그리드'],
      viewCount: 820,
      cast: ['최현우 (사)넥스트 연구원', '이수진 한국전력공사 선임연구원', '김태호 현대자동차 전략기획팀장']
    },
    {
      id: 'dQw4w9WgXcQ5',
      title: '수소경제 활성화를 위한 정책 방안',
      description: '수소경제 생태계 구축을 위한 정부 정책과 민간 투자 동향을 살펴봅니다. 그린수소 생산과 활용 확대 방안을 중심으로 분석합니다.',
      publishedAt: '2024-11-28T13:45:00Z',
      duration: 'PT35M20S',
      thumbnails: {
        high: {
          url: 'https://readdy.ai/api/search-image?query=Hydrogen%20fuel%20cell%20technology%20concept%20with%20industrial%20equipment%20and%20clean%20energy%20production%2C%20sustainable%20hydrogen%20infrastructure%20with%20blue%20and%20green%20color%20scheme%2C%20modern%20energy%20technology&width=480&height=270&seq=youtube5&orientation=landscape',
          width: 480,
          height: 270
        }
      },
      tags: ['수소경제', '그린수소', '정책', '투자'],
      viewCount: 1100,
      cast: ['정민호 (사)넥스트 수석연구원']
    },
    {
      id: 'dQw4w9WgXcQ6',
      title: '에너지 저장 시스템의 기술 혁신',
      description: '배터리 에너지 저장 시스템(BESS)의 최신 기술 동향과 전력망 안정성 향상에 미치는 효과를 분석합니다. 차세대 배터리 기술의 발전 방향도 살펴봅니다.',
      publishedAt: '2024-11-25T09:30:00Z',
      duration: 'PT27M10S',
      thumbnails: {
        high: {
          url: 'https://readdy.ai/api/search-image?query=Energy%20storage%20systems%20with%20advanced%20battery%20technology%2C%20grid-scale%20energy%20storage%20solutions%20for%20renewable%20energy%20integration%2C%20modern%20power%20infrastructure%20with%20technical%20equipment&width=480&height=270&seq=youtube6&orientation=landscape',
          width: 480,
          height: 270
        }
      },
      tags: ['에너지저장', 'BESS', '배터리기술', '전력망'],
      viewCount: 750,
      cast: ['안성민 (사)넥스트 연구원', 'LG에너지솔루션 기술연구소 박사']
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Update URL params when filters change
  const updateSearchParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setShowLanguageDropdown(false);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
    localStorage.setItem('ze_limit', value.toString());
    updateSearchParams('limit', value.toString());
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    updateSearchParams('sort', value);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
    updateSearchParams('search', value);
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag('');
      updateSearchParams('tag', '');
    } else {
      setSelectedTag(tag);
      updateSearchParams('tag', tag);
    }
    setCurrentPage(1);
  };

  // Format duration
  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '';
    
    const hours = parseInt(match[1] || '0');
    const minutes = parseInt(match[2] || '0');
    const seconds = parseInt(match[3] || '0');
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\./g, '.').replace(/\s/g, '');
  };

  // Format cast with organization abbreviation
  const formatCast = (cast: string[]) => {
    return cast.map(member => {
      return member.replace('사단법인 넥스트', '(사)넥스트');
    }).join(' · ');
  };

  // Filter and sort videos
  const filteredAndSortedVideos = useMemo(() => {
    let filtered = videos.filter(video => {
      // Search filter
      const searchMatch = !searchTerm || 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        video.cast.some(member => member.toLowerCase().includes(searchTerm.toLowerCase()));

      // Tag filter
      const tagMatch = !selectedTag || video.tags.includes(selectedTag);

      return searchMatch && tagMatch;
    });

    // Sort videos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'oldest':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case 'views':
          return b.viewCount - a.viewCount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [videos, searchTerm, selectedTag, sortBy]);

  const displayedVideos = filteredAndSortedVideos.slice(0, currentPage * itemsPerPage);
  const hasMoreVideos = displayedVideos.length < filteredAndSortedVideos.length;

  const loadMoreVideos = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Skeleton loading component
  const SkeletonCard = () => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse">
      <div className="aspect-video bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_0.8s_ease-in-out_infinite]"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-1/2"></div>
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="min-h-[3.5rem]">
          <div className="h-3 bg-gray-200 rounded mb-2 w-12"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );

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
                    <Link to="/research-topics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      연구 주제
                    </Link>
                    <Link to="/publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      발간물
                    </Link>
                    <Link to="/publications-horizontal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green">
                      발간물-가로
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
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 mt-16"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20energy%20communication%20concept%20with%20digital%20network%20connections%2C%20professional%20broadcasting%20studio%20environment%20with%20energy%20experts%20discussing%2C%20clean%20corporate%20atmosphere%20with%20blue%20and%20teal%20color%20scheme&width=1200&height=600&seq=zeroenergybar-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">제로에너지바</h1>
              <p className="text-xl font-light opacity-90 mb-2">에너지 전환과 기후변화 대응에 관한 최신 인사이트와 분석을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <Link
              to="/notices"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              공지사항
            </Link>
            <Link
              to="/events"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              행사
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Left side - Filters */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-700 whitespace-nowrap">표시 개수:</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm pr-8 min-w-[80px]"
                >
                  <option value={12}>12개</option>
                  <option value={24}>24개</option>
                  <option value={48}>48개</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-700 whitespace-nowrap">정렬:</label>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm pr-8 min-w-[100px]"
                >
                  <option value="latest">최신순</option>
                  <option value="oldest">오래된순</option>
                  <option value="views">조회수순</option>
                </select>
              </div>
            </div>

            {/* Right side - Search */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="제목, 내용, 태그, 출연자명 검색"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm w-64"
                />
                <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedTag || searchTerm) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-600">활성 필터:</span>
                {selectedTag && (
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    태그: {selectedTag}
                    <button
                      onClick={() => handleTagClick(selectedTag)}
                      className="ml-2 hover:text-blue-600"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    검색: {searchTerm}
                    <button
                      onClick={() => handleSearchChange('')}
                      className="ml-2 hover:text-green-600"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        {!isLoading && (
          <div className="mb-6">
            <p className="text-gray-600 text-sm">
              총 {filteredAndSortedVideos.length}개의 영상 중 {displayedVideos.length}개 표시
            </p>
          </div>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md/grid-cols-2 lg/grid-cols-3 gap-8">
          {isLoading ? (
            // Show skeleton loading
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            displayedVideos.map((video) => (
              <div 
                key={video.id} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                aria-label={`영상 ${video.title} — 출연: ${formatCast(video.cast)}`}
              >
                <div className="aspect-video bg-gray-100 relative">
                  <img 
                    src={video.thumbnails.high?.url} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {formatDuration(video.duration)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 leading-tight">{video.title}</h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <i className="ri-calendar-line mr-2"></i>
                      <span>{formatDate(video.publishedAt)}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-eye-line mr-1"></i>
                      <span>{video.viewCount.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Cast Information */}
                  <div className="min-h-[3.5rem] mb-4">
                    <div className="text-gray-400 text-xs mb-1">출연</div>
                    <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {formatCast(video.cast)}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTagClick(tag);
                        }}
                        className={`px-2 py-1 text-xs rounded-full transition-colors cursor-pointer ${
                          selectedTag === tag
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More Button */}
        {!isLoading && hasMoreVideos && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreVideos}
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-200 whitespace-nowrap transition-colors"
            >
              더 보기 ({filteredAndSortedVideos.length - displayedVideos.length}개 더)
            </button>
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredAndSortedVideos.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-video-line text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-600 mb-2">검색 조건에 맞는 영상이 없습니다.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag('');
                updateSearchParams('search', '');
                updateSearchParams('tag', '');
              }}
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              모든 필터 초기화
            </button>
          </div>
        )}
      </div>

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

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGallery",
            "name": "제로에너지바",
            "description": "에너지 전환과 기후변화 대응에 관한 최신 인사이트와 분석을 제공합니다.",
            "url": window.location.href,
            "video": displayedVideos.map(video => ({
              "@type": "VideoObject",
              "name": video.title,
              "description": video.description,
              "thumbnailUrl": video.thumbnails.high?.url,
              "uploadDate": video.publishedAt,
              "duration": video.duration,
              "contentUrl": `https://www.youtube.com/watch?v=${video.id}`,
              "embedUrl": `https://www.youtube.com/embed/${video.id}`,
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/WatchAction",
                "userInteractionCount": video.viewCount
              }
            }))
          })
        }}
      />
    </div>
  );
}
