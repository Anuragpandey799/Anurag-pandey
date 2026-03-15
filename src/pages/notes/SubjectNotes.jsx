import { useParams } from "react-router-dom";
import { notesData } from "../../data/notesData";
import NotesSidebar from "../../components/notes/NotesSidebar";

export default function SubjectNotes({ dark }) {
  const { subject } = useParams();

  const data = notesData[subject];

  if (!data) {
    return <div className="p-20 text-center">Subject not found</div>;
  }

  return (
    <div className="flex">

      <NotesSidebar dark={dark} />

      <main
        className={`flex-1 p-12 ${
          dark ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}
      >
        <h1 className="text-4xl font-bold mb-10">{data.title}</h1>

        <div className="space-y-6">
          {data.notes.map((note, i) => (
            <a
              key={i}
              href={note.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 rounded-xl border hover:scale-105 transition ${
                dark
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              {note.title}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}