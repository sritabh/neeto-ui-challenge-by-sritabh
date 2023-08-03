import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const Edit = ({ showPane, setShowPane, note, setNotes }) => {
  const handleClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={handleClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit note
        </Typography>
      </Pane.Header>
      <Form isEdit note={note} setNotes={setNotes} onClose={handleClose} />
    </Pane>
  );
};

export default Edit;
