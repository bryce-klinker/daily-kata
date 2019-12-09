import { TableRowComparer } from './table-row-comparer';

/**
 * instances of this class can be returned to the front end for display
 */
export class PaginatedTable {
  /**
   * the headers for the table
   */
  headers;

  /**
   * The data to show in the current page of the table
   */
  tableData;

  /**
   * the total number of rows, including those rows not shown on the current page
   */
  totalRows;

  constructor(headers, tableData, totalRows) {
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
    return new PaginatedTable(this.headers, sortedTable);
  };

  filter = (filters) => {
    let filteredTableData = [...this.tableData];
    filters.forEach(filter => {
      const filterIndex = this.getColumnIndex(filter.column);
      filteredTableData = filteredTableData.filter(i => i[filterIndex] === filter.value);
    });
    return new PaginatedTable(this.headers, filteredTableData);
  };

  paginate = (paginationMetadata) => {
    const totalRows = this.tableData.length;
    if (!paginationMetadata) {
      return new PaginatedTable(this.headers, this.tableData, totalRows);
    }
    const startIndex = (paginationMetadata.pageNumber - 1) * paginationMetadata.pageSize;
    const endIndex = startIndex + paginationMetadata.pageSize;
    const pagedData = this.tableData.slice(startIndex, endIndex);
    return new PaginatedTable(this.headers, pagedData, totalRows);
  };

  _createComparer = (sortMetadata) => {
    const sortingSeed = sortMetadata.getSortingSeed();
    const sortIndex = this.getColumnIndex(sortMetadata.column);
    return new TableRowComparer(sortingSeed, sortIndex);
  };
}
