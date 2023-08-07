import React, { useState, useEffect } from "react";

import classNames from "classnames";
import { Button } from "neetoui";
import { SubHeader, Container } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import DeleteAlert from "components/commons/DeleteAlert";
import Toolbar from "components/commons/ToolBar";

import {
  CONTACTS_TABLE_COLUMN_DATA,
  CONTACT_SAMPLE_DATA_LIST,
} from "./constants";
import NewContactPane from "./Pane/Create";
import EditContactPane from "./Pane/Edit";
import Table from "./Table";
import { buildRepeatedContactData } from "./utils";

const Contacts = () => {
  const { t } = useTranslation();

  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  const [contactIDsToBeDeleted, setContactIDsToBeDeleted] = useState([]);
  const [contacts, setContacts] = useState(
    buildRepeatedContactData(CONTACT_SAMPLE_DATA_LIST)
  );
  const [deleteAlertVisibliity, setDeleteAlertVisibliity] = useState(false);
  const [createContactPaneVisibility, setCreateContactPaneVisibility] =
    useState(false);

  const [editContactPaneVisibility, setEditContactPaneVisibility] =
    useState(false);

  const handleDeleteContacts = () => {
    setContactIDsToBeDeleted(selectedContactIds);
    setSelectedContactIds([]);
  };

  const showDeleteAlertForConfirmation = () => {
    setDeleteAlertVisibliity(true);
  };

  const showEditContactPane = contact => {
    setEditContactPaneVisibility(true);
    setSelectedContact(contact);
  };

  const filterContactsListBySearchValue = (contacts, value) =>
    contacts.map(contact => ({
      ...contact,
      included:
        `${contact.firstName} ${contact.lastName}`
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        contact.email.toLowerCase().includes(value.toLowerCase()),
    }));

  const handleSearchValueChange = value => {
    setContacts(prevIncludedContacts =>
      filterContactsListBySearchValue(prevIncludedContacts, value.trim())
    );
  };

  useEffect(() => {
    if (contactIDsToBeDeleted.length === 0) return;

    setContacts(
      contacts.filter(contact => !contactIDsToBeDeleted.includes(contact.id))
    );
    setContactIDsToBeDeleted([]);
  }, [contactIDsToBeDeleted]);

  return (
    <Container>
      <Toolbar
        buttonLabel={t("button.add_entity", { entity: "Contact" })}
        handleActionButtonClick={() => setCreateContactPaneVisibility(true)}
        searchPlaceholderValue={t("search.placeholder", { entity: "Contact" })}
        title={t("page_titles.contacts")}
        onSearchValueChange={handleSearchValueChange}
      />
      <SubHeader
        className={classNames("px-6", {
          hidden: !selectedContactIds.length,
        })}
        rightActionBlock={
          <Button
            label={t("button.delete")}
            size="small"
            onClick={showDeleteAlertForConfirmation}
          />
        }
      />
      <NewContactPane
        setContacts={setContacts}
        setShowPane={setCreateContactPaneVisibility}
        showPane={createContactPaneVisibility}
      />
      <EditContactPane
        contact={selectedContact}
        setContacts={setContacts}
        setShowPane={setEditContactPaneVisibility}
        showPane={editContactPaneVisibility}
      />
      <DeleteAlert
        entity="Contacts"
        isOpen={deleteAlertVisibliity}
        onClose={() => setDeleteAlertVisibliity(false)}
        onDelete={handleDeleteContacts}
      />
      <Table
        columnData={CONTACTS_TABLE_COLUMN_DATA}
        contactData={contacts}
        selectedRows={selectedContactIds}
        showEditContactPane={showEditContactPane}
        onRowKeySelect={setSelectedContactIds}
      />
    </Container>
  );
};

export default Contacts;
