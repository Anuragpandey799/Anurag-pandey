import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound({ dark }) {
  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6 ${
        dark ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="text-center max-w-2xl">

        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-4"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="opacity-80 mb-10"
        >
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring the portfolio.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Home */}
          <Link
            to="/home"
            className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:scale-105 transition"
          >
            Go Home
          </Link>

          {/* Projects */}
          <Link
            to="/project"
            className={`px-6 py-3 rounded-full font-semibold border transition ${
              dark
                ? "border-white/20 hover:bg-white/10"
                : "border-black/20 hover:bg-black/10"
            }`}
          >
            View Projects
          </Link>

          {/* Notes */}
          <Link
            to="/notes"
            className={`px-6 py-3 rounded-full font-semibold border transition ${
              dark
                ? "border-white/20 hover:bg-white/10"
                : "border-black/20 hover:bg-black/10"
            }`}
          >
            Browse Notes
          </Link>
        </motion.div>

        {/* Decorative Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>

      </div>
    </section>
  );
}