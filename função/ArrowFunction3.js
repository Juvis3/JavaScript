let ComParaComThis = function(param){
    console.log(this === param)
}

ComParaComThis(global)

const obj = {}
ComParaComThis = ComParaComThis.bind(obj)
ComParaComThis(global)      
ComParaComThis(obj)

let ComParaComThisArrow = param => console.log(this === param)
ComParaComThisArrow(global)
ComParaComThisArrow(module.exports)
ComParaComThisArrow(this)

ComParaComThisArrow = ComParaComThisArrow.bind(obj)
ComParaComThisArrow(obj)
ComParaComThisArrow(module.exports)