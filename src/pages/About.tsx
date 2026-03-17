import { motion } from 'motion/react';
import { Brain, Search, MessageSquare, Quote, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <div className="relative overflow-hidden bg-bg-light">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px] -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-4xl mx-auto space-y-6 pt-32">
        <div className="inline-block px-4 py-1.5 border-b-2 border-brand-secondary text-brand-primary text-[11px] font-bold uppercase tracking-widest mb-2 bg-brand-secondary/10">
          Our Story
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
          Our <span className="text-brand-primary">Philosophy</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Restoring depth, thinking, and curiosity in education through a rigorous, research-driven approach.
        </p>
      </section>

      {/* Philosophy Core */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* The Problem */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="pb-6 border-b-2 border-slate-200">
                <span className="text-brand-primary text-[11px] font-bold uppercase tracking-widest">The Challenge</span>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mt-2">The Problem</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                In today's fast-paced academic environment, students are often caught in a cycle of rote memorization and competitive ranking. This "rush" leaves little room for actual understanding.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Struggling to read deeply and absorb complex information",
                  "Hesitation in asking meaningful questions",
                  "Difficulty in thinking independently beyond textbooks",
                  "Challenges in articulating original ideas clearly"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center border border-brand-secondary/30 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-brand-secondary" />
                    </div>
                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-2">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                  alt="Student thinking" 
                  className="rounded-lg w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Brain, title: "Reading Depth", text: "Moving beyond surface-level reading to critical engagement." },
                { icon: Search, title: "Research Thinking", text: "Developing frameworks to analyze and synthesize information." },
                { icon: MessageSquare, title: "Articulation Skills", text: "Translating thought into clear, structured communication." },
                { icon: Sparkles, title: "Lifelong Curiosity", text: "Fostering an intrinsic desire to learn continuously." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="pb-6 border-b-2 border-slate-200">
                <span className="text-brand-primary text-[11px] font-bold uppercase tracking-widest">Our Approach</span>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mt-2">The Solution</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                The Learning Marathon builds a structured environment where students engage directly with texts, learn to formulate questions, and structure their thinking like researchers.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-secondary shadow-sm mt-8">
                <Quote size={24} className="text-brand-primary/20 mb-4" />
                <p className="text-lg text-slate-800 font-bold italic leading-relaxed">
                  "Education is not the learning of facts, but the training of the mind to think."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding relative overflow-hidden bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center relative z-10 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <Quote className="mx-auto text-brand-primary/30" size={120} />
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1] tracking-tighter italic">
              “Learning is not a race. <br />
              It is a lifelong marathon.”
            </h2>
            <div className="w-48 h-2 bg-brand-primary mx-auto rounded-full" />
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.6em]">The Core Philosophy</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
