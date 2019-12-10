const DEFAULT_DELIMITER = ',';
const CUSTOM_DELIMITER_START_INDICATOR = '//[';
const CUSTOM_DELIMITER_END_INDICATOR = '\n';

function isSingleNumber(input) {

  return input
    .split('')
    .every(i => !isNaN(parseInt(i)));

}

function hasCustomDelimiter(input) {
  return input.startsWith(CUSTOM_DELIMITER_START_INDICATOR);
}

function getCustomDelimiter(input) {
  return input.replace(CUSTOM_DELIMITER_START_INDICATOR, '').charAt(0);

}

function removeCustomDelimiter(input) {
  const endOfCustomDelimiterIndex = input.indexOf(CUSTOM_DELIMITER_END_INDICATOR);
  return input.substr(endOfCustomDelimiterIndex + 1);
}

function consolidateDelimiters(input) {
  if (hasCustomDelimiter(input)) {
    const delimiter = getCustomDelimiter(input);
    input = removeCustomDelimiter(input).replaceAll(delimiter, DEFAULT_DELIMITER);
  }

  return input
    .replaceAll('\n', DEFAULT_DELIMITER);
}

function add(scrubbedInput) {
  const numbers = scrubbedInput.split(DEFAULT_DELIMITER);
  return numbers.reduce((accumulator, value) => accumulator + parseInt(value), 0);
}

export function calculateSum(input) {
  if (!input) {
    return 0;
  }

  if (isSingleNumber(input)) {
    return parseInt(input);
  }

  let scrubbedInput = consolidateDelimiters(input);
  return add(scrubbedInput);
}

String.prototype.replaceAll = function(searchValue, replacement) {

  return this.replace(new RegExp(searchValue, 'g'), replacement);
};
