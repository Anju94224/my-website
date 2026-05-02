import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-slate-900 py-20 px-4 md:px-8">
      <motion.div
        className="mx-auto max-w-6xl rounded-[2rem] bg-white dark:bg-gray-800 p-8 shadow-xl hover:scale-105 hover:shadow-xl transition-all duration-300 sm:p-10 md:flex md:flex-row md:items-center md:gap-10 lg:p-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-8 flex items-center justify-center rounded-3xl bg-slate-100 dark:bg-gray-700 p-8 text-slate-500 dark:text-gray-400 shadow-inner sm:p-10 md:mb-0 md:w-1/2">
          <div className="flex h-72 w-full max-w-sm items-center justify-center rounded-3xl bg-slate-200 dark:bg-gray-600 text-xl font-semibold tracking-tight text-slate-600 dark:text-gray-300">
            My Photo
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-600">About</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Amna Noor</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-gray-300 sm:text-lg">
            I&apos;m a Computer Science student passionate about web development, building modern and responsive web applications.
          </p>
          <a
            href="#"
            className="inline-flex w-fit items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
