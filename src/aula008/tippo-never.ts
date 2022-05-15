// a função nunca retorna nada, já que lança exceptions
function criaErro(): never {
  throw new Error('Função que lança erro!');
}
criaErro();
