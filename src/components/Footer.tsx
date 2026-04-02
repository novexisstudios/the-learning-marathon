import { Mail, Globe, Instagram, Linkedin, Twitter } from "lucide-react";

const programLinks = [
  { label: "Philosophy", href: "#about" },
  { label: "Program Structure", href: "#program" },
  { label: "Impact Stories", href: "#impact" },
  { label: "Sign Up", href: "#contact" },
];

const partnerLinks = [
  { label: "For Schools", href: "#schools" },
  { label: "For Parents", href: "#program" },
  { label: "Collaboration", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand column */}
        <div className="space-y-6 lg:col-span-1">
          <a href="#" className="flex items-center gap-3 group w-fit">
            <img
              src="/logo2.png"
              alt="The Learning Marathon Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
          <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-xs">
            Restoring depth, thinking, and curiosity in education through
            research-driven learning journeys.
          </p>
          <div className="flex gap-3">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:bg-brand-primary/5 hover:border-brand-primary/20 transition-all duration-200 shadow-sm"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Program links */}
        <div>
          <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.35em] mb-6">
            Program
          </h4>
          <ul className="space-y-3.5">
            {programLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-500 text-sm font-semibold hover:text-brand-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Partner links */}
        <div>
          <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.35em] mb-6">
            Partners
          </h4>
          <ul className="space-y-3.5">
            {partnerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-500 text-sm font-semibold hover:text-brand-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.35em] mb-6">
            Contact
          </h4>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/5 group-hover:border-brand-primary/20 transition-all duration-200 shadow-sm shrink-0">
                <Mail size={16} />
              </div>
              <a
                href="mailto:school@thelearningmarathon.in"
                className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors duration-200 break-all"
              >
                school@thelearningmarathon.in
              </a>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary/5 group-hover:border-brand-secondary/20 transition-all duration-200 shadow-sm shrink-0">
                <Globe size={16} />
              </div>
              <a
                href="https://www.thelearningmarathon.in"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-600 hover:text-brand-secondary transition-colors duration-200"
              >
                thelearningmarathon.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 uppercase tracking-[0.3em] font-bold">
        <p>© 2026 The Learning Marathon. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-slate-200" />
          <p className="text-brand-primary">A ReadFirst Initiative</p>
          <span className="w-6 h-px bg-slate-200" />
        </div>
      </div>
    </footer>
  );
}
