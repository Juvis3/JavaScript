//usando notacao literal
const obj1 = {}
console.log(obj1)

//objeto em js
console.log(typeof Object, typeof new Object)
 const obj2 = new Object
 console.log(obj2)

 //funcoes construtora
 function produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1- desc)

    }
 }

 const p1 = new produto ('Caneta', 7.99, 0.15)
const p2 = new produto ('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//funcao factory
function criarFuncionario(nome, salarioBAse, faltas){
    return{
        nome,
        salarioBAse,
        faltas,
        getSalario(){
            return (salarioBAse / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//funcao famosa q rwtorna object...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)