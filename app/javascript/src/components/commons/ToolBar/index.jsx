import React, { useEffect, useState } from "react";

import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

import { noop } from "components/Dashboard/util";
import useDebounce from "hooks/useDebounce";

const Toolbar = ({
  searchPlaceholderValue,
  title,
  onSearchValueChange,
  buttonLabel,
  handleActionButtonClick,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebounce(searchValue, 350);

  const handleSearchValueChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  useEffect(() => {
    onSearchValueChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <Header
      className="px-4 py-2"
      menuBarToggle={noop}
      title={title}
      actionBlock={
        <Button
          icon="ri-add-fill"
          label={buttonLabel}
          onClick={handleActionButtonClick}
        />
      }
      searchProps={{
        onChange: handleSearchValueChange,
        placeholder: searchPlaceholderValue,
        value: searchValue,
      }}
    />
  );
};

export default Toolbar;
