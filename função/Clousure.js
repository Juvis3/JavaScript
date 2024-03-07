//Escopo criaddo quando funcao e declaradad
//permite a funcao acessar e manipular variaveis externas a funcao

//Constexto Lexico em acao!!!
const x = 'global'
function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())