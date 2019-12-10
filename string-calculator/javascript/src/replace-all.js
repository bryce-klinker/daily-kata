export function replaceAll(value, searchValue, replacement) {
  return value.replace(new RegExp(searchValue, 'g'), replacement);
}
