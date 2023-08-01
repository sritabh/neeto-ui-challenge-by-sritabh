import React from "react";

import Toolbar from "components/commons/ToolBar";

import { SAMPLE_NOTES } from "./constants";
import List from "./List";

const Notes = () => (
  <div className="flex w-full flex-col">
    <Toolbar
      buttonLabel="Add note +"
      searchPlaceholderValue="Search Name, Email, Phone Number,etc."
      title="All Notes"
      onSearchChange={function noRefCheck() {}}
    />
    <List notes={SAMPLE_NOTES} />
  </div>
);

export default Notes;
