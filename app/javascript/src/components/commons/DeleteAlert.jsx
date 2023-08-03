import React from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

const DeleteAlert = ({ deleteAction, isOpen, onClose, entity }) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    deleteAction();
    onClose();
    Toastr.success(t("entity.deleted", { entity }));
  };

  return (
    <Alert
      isOpen={isOpen}
      message={t("alert.message", { entity })}
      title={t("alert.title", { entity })}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default DeleteAlert;
