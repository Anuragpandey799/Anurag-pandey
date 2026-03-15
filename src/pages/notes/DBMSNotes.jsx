export default function DBMSNotes({ dark }) {
  const notes = [
    {
      title: "ER Model",
      link: "/notes/dbms/er-model.pdf",
    },
    {
      title: "Normalization",
      link: "/notes/dbms/normalization.html",
    },
  ];

  return (
    <section className={`min-h-screen py-24 px-6 ${
      dark ? "bg-black text-white" : "bg-gray-100 text-black"
    }`}>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-12">
          DBMS Notes
        </h1>

        <div className="space-y-6">
          {notes.map((note,i)=>(
            <a key={i} href={note.link} target="_blank"
              className={`block p-6 rounded-xl border ${
                dark ? "border-gray-700 bg-gray-900"
                : "border-gray-200 bg-white"
              }`}
            >
              {note.title}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}