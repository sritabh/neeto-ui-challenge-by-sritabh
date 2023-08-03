import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import DeleteAlert from "components/commons/DeleteAlert";
import Toolbar from "components/commons/ToolBar";

import { SAMPLE_NOTES } from "./constants";
import List from "./List";
import NewNotePane from "./Pane/Create";
import EditNotePane from "./Pane/Edit";

import { noop } from "../util";

const Notes = () => {
  const { t } = useTranslation();

  const [notes, setNotes] = useState(SAMPLE_NOTES);
  const [deleteAlertVisibliity, setDeleteAlertVisibliity] = useState(false);
  const [createNotePaneVisibility, setCreateNotePaneVisibility] =
    useState(false);
  const [editNotePaneVisibility, setEditNotePaneVisibility] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const deleteNote = () => {
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
        deleteAction={deleteNote}
        entity="Note"
        isOpen={deleteAlertVisibliity}
        onClose={() => setDeleteAlertVisibliity(false)}
      />
      <Toolbar
        buttonLabel={t("button.add_entity", { entity: "Note" })}
        handleActionButtonClick={() => setCreateNotePaneVisibility(true)}
        handleSearchValueChange={noop}
        searchPlaceholderValue={t("search.placeholder", { entity: "Note" })}
        title={t("page_titles.notes")}
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
