import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './styles/index.scss';

export const createRoot = ViteReactSSG({ routes });
