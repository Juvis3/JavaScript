//colecao dinamica de pares chaves/valor

const produto = new Object 
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    preco: 89000,
    proptrietario: {
        nome: 'Juvenal',
        idade: 16,
        endereco: {
            logradouro: 'Rua Azevedo',
            numero: 123,

        }

    },
    condutores: [{
        nome: 'Carlos',
        idade: 19,
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proptrietario.endereco.numero = 1000
carro ['proptrietario'] ['endereco']['numero'] = 'AV Gigante'
console.log(carro)

delete carro.condutores
delete carro.calcularValorSeguro
delete carro.proptrietario.endereco
console.log(carro)
console.log(carro.condutores) //Undefimed
