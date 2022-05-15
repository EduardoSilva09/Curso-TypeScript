enum Cores {
  VERMELHO,
  LARANJA,
  VERDE,
}
//Merge
enum Cores {
  ROXO = 'ROXO',
  ROSA = 4,
}

console.log(Cores);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(100); //Não dará erro, mesmo não havendo um tipo para esta posição
