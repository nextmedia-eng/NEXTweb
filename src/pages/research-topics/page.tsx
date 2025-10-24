import { Link } from 'react-router-dom';

export default function ResearchTopicsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20energy%20research%20laboratory%20with%20scientists%20analyzing%20renewable%20energy%20data%2C%20professional%20academic%20research%20facility%20with%20advanced%20technology%20equipment%20and%20clean%20scientific%20environment&width=1200&height=600&seq=research-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">연구 주제</h1>
              <p className="text-xl font-light opacity-90">Research Topics</p>
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
              className="py-4 px-2 border-b-2 border-blue-600 text-blue-600 font-medium text-sm whitespace-nowrap transition-colors"
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
              to="/database"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              데이터베이스
            </Link>
          </div>
        </div>
      </section>

      {/* Research Topics Sections */}
      <div className="bg-white">
        {/* Section A: 전력망&시장 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative h-96 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20electrical%20power%20grid%20infrastructure%20with%20transmission%20towers%20and%20smart%20grid%20technology%2C%20professional%20energy%20system%20research%20facility%20with%20digital%20monitoring%20displays&width=800&height=400&seq=power-grid&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative h-full flex items-center">
                <div className="max-w-4xl mx-auto px-8 text-white">
                  <h2 className="text-4xl font-bold mb-6">전력망&시장</h2>
                  <p className="text-xl leading-relaxed">
                    전력 시장 및 계통의 핵심 현안에 대한 정책 대안을 제시하고,
                    모델링 개발 및 적용 연구를 토대로 중 장기적인 에너지 시스템의
                    안정성 유지 및 발전 전략을 모색합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section B: 재생에너지 정책 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative h-96 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Offshore%20wind%20turbines%20and%20solar%20panels%20in%20sustainable%20energy%20landscape%2C%20renewable%20energy%20research%20facility%20with%20green%20technology%20focus&width=800&height=400&seq=renewable-energy&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative h-full flex items-center">
                <div className="max-w-4xl mx-auto px-8 text-white">
                  <h2 className="text-4xl font-bold mb-6">재생에너지 정책</h2>
                  <p className="text-xl leading-relaxed">
                    해상풍력 등 재생에너지 주요 부문별 현안에 대한 정량적·정성적 분석을
                    토대로 재생에너지 산업 및 시장을 활성화할 수 있는 다양한 정책 대안을
                    제시합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section C: 산업 탈탄소화 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative h-96 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Industrial%20decarbonization%20facility%20with%20clean%20technology%2C%20modern%20manufacturing%20plant%20with%20carbon%20capture%20systems%20and%20green%20industrial%20processes&width=800&height=400&seq=industrial-decarbon&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative h-full flex items-center">
                <div className="max-w-4xl mx-auto px-8 text-white">
                  <h2 className="text-4xl font-bold mb-6">산업 탈탄소화</h2>
                  <p className="text-xl leading-relaxed">
                    국내외 기후 규제 및 변화하는 글로벌 시장 패러다임의 영향도를
                    분석하여 국가 및 지구적 탄소감축 목표를 달성할 수 있도록
                    산업의 탈탄소화 기술, 전략, 정책 대안을 제시합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: 기후리스크 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative h-96 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Climate%20risk%20assessment%20center%20with%20weather%20monitoring%20systems%2C%20environmental%20data%20analysis%20facility%20with%20global%20climate%20modeling%20displays&width=800&height=400&seq=climate-risk&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative h-full flex items-center">
                <div className="max-w-4xl mx-auto px-8 text-white">
                  <h2 className="text-4xl font-bold mb-6">기후리스크</h2>
                  <p className="text-xl leading-relaxed">
                    기후변화의 영향과 관련된 다양한 리스크 요인을 식별하고,
                    이를 정량적으로 평가하는 모델을 개발하여 기업, 정부,
                    금융기관 등 다양한 이해관계자들의 효과적인 기후변화 대응 및
                    적응 전략 수립을 지원합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
