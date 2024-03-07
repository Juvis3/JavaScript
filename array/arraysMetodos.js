const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()
console.log(pilotos)

pilotos.push('verstappen') //remove o ultimo
console.log(pilotos)

pilotos.shift()
console.log(pilotos) //remove o primeiro elemento

pilotos.unshift('Hamilton') //add elemento no indice 0  
console.log(pilotos)

//splice add ou remove elemntos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massas')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //massa foi de base dnv 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)