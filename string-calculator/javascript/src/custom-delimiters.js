import { replaceAll } from './replace-all';

const CUSTOM_DELIMITER_START_INDICATOR = '//[';
const CUSTOM_DELIMITER_END_INDICATOR = ']\n';

export function replaceCustomDelimitersWithDefaultDelimiter(input, defaultDelimiter) {
  return hasCustomDelimiter(input)
    ? replaceCustomDelimiters(input, defaultDelimiter)
    : input;
}

function replaceCustomDelimiters(input, defaultDelimiter) {
  const delimiter = getCustomDelimiter(input);
  const inputWithoutCustomDelimiterIndicator = removeCustomDelimiterIndicator(input);
  return replaceAll(inputWithoutCustomDelimiterIndicator, delimiter, defaultDelimiter);
}

function hasCustomDelimiter(input) {
  return input.startsWith(CUSTOM_DELIMITER_START_INDICATOR);
}

function getCustomDelimiter(input) {
  const inputWithoutStartIndicator = input.replace(CUSTOM_DELIMITER_START_INDICATOR, '');
  const indexOfEndIndicator = inputWithoutStartIndicator.indexOf(CUSTOM_DELIMITER_END_INDICATOR);
  return inputWithoutStartIndicator.substr(0, indexOfEndIndicator);
}

function removeCustomDelimiterIndicator(input) {
  const endOfCustomDelimiterIndex = input.indexOf(CUSTOM_DELIMITER_END_INDICATOR);
  return input.substr(endOfCustomDelimiterIndex + 2);
}
