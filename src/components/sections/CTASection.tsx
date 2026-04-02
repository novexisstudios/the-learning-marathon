import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="section-padding bg-brand-primary relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7a2478] via-[#591a59] to-[#2e0b2e]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-secondary/8 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
        >
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 border border-brand-secondary/30 text-brand-secondary text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
            Join the Next Cohort
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 leading-tight">
            We are looking for a Narendranath{' '}
            <br className="hidden md:block" />
            <span className="text-brand-secondary">before he becomes Swami Vivekananda.</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 font-medium mb-14 max-w-3xl mx-auto leading-relaxed">
            We aim to identify and nurture high-potential thinkers early, without marks, without age barriers, without performance pressure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary CTA — now an anchor to avoid dead button */}
            <a
              href="mailto:school@thelearningmarathon.in?subject=School%20Sign%20Up%20-%20The%20Learning%20Marathon"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-brand-secondary text-black rounded-xl font-black uppercase tracking-wider text-sm transition-all hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(255,189,89,0.35)] active:scale-[0.97] w-full sm:w-auto"
            >
              Sign Up Your School
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:contact@thelearningmarathon.in"
              className="flex items-center justify-center gap-2.5 px-10 py-5 bg-transparent text-white border border-white/25 rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:bg-white/10 hover:border-white/40 active:scale-[0.97] w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>

          <p className="text-white/40 mt-10 font-bold uppercase tracking-[0.3em] text-xs">
            Become part of the next cohort · School-Integrated · NEP 2020 Aligned
          </p>
        </motion.div>
      </div>
    </section>
  );
}
