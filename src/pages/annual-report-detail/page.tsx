
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function AnnualReportDetailPage() {
  const { year } = useParams();

  // PDF 다운로드 함수
  const handlePDFDownload = () => {
    // 테스트용 공개 PDF 파일 사용
    const link = document.createElement('a');
    link.href = 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf'; // 실제 존재하는 테스트용 PDF
    link.download = `${year}_NEXT_Group_연간보고서.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 연도별 보고서 데이터
  const reportData: { [key: string]: any } = {
    '2024': {
      title: '2024 NEXT Group 연간보고서',
      subtitle: '탄소중립을 향한 혁신적 도전',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20annual%20report%20cover%20design%202024%20with%20modern%20corporate%20layout%2C%20clean%20typography%2C%20sustainable%20energy%20themes%2C%20green%20and%20blue%20color%20scheme%2C%20minimalist%20business%20document%20style&width=800&height=600&seq=report2024cover&orientation=landscape',
      highlights: [
        {
          title: '탄소예산 데이터베이스 구축',
          description: '전 지구적 탄소예산을 국가별, 부문별로 세분화한 종합 데이터베이스 완성',
          image: 'https://readdy.ai/api/search-image?query=Carbon%20budget%20database%20visualization%20with%20charts%20and%20graphs%20showing%20global%20carbon%20data%20analysis%2C%20professional%20data%20visualization%20interface&width=400&height=200&seq=carbon-db&orientation=landscape'
        },
        {
          title: '에너지 전환 시나리오 연구',
          description: '2050 탄소중립 달성을 위한 5개 시나리오 개발 및 부문별 감축 경로 분석',
          image: 'https://readdy.ai/api/search-image?query=Energy%20transition%20scenarios%20research%20with%20renewable%20energy%20infrastructure%2C%20wind%20turbines%20and%20solar%20panels%20in%20modern%20landscape&width=400&height=200&seq=energy-scenario&orientation=landscape'
        },
        {
          title: '국제 협력 네트워크 확장',
          description: '아시아 기후정책 연구소 네트워크 참여 및 COP29 공식 옵저버 활동',
          image: 'https://readdy.ai/api/search-image?query=International%20cooperation%20network%20meeting%20with%20global%20climate%20policy%20researchers%2C%20professional%20conference%20setting&width=400&height=200&seq=intl-network&orientation=landscape'
        },
        {
          title: '대중 소통 활동 강화',
          description: '제로에너지바 운영 24회, 유튜브 채널 구독자 15,000명 달성',
          image: 'https://readdy.ai/api/search-image?query=Public%20communication%20activities%20with%20people%20engaging%20in%20climate%20education%20events%2C%20modern%20presentation%20setting&width=400&height=200&seq=public-comm&orientation=landscape'
        },
        {
          title: '교육 프로그램 확대',
          description: '대학생 기후정책 아카데미 3기 운영, 총 90명 수료',
          image: 'https://readdy.ai/api/search-image?query=Climate%20policy%20education%20program%20with%20university%20students%20in%20modern%20classroom%2C%20interactive%20learning%20environment&width=400&height=200&seq=education&orientation=landscape'
        },
        {
          title: '정책 제안서 발간',
          description: '한국형 그린딜 정책 방향 등 8건의 정책 보고서 발간',
          image: 'https://readdy.ai/api/search-image?query=Policy%20proposal%20documents%20and%20reports%20with%20green%20deal%20themes%2C%20professional%20government%20policy%20papers&width=400&height=200&seq=policy-reports&orientation=landscape'
        }
      ]
    },
    '2023': {
      title: '2023 NEXT Group 연간보고서',
      subtitle: '기후위기 대응의 새로운 전환점',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20annual%20report%20cover%20design%202023%20with%20corporate%20branding%2C%20environmental%20themes%2C%20sustainable%20development%20graphics%2C%20blue%20and%20green%20color%20palette%2C%20clean%20modern%20layout&width=800&height=600&seq=report2023cover&orientation=landscape',
      highlights: [
        {
          title: '에너지 전환 정책 연구',
          description: '재생에너지 확대 방안 및 그리드 안정성 확보 연구 완료',
          image: 'https://readdy.ai/api/search-image?query=Energy%20transition%20policy%20research%20with%20smart%20grid%20technology%20and%20renewable%20energy%20systems&width=400&height=200&seq=energy-policy&orientation=landscape'
        },
        {
          title: '탄소가격제 개선 방안',
          description: 'K-ETS 제도 분석 및 탄소세 도입 방안 연구',
          image: 'https://readdy.ai/api/search-image?query=Carbon%20pricing%20mechanism%20analysis%20with%20financial%20charts%20and%20economic%20data%20visualization&width=400&height=200&seq=carbon-price&orientation=landscape'
        },
        {
          title: '시민사회 소통 확대',
          description: '제로에너지바 정기 운영 및 시민 참여 프로그램 확대',
          image: 'https://readdy.ai/api/search-image?query=Citizen%20engagement%20programs%20with%20community%20participation%20in%20climate%20activities&width=400&height=200&seq=citizen-comm&orientation=landscape'
        },
        {
          title: '국제 협력 네트워크',
          description: '해외 기후정책 연구기관과의 협력 체계 구축',
          image: 'https://readdy.ai/api/search-image?query=International%20climate%20research%20collaboration%20with%20global%20institutions%20and%20partnerships&width=400&height=200&seq=global-coop&orientation=landscape'
        },
        {
          title: '정책 브리프 발간',
          description: '월 2회 정책 브리프 발간으로 정책 이슈 분석 제공',
          image: 'https://readdy.ai/api/search-image?query=Policy%20brief%20publications%20with%20professional%20document%20design%20and%20analysis%20reports&width=400&height=200&seq=policy-brief&orientation=landscape'
        }
      ]
    },
    '2022': {
      title: '2022 NEXT Group 연간보고서',
      subtitle: '탄소중립 정책 연구의 새로운 시작',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20annual%20report%20cover%20design%202022%20with%20clean%20corporate%20style%2C%20climate%20policy%20themes%2C%20renewable%20energy%20graphics%2C%20modern%20typography%2C%20green%20and%20blue%20colors&width=800&height=600&seq=report2022cover&orientation=landscape',
      highlights: [
        {
          title: '조직 기반 구축',
          description: '핵심 연구진 영입 및 연구 인프라 구축 완료',
          image: 'https://readdy.ai/api/search-image?query=Organization%20foundation%20building%20with%20professional%20team%20and%20research%20infrastructure%20setup&width=400&height=200&seq=org-foundation&orientation=landscape'
        },
        {
          title: '기초 연구 수행',
          description: '기후변화 대응 정책 분석 및 기초 연구 착수',
          image: 'https://readdy.ai/api/search-image?query=Climate%20change%20research%20with%20scientific%20data%20analysis%20and%20policy%20studies&width=400&height=200&seq=basic-research&orientation=landscape'
        },
        {
          title: '네트워크 구축',
          description: '국내외 기후정책 연구 네트워크 구축',
          image: 'https://readdy.ai/api/search-image?query=Research%20network%20building%20with%20domestic%20and%20international%20climate%20policy%20institutions&width=400&height=200&seq=network-build&orientation=landscape'
        },
        {
          title: '연구 방향 설정',
          description: '향후 5년간 연구 로드맵 및 전략 수립',
          image: 'https://readdy.ai/api/search-image?query=Research%20roadmap%20planning%20with%20strategic%20direction%20and%20long-term%20vision%20documents&width=400&height=200&seq=roadmap&orientation=landscape'
        }
      ]
    }
  };

  const currentReport = reportData[year || '2024'];

  if (!currentReport) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">보고서를 찾을 수 없습니다</h1>
          <Link to="/annual-reports" className="text-blue-600 hover:text-blue-800">
            연간보고서 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  // 이전/다음 연도 계산
  const currentYear = parseInt(year || '2024');
  const prevYear = currentYear - 1;
  const nextYear = currentYear + 1;
  const hasPrevReport = reportData[prevYear.toString()];
  const hasNextReport = reportData[nextYear.toString()];

  return (
    <div className="min-h-screen bg-white">
      {/* 1️⃣ 상단 헤더 (타이틀 + 연도만) */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600">
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/annual-reports"
              className="inline-flex items-center text-white hover:text-brand-green transition-colors"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              연간 보고서 목록으로 돌아가기
            </Link>
          </div>

          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              {year} NEXT Group 연간 보고서
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {currentReport.subtitle}
            </p>
            
            <button 
              onClick={handlePDFDownload}
              className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors whitespace-nowrap flex items-center mx-auto"
            >
              <i className="ri-download-line mr-2"></i>
              PDF 다운로드
            </button>
          </div>
        </div>
      </section>

      {/* 2️⃣ 주요 성과 하이라이트 (카드형 5~6개) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 성과</h2>
            <p className="text-lg text-gray-600">
              {year}년 NEXT Group의 핵심 활동과 성과를 소개합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentReport.highlights.map((highlight: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="ri-check-line text-green-600 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <span className="text-sm text-green-600 font-medium">성과 {index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ 하단 네비게이션 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* 이전 보고서 */}
            {hasPrevReport && (
              <Link
                to={`/annual-reports/${prevYear}`}
                className="bg-white text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center border border-gray-200"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                {prevYear} 보고서 보기
              </Link>
            )}

            {/* 목록으로 돌아가기 */}
            <Link
              to="/annual-reports"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover-bg-blue-700 transition-colors whitespace-nowrap flex items-center"
            >
              <i className="ri-list-check mr-2"></i>
              보고서 목록으로 돌아가기
            </Link>

            {/* 다음 보고서 */}
            {hasNextReport && (
              <Link
                to={`/annual-reports/${nextYear}`}
                className="bg-white text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center border border-gray-200"
              >
                {nextYear} 보고서 보기
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
