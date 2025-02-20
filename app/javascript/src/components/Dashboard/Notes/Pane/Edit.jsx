import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Edit = ({ showPane, setShowPane, note, setNotes }) => {
  const { t } = useTranslation();

  const handleClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={handleClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("form.title.edit", { entity: "Note" })}
        </Typography>
      </Pane.Header>
      <Form isEdit note={note} setNotes={setNotes} onClose={handleClose} />
    </Pane>
  );
};

export default Edit;
