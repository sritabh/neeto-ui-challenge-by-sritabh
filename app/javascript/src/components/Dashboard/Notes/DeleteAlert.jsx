import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ handleDelete, isOpen, onClose }) => {
  const onSubmit = () => {
    handleDelete();
    onClose();
    Toastr.success("Note deleted successfully.");
  };

  return (
    <Alert
      isOpen={isOpen}
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default DeleteAlert;
