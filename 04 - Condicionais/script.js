/* 
Solicitar o nome do aluno e as 3 notas do bimestre, calcular amédia daquele aluno.

se o alunoi passou no bimestre das os parabéns

se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na porova de recuperação.

 em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
 */

 // Feito antes de ver a aula

 alert("Seja bem vindo ao portal da escola!")
 alert("Por favor, insira seu nome e as notas do bimestre para saber se passou de ano.")

let userName = prompt("Seu nome:")
let userLastName = prompt("Seu sobrenome:")

let mathNote = prompt("Nota em matemática: ")
let portugueseNote = prompt("Nota em português: ")
let physicNote = prompt("Nota em física: ")

let result = (Number(mathNote) + Number(portugueseNote) + Number(physicNote)) /3

result = result.toFixed(2)

passouDeAno = result >= 6 ? `Parabéns ${userName} ${userLastName}, sua média foi: ${result} e você passou de ano` : `${userName} ${userLastName} Infelizmente você não passou de ano , sua média foi: ${result}, por favor se esforce mais um pouco na prova de recuperação`

alert(passouDeAno)

