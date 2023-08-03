import React from "react";

import { Table as NeetoUITable } from "neetoui";

import {
  CONTACTS_TABLE_COLUMN_DATA,
  CONTACTS_ROW_REPEATED_DATA,
} from "./constant";

const Table = () => (
  <div className="mt-3 w-full p-4">
    <NeetoUITable
      allowRowClick
      rowSelection
      bordered={false}
      columnData={CONTACTS_TABLE_COLUMN_DATA}
      currentPageNumber={1}
      defaultPageSize={9}
      rowData={CONTACTS_ROW_REPEATED_DATA}
    />
  </div>
);

export default Table;
