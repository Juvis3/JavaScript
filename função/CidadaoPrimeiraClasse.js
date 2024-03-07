//cruiar de forma literal
function fun1() { }

//armazenar em uma variavel
const fun2 = function() { }

//amrmazenar em array (pouco utilizado)
const array = [function(a, b) {return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//amrmazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//passsar funçao como parametro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

//uma funçao pode retornar/conter uma funçao
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const CincoMais = soma(2, 3)
CincoMais(4)