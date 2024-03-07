const quaseArray = {0: 'Rafael', 1: 'Nica', 2: 'Mary'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
value: function() { return Object.values(this)},
enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Nica', 'Mary']
console.log(quaseArray.toString(), meuArray)