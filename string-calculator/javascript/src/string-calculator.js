import { replaceAll } from './replace-all';
import { replaceCustomDelimitersWithDefaultDelimiter } from './custom-delimiters';

const DEFAULT_DELIMITER = ',';

function isSingleNumber(input) {
  return input
    .split('')
    .every(i => !isNaN(parseInt(i)));

}

function replaceDelimitersWithDefault(input) {
  const inputWithoutCustomDelimiters = replaceCustomDelimitersWithDefaultDelimiter(input, DEFAULT_DELIMITER);
  return replaceAll(inputWithoutCustomDelimiters, '\n', DEFAULT_DELIMITER);
}

function add(defaultDelimitedInput) {
  const numbers = defaultDelimitedInput.split(DEFAULT_DELIMITER);
  return numbers.reduce((accumulator, value) => accumulator + parseInt(value), 0);
}

export function calculateSum(input) {
  if (!input) {
    return 0;
  }

  if (isSingleNumber(input)) {
    return parseInt(input);
  }

  const defaultDelimiterInput = replaceDelimitersWithDefault(input);
  return add(defaultDelimiterInput);
}

String.prototype.replaceAll = function(searchValue, replacement) {
  return this.replace(new RegExp(searchValue, 'g'), replacement);
};
