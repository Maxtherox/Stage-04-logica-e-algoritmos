/*
    Solicite 2 números, faça a soma deles
    apresente o resultado final

*/

let number1 
let number2 

alert("Olá, essa é uma calculadora extremamente simples")
alert("Em seguida perguntarei dois números e efetuarei uma soma")
number1 = prompt("Me diga o primeiro número")
number2 = prompt("Me diga o segundo número")

const result = (Number(number1)) + (Number(number2))

alert(`a soma de ${number1} + ${number2} é: ${result} `)

let numberThree
let numberFor 

alert('Agora iremos fazer algumas multiplicações')
numberThree = prompt("Insira o número que quer multiplicar")
numberFor = prompt("Insira o segundo número que quer multiplicar")

const resultMulti = (Number(numberThree)) * (Number(numberFor))
alert(`A Multiplicação de ${numberThree} x ${numberFor} é: ${resultMulti}` )

alert('Agora iremos fazer algumas divisões')


numberFive = prompt('Me diga o primeiro número que quer dividir')
numberSix = prompt('Me diga o segundo número que quer dividir')
const resultDivision = (Number(numberFive)) / (Number(numberSix))
alert(`A divisão de ${numberFive} dividido por ${numberSix} é: ${resultDivision}`)