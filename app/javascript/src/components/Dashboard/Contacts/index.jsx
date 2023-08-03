import React, { useState, useEffect } from "react";

import classNames from "classnames";
import { Button } from "neetoui";
import { SubHeader } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import DeleteAlert from "components/commons/DeleteAlert";
import Toolbar from "components/commons/ToolBar";

import {
  CONTACTS_TABLE_COLUMN_DATA,
  CONTACTS_ROW_REPEATED_DATA,
} from "./constant";
import Table from "./Table";

const Contacts = () => {
  const { t } = useTranslation();

  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [contactIDsToBeDeleted, setContactIDsToBeDeleted] = useState([]);
  const [contacts, setContacts] = useState(CONTACTS_ROW_REPEATED_DATA);
  const [deleteAlertVisibliity, setDeleteAlertVisibliity] = useState(false);

  const deleteButtonContainerClasses = classNames("px-6", {
    hidden: selectedContactIds.length === 0,
  });

  const handleDelete = () => {
    setContactIDsToBeDeleted(selectedContactIds);
    setSelectedContactIds([]);
  };

  useEffect(() => {
    if (contactIDsToBeDeleted.length === 0) return;
    setContacts(
      contacts.filter(contact => !contactIDsToBeDeleted.includes(contact.id))
    );
    setContactIDsToBeDeleted([]);
  }, [contactIDsToBeDeleted]);

  const showDeleteAlertForConfirmation = () => {
    setDeleteAlertVisibliity(true);
  };

  return (
    <div className="flex w-full flex-col">
      <Toolbar
        buttonLabel={t("button.add_entity", { entity: "Contact" })}
        handleActionButtonClick={() => {}}
        searchPlaceholderValue={t("search.placeholder", { entity: "Contact" })}
        title={t("page_titles.contacts")}
        onSearchChange={() => {}}
      />
      <SubHeader
        className={deleteButtonContainerClasses}
        rightActionBlock={
          <Button
            label="Delete"
            size="small"
            onClick={showDeleteAlertForConfirmation}
          />
        }
      />
      <DeleteAlert
        entity="Contacts"
        handleSubmit={handleDelete}
        isOpen={deleteAlertVisibliity}
        onClose={() => setDeleteAlertVisibliity(false)}
      />
      <Table
        columnData={CONTACTS_TABLE_COLUMN_DATA}
        rowData={contacts}
        selectedRows={selectedContactIds}
        onRowKeySelect={setSelectedContactIds}
      />
    </div>
  );
};

export default Contacts;
