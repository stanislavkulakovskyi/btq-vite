import { Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { DisantrefactPage } from './pages/DisantrefactPage';
import { CutmylipsPage } from './pages/CutmylipsPage';
import { ServicesBespokeMusicPage } from './pages/ServicesBespokeMusicPage';
import { ServicesSoundDesignPage } from './pages/ServicesSoundDesignPage';

export const routes = [
  { path: '/', element: <MainLayout /> },
  { path: '/disantrefact', element: <DisantrefactPage /> },
  { path: '/cutmylips', element: <CutmylipsPage /> },
  { path: '/services/bespoke-music', element: <ServicesBespokeMusicPage /> },
  { path: '/services/sound-design', element: <ServicesSoundDesignPage /> },
  { path: '*', element: <Navigate to="/" replace /> },
];
