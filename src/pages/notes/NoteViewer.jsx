import { useParams } from "react-router-dom";
import { notesData } from "../../data/notesData";

export default function NoteViewer({ dark }) {

  const { subject, noteId } = useParams();

  const note = notesData[subject]?.notes.find(n => n.id === noteId);

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <section
      className={`min-h-screen py-24 px-6 ${
        dark ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          {note.title}
        </h1>

        {note.type === "html" ? (
          <iframe
            src={note.link}
            title={note.title}
            className="w-full h-[80vh] border rounded-lg"
          />
        ) : (
          <iframe
            src={note.link}
            title={note.title}
            className="w-full h-[80vh] border rounded-lg"
          />
        )}

      </div>
    </section>
  );
}