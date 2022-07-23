// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";
// com 3
console.log(numero === numeroString);
// com 2
console.log(numero == numeroString);
// fazendo a concatenação - cuidado 
console.log(numero + numeroString);

// Number()
console.log(numero + Number(numeroString));
// String()
console.log(String(numero) + numeroString);

// provocando erro nan
const numeroString1 = "456a";
console.log(numero + Number(numeroString1));

// conversão explícita

// Anotações
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

let largura1 = "10";
let altura1 = "5";
console.log( + largura1 * + altura1); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado1 = false;
console.log(Number(usuarioConectado1)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado1)); // agora teremos a conversão de true (verdadeiro) para o número 1.

let cpfUsuario = "12312312312";

let varInicial = 0;
let ifFalse = 0;
let constDeTexto = "Alura";
