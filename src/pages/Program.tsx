import { motion } from 'motion/react';
import { Calendar, MapPin, Target, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const phases = [
  {
    number: "01",
    title: "Learning Foundation",
    duration: "14 Days",
    location: "School Campus",
    learn: [
      "How to read science textbooks deeply",
      "How to understand what they read",
      "How to assess their own learning"
    ],
    outcome: "Students build attention, discipline, and conceptual clarity.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    number: "02",
    title: "Research Immersion",
    duration: "30 Days",
    location: "Daily engagement: 90 mins",
    learn: [
      "Framing research questions",
      "Identifying reliable sources",
      "Note-making and annotation",
      "Thinking like researchers"
    ],
    outcome: "Students develop structured thinking and research reading habits.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "National Academic Exposure",
    duration: "2 Days",
    location: "Pune",
    learn: [
      "Research challenges",
      "Presenting ideas",
      "Interacting with educators and peers"
    ],
    outcome: "Confidence, exposure, and recognition.",
    color: "from-amber-500 to-orange-500"
  }
];

export default function Program() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-5xl mx-auto space-y-8 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-6 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          The Journey
        </motion.div>
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
          Program <span className="text-gradient">Structure</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          A visual 3-phase timeline designed to build research thinking from the ground up.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent -translate-x-1/2" />

          <div className="space-y-48">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                )}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="glass-card p-12 rounded-[52px] space-y-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                    <div className={cn("absolute top-0 left-0 w-full h-2 bg-gradient-to-r", phase.color)} />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-8xl font-black text-white/5 tracking-tighter">
                        {phase.number}
                      </span>
                      <div className="flex flex-col items-end gap-3">
                        <div className="flex items-center gap-2 text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] bg-white/5 px-5 py-2 rounded-full border border-white/10">
                          <Calendar size={14} />
                          {phase.duration}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-5">
                          <MapPin size={14} />
                          {phase.location}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                      Phase {phase.number} <br />
                      <span className="text-slate-400">{phase.title}</span>
                    </h3>

                    <div className="space-y-8">
                      <h4 className="text-lg font-bold text-white flex items-center gap-3">
                        <Target size={24} className="text-brand-primary" />
                        What Students Learn:
                      </h4>
                      <ul className="grid grid-cols-1 gap-5">
                        {phase.learn.map((item, i) => (
                          <li key={i} className="flex gap-5 text-slate-400 group/item">
                            <CheckCircle2 size={24} className="text-brand-primary shrink-0 transition-transform group-hover/item:scale-110" />
                            <span className="font-bold text-lg leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-10 border-t border-white/5">
                      <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-4">Core Outcome</h4>
                      <p className="text-2xl text-white font-black italic leading-tight tracking-tight">"{phase.outcome}"</p>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex shrink-0 w-20 h-20 rounded-3xl bg-slate-900 border border-white/10 items-center justify-center z-10 shadow-2xl group-hover:scale-110 transition-transform relative">
                  <div className={cn("absolute inset-2 rounded-2xl opacity-20 blur-lg", phase.color.replace('from-', 'bg-'))} />
                  <div className={cn("w-5 h-5 rounded-full shadow-2xl relative z-10", phase.color.replace('from-', 'bg-'))} />
                </div>

                {/* Image/Visual Placeholder */}
                <div className="flex-1 w-full relative group">
                  <div className="absolute -inset-6 bg-white/5 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative aspect-[4/3] rounded-[52px] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={`https://picsum.photos/seed/phase-saas-${index}/1200/900`} 
                      alt={phase.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                       <div className="glass-card px-6 py-3 rounded-2xl border-white/20 inline-block">
                          <span className="text-white font-black text-sm uppercase tracking-[0.2em]">Phase {phase.number} Visual</span>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center">
        <div className="max-w-5xl mx-auto glass-card p-16 md:p-32 rounded-[80px] space-y-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -mr-48 -mt-48" />
          <h2 className="text-6xl font-black text-white tracking-tighter leading-[0.9]">A Journey Beyond <br /> the Classroom</h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The Learning Marathon is more than a program; it's a transformation in how students perceive and interact with knowledge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
            <button className="btn-primary text-2xl px-16 py-8 rounded-[32px]">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
