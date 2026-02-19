import React, { useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Projects({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "MediTech - Hospital Management System (Ongoing)",
      description:
        "A scalable MERN-based hospital management system with doctor appointment booking, patient records, admin dashboard, role-based authentication, and Razorpay payment integration. Designed for real-world healthcare workflows.",
      image: "Images/meditech-screenshot.png",
      type: "ongoing",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "Razorpay",
        "JWT",
      ],
    },

    {
      title: "PasteBin - Secure Paste Sharing Web App",
      description:
        "A fast and minimal paste-sharing web application to store and share code or text snippets securely. Focused on performance, clean UI, and ease of use. Ideal for developers to share content instantly.",
      image: "Images/PasteBin-screenshot.png",
      link: "https://pastebinn.vercel.app/",
      type: "live",
      tech: ["React.js", "Vercel", "UI/UX", "Web App"],
    },

    {
      title: "TaskSphere - Modern Task Management App",
      description:
        "A modern task management application that helps users organize, track, and manage daily tasks efficiently with a clean and responsive UI. Built with productivity and user experience in mind.",
      image: "Images/TaskSphere-screenshot.png",
      link: "https://task-sphere-vert.vercel.app",
      type: "live",
      tech: ["React.js", "State Management", "Responsive UI"],
    },

    {
      title: "Portfolio Website",
      description:
        "My personal portfolio showcasing projects, skills, blogs, and contact details. Built with React and Tailwind CSS featuring dark mode, smooth animations, and a highly interactive user experience.",
      image: "Images/portfolioScreenshot.png",
      link: "https://my-portfolio-wheat-zeta-89.vercel.app/",
      type: "live",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
        "Context API",
      ],
    },

    {
      title: "BBMS - Blood Bank Management System",
      description:
        "A PHP-based blood bank management system to manage donors, blood inventory, and requests. Includes admin and donor dashboards with a structured database design.",
      image: "Images/bbms-Screenshot.png",
      link: "https://anubloodbank.free.nf/",
      type: "live",
      tech: ["PHP", "MySQL", "Bootstrap"],
    },

    {
      title: "MedLink - Healthcare Service Platform",
      description:
        "A healthcare web platform providing appointment booking, doctor consultations, and prescription management. Built as a full-stack academic project with real-world healthcare use cases.",
      image: "Images/medLink-Screenshot.png",
      link: "https://github.com/Anuragpandey799/MedLink-All-Medical-Services-At-One-Click",
      type: "code",
      tech: ["PHP", "MySQL", "Bootstrap", "AOS"],
    },
  ];

  return (
    <>
      {/* ---------------- SEO ---------------- */}
      <Helmet>
        <title>
          Projects | Anurag Pandey - MERN Stack Developer & Freelancer
        </title>
        <meta
          name="description"
          content="Explore real-world projects built by Anurag Pandey, a MERN stack developer and freelancer. View live applications including PasteBin, TaskSphere, healthcare platforms, and full-stack web solutions."
        />
        <meta
          name="keywords"
          content="Anurag Pandey projects, MERN stack projects, React projects, freelance developer portfolio, full stack developer India, hire MERN developer"
        />
        <meta name="author" content="Anurag Pandey" />
      </Helmet>

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
            className="text-center text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
          >
            Real-World Projects
          </motion.h2>

          <p className="text-center max-w-3xl mx-auto mb-16 text-lg opacity-80">
            These projects demonstrate my ability to design, build, and deploy
            scalable full-stack applications. Available for freelance work,
            collaborations, and long-term opportunities.
          </p>

          <div className="space-y-24">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`grid gap-10 lg:grid-cols-2 items-center rounded-3xl p-8 shadow-xl backdrop-blur-lg ${
                  dark ? "bg-white/5" : "bg-white/70"
                }`}
              >
                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-72 object-cover"
                  />
                </motion.div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    {proj.title}
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-purple-500"
                      >
                        <FiExternalLink size={26} />
                      </a>
                    )}
                  </h3>

                  <p className="mb-6 leading-relaxed text-lg opacity-90">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-200 to-purple-200 text-purple-900 dark:from-pink-700 dark:to-purple-700 dark:text-white shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl ${
                        dark
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-purple-600 text-white hover:bg-purple-700"
                      }`}
                    >
                      {proj.type === "live"
                        ? "View Live Project"
                        : "View Source Code"}
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
