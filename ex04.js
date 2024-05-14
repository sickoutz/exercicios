let user = ("admin")
let credencial = true

if (user == ("admin") && credencial == true)
{
console.log("Acesso concedido como administrador")
}
else if (user == ("funcionário") && credencial == true)
{
console.log("Acesso concedido como funcionário")
}
else if (credencial == false)
{
console.log("Credenciais inválidas")
}
else 
{
console.log("Usuário inválido")
}