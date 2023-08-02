import React from "react";

import Item from "./Item";

const List = ({ notes, showDeleteAlertForNote, showEditNotePane }) => (
  <div className="mt-2 flex w-full flex-col">
    {notes.map(note => (
      <Item
        key={note.id}
        note={note}
        showDeleteAlertForNote={showDeleteAlertForNote}
        showEditNotePane={showEditNotePane}
      />
    ))}
  </div>
);

export default List;
