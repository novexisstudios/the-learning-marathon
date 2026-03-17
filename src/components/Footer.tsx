import { Link } from 'react-router-dom';
import { BookOpen, Mail, Globe, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <div className="space-y-10">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500">
              <BookOpen size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white leading-none">
                Learning Marathon
              </span>
              <span className="text-[8px] uppercase tracking-[0.5em] text-brand-primary font-black mt-1">
                ReadFirst Initiative
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            Restoring depth, thinking, and curiosity in education through research-driven journeys.
          </p>
          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-500 shadow-lg">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10">Program</h4>
          <ul className="space-y-5 text-slate-400 font-bold text-sm">
            <li><Link to="/about" className="hover:text-brand-primary transition-all hover:translate-x-2 inline-block">Philosophy</Link></li>
            <li><Link to="/program" className="hover:text-brand-primary transition-all hover:translate-x-2 inline-block">Structure</Link></li>
            <li><Link to="/event" className="hover:text-brand-primary transition-all hover:translate-x-2 inline-block">MBitious Carnival</Link></li>
            <li><Link to="/faq" className="hover:text-brand-primary transition-all hover:translate-x-2 inline-block">Common Questions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10">Partners</h4>
          <ul className="space-y-5 text-slate-400 font-bold text-sm">
            <li><Link to="/schools" className="hover:text-brand-primary transition-all hover:translate-x-2 inline-block">For Schools</Link></li>
            <li><Link to="/parents" className="hover:text-brand-primary transition-all hover:translate-x-2 inline-block">For Parents</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-all hover:translate-x-2 inline-block">Collaboration</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10">Contact</h4>
          <ul className="space-y-8 text-slate-400">
            <li className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-lg">
                <Mail size={20} />
              </div>
              <a href="mailto:school@thelearningmarathon.in" className="text-sm font-bold tracking-tight hover:text-white transition-colors">school@thelearningmarathon.in</a>
            </li>
            <li className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-lg">
                <Globe size={20} />
              </div>
              <a href="https://www.thelearningmarathon.in" target="_blank" rel="noreferrer" className="text-sm font-bold tracking-tight hover:text-white transition-colors">thelearningmarathon.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black">
        <p>© 2026 The Learning Marathon.</p>
        <div className="flex items-center gap-4">
          <span className="w-8 h-px bg-white/10" />
          <p className="text-brand-primary">A ReadFirst Initiative</p>
          <span className="w-8 h-px bg-white/10" />
        </div>
      </div>
    </footer>
  );
}
