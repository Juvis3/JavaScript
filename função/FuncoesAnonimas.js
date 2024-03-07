const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(-3, 4, soma)
imprimirResultado(3, 4, function(x, y){
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log("Olá")
    }
}

pessoa.falar()

const humano = {
    dizer: function(){
        console.log("Hello There")
    }
}

humano.dizer()

//minha funçao abaixo :)
const multi = function (i, j){
    return i + j
}

const aleatorio = function(c, d, fazer = multi){
    console.log(fazer(c, d))
}

aleatorio(6, 8, (i, j ) => i * j)