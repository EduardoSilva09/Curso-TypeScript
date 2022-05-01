/* eslint-disable */
//tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Eduardo'; // qualquer string
let idade: number = 20; // quanquer número
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('Qualquer symbol');
// let big: bigint = 10n //bigint

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5, 6];
let arrayDeString: Array<string> = ['1', '2', '3'];
let arrayDeString2: string[] = ['1', '2', '3'];

//objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = { nome, idade };

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
