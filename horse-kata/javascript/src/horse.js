/**
 * This method is called by the front end when it wants to display a page of horse data.
 */
import { PaginatedTable } from './paginated-table';

export function filterSortPaginateTable(headers, tableData, filters, sortMetadata, paginationMetadata) {
  tableData = filterTableData(filters, headers, tableData);

  tableData = sortTableData(sortMetadata, headers, tableData);

  // TODO: paginate horse table using paginationMetadata
  return new PaginatedTable(headers, tableData);
}

function filterTableData(filters, headers, tableData) {
  filters.forEach(filter => {
    const filterIndex = headers.indexOf(filter.column);
    tableData = tableData.filter(i => i[filterIndex] === filter.value);
  });
  return tableData;
}

function sortTableData(sortMetadata, headers, tableData) {
  if (!sortMetadata) {
    return tableData;
  }

  const sortIndex = headers.indexOf(sortMetadata.column);
  tableData.sort((a, b) => {
    if (a[sortIndex] === b[sortIndex])
      return 0;

    return a[sortIndex] < b[sortIndex]
      ? -1
      : 1;
  });
  return tableData;
}
