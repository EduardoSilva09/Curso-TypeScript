// Array <T> -T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3, 4, 5);
const concatenados = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');
console.log(result);
console.log(concatenados);
console.log(upper);
