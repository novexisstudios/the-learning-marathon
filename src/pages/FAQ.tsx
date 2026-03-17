import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const faqs = [
  {
    category: "Parents",
    questions: [
      {
        q: "What is the Learning Marathon?",
        a: "The Learning Marathon is a research-driven educational program that helps students develop deep reading, critical thinking, and research skills through a structured 3-phase journey."
      },
      {
        q: "Is it exam based?",
        a: "No, it is not an exam or a competition. It is a learning journey focused on the process of discovery and thinking rather than scores or ranks."
      },
      {
        q: "How does it help my child in school exams?",
        a: "While we don't focus on exams, the skills built—like deep conceptual understanding and disciplined reading—naturally lead to better academic performance and reduced exam stress."
      }
    ]
  },
  {
    category: "Schools",
    questions: [
      {
        q: "Where is the program conducted?",
        a: "Phase 1 and 2 are conducted on the school campus and through daily guided engagement. Phase 3 is a national event held in Pune."
      },
      {
        q: "How does it align with NEP 2020?",
        a: "The program directly implements NEP 2020's focus on inquiry-based learning, critical thinking, and reducing the emphasis on rote memorization."
      },
      {
        q: "What is the role of teachers?",
        a: "Teachers act as facilitators. We provide them with professional development and certification to help them guide students through the research process."
      }
    ]
  },
  {
    category: "Students",
    questions: [
      {
        q: "How are students selected?",
        a: "Selection is based on curiosity and a willingness to learn rather than previous academic marks. We look for students who want to explore beyond the textbook."
      },
      {
        q: "What do I get at the end of the program?",
        a: "Students receive recognition for their research work, the opportunity to present at a national level in Pune, and most importantly, a lifelong skill of research thinking."
      }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Parents");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFaqs = faqs.find(f => f.category === activeCategory)?.questions || [];

  return (
    <div className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[150px] -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-5xl mx-auto space-y-8 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-6 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          Support Center
        </motion.div>
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
          Common <span className="text-gradient">Questions</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Everything you need to know about the Learning Marathon program.
        </p>
      </section>

      {/* FAQ Content */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {faqs.map((cat) => (
              <button
                key={cat.category}
                onClick={() => {
                  setActiveCategory(cat.category);
                  setOpenIndex(0);
                }}
                className={cn(
                  "px-12 py-5 rounded-[24px] text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 border",
                  activeCategory === cat.category
                    ? "bg-brand-primary text-white border-brand-primary shadow-[0_20px_40px_rgba(99,102,241,0.3)]"
                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {currentFaqs.map((faq, i) => (
                  <div
                    key={i}
                    className={cn(
                      "glass-card rounded-[40px] overflow-hidden transition-all duration-500",
                      openIndex === i ? "border-brand-primary/30 ring-1 ring-brand-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" : "border-white/5 hover:border-white/10"
                    )}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full p-10 text-left flex items-center justify-between gap-8 group"
                    >
                      <span className={cn(
                        "text-2xl md:text-3xl font-black tracking-tight transition-colors duration-500",
                        openIndex === i ? "text-brand-primary" : "text-white group-hover:text-brand-primary/80"
                      )}>
                        {faq.q}
                      </span>
                      <div className={cn(
                        "shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500",
                        openIndex === i ? "bg-brand-primary text-white rotate-180 shadow-lg" : "bg-white/5 text-slate-400"
                      )}>
                        <ChevronDown size={28} />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="px-10 pb-10 text-xl text-slate-400 leading-relaxed border-t border-white/5 pt-8">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Still have questions? */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 glass-card p-16 md:p-24 rounded-[80px] text-center space-y-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-[120px] -mr-40 -mt-40" />
            <div className="w-24 h-24 bg-brand-primary/10 rounded-3xl flex items-center justify-center text-brand-primary mx-auto shadow-2xl">
              <HelpCircle size={48} />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Still have questions?</h3>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">We're here to help you understand how the program can benefit your school or child.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <a href="mailto:school@thelearningmarathon.in" className="btn-primary text-xl px-16 py-6 rounded-[32px] shadow-2xl">
                Email Us
              </a>
              <Link to="/contact" className="text-white font-black uppercase tracking-[0.4em] text-[10px] hover:text-brand-primary transition-all hover:translate-x-2">
                Visit Contact Page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
