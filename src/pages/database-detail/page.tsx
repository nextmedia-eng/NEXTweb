
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface RelatedVideo {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  date: string;
}

interface RelatedDatabase {
  id: number;
  title: string;
  author: string;
  date: string;
}

export default function DatabaseDetailPage() {
  const { id } = useParams();
  const [overviewOpen, setOverviewOpen] = useState(true);
  const [contentOpen, setContentOpen] = useState(true);
  const [relatedOpen, setRelatedOpen] = useState(false);

  // 예시 데이터베이스 데이터
  const database = {
    id: 1,
    title: '탄소예산 데이터베이스',
    author: '김해진',
    date: '2025.02.14',
    views: 2404,
    overview: `탄소예산 데이터베이스는 지구 온도 상승을 1.5°C로 제한하기 위한 과학적 근거를 제공하는 종합 데이터 플랫폼입니다.
    
본 데이터베이스는 IPCC 보고서를 기반으로 한 전 지구적 탄소예산 정보와 국가별, 부문별 배출량 데이터를 통합하여 제공합니다. 우리나라가 2028년까지 2035년 국가결정기여(NDC, Nationally Determined Contribution) 목표를 상향 조정해 제출해야 하는 상황에서, 과학적 근거에 기반한 목표 설정을 지원하기 위해 구축되었습니다.

데이터베이스는 실시간 업데이트되는 배출량 데이터, 시나리오별 감축 경로, 정책 효과 분석 도구 등을 포함하여 정책 입안자와 연구자들이 효과적으로 활용할 수 있도록 설계되었습니다.`,
    content: `## 1. 데이터베이스 개요

탄소예산 데이터베이스는 기후변화 대응을 위한 과학적 의사결정을 지원하는 핵심 도구입니다. 1.5°C 목표 달성을 위한 전 지구적 탄소예산을 국가별, 부문별로 배분하고, 이를 기반으로 한 감축 시나리오를 제공합니다.

### 1.1 구축 배경

파리협정 이후 각국은 장기저탄소발전전략(LEDS)과 국가결정기여(NDC)를 통해 탄소중립 목표를 제시하고 있습니다. 그러나 현재 각국이 제시한 목표를 모두 달성하더라도 1.5°C 목표 달성은 어려운 상황입니다. 이에 과학적 근거에 기반한 보다 야심찬 목표 설정이 필요하며, 본 데이터베이스는 이러한 목표 설정을 위한 기초 자료를 제공합니다.

## 2. 데이터 구성

### 2.1 전 지구적 탄소예산

IPCC AR6 보고서를 기반으로 한 전 지구적 탄소예산 정보를 제공합니다:

- **1.5°C 목표**: 2020년 기준 약 400 GtCO2의 잔여 탄소예산
- **2°C 목표**: 2020년 기준 약 1,150 GtCO2의 잔여 탄소예산
- **확률별 시나리오**: 50%, 67%, 83% 확률로 목표 달성 가능한 탄소예산

### 2.2 국가별 배출량 데이터

주요 온실가스 배출국의 역사적 배출량과 현재 배출 현황:

- **배출량 추이**: 1990년부터 현재까지의 연간 배출량 데이터
- **부문별 배출량**: 에너지, 산업공정, 농업, 폐기물 등 부문별 세분화
- **1인당 배출량**: 인구 대비 배출량 비교 분석
- **GDP 대비 배출량**: 경제 규모 대비 배출 효율성 분석

### 2.3 한국의 탄소예산

한국의 탄소예산 배분과 감축 시나리오:

- **공정성 원칙별 배분**: 인구, GDP, 역사적 배출량 등을 고려한 다양한 배분 방식
- **현재 정책 시나리오**: 기존 정책 유지 시 배출 전망
- **강화 시나리오**: 추가 정책 도입 시 감축 가능량
- **1.5°C 적합 시나리오**: 1.5°C 목표 달성을 위한 필요 감축량

## 3. 주요 기능

### 3.1 시각화 도구

복잡한 데이터를 직관적으로 이해할 수 있는 다양한 시각화 기능:

- **대화형 차트**: 국가별, 연도별 데이터 비교 분석
- **지도 시각화**: 전 세계 배출량 분포와 변화 추이
- **시나리오 비교**: 다양한 감축 시나리오의 시각적 비교
- **목표 추적**: NDC 목표 대비 현재 진행 상황 모니터링

### 3.2 분석 도구

정책 분석과 의사결정을 지원하는 분석 기능:

- **감축 비용 분석**: 부문별 감축 기술의 비용 효과성 분석
- **정책 효과 시뮬레이션**: 정책 도입 시 예상 감축 효과 계산
- **불확실성 분석**: 다양한 변수에 따른 결과 변화 분석
- **민감도 분석**: 주요 가정 변화가 결과에 미치는 영향 평가

### 3.3 데이터 다운로드

연구와 정책 수립에 활용할 수 있는 원시 데이터 제공:

- **CSV 형식**: 스프레드시트 프로그램에서 활용 가능
- **JSON 형식**: 웹 애플리케이션 개발에 활용 가능
- **API 접근**: 실시간 데이터 연동을 위한 API 제공
- **메타데이터**: 데이터 출처, 수집 방법, 업데이트 주기 등 상세 정보

## 4. 활용 방안

### 4.1 정책 입안자

- **NDC 목표 설정**: 과학적 근거에 기반한 감축 목표 수립
- **정책 우선순위**: 비용 효과적인 감축 정책 식별
- **국제 협상**: 공정한 부담 분담 논의를 위한 근거 자료
- **진행 상황 모니터링**: 목표 달성 진행 상황 추적 및 평가

### 4.2 연구자

- **학술 연구**: 기후정책 연구를 위한 기초 데이터 활용
- **시나리오 분석**: 다양한 가정 하에서의 감축 경로 분석
- **국제 비교**: 국가별 정책 효과성 비교 연구
- **방법론 개발**: 새로운 분석 방법론 개발 및 검증

### 4.3 시민사회

- **정책 모니터링**: 정부 정책의 적절성 평가
- **인식 제고**: 기후변화 심각성과 대응 필요성 홍보
- **옹호 활동**: 과학적 근거에 기반한 정책 요구
- **교육 자료**: 기후변화 교육을 위한 자료 활용

## 5. 데이터 품질 관리

### 5.1 데이터 검증

- **출처 검증**: 신뢰할 수 있는 국제기구 및 연구기관 데이터 활용
- **일관성 검사**: 시계열 데이터의 일관성 및 논리적 타당성 검증
- **전문가 검토**: 관련 분야 전문가의 데이터 품질 검토
- **정기 업데이트**: 최신 데이터 반영을 위한 정기적 업데이트

### 5.2 투명성 확보

- **방법론 공개**: 데이터 처리 및 분석 방법론 상세 공개
- **가정 명시**: 분석에 사용된 주요 가정과 한계 명확히 제시
- **불확실성 표시**: 데이터의 불확실성 범위 명시
- **피드백 수렴**: 사용자 피드백을 통한 지속적 개선

## 6. 향후 계획

### 6.1 데이터 확장

- **지역별 세분화**: 시도별, 시군구별 세분화된 데이터 구축
- **부문별 상세화**: 산업 세부 업종별 배출량 데이터 확충
- **실시간 모니터링**: 위성 데이터 등을 활용한 실시간 배출량 추정
- **예측 모델**: 머신러닝 기반 배출량 예측 모델 개발

### 6.2 기능 개선

- **사용자 맞춤형**: 사용자별 관심 분야에 특화된 대시보드 제공
- **모바일 최적화**: 모바일 환경에서의 접근성 개선
- **다국어 지원**: 영어, 중국어 등 다국어 인터페이스 제공
- **협업 기능**: 연구자 간 데이터 공유 및 협업 기능 추가

본 데이터베이스는 한국의 탄소중립 목표 달성을 위한 과학적 의사결정을 지원하는 핵심 인프라로서, 지속적인 개선과 확장을 통해 기후정책 수립에 기여하고자 합니다.`,
  };

  const relatedVideos: RelatedVideo[] = [
    {
      id: 1,
      title: '탄소예산과 NDC 목표 설정 방법론 세미나',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20seminar%20presentation%20about%20carbon%20budget%20and%20NDC%20target%20methodology%20with%20speakers%20and%20audience%20in%20modern%20conference%20room&width=300&height=200&seq=carbvideo1&orientation=landscape',
      duration: '52:18',
      date: '2025.01.20'
    },
    {
      id: 2,
      title: '국가별 탄소예산 배분의 공정성 원칙',
      thumbnail: 'https://readdy.ai/api/search-image?query=Academic%20presentation%20about%20fairness%20principles%20in%20national%20carbon%20budget%20allocation%20with%20charts%20and%20global%20data%20visualization&width=300&height=200&seq=carbvideo2&orientation=landscape',
      duration: '38:45',
      date: '2024.12.10'
    }
  ];

  const relatedDatabases: RelatedDatabase[] = [
    {
      id: 2,
      title: '전력 수요 예측 데이터베이스',
      author: '이민수',
      date: '2024.11.05'
    },
    {
      id: 3,
      title: '재생에너지 발전량 데이터베이스',
      author: '박지영',
      date: '2024.10.28'
    },
    {
      id: 4,
      title: '에너지 효율 건물 데이터베이스',
      author: '최현우',
      date: '2024.09.15'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600">
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/database"
              className="inline-flex items-center text-white hover:text-brand-green transition-colors"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              데이터베이스로 돌아가기
            </Link>
          </div>

          {/* Database Info */}
          <div className="text-white">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                데이터베이스
              </span>
              <div className="flex items-center text-white/80 text-sm">
                <i className="ri-calendar-line mr-1"></i>
                {database.date}
              </div>
              <div className="flex items-center text-white/80 text-sm">
                <i className="ri-eye-line mr-1"></i>
                {database.views}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              {database.title}
            </h1>
            
            <p className="text-xl text-white/90">
              구축자: {database.author}
            </p>
          </div>
        </div>
      </section>

      {/* Download Button */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors whitespace-nowrap flex items-center">
              <i className="ri-download-line mr-2"></i>
              데이터 다운로드
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Overview Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOverviewOpen(!overviewOpen)}
                className="w-full px-6 py-4 bg-gray-50 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <i className="ri-database-line mr-3 text-green-600"></i>
                  개요
                </h2>
                <i className={`ri-arrow-${overviewOpen ? 'up' : 'down'}-s-line text-gray-500`}></i>
              </button>
              {overviewOpen && (
                <div className="px-6 py-6 bg-white">
                  <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                    {database.overview}
                  </div>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setContentOpen(!contentOpen)}
                className="w-full px-6 py-4 bg-gray-50 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <i className="ri-file-list-line mr-3 text-green-600"></i>
                  상세 내용
                </h2>
                <i className={`ri-arrow-${contentOpen ? 'up' : 'down'}-s-line text-gray-500`}></i>
              </button>
              {contentOpen && (
                <div className="px-6 py-6 bg-white">
                  <div className="prose max-w-none text-gray-700">
                    <div dangerouslySetInnerHTML={{ 
                      __html: database.content
                        .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
                        .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">$1</h3>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/- (.*)/g, '<li class="ml-4">$1</li>')
                        .replace(/\n\n/g, '</p><p class="mb-4">')
                        .replace(/^/, '<p class="mb-4">')
                        .replace(/$/, '</p>')
                    }} />
                  </div>
                </div>
              )}
            </div>

            {/* Related Content Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setRelatedOpen(!relatedOpen)}
                className="w-full px-6 py-4 bg-gray-50 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <i className="ri-links-line mr-3 text-green-600"></i>
                  관련 콘텐츠
                </h2>
                <i className={`ri-arrow-${relatedOpen ? 'up' : 'down'}-s-line text-gray-500`}></i>
              </button>
              {relatedOpen && (
                <div className="px-6 py-6 bg-white space-y-8">
                  {/* Related Videos */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <i className="ri-video-line mr-2 text-red-600"></i>
                      관련 영상
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {relatedVideos.map((video) => (
                        <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                          <div className="relative">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-32 object-cover object-top"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {video.duration}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                <i className="ri-play-fill text-white text-xl"></i>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-2">
                              {video.title}
                            </h4>
                            <p className="text-xs text-gray-500">{video.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Related Databases */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <i className="ri-database-2-line mr-2 text-green-600"></i>
                      관련 데이터베이스
                    </h3>
                    <div className="space-y-3">
                      {relatedDatabases.map((db) => (
                        <Link
                          key={db.id}
                          to={`/database/${db.id}`}
                          className="block bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                  데이터베이스
                                </span>
                                <span className="text-xs text-gray-500">{db.date}</span>
                              </div>
                              <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                                {db.title}
                              </h4>
                              <p className="text-xs text-gray-600">구축자: {db.author}</p>
                            </div>
                            <i className="ri-arrow-right-s-line text-gray-400 ml-4"></i>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
