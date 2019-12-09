import test from 'ava';
import { DataTable } from './data-table';
import { PaginationMetadata } from './pagination-metadata';

test('when getting first page then returns only the first page of results', t => {
  const dataTable = new DataTable([ 'Breed' ], [ [ 'Thoroughbred' ], [ 'Bicycle' ], [ 'Boxer' ] ]);
  const paginationMetadata = new PaginationMetadata(1, 2);

  const actual = dataTable.paginate(paginationMetadata);

  t.deepEqual(actual.headers, ['Breed']);
  t.deepEqual(actual.tableData, [
    ['Thoroughbred'],
    ['Bicycle']
  ])
});
