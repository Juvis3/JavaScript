//par nome valor
const saudacao = 'opa' //contexto lexico 1

function exec() {
    const saudacao = 'falaaa' //contexto lexico 2
    return saudacao
}
//objetos sao grupos aninhados de pares nome/valor
 const cliente = {
    nome: 'Juvenal',
    idade: 15,
    peso: 70,
    endereco: {
        rua: 'Rua Estranha',
        numero: 1234
    }
 }
 console.log(saudacao)
 console.log(exec())
 console.log(cliente)