// Boolean
// true -> verdadeiro
// false -> falso 

const primeiroNumero = 5;
const segundoNumero = 5;
let cadastroAtivado =  true;

console.log(primeiroNumero === segundoNumero);

const texto1 = "Alura";
const texto2 = "a";

console.log(texto1 === texto2);

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;