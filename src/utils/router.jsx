import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';

import { AboutPage } from '../pages/AboutPage';
import { ArtistsPage } from '../pages/ArtistsPage';
import { MusicPage } from '../pages/MusicPage';
import { ServicesPage } from '../pages/ServicesPage';

// import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="about" element={<Navigate to="/" replace />} />

      <Route path="about" element={<AboutPage />} />

      <Route path="artists" element={<ArtistsPage />} />

      <Route path="music" element={<MusicPage />} />

      <Route path="services" element={<ServicesPage />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>,
  ),
);
