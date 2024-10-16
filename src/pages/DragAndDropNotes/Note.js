import React from "react";

const Note = ({ content, ...props }) => {
  return (
    <div className="note" {...props}>
      📌{content}
    </div>
  );
};

export default Note;
