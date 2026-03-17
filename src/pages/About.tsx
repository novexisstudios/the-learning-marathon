import { motion } from 'motion/react';
import { Brain, Search, MessageSquare, Quote, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[150px] -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-5xl mx-auto space-y-8 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-6 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          Our Story
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]"
        >
          Our <span className="text-gradient">Philosophy</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto"
        >
          Restoring depth, thinking, and curiosity in education through a research-driven approach.
        </motion.p>
      </section>

      {/* Philosophy Core */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-48">
          {/* The Problem */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-block px-6 py-2 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-[0.4em]">
                The Challenge
              </div>
              <h2 className="text-6xl font-black text-white tracking-tighter leading-tight">The Problem</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                In today's fast-paced academic environment, students are often caught in a cycle of rote memorization and competitive ranking. This "rush" leaves little room for actual understanding.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "Struggling to read deeply and absorb complex information",
                  "Hesitation in asking meaningful questions",
                  "Difficulty in thinking independently beyond textbooks",
                  "Challenges in articulating original ideas clearly"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-center p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform" />
                    <span className="text-slate-300 font-bold text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-red-500/20 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative glass-card p-6 rounded-[60px]">
                <img 
                  src="https://picsum.photos/seed/thinking-saas/1000/800" 
                  alt="Student thinking" 
                  className="rounded-[48px] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent rounded-[48px]" />
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Brain, title: "Reading Depth", color: "from-blue-500 to-indigo-500" },
                { icon: Search, title: "Research Thinking", color: "from-purple-500 to-pink-500" },
                { icon: MessageSquare, title: "Articulation Skills", color: "from-emerald-500 to-teal-500" },
                { icon: Sparkles, title: "Lifelong Curiosity", color: "from-amber-500 to-orange-500" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-12 rounded-[48px] border-white/10 hover:border-white/20 transition-all group relative overflow-hidden"
                >
                  <div className={cn("absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-20", item.color)} />
                  <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl bg-gradient-to-br transition-transform group-hover:scale-110 group-hover:rotate-3", item.color)}>
                    <item.icon size={36} />
                  </div>
                  <h4 className="text-2xl font-black text-white tracking-tight">{item.title}</h4>
                </motion.div>
              ))}
            </div>
            <div className="order-1 lg:order-2 space-y-10">
              <div className="inline-block px-6 py-2 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em]">
                The Solution
              </div>
              <h2 className="text-6xl font-black text-white tracking-tighter leading-tight">Our Approach</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                The Learning Marathon is a structured journey designed to transition students from passive consumers of information to active researchers.
              </p>
              <p className="text-xl text-slate-400 leading-relaxed">
                By integrating research methodology into the school curriculum, we help students develop a disciplined approach to inquiry, evidence-based thinking, and confident expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/10 to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <Quote className="mx-auto text-brand-primary/20 animate-pulse" size={120} />
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tighter italic">
              “Learning is not a race. <br />
              It is a lifelong marathon.”
            </h2>
            <div className="w-48 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
            <p className="text-[10px] text-brand-primary font-black uppercase tracking-[0.6em]">The Core Philosophy</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
