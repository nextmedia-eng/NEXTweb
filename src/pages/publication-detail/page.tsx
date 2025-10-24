
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PublicationDetailPage() {
  const { id } = useParams();

  // 발간물 데이터
  const publication = {
    id: 1,
    category: '이슈페이퍼',
    title: '석유화학산업단지의 전환, 지역에서 답을 찾다',
    author: '김정식',
    date: '2025.07.02',
    coverImage:
      'https://readdy.ai/api/search-image?query=Professional%20research%20publication%20cover%20design%20about%20petrochemical%20industrial%20transformation%20with%20modern%20clean%20industrial%20facility%20and%20environmental%20sustainability%20elements%2C%20academic%20report%20style&width=800&height=600&seq=pub-cover&orientation=landscape',
    summary: `본 이슈페이퍼는 국내 석유화학산업단지의 탄소중립 전환 과정에서 지역 중심의 접근법이 필요함을 제시합니다. 석유화학산업은 국내 제조업의 핵심 축을 담당하고 있으나, 탄소중립 목표 달성을 위해서는 근본적인 전환이 불가피합니다. 특히 울산, 여수, 대산 등 주요 석유화학산업단지는 지역 경제의 중심축 역할을 하고 있어, 전환 과정에서 지역 특성을 고려한 맞춤형 전략이 필요합니다.`,
    highlights: `석유화학산업단지의 탄소중립 전환은 단순히 기술적 혁신만으로는 달성하기 어려우며, 지역의 산업 생태계와 사회경제적 특성을 종합적으로 고려한 접근이 필요합니다.

울산 지역의 경우 기존 석유화학 인프라를 활용한 점진적 전환 모델이 적합하며, 부생수소 활용 확대와 수소 클러스터 구축을 통해 수소경제 선도도시로 발전할 수 있는 잠재력을 보유하고 있습니다. 여수 지역은 혁신적인 바이오화학 산업 도입을 통해 친환경 화학제품 생산 기지로 전환하는 것이 효과적입니다.

대산 지역은 수도권과의 근접성을 활용한 연계형 모델을 통해 순환경제 구축과 폐기물 자원화 사업을 중심으로 한 전환 전략이 유효할 것으로 분석됩니다. 이러한 지역별 차별화된 접근을 통해 국가 전체의 탄소중립 목표 달성과 동시에 지역 경제의 지속가능한 발전을 도모할 수 있습니다.

정책적으로는 중앙정부의 일관된 지원 체계 구축과 함께 지방정부 차원의 맞춤형 거버넌스 체계 마련이 필요하며, 산업계-학계-정부 간 협력 네트워크 강화를 통한 실행력 제고가 중요합니다.`,
  };

  const relatedPublications = [
    {
      id: 2,
      category: '보고서',
      title: '재생에너지 확산을 위한 정책 방향과 과제',
      author: '박민수',
      date: '2025.06.28',
      url: '/ko/research/public/2',
      thumbnail:
        'https://readdy.ai/api/search-image?query=Renewable%20energy%20landscape%20with%20wind%20turbines%20and%20solar%20panels%2C%20professional%20policy%20report%20cover%20with%20sustainable%20energy%20infrastructure&width=300&height=200&seq=related-pub1&orientation=landscape',
    },
    {
      id: 3,
      category: '이슈브리프',
      title: '탄소중립 달성을 위한 산업부문 전략',
      author: '이현정',
      date: '2025.06.25',
      url: '/ko/research/public/3',
      thumbnail:
        'https://readdy.ai/api/search-image?query=Carbon%20neutral%20industrial%20facility%20with%20clean%20technology%20and%20green%20manufacturing%20processes%2C%20professional%20brief%20report%20cover%20design&width=300&height=200&seq=related-pub2&orientation=landscape',
    },
    {
      id: 4,
      category: '이슈페이퍼',
      title: '지역 에너지 전환과 산업단지 혁신 방안',
      author: '최영호',
      date: '2025.06.20',
      url: '/ko/research/public/4',
      thumbnail:
        'https://readdy.ai/api/search-image?query=Regional%20energy%20transformation%20with%20industrial%20complex%20innovation%2C%20modern%20sustainable%20industrial%20development%20with%20green%20technology&width=300&height=200&seq=related-pub3&orientation=landscape',
    },
  ];

  const relatedVideos = [
    {
      id: 1,
      title: '석유화학산업의 탄소중립 전환 전략',
      description: '국내 주요 석유화학산업단지의 탄소중립 전환 사례와 정책 방향을 소개합니다.',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20video%20thumbnail%20about%20petrochemical%20industry%20carbon%20neutral%20transformation%20with%20industrial%20facility%20and%20green%20technology%20elements&width=400&height=225&seq=video1&orientation=landscape',
      duration: '15:32',
      views: '1,245',
      date: '2025.06.30',
    },
    {
      id: 2,
      title: '지역 중심 에너지 전환 모델',
      description: '울산, 여수, 대산 지역의 특성을 고려한 맞춤형 에너지 전환 전략을 분석합니다.',
      thumbnail: 'https://readdy.ai/api/search-image?query=Regional%20energy%20transformation%20model%20video%20thumbnail%20with%20Korean%20industrial%20cities%20and%20sustainable%20development%20graphics&width=400&height=225&seq=video2&orientation=landscape',
      duration: '12:18',
      views: '892',
      date: '2025.06.25',
    },
  ];

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

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="bg-white">
        {/* Back Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/publications"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            발간물로 돌아가기
          </Link>
        </div>

        {/* Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={publication.coverImage}
              alt={publication.title}
              className="w-full h-80 object-cover object-top"
            />
          </div>
        </div>

        {/* Publication Info */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full font-medium">
                {publication.category}
              </span>
              <div className="flex items-center text-gray-600 text-sm">
                <i className="ri-calendar-line mr-2"></i>
                {publication.date}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <i className="ri-user-line mr-2"></i>
                작성자: {publication.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
              {publication.title}
            </h1>

            {/* Summary Section */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="ri-file-text-line mr-3 text-teal-600"></i>
                요약 (Summary)
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">{publication.summary}</p>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="ri-lightbulb-line mr-3 text-teal-600"></i>
                주요 내용 (Highlights)
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {publication.highlights}
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="text-center">
              <div className="flex justify-center">
                <button
                  className="px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center justify-center"
                  style={{ backgroundColor: '#1C8E8C', color: 'white' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#166B69')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C8E8C')}
                  onClick={() => {
                    // 실제 PDF 다운로드 기능 - 테스트용 공개 PDF 사용
                    const link = document.createElement('a');
                    link.href =
                      'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf';
                    link.download = `${publication.title}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <i className="ri-download-line mr-2"></i>
                  원문 다운로드
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Publications */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="ri-links-line mr-3 text-teal-600"></i>
              관련 발간물
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPublications.map((relatedPub) => (
                <Link
                  key={relatedPub.id}
                  to={relatedPub.url}
                  className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer group"
                >
                  <img
                    src={relatedPub.thumbnail}
                    alt={relatedPub.title}
                    className="w-full h-32 object-cover object-top group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-bold ${getTypeColor(
                          relatedPub.category
                        )}`}
                      >
                        {relatedPub.category}
                      </span>
                      <span className="text-xs text-gray-500">{relatedPub.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                      {relatedPub.title}
                    </h3>
                    <p className="text-xs text-gray-600">작성자: {relatedPub.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Related Videos */}
        {relatedVideos && relatedVideos.length > 0 && (
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
            style={{ display: relatedVideos && relatedVideos.length > 0 ? 'block' : 'none' }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-play-circle-line mr-3 text-teal-600"></i>
                관련 영상
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <i className="ri-play-fill text-2xl text-gray-800 ml-1"></i>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <i className="ri-eye-line mr-1"></i>
                          {video.views}회
                        </div>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
