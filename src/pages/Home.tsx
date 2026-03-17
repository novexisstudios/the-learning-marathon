import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Brain, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-bg-light">
      {/* Hero Section */}
      <Hero />

      {/* Philosophy Section */}
      <section className="section-padding relative overflow-hidden pt-32 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 border-b-2 border-brand-secondary text-brand-primary text-[11px] font-bold uppercase tracking-widest bg-brand-secondary/10">
            Our Philosophy
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Learning is not meant to be <br />
            <span className="text-brand-primary">rushed or ranked.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            The Learning Marathon exists to restore depth, thinking, and curiosity in education. We believe true learning happens when students are given the space to explore, question, and articulate their thoughts.
          </p>
          <div className="pt-8">
            <Link to="/about" className="btn-primary px-8 py-3 rounded-md text-[13px] uppercase tracking-wider font-semibold">
              Read Our Full Approach
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-20">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
            alt="Students Learning" 
            className="w-full h-[500px] object-cover rounded-lg shadow-sm border border-slate-200"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="mt-8 border-l-4 border-brand-secondary bg-brand-secondary/5 pl-6 py-4 rounded-r-lg">
            <p className="text-slate-800 font-bold text-lg italic leading-relaxed">
              "Learning is not a race. It is a lifelong marathon."
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-200">
            {[
              { label: "Schools Impacted", value: "50+" },
              { label: "Students Reached", value: "10k+" },
              { label: "Research Projects", value: "500+" },
              { label: "National Events", value: "12" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col justify-center space-y-2">
                <div className="text-4xl lg:text-5xl font-black text-brand-primary">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white text-center border-b border-slate-200">
        <div className="max-w-3xl mx-auto space-y-10 px-6">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Build a research culture <br />
            <span className="text-brand-primary">in your school.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Join the movement to restore curiosity and depth in the classroom. Partner with The Learning Marathon today.
          </p>
          <div className="pt-8">
            <Link to="/contact" className="btn-primary text-base px-10 py-4 rounded-md uppercase tracking-wider font-semibold">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
