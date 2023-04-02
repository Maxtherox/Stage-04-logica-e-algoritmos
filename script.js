/* 
    crie uma lista de pacientes

    cada paciente deverá conter
    nome
    idade
    peso
    altura

    escreva uma lista contendo o nome dos pacientes

    */

    const pacients = [
        {
            name: "Luiz",
            age: 20,
            weight: 120,
            height: 177

        },
        {
            name: "josé",
            age: 20,
            weight: 130,
            height: 177
        },
        {
            name: "Amanda",
            age: 20,
            weight: 50,
            height: 157
    },
    ]

let patientsNames = []

for(let pacient of pacients){
    patientsNames.push(pacient.name, pacient.age, pacient.weight, pacient.height)
}

/*for(let index = 0; index < pacients.length; index++){  //for antigo
    patientsNames[index] = pacients[index].name
}*/

function calcIMC(weight, height) {
    return (weight / ((height /100) **2)).toFixed(2)
    
}


function  printPatientIMC(pacients){
    return `
    Paciente ${pacients.name} possui o IMC de: ${calcIMC(pacients.weight, pacients.height)}
`
}

for(let pacient of pacients){
    let IMCmessage = printPatientIMC(pacient)
    alert(IMCmessage)
}

let number1 = prompt(Number('Insira um número'))
let number2 = prompt(Number('Insira um número'))


function somar (number1,  number2) {
    return number1 + number2
   }
   
   let testePar = somar
   
   function resto (somar){
         return somar % 2
   }
   
   if (resto == 0) {
        Alert('este número é par')
   } else {
        alert('este número é impar')
   }

   console.log()