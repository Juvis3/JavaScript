function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}
const obj = {max: 50, min: 40}
console.log(rand(obj)) // entre 50 e 40
console.log(rand({min: 955})) // entre 1000 e 955
console.log(rand({})) // entre 1000 e 0
console.log(rand()) // Erro!!