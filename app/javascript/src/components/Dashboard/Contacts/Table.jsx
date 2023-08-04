import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { formatRowDataForNeetoUITable } from "./utils";

import { noop } from "../util";

const Table = ({
  columnData,
  contactData,
  onRowKeySelect,
  selectedRows,
  showEditContactPane,
}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const formattedRowData = contactData
    .filter(contact => contact.included)
    .map(contact =>
      formatRowDataForNeetoUITable({
        ...contact,
        onEdit: () => showEditContactPane(contact),
      })
    );

  return (
    <NeetoUITable
      allowRowClick
      rowSelection
      bordered={false}
      columnData={columnData}
      currentPageNumber={currentPageNumber}
      defaultPageSize={9}
      handlePageChange={setCurrentPageNumber}
      rowData={formattedRowData}
      selectedRowKeys={selectedRows}
      onRowClick={noop}
      onRowSelect={onRowKeySelect}
    />
  );
};

export default Table;
