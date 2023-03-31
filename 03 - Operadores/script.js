/* 

capturar 2 números
e fazer as operações matématicas de soma, subtração, multiplicação, divisão e resto da divisão

*/

let numberOne
let numberTwo

numberOne = prompt("Digite o primeiro número")
numberTwo = prompt("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`A Soma é: ${sum}`)
alert(`A subtração é: ${sub}`)
alert(`A multiplicação é: ${multi}`)
alert(`A divisão é: ${div}`)
alert(`O Resto da divisão é: ${restDiv}`)
