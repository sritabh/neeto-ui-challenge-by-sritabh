import React from "react";

import { useTranslation } from "react-i18next";

import Toolbar from "components/commons/ToolBar";

import Table from "./Table";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col">
      <Toolbar
        buttonLabel={t("button.add_entity", { entity: "Contact" })}
        handleActionButtonClick={() => {}}
        searchPlaceholderValue={t("search.placeholder", { entity: "Contact" })}
        title={t("page_titles.contacts")}
        onSearchChange={() => {}}
      />
      <Table />
    </div>
  );
};

export default Contacts;
