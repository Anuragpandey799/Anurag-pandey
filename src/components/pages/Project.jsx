import React, { useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Projects({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
  {
    title: "MediTech – Hospital Management System (Ongoing)",
    description:
      "A full-featured MERN hospital management platform with doctor appointment booking, patient records, admin dashboard, secure authentication, and integrated Razorpay payments for fast and reliable online transactions.",
    image: "Images/meditech-screenshot.png", // replace when you add screenshot
    // link: "https://github.com/Anuragpandey799", // replace later with live/code link
    type: "ongoing",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Razorpay"],
  },

  {
    title: "Portfolio Website",
    description:
      "A fully responsive and animated personal portfolio built with React and Tailwind CSS. It features dark mode, smooth transitions, AnimatedCursor, and interactive sections.",
    image: "Images/portfolioScreenshot.png",
    link: "https://my-portfolio-wheat-zeta-89.vercel.app/",
    type: "live",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "React Router", "Context API"],
  },

  {
    title: "BBMS – Blood Bank Management System",
    description:
      "A PHP-based web application to manage blood donors and inventory with an admin and donor dashboard.",
    image: "Images/bbms-Screenshot.png",
    link: "https://anubloodbank.free.nf/",
    type: "live",
    tech: ["PHP", "MySQL", "Bootstrap"],
  },

  {
    title: "MedLink Healthcare Portal",
    description:
      "A full-stack healthcare service platform offering appointment booking, prescriptions, and doctor consultation features.",
    image: "Images/medLink-Screenshot.png",
    link: "https://github.com/Anuragpandey799/MedLink-All-Medical-Services-At-One-Click",
    type: "code",
    tech: ["PHP", "MySQL", "Bootstrap", "AOS"],
  },

  {
    title: "Top-10 Scientists",
    description:
      "A curated showcase of India's top scientists with dynamic layouts, hover animations, and a clean UI design.",
    image: "Images/scientists-screenshot.png",
    link: "https://github.com/Anuragpandey799/top10-scientists",
    type: "code",
    tech: ["React.js", "Tailwind CSS", "API Integration"],
  },
];


  return (
    <section
      className={`min-h-screen w-full px-6 py-20 transition-all duration-500 ${
        dark
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
        >
          🚀 Featured Projects
        </motion.h2>

        <div className="space-y-24">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`grid gap-10 lg:grid-cols-2 items-center rounded-2xl p-6 shadow-xl transition-all backdrop-blur-lg ${
                dark ? "bg-white/5" : "bg-white/70"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-72 object-cover"
                />
              </motion.div>

              <div>
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  {proj.title}
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-purple-500"
                  >
                    <FiExternalLink size={26} />
                  </a>
                </h3>

                <p className="mb-5 leading-relaxed text-lg opacity-90">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-200 to-purple-200 text-purple-900 dark:from-pink-700 dark:to-purple-700 dark:text-white shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl ${
                    dark
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {proj.type === "live" ? "View Live Project" : "View Code"}
                  <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
