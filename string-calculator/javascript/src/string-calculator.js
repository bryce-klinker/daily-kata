import { replaceAll } from './replace-all';
import { replaceCustomDelimitersWithDefaultDelimiter } from './custom-delimiters';

let CALL_COUNT = 0;
const DEFAULT_DELIMITER = ',';

export class StringCalculor {
  constructor() {
    this.callCount = 0;
  }

  getCallCount = () => this.callCount;

  add = (input) => {
    this.callCount++;
    if (!input) {
      return 0;
    }

    if (this._isSingleNumber(input)) {
      return parseInt(input);
    }

    const defaultDelimiterInput = this._replaceDelimitersWithDefault(input);
    return this._calculateSum(defaultDelimiterInput);
  };

  _isSingleNumber = (input) => {
    return input
      .split('')
      .every(i => !isNaN(parseInt(i)));
  };

  _replaceDelimitersWithDefault = (input) => {
    const inputWithoutCustomDelimiters = replaceCustomDelimitersWithDefaultDelimiter(input, DEFAULT_DELIMITER);
    return replaceAll(inputWithoutCustomDelimiters, '\n', DEFAULT_DELIMITER);
  };

  _calculateSum = (defaultDelimitedInput) => {
    const numbers = defaultDelimitedInput.split(DEFAULT_DELIMITER)
      .map(n => parseInt(n))
      .filter(n => n <= 1000);

    const negativeNumbers = numbers.filter(n => n < 0);
    if (negativeNumbers.length > 0) {
      throw `negatives not allowed: ${negativeNumbers.join(', ')}`;
    }

    return numbers.reduce((accumulator, value) => accumulator + value, 0);
  };
}
