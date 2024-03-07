console.log(soma(3, 4))
//console.log(sub(3, 4))  ERRO

//declaracao de funcao
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}

//named function exprfession
const multi = function multi(x, y){
    return x * y
}

console.log(multi(4, 2))
console.log(sub(3, 4))