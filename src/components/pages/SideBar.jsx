import {
  faSquareGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";

export default function SideBar({ dark }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 📜 Scroll behavior (smart + smooth)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth < 768) {
        setShowSidebar(currentScrollY < lastScrollY || currentScrollY < 20);
        setLastScrollY(currentScrollY);
      } else {
        setShowSidebar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const icons = [
    {
      icon: faSquareGithub,
      label: "GitHub - MERN Stack Projects",
      url: "https://github.com/Anuragpandey799",
      color: "hover:text-pink-500",
      rel: "me",
    },
    {
      icon: faLinkedin,
      label: "LinkedIn - Hire MERN Developer",
      url: "https://www.linkedin.com/in/anurag-pandey-7b4502304",
      color: "hover:text-blue-500",
      rel: "me",
    },
    {
      icon: faEnvelope,
      label: "Email - Contact for Freelance Work",
      url: "mailto:anuhackerag799@gmail.com",
      color: "hover:text-green-500",
    },
    {
      icon: faYoutube,
      label: "YouTube - Web Development Content",
      url: "https://www.youtube.com/@anuragpandey9337",
      color: "hover:text-red-500",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {showSidebar && (
          <motion.nav
            key="sidebar"
            role="navigation"
            aria-label="Social links of Anurag Pandey - MERN Stack Developer"
            className="fixed bottom-6 right-4 z-50"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            <div
              className={`rounded-3xl px-4 py-6 backdrop-blur-xl ring-1 shadow-2xl ${
                dark
                  ? "bg-white/5 ring-purple-500/40 text-white"
                  : "bg-white/70 ring-blue-400/40 text-black"
              }`}
            >
              <ul className="flex flex-col items-center gap-6">
                {icons.map((item, idx) => (
                  <li key={idx} className="relative group">
                    {/* Glow effect */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 blur-lg group-hover:opacity-40 transition duration-300"></span>

                    <a
                      href={item.url}
                      target="_blank"
                      rel={`${item.rel || ""} noopener noreferrer`}
                      aria-label={item.label}
                      data-tooltip-id="sidebar-tooltip"
                      data-tooltip-content={item.label}
                      className="relative z-10 block"
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`text-3xl md:text-4xl transition-all duration-300 transform group-hover:scale-125 ${item.color}`}
                      />
                    </a>

                    {/* Active indicator */}
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-gradient-to-b from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <Tooltip
        id="sidebar-tooltip"
        place="left"
        className="z-50 text-sm font-medium"
      />
    </>
  );
}
