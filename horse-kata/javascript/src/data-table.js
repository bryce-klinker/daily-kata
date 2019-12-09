export class DataTable {
  headers;
  tableData;

  constructor(headers, tableData) {
    this.headers = headers;
    this.tableData = tableData;
  }

  getColumnIndex = (columnName) => {
    return this.headers.indexOf(columnName);
  };

  sort = (sortMetadata) => {
    if (!sortMetadata) {
      return this;
    }

    const sortedTable = [ ...this.tableData ];
    const comparer = this._createComparer(sortMetadata);
    sortedTable.sort(comparer.compare);
    return new DataTable(this.headers, sortedTable);
  };

  _createComparer = (sortMetadata) => {
    const sortingSeed = sortMetadata.getSortingSeed();
    const sortIndex = this.getColumnIndex(sortMetadata.column);
    return new TableRowComparer(sortingSeed, sortIndex);
  };
}

class TableRowComparer {
  sortIndex;
  sortingSeed;

  constructor(sortingSeed, sortIndex) {
    this.sortingSeed = sortingSeed;
    this.sortIndex = sortIndex;
  }

  compare = (a, b) => {
    if (a[this.sortIndex] === b[this.sortIndex])
      return 0;

    return a[this.sortIndex] < b[this.sortIndex]
      ? this.sortingSeed * -1
      : this.sortingSeed;
  };
}
