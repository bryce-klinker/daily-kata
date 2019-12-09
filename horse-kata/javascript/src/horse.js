/**
 * This method is called by the front end when it wants to display a page of horse data.
 */
import { PaginatedTable } from './paginated-table';

export function filterSortPaginateTable(headers, tableData, filters, sortMetadata, paginationMetadata) {
  return new PaginatedTable(headers, tableData)
    .filter(filters)
    .sort(sortMetadata)
    .paginate(paginationMetadata);
}
