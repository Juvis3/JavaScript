const aprovados = ['Agatha', 'Kaiser', 'Arthur', 'Joui']

aprovados.forEach(function(nome, indice, Array,){   
    console.log(`${indice + 1}) ${nome}`)
    console.log(Array)
    
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
