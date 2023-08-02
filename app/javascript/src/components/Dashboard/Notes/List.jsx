import React from "react";

import Item from "./Item";

const List = ({ notes, showDeleteAlertForNote }) => (
  <div className="mt-2 flex w-full flex-col">
    {notes.map(note => (
      <Item
        key={note.id}
        note={note}
        showDeleteAlertForNote={showDeleteAlertForNote}
      />
    ))}
  </div>
);

export default List;
