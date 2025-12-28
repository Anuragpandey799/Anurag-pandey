import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiShield,
  FiCloud,
  FiGitBranch,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Services({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      icon: <FiCode />,
      title: "Full Stack MERN Development",
      desc: "Complete end-to-end web applications using React, Node.js, Express, and MongoDB with secure authentication and scalable architecture.",
    },
    {
      icon: <FiLayout />,
      title: "Frontend Development (React)",
      desc: "Modern, responsive, and high-performance UIs built with React.js, Tailwind CSS, and optimized component architecture.",
    },
    {
      icon: <FiGitBranch />,
      title: "Backend & API Development",
      desc: "Secure RESTful APIs with Node.js & Express, JWT authentication, role-based access control, and clean MVC structure.",
    },
    {
      icon: <FiDatabase />,
      title: "Database Design & Management",
      desc: "Efficient MongoDB schema design, optimized CRUD operations using Mongoose, and basic MySQL integration.",
    },
    {
      icon: <FiShield />,
      title: "Authentication & Security",
      desc: "JWT-based authentication, encrypted passwords using Bcrypt, protected routes, and secure API access.",
    },
    {
      icon: <FiCloud />,
      title: "Deployment & Hosting",
      desc: "Production-ready deployment on Vercel & Render with environment variables, optimization, and best practices.",
    },
  ];

  const testimonials = [
    {
      name: "Academic Project Evaluation Panel",
      role: "Final Year Project Review",
      feedback:
        "The project demonstrated strong full-stack development skills, secure authentication, and practical real-world implementation.",
    },
    {
      name: "Peer Developer",
      role: "MERN Stack Collaborator",
      feedback:
        "Anurag has a solid understanding of MERN stack concepts and always focuses on clean, scalable code.",
    },
    {
      name: "Self-Driven Projects",
      role: "Portfolio & Personal Projects",
      feedback:
        "Each project shows continuous improvement in architecture, performance, and real-world problem solving.",
    },
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Services | Anurag Pandey – MERN Stack Developer</title>
        <meta
          name="description"
          content="Professional MERN Stack development services including React frontend, Node.js APIs, MongoDB databases, authentication, deployment, and performance optimization."
        />
        <meta
          name="keywords"
          content="MERN Stack Developer, React Developer, Node.js Developer, MongoDB, Full Stack Web Developer, Freelance Web Developer"
        />
        <meta property="og:title" content="Services – Anurag Pandey" />
        <meta
          property="og:description"
          content="Helping startups, students, and businesses build secure, scalable, and modern web applications."
        />
      </Helmet>

      <section
        className={`min-h-screen px-6 py-20 ${
          dark
            ? "bg-gradient-to-b from-black via-slate-900 to-black text-white"
            : "bg-gradient-to-b from-gray-50 via-white to-gray-200 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto">

          {/* ================= HERO ================= */}
          <div className="text-center mb-24" data-aos="fade-up">
            <h1 className="text-5xl font-extrabold mb-4">Services</h1>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              I help individuals, students, and startups turn ideas into
              secure, scalable, and production-ready web applications using
              modern full-stack technologies.
            </p>
            <NavLink
              to="/contact"
              className="inline-block px-10 py-3 mt-5 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
            >
              Let’s Work Together
            </NavLink>
          </div>

          

          {/* ================= SERVICES ================= */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`p-6 rounded-2xl border backdrop-blur-xl shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl ${
                  dark
                    ? "bg-white/5 border-white/10 hover:border-indigo-400/50"
                    : "bg-white/70 border-gray-200 hover:border-indigo-400/40"
                }`}
              >
                <div className="text-3xl mb-4 text-indigo-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ================= TRUST STATS ================= */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28 text-center" data-aos="fade-up">
            {[
              { label: "Projects Built", value: "5+" },
              { label: "REST APIs Developed", value: "20+" },
              { label: "Best Project Award", value: "2025 🏆" },
              { label: "Tech Stack", value: "MERN" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl shadow ${
                  dark ? "bg-white/5" : "bg-white"
                }`}
              >
                <div className="text-3xl font-bold text-indigo-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* ================= TESTIMONIALS ================= */}
          <div className="mb-28" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">
              Trust & Feedback
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border shadow ${
                    dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
                  }`}
                >
                  <FiStar className="text-indigo-400 mb-4" />
                  <p className="text-sm opacity-80 mb-4">
                    “{item.feedback}”
                  </p>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs opacity-60">{item.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= WHY CHOOSE ME ================= */}
          <div className="mb-28" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Clean, scalable, and secure code practices",
                "Real-world project-based experience",
                "Clear communication & transparency",
                "Focus on performance & maintainability",
              ].map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <FiCheckCircle className="text-indigo-400 mt-1" />
                  <p className="opacity-80">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CTA ================= */}
          <div
            className={`text-center p-14 rounded-2xl border shadow-2xl ${
              dark
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
            data-aos="zoom-in"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to build something impactful?
            </h2>
            <p className="opacity-80 mb-8 max-w-xl mx-auto">
              Whether it’s a project, portfolio, startup idea, or academic
              application — let’s turn it into a real product.
            </p>
            <NavLink
              to="/contact"
              className="inline-block px-10 py-3 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
            >
              Let’s Work Together
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
