import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProgramSection from './components/sections/ProgramSection';
import ImpactSection from './components/sections/ImpactSection';
import CTASection from './components/sections/CTASection';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
