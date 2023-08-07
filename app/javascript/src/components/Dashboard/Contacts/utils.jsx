// @ts-nocheck
import React from "react";

import dayjs from "dayjs";
import { MenuHorizontal } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";
import { v4 as uuidv4 } from "uuid";

import i18n from "../../../common/i18n";

const t = i18n.t.bind(i18n);

export const formatRowDataForNeetoUITable = ({
  id,
  firstName,
  lastName,
  email,
  role,
  createdAt,
  onEdit,
}) => ({
  id,
  nameAndRole: (
    <div className="flex space-x-3">
      <Avatar
        size="medium"
        user={{
          name: `${firstName} ${lastName}`,
          imageUrl: "",
        }}
      />
      <div className="flex flex-col text-gray-500">
        <Typography style="h5">{`${firstName} ${lastName}`}</Typography>
        <Typography style="body3">{role.label}</Typography>
      </div>
    </div>
  ),
  email: <span className="text-gray-500">{email}</span>,
  createdAt: <span className="text-gray-500">{createdAt}</span>,
  actions: (
    <Dropdown buttonStyle="text" icon={MenuHorizontal}>
      <Dropdown.Menu>
        <Dropdown.MenuItem.Button onClick={onEdit}>
          {t("dropdown_labels.edit")}
        </Dropdown.MenuItem.Button>
      </Dropdown.Menu>
    </Dropdown>
  ),
});

export const formatDate = date => dayjs(date).format("DD MMM YYYY");

export const formatRowContent = ({ contactData, onEditClick }) =>
  contactData
    .filter(contact => contact.included)
    .map(contact =>
      formatRowDataForNeetoUITable({
        ...contact,
        onEdit: () => onEditClick(contact),
      })
    );

export const buildRepeatedContactData = sampleData =>
  Array.from({ length: 90 }, (_, index) => ({
    ...sampleData[index % sampleData.length],
    id: uuidv4(),
  }));
