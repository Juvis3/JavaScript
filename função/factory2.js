function criarProduto(nome, preco){
    return{
        nome, 
        preco,
        desconto: 0.1
    }
} 

console.log(criarProduto('leite', 9.99))
console.log(criarProduto('arroz', 6.99))
