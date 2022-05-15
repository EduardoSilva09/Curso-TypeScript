type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = (TemNome & TemSobrenome & TemIdade) | intersecao;
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Eduardo',
  sobrenome: 'Silva',
  idade: 30,
};

console.log(pessoa);

export { pessoa };
