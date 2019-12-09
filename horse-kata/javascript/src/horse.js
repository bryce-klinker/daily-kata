/**
 * This method is called by the front end when it wants to display a page of horse data.
 */
import { PaginatedTable } from './paginated-table';

export function filterSortPaginateTable(headers, tableData, filters, sortMetadata, paginationMetadata) {
  tableData = filterTableData(filters, headers, tableData);

  // TODO: sort horse table using sortMetadata

  // TODO: paginate horse table using paginationMetadata
  return new PaginatedTable(headers, tableData);
}

function filterTableData(filters, headers, tableData) {
  const filter = filters[0];
  if (filter) {
    const filterIndex = filter ? headers.indexOf(filter.column) : -1;
    tableData = tableData.filter(i => i[filterIndex] === filter.value);
  }
  return tableData;
}
