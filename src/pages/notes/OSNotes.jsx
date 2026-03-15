import { notesData } from "../../data/notesData";

export default function OSNotes({ dark }) {

  const subject = notesData.os;

  return (
    <section
      className={`min-h-screen py-24 px-6 ${
        dark ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          {subject.title}
        </h1>

        <div className="space-y-6">

          {subject.notes.map((note) => (
            <div
              key={note.id}
              className={`p-6 rounded-xl border ${
                dark
                  ? "bg-gray-900 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >

              <h3 className="text-xl font-semibold mb-2">
                {note.title}
              </h3>

              <p className="text-sm opacity-70 mb-4">
                {note.unit}
              </p>

              {/* HERE YOU USE THE LINK */}
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                View Note
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}