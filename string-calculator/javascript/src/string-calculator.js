export function calculateSum(input) {
  if (!input) {
    return 0;
  }
  if (!input.includes(',')) {
    return parseInt(input)
  }

  const numbers = input.split(',');
  return numbers.reduce((accumulator, value) => accumulator + parseInt(value), 0);
}
