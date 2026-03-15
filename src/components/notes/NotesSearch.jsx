import { useState } from "react";

export default function NotesSearch({ subjects, setFiltered, dark }) {

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {

    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = subjects.filter((s) =>
      s.title.toLowerCase().includes(value)
    );

    setFiltered(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={query}
      onChange={handleSearch}
      className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
        dark
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-300"
      }`}
    />
  );
}