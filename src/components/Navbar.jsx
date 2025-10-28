import { useState } from 'react';
import { BookOpen, Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Courses', href: '#courses' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 text-white shadow-lg shadow-blue-600/20">
              <BookOpen className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">AetherLearn</p>
              <p className="text-xs text-white/60">Futuristic LMS</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-white/80 hover:text-white">Sign in</a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
            >
              <Rocket className="h-4 w-4" /> Get started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile */}
        {open && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 flex items-center gap-3">
                <a href="#" className="text-sm text-white/80 hover:text-white">Sign in</a>
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
                >
                  <Rocket className="h-4 w-4" /> Get started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
