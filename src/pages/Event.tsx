import { motion } from 'motion/react';
import { MapPin, Calendar, Users, Award, Presentation, Coffee, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Event() {
  return (
    <div className="relative overflow-hidden bg-bg-light">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px] -z-10" />

      {/* Hero */}
      <section className="section-padding text-center max-w-4xl mx-auto space-y-8 pt-32">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border-b-2 border-brand-secondary text-brand-primary text-[11px] font-bold uppercase tracking-widest mb-2 bg-brand-secondary/10">
          <Sparkles size={14} className="text-brand-secondary" />
          The Grand Finale
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
          MBitious <br />
          <span className="text-brand-primary">Carnival</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A national academic event where curiosity meets recognition. Students from across the country gather to showcase their research and celebrate the joy of learning.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg border border-slate-200 shadow-sm">
            <MapPin size={20} className="text-brand-primary" />
            <span className="font-semibold text-slate-800">Pune, Maharashtra</span>
          </div>
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg border border-slate-200 shadow-sm">
            <Calendar size={20} className="text-brand-primary" />
            <span className="font-semibold text-slate-800">Annual Event</span>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Day 1 */}
            <div className="space-y-8">
              <div className="pb-4 border-b-2 border-slate-200">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Day One</h2>
                <p className="text-brand-primary font-bold uppercase tracking-wider text-[11px] mt-2">Exploration & Interaction</p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Sparkles, title: "Learning Challenges", desc: "Interactive sessions that test conceptual depth and problem-solving." },
                  { icon: Presentation, title: "Research Activities", desc: "Hands-on workshops and collaborative research tasks." },
                  { icon: Users, title: "Peer Interaction", desc: "Networking with like-minded students from diverse backgrounds." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-primary shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="space-y-8">
              <div className="pb-4 border-b-2 border-slate-200">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Day Two</h2>
                <p className="text-brand-primary font-bold uppercase tracking-wider text-[11px] mt-2">Recognition & Celebration</p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Award, title: "Grand Finale", desc: "Final presentations and evaluation by esteemed educators." },
                  { icon: Coffee, title: "Educator Symposium", desc: "A parallel track for teachers and principals to discuss pedagogy." },
                  { icon: Users, title: "Awards Ceremony", desc: "Recognizing outstanding research effort and deep thinking." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-secondary shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Glimpses of the Carnival</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-200 relative">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Event moment" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <div className="aspect-square md:translate-y-6 rounded-xl overflow-hidden shadow-sm border border-slate-200 relative">
              <img src="https://images.unsplash.com/photo-1515165562839-978bbff1827e?q=80&w=2070&auto=format&fit=crop" alt="Event moment" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-200 relative">
              <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2071&auto=format&fit=crop" alt="Event moment" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-primary text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">Experience the <br /> Carnival</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every learning marathon culminates in this grand gathering. Talk to us about bringing your students to the next MBitious Carnival.
          </p>
          <div className="pt-6">
            <button className="bg-white text-brand-primary px-10 py-3 rounded-md uppercase tracking-wider font-semibold hover:bg-slate-50 transition-colors">
              Contact Organizers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
