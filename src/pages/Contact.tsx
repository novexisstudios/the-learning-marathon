import { motion } from 'motion/react';
import { Mail, Globe, MapPin, Send, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
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
          Connect With Us
        </motion.div>
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Partner with us to build deeper learning and research culture in your school.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-10">
              <h2 className="text-5xl font-black text-white tracking-tighter">Contact Information</h2>
              <div className="space-y-10">
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
                    className="flex items-start gap-8 group"
                  >
                    <div className={cn("shrink-0 w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", item.color)}>
                      <item.icon size={36} />
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.5em]">{item.title}</p>
                      <p className="text-3xl font-black text-white tracking-tight">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-[60px] text-white space-y-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 rounded-full -mr-24 -mt-24 transition-all group-hover:scale-150" />
              <h3 className="text-4xl font-black text-white tracking-tighter">Partner With Us</h3>
              <p className="text-xl text-slate-400 leading-relaxed">
                We are actively looking for schools and educators who share our vision of restoring depth in education. Let's start a conversation.
              </p>
              <div className="flex items-center gap-6 text-brand-primary font-black uppercase tracking-[0.4em] text-[10px]">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
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
            className="glass-card p-12 md:p-16 rounded-[60px] relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-[120px] -mr-40 -mt-40" />
            <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-lg font-medium"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@school.com"
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-lg font-medium"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">School / Organization</label>
                <input 
                  type="text" 
                  placeholder="Academic Excellence International"
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-lg font-medium"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none text-lg font-medium"
                />
              </div>

              <button className="btn-primary w-full text-2xl py-6 flex items-center justify-center gap-6 group rounded-[32px] shadow-2xl">
                Send Message
                <Send size={28} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
