import { MainLayout } from "../../layouts/MainLayout";
import { AboutPage } from '../../pages/AboutPage'
import { ArtistsPage } from "../../pages/ArtistsPage";
import { ServicesPage } from "../../pages/ServicesPage";
import { MusicPage } from "../../pages/MusicPage";

export const ROOT = "/about";
export const ARTISTS = "/artists";
export const SERVICES = "/services";
export const MUSIC = "/music";

export const PUBLIC_ROUTES = [
  { layout: MainLayout, page: AboutPage, path: ROOT, title: "about", id: 0 },
  { layout: MainLayout, page: ArtistsPage, path: ARTISTS, title: "artists", id: 1 },
  { layout: MainLayout, page: ServicesPage, path: SERVICES, title: "services", id: 2 },
  { layout: MainLayout, page: MusicPage, path: MUSIC, title: "music", id: 3 },
];
