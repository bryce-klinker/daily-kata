/**
 * This method is called by the front end when it wants to display a page of horse data.
 */
import { PaginatedTable } from './paginated-table';

export function filterSortPaginateTable(headers, tableData, filters, sortMetadata, paginationMetadata) {
  const filter = filters[0];
  const filterIndex = filter ? headers.indexOf(filter.column) : -1;
  if (filterIndex !== -1) {
    tableData = tableData.filter(i => i[filterIndex] === filter.value);
  }

  // TODO: sort horse table using sortMetadata

  // TODO: paginate horse table using paginationMetadata
  return new PaginatedTable(headers, tableData);
}
