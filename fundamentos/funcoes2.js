//armazenando funcao em uma variavel
const imprimirsoma = function(a, b){
    console.log(a + b)
}
imprimirsoma(2, 3)

//armazenar funcao arrowcem variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))