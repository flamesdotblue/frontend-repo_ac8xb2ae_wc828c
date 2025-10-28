import Spline from '@splinetool/react-spline';
import { Star, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays - do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Interactive • Futuristic • Education
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Learn without limits on a platform built for the future
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg">
            AetherLearn blends immersive 3D visuals, AI-powered guidance, and a
            clean learning workflow so you can focus on growing skills—not
            navigating tools.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
            >
              Start learning now
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white/90 ring-1 ring-inset ring-white/15 hover:bg-white/5 transition"
            >
              Explore courses
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <Stat icon={<Star className="h-4 w-4" />} label="Average rating" value="4.9/5" />
            <Stat icon={<Users className="h-4 w-4" />} label="Learners joined" value="120k+" />
            <Stat icon={<Shield className="h-4 w-4" />} label="Certified tracks" value="45+" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 text-white shadow-lg shadow-blue-600/20">
        {icon}
      </span>
      <div>
        <p className="text-xs text-white/60">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}
