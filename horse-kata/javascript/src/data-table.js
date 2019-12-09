import { TableRowComparer } from './table-row-comparer';

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

  filter = (filters) => {
    let filteredTableData = [...this.tableData];
    filters.forEach(filter => {
      const filterIndex = this.getColumnIndex(filter.column);
      filteredTableData = filteredTableData.filter(i => i[filterIndex] === filter.value);
    });
    return new DataTable(this.headers, filteredTableData);
  };

  _createComparer = (sortMetadata) => {
    const sortingSeed = sortMetadata.getSortingSeed();
    const sortIndex = this.getColumnIndex(sortMetadata.column);
    return new TableRowComparer(sortingSeed, sortIndex);
  };
}

