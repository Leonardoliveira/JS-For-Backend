function apresentar(nome) {
    return `Meu nome é ${nome}.`;
}

// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}.`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10 ) {
        return "Somente números de 1 a 9"
    }else {
        return num1 + num2;
    }
}

// hoisting: arrow function se comporta com expressão

// operador maior ou igual que
// >=

if (condicao) {
    // código a ser executado
   }

   const num = 10;

   if (num === null) {
    console.log('número não fornecido');
   }

   const num = 10;

if (num !== null) {
 console.log(`o número é ${num}`);
}

if (num) {
    console.log(`o número é ${num}`);
   }

   const num = null;

   if (num === null) {
    console.log('número não fornecido');
   }

   if (!num) {
    console.log('número não fornecido');
   }

   const num = 11;

   if (num > 10 || !num) {
    console.log('número não válido');
   }

   const num = 11;

   if (num > 10 && num < 20) {
    console.log('número válido');
   }

   function verificaNumero(numero) {

    if (numero > 10) {
      return 'número maior que 10';
    } else {
      return 'número não é maior que 10';
    }
    }
   
   console.log(verificaNumero(9)) //número não é maior que 10

   const num = 15;

   if (num >= 0 && num <= 10) {
     console.log('número entre zero e dez');
   } else if (num > 10 && num <= 20) {
     console.log('número entre dez e vinte');
   } else if (num > 20 && num <= 30) {
     console.log('número entre vinte e trinta');
   } else {
     console.log('outro número');
   }

const num1 = 5;
const num2 = 5;
const resultado = num1 + num2;

function soma(num1, num2) {
    return num1 + num2;
   }
   
   console.log(soma(5, 5))