'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import ScrollProgress from '@/components/ScrollProgress';
import Skills from '@/components/Skills';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-start gap-12 px-4 py-6 relative overflow-hidden" id="home">
      {/* Decorative Background Elements */}
      <ScrollProgress />
      <Navbar />
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-xl w-full text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Amna Noor
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-95 leading-relaxed">
          Full-Stack Developer crafting beautiful, scalable web solutions
        </p>
        <a 
          href="#projects"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95"
        >
          View My Work
        </a>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />      <Footer />
      <div  
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" 
        aria-hidden="true"
      ></div>
      <div 
        className="absolute top-20 right-20 w-16 h-16 bg-purple-300/20 rounded-full blur-lg animate-float-delayed" 
        aria-hidden="true"
      ></div>
      <div 
        className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300/15 rounded-full blur-xl animate-float" 
        aria-hidden="true"
      ></div>
      <div 
        className="absolute bottom-10 right-10 w-12 h-12 bg-white/20 rounded-full blur-lg animate-float-delayed" 
        aria-hidden="true"
      ></div>
      <div 
        className="absolute top-1/2 left-1/4 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl animate-float" 
        aria-hidden="true"
      ></div>
    </div>
  );
}
