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
      role: "Full stack Developer",
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
        "State Management",
        "Responsive Design",
      ],
    },

    {
      title: "CareOps - Healthcare Admin Dashboard",
      role: "Full stack Developer",
      description:
        "A modern healthcare admin dashboard designed to manage hospital operations efficiently. Features include patient management, analytics overview, appointment tracking, and responsive UI with clean data visualization for better operational control.",
      image: "Images/careops-screenshot.png",
      link: "https://careopsadmin-anurag.vercel.app/",
      type: "live",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "UI/UX Design",
        "Routing",
        "Dashboard UI",
        "State Management",
        "Responsive Design",
      ],
    },

    {
      title: "Megaplex Prime - Movie Booking Platform",
      role: "Full stack Developer",
      description:
        "A modern movie booking web application with an interactive UI, movie listings, showtime selection, and responsive booking interface. Built to simulate real-world cinema ticket booking experience with smooth user interaction.",
      image: "Images/megaplex-screenshot.png",
      link: "https://megaplex-anurag.vercel.app/",
      type: "live",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "UI/UX Design",
        "Routing",
        "Responsive Web App",
      ],
    },

    {
      title: "Mahindra Blossom - Real Estate Landing Page",
      role: "Front-end Developer",
      description:
        "A premium real estate landing page designed for luxury property marketing. Features smooth scrolling, modern UI sections, call-to-action design, and conversion-focused layout. Built with performance optimization and responsive design in mind.",
      image: "Images/mahindra-blossom-screenshot.png",
      link: "https://anuragpandey799.github.io/Mahindra-Blossom/",
      type: "live",
      tech: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "AOS",
        "Responsive Design",
      ],
    },

    {
      title: "PasteBin - Secure Paste Sharing Web App",
      role: "Full stack Developer",
      description:
        "A fast and minimal paste-sharing web application to store and share code or text snippets securely. Focused on performance, clean UI, Redis-based storage, and ease of use. Ideal for developers to share content instantly.",
      image: "Images/PasteBin-screenshot.png",
      link: "https://pastebinn.vercel.app/",
      type: "live",
      tech: ["Next.js", "Redis", "Tailwind CSS", "Vercel", "UI/UX", "Web App"],
    },

    {
      title: "TaskSphere - Modern Task Management App",
      role: "Full stack Developer",
      description:
        "A modern task management application that helps users organize, track, and manage daily tasks efficiently with a clean and responsive UI. Built with productivity, state management, and user experience in mind.",
      image: "Images/TaskSphere-screenshot.png",
      link: "https://task-sphere-vert.vercel.app",
      type: "live",
      tech: [
        "React.js",
        "Tailwind CSS",
        "MongoDB",
        "Express.js",
        "Node.js",
        "JWT Authentication",
        "State Management",
        "Responsive UI",
      ],
    },

    {
      title: "Portfolio Website",
      role: "Front-end Developer",
      description:
        "My personal portfolio showcasing projects, skills, blogs, and contact details. Built with React and Tailwind CSS featuring dark mode, smooth animations, Framer Motion transitions, and a highly interactive user experience.",
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
      role: "Full stack Developer",
      description:
        "A PHP-based blood bank management system to manage donors, blood inventory, and blood requests. Includes admin and donor dashboards with structured database architecture and real-time record management.",
      image: "Images/bbms-Screenshot.png",
      link: "https://anubloodbank.free.nf/",
      type: "live",
      tech: ["PHP", "MySQL", "Bootstrap", "AOS", "XAMPP Server"],
    },

    {
      title: "MedLink - Healthcare Service Platform",
      role: "Full stack Developer",
      description:
        "A healthcare web platform providing appointment booking, doctor consultations, and prescription management. Built as a full-stack academic project demonstrating real-world healthcare service workflows.",
      image: "Images/medLink-Screenshot.png",
      link: "https://github.com/Anuragpandey799/MedLink-All-Medical-Services-At-One-Click",
      type: "code",
      tech: ["PHP", "MySQL", "Bootstrap", "AOS", "XAMPP Server"],
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
                  <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
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

                  {proj.role && (
                    <p className="text-sm font-semibold text-pink-500 mb-4">
                      {proj.role}
                    </p>
                  )}

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
