import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAward,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AOS from "aos";
import "aos/dist/aos.css";

function Home({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const bg = dark
    ? "bg-gradient-to-b from-black via-slate-900 to-black text-white"
    : "bg-gradient-to-br from-blue-100 via-white to-pink-100 text-gray-900";

  const gradientText =
    "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500";

  const particlesInit = async (main) => await loadFull(main);

  /* ================== SEO SCHEMA ================== */
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://my-portfolio-wheat-zeta-89.vercel.app/#anurag-pandey",
    name: "Anurag Pandey",
    alternateName: [
      "Anurag Pandey MERN Developer",
      "Anurag Pandey Software Engineer",
      "Anurag Pandey Freelance Developer",
    ],
    jobTitle: "Full Stack MERN Developer",
    description:
      "Anurag Pandey is a Full Stack MERN Developer and Freelance Software Engineer specializing in React, Node.js, MongoDB, and Express.",
    url: "https://my-portfolio-wheat-zeta-89.vercel.app/",
    knowsAbout: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "REST APIs",
      "Freelance Web Development",
      "Software Engineering",
    ],
    sameAs: [
      "https://github.com/Anuragpandey799",
      "https://www.linkedin.com/",
    ],
  };

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Anurag Pandey | MERN Stack Developer | Freelance Software Engineer
        </title>

        <meta
          name="description"
          content="Anurag Pandey is a Full Stack MERN Developer and Freelance Software Engineer building secure, scalable, and modern web applications using React, Node.js, MongoDB, and Express."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://my-portfolio-wheat-zeta-89.vercel.app/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Anurag Pandey | MERN Stack Developer & Freelancer"
        />
        <meta
          property="og:description"
          content="Portfolio of Anurag Pandey, a freelance MERN Stack Developer helping startups and businesses build scalable web applications."
        />
        <meta
          property="og:url"
          content="https://my-portfolio-wheat-zeta-89.vercel.app/"
        />
        <meta property="og:site_name" content="Anurag Pandey Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Anurag Pandey | MERN Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Freelance MERN Stack Developer & Software Engineer portfolio."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* ================= PAGE ================= */}
      <div className={`relative min-h-screen overflow-hidden ${bg}`}>
        {/* Particles */}
        <Particles
          className="absolute inset-0 z-0"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 35 },
              links: { enable: true, opacity: 0.3 },
              move: { enable: true, speed: 1 },
            },
          }}
        />

        {/* ================= HERO ================= */}
        <main className="relative z-10 text-center px-6 py-24">
          <motion.h1
            className={`text-4xl sm:text-5xl font-extrabold mb-4 ${gradientText}`}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Anurag Pandey - Full Stack MERN Developer
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Freelance MERN Developer helping businesses build{" "}
            <span className={`font-mono ${gradientText}`}>
              <Typewriter
                words={[
                  "secure web applications",
                  "scalable full stack systems",
                  "modern React interfaces",
                  "production-ready APIs",
                ]}
                loop={0}
                cursor
              />
            </span>
          </motion.h2>

          <p className="max-w-3xl mx-auto text-lg opacity-80 mb-10">
            I'm <strong>Anurag Pandey</strong>, a freelance Full Stack MERN
            Developer and Software Engineer. I help startups, students, and
            businesses build fast, secure, and scalable web applications using
            React, Node.js, MongoDB, and Express.
          </p>

          {/* CTA */}
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            >
              Hire Me for Your Project
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 rounded-full border border-purple-600 hover:bg-purple-600 hover:text-white transition"
            >
              View Services
            </Link>
          </div>
        </main>

        {/* ================= TRUST ================= */}
        <section
          className="relative z-10 max-w-5xl mx-auto py-16 px-4 grid sm:grid-cols-3 gap-8 text-center"
          data-aos="fade-up"
        >
          {[
            {
              icon: <FaProjectDiagram />,
              title: "5+ Projects Delivered",
              desc: "Production-ready MERN applications",
            },
            {
              icon: <FaAward />,
              title: "Best Project Award",
              desc: "Recognized for real-world solutions",
            },
            {
              icon: <FaHandshake />,
              title: "Freelancer Friendly",
              desc: "Clear communication & fast delivery",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow ${
                dark ? "bg-slate-900" : "bg-white"
              }`}
            >
              <div className="text-3xl text-purple-500 mb-2">
                {item.icon}
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm opacity-80">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* ================= WHY ME ================= */}
        <section
          className="relative z-10 max-w-6xl mx-auto py-20 px-6"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Hire Me as Your MERN Developer?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Clean, scalable, and maintainable code",
              "Secure authentication & REST APIs",
              "Client-focused communication & delivery",
            ].map((point, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl shadow ${
                  dark ? "bg-slate-900" : "bg-white"
                }`}
              >
                <p className="opacity-80 text-center">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TECH ================= */}
        <section
          className="relative z-10 max-w-6xl mx-auto py-20 px-6"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies I Work With
          </h2>

          <div className="flex justify-center gap-8 flex-wrap text-3xl text-purple-500">
            <FaReact />
            <FaNodeJs />
            <SiExpress />
            <SiMongodb />
            <SiJavascript />
            <SiTailwindcss />
            <FaGitAlt />
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section
          className="relative z-10 text-center py-20 px-6"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="opacity-80 mb-6">
            Let's build something powerful together.
          </p>
          <Link
            to="/contact"
            className="px-10 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </>
  );
}

export default Home;
