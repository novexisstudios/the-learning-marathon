import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", path: "#about" },
  { name: "Program", path: "#program" },
  { name: "For Schools", path: "#schools" },
  { name: "Impact Stories", path: "#impact" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine which section is currently in view
      const ids = navLinks.map((l) => l.path.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2"
          : "bg-white border-b border-slate-100 py-4",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="" className="flex items-center gap-3 group py-1.5 shrink-0">
          <img
            src="/logo2.png"
            alt="The Learning Marathon"
            className="h-20 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={cn(
                "relative text-[12.5px] uppercase tracking-wider font-bold px-3 py-2 rounded-lg transition-all duration-200",
                activeSection === link.path
                  ? "text-brand-primary bg-brand-primary/6"
                  : "text-slate-500 hover:text-brand-primary hover:bg-brand-primary/5",
              )}
            >
              {link.name}
              {activeSection === link.path && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-primary rounded-full" />
              )}
            </a>
          ))}

          <div className="ml-4 pl-4 border-l border-slate-200">
            <a
              href="#contact"
              className="btn-primary px-6 py-2.5 inline-block text-[12.5px]"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2.5 rounded-xl transition-colors text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-5 flex flex-col gap-1 z-50"
          >
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={handleLinkClick}
                className={cn(
                  "text-base font-bold py-3 px-4 rounded-xl transition-colors",
                  activeSection === link.path
                    ? "text-brand-primary bg-brand-primary/6"
                    : "text-slate-600 hover:bg-slate-50 hover:text-brand-primary",
                )}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-primary text-center mt-3 py-3.5"
            >
              Sign Up
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
