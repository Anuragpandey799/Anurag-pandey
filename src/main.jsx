import { StrictMode, useState } from "react";
import { React } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Contact from "./components/pages/Contact.jsx";
import Project from "./components/pages/Project.jsx";
import About from "./components/pages/About.jsx"; // Corrected import
import GreatIndianScientist from "./components/projects/GreatIndianScientist.jsx";
import Resume from "./components/pages/Resume.jsx";
import Blog from "./components/pages/Blog.jsx";
import Services from "./components/pages/Services.jsx";

const Main = () => {
  const [dark, setDark] = useState(true);

  return (
    <Router
      basename={process.env.NODE_ENV === "production" ? "/" : "/my_portfolio"}
    >
      <Routes>
        <Route path="/" element={<App dark={dark} setDark={setDark} />}>
          <Route index element={<Home dark={dark} />} />
          <Route path="home" element={<Home dark={dark} />} />
          <Route path="services" element={<Services dark={dark} />} />
          <Route path="contact" element={<Contact dark={dark} />} />
          <Route path="about" element={<About dark={dark} />} />
          <Route path="project" element={<Project dark={dark} />} />
          <Route
            path="great scientist"
            element={<GreatIndianScientist dark={dark} />}
          />
          {/* <Route path="resume" element={<Resume dark={dark} />} /> */}
          <Route path="blog" element={<Blog dark={dark} />} />
        </Route>
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Main />
    </HelmetProvider>
  </StrictMode>,
);
