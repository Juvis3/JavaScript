const imprimirResultado = function(nota) {
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Juvenal: Quadro de honra')
            break
        case 8: case 7:
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('te vejo aqui denovo proximo ano :)')
            break
            default:
                console.log('Nota inválida')
    }
}
imprimirResultado(10)  
imprimirResultado(7)
imprimirResultado(6.7)
imprimirResultado(5.4)
imprimirResultado(3)
imprimirResultado(2)
imprimirResultado(0)
imprimirResultado()
imprimirResultado(-1)
imprimirResultado(11)