export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating Circles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-300/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/4 w-18 h-18 bg-purple-400/20 rounded-full animate-pulse"></div>

      {/* Glassmorphism Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl animate-bounce max-w-md w-full text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Amna Noor
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Full-Stack Developer | Passionate about creating innovative web solutions
        </p>
        <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:ring-4 ring-purple-400 transition-all duration-300 transform hover:scale-105">
          View My Work
        </button>
      </div>
    </div>
  );
}
