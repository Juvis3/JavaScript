Array.prototype.filter2 = function(callback) {
     const newArray = []
     for (let i = 0; i < this.length; i++){
        if (callback(this[i], i,this)) {
            newArray.push(this[i])
        }
     }
     return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad pro', preco: 4199, fragil: true },
    { nome: 'copo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p){
    return true
    //return p.preco > 2500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro))
console.log(produtos.filter2(fragil))