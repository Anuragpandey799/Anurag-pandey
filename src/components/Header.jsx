import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faSolidMoon } from "@fortawesome/free-solid-svg-icons";


function Navbar({ dark, setDark }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/home", title: "Anurag Pandey's portfolio - Home" },
    { name: "Services", path: "/services", title: "Services by Anurag pandey" },
    { name: "About", path: "/about", title: "Anurag Pandey's portfolio - About" },
    {
      name: "Projects",
      path: "/project",
      title: "Anurag Pandey's portfolio - Projects",
    },
    { name: "Contact", path: "/contact", title: "Anurag Pandey's portfolio - Contact" },
    { name: "Blog", path: "/blog", title: "Anurag Pandey's portfolio - Blog" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="z-50 fixed w-full top-0">
      <nav
        className={`backdrop-blur-md ring-1 ${
          dark
            ? "bg-gradient-to-br from-purple-800 via-black/40 to-blue-800 ring-blue-500 text-white"
            : " bg-gradient-to-br from-purple-200 via-black/40 to-blue-300 ring-black text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="Images/logo5.png"
                alt="Logo"
                className="h-28 w-auto rounded"
              />
              <Link
                to="/"
                className="ml-2 hidden sm:inline font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-500"
              >
                Anurag <strong>P.</strong>
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden tab:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    closeMenu();
                    document.title = link.title;
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Buttons */}
            <div className="flex items-center space-x-4">
             


              <button
                onClick={() => setDark(!dark)}
                className={`p-2 rounded-md border ${
                  dark ? "border-white text-white" : "border-black text-black"
                } hover:bg-opacity-30 hover:scale-105 transition`}
              >
                <FontAwesomeIcon icon={faSolidMoon} size="lg" />
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="tab:hidden p-2 rounded-md focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`tab:hidden px-4 pb-4 pt-2 space-y-2 transition-all ${
              dark ? "text-white" : "text-black"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  closeMenu();
                  document.title = link.title;
                }}
                className={`block rounded-md px-3 py-2 text-base font-medium transition ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "hover:bg-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
