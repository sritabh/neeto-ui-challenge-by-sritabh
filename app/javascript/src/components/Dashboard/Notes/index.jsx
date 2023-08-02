import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import Toolbar from "components/commons/ToolBar";

import { SAMPLE_NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import List from "./List";
import NewNotePane from "./Pane/Create";
import EditNotePane from "./Pane/Edit";

const Notes = () => {
  const { t } = useTranslation();

  const [notes, setNotes] = useState(SAMPLE_NOTES);
  const [deleteAlertVisibliity, setDeleteAlertVisibliity] = useState(false);
  const [createNotePaneVisibility, setCreateNotePaneVisibility] =
    useState(false);
  const [editNotePaneVisibility, setEditNotePaneVisibility] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleDelete = () => {
    setNotes(notes.filter(note => note.id !== selectedNote.id));
  };

  const showEditNotePane = note => {
    setEditNotePaneVisibility(true);
    setSelectedNote(note);
  };

  const showDeleteAlertForNote = note => {
    setDeleteAlertVisibliity(true);
    setSelectedNote(note);
  };

  return (
    <div className="flex w-full flex-col">
      <NewNotePane
        setNotes={setNotes}
        setShowPane={setCreateNotePaneVisibility}
        showPane={createNotePaneVisibility}
      />
      <EditNotePane
        note={selectedNote}
        setNotes={setNotes}
        setShowPane={setEditNotePaneVisibility}
        showPane={editNotePaneVisibility}
      />
      <DeleteAlert
        handleSubmit={handleDelete}
        isOpen={deleteAlertVisibliity}
        onClose={() => setDeleteAlertVisibliity(false)}
      />
      <Toolbar
        buttonLabel={t("button.add_entity", { entity: "Note" })}
        handleActionButtonClick={() => setCreateNotePaneVisibility(true)}
        searchPlaceholderValue={t("search.placeholder", { entity: "Note" })}
        title={t("page_titles.notes")}
        onSearchChange={() => {}}
      />
      <List
        notes={notes}
        showDeleteAlertForNote={showDeleteAlertForNote}
        showEditNotePane={showEditNotePane}
      />
    </div>
  );
};

export default Notes;
