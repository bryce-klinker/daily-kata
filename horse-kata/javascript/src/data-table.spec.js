import test from 'ava';
import { DataTable } from './data-table';
import { PaginationMetadata } from './pagination-metadata';

test('when getting first page then returns only the first page of results', t => {
  const dataTable = new DataTable(['Breed'], [['Thoroughbred'], ['Bicycle'], ['Boxer']]);
  const paginationMetadata = new PaginationMetadata(1, 2);

  const actual = dataTable.paginate(paginationMetadata);

  t.deepEqual(actual.headers, ['Breed']);
  t.deepEqual(actual.tableData, [
    ['Thoroughbred'],
    ['Bicycle']
  ]);
});

test('when getting second page then returns first record in second page', t => {
  const dataTable = new DataTable(['Breed'], [['Thoroughbred'], ['Bicycle'], ['Boxer']]);
  const paginationMetadata = new PaginationMetadata(2, 2);

  const actual = dataTable.paginate(paginationMetadata);

  t.deepEqual(actual.headers, ['Breed']);
  t.deepEqual(actual.tableData, [
    ['Boxer']
  ]);
});

test('when paging then returns table with a total record count', t => {
  const dataTable = new DataTable(['Breed'], [['1'], ['2'], ['3'], ['4']]);
  const paginationMetadata = new PaginationMetadata(2, 1);

  const actual = dataTable.paginate(paginationMetadata);

  t.is(actual.totalRows, 4);
});
