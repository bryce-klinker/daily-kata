export function calculateSum(input) {
  if (!input) {
    return 0;
  }

  if (!input.includes(',')) {
    return parseInt(input);
  }

  if (input.includes('['))
    console.log('HERE');

  const numbers = input
    .replace(/\n/g, ',')
    .split(',');
  return numbers.reduce((accumulator, value) => accumulator + parseInt(value), 0);
}
