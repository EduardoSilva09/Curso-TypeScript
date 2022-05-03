const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string; // chave nulable
  [key: string]: unknown; //poder extender a classe
} = {
  chaveA: 'A',
  chaveB: 'B',
};

objetoA.chaveB = 'outro valor';

//não inserir novas chaves num tipo após definido
objetoA.chaveC = 'Nova chave';
