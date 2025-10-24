
import AboutSubnav from '../../components/feature/AboutSubnav';

export default function AboutPage() {
  const partners = [
    {
      name: "한국에너지공단",
      logo: "https://readdy.ai/api/search-image?query=Korea%20Energy%20Agency%20official%20logo%20with%20clean%20professional%20design%2C%20government%20energy%20organization%20emblem&width=200&height=100&seq=partner1&orientation=landscape"
    },
    {
      name: "한국전력공사",
      logo: "https://readdy.ai/api/search-image?query=Korea%20Electric%20Power%20Corporation%20KEPCO%20official%20logo%20with%20blue%20corporate%20design&width=200&height=100&seq=partner2&orientation=landscape"
    },
    {
      name: "한국환경정책평가연구원",
      logo: "https://readdy.ai/api/search-image?query=Korea%20Environment%20Institute%20KEI%20official%20logo%20with%20green%20environmental%20theme&width=200&height=100&seq=partner3&orientation=landscape"
    },
    {
      name: "에너지경제연구원",
      logo: "https://readdy.ai/api/search-image?query=Korea%20Energy%20Economics%20Institute%20KEEI%20official%20logo%20with%20professional%20academic%20design&width=200&height=100&seq=partner4&orientation=landscape"
    },
    {
      name: "국제에너지기구",
      logo: "https://readdy.ai/api/search-image?query=International%20Energy%20Agency%20IEA%20official%20logo%20with%20global%20energy%20organization%20design&width=200&height=100&seq=partner5&orientation=landscape"
    },
    {
      name: "아시아개발은행",
      logo: "https://readdy.ai/api/search-image?query=Asian%20Development%20Bank%20ADB%20official%20logo%20with%20blue%20international%20finance%20design&width=200&height=100&seq=partner6&orientation=landscape"
    },
    {
      name: "세계은행",
      logo: "https://readdy.ai/api/search-image?query=World%20Bank%20official%20logo%20with%20global%20development%20organization%20design&width=200&height=100&seq=partner7&orientation=landscape"
    },
    {
      name: "유엔환경계획",
      logo: "https://readdy.ai/api/search-image?query=United%20Nations%20Environment%20Programme%20UNEP%20official%20logo%20with%20UN%20blue%20and%20green%20design&width=200&height=100&seq=partner8&orientation=landscape"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20sustainable%20energy%20research%20institute%20building%20with%20clean%20architecture%2C%20professional%20corporate%20headquarters%20with%20glass%20facade%20and%20green%20technology%20elements%2C%20academic%20research%20facility%20with%20solar%20panels%20and%20environmental%20design&width=1200&height=600&seq=about-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">NEXT group</h1>
              <p className="text-xl font-light opacity-90">About Us</p>
            </div>
          </div>
        </div>
      </section>

      {/* AboutSubnav - Sub Navigation Tabs */}
      <AboutSubnav />

      {/* NEXT Group Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">NEXT group</h2>
            <div className="flex justify-center">
              <img
                src="https://static.readdy.ai/image/cdb089564af8ef48c74c43b5090337d9/b95c26356d8e9aea2bccd6d8f5ff87b6.png"
                alt="NEXT group 소개"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Topics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">연구 주제</h2>
            <p className="text-lg text-gray-600">
              NEXT group의 핵심 연구 분야
            </p>
          </div>

          <div className="space-y-16">
            {/* 전력망&시장 */}
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
                  <h3 className="text-4xl font-bold mb-6">전력망&시장</h3>
                  <p className="text-xl leading-relaxed">
                    전력 시장 및 계통의 핵심 현안에 대한 정책 대안을 제시하고,
                    모델링 개발 및 적용 연구를 토대로 중 장기적인 에너지 시스템의
                    안정성 유지 및 발전 전략을 모색합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 재생에너지 정책 */}
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
                  <h3 className="text-4xl font-bold mb-6">재생에너지 정책</h3>
                  <p className="text-xl leading-relaxed">
                    해상풍력 등 재생에너지 주요 부문별 현안에 대한 정량적·정성적 분석을
                    토대로 재생에너지 산업 및 시장을 활성화할 수 있는 다양한 정책 대안을
                    제시합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 산업 탈탄소화 */}
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
                  <h3 className="text-4xl font-bold mb-6">산업 탈탄소화</h3>
                  <p className="text-xl leading-relaxed">
                    국내외 기후 규제 및 변화하는 글로벌 시장 패러다임의 영향도를
                    분석하여 국가 및 지구적 탄소감축 목표를 달성할 수 있도록
                    산업의 탈탄소화 기술, 전략, 정책 대안을 제시합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 기후리스크 */}
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
                  <h3 className="text-4xl font-bold mb-6">기후리스크</h3>
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
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">협력기관</h2>
            <p className="text-lg text-gray-600">
              NEXT group과 함께하는 국내외 주요 기관들
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-16 object-contain mb-4"
                  />
                  <h3 className="text-sm font-medium text-gray-900">{partner.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
