import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { noop } from "../util";

const Table = ({ columnData, rowData, onRowKeySelect, selectedRows }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

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
        rowData={rowData}
        selectedRowKeys={selectedRows}
        onRowClick={noop}
        onRowSelect={onRowKeySelect}
      />
    </div>
  );
};

export default Table;
