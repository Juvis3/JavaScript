const pai = {nome: 'Joel', corDoCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Sarah'
console.log(filha1.corDoCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Ellie', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelos ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2)) //se o enumrable fosse false nao iria aparecer o [ 'nome' ]
 
for (let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`por herança ${key}`)
}