import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCogs,
  FaGlobe,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiBootstrap,
} from "react-icons/si";

import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AOS from "aos";
import "aos/dist/aos.css";

function Home({ dark }) {

  // Initialize animations
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Gradient Text Style
  const gradientText =
    "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500";

  // Background based on theme
  const bg = dark
    ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    : "bg-gradient-to-br from-blue-200 via-white to-pink-200 text-gray-900";

  // MERN Icons Section
  const mernIcons = [
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
  ];

  // Services Section
  const services = [
    {
      icon: <FaReact />,
      title: "React.js Frontend Development",
      desc: "Building responsive UI with reusable components using React.js, Hooks, and TailwindCSS.",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js Backend Development",
      desc: "Developing secure backend logic with Node.js, Express.js, and API architecture.",
    },
    {
      icon: <FaDatabase />,
      title: "MongoDB Database Design",
      desc: "Schema design, indexing, and aggregation for scalable NoSQL databases.",
    },
    {
      icon: <FaGlobe />,
      title: "REST API Development",
      desc: "Building production-grade RESTful APIs with authentication and authorization.",
    },
    {
      icon: <FaCogs />,
      title: "Full Stack MERN Applications",
      desc: "Handling entire MERN stack projects—from frontend to backend to database.",
    },
  ];

  // Skills Section
  const skills = [
    { icon: <FaReact />, name: "React.js", desc: "Component-driven UI.", link: "https://reactjs.org/" },
    { icon: <FaNodeJs />, name: "Node.js", desc: "Backend runtime.", link: "https://nodejs.org/" },
    { icon: <SiExpress />, name: "Express.js", desc: "API framework.", link: "https://expressjs.com/" },
    { icon: <SiMongodb />, name: "MongoDB", desc: "NoSQL database.", link: "https://www.mongodb.com/" },

    { icon: <SiJavascript />, name: "JavaScript", desc: "Core language.", link: "https://developer.mozilla.org/" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", desc: "Utility-first CSS.", link: "https://tailwindcss.com/" },
    { icon: <SiHtml5 />, name: "HTML5", desc: "Semantic structure.", link: "https://developer.mozilla.org/" },
    { icon: <SiCss3 />, name: "CSS3", desc: "Modern styling.", link: "https://developer.mozilla.org/" },

    { icon: <SiMysql />, name: "MySQL", desc: "Relational DB.", link: "https://dev.mysql.com/doc/" },
    { icon: <SiBootstrap />, name: "Bootstrap", desc: "CSS framework.", link: "https://getbootstrap.com/" },
    { icon: <FaGitAlt />, name: "Git & GitHub", desc: "Version control.", link: "https://git-scm.com/" },
  ];

  // Particle Background Init
  const particlesInit = async (main) => await loadFull(main);

  return (
    <div className={`relative min-h-screen w-full overflow-hidden flex flex-col items-center ${bg}`}>

      {/* Background Particles */}
      <Particles
  id="tsparticles"
  className="absolute top-0 left-0 w-full h-full z-0"
  options={{
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      color: { value: dark ? "#ffffff" : "#000000" },
      links: {
        enable: true,
        color: dark ? "#ffffff" : "#000000",
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
      move: { enable: true, speed: 1 },
      number: { value: 40, density: { enable: true, area: 800 } },
      opacity: { value: 0.6 },
      size: { value: { min: 1, max: 3 } },
    },
  }}
/>


      {/* ================= HERO SECTION ==================== */}
      <main className="relative z-[1] text-center px-6 py-20">

        {/* Name */}
        <motion.h1
          className={`text-3xl sm:text-5xl font-bold mb-4 ${gradientText}`}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I'm Anurag Pandey
        </motion.h1>

        {/* Typewriter Roles */}
        <motion.h2
          className="text-xl sm:text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="mr-2">I'm a</span>
          <span className={`font-mono ${gradientText}`}>
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Full Stack Engineer",
                "React.js Developer",
                "Node.js Developer",
                "API Developer",
                "MongoDB Architect",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl font-medium opacity-70 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build secure, scalable & production-ready MERN applications.
        </motion.p>

        {/* MERN Icons */}
        <motion.div
          className="flex justify-center gap-10 flex-wrap my-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {mernIcons.map((tech, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col items-center group cursor-pointer"
              whileHover={{ scale: 1.25, rotate: 5 }}
              transition={{ type: "spring", stiffness: 260, damping: 15 }}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  dark ? "bg-purple-600/20" : "bg-purple-500/20"
                }`}
              />

              {/* Icon */}
              <div
                className={`text-5xl p-6 rounded-3xl shadow-lg transition-all duration-300 
                ${dark ? "bg-gray-900 text-white shadow-purple-900/30" : "bg-white text-black shadow-xl"} 
                ${tech.color}`}
              >
                {tech.icon}
              </div>

              {/* Pop-up Text */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{}}
                className="absolute bottom-[-35px] text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:-translate-y-1
                transition-all duration-300 bg-black/70 text-white px-3 py-1 rounded-full shadow-lg"
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Link className="px-6 py-2 rounded-full font-semibold border border-pink-600 hover:bg-pink-600 hover:text-white transition-all" to="/project">View Projects</Link>
          <Link className="px-6 py-2 rounded-full font-semibold border border-purple-600 hover:bg-purple-600 hover:text-white transition-all" to="/about">More About Me</Link>
        </motion.div>
      </main>

      {/* ================= SERVICES ==================== */}
      <section className="max-w-6xl mx-auto py-20 px-4" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-700">
          💼 What I Do
        </h3>

        <div className="grid phone:grid-cols-1 tablet:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl shadow-xl p-6 text-center border-t-4 ${
                dark ? "bg-slate-900 text-white border-pink-600" : "bg-white border-purple-500 text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4 text-pink-500 mx-auto">{srv.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{srv.title}</h4>
              <p className="text-sm opacity-80 text-justify">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ==================== */}
      <section className="max-w-6xl mx-auto py-20 px-4" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
          🚀 My Tech Stack
        </h3>

        <div className="grid phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.a
              key={idx}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 1, scale: 1.05 }}
              className={`rounded-2xl p-5 shadow-lg transition-all duration-300 text-center ${
                dark ? "bg-slate-900 text-white" : "bg-white text-gray-800"
              }`}
            >
              <div className="text-3xl mb-2 text-purple-500 mx-auto">{skill.icon}</div>
              <h4 className="text-lg font-semibold">{skill.name}</h4>
              <p className="text-xs opacity-80 mt-1">{skill.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
