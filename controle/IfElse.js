const imprimirResultado = function(nota){
    if(nota >=7){
        console.log('Aprovado!')
    } else{
        console.log('Reprovado!')
    }
}
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(4)
imprimirResultado(6)
imprimirResultado('Epa!') //Cuidado!!
