import { motion } from 'motion/react';
import { School, Award, Users, Lightbulb, CheckCircle2, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Schools() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[150px] -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-5xl mx-auto space-y-8 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-6 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          Institutional Partnership
        </motion.div>
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
          For <span className="text-gradient">Schools</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Building a culture of research and deep thinking within your institution.
        </p>
      </section>

      {/* Why Schools Join */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Why Schools Join</h2>
            <div className="w-48 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: School,
                title: "Aligns with NEP 2020",
                desc: "Directly implements the inquiry-based and research-oriented learning goals of the New Education Policy.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Lightbulb,
                title: "Research Culture",
                desc: "Transforms the school environment from exam-centric to research-centric, fostering curiosity.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Brain,
                title: "Student Thinking",
                desc: "Significantly improves students' ability to analyze, synthesize, and evaluate information.",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: Users,
                title: "Teacher Pedagogy",
                desc: "Strengthens teaching methods by providing teachers with tools to facilitate research thinking.",
                color: "from-amber-500 to-orange-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-12 rounded-[48px] hover:border-white/20 transition-all group relative overflow-hidden"
              >
                <div className={cn("absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-20", item.color)} />
                <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl bg-gradient-to-br transition-transform group-hover:scale-110 group-hover:rotate-3", item.color)}>
                  <item.icon size={36} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-block px-6 py-2 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em]">
              The Advantage
            </div>
            <h2 className="text-6xl font-black text-white tracking-tighter leading-tight">Benefits for Schools</h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              Partnering with The Learning Marathon provides your school with a distinct academic edge and professional recognition.
            </p>
            <div className="space-y-8">
              {[
                {
                  title: "Recognition as a Research-Ready School",
                  desc: "A prestigious certification that highlights your school's commitment to advanced learning methodologies."
                },
                {
                  title: "Teacher Certification",
                  desc: "Professional development and certification for teachers in research facilitation and deep reading pedagogy."
                },
                {
                  title: "Academic Differentiation",
                  desc: "Stand out as an institution that values thinking and depth beyond standard marks and grades."
                }
              ].map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="shrink-0 w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xl">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white mb-3 tracking-tight">{benefit.title}</h4>
                    <p className="text-slate-400 text-lg leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-primary/20 rounded-[80px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative glass-card p-6 rounded-[80px] rotate-2 transition-transform duration-1000 group-hover:rotate-0">
              <img 
                src="https://picsum.photos/seed/school-saas/1200/1000" 
                alt="School recognition" 
                className="rounded-[60px] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent rounded-[60px]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto glass-card p-16 md:p-32 rounded-[80px] text-center space-y-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/10 to-transparent" />
          <h2 className="text-6xl font-black text-white tracking-tighter leading-[0.9]">Become a <br /> Partner School</h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join a network of forward-thinking institutions dedicated to restoring the joy of learning.
          </p>
          <div className="pt-8">
            <button className="btn-primary text-2xl px-16 py-8 rounded-[32px]">
              Schedule a Presentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
