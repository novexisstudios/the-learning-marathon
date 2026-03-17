import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Brain, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Hero3D from '@/components/Hero3D';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <Hero3D />

      {/* Philosophy Section */}
      <section className="section-padding relative overflow-hidden pt-32">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-block px-6 py-2 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em]">
              Our Philosophy
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Learning is not <br />
              meant to be <br />
              <span className="text-gradient italic">rushed or ranked.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              The Learning Marathon exists to restore depth, thinking, and curiosity in education. We believe true learning happens when students are given the space to explore, question, and articulate their thoughts.
            </p>
            <div className="flex gap-6">
              <Link to="/about" className="btn-primary px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-[60px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative aspect-square rounded-[52px] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/edu-saas/1200/1200" 
                alt="Students Learning" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 glass-card p-10 rounded-[32px] border-white/20 backdrop-blur-3xl">
                <p className="text-white font-black text-2xl italic leading-tight tracking-tight">
                  "Learning is not a race. It is a lifelong marathon."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto glass-card rounded-[80px] p-16 md:p-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/10 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-center relative z-10">
            {[
              { label: "Schools Impacted", value: "50+" },
              { label: "Students Reached", value: "10k+" },
              { label: "Research Projects", value: "500+" },
              { label: "National Events", value: "12" }
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="text-7xl font-black text-white tracking-tighter">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.5em] text-brand-primary font-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
            Build a research <br />
            culture <span className="text-gradient">in your school.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join the movement to restore curiosity and depth in the classroom. Partner with The Learning Marathon today.
          </p>
          <div className="pt-10">
            <Link to="/contact" className="btn-primary text-2xl px-16 py-8 rounded-[32px]">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
