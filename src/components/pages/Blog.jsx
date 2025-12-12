import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight, FiX } from "react-icons/fi";

function Blog({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activePost, setActivePost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building a Full-Stack MERN Application from Scratch",
      summary:
        "Step-by-step guide to creating a full-stack MERN (MongoDB, Express.js, React, Node.js) application with user authentication and REST APIs.",
      content: `In this post, I will guide you through building a complete MERN stack web application. We'll start by setting up a Node.js server with Express, connect MongoDB for database storage, and then build a responsive React frontend. Authentication will be handled using JWT tokens and secure password hashing. We'll also explore structuring the project for scalability and deploying it to a cloud platform like Heroku or Vercel. By the end, you'll have a solid foundation for building production-ready MERN applications.`,
      date: "December 2025",
    },
    {
      id: 2,
      title: "Mastering React Hooks for Modern Web Development",
      summary:
        "Understanding and leveraging React Hooks to write cleaner, functional components and manage state effectively.",
      content: `React Hooks revolutionized the way developers handle state and lifecycle in functional components. In this article, we cover essential hooks like useState, useEffect, useContext, and custom hooks. We'll explore practical examples like fetching data from APIs, handling forms, and managing global state using Context API. Hooks allow you to write more readable and maintainable code, reducing the need for class components.`,
      date: "November 2025",
    },
    {
      id: 3,
      title: "Creating RESTful APIs with Node.js and Express",
      summary:
        "Learn how to design and implement RESTful APIs using Node.js and Express, including routing, middleware, and error handling.",
      content: `REST APIs are the backbone of modern web applications. This post covers building RESTful APIs from scratch using Node.js and Express. We'll discuss proper routing, middleware usage for logging and authentication, handling HTTP requests/responses, and managing errors gracefully. Examples include building CRUD endpoints for a user management system. Additionally, we’ll touch on connecting the API to a MongoDB database using Mongoose.`,
      date: "October 2025",
    },
    {
      id: 4,
      title: "Deploying MERN Applications to the Cloud",
      summary:
        "A practical guide to deploying full-stack applications built with MERN on platforms like Vercel, Netlify, and Heroku.",
      content: `After building a MERN application, deployment is the next critical step. This article explains deploying the frontend and backend to cloud platforms. We'll cover environment variables, CORS handling, connecting to cloud-hosted MongoDB, and best practices for production. You will learn how to deploy the React frontend on Vercel or Netlify and Node/Express backend on Heroku, ensuring your app is live and accessible.`,
      date: "September 2025",
    },
    {
      id: 5,
      title: "Optimizing Performance in React Applications",
      summary:
        "Tips and techniques for improving React app performance, including memoization, lazy loading, and code splitting.",
      content: `Performance is crucial for user experience. In this post, we'll cover techniques to optimize React apps: using React.memo for preventing unnecessary re-renders, lazy loading components with React.lazy and Suspense, code splitting to reduce bundle size, and optimizing state management. Additionally, we’ll discuss analyzing performance using React DevTools and Chrome DevTools to identify bottlenecks.`,
      date: "August 2025",
    },
  ];

  return (
    <section
      className={`min-h-screen px-6 py-20 ${
        dark
          ? "bg-gradient-to-b from-black via-slate-900 to-black text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h1
          className={`text-center text-5xl font-extrabold mb-14 tracking-tight ${
            dark
              ? "bg-gradient-to-r from-teal-300 via-indigo-400 to-pink-300 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
          }`}
        >
          DevLog – Insights & Stories
        </h1>

        {/* BLOG CARDS */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`break-inside-avoid p-5 rounded-xl shadow-xl cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl backdrop-blur-xl border ${
                dark
                  ? "bg-white/5 border-white/10 hover:border-teal-400/50"
                  : "bg-white/60 border-gray-200 hover:border-purple-400/40"
              }`}
              onClick={() => setActivePost(post)}
              data-aos="fade-up"
            >
              <p
                className={`text-xs mb-1 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {post.date}
              </p>

              <h3
                className={`font-bold text-xl mb-2 ${
                  dark ? "text-teal-300" : "text-purple-700"
                }`}
              >
                {post.title}
              </h3>

              {/* TRUNCATED SUMMARY */}
              <p
                className={`text-sm ${dark ? "text-gray-300" : "text-gray-800"} line-clamp-2`}
              >
                {post.summary}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-indigo-400">
                Read More <FiArrowRight />
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activePost && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <div
              className={`max-w-3xl w-full p-8 rounded-2xl relative overflow-y-auto max-h-[90vh] border shadow-2xl ${
                dark
                  ? "bg-slate-900 border-white/10"
                  : "bg-white border-gray-300"
              }`}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 text-2xl p-2 rounded-full hover:bg-white/10 transition"
              >
                <FiX />
              </button>

              {/* TITLE */}
              <h2 className="text-3xl font-bold mb-2">{activePost.title}</h2>

              {/* DATE */}
              <p className="text-sm opacity-70 mb-5">{activePost.date}</p>

              {/* FULL CONTENT */}
              <p className="leading-relaxed text-[1.05rem] whitespace-pre-line">
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
