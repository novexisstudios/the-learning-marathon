import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Brain, Microscope, Mic, ChevronDown } from 'lucide-react';

const pillars = [
  { icon: BookOpen,   label: 'Deep Reading',           phase: '01' },
  { icon: Brain,      label: 'Independent Thinking',   phase: '02' },
  { icon: Microscope, label: 'Research Mindset',        phase: '03' },
  { icon: Mic,        label: 'Confident Articulation',  phase: '04' },
];

const stats = [
  { value: '3', label: 'Learning Phases' },
  { value: 'Cls 7–9', label: 'Target Group' },
  { value: 'NEP 2020', label: 'Aligned' },
];

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 lg:pt-52 lg:pb-36 overflow-hidden bg-brand-primary">

      {/* ── Multi-layer background ──────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7a2478] via-[#591a59] to-[#2e0b2e] pointer-events-none" />

      {/* Animated glow orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-brand-secondary/8 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.2s' }} />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left column ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 border border-brand-secondary/30 text-brand-secondary text-xs font-bold tracking-widest uppercase backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
              A Research-Based Learning Initiative
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-[68px] xl:text-[76px] font-black text-white tracking-tighter leading-[1.05] mb-6">
              THE{' '}
              <span className="relative inline-block">
                <span className="text-brand-secondary">LEARNING</span>
              </span>
              <br />
              MARATHON
            </h1>

            {/* Sub-heading */}
            <p className="text-xl lg:text-2xl text-white/90 font-semibold mb-4 leading-snug">
              What if learning were measured by depth, not marks?
            </p>
            <p className="text-base lg:text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              A structured, research-backed academic journey that trains students <em>and</em> teachers in how learning actually works — not what to memorise, but how to think.
            </p>

            {/* Meta pills */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm"
                >
                  <span className="text-brand-secondary font-black text-sm">{s.value}</span>
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-3 px-8 py-4 bg-brand-secondary text-black rounded-xl font-black uppercase tracking-wider text-sm transition-all hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(255,189,89,0.35)] active:scale-[0.97]"
              >
                Sign Up Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm text-white border border-white/25 transition-all hover:bg-white/10 hover:border-white/40 active:scale-[0.97]"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* ── Right column — Pillar card ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
            className="relative"
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="absolute -top-5 -right-4 z-20 px-4 py-2 rounded-full bg-brand-secondary text-black text-xs font-black uppercase tracking-widest shadow-xl animate-float"
            >
              School-Integrated
            </motion.div>

            <div className="relative bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-8 overflow-hidden shadow-2xl">
              {/* Card glow */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-secondary/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-brand-primary/30 rounded-full blur-[70px] pointer-events-none" />

              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 relative z-10">
                This is not a competition.<br />
                <span className="text-brand-secondary">It is a journey.</span>
              </h3>
              <p className="text-white/60 text-sm font-medium mb-8 relative z-10">
                A 3-phase programme designed to build in students:
              </p>

              <div className="space-y-4 relative z-10">
                {pillars.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    {/* Phase number */}
                    <span className="text-white/20 text-xs font-black tabular-nums w-6 shrink-0">{item.phase}</span>

                    {/* Icon circle */}
                    <div className="w-11 h-11 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center shrink-0 group-hover:bg-brand-secondary/15 group-hover:border-brand-secondary/30 transition-all duration-200">
                      <item.icon className="w-5 h-5 text-brand-secondary" />
                    </div>

                    {/* Label */}
                    <span className="text-white/85 font-semibold text-base group-hover:text-white transition-colors duration-200">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Divider + note */}
              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <p className="text-white/45 text-xs font-semibold uppercase tracking-widest">
                  Not coaching · Not a workshop · Not a competition
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-20 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
