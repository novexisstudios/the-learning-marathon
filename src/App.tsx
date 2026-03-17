import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Schools from './pages/Schools';
import Parents from './pages/Parents';
import FAQ from './pages/FAQ';
import Event from './pages/Event';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
