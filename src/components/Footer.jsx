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
  return (
    <footer
      className={`relative border-t ${
        dark
          ? "bg-gradient-to-br from-black via-purple-950 to-blue-950 border-white/10 text-gray-300"
          : "bg-gradient-to-br from-purple-100 via-pink-100 to-blue-200 border-black/10 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND / ABOUT */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Anurag Pandey
            </h2>
            <p className="mt-3 text-sm leading-relaxed opacity-90">
              MERN Stack Developer specializing in building fast, scalable,
              and user-centric web applications using React, Node.js,
              Express, and MongoDB.
            </p>

            <p className="mt-3 text-sm font-semibold text-pink-500">
              Available for Freelance & Remote Work 🚀
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/home" className="hover:text-pink-500">
                  Portfolio Home
                </Link>
              </li>
              <li>
                <Link to="/project" className="hover:text-pink-500">
                  Web Development Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-pink-500">
                  Tech Blog & Tutorials
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pink-500">
                  About the Developer
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Full-Stack Web Development</li>
              <li>React & MERN Applications</li>
              <li>Frontend UI/UX Development</li>
              <li>API & Backend Integration</li>
              <li>Deployment & Performance Optimization</li>
            </ul>
          </div>

          {/* CTA / CONTACT */}
          <div>
            <h3 className="font-bold text-lg mb-4">Let’s Work Together</h3>
            <p className="text-sm mb-4 opacity-90">
              Have a project idea or need a developer?
              Let’s build something impactful.
            </p>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* SOCIALS */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/Anuragpandey799"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="text-xl hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/anurag-pandey-7b4502304"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="text-xl hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://www.youtube.com/@anuragpandey9337"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube Channel"
            className="text-xl hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Profile"
            className="text-xl hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs opacity-80">
          <div className="flex justify-center gap-4 mb-2">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
          </div>
          © 2025 Anurag Pandey — MERN Stack Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
