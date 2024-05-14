let readline = require("readline-sync");

let fatorial = readline.questionInt("Digite um número para calcular seu fatorial")
let resultado = fatorial;
let i = fatorial - 1;

for (i; i > 1; i--) 
{
resultado *= i;
}
console.log(resultado)