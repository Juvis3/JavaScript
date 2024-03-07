class Lancamento {
    constructor(nome = "Marcus", valor = 0){
        this.nome = nome
        this.valor = valor
    } 
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }
    addLancamento(... Lancamentos){
        Lancamentos.forEach(l => this.Lancamentos.push (l))
    }
    sumario() {
        let valorConsolidado = 0
        this.Lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salário', 45000)
const contadeluz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contadeluz)
console.log(contas.sumario())



