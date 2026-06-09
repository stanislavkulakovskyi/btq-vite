import { Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { DisantrefactPage } from './pages/DisantrefactPage';
import { CutmylipsPage } from './pages/CutmylipsPage';
import { ServicesLandingPage } from './pages/ServicesLandingPage';
import { SERVICES } from './api/services';

const serviceRoutes = SERVICES.map((service) => ({
  path: `/services/${service.slug}`,
  element: <ServicesLandingPage service={service} />,
}));

export const routes = [
  { path: '/', element: <MainLayout /> },
  { path: '/disantrefact', element: <DisantrefactPage /> },
  { path: '/cutmylips', element: <CutmylipsPage /> },
  ...serviceRoutes,
  { path: '*', element: <Navigate to="/" replace /> },
];
