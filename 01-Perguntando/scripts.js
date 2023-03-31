/*
    Enctontre a solução ao problema:

    pergunte o nome do usuário e escreva a mensagem:
    "Olá, [nome do usuário]"
*/

let username = prompt ("qual é seu nome?")
let age = prompt(" Qual é a sua idade?")

const result = age >= 18 ? `${username} tem ${age} anos e é maior de idade, por tanto pode acessar o site.` : 
`${username} tem ${age} anos e é MENOR de idade, por tanto NÃO pode acessar o site`

alert(result)

/*
if (age >= 18){
    alert(`${username} tem ${age} anos e é maior de idade, por tanto pode acessar o site.`)
} else {
    alert(`${username} tem ${age} anos e é MENOR de idade, por tanto NÃO pode acessar o site.`)
}

*/

