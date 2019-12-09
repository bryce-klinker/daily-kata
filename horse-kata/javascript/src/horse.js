/**
 * This method is called by the front end when it wants to display a page of horse data.
 */
import { PaginatedTable } from './paginated-table';

export function filterSortPaginateTable(headers, tableData, filters, sortMetadata, paginationMetadata) {
  // TODO: filter horse table using filters

  // TODO: sort horse table using sortMetadata

  // TODO: paginate horse table using paginationMetadata
  return new PaginatedTable(headers, tableData);
}
