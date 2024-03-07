console.log(typeof Array, typeof new Array, typeof [] )

let aprovados = new Array ('Bea', 'Nica', 'Mary')
console.log(aprovados)

aprovados['Bea', 'Nica', 'Mary']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Cauan'
aprovados.push('Mazi')
console.log(aprovados.length) //conta os elementos 

aprovados[9] = 'sophi'
console.log(aprovados.length)
console.log(aprovados[6, 7, 8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bea', 'Nica', 'Sophi']
aprovados.splice(1, 1 , 'elmento 1', 'elemento 2') //primeieiro número = elemento / segundos numero: numero de exluidos 
console.log(aprovados)