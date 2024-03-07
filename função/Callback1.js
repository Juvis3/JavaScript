const fabricantes = ["Mercedes", "BMW", "Audi"]

function imprimir(nome, indice){
    console.log( `${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))




const friends = ['Rebeca e Cauan', 'Clara', 'Sophia','Samara']

function surgir(nome, indice){
    console.log( `${indice + 1}. ${nome} `)
}

console.log("My Best Friends :D")
friends.forEach(surgir)