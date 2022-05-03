const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string; // chave nulable
  [key: string]: unknown; //poder extender a classe
} = {
  chaveA: 'A',
  chaveB: 'B',
};

objetoA.chaveA = 'outro valor';

//não inserir novas chaves num tipo após definido
objetoA.chaveC = 'Nova chave';
