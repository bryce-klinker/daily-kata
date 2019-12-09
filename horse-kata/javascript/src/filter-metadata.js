/**
 * The front end provides a list of these specifying the requested filters
 */
export class FilterMetadata {
  column;
  value;

  constructor(column, value) {
    this.column = column;
    this.value = value;

  }
}
