import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const stories = [
  {
    name: 'Student A',
    role: 'Class 8',
    initial: 'A',
    content:
      'The reading habits I developed here transformed how I approach my science projects. I no longer rely solely on my textbooks.',
  },
  {
    name: 'Student B',
    role: 'Class 9',
    initial: 'B',
    content:
      'Before the Marathon, I was afraid of speaking up because I thought my thoughts were "wrong". Now I know how to structure my research.',
  },
  {
    name: 'Student C',
    role: 'Class 7',
    initial: 'C',
    content:
      'I started reading books outside my syllabus. The deep reading phase opened my eyes to independent thinking.',
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-bg-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[2px] bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Impact Stories</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-5">
              Words from the Marathon
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              See how the Learning Marathon is cultivating deep thinking and transforming students.
            </p>
          </motion.div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card p-8 bg-white flex flex-col relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-9 h-9 text-brand-secondary/35 absolute top-6 right-6" />

              <p className="text-slate-700 italic font-medium leading-relaxed flex-1 relative z-10">
                "{story.content}"
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center text-brand-primary font-black text-base shrink-0">
                  {story.initial}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm">{story.name}</h4>
                  <p className="text-brand-primary text-xs font-bold uppercase tracking-wide mt-0.5">{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
