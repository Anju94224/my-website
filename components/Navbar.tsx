"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.25;
      let current = "home";

      for (const item of navItems) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            current = item.href.replace("#", "");
          }
        }
      }

      setActiveLink(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="text-lg font-bold text-slate-900">
          Amna Noor
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = activeLink === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={
                  `text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-purple-600 font-semibold"
                      : "text-slate-600 hover:text-purple-600"
                  }`
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white/98 px-4 pb-4 pt-2 shadow-lg md:hidden">
          <div className="space-y-3">
            {navItems.map((item) => {
              const isActive = activeLink === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    `block rounded-2xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-purple-50 text-purple-600 font-semibold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
