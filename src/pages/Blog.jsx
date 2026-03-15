import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight, FiX } from "react-icons/fi";

function Blog({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const [activePost, setActivePost] = useState(null);
  const [filter, setFilter] = useState("all");

  /* ===================== BLOG DATA ===================== */

  const blogPosts = [
    /* ===================== JOURNEY BLOGS ===================== */

    {
      id: 1,
      category: "journey",
      year: "2022",
      title: "BCA First Year - Laying the Foundation",
      summary:
        "My journey into computer applications started with curiosity, confusion, and learning how to think logically.",
      readTime: "6 min read",
      tags: ["BCA", "C Programming", "Foundations"],
      content: `
 Background : 
I began my BCA journey in 2022 at Tilak Maharashtra Vidyapeeth, Pune. I had curiosity about technology but no clear roadmap.

 Subjects : Studied: 
- Programming in C
- Computer Fundamentals
- DBMS (Basics)
- Mathematics
- Digital Electronics

⚠️ Challenges
- Debugging errors
- Writing logic independently
- Understanding programming concepts

Outcome :
This year built my logical thinking and discipline toward learning programming.
      `,
    },

    {
      id: 2,
      category: "journey",
      year: "2023",
      title: "Second Year - Discovering Web Development",
      summary:
        "A challenging yet exciting year where I discovered my interest in web development.",
      readTime: "7 min read",
      tags: ["DSA", "Java", "Web"],
      content: `
 Subjects :
- Data Structures & Algorithms
- Java (OOP)
- DBMS & SQL
- Operating Systems
- Computer Networks
- Python Programming

 Turning Point:
While learning Java and DSA, I explored HTML, CSS, and JavaScript and found joy in building visual applications.

⚠️ Difficulties
- DSA problem-solving
- Backend concepts

 Growth:
This year strengthened my confidence and problem-solving abilities.
      `,
    },

    {
      id: 3,
      category: "journey",
      year: "2024-2025",
      title: "Final Year - Becoming a MERN Stack Developer",
      summary:
        "The year I transitioned from student to full-stack MERN developer through real projects.",
      readTime: "9 min read",
      tags: ["MERN", "React", "Node"],
      content: `
🛠 Technologies Learned
- React.js, Context API
- Node.js & Express.js
- MongoDB & Mongoose
- REST APIs, JWT Authentication
- MVC Architecture

 Projects: 
- MediTech (Ongoing MERN Healthcare Platform)
- eNotebook (Secure CRUD Notes App)
- MedLink (Final Year Project - Best Project Award 2025 🏆)

⚠️ Challenges
- Authentication bugs
- API security
- Deployment issues

 Outcome:
By the end of final year, I could independently build full-stack applications.
      `,
    },

    {
      id: 4,
      category: "journey",
      year: "Reflection",
      title: "What My BCA Journey Taught Me",
      summary:
        "A reflection on my growth, mistakes, lessons, and future goals.",
      readTime: "5 min read",
      tags: ["Reflection", "Growth"],
      content: `
 Lessons Learned:
- Consistency beats motivation
- Debugging builds patience
- Projects teach more than theory

 Achievements:
- Best Project Award (2025)
- Top 10 finalist in coding competition

 Future Goals:
- Build scalable systems
- Learn cloud & system design
- Grow as a professional developer
      `,
    },

    /* ===================== TECHNICAL BLOGS (UPDATED) ===================== */

    {
      id: 10,
      category: "tech",
      title: "TaskSphere - Modern Task Management App",
      summary:
        "A productivity-focused web app to organize, track, and manage tasks efficiently.",
      readTime: "5 min read",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Productivity App"],
      content: `
🔗 Live Project
https://task-sphere-vert.vercel.app/

🛠 Project Overview
TaskSphere is a modern task management application designed to help users organize daily tasks efficiently. Users can add, update, delete, and track their tasks, categorize them, and mark tasks as completed. The app is aimed at improving productivity through a clean and interactive interface.

 Key Features:
- Add, edit, and delete tasks easily
- Mark tasks as complete or pending
- Categorize tasks with priorities or tags
- Responsive and intuitive UI for mobile and desktop
- Real-time updates and smooth interactions

🛠 Technology Stack
- Frontend: React.js + Tailwind CSS
- Backend: Node.js + Express.js
- Database: MongoDB for task storage
- Deployment: Vercel

 What I Learned:
- Building interactive UIs with React
- Managing global state for tasks
- Implementing REST APIs with Node.js
- MongoDB CRUD operations and data modeling
- Deploying full-stack apps with best practices
  `,
    },

    {
      id: 5,
      category: "tech",
      title: "Building a Full-Stack MERN Application from Scratch",
      summary:
        "A practical guide to building a secure and scalable MERN application.",
      readTime: "6 min read",
      tags: ["MERN", "JWT", "APIs"],
      content: `
This blog explains how I build MERN applications using React, Node.js, Express, and MongoDB.

🔹 Key Topics
- Project structure
- REST API design
- JWT authentication
- MVC architecture
- Deployment on Vercel & Render

🔹 Real Learning
This approach is based on my real project experience, not tutorials.
      `,
    },

    {
      id: 6,
      category: "tech",
      title: "Mastering React Hooks for Modern Development",
      summary:
        "How React Hooks helped me write cleaner and scalable components.",
      readTime: "5 min read",
      tags: ["React", "Hooks"],
      content: `
I explain how I use useState, useEffect, useContext, and custom hooks in real projects.

🔹 Use Cases
- API calls
- Global state management
- Performance optimization
      `,
    },

    {
      id: 7,
      category: "tech",
      title: "Creating RESTful APIs with Node.js & Express",
      summary:
        "Designing scalable APIs with authentication and error handling.",
      readTime: "5 min read",
      tags: ["Node", "Express", "API"],
      content: `
This blog explains how I design REST APIs using Express.

🔹 Covered Topics
- Routing
- Middleware
- JWT protection
- Error handling
      `,
    },

    {
      id: 8,
      category: "tech",
      title: "Deploying MERN Applications to the Cloud",
      summary: "How I deploy real-world MERN applications.",
      readTime: "4 min read",
      tags: ["Deployment", "Vercel"],
      content: `
I explain frontend deployment on Vercel and backend on Render with environment variables.
      `,
    },

    {
      id: 9,
      category: "tech",
      title: "Optimizing Performance in React Applications",
      summary: "Techniques I use to improve performance in production apps.",
      readTime: "4 min read",
      tags: ["Performance", "React"],
      content: `
Topics include memoization, lazy loading, code splitting, and performance debugging.
      `,
    },
    {
      id: 11,
      category: "tech",
      title: "PasteBin - Secure Paste Sharing Web App",
      summary:
        "A web app to quickly store, manage, and share text or code snippets securely.",
      readTime: "5 min read",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Web App"],
      content: `
🔗 Live Project
https://pastebinn.vercel.app/

🛠 Project Overview
PasteBin is a lightweight and secure web application where users can create, store, and share text or code snippets. The app allows developers and users to manage their snippets efficiently and share them with others through unique URLs.

Key Features:
- Create and save text or code snippets instantly
- Unique URL for sharing snippets with anyone
- Syntax highlighting for various programming languages
- Delete or manage pastes securely
- Responsive design for desktop and mobile

🛠 Technology Stack
- Frontend: React.js + Tailwind CSS
- Backend: Node.js + Express.js
- Database: MongoDB for storing pastes
- Deployment: Vercel

 What I Learned:
- Full-stack app deployment with Vercel
- CRUD operations with MongoDB
- Handling state and user input in React
- Building secure REST APIs with Node.js
- Creating clean and responsive UI
  `,
    },
  ];

  const filteredPosts =
    filter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  /* ===================== UI ===================== */

  return (
    <section
      className={`min-h-screen px-6 py-20 ${
        dark
          ? "bg-gradient-to-b from-black via-slate-900 to-black text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl font-extrabold mb-4">
          My Developer Journey & Blogs 
        </h1>
        <p className="text-center opacity-70 mb-12">
          Learning, building, failing, and growing as a developer
        </p>

        {/* FILTERS */}
        <div className="flex justify-center gap-4 mb-14">
          {["all", "journey", "tech"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-5 py-2 rounded-full font-medium ${
                filter === btn
                  ? "bg-indigo-500 text-white"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {btn.toUpperCase()}
            </button>
          ))}
        </div>

        {/* BLOG LIST */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              data-aos="fade-up"
              onClick={() => setActivePost(post)}
              className={`cursor-pointer p-6 rounded-xl border shadow-lg transition hover:-translate-y-2 ${
                dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
              }`}
            >
              <div className="text-sm opacity-60 mb-1">
                {post.year || "Blog"} • {post.readTime}
              </div>

              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="opacity-80 mb-4">{post.summary}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-indigo-400 text-sm">
                Read More <FiArrowRight />
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activePost && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 max-w-3xl w-full p-8 rounded-2xl relative overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 text-2xl"
              >
                <FiX />
              </button>

              <h2 className="text-3xl font-bold mb-2">{activePost.title}</h2>
              <p className="text-sm opacity-70 mb-6">
                {activePost.year || "Blog"} • {activePost.readTime}
              </p>

              <p className="whitespace-pre-line leading-relaxed">
                {activePost.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
