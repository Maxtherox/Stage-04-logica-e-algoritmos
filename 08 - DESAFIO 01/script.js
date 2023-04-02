
let number1 
let number2
let OptionMenu
number1 = (Number(number1))
number2 = (Number(number2))


function verificarNumero (number1, number2){
    if (number1 == number2){
        alert('números identicos')
       } else {
        alert(' Números diferentes')
       }
    }

function somar (number1,  number2) {
   let resultado = (Number(number1)) + (Number(number2))
   verificarNumero(number1, number2)
   return resultado
   
   
   }
   function multi (number1, number2){
    let resultado = number1 * number2
    verificarNumero(number1, number2)
    return resultado
    }

    function sub (number1, number2){
        let resultado = number1 - number2
        verificarNumero(number1, number2)
        return resultado
    }

    function div (number1, number2){
        let resultado = number1 / number2
        verificarNumero(number1, number2)
        return resultado
    }

    function restDiv (number1, number2){
        let resultado = number1 % number2
        verificarNumero(number1, number2)
        return resultado
    }
/*

   CalculoSomar = (somar(prompt("Digite um número"), prompt("Digite o segundo número" )))
   let optionRestoDiv = prompt(`Você quer saber se a soma que você fez retornou um número impar ou par? digite sim ou não`)

        let resto =  CalculoSomar % 2 
        if (resto === 0) {
            alert('este número é par')
       } else {
            alert('este número é impar')
       }
*/
  
   while (OptionMenu != 6) {
    let OptionMenu = Number(prompt(` 
    olá usuário! Digite o número da opção de calculo desejada
            
    1. Soma
    2. Multiplicação
    3. Subtração
    4. Divisão
    5. Resto da divisão.`))

    switch (OptionMenu){
        case 1:
            CalculoSomar = (somar(prompt("Digite um número para somar"), prompt("Digite um segundo número para somar com o primeiro" ))) 
                        
            alert(CalculoSomar)

            let parOuImpar = CalculoSomar % 2
            console.log(parOuImpar)
            if (parOuImpar == 0) {
                alert ('este número é par')
                
            } else {
                alert('Este número é impar')
            }
            
            break;

        case 2: 
            calculoMulti = (multi(prompt(`Digite um número para multiplicar`), prompt(`Digite um segundo número para multiplicar com o primeiro`)))
            alert(calculoMulti)
            break;

        case 3:
            calculoSub = (sub(prompt(`Digite um número fazer a subtração`), prompt(`digite o segundo número`)))
            alert(calculoSub)
            break;

        case 4: 
            calculoDiv = (div(prompt("Digite um número pra fazer a divisão"), prompt("Digite o segundo número")))
            alert(calculoDiv)
            break;
        case 5: 
            calculoRestDiv = (restDiv(prompt("Digite um número que quer dividr e ver o resto da divisão"), restDiv("Digite o segundo número")))
            alert(calculoDiv)
            break;
        } 
   }
   
  