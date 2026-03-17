import { motion } from 'motion/react';
import { Mail, Globe, MapPin, Send, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
  return (
    <div className="relative overflow-hidden bg-bg-light">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px] -z-10" />

      {/* Header */}
      <section className="section-padding text-center max-w-5xl mx-auto space-y-8 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-6 py-2 rounded-2xl bg-white border border-slate-200 text-brand-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 shadow-sm"
        >
          Connect With Us
        </motion.div>
        <h1 className="text-7xl md:text-9xl font-black text-brand-primary tracking-tighter leading-[0.85]">
          Get in <span className="text-brand-secondary">Touch</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Partner with us to build deeper learning and research culture in your school.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-10">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email Us", value: "school@thelearningmarathon.in", color: "from-blue-500 to-indigo-500" },
                  { icon: Globe, title: "Visit Website", value: "thelearningmarathon.in", color: "from-purple-500 to-pink-500" },
                  { icon: MapPin, title: "Headquarters", value: "Pune, Maharashtra, India", color: "from-emerald-500 to-teal-500" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-[32px] shadow-sm group hover:shadow-md transition-all"
                  >
                    <div className={cn("shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-sm bg-gradient-to-br transition-transform duration-500 group-hover:scale-110", item.color)}>
                      <item.icon size={28} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">{item.title}</p>
                      <p className="text-xl font-bold text-slate-800 tracking-tight">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-primary p-12 rounded-[40px] text-white space-y-10 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 transition-all group-hover:scale-150" />
              <h3 className="text-4xl font-black text-white tracking-tighter">Partner With Us</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                We are actively looking for schools and educators who share our vision of restoring depth in education. Let's start a conversation.
              </p>
              <div className="flex items-center gap-6 text-white font-bold uppercase tracking-[0.4em] text-[10px]">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Phone size={24} />
                </div>
                <span>Request a callback</span>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 rounded-[40px] relative overflow-hidden shadow-lg border border-slate-200"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-[120px] -mr-40 -mt-40" />
            <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-8 py-5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-lg"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@school.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-8 py-5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-lg"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-2">School / Organization</label>
                <input 
                  type="text" 
                  placeholder="Academic Excellence International"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-8 py-5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-lg"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-8 py-5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none text-lg"
                />
              </div>

              <button className="btn-primary w-full text-xl py-6 flex items-center justify-center gap-4 group rounded-xl shadow-sm">
                Send Message
                <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
