export class TableRowComparer {
  sortIndex;
  sortingSeed;

  constructor(sortingSeed, sortIndex) {
    this.sortingSeed = sortingSeed;
    this.sortIndex = sortIndex;
  }

  compare = (a, b) => {
    if (a[this.sortIndex] === b[this.sortIndex])
      return 0;

    return a[this.sortIndex] < b[this.sortIndex]
      ? this.sortingSeed * -1
      : this.sortingSeed;
  };
}
