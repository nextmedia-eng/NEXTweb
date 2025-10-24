
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);
  const [currentNews, setCurrentNews] = useState(0);
  const [currentCompany, setCurrentCompany] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [showIntroDropdown, setShowIntroDropdown] = useState(false);
  const [showResearchDropdown, setShowResearchDropdown] = useState(false);
  const [showCommunicationDropdown, setShowCommunicationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('한국어');

  // 드롭다운 상태 초기화 함수
  const closeAllDropdowns = () => {
    setShowIntroDropdown(false);
    setShowResearchDropdown(false);
    setShowCommunicationDropdown(false);
    setShowLanguageDropdown(false);
  };

  // 특정 드롭다운만 열고 나머지는 닫기
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

  // 드롭다운 메뉴 클릭 시 상태 초기화
  const handleDropdownClick = (dropdownType: string) => {
    closeAllDropdowns();
    // 클릭 후 잠시 후에 해당 드롭다운 열기
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

  // 제로에너지바 유튜브 영상 URL 관리 (관리자가 수동 입력)
  const zeroEnergyBarVideos = {
    videoUrl1: 'https://youtu.be/1J--SxDLrBw?si=mQpRRj28adl-BCfF', // 필수
    videoUrl2: 'https://youtu.be/H7dBDnNY4Q4?si=XH8dSySZH1STOYlB', // 선택
    videoUrl3: 'https://youtu.be/p_fYP-Om9G0?si=G2O1uBopGzaBS_Nk' // 선택
  };

  // 유튜브 비디오 ID 추출 함수
  const extractVideoId = (url: string): string | null => {
    if (!url) return null;

    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }

    return null;
  };

  // 유튜브 썸네일 URL 생성 (폴백 순서 적용)
  const getYoutubeThumbnail = (videoId: string): string => {
    // maxresdefault.jpg를 기본으로 사용 (실제로는 폴백 로직이 필요하지만 여기서는 maxresdefault 사용)
    return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // 제로에너지바 비디오 데이터 처리
  const processZeroEnergyBarVideos = () => {
    const videos: {
      id: string;
      url: string;
      thumbnail: string;
      title: string;
      description: string;
    }[] = [];
    const videoTitles = [
      '[전기차] 전기차 시대, 한국 자동차 산업의 운명은?',
      '[전기차] 전기차 전환, 왜 한국은 이렇게 느릴까?',
      '[탈석탄] 석탄에 종말을 고하다'
    ];
    const videoDescriptions = [
      '권용주 국민대 자동차·운송디자인학과 겸임교수',
      '권용주 국민대 자동차·운송디자인학과 겸임교수',
      '이지우 (사)넥스트 연구원 · 송용현 (사)넥스트 부대표'
    ];

    Object.entries(zeroEnergyBarVideos).forEach(([_, url], index) => {
      if (url) {
        const videoId = extractVideoId(url);
        if (videoId) {
          videos.push({
            id: videoId,
            url: `https://www.youtube.com/watch?v=${videoId}`,
            thumbnail: getYoutubeThumbnail(videoId),
            title: videoTitles[index] || '에너지 전환과 기후변화 대응',
            description: videoDescriptions[index] || 'NEXT Group의 최신 연구 인사이트를 영상으로 만나보세요'
          });
        }
      }
    });

    return videos;
  };

  const zeroEnergyVideos = processZeroEnergyBarVideos();

  // 최신 발간물 데이터 (발행일 기준 최신 4개)
  const latestPublications = [
    {
      id: 1,
      type: '이슈페이퍼',
      title: '석유화학산업단지의 전환, 지역에서 답을 찾다',
      summary: '국내 석유화학산업단지의 탄소중립 전환 과정에서 지역 중심의 접근법이 필요함을 제시합니다. 울산, 여수, 대산 등 주요 산업단지별 맞춤형 전환 전략을 분석합니다.',
      date: '2025.07.02',
      author: '김정식',
      image: 'https://readdy.ai/api/search-image?query=Modern%20petrochemical%20industrial%20complex%20transformation%20with%20clean%20technology%20integration%2C%20professional%20research%20publication%20cover%20with%20industrial%20landscape%20and%20green%20energy%20elements&width=1200&height=600&seq=spotlight-pub1&orientation=landscape',
      link: '/publication/1'
    },
    {
      id: 2,
      type: '보고서',
      title: '재생에너지 확산을 위한 정책 방향과 과제',
      summary: '재생에너지 산업의 지속가능한 성장을 위한 정책 프레임워크를 제시하고, 해상풍력과 태양광 발전의 효율적 확산 방안을 분석합니다.',
      date: '2025.06.28',
      author: '박민수',
      image: 'https://readdy.ai/api/search-image?query=Renewable%20energy%20landscape%20with%20wind%20turbines%20and%20solar%20panels%20in%20modern%20sustainable%20development%2C%20professional%20policy%20report%20cover%20design%20with%20clean%20energy%20infrastructure&width=1200&height=600&seq=spotlight-pub2&orientation=landscape',
      link: '/publication/2'
    },
    {
      id: 3,
      type: '이슈브리프',
      title: '탄소중립 달성을 위한 산업부문 전략',
      summary: '2050 탄소중립 목표 달성을 위한 주요 산업부문의 감축 전략과 기술 혁신 방향을 제시합니다. 철강, 시멘트, 화학 등 핵심 산업의 탈탄소화 로드맵을 분석합니다.',
      date: '2025.06.25',
      author: '이현정',
      image: 'https://readdy.ai/api/search-image?query=Carbon%20neutral%20industrial%20facility%20with%20clean%20technology%20and%20green%20manufacturing%20processes%2C%20professional%20brief%20report%20design%20with%20sustainable%20industry%20transformation&width=1200&height=600&seq=spotlight-pub3&orientation=landscape',
      link: '/publication/3'
    },
    {
      id: 4,
      type: '이슈&폴리시',
      title: '전력시장 개편과 재생에너지 통합 방안',
      summary: '전력시장 구조 개편을 통한 재생에너지 통합 확대 방안을 제시하고, 시장 참여자별 역할과 책임을 분석합니다.',
      date: '2025.06.20',
      author: '최에너지',
      image: 'https://readdy.ai/api/search-image?query=Modern%20electrical%20power%20grid%20with%20renewable%20energy%20integration%2C%20smart%20grid%20technology%20and%20market%20transformation%2C%20professional%20report%20cover%20design%20with%20electrical%20infrastructure&width=1200&height=600&seq=spotlight-pub4&orientation=landscape',
      link: '/publication/4'
    }
  ];

  // 행사 데이터 (최신 3개, 예정/진행중/완료 상태)
  const eventData = [
    {
      id: 1,
      title: '제5회 전력시장의 설계 심포지엄',
      date: '2025.01.15',
      time: '14:00 - 18:00',
      location: '서울 중구 세종대로 110 프레스센터',
      status: '예정',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20conference%20room%20with%20presentation%20screen%20and%20attendees%2C%20modern%20symposium%20setting%20with%20energy%20policy%20charts%20and%20graphs%2C%20corporate%20meeting%20environment%20with%20blue%20and%20teal%20lighting&width=600&height=400&seq=home-event1&orientation=landscape',
      slug: '1'
    },
    {
      id: 2,
      title: '아시아 에너지 전환 포럼 2025',
      date: '2025.02.20',
      time: '09:00 - 17:00',
      location: '서울 강남구 테헤란로 152 강남파이낸스센터',
      status: '예정',
      image: 'https://readdy.ai/api/search-image?query=International%20energy%20forum%20with%20Asian%20participants%2C%20modern%20conference%20hall%20with%20renewable%20energy%20displays%2C%20professional%20networking%20event%20with%20global%20energy%20experts%20and%20clean%20technology%20presentations&width=600&height=400&seq=home-event2&orientation=landscape',
      slug: '2'
    },
    {
      id: 3,
      title: '글로벌 탄소중립 정책 워크숍',
      date: '2025.03.10',
      time: '10:00 - 16:00',
      location: '부산 해운대구 APEC로 55 누리마루',
      status: '예정',
      image: 'https://readdy.ai/api/search-image?query=Climate%20change%20impact%20visualization%20with%20earth%20and%20environmental%20data%2C%20global%20warming%20effects%20and%20sustainable%20solutions&width=600&height=400&seq=home-event3&orientation=landscape',
      slug: '3'
    }
  ];

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpotlight((prev) => (prev + 1) % latestPublications.length);
    }, 5000); // 5초마다 자동 슬라이드

    return () => clearInterval(interval);
  }, [latestPublications.length]);

  const newsItems = [
    {
      image:
        'https://readdy.ai/api/search-image?query=Coal%20power%20plant%20with%20cooling%20towers%20and%20industrial%20smokestacks%20against%20blue%20sky%2C%20traditional%20energy%20infrastructure%2C%20industrial%20landscape%20with%20steam%20emissions&width=300&height=200&seq=news1&orientation=landscape',
      category: '석탄',
      title: 'Coal Phase-Out Watcher',
      author: '김에너지',
      date: '2024.12.05'
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Modern%20electrical%20power%20grid%20with%20transmission%20towers%20and%20blue%20digital%20overlay%2C%20smart%20grid%20technology%2C%20electrical%20infrastructure%20with%20data%20visualization&width=300&height=200&seq=news2&orientation=landscape',
      category: '전력망',
      title: 'NEXT Electricity Outlook 2025 - Part',
      author: '박전력',
      date: '2024.12.03'
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Large%20solar%20panel%20farm%20with%20rows%20of%20photovoltaic%20panels%20under%20bright%20blue%20sky%2C%20renewable%20energy%20installation%20clean%20technology%20infrastructure&width=300&height=200&seq=news3&orientation=landscape',
      category: '태양광',
      title: '신재생에너지 확산 전망',
      author: '이태양',
      date: '2024.12.01'
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Wind%20turbine%20farm%20on%20green%20hills%20with%20blue%20sky%20background%2C%20renewable%20wind%20energy%20generation%2C%20sustainable%20power%20infrastructure%20in%20natural%20landscape&width=300&height=200&seq=news4&orientation=landscape',
      category: '풍력',
      title: '해상풍력 발전 현황',
      author: '최바람',
      date: '2024.11.28'
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Electric%20vehicle%20charging%20station%20with%20modern%20design%2C%20clean%20energy%20transportation%20infrastructure%2C%20sustainable%20mobility%20solutions&width=300&height=200&seq=news5&orientation=landscape',
      category: '전기차',
      title: '전기차 충전 인프라 확충',
      author: '정전기',
      date: '2024.11.25'
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Hydrogen%20fuel%20cell%20technology%20concept%20with%20industrial%20equipment%2C%20clean%20hydrogen%20energy%20production%2C%20sustainable%20fuel%20infrastructure&width=300&height=200&seq=news6&orientation=landscape',
      category: '수소',
      title: '수소경제 활성화 방안',
      author: '한수소',
      date: '2024.11.22'
    }
  ];

  const companyNews = [
    {
      image:
        'https://readdy.ai/api/search-image?query=Modern%20business%20meeting%20room%20with%20presentation%20screen%20showing%20charts%20and%20graphs%2C%20professional%20corporate%20environment%2C%20webinar%20setup&width=150&height=100&seq=company1&orientation=landscape',
      title: 'NEXT 전력정책 토론회: 2025년 전력수급 전망',
      date: '2024.11.28',
      location: '온라인 웨비나'
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Professional%20business%20conference%20room%20with%20people%20attending%20presentation%2C%20corporate%20meeting%20with%20charts%20and%20data%20on%20screen%2C%20business%20seminar%20environment&width=150&height=100&seq=company2&orientation=landscape',
      title: '제4회 전력시장의 설계 심포지엄: 탄소중립 정책의 현재와 미래',
      date: '2024.12.10',
      location: '서울 중구'
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Modern%20auditorium%20with%20speakers%20presenting%20energy%20policy%20research%2C%20academic%20conference%20setting%20with%20professional%20lighting%20and%20presentation%20screens&width=150&height=100&seq=company3&orientation=landscape',
      title: '아시아 에너지 전환 포럼 2024',
      date: '2024.12.15',
      location: '서울 강남구'
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=International%20business%20summit%20with%20global%20energy%20experts%2C%20professional%20networking%20event%20with%20modern%20conference%20facilities&width=150&height=100&seq=company4&orientation=landscape',
      title: '글로벌 탄소중립 정책 워크숍',
      date: '2024.12.20',
      location: '부산 해운대구'
    }
  ];

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setShowLanguageDropdown(false);
  };

  const nextSpotlight = () => {
    setCurrentSpotlight((prev) => (prev + 1) % latestPublications.length);
  };

  const prevSpotlight = () => {
    setCurrentSpotlight((prev) => (prev - 1 + latestPublications.length) % latestPublications.length);
  };

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const nextCompany = () => {
    setCurrentCompany((prev) => (prev + 1) % companyNews.length);
  };

  const prevCompany = () => {
    setCurrentCompany((prev) => (prev - 1 + companyNews.length) % companyNews.length);
  };

  // 행사 슬라이드 네비게이션
  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % eventData.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + eventData.length) % eventData.length);
  };

  // Get current items for each section
  const getVisibleNewsItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentNews + i) % newsItems.length;
      items.push(newsItems[index]);
    }
    return items;
  };

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

  const getPublicationTabUrl = (type: string) => {
    const typeMap: { [key: string]: string } = {
      보고서: 'reports',
      이슈페이퍼: 'issue-papers',
      이슈브리프: 'issue-briefs',
      '이슈&폴리시': 'issue-policy',
      기타: 'others'
    };
    return `/publications?tab=${typeMap[type] || 'all'}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 mb-0 pb-0"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/cdb089564af8ef48c74c43b5090337d9/6a5c4bc873dfedf7cc13b12e88530de8.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <p className="text-lg mb-2 font-bold">기후 · 에너지 정책 싱크탱크</p>
              <h1 className="text-6xl font-bold mb-6 leading-tight">Find the NEXT</h1>
              <div className="text-lg mb-12 font-light max-w-md">
                <p>사단법인 넥스트는 아시아의 넷제로 에너지 전환을</p>
                <p>위한 비영리 기후·에너지 정책 싱크탱크입니다.</p>
              </div>

              <div className="max-w-lg mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 text-lg bg-white/80 backdrop-blur-sm"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                    <i className="ri-search-line text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section - 최신 발간물 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#222] mb-2">최신 발간물</h2>
            <p className="text-gray-600">Latest Publications</p>
          </div>

          {/* Featured Publication - 큰 배너형 */}
          <div className="mb-12">
            <Link
              to={latestPublications[0].link}
              className="block relative h-96 bg-cover bg-center rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              style={{ backgroundImage: `url(${latestPublications[0].image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative h-full flex items-center">
                <div className="max-w-4xl mx-auto px-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`inline-block px-4 py-2 rounded text-sm font-bold ${getTypeColor(latestPublications[0].type)}`}>
                      {latestPublications[0].type}
                    </span>
                    <div className="flex items-center text-white/80 text-sm">
                      <i className="ri-calendar-line mr-2"></i>
                      {latestPublications[0].date}
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4 leading-tight">{latestPublications[0].title}</h3>
                  <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-3xl">{latestPublications[0].summary}</p>
                  <div className="flex items-center gap-6">
                    <span className="text-white/80">작성자: {latestPublications[0].author}</span>
                    <div className="bg-[#1C8E8C] hover:bg-[#1C8E8C]/80 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center justify-center">
                      자세히 보기
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Other Publications - 작은 카드형 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPublications.slice(1).map((publication) => (
              <Link
                key={publication.id}
                to={publication.link}
                className="block bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={publication.image} alt={publication.title} className="w-full h-48 object-cover object-top" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${getTypeColor(publication.type)}`}>
                      {publication.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <i className="ri-calendar-line mr-1"></i>
                      {publication.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#222] mb-3 line-clamp-2">{publication.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{publication.summary}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-700">작성자: {publication.author}</span>
                  </div>
                  <div className="w-full bg-[#1C8E8C] hover:bg-[#1C8E8C]/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-center">
                    자세히 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <Link
              to="/publications"
              className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              모든 발간물 보기
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section - 행사 소식 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#222] mb-2">행사 소식</h2>
              <p className="text-gray-600">Events</p>
            </div>
            {eventData.length > 1 && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevEvent}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
                >
                  <i className="ri-arrow-left-line text-gray-600"></i>
                </button>
                <button
                  onClick={nextEvent}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
                >
                  <i className="ri-arrow-right-line text-gray-600"></i>
                </button>
              </div>
            )}
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentEvent * 100}%)` }}
            >
              {eventData.map((event) => (
                <div key={event.id} className="w-full flex-shrink-0 flex justify-center">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow w-full max-w-5xl h-96">
                    <div className="flex h-full">
                      {/* Left half - Image */}
                      <div className="w-1/2 h-full">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover object-top" />
                      </div>
                      {/* Right half - Content */}
                      <div className="w-1/2 h-full flex flex-col justify-between p-8">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                event.status === '예정'
                                  ? 'bg-green-100 text-green-800'
                                  : event.status === '진행중'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {event.status}
                            </span>
                            <div className="flex items-center text-gray-600 text-sm">
                              <i className="ri-calendar-line mr-2"></i>
                              <span>{event.date}</span>
                              <span className="mx-2">•</span>
                              <i className="ri-time-line mr-2"></i>
                              <span>{event.time}</span>
                            </div>
                          </div>

                          <h3 className="font-bold text-gray-900 text-2xl mb-6 leading-tight">{event.title}</h3>

                          <div className="flex items-center text-gray-600 text-lg mb-8">
                            <i className="ri-map-pin-line mr-2"></i>
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <Link
                          to={`/events/${event.id}`}
                          className="w-full bg-[#1C8E8C] text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-[#167773] whitespace-nowrap text-center transition-colors flex items-center justify-center"
                        >
                          자세히 보기
                          <i className="ri-arrow-right-line ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Events Button */}
          <div className="text-center mt-8">
            <Link
              to="/events"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors border border-gray-200"
            >
              모든 행사 보기
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Section - Zero Energy Bar */}
      <section className="py-16 bg-white" id="zeroenergybar-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#222] mb-2">제로에너지바</h2>
            <p className="text-gray-600">NEXT group의 공식 유튜브 채널</p>
          </div>

          {/* YouTube Channel Banner with Background Image */}
          <a
            href="https://www.youtube.com/channel/UCtBblQAwObXrfJhaVQV0pmg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="제로에너지바 유튜브 채널로 이동"
            className="block w-full rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200 cursor-pointer relative"
            style={{ 
              height: '240px',
              backgroundImage: `url('https://static.readdy.ai/image/cdb089564af8ef48c74c43b5090337d9/1e86769116b5ea0123a90895041a8829.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            
            {/* CTA Text */}
            <div className="relative h-full flex items-end justify-end p-8">
              <div className="text-white font-bold text-xl flex items-center">
                <span>제로에너지바 채널 보기</span>
                <i className="ri-arrow-right-line ml-2 text-2xl"></i>
              </div>
            </div>
          </a>

          {/* Bottom spacing */}
          <div className="mb-10"></div>
        </div>
      </section>
    </div>
  );
}
