import { useState } from "react";
import NotesGrid from "../../components/notes/NotesGrid";
import NotesSearch from "../../components/notes/NotesSearch";
import { notesData } from "../../data/notesData";

export default function Notes({ dark }) {

  const subjects = Object.entries(notesData).map(([slug, subject]) => ({
    ...subject,
    slug,
  }));

  const [filtered, setFiltered] = useState(subjects);

  return (
    <section
      className={`min-h-screen py-24 px-6 ${
        dark ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Computer Science Notes
        </h1>

        <p className="text-center max-w-2xl mx-auto mb-10 opacity-80">
          Free study notes for Computer Science students.
        </p>

        {/* SEARCH */}
        <div className="max-w-xl mx-auto mb-14">
          <NotesSearch
            subjects={subjects}
            setFiltered={setFiltered}
            dark={dark}
          />
        </div>

        {/* GRID */}
        <NotesGrid subjects={filtered} dark={dark} />

      </div>
    </section>
  );
}