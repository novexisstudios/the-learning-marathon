import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-brand-primary">
      {/* Background Enhancements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#671e67] via-[#591a59] to-[#3a103a] pointer-events-none" />
      
      {/* Soft radial light effect */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Abstract thin geometric lines (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Abstract subtle curve */}
      <svg className="absolute -top-40 -right-40 w-[800px] h-[800px] text-white opacity-[0.02] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="50" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-semibold tracking-wide backdrop-blur-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-secondary" />
              From Reading → Research → Exposure
            </div>
            
            <h1 className="text-5xl lg:text-[72px] font-black text-white tracking-tighter leading-[1.1] mb-8">
              The <span className="text-brand-secondary">Learning</span> <br className="hidden lg:block" />
              Marathon
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-12 font-medium tracking-tight">
              A premium, research-driven academic journey designed to cultivate deep thinking in school students.
            </p>
            
            <div className="flex flex-wrap items-center gap-5">
              <Link 
                to="/about" 
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-brand-secondary text-black rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,189,89,0.15)] active:scale-[0.98]"
              >
                Explore the Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/schools" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-white/30 rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                For Schools
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="relative h-[450px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
          >
            {/* Academic Image */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Students engaging in a research-driven learning journey" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* Soft overlay tint matching brand color */}
            <div className="absolute inset-0 bg-[#671e67]/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#671e67]/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
