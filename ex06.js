let digcc = 4004550022335555;
let str1 = String(digcc);
let dig1 = str1[0];
if (dig1 == 4)
{
console.log("Visa")
}
else if (dig1 == 5)
{
console.log("Mastercard")
}
else if (dig1 == 3)
{
console.log("American Express")
}
else
{
console.log("Bandeira desconhecida")
}