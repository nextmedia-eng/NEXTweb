
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NoticesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const notices = [
    {
      id: 1,
      category: "안내",
      title: "2025년 1분기 전력시장 전망 보고서 발간 안내",
      author: "관리자",
      date: "2024.12.15",
      views: 1245
    },
    {
      id: 2,
      category: "안내",
      title: "제4회 전력시장의 설계 심포지엄 개최 안내",
      author: "관리자",
      date: "2024.12.10",
      views: 987
    },
    {
      id: 3,
      category: "안내",
      title: "아시아 에너지 전환 포럼 2024 참가 신청 안내",
      author: "관리자",
      date: "2024.12.05",
      views: 756
    },
    {
      id: 4,
      category: "공시",
      title: "NEXT group 연말 휴무 안내",
      author: "관리자",
      date: "2024.12.01",
      views: 2134
    },
    {
      id: 5,
      category: "안내",
      title: "재생에너지 정책 분석 세미나 개최 안내",
      author: "관리자",
      date: "2024.11.28",
      views: 654
    },
    {
      id: 6,
      category: "안내",
      title: "글로벌 탄소중립 정책 워크숍 참가자 모집",
      author: "관리자",
      date: "2024.11.25",
      views: 892
    },
    {
      id: 7,
      category: "공시",
      title: "NEXT group 홈페이지 리뉴얼 안내",
      author: "관리자",
      date: "2024.11.20",
      views: 1567
    },
    {
      id: 8,
      category: "안내",
      title: "에너지 전환 정책 토론회 개최 안내",
      author: "관리자",
      date: "2024.11.15",
      views: 743
    },
    {
      id: 9,
      category: "안내",
      title: "2024년 4분기 연구 성과 발표회 안내",
      author: "관리자",
      date: "2024.11.10",
      views: 1098
    },
    {
      id: 10,
      category: "보도",
      title: "산업 탈탄소화 로드맵 연구 결과 발표",
      author: "관리자",
      date: "2024.11.05",
      views: 876
    },
    {
      id: 11,
      category: "안내",
      title: "기후리스크 분석 보고서 발간 안내",
      author: "관리자",
      date: "2024.10.30",
      views: 654
    },
    {
      id: 12,
      category: "안내",
      title: "전력망 안정성 연구 프로젝트 시작 안내",
      author: "관리자",
      date: "2024.10.25",
      views: 789
    },
    {
      id: 13,
      category: "채용",
      title: "NEXT group 신규 연구원 채용 공고",
      author: "관리자",
      date: "2024.10.20",
      views: 2345
    },
    {
      id: 14,
      category: "보도",
      title: "국제 에너지 컨퍼런스 참가 보고",
      author: "관리자",
      date: "2024.10.15",
      views: 567
    },
    {
      id: 15,
      category: "안내",
      title: "재생에너지 경제성 분석 연구 착수",
      author: "관리자",
      date: "2024.10.10",
      views: 432
    }
  ];

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case '공시':
        return 'bg-[#59bd7b] text-white';
      case '채용':
        return 'bg-[#004261] text-white';
      case '안내':
        return 'bg-[#231f20] text-white';
      case '보도':
        return 'bg-[#b9a779] text-white';
      default:
        return 'bg-[#c7c8ca] text-white';
    }
  };

  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNotices = filteredNotices.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

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
              <h1 className="text-5xl font-bold mb-4 leading-tight">공지사항</h1>
              <p className="text-xl font-light opacity-90">Notices</p>
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
              className="py-4 px-2 border-b-2 border-blue-600 text-blue-600 font-medium text-sm whitespace-nowrap transition-colors"
            >
              공지사항
            </Link>
            <Link
              to="/events"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">공지사항</h2>
          <p className="text-gray-600">NEXT group의 중요한 공지사항을 확인하세요.</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-700">표시 개수:</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm pr-8"
                >
                  <option value={10}>10개</option>
                  <option value={20}>20개</option>
                  <option value={50}>50개</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="제목 또는 작성자 검색"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm w-64"
                />
                <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Notice Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 w-20">번호</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">제목</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 w-32">작성자</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 w-32">등록일</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 w-24">조회수</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentNotices.map((notice, index) => (
                  <tr key={notice.id} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {filteredNotices.length - (startIndex + index)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 hover:text-blue-600">
                      <Link to={`/notices/${notice.id}`} className="hover:underline flex items-center">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium mr-3 ${getCategoryStyle(notice.category)}`}>
                          [{notice.category}]
                        </span>
                        {notice.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{notice.author}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{notice.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{notice.views.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <i className="ri-arrow-left-double-line"></i>
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <i className="ri-arrow-left-line"></i>
            </button>

            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 text-sm rounded-md ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <i className="ri-arrow-right-line"></i>
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <i className="ri-arrow-right-double-line"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}