//funcao sem retoro
function imprimirsoma(a, b){
    console.log(a + b)
}
imprimirsoma(2, 3)
imprimirsoma(2)
imprimirsoma(2, 22, 4, 5, 6, 7, 8) //pegou os dois primeiros números (2 e 3) e ignorou o resto
imprimirsoma()
var variavel = soma(2, 3)
console.log('variavel é -> ' + variavel)

//funcao cm retorno
function soma(a, b = 2){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log()