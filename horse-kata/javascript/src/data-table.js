export class DataTable {
  headers;
  tableData;

  constructor(headers, tableData) {
    this.headers = headers;
    this.tableData = tableData;
  }

  getColumnIndex(columnName) {
    return this.headers.indexOf(columnName);
  }

  sort(sortMetadata) {
    if (!sortMetadata) {
        return this;
    }

    const sortedTable = [...this.tableData];
    const sortingSeed = sortMetadata.getSortingSeed();
    const sortIndex = this.getColumnIndex(sortMetadata.column);
    sortedTable.sort((a, b) => {
      if (a[sortIndex] === b[sortIndex])
        return 0;

      return a[sortIndex] < b[sortIndex]
        ? sortingSeed * -1
        : sortingSeed;
    });
    return new DataTable(this.headers, sortedTable);
  }
}

