function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Eduardo',
  sobrenome: 'Silva',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Teste', 'teste3', 'teste 4');
pessoa.exibirNome();

export { pessoa };
