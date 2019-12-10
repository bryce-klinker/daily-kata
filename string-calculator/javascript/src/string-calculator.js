function isSingleNumber(input) {
  return input
    .split('')
    .every(i => !isNaN(parseInt(i)));
}

function consolidateDelimiters(input) {
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

