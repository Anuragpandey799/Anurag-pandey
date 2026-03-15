import NotesCard from "./NotesCard";

export default function NotesGrid({ subjects, dark }) {

  if (!subjects.length) {
    return (
      <p className="text-center text-lg opacity-70">
        No notes found.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {subjects.map((subject) => (
        <NotesCard
          key={subject.slug}
          subject={subject}
          dark={dark}
        />
      ))}
    </div>
  );
}