import test from 'ava';
import { PaginationMetadata } from './pagination-metadata';
import { PaginatedTable } from './paginated-table';
import { filterSortPaginateTable } from './horse';
import { FilterMetadata } from './filter-metadata';

test('when headers are provided then returns the same headers', t => {
  const table = new PaginatedTable([ 'Breed', 'Height' ], []);
  t.deepEqual(table.headers, [ 'Breed', 'Height' ]);
});

test('when one filter is provided then returns table data matching the filter', t => {
  const filters = [ new FilterMetadata('Breed', 'Bicycle') ];
  const table = new PaginatedTable(['Breed'], [ [ 'Thoroughbred' ], [ 'Bicycle' ] ]);

  const actual = table.filter(filters);

  t.deepEqual(actual.tableData, [ [ 'Bicycle' ] ]);
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
  t.deepEqual(actual.headers, ['Breed'])
});
