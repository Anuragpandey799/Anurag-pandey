import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
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

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://your-domain.com/services";

  const services = [
    {
      icon: <FiCode />,
      title: "Full Stack MERN Development",
      desc: "End-to-end MERN applications using React, Node.js, Express, and MongoDB with secure authentication and scalable architecture.",
    },
    {
      icon: <FiLayout />,
      title: "Frontend Development (React)",
      desc: "Modern, responsive, and high-performance user interfaces built with React.js and Tailwind CSS.",
    },
    {
      icon: <FiGitBranch />,
      title: "Backend & API Development",
      desc: "Secure REST APIs with Node.js, Express, JWT authentication, and role-based access control.",
    },
    {
      icon: <FiDatabase />,
      title: "Database Design & Management",
      desc: "Optimized MongoDB schema design, Mongoose queries, and basic MySQL integration.",
    },
    {
      icon: <FiShield />,
      title: "Authentication & Security",
      desc: "JWT authentication, encrypted passwords, protected routes, and secure backend logic.",
    },
    {
      icon: <FiCloud />,
      title: "Deployment & Hosting",
      desc: "Production-ready deployment on Vercel and Render with environment variables and optimization.",
    },
  ];

  const testimonials = [
    {
      name: "Academic Project Evaluation Panel",
      role: "Final Year Project Review",
      feedback:
        "The project demonstrated strong full-stack skills, secure authentication, and real-world implementation.",
    },
    {
      name: "Peer Developer",
      role: "MERN Stack Collaborator",
      feedback:
        "Anurag has a solid understanding of MERN concepts and focuses on clean, scalable code.",
    },
    {
      name: "Self-Driven Projects",
      role: "Portfolio & Personal Projects",
      feedback:
        "Each project shows continuous improvement in architecture, performance, and problem solving.",
    },
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          MERN Stack Development Services | Anurag Pandey - Full Stack Developer
        </title>

        <meta
          name="description"
          content="Professional MERN Stack development services by Anurag Pandey. React frontend, Node.js APIs, MongoDB databases, authentication, deployment, and scalable web solutions."
        />

        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MERN Stack Development Services - Anurag Pandey"
        />
        <meta
          property="og:description"
          content="Helping startups, students, and businesses build secure, scalable, and modern web applications."
        />
        <meta property="og:url" content={pageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MERN Stack Development Services - Anurag Pandey"
        />
        <meta
          name="twitter:description"
          content="Full Stack MERN development services including React, Node.js, MongoDB, authentication, and deployment."
        />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "MERN Stack Web Development",
            provider: {
              "@type": "Person",
              name: "Anurag Pandey",
              jobTitle: "MERN Stack Developer",
            },
            areaServed: "Worldwide",
            description:
              "Full Stack MERN development services including React frontend, Node.js backend, MongoDB databases, authentication, and deployment.",
          })}
        </script>
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
          <header className="text-center mb-24" data-aos="fade-up">
            <h1 className="text-5xl font-extrabold mb-4">
              MERN Stack Development Services
            </h1>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              I help individuals, students, and startups turn ideas into secure,
              scalable, and production-ready web applications using modern
              full-stack technologies.
            </p>
            <NavLink
              to="/contact"
              className="inline-block px-10 py-3 mt-5 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
            >
              Let's Work Together
            </NavLink>
          </header>

          {/* ================= SERVICES ================= */}
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            {services.map((service, index) => (
              <article
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
                <h2 className="text-xl font-bold mb-3">{service.title}</h2>
                <p className="opacity-80 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </article>
            ))}
          </section>

          {/* ================= TESTIMONIALS ================= */}
          <section className="mb-28" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">
              Trust & Feedback
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((item, i) => (
                <article
                  key={i}
                  className={`p-6 rounded-2xl border shadow ${
                    dark
                      ? "bg-white/5 border-white/10"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <FiStar className="text-indigo-400 mb-4" />
                  <p className="text-sm opacity-80 mb-4">
                    “{item.feedback}”
                  </p>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs opacity-60">{item.role}</div>
                </article>
              ))}
            </div>
          </section>

          {/* ================= CTA ================= */}
          <section
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
              Whether it's a project, portfolio, startup idea, or academic
              application — let's turn it into a real product.
            </p>
            <NavLink
              to="/contact"
              className="inline-block px-10 py-3 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
            >
              Let's Work Together
            </NavLink>
          </section>
        </div>
      </section>
    </>
  );
}

export default Services;
