/**
 * This method is called by the front end when it wants to display a page of horse data.
 */
import { PaginatedTable } from './paginated-table';
import { DataTable } from './data-table';

export function filterSortPaginateTable(headers, tableData, filters, sortMetadata, paginationMetadata) {
  let dataTable = new DataTable(headers, tableData);
  tableData = filterTableData(filters, dataTable.headers, dataTable.tableData);

  dataTable = new DataTable(headers, tableData);
  tableData = sortTableData(sortMetadata, dataTable);

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

function sortTableData(sortMetadata, dataTable) {
  if (!sortMetadata) {
    return dataTable.tableData;
  }

  return sortMetadata.sortTable(dataTable.headers, dataTable.tableData);
}
