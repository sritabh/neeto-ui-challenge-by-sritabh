/* eslint-disable import/exports-last */
/* eslint-disable react/jsx-filename-extension */

import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";
import { v4 as uuidv4 } from "uuid";

import i18n from "../../../common/i18n";

const t = i18n.t.bind(i18n);

const ROW_SAMPLE_DATA1 = {
  name_role: (
    <div className="flex space-x-3">
      <Avatar
        size="medium"
        user={{
          name: "Ronalds Richards",
        }}
      />
      <div className="flex flex-col text-gray-500">
        <Typography style="h5">Ronalds Richards</Typography>
        <Typography style="body3">Owner</Typography>
      </div>
    </div>
  ),
  email: <span className="text-gray-500">albert@borer.com</span>,
  created_at: <span className="text-gray-500">Feb, 5, 2021</span>,
  actions: (
    <Dropdown buttonStyle="text" icon={MenuHorizontal}>
      <Dropdown.Menu>
        <Dropdown.MenuItem.Button>
          {t("dropdown_labels.edit")}
        </Dropdown.MenuItem.Button>
      </Dropdown.Menu>
    </Dropdown>
  ),
};

const ROW_SAMPLE_DATA2 = {
  name_role: (
    <div className="flex space-x-3">
      <Avatar
        size="medium"
        user={{
          name: "Jacob Jones",
        }}
      />
      <div className="flex flex-col text-gray-500">
        <Typography style="h5">Jacob Jones</Typography>
        <Typography style="body3">Owner</Typography>
      </div>
    </div>
  ),
  email: <span className="text-gray-500">albert@borer.com</span>,
  created_at: <span className="text-gray-500">Feb, 5, 2021</span>,
  actions: (
    <Dropdown buttonStyle="text" icon={MenuHorizontal}>
      <Dropdown.Menu>
        <Dropdown.MenuItem.Button>
          {t("dropdown_labels.edit")}
        </Dropdown.MenuItem.Button>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
const DUMMY_DATA_LIST = [ROW_SAMPLE_DATA1, ROW_SAMPLE_DATA2];

export const CONTACTS_TABLE_COLUMN_DATA = [
  {
    title: t("contact_table.columns.name_role"),
    dataIndex: "name_role",
    key: "name_role",
    width: "30%",
  },
  {
    title: t("contact_table.columns.email"),
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: t("contact_table.columns.created_at"),
    dataIndex: "created_at",
    key: "created_at",
    width: "30%",
  },
  {
    title: " ",
    dataIndex: "actions",
    key: "actions",
    width: "10%",
  },
];

//TODO: Look for scope for improvement, to manage individual row data
export const CONTACTS_ROW_REPEATED_DATA = Array.from(
  { length: 90 },
  (_, index) => ({
    id: uuidv4(),
    ...DUMMY_DATA_LIST[index % DUMMY_DATA_LIST.length],
  })
);
