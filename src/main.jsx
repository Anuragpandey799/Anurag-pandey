import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import ScrollToTop from "./components/layout/ScrollToTop";

// Pages
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Services from "./pages/Services.jsx";

// Notes System
import Notes from "./pages/notes/Notes.jsx";
import SubjectNotes from "./pages/notes/SubjectNotes.jsx";

// 404 Page Not Found
import NotFound from "./pages/NotFound.jsx";
import NoteViewer from "./pages/notes/NoteViewer.jsx";

const Main = () => {
  const [dark, setDark] = useState(true);

  return (
    <Router
      basename={process.env.NODE_ENV === "production" ? "/" : "/my_portfolio"}
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App dark={dark} setDark={setDark} />}>
          {/* HOME */}
          <Route index element={<Home dark={dark} />} />
          <Route path="home" element={<Home dark={dark} />} />
          {/* SERVICES */}
          <Route path="services" element={<Services dark={dark} />} />
          {/* CONTACT */}
          <Route path="contact" element={<Contact dark={dark} />} />
          {/* ABOUT */}
          <Route path="about" element={<About dark={dark} />} />
          {/* PROJECTS */}
          <Route path="project" element={<Project dark={dark} />} />
          {/* BLOG */}
          <Route path="blog" element={<Blog dark={dark} />} />
          {/* ================= NOTES SYSTEM ================= */}
          {/* Notes Landing Page */}
          <Route path="notes" element={<Notes dark={dark} />} />
          {/* Dynamic Subject Page */}
          <Route path="notes/:subject" element={<SubjectNotes dark={dark} />} />
          {/* ============= 404 Page not Found========================= */}
          <Route path="*" element={<NotFound dark={dark} />} />
          {/* ========Note viewer============================ */}
          <Route
            path="notes/:subject/:noteId"
            element={<NoteViewer dark={dark} />}
          />
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
