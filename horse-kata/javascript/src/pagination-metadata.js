/**
 * The front end provides this data about the requested pagination
 */
export class PaginationMetadata {
  /**
   * the current page of data to be shown
   */
  pageNumber;

  /**
   * the number of rows to show in this page
   */
  pageSize;

  constructor(pageNumber, pageSize) {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
  }
}
