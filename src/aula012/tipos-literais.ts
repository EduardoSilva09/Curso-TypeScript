let numero = 10; // O tipo de "numero" é number
numero = 9;

const numeroLiteral = 10; // O tipo de "numeroLiteral" é literalmente 10
console.log(numero, numeroLiteral);

const pessoa = {
  nome: 'Eduardo' as const,
  sobrenome: 'Silva',
};
// pessoa.nome = 'aaaa'; -> o nome agora não pode ser alterado
pessoa.sobrenome = 'teste';
console.log(pessoa);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Vermelho'));

//Module mode
export default 1;
