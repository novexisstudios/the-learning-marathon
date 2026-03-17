import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Program = lazy(() => import('./pages/Program'));
const Schools = lazy(() => import('./pages/Schools'));
const Parents = lazy(() => import('./pages/Parents'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Event = lazy(() => import('./pages/Event'));
const Contact = lazy(() => import('./pages/Contact'));

// Simple loading spinner for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg-light">
    <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="program" element={<Program />} />
            <Route path="schools" element={<Schools />} />
            <Route path="parents" element={<Parents />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="event" element={<Event />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
