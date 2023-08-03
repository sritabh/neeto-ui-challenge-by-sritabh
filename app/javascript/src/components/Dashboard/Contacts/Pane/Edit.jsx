import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Edit = ({ showPane, setShowPane, setContacts, contact }) => {
  const { t } = useTranslation();

  const handleClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={handleClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("form.title.add", { entity: "Contact" })}
        </Typography>
      </Pane.Header>
      <Form
        isEdit
        contact={contact}
        setContacts={setContacts}
        onClose={handleClose}
      />
    </Pane>
  );
};

export default Edit;
