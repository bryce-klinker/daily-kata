/**
 * the front end provides this data about the requested sort order
 */
export class SortMetadata {
  column;
  sortOrder;

  constructor(column, sortOrder) {
    this.column = column;
    this.sortOrder = sortOrder;
  }

  sortTable(headers, tableData) {
    const sortIndex = headers.indexOf(this.column);
    const sortingSeed = this.sortOrder === 'Ascending' ? 1 : -1;
    tableData.sort((a, b) => {

      if (a[sortIndex] === b[sortIndex])
        return 0;

      return a[sortIndex] < b[sortIndex]
        ? sortingSeed * -1
        : sortingSeed;
    });
    return tableData;
  }
}
