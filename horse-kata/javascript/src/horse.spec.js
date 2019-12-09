import test from 'ava';
import * as SampleHorseData from './test_support/sample-data';
import { filterSortPaginateTable } from './horse';
import { FilterMetadata } from './filter-metadata';
import { SortMetadata } from './sort-metadata';

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

  const table = filterSortPaginateTable([ 'Breed' ], [ [ 'Thoroughbred' ], [ 'Bicycle' ] ], filters, null, null);

  t.deepEqual(table.tableData, [ [ 'Bicycle' ] ]);
});

test('when filter provided for a header then table data is filtered based on the filtered header', t => {
  const filters = [ new FilterMetadata('Height', '1.5') ];
  const headers = [ 'Breed', 'Height' ];
  const tableData = [ [ 'Thoroughbred', '1.2' ], [ 'Bicycle', '1.5' ], [ 'Boxer', '1.5' ] ];

  const table = filterSortPaginateTable(headers, tableData, filters, null, null);

  t.deepEqual(table.tableData, [
    [ 'Bicycle', '1.5' ],
    [ 'Boxer', '1.5' ]
  ]);
});

test('when two filters are provided then returns table filtered using both filters', t => {
  const filters = [ new FilterMetadata('Height', '1.5'), new FilterMetadata('Breed', 'Boxer') ];
  const headers = [ 'Breed', 'Height' ];
  const tableData = [ [ 'Thoroughbred', '1.2' ], [ 'Bicycle', '1.5' ], [ 'Boxer', '1.5' ] ];

  const table = filterSortPaginateTable(headers, tableData, filters, null, null);

  t.deepEqual(table.tableData, [
    [ 'Boxer', '1.5' ]
  ]);
});

test('when sorting metadata is provided then returns table sorted by the column in sort metadata', t => {
  const headers = [ 'Breed' ];
  const tableData = [ [ 'Thoroughbred' ], [ 'Bicycle' ], [ 'Boxer' ] ];
  const sortMetadata = new SortMetadata('Breed', 'Ascending');

  const table = filterSortPaginateTable(headers, tableData, [], sortMetadata, null);

  t.deepEqual(table.tableData[0], [ 'Bicycle' ]);
  t.deepEqual(table.tableData[1], [ 'Boxer' ]);
  t.deepEqual(table.tableData[2], [ 'Thoroughbred' ]);
});

test('when sorting by specific header then returns table sorted by the correct header', t => {
  const headers = [ 'Breed', 'Colour' ];
  const tableData = [ [ 'Thoroughbred', 'Azure' ], [ 'Bicycle', 'Blue' ], [ 'Boxer', 'Black' ] ];
  const sortMetadata = new SortMetadata('Colour', 'Ascending');

  const table = filterSortPaginateTable(headers, tableData, [], sortMetadata, null);

  t.deepEqual(table.tableData[0], [ 'Thoroughbred', 'Azure' ]);
  t.deepEqual(table.tableData[1], [ 'Boxer', 'Black' ]);
  t.deepEqual(table.tableData[2], [ 'Bicycle', 'Blue' ]);
});
