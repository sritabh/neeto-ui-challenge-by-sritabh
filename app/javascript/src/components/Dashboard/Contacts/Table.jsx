import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { formatRowDataForNeetoUITable } from "./utils";

import { noop } from "../util";

const Table = ({
  columnData,
  rowData,
  onRowKeySelect,
  selectedRows,
  showEditContactPane,
}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const formattedRowData = rowData.map(row =>
    formatRowDataForNeetoUITable({
      ...row,
      onEdit: () => showEditContactPane(row),
    })
  );

  return (
    <div className="w-full p-4">
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
    </div>
  );
};

export default Table;
