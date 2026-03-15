import { Link, useLocation } from "react-router-dom";
import { notesData } from "../../data/notesData";

export default function NotesSidebar({ dark }) {

  const location = useLocation();

  return (
    <aside
      className={`w-64 min-h-screen p-6 border-r sticky top-20 overflow-y-auto ${
        dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      }`}
    >

      <h2 className="text-xl font-bold mb-6">
        Subjects
      </h2>

      <ul className="space-y-2">

        {Object.entries(notesData).map(([slug, subject]) => {

          const active = location.pathname === `/notes/${slug}`;

          return (
            <li key={slug}>
              <Link
                to={`/notes/${slug}`}
                className={`block px-4 py-2 rounded-lg transition ${
                  active
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-500 hover:text-white"
                }`}
              >
                {subject.title}
              </Link>
            </li>
          );
        })}

      </ul>

    </aside>
  );
}