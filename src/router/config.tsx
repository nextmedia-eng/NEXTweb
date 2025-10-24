
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const MembersPage = lazy(() => import('../pages/members/page'));
const MemberDetailPage = lazy(() => import('../pages/member-detail/page'));
const AnnualReportsPage = lazy(() => import('../pages/annual-reports/page'));
const AnnualReportDetailPage = lazy(() => import('../pages/annual-report-detail/page'));
const ResearchTopicsPage = lazy(() => import('../pages/research-topics/page'));
const PublicationsPage = lazy(() => import('../pages/publications/page'));
const PublicationDetailPage = lazy(() => import('../pages/publication-detail/page'));
const PublicationsFilterPage = lazy(() => import('../pages/publications-filter/page'));
const PublicationsHorizontalPage = lazy(() => import('../pages/publications-horizontal/page'));
const PublicationsHorizontalFilterPage = lazy(() => import('../pages/publications-horizontal-filter/page'));
const DatabasePage = lazy(() => import('../pages/database/page'));
const DatabaseDetailPage = lazy(() => import('../pages/database-detail/page'));
const NoticesPage = lazy(() => import('../pages/notices/page'));
const NoticeDetailPage = lazy(() => import('../pages/notice-detail/page'));
const EventsPage = lazy(() => import('../pages/events/page'));
const EventDetailPage = lazy(() => import('../pages/event-detail/page'));
const EventRegistrationPage = lazy(() => import('../pages/event-registration/page'));
const ZeroEnergyBarPage = lazy(() => import('../pages/zero-energy-bar/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout><HomePage /></MainLayout>,
  },
  {
    path: '/about',
    element: <MainLayout><AboutPage /></MainLayout>,
  },
  {
    path: '/about/members',
    element: <MainLayout><MembersPage /></MainLayout>,
  },
  {
    path: '/about/members/:id',
    element: <MainLayout><MemberDetailPage /></MainLayout>,
  },
  {
    path: '/about/annual-reports',
    element: <MainLayout><AnnualReportsPage /></MainLayout>,
  },
  {
    path: '/about/annual-reports/:year',
    element: <MainLayout><AnnualReportDetailPage /></MainLayout>,
  },
  {
    path: '/research/research-topics',
    element: <MainLayout><ResearchTopicsPage /></MainLayout>,
  },
  {
    path: '/research/publications',
    element: <MainLayout><PublicationsPage /></MainLayout>,
  },
  {
    path: '/research/publications-horizontal',
    element: <MainLayout><PublicationsHorizontalPage /></MainLayout>,
  },
  {
    path: '/research/publications-filter',
    element: <MainLayout><PublicationsFilterPage /></MainLayout>,
  },
  {
    path: '/research/publications-horizontal-filter',
    element: <MainLayout><PublicationsHorizontalFilterPage /></MainLayout>,
  },
  {
    path: '/research/publications/:id',
    element: <MainLayout><PublicationDetailPage /></MainLayout>,
  },
  {
    path: '/research/database',
    element: <MainLayout><DatabasePage /></MainLayout>,
  },
  {
    path: '/research/database/:id',
    element: <MainLayout><DatabaseDetailPage /></MainLayout>,
  },
  {
    path: '/communication/notices',
    element: <MainLayout><NoticesPage /></MainLayout>,
  },
  {
    path: '/communication/notices/:id',
    element: <MainLayout><NoticeDetailPage /></MainLayout>,
  },
  {
    path: '/communication/events',
    element: <MainLayout><EventsPage /></MainLayout>,
  },
  {
    path: '/communication/events/:id',
    element: <MainLayout><EventDetailPage /></MainLayout>,
  },
  {
    path: '/communication/events/:id/register',
    element: <MainLayout><EventRegistrationPage /></MainLayout>,
  },
  {
    path: '/communication/zero-energy-bar',
    element: <MainLayout><ZeroEnergyBarPage /></MainLayout>,
  },
  // 기존 경로들과의 호환성을 위한 리다이렉트
  {
    path: '/members',
    element: <MainLayout><MembersPage /></MainLayout>,
  },
  {
    path: '/member/:id',
    element: <MainLayout><MemberDetailPage /></MainLayout>,
  },
  {
    path: '/annual-reports',
    element: <MainLayout><AnnualReportsPage /></MainLayout>,
  },
  {
    path: '/annual-report-detail/:year',
    element: <MainLayout><AnnualReportDetailPage /></MainLayout>,
  },
  {
    path: '/research-topics',
    element: <MainLayout><ResearchTopicsPage /></MainLayout>,
  },
  {
    path: '/publications',
    element: <MainLayout><PublicationsPage /></MainLayout>,
  },
  {
    path: '/publications-horizontal',
    element: <MainLayout><PublicationsHorizontalPage /></MainLayout>,
  },
  {
    path: '/publications-filter',
    element: <MainLayout><PublicationsFilterPage /></MainLayout>,
  },
  {
    path: '/publications-horizontal-filter',
    element: <MainLayout><PublicationsHorizontalFilterPage /></MainLayout>,
  },
  {
    path: '/publication-detail/:id',
    element: <MainLayout><PublicationDetailPage /></MainLayout>,
  },
  {
    path: '/database',
    element: <MainLayout><DatabasePage /></MainLayout>,
  },
  {
    path: '/database-detail/:id',
    element: <MainLayout><DatabaseDetailPage /></MainLayout>,
  },
  {
    path: '/notices',
    element: <MainLayout><NoticesPage /></MainLayout>,
  },
  {
    path: '/notice-detail/:id',
    element: <MainLayout><NoticeDetailPage /></MainLayout>,
  },
  {
    path: '/events',
    element: <MainLayout><EventsPage /></MainLayout>,
  },
  {
    path: '/event-detail/:id',
    element: <MainLayout><EventDetailPage /></MainLayout>,
  },
  {
    path: '/event-registration/:id',
    element: <MainLayout><EventRegistrationPage /></MainLayout>,
  },
  {
    path: '/zero-energy-bar',
    element: <MainLayout><ZeroEnergyBarPage /></MainLayout>,
  },
  {
    path: '*',
    element: <MainLayout><NotFoundPage /></MainLayout>,
  },
];

export default routes;
