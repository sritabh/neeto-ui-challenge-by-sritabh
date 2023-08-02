import React from "react";

import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

const Toolbar = ({
  searchPlaceholderValue,
  title,
  onSearchChange,
  buttonLabel,
  handleActionButtonClick,
}) => (
  <Header
    className="px-4 py-2"
    menuBarToggle={() => {}}
    title={title}
    actionBlock={
      <Button label={buttonLabel} onClick={handleActionButtonClick} />
    }
    searchProps={{
      onChange: onSearchChange,
      placeholder: searchPlaceholderValue,
      value: "",
    }}
  />
);

export default Toolbar;
