import React, { useState } from "react";
import Notes from "./Notes";
import "./DragAndDropNotes.css";

const DragAndDropNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Check the descroption for my frontent interview prep course",
    },
    {
      id: 2,
      text: "second frontend course description",
    },
  ]);
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default DragAndDropNotes;
