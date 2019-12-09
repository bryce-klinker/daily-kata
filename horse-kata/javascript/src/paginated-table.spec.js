import test from 'ava';
import { PaginationMetadata } from './pagination-metadata';
import { PaginatedTable } from './paginated-table';
import { FilterMetadata } from './filter-metadata';
import { SortMetadata } from './sort-metadata';

test('when headers are provided then returns the same headers', t => {
  const table = new PaginatedTable(['Breed', 'Height'], []);
  t.deepEqual(table.headers, ['Breed', 'Height']);
});

test('when one filter is provided then returns table data matching the filter', t => {
  const filters = [new FilterMetadata('Breed', 'Bicycle')];
  const table = new PaginatedTable(['Breed'], [['Thoroughbred'], ['Bicycle']]);

  const actual = table.filter(filters);

  t.deepEqual(actual.tableData, [['Bicycle']]);
});

test('when filter provided for a header then table data is filtered based on the filtered header', t => {
  const filters = [new FilterMetadata('Height', '1.5')];
  const headers = ['Breed', 'Height'];
  const tableData = [['Thoroughbred', '1.2'], ['Bicycle', '1.5'], ['Boxer', '1.5']];

  const table = new PaginatedTable(headers, tableData)
    .filter(filters);

  t.deepEqual(table.tableData, [
    ['Bicycle', '1.5'],
    ['Boxer', '1.5']
  ]);
});

test('when two filters are provided then returns table filtered using both filters', t => {
  const filters = [new FilterMetadata('Height', '1.5'), new FilterMetadata('Breed', 'Boxer')];
  const headers = ['Breed', 'Height'];
  const tableData = [['Thoroughbred', '1.2'], ['Bicycle', '1.5'], ['Boxer', '1.5']];

  const table = new PaginatedTable(headers, tableData)
    .filter(filters);

  t.deepEqual(table.tableData, [
    ['Boxer', '1.5']
  ]);
});

test('when sorting metadata is provided then returns table sorted by the column in sort metadata', t => {
  const headers = ['Breed'];
  const tableData = [['Thoroughbred'], ['Bicycle'], ['Boxer']];
  const sortMetadata = new SortMetadata('Breed', 'Ascending');

  const table = new PaginatedTable(headers, tableData)
    .sort(sortMetadata);

  t.deepEqual(table.tableData[0], ['Bicycle']);
  t.deepEqual(table.tableData[1], ['Boxer']);
  t.deepEqual(table.tableData[2], ['Thoroughbred']);
});

test('when sorting by specific header then returns table sorted by the correct header', t => {
  const headers = ['Breed', 'Colour'];
  const tableData = [['Thoroughbred', 'Azure'], ['Bicycle', 'Blue'], ['Boxer', 'Black']];
  const sortMetadata = new SortMetadata('Colour', 'Ascending');

  const table = new PaginatedTable(headers, tableData)
    .sort(sortMetadata);

  t.deepEqual(table.tableData[0], ['Thoroughbred', 'Azure']);
  t.deepEqual(table.tableData[1], ['Boxer', 'Black']);
  t.deepEqual(table.tableData[2], ['Bicycle', 'Blue']);
});

test('when sorting column with the same value in each item then returns table in the same order it is in', t => {
  const headers = ['Breed', 'Colour'];
  const tableData = [['Thoroughbred', 'Blue'], ['Bicycle', 'Blue'], ['Boxer', 'Blue']];
  const sortMetadata = new SortMetadata('Colour', 'Ascending');

  const table = new PaginatedTable(headers, tableData)
    .sort(sortMetadata);

  t.deepEqual(table.tableData[0], ['Thoroughbred', 'Blue']);
  t.deepEqual(table.tableData[1], ['Bicycle', 'Blue']);
  t.deepEqual(table.tableData[2], ['Boxer', 'Blue']);
});

test('when sorting in descending order then returns table data in descending sorted order', t => {
  const headers = ['Breed'];
  const tableData = [['Thoroughbred'], ['Bicycle'], ['Boxer']];
  const sortMetadata = new SortMetadata('Breed', 'Descending');

  const table = new PaginatedTable(headers, tableData)
    .sort(sortMetadata);

  t.deepEqual(table.tableData[0], ['Thoroughbred']);
  t.deepEqual(table.tableData[1], ['Boxer']);
  t.deepEqual(table.tableData[2], ['Bicycle']);
});

test('when getting first page then returns only the first page of results', t => {
  const dataTable = new PaginatedTable(['Breed'], [['Thoroughbred'], ['Bicycle'], ['Boxer']]);
  const paginationMetadata = new PaginationMetadata(1, 2);

  const actual = dataTable.paginate(paginationMetadata);

  t.deepEqual(actual.headers, ['Breed']);
  t.deepEqual(actual.tableData, [
    ['Thoroughbred'],
    ['Bicycle']
  ]);
});

test('when getting second page then returns first record in second page', t => {
  const dataTable = new PaginatedTable(['Breed'], [['Thoroughbred'], ['Bicycle'], ['Boxer']]);
  const paginationMetadata = new PaginationMetadata(2, 2);

  const actual = dataTable.paginate(paginationMetadata);

  t.deepEqual(actual.headers, ['Breed']);
  t.deepEqual(actual.tableData, [
    ['Boxer']
  ]);
});

test('when paging then returns table with a total record count', t => {
  const dataTable = new PaginatedTable(['Breed'], [['1'], ['2'], ['3'], ['4']]);
  const paginationMetadata = new PaginationMetadata(2, 1);

  const actual = dataTable.paginate(paginationMetadata);

  t.is(actual.totalRows, 4);
});

test('when no pagigation provided then returns data table with all rows', t => {
  const dataTable = new PaginatedTable(['Breed'], [['1'], ['2'], ['3'], ['4']]);

  const actual = dataTable.paginate(null);

  t.is(actual.totalRows, 4);
  t.deepEqual(actual.tableData, [['1'], ['2'], ['3'], ['4']]);
  t.deepEqual(actual.headers, ['Breed']);
});
