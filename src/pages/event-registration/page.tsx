
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EventRegistrationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    attendanceType: 'offline',
    privacyConsent: false
  });

  // 행사 정보 (실제로는 API에서 가져와야 함)
  const eventInfo = {
    title: id === '9' ? '에너지 저장 기술 컨퍼런스' : '제5회 전력시장의 설계 심포지엄',
    date: id === '9' ? '2024년 12월 20일 (금) 09:00 - 17:00' : '2024년 12월 15일 (일) 09:00 - 17:00',
    location: '서울 코엑스 컨벤션센터 3층 회의실 A',
    organizer: '한국전력거래소'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 필수 항목 검증
    if (!formData.name || !formData.organization || !formData.email || !formData.privacyConsent) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 폼 데이터 준비
      const submitData = new URLSearchParams();
      submitData.append('name', formData.name);
      submitData.append('organization', formData.organization);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('attendanceType', formData.attendanceType === 'offline' ? '오프라인 참석' : '온라인 참석');
      submitData.append('eventTitle', eventInfo.title);
      submitData.append('eventDate', eventInfo.date);

      const response = await fetch('https://readdy.ai/api/form/d3oa9cd93onbn47hbbqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString()
      });

      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        throw new Error('신청 처리 중 오류가 발생했습니다.');
      }
    } catch (error) {
      alert('신청 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const addToCalendar = () => {
    const startDate = id === '9' ? '20241220T090000' : '20241215T090000';
    const endDate = id === '9' ? '20241220T170000' : '20241215T170000';
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventInfo.title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(eventInfo.location)}&details=${encodeURIComponent('행사 참가 신청이 완료되었습니다.')}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center header-logo">
            <Link to="/">
              <img
                src="https://static.readdy.ai/image/cdb089564af8ef48c74c43b5090337d9/ef78455875ededa63353d8f62ea81fe1.png"
                alt="NEXT Group Logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            뒤로가기
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* 행사 정보 카드 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">행사 참가 신청</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">행사명</h3>
              <p className="text-lg font-semibold text-gray-900">{eventInfo.title}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">일정</h3>
              <p className="text-gray-900">{eventInfo.date}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">장소</h3>
              <p className="text-gray-900">{eventInfo.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">주최</h3>
              <p className="text-gray-900">{eventInfo.organizer}</p>
            </div>
          </div>
        </div>

        {/* 신청 폼 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">참가자 정보</h2>
          
          <form onSubmit={handleSubmit} data-readdy-form id="event-registration-form">
            <div className="space-y-6">
              {/* 필수 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="이름을 입력해주세요"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    소속/직책 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="소속 기관 및 직책을 입력해주세요"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="이메일 주소를 입력해주세요"
                  required
                />
              </div>

              {/* 선택 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="연락처를 입력해주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    참석 형태
                  </label>
                  <select
                    name="attendanceType"
                    value={formData.attendanceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="offline">오프라인 참석</option>
                    <option value="online">온라인 참석</option>
                  </select>
                </div>
              </div>

              {/* 개인정보 동의 */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    required
                  />
                  <div className="ml-3">
                    <label className="text-sm font-medium text-gray-700">
                      개인정보 수집 및 이용 동의 <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-1">
                      행사 참가 신청 및 관련 안내를 위해 개인정보를 수집하고 이용하는 것에 동의합니다.
                      수집된 정보는 행사 종료 후 3개월 이내 파기됩니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 제출 버튼 */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '신청 중...' : '신청 완료'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* 성공 모달 */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-check-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">신청이 완료되었습니다!</h3>
              <p className="text-gray-600 mb-6">
                행사 참가 신청이 성공적으로 접수되었습니다.<br />
                등록하신 이메일로 확인 메일을 발송해드렸습니다.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={addToCalendar}
                  className="w-full px-4 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap"
                >
                  <i className="ri-calendar-line mr-2"></i>
                  캘린더에 추가
                </button>
                <button
                  onClick={() => navigate('/events')}
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  행사 목록으로 돌아가기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventRegistrationPage;