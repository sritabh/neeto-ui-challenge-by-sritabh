import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Dropdown, Avatar, Tooltip } from "neetoui";
import { useTranslation } from "react-i18next";

import { formatDate, findElapsedTime } from "./utils";

const Item = ({ note, showDeleteAlertForNote, showEditNotePane }) => {
  const { t } = useTranslation();

  return (
    <div className="m-3 rounded-sm border border-gray-200 p-4 text-gray-500 shadow-md">
      <div className="flex justify-between">
        <Typography style="h3">{note.title}</Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          <Dropdown.Menu>
            <Dropdown.MenuItem.Button onClick={() => showEditNotePane(note)}>
              {t("dropdown_labels.edit")}
            </Dropdown.MenuItem.Button>
            <Dropdown.MenuItem.Button
              onClick={() => showDeleteAlertForNote(note)}
            >
              {t("dropdown_labels.delete")}
            </Dropdown.MenuItem.Button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Typography className="mb-3" style="body1">
        {note.description}
      </Typography>
      <hr />
      <div className="mt-4 flex justify-between">
        <div className="note-tags space-x-2">
          {note.tags.map(tag => (
            <Tag
              className="bg-gray-100 text-gray-500"
              key={tag.value}
              label={tag.label}
              style="secondary"
            />
          ))}
        </div>
        <Tooltip content={formatDate(note.createdAt)} position="bottom-start">
          <div className="flex items-center space-x-2">
            <Clock size="15" />
            <Typography className="flex items-start " style="body1">
              {note.status} {findElapsedTime(note.createdAt)}
            </Typography>
            <Avatar
              size="small"
              user={{
                name: `${
                  note.assignedContact
                    ? note.assignedContact.label
                    : "Oliver Smith"
                }`,
                imageUrl: "",
              }}
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Item;
