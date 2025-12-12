import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone, FiMail, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

function Contact({ dark }) {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t5elwuo", "template_vpu27nc", form.current, {
        publicKey: "D6RiOiKcZLw3hW6Cb",
      })
      .then(
        () => {
          setButtonText("Sent Successfully ✓");
          e.target.reset();

          setTimeout(() => setButtonText("Send Message"), 3000);
        },
        () => {
          setButtonText("Error! Try Again");
          setTimeout(() => setButtonText("Send Message"), 3000);
        }
      );
  };

  return (
    <section
      className={`min-h-screen py-20 px-6 sm:px-12 transition-all duration-500 ${
        dark
          ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-black text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-300 text-gray-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, freelancing, or just a
          friendly chat. I’m always open to new opportunities!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold mb-4">Contact Details</h3>

          <p className="text-lg opacity-90 leading-relaxed">
            Have a project or just want to say hello?  
            I’d love to hear from you. Let’s build something great together!
          </p>

          <div className="space-y-5 mt-6">
            <div className="flex items-center gap-3 text-lg">
              <FiPhone className="text-pink-400 text-2xl" />
              <a
                href="tel:+917991845638"
                className="hover:text-pink-400 transition-all"
              >
                +91 79918 45638
              </a>
            </div>

            <div className="flex items-center gap-3 text-lg">
              <FiMail className="text-purple-400 text-2xl" />
              <a
                href="mailto:anurag.application799@gmail.com"
                className="hover:text-purple-400 transition-all"
              >
                anurag.application799@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FiMail className="text-purple-400 text-2xl" />
              <a
                href="mailto:anuhackerag799@gmail.com"
                className="hover:text-purple-400 transition-all"
              >
                anuhackerag799@gmail.com
              </a>
            </div>
          </div>

          <p className="mt-6 text-sm opacity-60">I usually reply within 24 hours.</p>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`rounded-2xl shadow-2xl p-8 tablet:p-10 border transition-all duration-300 ${
            dark
              ? "bg-white/10 backdrop-blur-xl border-white/10"
              : "bg-white/90 backdrop-blur-lg border-gray-200"
          }`}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* NAME */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Name</label>
              <input
                name="from_name"
                type="text"
                required
                placeholder="Enter your name"
                className={`p-3 rounded-md border transition-all focus:ring-2 focus:outline-none ${
                  dark
                    ? "bg-[#0f172a] text-white border-gray-700 focus:ring-purple-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-pink-400"
                }`}
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Email</label>
              <input
                name="from_email"
                type="email"
                required
                placeholder="you@example.com"
                className={`p-3 rounded-md border transition-all focus:ring-2 focus:outline-none ${
                  dark
                    ? "bg-[#0f172a] text-white border-gray-700 focus:ring-purple-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-purple-400"
                }`}
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Phone</label>
              <input
                name="from_phone"
                type="tel"
                required
                placeholder="Enter your phone number"
                className={`p-3 rounded-md border transition-all focus:ring-2 focus:outline-none ${
                  dark
                    ? "bg-[#0f172a] text-white border-gray-700 focus:ring-purple-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-pink-300"
                }`}
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message..."
                className={`p-3 rounded-md border transition-all focus:ring-2 focus:outline-none ${
                  dark
                    ? "bg-[#0f172a] text-white border-gray-700 focus:ring-purple-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-purple-300"
                }`}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg ${
                buttonText.includes("Sent")
                  ? "bg-green-600 text-white"
                  : dark
                  ? "bg-purple-700 hover:bg-purple-800 text-white"
                  : "bg-pink-500 hover:bg-pink-600 text-white"
              }`}
            >
              <FiSend className="text-xl" />
              {buttonText}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
