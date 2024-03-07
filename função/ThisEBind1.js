const pessoa = {
    Saudacao: 'Bom dia!',
    falar(){
        console.log(this.Saudacao)
    }
}
pessoa.falar()
const falar =  pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()