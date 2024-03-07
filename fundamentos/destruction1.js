const pessoa = {
    nome: 'Rebeca',
    idade: 15,
    altura: '1.61m',
    endereco: {
        rua: 'ABC',
        numero: 1000
    }
}
const { nome, idade,} = pessoa
console.log(nome, idade,)

const {nome: n, idade: i} = pessoa
console.log(n, i) 

const {endereco: {rua: r, numero: nu}} = pessoa 
console.log(r, nu)