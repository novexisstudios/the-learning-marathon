import { motion } from 'motion/react';
import { MapPin, Calendar, Users, Award, Presentation, Coffee, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Event() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[150px] -z-10" />

      {/* Hero */}
      <section className="section-padding text-center max-w-5xl mx-auto space-y-10 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          <Sparkles size={14} className="animate-pulse" />
          The Grand Finale
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]"
        >
          MBitious <br />
          <span className="text-gradient italic">Carnival</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          A national academic event where curiosity meets recognition. Students from across the country gather to showcase their research and celebrate the joy of learning.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 pt-10"
        >
          <div className="flex items-center gap-6 glass-card px-10 py-5 rounded-[32px] border-white/10 group hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
              <MapPin size={24} />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">Pune, Maharashtra</span>
          </div>
          <div className="flex items-center gap-6 glass-card px-10 py-5 rounded-[32px] border-white/10 group hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
              <Calendar size={24} />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">Annual Event</span>
          </div>
        </motion.div>
      </section>

      {/* Event Schedule */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Day 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-brand-primary text-white rounded-[32px] flex items-center justify-center text-5xl font-black shadow-2xl shadow-brand-primary/20">
                  01
                </div>
                <div>
                  <h2 className="text-5xl font-black text-white tracking-tighter">Day One</h2>
                  <p className="text-brand-primary font-black uppercase tracking-[0.5em] text-[10px] mt-2">Exploration & Interaction</p>
                </div>
              </div>
              
              <div className="space-y-8">
                {[
                  { icon: Sparkles, title: "Learning Challenges", desc: "Interactive sessions that test conceptual depth and problem-solving.", color: "from-blue-500 to-indigo-500" },
                  { icon: Presentation, title: "Research Activities", desc: "Hands-on workshops and collaborative research tasks.", color: "from-purple-500 to-pink-500" },
                  { icon: Users, title: "Peer Interaction", desc: "Networking with like-minded students from diverse backgrounds.", color: "from-emerald-500 to-teal-500" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 p-10 rounded-[48px] glass-card border-white/5 group hover:bg-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                    <div className={cn("absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-20", item.color)} />
                    <div className={cn("shrink-0 w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", item.color)}>
                      <item.icon size={36} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-3xl font-black text-white tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-brand-secondary text-white rounded-[32px] flex items-center justify-center text-5xl font-black shadow-2xl shadow-brand-secondary/20">
                  02
                </div>
                <div>
                  <h2 className="text-5xl font-black text-white tracking-tighter">Day Two</h2>
                  <p className="text-brand-secondary font-black uppercase tracking-[0.5em] text-[10px] mt-2">Presentation & Recognition</p>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Presentation, title: "Student Presentations", desc: "Students present their 30-day research findings to a panel of educators.", color: "from-amber-500 to-orange-500" },
                  { icon: Coffee, title: "Educator Conference", desc: "A parallel track for teachers and principals to discuss pedagogy.", color: "from-rose-500 to-red-500" },
                  { icon: Award, title: "Recognition Ceremony", desc: "Celebrating the journey and awarding research excellence.", color: "from-brand-primary to-brand-secondary" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 p-10 rounded-[48px] glass-card border-white/5 group hover:bg-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                    <div className={cn("absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-20", item.color)} />
                    <div className={cn("shrink-0 w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", item.color)}>
                      <item.icon size={36} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-3xl font-black text-white tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-8">
            <div className="inline-block px-6 py-2 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em]">
              Gallery
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter">Moments of Discovery</h2>
            <div className="w-48 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[80px] overflow-hidden shadow-2xl border border-white/10 group relative"
            >
              <img src="https://picsum.photos/seed/event-saas-1/1200/1200" alt="Event moment" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[3/4] md:mt-24 rounded-[80px] overflow-hidden shadow-2xl border border-white/10 group relative"
            >
              <img src="https://picsum.photos/seed/event-saas-2/1200/1600" alt="Event moment" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square rounded-[80px] overflow-hidden shadow-2xl border border-white/10 group relative"
            >
              <img src="https://picsum.photos/seed/event-saas-3/1200/1200" alt="Event moment" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto glass-card p-20 md:p-32 rounded-[80px] text-center space-y-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -mr-48 -mt-48" />
          <h2 className="text-6xl font-black text-white tracking-tighter leading-[0.9]">Experience the <br /> <span className="text-gradient">Carnival</span></h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The MBitious Carnival is the culmination of a year-long journey of thinking and research. Be part of the national celebration of academic excellence.
          </p>
          <div className="pt-10">
            <button className="btn-primary text-2xl px-16 py-8 rounded-[32px] shadow-2xl">
              Register for Next Event
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
