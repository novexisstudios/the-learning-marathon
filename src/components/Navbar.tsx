import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Program', path: '/program' },
  { name: 'Schools', path: '/schools' },
  { name: 'Parents', path: '/parents' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-8',
        scrolled ? 'py-4' : 'bg-transparent'
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-[32px] transition-all duration-500",
        scrolled ? "glass-nav shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-transparent"
      )}>
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500">
            <BookOpen size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white leading-none">
              Learning Marathon
            </span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-brand-primary font-black mt-1">
              ReadFirst Initiative
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[11px] uppercase tracking-[0.2em] font-black px-5 py-2.5 rounded-2xl transition-all duration-300',
                location.pathname === link.path 
                  ? 'text-white bg-white/10 shadow-inner' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-6 pl-6 border-l border-white/10">
            <Link
              to="/contact"
              className="bg-white text-slate-950 px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-3 hover:bg-white/5 rounded-2xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden absolute top-full left-6 right-6 mt-6 bg-slate-950/95 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-[40px] p-10 flex flex-col gap-6 z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-3xl font-black py-4 px-6 rounded-3xl transition-all tracking-tighter',
                  location.pathname === link.path 
                    ? 'text-white bg-brand-primary/20 shadow-inner' 
                    : 'text-slate-400'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-6 rounded-3xl text-center text-xl font-black tracking-tight mt-6 shadow-2xl active:scale-95"
            >
              Join Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
