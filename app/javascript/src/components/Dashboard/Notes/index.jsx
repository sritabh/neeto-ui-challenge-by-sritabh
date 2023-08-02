import React, { useState } from "react";

import Toolbar from "components/commons/ToolBar";

import { SAMPLE_NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import List from "./List";

const Notes = () => {
  const [notes, setNotes] = useState(SAMPLE_NOTES);
  const [deleteAlertVisibliity, setDeleteAlertVisibliity] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleDelete = () => {
    setNotes(notes.filter(note => note.id !== selectedNoteId));
  };

  const showDeleteAlertForNote = id => {
    setDeleteAlertVisibliity(true);
    setSelectedNoteId(id);
  };

  return (
    <div className="flex w-full flex-col">
      <DeleteAlert
        handleDelete={handleDelete}
        isOpen={deleteAlertVisibliity}
        onClose={() => setDeleteAlertVisibliity(false)}
      />
      <Toolbar
        buttonLabel="Add note +"
        searchPlaceholderValue="Search Name, Email, Phone Number,etc."
        title="All Notes"
        onSearchChange={function noRefCheck() {}}
      />
      <List notes={notes} showDeleteAlertForNote={showDeleteAlertForNote} />
    </div>
  );
};

export default Notes;
