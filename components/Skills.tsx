'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML", icon: "🌐", level: 90 },
  { name: "CSS", icon: "🎨", level: 85 },
  { name: "JavaScript", icon: "⚡", level: 80 },
  { name: "React", icon: "⚛️", level: 75 },
  { name: "Next.js", icon: "🔺", level: 70 },
  { name: "Tailwind CSS", icon: "💨", level: 80 },
  { name: "Node.js", icon: "🟢", level: 70 },
  { name: "MongoDB", icon: "🍃", level: 65 },
  { name: "Git", icon: "📦", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 dark:bg-slate-900 py-20 px-4 md:px-8">
      <motion.div className="mx-auto max-w-6xl" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-600">Skills</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">My Skills</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="rounded-3xl bg-white dark:bg-gray-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-2xl">{skill.icon}</div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{skill.name}</p>
                  <p className="text-sm text-slate-500 dark:text-gray-400">{skill.level}% proficiency</p>
                </div>
              </div>
              <div className="rounded-full bg-slate-100 dark:bg-gray-700 h-3 overflow-hidden">
                <div className="h-full rounded-full bg-purple-600 transition-all duration-500" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}