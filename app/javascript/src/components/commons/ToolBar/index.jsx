import React from "react";

import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

import { noop } from "components/Dashboard/util";

const Toolbar = ({
  searchPlaceholderValue,
  title,
  handleSearchChange,
  buttonLabel,
  handleActionButtonClick,
}) => (
  <Header
    className="px-4 py-2"
    menuBarToggle={noop}
    title={title}
    actionBlock={
      <Button label={buttonLabel} onClick={handleActionButtonClick} />
    }
    searchProps={{
      onChange: handleSearchChange,
      placeholder: searchPlaceholderValue,
      value: "",
    }}
  />
);

export default Toolbar;
