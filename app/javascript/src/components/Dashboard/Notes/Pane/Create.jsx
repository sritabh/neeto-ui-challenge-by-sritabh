import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

const Create = ({ showPane, setShowPane, setNotes }) => {
  const handleClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={handleClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a new note
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
