let pedido = ("pendente")

if (pedido == "pendente")
{
console.log("Pedido em andamento, aguarde")
}
else if (pedido == "preparando")
{
console.log("Pedido em preparo")
}
else if (pedido == "pronto")
{
console.log("Pedido pronto para retirada")
}
else if (pedido == "entregue")
{
console.log("Pedido entregue com sucesso")
}
else
{
console.log("Estado do pedido desconhecido")
}