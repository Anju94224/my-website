export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 py-12 px-4 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Amna Noor</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer | CS Student</p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/Anju94224"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 dark:text-purple-400 transition hover:text-purple-700 dark:hover:text-white"
          >
            🐙 GitHub
          </a>
          <a
            href="https://my-website-delta-puce.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 dark:text-purple-400 transition hover:text-purple-700 dark:hover:text-white"
          >
            ▲ Vercel
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-500 dark:text-gray-500">© 2026 Amna Noor. All rights reserved.</p>
      </div>
    </footer>
  );
}