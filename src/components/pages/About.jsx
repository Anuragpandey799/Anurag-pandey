import React, { useEffect, useMemo } from "react";
import { ReactTyped } from "react-typed";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
import "aos/dist/aos.css";
import SkillsCPro from "./SkillsCPro";

function About({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const bgStyle = dark
    ? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white"
    : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900";

  const gradientText =
    "bg-gradient-to-r from-pink-600 to-purple-700 text-transparent bg-clip-text";

  // Random Photo Loader
  const photos = [
    "Images/myPhoto.jpg",
    "Images/myPhoto1.jpg",
    "Images/myPhoto2.jpg",
    "Images/myPhoto4.jpg",
    "Images/myPhoto5.jpg",
    "Images/myPhoto6.jpg",
  ];

  const randomPhoto = useMemo(() => {
    return photos[Math.floor(Math.random() * photos.length)];
  }, []);

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>About Anurag Pandey | MERN Stack Developer</title>

        <meta
          name="description"
          content="Learn more about Anurag Pandey, a MERN Stack Developer and BCA graduate specializing in React.js, Node.js, MongoDB, Express.js, REST APIs, and full-stack web development."
        />

        <meta
          name="keywords"
          content="Anurag Pandey, MERN Stack Developer, Full Stack Developer, React Developer, Node.js Developer, MongoDB, Express.js, JavaScript Developer, Web Developer India"
        />

        <meta name="author" content="Anurag Pandey" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Anurag Pandey | MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="Discover Anurag Pandey's skills, education, and projects as a MERN Stack Developer building scalable full-stack applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/about" />
        <meta
          property="og:image"
          content="https://your-domain.com/Images/myPhoto.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Anurag Pandey | MERN Stack Developer"
        />
        <meta
          name="twitter:description"
          content="MERN Stack Developer | React.js | Node.js | MongoDB | Full Stack Web Developer"
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/Images/myPhoto.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://your-domain.com/about" />
      </Helmet>
      {/* ================= END SEO ================= */}

      <section id="about" className={`w-full px-6 py-20 space-y-28 ${bgStyle}`}>
        {/*  Hero Section */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-14">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className={`text-5xl font-extrabold mb-4 ${gradientText}`}>
              About Me
            </h2>

            <ReactTyped
              strings={[
                "ANURAG PANDEY",
                "MERN STACK DEVELOPER",
                "FULL STACK DEVELOPER",
                "REACT.JS DEVELOPER",
                "NODE.JS BACKEND DEVELOPER",
                "API & DATABASE DESIGNER",
                "SOFTWARE ENGINEER",
                "FRON-TEND DEVELOPER",
                "WEB DEVELOPER",
              ]}
              typeSpeed={70}
              backSpeed={30}
              loop
              className={`text-2xl sm:text-3xl font-semibold mb-6 ${gradientText}`}
            />

            <p className="text-lg leading-relaxed font-light mb-5 text-justify">
              Hi! I'm <strong>Anurag Pandey</strong>, a passionate
              <strong> MERN Stack Developer</strong> and a
              <strong> BCA Graduate</strong> from Tilak Maharashtra Vidyapeeth.
              I specialize in building dynamic, responsive, and scalable web
              applications using{" "}
              <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
            </p>

            <p className="text-lg font-light text-justify mb-5">
              I enjoy architecting end-to-end solutions—from designing powerful
              <strong> REST APIs</strong> and secure backend systems to crafting
              clean, interactive, and optimized user interfaces with
              <strong> React.js + Tailwind CSS</strong>.
            </p>

            <p className="text-lg font-light text-justify mb-6">
              My mission is simple:
              <strong className="text-purple-500">
                Build full-stack applications that are fast, secure, intuitive,
                and impactful.
              </strong>
            </p>
          </div>

          <div
            className="lg:w-1/2 flex justify-center relative"
            data-aos="fade-left"
          >
            <img
              src={randomPhoto}
              alt="Anurag Pandey - MERN Stack Developer"
              className="rounded-full shadow-2xl w-80 h-80 object-cover object-top border-4 border-purple-300 hover:scale-105 transition-all duration-300 animate-[float_3s_ease-in-out_infinite]"
            />
          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* 🎓 Section 2: Education */}
        {/* -------------------------------------------------- */}

        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-pink-400 pb-2">
            🎓 Education
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 mt-4">
            {[
              {
                degree: "B.C.A",
                detail:
                  "Tilak Maharashtra Vidyapeeth, Pune - (7.8  SGPA || 72.57%) ",
              },
              {
                degree: "HSC",
                detail: "B.N.V. Inter College, Mariyahu, jaunpur – 76.6%",
              },
              {
                degree: "SSC",
                detail: "E.E.M. School, Jamalapur, Jaunpur – 68%",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/10 shadow">
                <h4 className="text-xl font-bold">{item.degree}</h4>
                <p className="text-sm opacity-80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* ⚙️ Section 3: Technical Skills — Option B+ */}
        {/* -------------------------------------------------- */}

        <div className="max-w-6xl mx-auto px-4 py-16" data-aos="fade-up">
          <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-pink-400 pb-2">
            <span className="bg-gradient-to-r from-pink-300 to-purple-400 text-transparent bg-clip-text">
              ⚙️ Technical Skills
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* --------------------- FRONTEND --------------------- */}
            <div className="group p-6 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:border-pink-400/40 transition-all duration-300">
              <h4 className="text-2xl font-semibold mb-5 flex items-center gap-2 text-pink-400">
                🎨 Frontend
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "🌐", name: "HTML" },
                  { icon: "🎨", name: "CSS" },
                  { icon: "⚡", name: "JavaScript" },
                  { icon: "💠", name: "React.js" },
                  { icon: "🔵", name: "Tailwind CSS" },
                  { icon: "🌀", name: "Redux" },
                  { icon: "🚀", name: "Redux Toolkit" },
                  { icon: "📱", name: "Responsive UI" },
                  { icon: "🎞", name: "Framer Motion" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 flex items-center gap-2 text-sm font-medium rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-pink-600 dark:text-pink-300 border border-pink-400/30 backdrop-blur-sm hover:scale-110 hover:shadow-lg transition-all"
                  >
                    <span>{item.icon}</span> {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* --------------------- BACKEND --------------------- */}
            <div className="group p-6 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:border-purple-400/40 transition-all duration-300">
              <h4 className="text-2xl font-semibold mb-5 flex items-center gap-2 text-purple-400">
                🛠 Backend
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "🟩", name: "Node.js" },
                  { icon: "⚙️", name: "Express.js" },
                  { icon: "🔐", name: "JWT" },
                  { icon: "🛡", name: "Authentication" },
                  { icon: "📛", name: "Authorization" },
                  { icon: "🏷", name: "Role Based Access (RBAC)" },
                  { icon: "🧩", name: "bcrypt" },
                  { icon: "🌐", name: "REST APIs" },
                  { icon: "🚧", name: "Rate Limiting" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 flex items-center gap-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-blue-600/20 text-purple-600 dark:text-purple-300 border border-purple-400/30 hover:scale-110 hover:shadow-lg transition-all"
                  >
                    <span>{item.icon}</span> {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* --------------------- DATABASE --------------------- */}
            <div className="group p-6 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:border-green-400/40 transition-all duration-300">
              <h4 className="text-2xl font-semibold mb-5 flex items-center gap-2 text-green-400">
                🗄 Databases
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "🍃", name: "MongoDB" },
                  { icon: "🔗", name: "Mongoose" },
                  { icon: "🧩", name: "MySQL" },
                  { icon: "📊", name: "Schema Design" },
                  { icon: "🗂", name: "Data Modeling" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 flex items-center gap-2 text-sm font-medium rounded-full bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-700 dark:text-green-300 border border-green-400/30 hover:scale-110 hover:shadow-lg transition-all"
                  >
                    <span>{item.icon}</span> {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* --------------------- OTHER TOOLS --------------------- */}
            <div className="group p-6 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:border-yellow-400/40 transition-all duration-300">
              <h4 className="text-2xl font-semibold mb-5 flex items-center gap-2 text-yellow-400">
                🧰 Tools & Other Skills
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "🐙", name: "Git / GitHub" },
                  { icon: "🧪", name: "Postman" },
                  { icon: "☁️", name: "Vercel / Netlify" },
                  { icon: "📁", name: "VS Code" },
                  { icon: "📐", name: "Figma UI/UX" },
                  { icon: "🔍", name: "Debugging" },
                  { icon: "💡", name: "Problem Solving" },
                  { icon: "⚡", name: "Agile Workflow" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 flex items-center gap-2 text-sm font-medium rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-400/30 hover:scale-110 hover:shadow-lg transition-all"
                  >
                    <span>{item.icon}</span> {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <SkillsCPro/> */}

        {/* -------------------------------------------------- */}
        {/*  Section 4: Projects */}
        {/* -------------------------------------------------- */}

        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-pink-400 pb-2">
             Featured Projects
          </h3>

          <ul className="space-y-6 mt-4">
            <li>
              <strong>Portfolio Website</strong> – Modern UI, animations, dark
              mode.
              <br />
              <a
                href="https://github.com/Anuragpandey799/my_portfolio"
                target="_blank"
                className="text-purple-500 underline"
              >
                View on GitHub
              </a>
            </li>

            <li>
              <strong>PasteBin</strong> – A fast and secure paste-sharing web
              app for storing and sharing code or text snippets.
              <br />
              <a
                href="https://pastebinn.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 underline"
              >
                Live Demo
              </a>
            </li>

            <li>
              <strong>TaskSphere</strong> – A modern task management application
              to organize, track, and manage daily tasks efficiently.
              <br />
              <a
                href="https://task-sphere-vert.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 underline"
              >
                Live Demo
              </a>
            </li>
          </ul>
        </div>

        {/* -------------------------------------------------- */}
        {/*  Section 5: Hobbies */}
        {/* -------------------------------------------------- */}

        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-pink-400 pb-2">
            Hobbies & Interests
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base font-medium">
            {[
              "Cybersecurity",
              "AI/ML Research",
              "Tech Blogging",
              "Travel & Photography",
              // "Open Source Contribution",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 p-3 rounded-xl shadow hover:scale-105 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="zoom-in">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-8 py-3 mt-10 rounded-full font-semibold transition-all text-lg ${
              dark
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            Let's Collaborate <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
