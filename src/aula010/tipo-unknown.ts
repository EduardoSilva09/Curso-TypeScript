// Similar ao Any só que mais seguro
let xUnknown: unknown;
xUnknown = 100;
xUnknown = 'Eduardo';
const y = 800;

// console.log(xUnknown * y); -> gera um erro pois pede para fazer uma verificação antes

if (typeof xUnknown === 'number') console.log(xUnknown * y);
