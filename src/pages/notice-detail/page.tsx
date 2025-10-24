
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function NoticeDetailPage() {
  const { id } = useParams();

  // 공지사항 데이터
  const notices = [
    {
      id: 1,
      category: "안내",
      title: "2025년 1분기 전력시장 전망 보고서 발간 안내",
      author: "관리자",
      date: "2024.12.15",
      views: 1245,
      pdfUrl: "https://readdy.ai/api/search-image?query=PDF%20document%20icon%20with%20energy%20market%20report%20cover%20design&width=400&height=300&seq=pdf-report-1&orientation=portrait",
      content: `
        <p>안녕하세요. NEXT 그룹입니다.</p>
        
        <p>2025년 1분기 전력시장 전망 보고서가 발간되었음을 안내드립니다.</p>
        
        <h3>주요 내용</h3>
        <ul>
          <li>2025년 1분기 전력 수요 전망</li>
          <li>재생에너지 발전량 예측</li>
          <li>전력시장 가격 동향 분석</li>
          <li>정책 변화에 따른 시장 영향 평가</li>
        </ul>
        
        <h3>보고서 다운로드</h3>
        <p>보고서는 NEXT 그룹 홈페이지 발간물 섹션에서 다운로드 받으실 수 있습니다.</p>
        
        <h3>문의사항</h3>
        <p>보고서 관련 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.</p>
        <p>이메일: research@nextgroup.or.kr<br>
        전화: 070-4940-9009</p>
        
        <p>감사합니다.</p>
      `
    },
    {
      id: 2,
      category: "안내",
      title: "제4회 전력시장의 설계 심포지엄 개최 안내",
      author: "관리자",
      date: "2024.12.10",
      views: 987,
      pdfUrl: "https://readdy.ai/api/search-image?query=PDF%20document%20icon%20with%20symposium%20event%20program%20design&width=400&height=300&seq=pdf-symposium-2&orientation=portrait",
      content: `
        <p>NEXT 그룹에서 주최하는 제4회 전력시장의 설계 심포지엄 개최를 안내드립니다.</p>
        
        <h3>행사 개요</h3>
        <ul>
          <li><strong>일시:</strong> 2024년 12월 20일(금) 14:00~18:00</li>
          <li><strong>장소:</strong> 서울 강남구 센트럴타워 컨퍼런스룸</li>
          <li><strong>주제:</strong> 탄소중립 시대의 전력시장 설계</li>
          <li><strong>참가비:</strong> 무료</li>
        </ul>
        
        <h3>프로그램</h3>
        <ul>
          <li>14:00-14:30 등록 및 접수</li>
          <li>14:30-15:30 기조강연: 글로벌 전력시장 동향</li>
          <li>15:30-16:00 휴식</li>
          <li>16:00-17:30 패널토론: 한국 전력시장의 미래</li>
          <li>17:30-18:00 네트워킹</li>
        </ul>
        
        <h3>신청 방법</h3>
        <p>참가 신청은 12월 18일까지 이메일로 접수받습니다.</p>
        <p>신청 이메일: event@nextgroup.or.kr</p>
        
        <p>많은 관심과 참여 부탁드립니다.</p>
      `
    },
    {
      id: 3,
      category: "안내",
      title: "아시아 에너지 전환 포럼 2024 참가 신청 안내",
      author: "관리자",
      date: "2024.12.05",
      views: 756,
      pdfUrl: "https://readdy.ai/api/search-image?query=PDF%20document%20icon%20with%20Asia%20energy%20forum%20brochure%20design&width=400&height=300&seq=pdf-forum-3&orientation=portrait",
      content: `
        <p>아시아 에너지 전환 포럼 2024 참가 신청을 안내드립니다.</p>
        
        <h3>포럼 정보</h3>
        <ul>
          <li><strong>일시:</strong> 2025년 1월 15일-16일</li>
          <li><strong>장소:</strong> 싱가포르 마리나베이샌즈</li>
          <li><strong>주제:</strong> Asia's Energy Transition Roadmap</li>
        </ul>
        
        <h3>참가 혜택</h3>
        <ul>
          <li>아시아 주요국 에너지 정책 동향 파악</li>
          <li>글로벌 에너지 기업과의 네트워킹</li>
          <li>최신 에너지 기술 트렌드 학습</li>
        </ul>
        
        <p>참가 신청 및 자세한 정보는 포럼 공식 웹사이트를 참조해 주시기 바랍니다.</p>
      `
    },
    {
      id: 4,
      category: "공시",
      title: "NEXT 그룹 연말 휴무 안내",
      author: "관리자",
      date: "2024.12.01",
      views: 2134,
      pdfUrl: "https://readdy.ai/api/search-image?query=PDF%20document%20icon%20with%20holiday%20notice%20official%20document%20design&width=400&height=300&seq=pdf-holiday-4&orientation=portrait",
      content: `
        <p>NEXT 그룹 연말 휴무 일정을 안내드립니다.</p>
        
        <h3>휴무 기간</h3>
        <ul>
          <li><strong>휴무 시작:</strong> 2024년 12월 29일(일)</li>
          <li><strong>업무 재개:</strong> 2025년 1월 2일(목)</li>
        </ul>
        
        <h3>긴급 연락처</h3>
        <p>휴무 기간 중 긴급한 업무가 있으실 경우 아래 연락처로 문의해 주시기 바랍니다.</p>
        <p>긴급 연락처: emergency@nextgroup.or.kr</p>
        
        <h3>업무 처리 안내</h3>
        <ul>
          <li>휴무 기간 중 접수된 문의사항은 업무 재개 후 순차적으로 처리됩니다.</li>
          <li>연구 자료 요청 등은 미리 신청해 주시기 바랍니다.</li>
        </ul>
        
        <p>새해에도 변함없는 관심과 성원 부탁드립니다.</p>
        <p>감사합니다.</p>
      `
    },
    {
      id: 5,
      category: "안내",
      title: "재생에너지 정책 분석 세미나 개최 안내",
      author: "관리자",
      date: "2024.11.28",
      views: 654,
      pdfUrl: "https://readdy.ai/api/search-image?query=PDF%20document%20icon%20with%20renewable%20energy%20seminar%20program%20design&width=400&height=300&seq=pdf-seminar-5&orientation=portrait",
      content: `
        <p>재생에너지 정책 분석 세미나 개최를 안내드립니다.</p>
        
        <h3>세미나 개요</h3>
        <ul>
          <li><strong>일시:</strong> 2024년 12월 5일(목) 15:00~17:00</li>
          <li><strong>장소:</strong> NEXT 그룹 세미나실</li>
          <li><strong>주제:</strong> 2024년 재생에너지 정책 변화와 시장 영향</li>
        </ul>
        
        <h3>발표 내용</h3>
        <ul>
          <li>재생에너지 3020 정책 추진 현황</li>
          <li>태양광·풍력 발전 시장 동향</li>
          <li>그린뉴딜 정책의 에너지 분야 영향</li>
          <li>해외 재생에너지 정책 사례 분석</li>
        </ul>
        
        <p>관심 있는 분들의 많은 참여 바랍니다.</p>
      `
    },
    {
      id: 13,
      category: "채용",
      title: "NEXT 그룹 신규 연구원 채용 공고",
      author: "관리자",
      date: "2024.10.20",
      views: 2345,
      pdfUrl: "https://readdy.ai/api/search-image?query=PDF%20document%20icon%20with%20job%20recruitment%20announcement%20official%20design&width=400&height=300&seq=pdf-recruitment-13&orientation=portrait",
      content: `
        <p>NEXT 그룹에서 신규 연구원을 채용합니다.</p>
        
        <h3>채용 분야</h3>
        <ul>
          <li><strong>에너지 정책 연구원:</strong> 2명</li>
          <li><strong>전력시장 분석 연구원:</strong> 1명</li>
          <li><strong>데이터 분석 연구원:</strong> 1명</li>
        </ul>
        
        <h3>지원 자격</h3>
        <ul>
          <li>관련 분야 석사 이상 학위 소지자</li>
          <li>에너지·전력 분야 연구 경험 2년 이상</li>
          <li>영어 능통자 우대</li>
          <li>통계 분석 도구 활용 가능자 우대</li>
        </ul>
        
        <h3>전형 절차</h3>
        <ul>
          <li>1차: 서류 전형</li>
          <li>2차: 면접 전형</li>
          <li>3차: 최종 면접</li>
        </ul>
        
        <h3>지원 방법</h3>
        <p>지원서류를 이메일로 제출해 주시기 바랍니다.</p>
        <p>제출처: recruit@nextgroup.org.kr</p>
        <p>마감일: 2024년 11월 10일</p>
        
        <h3>제출 서류</h3>
        <ul>
          <li>이력서 및 자기소개서</li>
          <li>졸업증명서 및 성적증명서</li>
          <li>경력증명서 (해당자)</li>
          <li>포트폴리오 (해당자)</li>
        </ul>
        
        <p>많은 관심과 지원 바랍니다.</p>
      `
    }
  ];

  const currentNotice = notices.find(notice => notice.id === parseInt(id || '1'));

  if (!currentNotice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

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

  // 이전/다음 공지사항 찾기
  const currentIndex = notices.findIndex(notice => notice.id === parseInt(id || '1'));
  const prevNotice = currentIndex > 0 ? notices[currentIndex - 1] : null;
  const nextNotice = currentIndex < notices.length - 1 ? notices[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-700">홈</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link to="/notices" className="hover:text-gray-700">공지사항</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900">상세보기</span>
          </div>
        </nav>

        {/* Article Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-4 ${getCategoryStyle(currentNotice.category)}`}>
                [{currentNotice.category}]
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {currentNotice.title}
            </h1>
          </div>

          <div className="flex items-center justify-between py-4 border-t border-b border-gray-200 text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <i className="ri-user-line mr-2"></i>
                <span>{currentNotice.author}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-calendar-line mr-2"></i>
                <span>{currentNotice.date}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-eye-line mr-2"></i>
                <span>{currentNotice.views.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                <i className="ri-share-line"></i>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                <i className="ri-printer-line"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: currentNotice.content }}
            style={{
              lineHeight: '1.8',
              fontSize: '16px'
            }}
          />
          
          {/* PDF Download Section */}
          {currentNotice.pdfUrl && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-file-pdf-line text-red-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">첨부 파일</h4>
                      <p className="text-sm text-gray-600">{currentNotice.title}.pdf</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      // PDF 다운로드 시뮬레이션
                      const link = document.createElement('a');
                      link.href = currentNotice.pdfUrl;
                      link.download = `${currentNotice.title}.pdf`;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center"
                  >
                    <i className="ri-download-line mr-2"></i>
                    다운로드
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="space-y-4">
            {nextNotice && (
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <i className="ri-arrow-up-line mr-2"></i>
                  <span>다음글</span>
                </div>
                <Link 
                  to={`/notices/${nextNotice.id}`}
                  className="text-gray-900 hover:text-blue-600 font-medium flex-1 ml-4 truncate"
                >
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium mr-2 ${getCategoryStyle(nextNotice.category)}`}>
                    [{nextNotice.category}]
                  </span>
                  {nextNotice.title}
                </Link>
              </div>
            )}
            {prevNotice && (
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center text-sm text-gray-500">
                  <i className="ri-arrow-down-line mr-2"></i>
                  <span>이전글</span>
                </div>
                <Link 
                  to={`/notices/${prevNotice.id}`}
                  className="text-gray-900 hover:text-blue-600 font-medium flex-1 ml-4 truncate"
                >
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium mr-2 ${getCategoryStyle(prevNotice.category)}`}>
                    [{prevNotice.category}]
                  </span>
                  {prevNotice.title}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/notices"
            className="bg-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-list-unordered mr-2"></i>
            목록으로
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-arrow-up-line mr-2"></i>
            맨 위로
          </button>
        </div>
      </div>
    </div>
  );
}