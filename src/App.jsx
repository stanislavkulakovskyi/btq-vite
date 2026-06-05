import { Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { DisantrefactPage } from './pages/DisantrefactPage';
import { CutmylipsPage } from './pages/CutmylipsPage';

export const routes = [
  { path: '/', element: <MainLayout /> },
  { path: '/disantrefact', element: <DisantrefactPage /> },
  { path: '/cutmylips', element: <CutmylipsPage /> },
  { path: '*', element: <Navigate to="/" replace /> },
];
