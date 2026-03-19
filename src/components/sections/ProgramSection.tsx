import { motion } from 'motion/react';
import { GraduationCap, Users, Building2, CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    title: 'For Students',
    icon: GraduationCap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    accent: 'bg-blue-600',
    features: [
      'Advanced reading confidence',
      'Independent thinking habits',
      'Reduced textbook fear',
      'Early research orientation',
      'National exposure',
    ],
  },
  {
    title: 'For Teachers',
    icon: Users,
    color: 'text-brand-primary',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    accent: 'bg-brand-primary',
    features: [
      '7-day deep training',
      'Certified Research Mentor',
      'Incentivised & recognized',
      'Observer-based pedagogy shift',
    ],
  },
  {
    title: 'For Schools',
    icon: Building2,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    accent: 'bg-brand-secondary',
    features: [
      'Recognition as Research-Ready School',
      'NEP 2020 alignment',
      'Long-term academic differentiation',
      'Transparent governance',
      'Audit-ready documentation',
    ],
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[2px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Program Architecture</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-5">
              This is not a theory.{' '}
              <span className="text-brand-primary">It is proof-backed.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              Every stakeholder benefits — students, teachers, and institutions alike.
            </p>
          </motion.div>
        </div>

        {/* Cards — "For Schools" card gets the anchor id here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              id={index === 2 ? 'schools' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`glass-card p-8 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${tier.borderColor}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${tier.bgColor}`}>
                <tier.icon className={`w-7 h-7 ${tier.color}`} />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-6">{tier.title}</h3>

              <ul className="space-y-3.5">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${tier.color}`} />
                    <span className="text-slate-600 font-medium text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
