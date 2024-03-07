 function soBOANOTICIA(nota) {
    if(nota >=7){
        console.log('Aprovado com' + nota)
    }
}
soBOANOTICIA(8.1)
soBOANOTICIA(6.1)
soBOANOTICIA(7)

function seFORVERDADEEUFALO(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}
seFORVERDADEEUFALO()
seFORVERDADEEUFALO(null)
seFORVERDADEEUFALO(undefined)
seFORVERDADEEUFALO(NaN)
seFORVERDADEEUFALO('')
seFORVERDADEEUFALO(0)
seFORVERDADEEUFALO(-1)
seFORVERDADEEUFALO(' ')
seFORVERDADEEUFALO('?')
seFORVERDADEEUFALO([])
seFORVERDADEEUFALO([1, 2])
seFORVERDADEEUFALO({})


function boletim(notas){
    if(notas >= 18){
        console.log('Aluno aprovado com: ' + notas)
    }
}
boletim(24)
boletim(17.8)
boletim(28.3)
boletim(14.5)
boletim(19.7)