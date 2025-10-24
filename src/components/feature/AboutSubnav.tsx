
import { Link, useLocation } from 'react-router-dom';

export default function AboutSubnav() {
  const location = useLocation();

  const tabs = [
    { id: 'about', label: 'NEXT group', path: '/about' },
    { id: 'members', label: '구성원', path: '/about/members' },
    { id: 'annual-reports', label: '연간 보고서', path: '/annual-reports' },
    { id: 'careers', label: '인재 채용', href: 'https://nextgroup.career.greetinghr.com/ko/career' },
  ];

  const isActive = (path?: string, href?: string) => {
    if (href) return false; // External links are never active
    return location.pathname === path;
  };

  return (
    <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            if (tab.href) {
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
                >
                  {tab.label}
                </a>
              );
            }

            return (
              <Link
                key={tab.id}
                to={tab.path!}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  isActive(tab.path)
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                aria-current={isActive(tab.path) ? 'page' : undefined}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
