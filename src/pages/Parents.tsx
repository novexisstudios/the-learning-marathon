import { motion } from 'motion/react';
import { Heart, ShieldCheck, Zap, BookOpen, XCircle, CheckCircle, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Parents() {
  return (
    <div className="relative overflow-hidden bg-bg-light">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px] -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-4xl mx-auto space-y-6 pt-32">
        <div className="inline-block px-4 py-1.5 border-b-2 border-brand-secondary text-brand-primary text-[11px] font-bold uppercase tracking-widest mb-2 bg-brand-secondary/10">
          For Families
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
          For <span className="text-brand-primary">Parents</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Empowering your child with the skills to think, research, and excel independently.
        </p>
      </section>

      {/* What it is/isn't */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-lg shadow-sm border border-red-200 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                <XCircle size={24} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">The Program is NOT:</h2>
            </div>
            <ul className="space-y-6">
              {[
                { title: "An Exam", desc: "There is no pressure of marks or competitive ranking." },
                { title: "An Olympiad", desc: "It's not about speed-solving or memorizing facts." },
                { title: "Coaching", desc: "We don't provide 'shortcuts' to higher marks." }
              ].map((item, i) => (
                <li key={i}>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-sm border border-brand-primary/20 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                <CheckCircle size={24} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">The Program IS:</h2>
            </div>
            <ul className="space-y-6">
              {[
                { title: "A Learning Journey", desc: "A structured path to discover the joy of discovery." },
                { title: "Focused on Thinking", desc: "Developing the ability to ask 'Why' and 'How'." },
                { title: "Designed to Reduce Fear", desc: "Making textbooks approachable and interesting." }
              ].map((item, i) => (
                <li key={i}>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Helps Your Child */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">How It Helps Your Child</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Deeper Understanding",
                desc: "Moves beyond rote learning to genuine comprehension of subjects."
              },
              {
                icon: ShieldCheck,
                title: "Confidence & Articulation",
                desc: "Equips them with the ability to express complex ideas clearly."
              },
              {
                icon: Zap,
                title: "Independent Thinking",
                desc: "Fosters self-reliance in finding answers and solving problems."
              },
              {
                icon: Heart,
                title: "Reduced Academic Stress",
                desc: "Shifts the focus from grades to the joyful process of discovery."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-xl border border-slate-200">
                <div className="shrink-0 w-12 h-12 bg-brand-secondary/20 text-brand-secondary rounded-lg flex items-center justify-center border border-brand-secondary/30">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding relative overflow-hidden bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10 py-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-white border border-brand-secondary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.5em] shadow-sm">
            Parent Feedback
          </div>
          <Quote className="mx-auto text-brand-secondary/30" size={80} />
          <blockquote className="text-4xl md:text-6xl font-black text-slate-800 leading-[1.2] tracking-tight italic px-4">
            "My daughter used to struggle with reading her science chapters. After the Learning Marathon, she doesn't just read; she investigates. Her curiosity has returned."
          </blockquote>
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-white border border-slate-200 p-1 shadow-sm">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-brand-secondary font-bold text-2xl">S</div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-slate-900 tracking-tight">Mrs. Sharma</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] mt-2">Parent of Grade 8 Student</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
