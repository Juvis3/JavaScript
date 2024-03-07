//object.PreventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//object.seal
const pessoa = {nome: 'Madara', idade: 1000, }
Object.seal(pessoa)
console.log('Madara foi Selado por Tenten:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Uchiha'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//object.freeze = selado + valores constantes. nao altera os valores