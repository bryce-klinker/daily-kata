import test from 'ava';
import * as SampleHorseData from './test_support/sample-data';
import {filterSortPaginateTable} from './horse';

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
    ['Thoroughbred', 'Bay', '1.6', '3', 'true'],
    ['Thoroughbred', 'Grey', '1.55', '3', 'true']
  ])
});

test('when headers are provided then returns the same headers', t => {
  const table = filterSortPaginateTable(['Breed', 'Height'], [], [], null, null);
  t.deepEqual(table.headers, ['Breed', 'Height'])
});
