import { motion } from 'motion/react';
import { Heart, ShieldCheck, Zap, BookOpen, XCircle, CheckCircle, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Parents() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[150px] -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-5xl mx-auto space-y-8 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-6 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          For Families
        </motion.div>
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
          For <span className="text-gradient">Parents</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Empowering your child with the skills to think, research, and excel.
        </p>
      </section>

      {/* What it is/isn't */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[60px] border-red-500/10 space-y-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500/20" />
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)] group-hover:scale-110 transition-transform">
                <XCircle size={40} />
              </div>
              <h2 className="text-4xl font-black text-white tracking-tighter">The Program is NOT:</h2>
            </div>
            <ul className="space-y-10">
              {[
                { title: "An Exam", desc: "There is no pressure of marks or competitive ranking." },
                { title: "An Olympiad", desc: "It's not about speed-solving or memorizing facts." },
                { title: "Coaching", desc: "We don't provide 'shortcuts' to higher marks." }
              ].map((item, i) => (
                <li key={i} className="space-y-3 group/item">
                  <h4 className="text-2xl font-black text-red-400 transition-transform group-hover/item:translate-x-3">{item.title}</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[60px] border-emerald-500/10 space-y-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500/20" />
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-4xl font-black text-white tracking-tighter">The Program IS:</h2>
            </div>
            <ul className="space-y-10">
              {[
                { title: "A Learning Journey", desc: "A structured path to discover the joy of discovery." },
                { title: "Focused on Thinking", desc: "Developing the ability to ask 'Why' and 'How'." },
                { title: "Designed to Reduce Fear", desc: "Making textbooks approachable and interesting." }
              ].map((item, i) => (
                <li key={i} className="space-y-3 group/item">
                  <h4 className="text-2xl font-black text-emerald-400 transition-transform group-hover/item:translate-x-3">{item.title}</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How It Helps Your Child */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">How It Helps Your Child</h2>
            <div className="w-48 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Deeper Understanding",
                desc: "Moving beyond surface-level reading to truly grasp complex concepts in science and beyond.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Zap,
                title: "Higher Class Preparation",
                desc: "Building the research and reading stamina required for the academic rigors of higher grades.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Heart,
                title: "Confidence in Expression",
                desc: "Developing the ability to articulate original thoughts and research findings with clarity.",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: ShieldCheck,
                title: "Reduced Textbook Fear",
                desc: "Transforming heavy textbooks from intimidating burdens into exciting sources of discovery.",
                color: "from-amber-500 to-orange-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-12 rounded-[52px] flex flex-col sm:flex-row gap-10 items-start hover:border-white/20 transition-all duration-500 group"
              >
                <div className={cn("shrink-0 w-24 h-24 rounded-[32px] shadow-2xl flex items-center justify-center text-white bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", item.color)}>
                  <item.icon size={44} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white tracking-tighter">{item.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-secondary/10 to-transparent" />
        <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-[10px] font-black uppercase tracking-[0.5em]">
            Parent Feedback
          </div>
          <Quote className="mx-auto text-brand-secondary/20 animate-pulse" size={100} />
          <blockquote className="text-5xl md:text-7xl font-black text-white leading-[1] tracking-tighter italic">
            "My daughter used to struggle with reading her science chapters. After the Learning Marathon, she doesn't just read; she investigates. Her curiosity has returned."
          </blockquote>
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-[32px] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-1 shadow-2xl">
              <div className="w-full h-full rounded-[28px] bg-slate-800 flex items-center justify-center text-brand-secondary font-black text-3xl">S</div>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-white tracking-tight">Mrs. Sharma</p>
              <p className="text-[10px] text-brand-secondary font-black uppercase tracking-[0.5em] mt-2">Parent of Grade 8 Student</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
