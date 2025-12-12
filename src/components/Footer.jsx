import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer({ dark }) {
  const bg = dark ? "bg-gray-950" : "bg-pink-100";
  const text = dark ? "text-gray-300" : "text-gray-800";
  const iconBase = "text-xl transition-transform duration-300 hover:scale-110";

  // Icon colors
  const iconColor = dark ? "text-white" : "text-black";
  const iconHover = dark
    ? "hover:text-gradient hover:from-pink-500 hover:to-purple-500"
    : "hover:text-blue-600";

  return (
    <footer className={`${bg} py-6 ${
          dark
            ? "bg-gradient-to-br from-purple-950 via-black/40 to-blue-950 ring-blue-500 text-white"
            : " bg-gradient-to-br from-purple-200  to-blue-300 ring-black text-black"
        }`}>
      <div className="text-center font-montserrat">
        {/* Logo or Name */}
        <h1 className={`text-2xl font-bold ${text}`}>Anurag Pandey</h1>

        {/* Top Nav Links */}
        <div className={`flex flex-wrap justify-center gap-6 text-sm mt-2 ${text}`}>
          <Link to="/">Home</Link>
          <Link to="/project">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 my-4">
          <a
            href="https://github.com/Anuragpandey799/my_portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className={`${iconBase} ${iconColor} ${iconHover}`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-pandey-7b4502304"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`${iconBase} ${iconColor} ${iconHover}`}
            />
          </a>
          <a
            href="https://www.youtube.com/@anuragpandey9337"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className={`${iconBase} ${iconColor} ${iconHover}`}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={`${iconBase} ${iconColor} ${iconHover}`}
            />
          </a>
        </div>

        {/* Bottom Info */}
        <div className={`text-xs ${text}`}>
          <span className="mx-2 hover:underline cursor-pointer">Terms</span>
          <span className="mx-2 hover:underline cursor-pointer">Privacy</span>
          <div className="mt-1 italic">&copy; 2025 Anurag P. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
