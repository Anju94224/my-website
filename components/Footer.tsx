export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 px-4 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="text-2xl font-bold text-white">Amna Noor</h3>
        <p className="mt-2 text-sm text-gray-400">Full-Stack Developer | CS Student</p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/Anju94224"
            className="text-purple-400 transition hover:text-white"
            aria-label="GitHub"
          >
            <span className="text-2xl">🐙</span>
          </a>
          <a
            href="#"
            className="text-purple-400 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <span className="text-2xl">💼</span>
          </a>
          <a
            href="mailto:amnanoor@email.com"
            className="text-purple-400 transition hover:text-white"
            aria-label="Email"
          >
            <span className="text-2xl">📧</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-500">© 2026 Amna Noor. All rights reserved.</p>
      </div>
    </footer>
  );
}