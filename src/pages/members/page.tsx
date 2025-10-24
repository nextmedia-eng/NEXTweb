
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutSubnav from '../../components/feature/AboutSubnav';

export default function MembersPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20business%20office%20building%20with%20clean%20architecture%20and%20professional%20team%20members%2C%20corporate%20headquarters%20with%20glass%20facade%20and%20sustainable%20design%20elements%2C%20professional%20business%20environment%20with%20meeting%20rooms%20and%20collaborative%20spaces&width=1200&height=600&seq=members-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">구성원</h1>
              <p className="text-xl font-light opacity-90">Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* AboutSubnav - Sub Navigation Tabs */}
      <AboutSubnav />

      {/* Members Content */}
      <section className="py-16 bg-white min-h-[800px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NEXT group 구성원</h2>
            <p className="text-lg text-gray-600">
              기후·에너지 정책 분야의 전문가들이 함께하고 있습니다
            </p>
          </div>

          {/* Board of Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">이사회</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20business%20executive%20portrait%20in%20formal%20suit%2C%20confident%20leadership%20pose%20with%20clean%20background%2C%20corporate%20headshot%20style%20for%20energy%20policy%20think%20tank%20director&width=300&height=300&seq=member1&orientation=squarish"
                  alt="대표이사"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">김에너지</h4>
                  <p className="text-blue-600 font-medium mb-2">대표이사</p>
                  <p className="text-gray-600 text-xs mb-3">
                    서울대학교 에너지시스템공학부 박사<br />
                    前 에너지경제연구원 선임연구위원
                  </p>
                </div>
              </div>

              <Link to="/about/members/song-yonghyeon" className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20technology%20executive%20portrait%20in%20formal%20business%20suit%2C%20confident%20and%20intelligent%20appearance%20with%20clean%20background%2C%20CTO%20and%20deputy%20director%20headshot%20for%20energy%20policy%20think%20tank&width=300&height=300&seq=song-yonghyeon-card&orientation=squarish"
                  alt="부대표·최고기술책임자"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">송용현</h4>
                  <p className="text-blue-600 font-medium mb-2">부대표·최고기술책임자</p>
                  <p className="text-gray-600 text-xs mb-3">
                    서울대학교 전기공학과 박사<br />
                    前 미국 로랜스버클리국립연구소 파견연구원
                  </p>
                  <div className="flex justify-end items-center">
                    <span className="text-blue-600 text-xs font-medium">자세히 보기 →</span>
                  </div>
                </div>
              </Link>

              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20business%20executive%20portrait%20in%20formal%20suit%2C%20experienced%20leadership%20appearance%20with%20clean%20background%2C%20corporate%20headshot%20for%20operations%20director&width=300&height=300&seq=member3&orientation=squarish"
                  alt="운영이사"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">이탄소</h4>
                  <p className="text-blue-600 font-medium mb-2">운영이사</p>
                  <p className="text-gray-600 text-xs mb-3">
                    연세대학교 경영학과 MBA<br />
                    前 한국전력공사 전력거래소 부장
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20business%20executive%20portrait%20in%20formal%20suit%2C%20wise%20and%20experienced%20appearance%20with%20clean%20background%2C%20corporate%20headshot%20for%20advisory%20board%20member&width=300&height=300&seq=member4&orientation=squarish"
                  alt="감사"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">박감사</h4>
                  <p className="text-blue-600 font-medium mb-2">감사</p>
                  <p className="text-gray-600 text-xs mb-3">
                    고려대학교 경영학과 박사<br />
                    前 한국개발연구원 선임연구위원
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Team & Staff */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">연구원 · 직원</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20researcher%20portrait%20in%20business%20casual%20attire%2C%20friendly%20and%20approachable%20appearance%20with%20clean%20background%2C%20academic%20research%20professional%20headshot&width=250&height=250&seq=researcher1&orientation=squarish"
                  alt="선임연구원"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">최전력</h4>
                  <p className="text-blue-600 font-medium mb-2">선임연구원</p>
                  <p className="text-gray-600 text-xs">
                    전력시장 설계 및<br />
                    전력망 안정성 연구
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20researcher%20portrait%20in%20business%20casual%20attire%2C%20confident%20and%20intelligent%20appearance%20with%20clean%20background%2C%20energy%20policy%20research%20specialist&width=250&height=250&seq=researcher2&orientation=squarish"
                  alt="연구원"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">정재생</h4>
                  <p className="text-blue-600 font-medium mb-2">연구원</p>
                  <p className="text-gray-600 text-xs">
                    재생에너지 정책 및<br />
                    경제성 분석 연구
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20researcher%20portrait%20in%20business%20casual%20attire%2C%20young%20professional%20appearance%20with%20clean%20background%2C%20climate%20policy%20research%20specialist&width=250&height=250&seq=researcher3&orientation=squarish"
                  alt="연구원"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">한기후</h4>
                  <p className="text-blue-600 font-medium mb-2">연구원</p>
                  <p className="text-gray-600 text-xs">
                    기후리스크 분석 및<br />
                    탄소중립 정책 연구
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20researcher%20portrait%20in%20business%20casual%20attire%2C%20bright%20and%20enthusiastic%20appearance%20with%20clean%20background%2C%20industrial%20decarbonization%20research%20specialist&width=250&height=250&seq=researcher4&orientation=squarish"
                  alt="주니어연구원"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">강산업</h4>
                  <p className="text-blue-600 font-medium mb-2">주니어연구원</p>
                  <p className="text-gray-600 text-xs mb-3">
                    산업 탈탄소화 및<br />
                    에너지효율 정책 연구
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20business%20manager%20portrait%20in%20formal%20attire%2C%20organized%20and%20efficient%20appearance%20with%20clean%20background%2C%20business%20operations%20manager%20headshot&width=250&height=250&seq=support1&orientation=squarish"
                  alt="사업관리팀장"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">윤사업</h4>
                  <p className="text-blue-600 font-medium mb-2">사업관리팀장</p>
                  <p className="text-gray-600 text-xs mb-3">
                    프로젝트 관리 및<br />
                    대외협력 업무
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20communications%20specialist%20portrait%20in%20modern%20business%20attire%2C%20creative%20and%20articulate%20appearance%20with%20clean%20background%2C%20marketing%20communications%20professional&width=250&height=250&seq=support2&orientation=squarish"
                  alt="홍보팀장"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">오소통</h4>
                  <p className="text-blue-600 font-medium mb-2">홍보팀장</p>
                  <p className="text-gray-600 text-xs mb-3">
                    대외홍보 및<br />
                    콘텐츠 기획
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20communications%20specialist%20portrait%20in%20modern%20business%20attire%2C%20creative%20and%20articulate%20appearance%20with%20clean%20background%2C%20marketing%20communications%20professional&width=250&height=250&seq=support2&orientation=squarish"
                  alt="홍보팀장"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">오소통</h4>
                  <p className="text-blue-600 font-medium mb-2">홍보팀장</p>
                  <p className="text-gray-600 text-xs mb-3">
                    대외홍보 및<br />
                    콘텐츠 기획
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20communications%20specialist%20portrait%20in%20modern%20business%20attire%2C%20creative%20and%20articulate%20appearance%20with%20clean%20background%2C%20marketing%20communications%20professional&width=250&height=250&seq=support2&orientation=squarish"
                  alt="홍보팀장"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">오소통</h4>
                  <p className="text-blue-600 font-medium mb-2">홍보팀장</p>
                  <p className="text-gray-600 text-xs mb-3">
                    대외홍보 및<br />
                    콘텐츠 기획
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20business%20administrator%20portrait%20in%20formal%20attire%2C%20reliable%20and%20detail-oriented%20appearance%20with%20clean%20background%2C%20administrative%20support%20specialist&width=250&height=250&seq=support3&orientation=squarish"
                  alt="행정팀장"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">임행정</h4>
                  <p className="text-blue-600 font-medium mb-2">행정팀장</p>
                  <p className="text-gray-600 text-xs">
                    인사총무 및<br />
                    재무관리
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20technology%20specialist%20portrait%20in%20business%20casual%20attire%2C%20innovative%20and%20tech-savvy%20appearance%20with%20clean%20background%2C%20IT%20systems%20manager%20headshot&width=250&height=250&seq=support4&orientation=squarish"
                  alt="기술지원팀장"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">신기술</h4>
                  <p className="text-blue-600 font-medium mb-2">기술지원팀장</p>
                  <p className="text-gray-600 text-xs">
                    IT 시스템 관리 및<br />
                    기술 인프라 운영
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* External Advisory Board */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">외부위원</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-center items-center text-center min-h-[200px]">
                <h4 className="text-lg font-bold text-gray-900 mb-2">김외부</h4>
                <p className="text-blue-600 font-medium">자문위원</p>
                <p className="text-gray-600 text-xs mt-2">
                  前 산업통상자원부 차관<br />
                  에너지정책 전문가
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-center items-center text-center min-h-[200px]">
                <h4 className="text-lg font-bold text-gray-900 mb-2">이자문</h4>
                <p className="text-blue-600 font-medium">자문위원</p>
                <p className="text-gray-600 text-xs mt-2">
                  前 한국전력공사 사장<br />
                  전력산업 전문가
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-center items-center text-center min-h-[200px]">
                <h4 className="text-lg font-bold text-gray-900 mb-2">박학술</h4>
                <p className="text-blue-600 font-medium">학술자문위원</p>
                <p className="text-gray-600 text-xs mt-2">
                  서울대학교 교수<br />
                  에너지시스템공학 전문가
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-center items-center text-center min-h-[200px]">
                <h4 className="text-lg font-bold text-gray-900 mb-2">최국제</h4>
                <p className="text-blue-600 font-medium">국제자문위원</p>
                <p className="text-gray-600 text-xs mt-2">
                  前 IEA 선임연구원<br />
                  국제에너지정책 전문가
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-center items-center text-center min-h-[200px]">
                <h4 className="text-lg font-bold text-gray-900 mb-2">정환경</h4>
                <p className="text-blue-600 font-medium">환경자문위원</p>
                <p className="text-gray-600 text-xs mt-2">
                  前 환경부 국장<br />
                  기후변화정책 전문가
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-center items-center text-center min-h-[200px]">
                <h4 className="text-lg font-bold text-gray-900 mb-2">한경제</h4>
                <p className="text-blue-600 font-medium">경제자문위원</p>
                <p className="text-gray-600 text-xs mt-2">
                  前 한국은행 부총재<br />
                  에너지경제 전문가
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-center items-center text-center min-h-[200px]">
                <h4 className="text-lg font-bold text-gray-900 mb-2">강혁신</h4>
                <p className="text-blue-600 font-medium">기술자문위원</p>
                <p className="text-gray-600 text-xs mt-2">
                  前 KAIST 교수<br />
                  에너지기술혁신 전문가
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-center items-center text-center min-h-[200px]">
                <h4 className="text-lg font-bold text-gray-900 mb-2">오시민</h4>
                <p className="text-blue-600 font-medium">시민사회자문위원</p>
                <p className="text-gray-600 text-xs mt-2">
                  前 환경운동연합 사무총장<br />
                  시민사회 에너지정책 전문가
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
