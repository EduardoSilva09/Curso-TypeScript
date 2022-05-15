let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

const person = createPerson('Eduardo');

console.log(person.firstName);
// funções com parâmetros opicionais podem retornar valor undefined
if (typeof person.lastName !== 'undefined') {
  console.log(person.lastName);
}

//Pode retornar number ou null
function squareOf(x: any) {
  if (typeof x === 'number') {
    return x * x;
  }
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (typeof squareOfTwoNumber === null) {
  console.log('conta inválida!');
}
console.log(squareOfTwoNumber);
console.log(squareOfTwoString);
