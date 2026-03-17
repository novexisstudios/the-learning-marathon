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
    color: "bg-brand-primary"
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
    color: "bg-brand-primary"
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
    color: "bg-brand-secondary"
  }
];

export default function Program() {
  return (
    <div className="relative overflow-hidden bg-bg-light">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-4xl mx-auto space-y-6 pt-32">
        <div className="inline-block px-4 py-1.5 border-b-2 border-brand-primary text-brand-primary text-[11px] font-bold uppercase tracking-widest mb-4">
          The Journey
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
          Program <span className="text-brand-primary">Structure</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          A structured, three-phase framework designed to build deep research thinking from the ground up.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
              >
                {/* Phase Number & Meta */}
                <div className="md:col-span-3 space-y-4">
                  <div className="text-5xl font-black text-brand-primary/20 leading-none">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-slate-400" />
                        <span>{phase.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400" />
                        <span>{phase.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="md:col-span-9 bg-slate-50 border border-slate-200 p-8 rounded-xl shadow-sm">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                        <Target size={16} className="text-brand-primary" />
                        Key Objectives
                      </h4>
                      <ul className="space-y-3">
                        {phase.learn.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className={cn("w-1.5 h-1.5 rounded-full mt-2 shrink-0", phase.color === "bg-brand-secondary" ? "bg-brand-secondary" : "bg-brand-primary")} />
                            <span className="text-slate-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6 border-t border-slate-200">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 size={16} className={phase.color === "bg-brand-secondary" ? "text-brand-secondary" : "text-brand-primary"} />
                        Outcome
                      </h4>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {phase.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Ready to enroll your school?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Contact us to understand how this 3-phase structure fits into your academic calendar.
          </p>
          <div className="pt-6">
            <button className="btn-primary px-10 py-3 rounded-md uppercase tracking-wider font-semibold text-sm">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
