import { Link } from "react-router-dom";

export default function NotesCard({ subject, dark }) {

  return (
    <Link
      to={`/notes/${subject.slug}`}
      className={`group p-6 rounded-2xl shadow-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        dark
          ? "bg-gray-900 border-gray-700 hover:border-purple-500"
          : "bg-white border-gray-200 hover:border-purple-400"
      }`}
    >

      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition">
        {subject.title}
      </h3>

      <p className="text-sm opacity-80 mb-4">
        {subject.description || "Computer science study notes"}
      </p>

      {/* NOTES COUNT */}
      {subject.notes && (
        <p className="text-xs opacity-70 mb-3">
          {subject.notes.length} Notes Available
        </p>
      )}

      <div className="text-purple-500 font-semibold text-sm">
        View Notes →
      </div>

    </Link>
  );
}