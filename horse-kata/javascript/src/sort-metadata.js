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
}
