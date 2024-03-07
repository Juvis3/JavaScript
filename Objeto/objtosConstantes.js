    //pessoa --> 123 --> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

    //pessoa --> 456 --> {...}
//pessoa = {nome: 'Ana'} //Erro

Object.freeze(pessoa)

pessoa.nome = 'maria'
console.log(pessoa.nome)
