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

    return sortMetadata.sortTable(this);
  }
}
