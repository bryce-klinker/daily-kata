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
}
