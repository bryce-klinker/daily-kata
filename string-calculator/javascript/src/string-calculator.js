function isSingleNumber(input) {
  return input
    .split('')
    .every(i => !isNaN(parseInt(i)));
}

function hasCustomDelimiter(input) {
  return input.startsWith('//[');
}

function getCustomDelimiter(input) {
  return input.replace('//[', '').charAt(0);
}

function removeCustomDelimiter(input) {
  const endOfCustomDelimiterIndex = input.indexOf('\n');
  return input.substr(endOfCustomDelimiterIndex + 1);
}

function consolidateDelimiters(input) {
  if (hasCustomDelimiter(input)) {
    const delimiter = getCustomDelimiter(input);
    input = removeCustomDelimiter(input)
      .replace(new RegExp(delimiter, 'g'), ',');
  }

  return input
    .replace(/\n/g, ',');
}

function add(scrubbedInput) {
  const numbers = scrubbedInput.split(',');
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

