import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { formatRowContent } from "./utils";

import { noop } from "../util";

const Table = ({
  columnData,
  contactData,
  onRowKeySelect,
  selectedRows,
  showEditContactPane,
}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  return (
    <NeetoUITable
      allowRowClick
      rowSelection
      bordered={false}
      columnData={columnData}
      currentPageNumber={currentPageNumber}
      defaultPageSize={9}
      handlePageChange={setCurrentPageNumber}
      selectedRowKeys={selectedRows}
      rowData={formatRowContent({
        contactData,
        onEditClick: showEditContactPane,
      })}
      onRowClick={noop}
      onRowSelect={onRowKeySelect}
    />
  );
};

export default Table;
