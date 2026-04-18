export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-slate-600">Have a project in mind? Let&apos;s work together!</p>
        </div>

        <form className="mx-auto max-w-lg rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
              📧
            </div>
            <p className="text-sm font-semibold text-slate-900">Email</p>
            <p className="text-sm text-slate-600">amnanoor@email.com</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
              🐙
            </div>
            <p className="text-sm font-semibold text-slate-900">GitHub</p>
            <p className="text-sm text-slate-600">github.com/Anju94224</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
              📍
            </div>
            <p className="text-sm font-semibold text-slate-900">Location</p>
            <p className="text-sm text-slate-600">Islamabad, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
}