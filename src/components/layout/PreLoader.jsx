import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Bouncing Dots */}
      <div className="flex space-x-3 mb-6">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-bounce" />
        <div
          className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-bounce"
          style={{ animationDelay: "0.15s" }}
        />
        <div
          className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-bounce"
          style={{ animationDelay: "0.3s" }}
        />
      </div>

      {/* Spinner Icon */}
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        className="text-3xl text-purple-400 mb-3"
      />

      {/* Loading Text */}
      <div className="text-white text-lg font-semibold animate-pulse">
        Loading <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Anurag.dev</span>...
      </div>
    </div>
  );
};

export default Preloader;
