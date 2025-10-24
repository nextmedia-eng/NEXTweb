
import { Link } from 'react-router-dom';

export default function AnnualReportsPage() {
  /** Helper to download a PDF safely */
  const downloadPdf = (url: string, filename: string) => {
    try {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log(`Downloading ${filename}`);
    } catch (error) {
      console.error('PDF download failed:', error);
      // Optional: Show a user‑friendly toast/alert here
    }
  };

  const annualReports = [
    {
      year: '2024',
      title: '2024 연간 보고서',
      description: 'AI 기반 에너지 전환 정책 연구 성과 및 디지털 혁신',
      image:
        'https://readdy.ai/api/search-image?query=Modern%202024%20annual%20report%20cover%20design%20with%20AI%20and%20digital%20energy%20transformation%20theme%2C%20futuristic%20technology%20graphics%20with%20clean%20professional%20layout%2C%20blue%20and%20green%20corporate%20colors&width=400&height=250&seq=report2024&orientation=landscape',
    },
    {
      year: '2023',
      title: '2023 연간 보고서',
      description: '탄소중립 정책 연구 성과 및 주요 활동',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20annual%20report%20cover%20design%20with%20blue%20and%20white%20corporate%20theme%2C%20clean%20business%20document%20layout%20with%20charts%20and%20graphs%20showing%20energy%20policy%20research%20data&width=400&height=250&seq=report2023&orientation=landscape',
    },
    {
      year: '2022',
      title: '2022 연간 보고서',
      description: '에너지 전환 정책 분석 및 제언',
      image:
        'https://readdy.ai/api/search-image?query=Modern%20annual%20report%20cover%20with%20renewable%20energy%20theme%2C%20wind%20turbines%20and%20solar%20panels%20illustration%2C%20clean%20professional%20document%20design&width=400&height=250&seq=report2022&orientation=landscape',
    },
    {
      year: '2021',
      title: '2021 연간 보고서',
      description: '기후변화 대응 정책 방향 및 정책 방향',
      image:
        'https://readdy.ai/api/search-image?query=Climate%20policy%20annual%20report%20cover%20with%20green%20environmental%20theme%2C%20earth%20and%20sustainable%20development%20graphics%2C%20professional%20document%20layout&width=400&height=250&seq=report2021&orientation=landscape',
    },
    {
      year: '2020',
      title: '2020 연간 보고서',
      description: '원자력 에너지 정책 현황 및 전망',
      image:
        'https://readdy.ai/api/search-image?query=Nuclear%20energy%20policy%20report%20cover%20with%20industrial%20power%20plant%20imagery%2C%20professional%20government%20document%20design%20with%20safety%20and%20technology%20themes&width=400&height=250&seq=report2020&orientation=landscape',
    },
    {
      year: '2019',
      title: '2019 연간 보고서',
      description: '에너지 효율화 정책 연구 성과',
      image:
        'https://readdy.ai/api/search-image?query=Energy%20efficiency%20report%20cover%20with%20smart%20grid%20and%20digital%20technology%20theme%2C%20modern%20industrial%20infrastructure%20design&width=400&height=250&seq=report2019&orientation=landscape',
    },
    {
      year: '2018',
      title: '2018 연간 보고서',
      description: '신재생에너지 정책 발전 방향',
      image:
        'https://readdy.ai/api/search-image?query=Renewable%20energy%20report%20cover%20with%20solar%20panels%20and%20wind%20turbines%20in%20green%20landscape%2C%20sustainable%20development%20theme&width=400&height=250&seq=report2018&orientation=landscape',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20annual%20report%20documents%20and%20research%20publications%20with%20clean%20corporate%20design%2C%20business%20reports%20and%20policy%20documents%20arranged%20on%20modern%20desk%20with%20sustainable%20energy%20theme&width=1200&height=600&seq=annual-reports-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">연간 보고서</h1>
              <p className="text-xl font-light opacity-90">Annual Reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <Link
              to="/about"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              NEXT group
            </Link>
            <Link
              to="/about/members"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              구성원
            </Link>
            <Link
              to="/annual-reports"
              className="py-4 px-2 border-b-2 border-blue-600 text-blue-600 font-medium text-sm whitespace-nowrap transition-colors"
            >
              연간 보고서
            </Link>
            <a
              href="https://nextgroup.career.greetinghr.com/ko/career"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
            >
              인재 채용
            </a>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">연간 보고서</h2>
            <p className="text-lg text-gray-600">
              NEXT group의 연구 성과와 주요 활동을 담은 연간 보고서
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {annualReports.map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() =>
                  downloadPdf(
                    'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf',
                    `${report.year}_NEXT_group_연간_보고서.pdf`,
                  )
                }
              >
                <img src={report.image} alt={report.title} className="w-full h-48 object-cover object-top" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                      {report.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{report.title}</h3>
                  <p className="text-gray-600 text-sm">{report.description}</p>
                  <div className="mt-4">
                    <button
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent the parent onClick
                        downloadPdf(
                          'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf',
                          `${report.year}_NEXT_group_연간_보고서.pdf`,
                        );
                      }}
                    >
                      <i className="ri-download-line mr-2"></i>
                      PDF 다운로드
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
