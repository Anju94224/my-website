import { motion } from 'framer-motion';

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    color: "bg-purple-100",
    github: "https://github.com/Anju94224/portfolio-website",
    demo: "https://portfolio-website-git-main-amna-noor-s-projects.vercel.app",
  },
  {
    title: "Todo App",
    description: "A full-stack todo app with create, update and delete functionality.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "bg-green-100",
    github: "https://github.com/Anju94224",
    demo: "#",
  },
  {
    title: "Weather App",
    description: "A weather app that fetches real-time data from an API.",
    tags: ["JavaScript", "API", "CSS"],
    color: "bg-sky-100",
    github: "https://github.com/Anju94224",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-20 px-4 md:px-8">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-600">Projects</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">My Projects</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${project.color} h-44`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-purple-50 dark:bg-purple-900/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 dark:bg-gray-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 sm:w-auto">Live Demo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}