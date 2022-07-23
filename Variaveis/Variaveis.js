//var

// Iniciando as variaveis
var altura = 5;
var comprimento = 7;

// Variavel para o calculo
area = altura * comprimento
console.log(area);
var area;

// varivel com let
let forma = 'retângulo';
let altura1 = 5;
let comprimento1 = 7;
let area1;

if (forma === 'retângulo') {
    area1 = altura1 * comprimento1;
} else{
    area1 = (altura1 * comprimento1)/2;
}

console.log(area1);

// trabalhando com constante
const forma1 = 'triângulo';
const altura2 = 5;
const comprimento2 = 7;
let area3;

if (forma1 === 'quadrado') {
     area3 =  altura2 * comprimento2;
    console.log('A forma é um quadrado.')
} else {
     area3 =(altura2 * comprimento2)/2 ;
    console.log('A forma não é um quadrado.')
}

console.log(area3);