import { TableRowComparer } from './table-row-comparer';

export class DataTable {
  headers;
  tableData;
  totalRows;

  constructor(headers, tableData, totalRows = null) {
    this.headers = headers;
    this.tableData = tableData;
    this.totalRows = totalRows;
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

  paginate = (paginationMetadata) => {
    const totalRows = this.tableData.length;
    if (!paginationMetadata) {
      return new DataTable(this.headers, this.tableData, totalRows);
    }
    const startIndex = (paginationMetadata.pageNumber - 1) * paginationMetadata.pageSize;
    const endIndex = startIndex + paginationMetadata.pageSize;
    const pagedData = this.tableData.slice(startIndex, endIndex);
    return new DataTable(this.headers, pagedData, totalRows);
  };

  _createComparer = (sortMetadata) => {
    const sortingSeed = sortMetadata.getSortingSeed();
    const sortIndex = this.getColumnIndex(sortMetadata.column);
    return new TableRowComparer(sortingSeed, sortIndex);
  };
}

