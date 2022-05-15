function addConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addConcat(10, 5));
console.log(addConcat('10', '5'));
