import { motion } from 'motion/react';
import { School, Award, Users, Lightbulb, CheckCircle2, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Schools() {
  return (
    <div className="relative overflow-hidden bg-bg-light">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px] -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-4xl mx-auto space-y-6 pt-32">
        <div className="inline-block px-4 py-1.5 border-b-2 border-brand-secondary text-brand-primary text-[11px] font-bold uppercase tracking-widest mb-2 bg-brand-secondary/10">
          Institutional Partnership
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
          For <span className="text-brand-primary">Schools</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Building a culture of research and deep thinking within your institution.
        </p>
      </section>

      {/* Why Schools Join */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Why Schools Join</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: School,
                title: "Aligns with NEP 2020",
                desc: "Directly implements the inquiry-based and research-oriented learning goals of the New Education Policy."
              },
              {
                icon: Lightbulb,
                title: "Research Culture",
                desc: "Transforms the school environment from exam-centric to research-centric, fostering curiosity."
              },
              {
                icon: Brain,
                title: "Student Thinking",
                desc: "Significantly improves students' ability to analyze, synthesize, and evaluate information."
              },
              {
                icon: Users,
                title: "Teacher Pedagogy",
                desc: "Strengthens teaching methods by providing teachers with tools to facilitate research thinking."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex gap-6 items-start"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">
          <div className="space-y-8">
            <div className="pb-6 border-b-2 border-slate-200">
              <span className="text-brand-primary text-[11px] font-bold uppercase tracking-widest bg-brand-secondary/10 px-2 py-1">The Advantage</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mt-2">Benefits for Schools</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Partnering with The Learning Marathon provides your school with a distinct academic edge and professional recognition.
            </p>
            <ul className="space-y-6 pt-4">
              {[
                {
                  title: "Recognition as a Research-Ready School",
                  desc: "A prestigious certification that highlights your school's commitment to advanced learning methodologies."
                },
                {
                  title: "Teacher Training & Certification",
                  desc: "Educators receive specialized training in research pedagogy and mentoring."
                },
                {
                  title: "National Exposure for Students",
                  desc: "Top-performing students earn the opportunity to represent the school at the national MBitious Carnival."
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center border border-brand-secondary/30 mt-0.5">
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="School recognition" 
                className="rounded-lg w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-primary text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">Bring The Learning <br /> Marathon to Your School</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can integrate this research-driven program into your academic framework.
          </p>
          <div className="pt-6">
            <button className="bg-white text-brand-primary px-10 py-3 rounded-md uppercase tracking-wider font-semibold hover:bg-slate-50 transition-colors">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
