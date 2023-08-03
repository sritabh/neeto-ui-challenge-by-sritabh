import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

const Create = ({ showPane, setShowPane, setNotes }) => {
  const { t } = useTranslation();

  const handleClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={handleClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("form.title.add", { entity: "Note" })}
        </Typography>
      </Pane.Header>
      <Form
        isEdit={false}
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        setNotes={setNotes}
        onClose={handleClose}
      />
    </Pane>
  );
};

export default Create;
