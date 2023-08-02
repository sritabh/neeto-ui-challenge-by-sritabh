import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import Toolbar from "components/commons/ToolBar";

import { SAMPLE_NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import List from "./List";

const Notes = () => {
  const { t } = useTranslation();

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
        handleSubmit={handleDelete}
        isOpen={deleteAlertVisibliity}
        onClose={() => setDeleteAlertVisibliity(false)}
      />
      <Toolbar
        buttonLabel={t("button.add_entity", { entity: "Note" })}
        searchPlaceholderValue={t("search.placeholder", { entity: "Note" })}
        title={t("page_titles.notes")}
        onSearchChange={() => {}}
      />
      <List notes={notes} showDeleteAlertForNote={showDeleteAlertForNote} />
    </div>
  );
};

export default Notes;
