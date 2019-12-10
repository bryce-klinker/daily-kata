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
  const numbers = defaultDelimitedInput.split(DEFAULT_DELIMITER)
    .map(n => parseInt(n));

  const negativeNumbers = numbers.filter(n => n < 0);
  if (negativeNumbers.length > 0) {
    throw `negatives not allowed: ${negativeNumbers.join(', ')}`
  }

  return numbers.reduce((accumulator, value) => accumulator + value, 0);
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
