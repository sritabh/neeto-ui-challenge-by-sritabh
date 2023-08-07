import React from "react";

import { Alert, Toastr } from "neetoui";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { shortenTitle } from "./utils";

const DeleteAlert = ({
  onDelete,
  isOpen,
  onClose,
  entity,
  entityTitle = "",
}) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    onDelete();
    onClose();
    Toastr.success(t("entity.deleted", { entity }));
  };

  return (
    <Alert
      isOpen={isOpen}
      message={t("alert.message", { entity })}
      title={t("alert.title", {
        entity,
        entityName: shortenTitle({ title: entityTitle }),
      })}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

DeleteAlert.propTypes = {
  onDelete: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  entity: PropTypes.string,
  entityTitle: PropTypes.string,
};

export default DeleteAlert;
