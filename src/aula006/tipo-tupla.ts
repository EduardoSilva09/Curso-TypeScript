//Tipo tuple
const dadosCliente: readonly [number, string] = [1, 'Eduardo'];
const dadosCliente1: [number, string, string] = [1, 'Eduardo', 'Silva'];
const dadosCliente2: [number, string, string?] = [1, 'Eduardo', 'Silva'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Eduardo', 'Silva'];

// dadosCliente[0] = 100;
// dadosCliente[1] = 'Silva';
// dadosCliente.pop(); -> Adicionar readyOnly pra previnir esse comportamento

console.log(dadosCliente);
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

// ReadOnly Array
const array1: readonly string[] = ['Eduardo', 'Silva'];
const array2: ReadonlyArray<string> = ['Eduardo', 'Silva'];
console.log(array1);
console.log(array2);
