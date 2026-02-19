import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/pages/SideBar";
import Preloader from "./components/PreLoader";
import Resume from "./components/pages/Resume";

import AnimatedCursor from "react-animated-cursor";

function App({ dark = false, setDark = () => {} }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const siteUrl = "https://your-portfolio-domain.com"; // 🔴 CHANGE THIS
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <HelmetProvider>
      <>
        {loading ? (
          <Preloader />
        ) : (
          <div
            className={`${
              dark ? "bg-black text-white" : "bg-white text-black"
            } transition-colors duration-500`}
          >
            {/* 🔍 GLOBAL SEO */}
            <Helmet>
              <title>Anurag Pandey | MERN Stack Developer & Freelancer</title>

              <meta
                name="description"
                content="Anurag Pandey is a MERN Stack Developer specializing in React, Node.js, MongoDB, and modern web applications. Available for freelance and remote work."
              />

              <meta
                name="keywords"
                content="Anurag Pandey, MERN Stack Developer, React Developer, Full Stack Developer, Freelance Web Developer, JavaScript Developer"
              />

              <link rel="canonical" href={`${siteUrl}${location.pathname}`} />

              {/* Open Graph */}
              <meta
                property="og:title"
                content="Anurag Pandey | MERN Stack Developer"
              />
              <meta
                property="og:description"
                content="Portfolio of Anurag Pandey - MERN Stack Developer building scalable and modern web applications."
              />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={siteUrl} />
              <meta property="og:image" content={`${siteUrl}/og-image.png`} />

              {/* Twitter */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Anurag Pandey | MERN Stack Developer"
              />
              <meta
                name="twitter:description"
                content="Freelance MERN Stack Developer skilled in React, Node.js, MongoDB, and UI/UX."
              />

              {/* JSON-LD Schema */}
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  name: "Anurag Pandey",
                  url: siteUrl,
                  jobTitle: "MERN Stack Developer",
                  sameAs: [
                    "https://github.com/Anuragpandey799",
                    "https://www.linkedin.com/in/anurag-pandey-7b4502304",
                  ],
                  knowsAbout: [
                    "React.js",
                    "Node.js",
                    "MongoDB",
                    "Express.js",
                    "JavaScript",
                    "Web Development",
                  ],
                })}
              </script>
            </Helmet>

            {/* UI */}
            <AnimatedCursor
              innerSize={10}
              outerSize={24}
              color={dark ? "255,0,0" : "0,0,0"}
              outerAlpha={0.25}
              innerScale={0.8}
              outerScale={3}
              trailingSpeed={6}
              clickables={["a", "button", ".link"]}
            />

            <Header dark={dark} setDark={setDark} />
            <SideBar dark={dark} />

            <main className="min-h-screen pt-16">
              <Outlet />

              <Resume dark={dark} />
            </main>

            <Footer dark={dark} />
          </div>
        )}
      </>
    </HelmetProvider>
  );
}

export default App;
