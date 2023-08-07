import React, { useState } from "react";

import { Container } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import DeleteAlert from "components/commons/DeleteAlert";
import EmptyState from "components/commons/EmptyState";
import Toolbar from "components/commons/ToolBar";

import { SAMPLE_NOTES } from "./constants";
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
  const [selectedNote, setSelectedNote] = useState({});

  const handleDeleteNote = () => {
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

  const filterNotesListBySearchValue = (notes, value) =>
    notes.map(note => ({
      ...note,
      included:
        note.title.toLowerCase().includes(value.toLowerCase()) ||
        note.description.toLowerCase().includes(value.toLowerCase()),
    }));

  const handleSearchValueChange = value => {
    setNotes(prevIncludedNotes =>
      filterNotesListBySearchValue(prevIncludedNotes, value.trim())
    );
  };

  return (
    <Container>
      <Toolbar
        buttonLabel={t("button.add_entity", { entity: "Note" })}
        handleActionButtonClick={() => setCreateNotePaneVisibility(true)}
        searchPlaceholderValue={t("search.placeholder", { entity: "Note" })}
        title={t("page_titles.notes")}
        onSearchValueChange={handleSearchValueChange}
      />
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
        entity="note"
        entityTitle={selectedNote.title}
        isOpen={deleteAlertVisibliity}
        onClose={() => setDeleteAlertVisibliity(false)}
        onDelete={handleDeleteNote}
      />
      {notes.filter(note => note.included).length > 0 ? (
        <List
          notes={notes}
          showDeleteAlertForNote={showDeleteAlertForNote}
          showEditNotePane={showEditNotePane}
        />
      ) : (
        <EmptyState
          primaryAction={() => setCreateNotePaneVisibility(true)}
          primaryActionLabel={t("button.add_entity", { entity: "Note" })}
          subtitle={t("empty_state.notes.subtitle")}
          title={t("empty_state.notes.title")}
        />
      )}
    </Container>
  );
};

export default Notes;
