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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 shadow-sm',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-4 group py-2">
          <img 
            src="/logo.png" 
            alt="The Learning Marathon Logo" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[13px] uppercase tracking-wider font-semibold px-2 py-1 transition-colors duration-200',
                location.pathname === link.path 
                  ? 'text-brand-primary border-b-2 border-brand-primary'
                  : 'text-slate-600 hover:text-brand-primary'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4 pl-6 border-l border-slate-200">
            <Link
              to="/contact"
              className="btn-primary px-6 py-2.5"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 rounded-xl transition-colors text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-md p-6 flex flex-col gap-2 z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-semibold py-3 px-4 rounded-md transition-colors',
                  location.pathname === link.path 
                    ? 'text-brand-primary bg-slate-50' 
                    : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-brand-primary text-white px-6 py-4 rounded-md text-center text-[13px] font-semibold uppercase tracking-wider mt-4"
            >
              Partner With Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
