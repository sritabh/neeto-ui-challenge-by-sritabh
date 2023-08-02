import React from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

const DeleteAlert = ({ handleSubmit, isOpen, onClose }) => {
  const { t } = useTranslation();

  const onSubmit = () => {
    handleSubmit();
    onClose();
    Toastr.success(t("entity.deleted", { entity: "Note" }));
  };

  return (
    <Alert
      isOpen={isOpen}
      message={t("alert.message", { entity: "Note" })}
      title={t("alert.title", { entity: "Note" })}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default DeleteAlert;
