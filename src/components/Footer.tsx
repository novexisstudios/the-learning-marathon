import { Link } from 'react-router-dom';
import { BookOpen, Mail, Globe, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-light border-t border-slate-200 pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <div className="space-y-10">
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src="/logo.png" 
              alt="The Learning Marathon Logo" 
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </Link>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            Restoring depth, thinking, and curiosity in education through research-driven journeys.
          </p>
          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:bg-brand-primary/5 hover:border-brand-primary/20 transition-all duration-300 shadow-sm">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.4em] mb-10">Program</h4>
          <ul className="space-y-5 text-slate-600 font-bold text-sm">
            <li><Link to="/about" className="hover:text-brand-primary transition-colors inline-block">Philosophy</Link></li>
            <li><Link to="/program" className="hover:text-brand-primary transition-colors inline-block">Structure</Link></li>
            <li><Link to="/event" className="hover:text-brand-primary transition-colors inline-block">MBitious Carnival</Link></li>
            <li><Link to="/faq" className="hover:text-brand-primary transition-colors inline-block">Common Questions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.4em] mb-10">Partners</h4>
          <ul className="space-y-5 text-slate-600 font-bold text-sm">
            <li><Link to="/schools" className="hover:text-brand-primary transition-colors inline-block">For Schools</Link></li>
            <li><Link to="/parents" className="hover:text-brand-primary transition-colors inline-block">For Parents</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors inline-block">Collaboration</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.4em] mb-10">Contact</h4>
          <ul className="space-y-8 text-slate-600">
            <li className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/5 group-hover:border-brand-primary/20 transition-all duration-300 shadow-sm">
                <Mail size={20} />
              </div>
              <a href="mailto:school@thelearningmarathon.in" className="text-sm font-bold tracking-tight hover:text-brand-primary transition-colors">school@thelearningmarathon.in</a>
            </li>
            <li className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary/5 group-hover:border-brand-secondary/20 transition-all duration-300 shadow-sm">
                <Globe size={20} />
              </div>
              <a href="https://www.thelearningmarathon.in" target="_blank" rel="noreferrer" className="text-sm font-bold tracking-tight hover:text-brand-secondary transition-colors">thelearningmarathon.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-500 uppercase tracking-[0.4em] font-bold">
        <p>© 2026 The Learning Marathon.</p>
        <div className="flex items-center gap-4">
          <span className="w-8 h-px bg-slate-200" />
          <p className="text-brand-primary">A ReadFirst Initiative</p>
          <span className="w-8 h-px bg-slate-200" />
        </div>
      </div>
    </footer>
  );
}
