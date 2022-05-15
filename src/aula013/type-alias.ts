// Por convenção os tipos criados são iniciados com letras maiusculas
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Eduardo',
  idade: 20,
  salario: 200_000,
  corPreferida: 'Ciano',
};
// console.log(pessoa);

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Preto'));
console.log(pessoa); // Não altera o objeto original
