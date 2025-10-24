
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const events = [
    {
      id: 1,
      category: '예정',
      title: '제5회 전력시장의 설계 심포지엄',
      description: '2025년 전력시장 전망과 재생에너지 확산에 따른 시장 구조 변화를 논의하는 전문가 심포지엄입니다.',
      date: '2025.01.15',
      time: '14:00 - 18:00',
      location: '서울 중구 세종대로 110 프레스센터',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20conference%20room%20with%20presentation%20screen%20and%20attendees%2C%20modern%20symposium%20setting%20with%20energy%20policy%20charts%20and%20graphs%2C%20corporate%20meeting%20environment&width=400&height=250&seq=event1&orientation=landscape'
    },
    {
      id: 2,
      category: '예정',
      title: '아시아 에너지 전환 포럼 2025',
      description: '아시아 태평양 지역의 에너지 전환 정책과 기술 혁신을 다루는 국제 포럼입니다.',
      date: '2025.02.20',
      time: '09:00 - 17:00',
      location: '서울 강남구 테헤란로 152 강남파이낸스센터',
      image: 'https://readdy.ai/api/search-image?query=International%20energy%20forum%20with%20Asian%20participants%2C%20modern%20conference%20hall%20with%20renewable%20energy%20displays%2C%20professional%20networking%20event%20with%20global%20energy%20experts&width=400&height=250&seq=event2&orientation=landscape'
    },
    {
      id: 3,
      category: '예정',
      title: '글로벌 탄소중립 정책 워크숍',
      description: '전 세계 탄소중립 정책 동향과 한국의 대응 전략을 모색하는 정책 워크숍입니다.',
      date: '2025.03.10',
      time: '10:00 - 16:00',
      location: '부산 해운대구 APEC로 55 누리마루',
      image: 'https://readdy.ai/api/search-image?query=Climate%20policy%20workshop%20with%20global%20carbon%20neutrality%20charts%2C%20professional%20meeting%20room%20with%20environmental%20data%20presentations%2C%20international%20cooperation%20setting&width=400&height=250&seq=event3&orientation=landscape'
    },
    {
      id: 4,
      category: '완료',
      title: '제4회 전력시장의 설계 심포지엄',
      description: '탄소중립 정책의 현재와 미래를 주제로 한 전력시장 전문가들의 심도 있는 토론회였습니다.',
      date: '2024.12.10',
      time: '14:00 - 18:00',
      location: '서울 중구 세종대로 110 프레스센터',
      image: 'https://readdy.ai/api/search-image?query=Completed%20energy%20symposium%20with%20speakers%20presenting%20carbon%20neutral%20policies%2C%20professional%20conference%20with%20audience%20and%20presentation%20screens%2C%20successful%20business%20event&width=400&height=250&seq=event4&orientation=landscape'
    },
    {
      id: 5,
      category: '완료',
      title: 'NEXT 전력정책 토론회',
      description: '2025년 전력수급 전망과 정책 방향을 논의한 온라인 웨비나였습니다.',
      date: '2024.11.28',
      time: '15:00 - 17:00',
      location: '온라인 웨비나',
      image: 'https://readdy.ai/api/search-image?query=Online%20webinar%20setup%20with%20energy%20policy%20presentation%2C%20virtual%20meeting%20with%20multiple%20participants%20on%20screen%2C%20digital%20conference%20environment&width=400&height=250&seq=event5&orientation=landscape'
    },
    {
      id: 6,
      category: '완료',
      title: '재생에너지 정책 분석 세미나',
      description: '국내외 재생에너지 정책 동향과 시장 전망을 분석한 전문 세미나였습니다.',
      date: '2024.10.15',
      time: '13:00 - 17:00',
      location: '서울 강남구 역삼동 COEX',
      image: 'https://readdy.ai/api/search-image?query=Renewable%20energy%20seminar%20with%20solar%20and%20wind%20power%20presentations%2C%20professional%20conference%20room%20with%20green%20technology%20displays%2C%20sustainable%20energy%20policy%20meeting&width=400&height=250&seq=event6&orientation=landscape'
    },
    {
      id: 7,
      category: '완료',
      title: '산업 탈탄소화 로드맵 발표회',
      description: '제조업 부문의 탄소중립 달성 방안을 제시한 연구 결과 발표회였습니다.',
      date: '2024.09.20',
      time: '14:00 - 16:00',
      location: '서울 영등포구 여의도동 전경련회관',
      image: 'https://readdy.ai/api/search-image?query=Industrial%20decarbonization%20presentation%20with%20manufacturing%20charts%2C%20business%20conference%20showing%20carbon%20neutral%20roadmap%2C%20professional%20meeting%20with%20industry%20experts&width=400&height=250&seq=event7&orientation=landscape'
    },
    {
      id: 8,
      category: '완료',
      title: '기후리스크 분석 워크숍',
      description: '기후변화로 인한 물리적 피해와 사회경제적 영향을 분석한 전문가 워크숍이었습니다.',
      date: '2024.08.25',
      time: '10:00 - 15:00',
      location: '서울 서초구 서초대로 396 강남빌딩',
      image: 'https://readdy.ai/api/search-image?query=Climate%20risk%20analysis%20workshop%20with%20environmental%20data%20charts%2C%20professional%20meeting%20discussing%20climate%20change%20impacts%2C%20scientific%20conference%20with%20weather%20and%20economic%20data&width=400&height=250&seq=event8&orientation=landscape'
    },
    {
      id: 9,
      category: '예정',
      title: '에너지 저장 기술 컨퍼런스',
      description: '차세대 배터리 기술과 에너지 저장 시스템의 최신 동향을 다루는 기술 컨퍼런스입니다.',
      date: '2025.04.18',
      time: '09:30 - 17:30',
      location: '대전 유성구 대덕대로 989 KAIST',
      image: 'https://readdy.ai/api/search-image?query=Energy%20storage%20technology%20conference%20with%20battery%20displays%2C%20modern%20tech%20conference%20showing%20grid-scale%20storage%20systems%2C%20professional%20technology%20presentation&width=400&height=250&seq=event9&orientation=landscape'
    }
  ];

  const categories = ['전체', '예정', '완료'];

  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === '전체' || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date.replace(/\./g, '-')).getTime() - new Date(a.date.replace(/\./g, '-')).getTime();
      case 'oldest':
        return new Date(a.date.replace(/\./g, '-')).getTime() - new Date(b.date.replace(/\./g, '-')).getTime();
      default:
        return 0;
    }
  });

  const displayedEvents = sortedEvents.slice(0, itemsPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20business%20communication%20concept%20with%20digital%20network%20connections%2C%20professional%20office%20environment%20with%20people%20collaborating%2C%20clean%20corporate%20atmosphere%20with%20blue%20and%20teal%20color%20scheme&width=1200&height=600&seq=communication-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">행사</h1>
              <p className="text-xl font-light opacity-90">Events</p>
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
              className="py-4 px-2 border-b-2 border-blue-600 text-blue-600 font-medium text-sm whitespace-nowrap transition-colors"
            >
              행사
            </Link>
            <Link
              to="/zero-energy-bar"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              제로에너지바
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">행사</h2>
          <p className="text-gray-600">NEXT group이 주최하는 다양한 행사와 세미나 정보를 확인하세요.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-700">표시 개수:</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm pr-8"
                >
                  <option value={6}>6개</option>
                  <option value={12}>12개</option>
                  <option value={24}>24개</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-700">정렬:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm pr-8"
                >
                  <option value="latest">최신순</option>
                  <option value="oldest">오래된순</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="행사명, 설명, 장소 검색"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm w-64"
                />
                <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover object-top" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.category === '예정' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>{event.date}</span>
                  <span className="mx-2">•</span>
                  <i className="ri-time-line mr-2"></i>
                  <span>{event.time}</span>
                </div>
                
                <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2">{event.title}</h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <i className="ri-map-pin-line mr-2"></i>
                  <span className="line-clamp-1">{event.location}</span>
                </div>
                
                <Link 
                  to={`/events/${event.id}`}
                  className="block w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 whitespace-nowrap text-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayedEvents.length < sortedEvents.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setItemsPerPage(prev => prev + 6)}
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-200 whitespace-nowrap"
            >
              더 보기 ({sortedEvents.length - displayedEvents.length}개 더)
            </button>
          </div>
        )}

        {/* No Results */}
        {sortedEvents.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-calendar-line text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-600">검색 조건에 맞는 행사가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}