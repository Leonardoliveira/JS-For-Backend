function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(5,6));

// parametros x argumentos

function nomeIdade(nome,idade) {
    return `meu nome é ${nome} e minha idade é ${idade}.`;
}
console.log(nomeIdade(40, "Juliana"));

// definindo um valor padrão
function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2
}
console.log(multiplica(soma(4,5),soma(78,89)));


