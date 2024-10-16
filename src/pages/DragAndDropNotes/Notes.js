import React from "react";
import Note from "./Note";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  return (
    <div className="notes">
      {notes.map((note, index) => {
        return <Note content={note.text} key={note.id} />;
      })}
    </div>
  );
};

export default Notes;
