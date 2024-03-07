function tratarErroELancar(erro) {
   //throw new Error('Deu ruim gente mas calma')
   //throw 10
  //throw true
  //throw 'mensagem'
  throw {
    nome: erro.nome, 
    msg: erro.mensage,
    date: new Date
  }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Juvenal'}
imprimirNomeGritado(obj)