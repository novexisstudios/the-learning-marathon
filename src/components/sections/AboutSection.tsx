import { motion } from 'motion/react';

const painPoints = [
  { title: 'Read', desc: 'without understanding' },
  { title: 'Memorize', desc: 'without questioning' },
  { title: 'Perform', desc: 'without thinking' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-bg-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">The Problem</span>

          <h2 className="text-4xl lg:text-5xl font-black text-brand-primary mb-6 leading-tight">
            Schools are not failing.{' '}
            <br />
            <span className="text-slate-900">Learning systems are.</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium mb-14 max-w-3xl mx-auto">
            Students struggle not because they lack intelligence, but because they were never trained in <em>how</em> to learn.
          </p>

          {/* Pain-point cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card p-8 bg-white text-left hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">They</p>
                <h3 className="text-2xl font-black text-slate-900 mb-1">{item.title}</h3>
                <p className="text-brand-primary font-semibold text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Manifesto callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-brand-primary text-white p-10 md:p-14 rounded-3xl shadow-xl text-center"
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-white/85">
              The Learning Marathon corrects this drift. It introduces a deliberate pause in speed-driven education.
            </p>
            <p className="text-2xl md:text-3xl font-black text-brand-secondary leading-tight">
              Because Learning is not a race.
              <br />
              <span className="text-white/90 font-semibold text-xl md:text-2xl">It is a lifelong marathon.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
