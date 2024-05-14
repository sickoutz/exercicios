let readline = require("readline-sync");
let num1 = Math.floor(Math.random() * 100 + 1);

while (guess !== num1)
{
let guess = readline.questionInt("Digite seu palpite de 1 a 100 \n")
if (guess > num1)
{
console.log("Tente um número MENOR: \n")
}
else if (guess < num1)
{
console.log("Tente um número MAIOR: \n")
}

}
console.log("Você acertou!")
