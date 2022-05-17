//type assertions
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// ! non null assertion
const body1 = document.querySelector('body')!;
body1.style.background = 'red';

//Type Assertion - Recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HTMLElement
const input = document.querySelector('input') as HTMLInputElement;
input.value = 'teste';
input.focus();

//Type Assertion - subir tipo
const body4 = document.querySelector('body') as unknown as number;
console.log(typeof body4);
