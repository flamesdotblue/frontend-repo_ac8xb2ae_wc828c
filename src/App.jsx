import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CourseShowcase from './components/CourseShowcase';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">AetherLearn</p>
            <p className="mt-2 text-sm text-white/70">
              A futuristic LMS blending immersive 3D, AI assistance, and clean design.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/80">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#courses" className="hover:text-white">Courses</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/80">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/80">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} AetherLearn, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <main>
        <Features />
        <CourseShowcase />
      </main>
      <Footer />
    </div>
  );
}
