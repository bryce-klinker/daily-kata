import { FilterMetadata } from '../filter-metadata';
import { SortMetadata } from '../sort-metadata';
import { PaginationMetadata } from '../pagination-metadata';

/**
 * Sample Horse table headers which you could adapt for your tests.
 */
export function getSampleHeaders() {
  return ['Breed', 'Colour', 'Height', 'Age', 'Shoes'];
}

/**
 * Sample Horse data which you could adapt for your tests. Horses
 * may have more or less parameters than this and there may be more or less rows
 * in the table.
 */
export function getSampleTableData() {
  return [
    ['Thoroughbred', 'Bay', '1.6', '3', 'true'],
    ['Thoroughbred', 'Grey', '1.55', '3', 'true'],
    ['Arabian horse', 'Bay', '1.51', '5', 'true'],
    ['Shetland Pony', 'Black', '1.01', '2', 'false'],
    ['Shire horse', 'Black', '1.71', '4', 'true'],
  ]
}

/**
 * Sample filter metadata that filters on two fields
 * Breed must equal 'Thoroughbred' and age must equal 3
 */
export function getSampleFilters() {
  return [
    new FilterMetadata('Breed', 'Thoroughbred'),
    new FilterMetadata('Age', '3')
  ]
}

/**
 * Sample sort metadata. You only ever sort on one field.
 * In this example you should sort by horse height ascending
 */
export function getSampleSortMetadata() {
  return new SortMetadata('Height', 'Ascending');
}

/**
 * Sample pagination metadata. In this example, each page of data should have 3 rows and
 * the first record that should be shown on the page is the one at index 1.
 */
export function getSamplePaginationMetadata() {
  return new PaginationMetadata(1, 3);
}
