import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Dropdown, Avatar, Tooltip } from "neetoui";

const Item = ({ note, showDeleteAlertForNote }) => (
  <div className="m-3 rounded-sm border border-gray-200 p-4 text-gray-500 shadow-md">
    <div className="flex justify-between">
      <Typography style="h3">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li>Edit</li>
        <li onClick={() => showDeleteAlertForNote(note.id)}>Delete</li>
      </Dropdown>
    </div>
    <Typography className="mb-3" style="body1">
      {note.description}
    </Typography>
    <hr />
    <div className="mt-4 flex justify-between">
      <div className="note-tags">
        {note.tags.map((tag, index) => (
          <Tag
            className="bg-gray-100 text-gray-500"
            key={index}
            label={tag}
            style="secondary"
          />
        ))}
      </div>
      <Tooltip content="Wednesday, 10:30 AM" position="bottom-start">
        <div className="flex items-center space-x-2">
          <Clock size="15" />
          <Typography className="flex items-start " style="body1">
            {note.status} 2 hours ago
          </Typography>
          <Avatar
            size="small"
            user={{
              name: note.assigned_contact,
              imageUrl: "",
            }}
          />
        </div>
      </Tooltip>
    </div>
  </div>
);

export default Item;
