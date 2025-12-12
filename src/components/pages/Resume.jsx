// src/components/pages/Resume.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

function Resume({ dark }) {
  const handleDownloadAndOpen = () => {
    const pdfUrl = "/AnuragPandeyCV.pdf";

    // Open in new tab
    window.open(pdfUrl, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AnuragPandeyCV.pdf";
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-8 z-50"
    >
      <button
        onClick={handleDownloadAndOpen}
        className={`group relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500
          ${
            dark
              ? "bg-gradient-to-br from-purple-700 via-pink-600 to-red-600 text-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              : "bg-gradient-to-br from-pink-600 via-purple-600 to-green-400 text-gray-950 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          }
          hover:shadow-[0_0_40px_rgba(255,0,128,0.6)] hover:scale-110`}
      >
        {/* Glowing ring */}
        <span className="absolute w-full h-full rounded-full animate-ping bg-pink-500 opacity-70"></span>

        {/* Icon with hover rotation */}
        <FiDownload className="w-6 h-6 z-10 transition-transform duration-500 group-hover:rotate-180" />
      </button>
    </motion.div>
  );
}

export default Resume;
