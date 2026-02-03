import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ dark, setDark }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home", intent: "Portfolio Home" },
    { name: "Services", path: "/services", intent: "Freelance Services" },
    { name: "About", path: "/about", intent: "About Developer" },
    { name: "Projects", path: "/project", intent: "Developer Projects" },
    { name: "Blog", path: "/blog", intent: "Tech Blog" },
    { name: "Contact", path: "/contact", intent: "Hire MERN Developer" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50">
      <nav
        aria-label="Primary Navigation"
        className={`transition-all duration-500 backdrop-blur-xl border-b ${
          dark
            ? "bg-black/60 border-white/10 text-white"
            : "bg-white/70 border-black/10 text-black"
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="h-20 flex items-center justify-between">
            {/* BRAND */}
            <div className="flex items-center gap-3">
              <img
                src="Images/logo5.png"
                alt="Anurag Pandey MERN Stack Developer Logo"
                className="h-20 w-auto rounded-xl shadow-md"
              />
              <Link
                to="/home"
                className="hidden md:block text-xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
              >
                Anurag Pandey
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  aria-label={link.intent}
                  className={`relative text-base font-semibold tracking-wide transition-colors ${
                    isActive(link.path)
                      ? "text-pink-500"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              {/* HIRE ME CTA (Desktop only) */}
              <Link
                to="/contact"
                className="hidden lg:inline-block px-5 py-2 rounded-full font-bold text-sm bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                Hire Me
              </Link>

              {/* DARK MODE */}
              <button
                aria-label="Toggle dark mode"
                onClick={() => setDark(!dark)}
                className={`p-2 rounded-lg border transition hover:scale-110 ${
                  dark
                    ? "border-white/20 hover:bg-white/10"
                    : "border-black/20 hover:bg-black/10"
                }`}
              >
                <FontAwesomeIcon icon={dark ? faSun : faMoon} />
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden p-2"
                aria-label="Toggle mobile menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className={`lg:hidden px-6 pb-6 space-y-2 ${
                dark ? "bg-black/80" : "bg-white/95"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "hover:bg-black/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block mt-4 text-center px-4 py-3 rounded-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
              >
                Hire Me
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
