import './styles/globals.css';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App.jsx';

export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
