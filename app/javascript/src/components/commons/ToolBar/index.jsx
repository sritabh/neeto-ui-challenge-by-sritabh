import React from "react";

import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

const Toolbar = ({
  searchPlaceholderValue,
  title,
  onSearchChange,
  buttonLabel,
}) => (
  <Header
    actionBlock={<Button label={buttonLabel} />}
    className="px-4 py-2"
    menuBarToggle={function noRefCheck() {}}
    title={title}
    searchProps={{
      onChange: onSearchChange,
      placeholder: searchPlaceholderValue,
      value: "",
    }}
  />
);

export default Toolbar;
