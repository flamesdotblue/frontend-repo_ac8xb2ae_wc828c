import { GraduationCap, Award, Clock, ShieldCheck, Layers3 } from 'lucide-react';

const items = [
  {
    icon: GraduationCap,
    title: 'Adaptive learning paths',
    desc: 'Personalized course sequencing powered by progress and proficiency.',
  },
  {
    icon: Award,
    title: 'Industry certifications',
    desc: 'Earn verifiable badges and certificates recognized by employers.',
  },
  {
    icon: Clock,
    title: 'Flexible & modular',
    desc: 'Bite-sized lessons, projects, and assessments that fit your schedule.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    desc: 'Privacy-first architecture with SSO, RBAC, and audit logging.',
  },
  {
    icon: Layers3,
    title: 'Seamless integrations',
    desc: 'Connect with Slack, GitHub, Google, and more to streamline workflows.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why learners choose AetherLearn</h2>
          <p className="mt-3 text-white/70">
            Everything you need to run a modern, engaging, and scalable learning experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <FeatureCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-cyan-400/30 transition">
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-2xl"></div>
      </div>
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 text-white shadow-lg shadow-blue-600/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <button className="mt-4 text-sm text-cyan-300 hover:text-cyan-200">Learn more →</button>
    </div>
  );
}
