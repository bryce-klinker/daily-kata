import test from 'ava';
import * as SampleHorseData from './test_support/sample-data';
import { filterSortPaginateTable } from './horse';
import { FilterMetadata } from './filter-metadata';

test.skip('FilterSortPaginate', t => {
  const headers = SampleHorseData.getSampleHeaders();
  const tableData = SampleHorseData.getSampleTableData();
  const filters = SampleHorseData.getSampleFilters();
  const sortMetadata = SampleHorseData.getSampleSortMetadata();
  const paginationMetadata = SampleHorseData.getSamplePaginationMetadata();

  const table = filterSortPaginateTable(headers, tableData, filters, sortMetadata, paginationMetadata);

  t.deepEqual(table.headers, headers);
  t.is(table.totalRows, 2);
  t.deepEqual(table.tableData, [
    [ 'Thoroughbred', 'Bay', '1.6', '3', 'true' ],
    [ 'Thoroughbred', 'Grey', '1.55', '3', 'true' ]
  ]);
});

test('when headers are provided then returns the same headers', t => {
  const table = filterSortPaginateTable([ 'Breed', 'Height' ], [], [], null, null);
  t.deepEqual(table.headers, [ 'Breed', 'Height' ]);
});

test('when no filters, sorting, or pagination is provided then returns unmodified table data', t => {
  const table = filterSortPaginateTable([ 'Breed' ], [ [ 'Original' ], [ 'Table' ], [ 'Data' ] ], [], null, null);
  t.deepEqual(table.tableData, [ [ 'Original' ], [ 'Table' ], [ 'Data' ] ]);
});

test('when one filter is provided then returns table data matching the filter', t => {
  const filters = [ new FilterMetadata('Breed', 'Bicycle') ];

  const table = filterSortPaginateTable(['Breed'], [['Thoroughbred'], ['Bicycle']], filters, null, null);

  t.deepEqual(table.tableData, [['Bicycle']])
});
