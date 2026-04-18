export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-xl sm:p-10 md:flex md:flex-row md:items-center md:gap-10 lg:p-16">
        <div className="mb-8 flex items-center justify-center rounded-3xl bg-slate-100 p-8 text-slate-500 shadow-inner sm:p-10 md:mb-0 md:w-1/2">
          <div className="flex h-72 w-full max-w-sm items-center justify-center rounded-3xl bg-slate-200 text-xl font-semibold tracking-tight text-slate-600">
            My Photo
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-600">About</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Amna Noor</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            I&apos;m a Computer Science student passionate about web development, building modern and responsive web applications.
          </p>
          <a
            href="#"
            className="inline-flex w-fit items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
