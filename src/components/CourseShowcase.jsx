import { BookOpen, Play, Clock, Users } from 'lucide-react';

const courses = [
  {
    title: 'Foundations of AI & Machine Learning',
    level: 'Beginner • 12h',
    students: '32k',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Modern Web Development with React',
    level: 'Intermediate • 18h',
    students: '45k',
    color: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'Cloud & DevOps Essentials',
    level: 'Beginner • 10h',
    students: '21k',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function CourseShowcase() {
  return (
    <section id="courses" className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Trending learning paths</h2>
          <p className="mt-3 text-white/70">Curated programs with projects, mentorship, and certifications.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>

        <div id="get-started" className="mt-12 flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
          >
            <Play className="h-4 w-4" /> Start a free trial
          </a>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ title, level, students, color }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
      <div className={`h-28 w-full bg-gradient-to-r ${color}`}></div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-white/70">
          <Clock className="h-4 w-4" /> {level}
          <span className="mx-2 h-1 w-1 rounded-full bg-white/20"></span>
          <Users className="h-4 w-4" /> {students} learners
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>
        <div className="mt-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-sm text-white/70">
            <BookOpen className="h-4 w-4" /> 12 modules
          </div>
          <button className="text-sm text-cyan-300 hover:text-cyan-200">View details →</button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-white/5 blur-2xl"></div>
      </div>
    </article>
  );
}
