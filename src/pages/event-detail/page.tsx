
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Speaker {
  id: number;
  name: string;
  affiliation: string;
}

interface ProgramItem {
  time: string;
  session: string;
  speaker: string;
}

interface EventData {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  status: 'upcoming' | 'completed';
  bannerImage: string;
  overview: string;
  program: ProgramItem[];
  speakers: Speaker[];
  contact: string;
  materials?: string[];
  videoUrl?: string;
  snapshots?: string[];
}

interface RelatedEvent {
  id: number;
  title: string;
  date: string;
  thumbnail: string;
}

export default function EventDetailPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImagePopup = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  /** 
   * Create a Google Calendar URL and open it in a new tab.
   * Errors in date / time parsing are caught and logged – the UI will still work.
   */
  const addToCalendar = (event: EventData) => {
    try {
      // Convert Korean date format (e.g., "2025.03.15") to YYYYMMDD
      const dateStr = event.date.replace(/\./g, '');
      
      // Parse time range (e.g., "14:00 - 18:00")
      const timeRange = event.time.split(' - ');
      if (timeRange.length !== 2) {
        throw new Error('Invalid time format');
      }
      
      const startTime = timeRange[0].replace(':', '') + '00';
      const endTime = timeRange[1].replace(':', '') + '00';

      const startDateTime = `${dateStr}T${startTime}`;
      const endDateTime = `${dateStr}T${endTime}`;

      const details = `주최: ${event.organizer}\n\n${event.overview}`;
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        event.title
      )}&dates=${startDateTime}/${endDateTime}&location=${encodeURIComponent(
        event.location
      )}&details=${encodeURIComponent(details)}`;

      console.log('Calendar URL:', calendarUrl); // 디버깅용
      window.open(calendarUrl, '_blank');
    } catch (error) {
      console.error('Failed to generate calendar link:', error);
      // 간단한 대체 방법
      const simpleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}`;
      window.open(simpleCalendarUrl, '_blank');
    }
  };

  // 행사 데이터
  const eventsData: EventData[] = [
    {
      id: 1,
      title: '제5회 전력시장의 설계 심포지엄',
      date: '2025.01.15',
      time: '14:00 - 18:00',
      location: '서울 중구 세종대로 110 프레스센터',
      organizer: 'NEXT Group',
      status: 'upcoming',
      bannerImage:
        'https://readdy.ai/api/search-image?query=Professional%20power%20market%20symposium%20conference%20hall%20with%20energy%20policy%20presentations%2C%20modern%20business%20meeting%20with%20electricity%20market%20charts%20and%20graphs%2C%20corporate%20symposium%20environment%20with%20professional%20lighting&width=1200&height=400&seq=event1banner&orientation=landscape',
      overview:
        '제5회 전력시장의 설계 심포지엄은 국내 전력시장의 구조적 개선과 미래 발전 방향을 논의하는 전문가 포럼입니다. 전력시장 운영의 효율성 제고, 재생에너지 통합 확대, 그리고 탄소중립 목표 달성을 위한 전력시장 설계 방안을 중점적으로 다룹니다. 정부 정책 담당자, 전력거래소 관계자, 발전사업자, 학계 전문가들이 참여하여 전력시장의 현안과 개선 방안을 심도 있게 논의합니다.',
      program: [
        { time: '14:00-14:30', session: '개회식 및 환영사', speaker: '김전력 (NEXT Group 대표)' },
        { time: '14:30-15:30', session: '기조강연: 전력시장 개편의 필요성과 방향', speaker: '이시장 (전력거래소 이사장)' },
        { time: '15:30-15:45', session: '휴식', speaker: '' },
        { time: '15:45-16:45', session: '세션 1: 재생에너지 확산과 전력시장 설계', speaker: '박재생 (에너지경제연구원 연구위원)' },
        { time: '16:45-17:45', session: '세션 2: 전력시장 운영 효율화 방안', speaker: '최효율 (한국전력공사 처장)' },
        { time: '17:45-18:00', session: '종합토론 및 폐회', speaker: '전문가 패널' }
      ],
      speakers: [
        { id: 1, name: '김전력', affiliation: 'NEXT Group 대표' },
        { id: 2, name: '이시장', affiliation: '전력거래소 이사장' },
        { id: 3, name: '박재생', affiliation: '에너지경제연구원 연구위원' },
        { id: 4, name: '최효율', affiliation: '한국전력공사 처장' },
        { id: 5, name: '정정책', affiliation: '산업통상자원부 과장' },
        { id: 6, name: '한미래', affiliation: '서울대학교 전기정보공학부 교수' }
      ],
      contact: 'symposium@nextgroup.or.kr'
    },
    {
      id: 2,
      title: '2025 탄소중립 정책 포럼',
      date: '2025.03.15',
      time: '14:00 - 18:00',
      location: '서울 코엑스 컨퍼런스룸 A',
      organizer: 'NEXT Group',
      status: 'upcoming',
      bannerImage:
        'https://readdy.ai/api/search-image?query=Professional%20carbon%20neutrality%20policy%20forum%20conference%20with%20modern%20auditorium%20setting%2C%20business%20people%20attending%20sustainability%20seminar%20with%20green%20technology%20theme&width=1200&height=400&seq=event2banner&orientation=landscape',
      overview:
        '2025년 탄소중립 정책의 새로운 방향성을 제시하고, 국내외 전문가들과 함께 실현 가능한 로드맵을 논의하는 포럼입니다. 정부 정책 담당자, 산업계 리더, 시민사회 전문가들이 한자리에 모여 탄소중립 달성을 위한 구체적인 실행 방안을 모색합니다.',
      program: [
        { time: '14:00-14:30', session: '개회식 및 기조연설', speaker: '김환경 (환경부 차관)' },
        { time: '14:30-15:30', session: '세션 1: 국가 탄소중립 정책 현황', speaker: '이정책 (NEXT Group 연구위원)' },
        { time: '15:30-15:45', session: '휴식', speaker: '' },
        { time: '15:45-16:45', session: '세션 2: 산업부문 탈탄소화 전략', speaker: '박산업 (한국산업기술진흥원)' },
        { time: '16:45-17:45', session: '패널토론: 탄소중립 실현을 위한 협력 방안', speaker: '전문가 패널' },
        { time: '17:45-18:00', session: '폐회 및 네트워킹', speaker: '' }
      ],
      speakers: [
        { id: 1, name: '김환경', affiliation: '환경부 차관' },
        { id: 2, name: '이정책', affiliation: 'NEXT Group 연구위원' },
        { id: 3, name: '박산업', affiliation: '한국산업기술진흥원 센터장' },
        { id: 4, name: '최에너지', affiliation: '한국에너지공단 본부장' },
        { id: 5, name: '정기후', affiliation: '기후변화센터 대표' },
        { id: 6, name: '한지속', affiliation: '지속가능발전협의회 위원장' }
      ],
      contact: 'events@nextgroup.or.kr'
    },
    {
      id: 3,
      title: '글로벌 탄소중립 정책 워크숍',
      date: '2025.03.10',
      time: '10:00 - 16:00',
      location: '부산 해운대구 APEC로 55 누리마루',
      organizer: 'NEXT Group',
      status: 'upcoming',
      bannerImage:
        'https://readdy.ai/api/search-image?query=Global%20carbon%20neutral%20policy%20workshop%20with%20international%20participants%2C%20modern%20conference%20facility%20with%20climate%20change%20presentations%20and%20environmental%20data%20displays&width=1200&height=400&seq=event3banner&orientation=landscape',
      overview:
        '글로벌 탄소중립 정책의 최신 동향을 공유하고, 국제 협력 방안을 모색하는 워크숍입니다. 아시아 태평양 지역의 탄소중립 정책 전문가들이 참여하여 각국의 정책 경험을 공유하고, 지역 차원의 협력 방안을 논의합니다.',
      program: [
        { time: '10:00-10:30', session: '개회식 및 환영사', speaker: '김글로벌 (NEXT Group 국제협력실장)' },
        { time: '10:30-11:30', session: '기조강연: 글로벌 탄소중립 정책 동향', speaker: '이국제 (UNEP 아태지역 대표)' },
        { time: '11:30-11:45', session: '휴식', speaker: '' },
        { time: '11:45-12:45', session: '세션 1: 아시아 각국의 탄소중립 정책', speaker: '박아시아 (아시아개발은행 수석이코노미스트)' },
        { time: '12:45-14:00', session: '점심 및 네트워킹', speaker: '' },
        { time: '14:00-15:00', session: '세션 2: 국제 탄소시장 메커니즘', speaker: '최탄소 (국제탄소행동파트너십 대표)' },
        { time: '15:00-16:00', session: '종합토론: 지역 협력 방안', speaker: '전문가 패널' }
      ],
      speakers: [
        { id: 1, name: '김글로벌', affiliation: 'NEXT Group 국제협력실장' },
        { id: 2, name: '이국제', affiliation: 'UNEP 아태지역 대표' },
        { id: 3, name: '박아시아', affiliation: '아시아개발은행 수석이코노미스트' },
        { id: 4, name: '최탄소', affiliation: '국제탄소행동파트너십 대표' },
        { id: 5, name: '정협력', affiliation: '외교부 기후변화대사' },
        { id: 6, name: '한지역', affiliation: '부산대학교 국제학부 교수' }
      ],
      contact: 'workshop@nextgroup.or.kr'
    },
    {
      id: 4,
      title: '2024 재생에너지 확산 세미나',
      date: '2024.11.20',
      time: '13:00 - 17:30',
      location: '서울 롯데호텔 크리스탈볼룸',
      organizer: 'NEXT Group',
      status: 'completed',
      bannerImage:
        'https://readdy.ai/api/search-image?query=Completed%20renewable%20energy%20seminar%20with%20solar%20panels%20and%20wind%20turbines%20background%2C%20professional%20conference%20setting%20with%20green%20energy%20technology%20displays&width=1200&height=400&seq=event4banner&orientation=landscape',
      overview:
        '국내 재생에너지 확산 정책과 기술 동향을 점검하고, 2030년 재생에너지 목표 달성을 위한 실행 방안을 논의한 세미나입니다. 정부, 산업계, 학계 전문가들이 참여하여 재생에너지 보급 확대 방안과 기술 혁신 전략을 공유했습니다.',
      program: [
        { time: '13:00-13:30', session: '등록 및 환영사', speaker: '김재생 (NEXT Group 대표)' },
        { time: '13:30-14:30', session: '기조강연: 글로벌 재생에너지 동향', speaker: '이국제 (국제에너지기구)' },
        { time: '14:30-15:30', session: '세션 1: 태양광 발전 확산 전략', speaker: '박태양 (한국태양광산업협회)' },
        { time: '15:30-15:45', session: '휴식', speaker: '' },
        { time: '15:45-16:45', session: '세션 2: 해상풍력 개발 현황과 과제', speaker: '최바람 (한국해상풍력협회)' },
        { time: '16:45-17:30', session: '종합토론 및 정책 제언', speaker: '전문가 패널' }
      ],
      speakers: [
        { id: 1, name: '김재생', affiliation: 'NEXT Group 대표' },
        { id: 2, name: '이국제', affiliation: '국제에너지기구 선임연구원' },
        { id: 3, name: '박태양', affiliation: '한국태양광산업협회 회장' },
        { id: 4, name: '최바람', affiliation: '한국해상풍력협회 사무총장' },
        { id: 5, name: '정전력', affiliation: '한국전력공사 신재생에너지실장' },
        { id: 6, name: '한효율', affiliation: '에너지경제연구원 연구위원' }
      ],
      contact: 'seminar@nextgroup.or.kr',
      materials: ['발표자료집.pdf', '세미나 요약보고서.pdf', '정책 제언서.pdf'],
      videoUrl: 'https://youtube.com/watch?v=example',
      snapshots: [
        'https://readdy.ai/api/search-image?query=Professional%20renewable%20energy%20seminar%20opening%20ceremony%20with%20speakers%20on%20stage%2C%20modern%20conference%20hall%20with%20audience%20and%20green%20energy%20banners&width=400&height=300&seq=snap1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Keynote%20speaker%20presenting%20global%20renewable%20energy%20trends%20with%20large%20screen%20displaying%20solar%20and%20wind%20power%20statistics%20in%20conference%20room&width=400&height=300&seq=snap2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Panel%20discussion%20session%20with%20renewable%20energy%20experts%20sitting%20at%20conference%20table%2C%20audience%20listening%20attentively%20in%20professional%20seminar%20setting&width=400&height=300&seq=snap3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Networking%20session%20during%20coffee%20break%20with%20professionals%20discussing%20renewable%20energy%20projects%2C%20exhibition%20displays%20in%20background&width=400&height=300&seq=snap4&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Solar%20panel%20technology%20demonstration%20booth%20with%20experts%20explaining%20photovoltaic%20systems%20to%20seminar%20attendees&width=400&height=300&seq=snap5&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Group%20photo%20of%20renewable%20energy%20seminar%20participants%20and%20speakers%20in%20front%20of%20conference%20banner%20with%20green%20energy%20theme&width=400&height=300&seq=snap6&orientation=landscape'
      ]
    },
    {
      id: 9,
      title: '에너지 저장 기술 컨퍼런스',
      date: '2025.04.18',
      time: '09:30 - 17:30',
      location: '대전 유성구 대덕대로 989 KAIST',
      organizer: 'NEXT Group',
      status: 'upcoming',
      bannerImage:
        'https://readdy.ai/api/search-image?query=Modern%20energy%20storage%20technology%20conference%20with%20battery%20displays%20and%20grid%20systems%2C%20professional%20tech%20conference%20setting%20with%20advanced%20energy%20storage%20equipment&width=1200&height=400&seq=event9banner&orientation=landscape',
      overview:
        '차세대 배터리 기술과 에너지 저장 시스템의 최신 동향을 다루는 기술 컨퍼런스입니다. 국내외 에너지 저장 기술 전문가들이 모여 리튬이온 배터리, ESS(에너지저장시스템), 그리드 스케일 저장 기술의 현재와 미래를 논의합니다. 산업계, 학계, 연구기관의 전문가들이 참여하여 에너지 저장 기술의 상용화 방안과 정책 지원 방향을 모색합니다.',
      program: [
        { time: '09:30-10:00', session: '등록 및 개회식', speaker: '이저장 (NEXT Group 대표)' },
        { time: '10:00-11:00', session: '기조강연: 글로벌 에너지 저장 기술 동향', speaker: '김배터리 (MIT 에너지연구소)' },
        { time: '11:00-11:15', session: '휴식', speaker: '' },
        { time: '11:15-12:15', session: '세션 1: 차세대 배터리 기술', speaker: '박리튬 (삼성SDI 연구소장)' },
        { time: '12:15-13:30', session: '점심 및 네트워킹', speaker: '' },
        { time: '13:30-14:30', session: '세션 2: 그리드 스케일 ESS 구축', speaker: '최그리드 (한국전력 ESS사업단)' },
        { time: '14:30-15:30', session: '세션 3: 에너지 저장 정책과 시장', speaker: '정정책 (에너지경제연구원)' },
        { time: '15:30-15:45', session: '휴식', speaker: '' },
        { time: '15:45-16:45', session: '패널토론: 에너지 저장 기술의 미래', speaker: '전문가 패널' },
        { time: '16:45-17:30', session: '폐회 및 기술 전시 관람', speaker: '' }
      ],
      speakers: [
        { id: 1, name: '이저장', affiliation: 'NEXT Group 대표' },
        { id: 2, name: '김배터리', affiliation: 'MIT 에너지연구소 교수' },
        { id: 3, name: '박리튬', affiliation: '삼성SDI 연구소장' },
        { id: 4, name: '최그리드', affiliation: '한국전력 ESS사업단장' },
        { id: 5, name: '정정책', affiliation: '에너지경제연구원 선임연구위원' },
        { id: 6, name: '한기술', affiliation: 'LG에너지솔루션 CTO' },
        { id: 7, name: '윤혁신', affiliation: 'KAIST 전기전자공학부 교수' },
        { id: 8, name: '조미래', affiliation: '한국에너지기술연구원 본부장' }
      ],
      contact: 'tech@nextgroup.or.kr'
    }
  ];

  const currentEvent = eventsData.find(event => event.id === parseInt(id ?? '1', 10));

  if (!currentEvent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">행사를 찾을 수 없습니다</h1>
          <Link to="/events" className="text-blue-600 hover:text-blue-800">
            행사 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('${currentEvent.bannerImage}')` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="mb-4">
              <Link to="/events" className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm">
                <i className="ri-arrow-left-line mr-2"></i>
                행사 목록으로 돌아가기
              </Link>
            </div>
            <h1 className="text-4xl font-bold mb-6">{currentEvent.title}</h1>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <i className="ri-calendar-line mr-2 text-teal-400"></i>
                {currentEvent.date} {currentEvent.time}
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line mr-2 text-teal-400"></i>
                {currentEvent.location}
              </div>
              <div className="flex items-center">
                <i className="ri-user-line mr-2 text-teal-400"></i>
                주최: {currentEvent.organizer}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            {currentEvent.status === 'upcoming' && (
              <>
                <Link
                  to={`/events/${currentEvent.id}/register`}
                  className="bg-teal-600 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-700 transition-colors whitespace-nowrap flex items-center"
                >
                  <i className="ri-user-add-line mr-2"></i>
                  참가 신청하기
                </Link>
                <button
                  onClick={() => addToCalendar(currentEvent)}
                  className="bg-gray-600 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors whitespace-nowrap flex items-center"
                >
                  <i className="ri-calendar-event-line mr-2"></i>
                  캘린더에 추가하기
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 행사 개요 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="ri-information-line mr-3 text-teal-600"></i>
              행사 개요
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed text-lg">{currentEvent.overview}</p>
            </div>
          </div>

          {/* 프로그램 일정 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="ri-time-line mr-3 text-teal-600"></i>
              프로그램 일정
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {currentEvent.program.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 ${index !== currentEvent.program.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-32 flex-shrink-0">
                      <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.session}</h3>
                      {item.speaker && <p className="text-gray-600 text-sm">{item.speaker}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 발표자 및 패널 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="ri-team-line mr-3 text-teal-600"></i>
              발표자 및 패널
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentEvent.speakers.map(speaker => (
                <div key={speaker.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-gray-600 text-sm">{speaker.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 관련 자료 (완료된 행사만) */}
          {currentEvent.status === 'completed' && (currentEvent.snapshots || currentEvent.videoUrl || currentEvent.materials) && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <i className="ri-folder-download-line mr-3" style={{ color: '#1C8E8C' }}></i>
                관련 자료
              </h2>

              <div className="space-y-12">
                {/* 행사 스냅샷 */}
                {currentEvent.snapshots && currentEvent.snapshots.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <i className="ri-camera-line mr-2" style={{ color: '#1C8E8C' }}></i>
                      행사 스냅샷
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {currentEvent.snapshots.map((snapshot, index) => (
                        <div
                          key={index}
                          className="relative cursor-pointer group"
                          onClick={() => openImagePopup(snapshot)}
                        >
                          <img
                            src={snapshot}
                            alt={`행사 스냅샷 ${index + 1}`}
                            className="w-full h-32 object-cover object-top rounded-lg transition-transform duration-300 group-hover:scale-105 shadow-md"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                            <i className="ri-zoom-in-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 행사 영상 */}
                {currentEvent.videoUrl && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <i className="ri-video-line mr-2" style={{ color: '#1C8E8C' }}></i>
                      행사 영상
                    </h3>
                    <div className="flex justify-center">
                      <div className="relative cursor-pointer group max-w-md">
                        <img
                          src="https://readdy.ai/api/search-image?query=YouTube%20video%20thumbnail%20for%20renewable%20energy%20seminar%20with%20professional%20conference%20setting%20and%20play%20button%20overlay&width=480&height=270&seq=videothumb&orientation=landscape"
                          alt="행사 영상 썸네일"
                          className="w-full h-64 object-cover object-top rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <i className="ri-play-fill text-white text-2xl ml-1"></i>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded">
                            {currentEvent.title} - 전체 영상
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 관련 자료 다운로드 */}
                {currentEvent.materials && currentEvent.materials.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <i className="ri-download-line mr-2" style={{ color: '#1C8E8C' }}></i>
                      관련 자료 다운로드
                    </h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {currentEvent.materials.map((material, index) => (
                        <button
                          key={index}
                          className="flex items-center px-6 py-3 border-2 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group"
                          style={{ borderColor: '#1C8E8C', color: '#1C8E8C' }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = '#1C8E8C';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#1C8E8C';
                          }}
                        >
                          <i className="ri-file-pdf-line text-xl mr-3"></i>
                          <div className="text-left">
                            <div className="font-medium text-sm">{material}</div>
                            <div className="text-xs opacity-70">PDF 파일</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 문의처 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="ri-customer-service-line mr-3 text-teal-600"></i>
              문의처
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center">
                <i className="ri-mail-line text-teal-600 text-xl mr-3"></i>
                <div>
                  <p className="text-gray-700 font-medium">이메일 문의</p>
                  <a href={`mailto:${currentEvent.contact}`} className="text-teal-600 hover:text-teal-700 transition-colors">
                    {currentEvent.contact}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeImagePopup}
        >
          <div className="relative max-w-4xl max-h-full">
            <button onClick={closeImagePopup} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
              <i className="ri-close-line text-3xl"></i>
            </button>
            <img
              src={selectedImage}
              alt="확대된 행사 스냅샷"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={e => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}