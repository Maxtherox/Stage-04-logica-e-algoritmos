/*
    capture 10 items para compor a lista de um supermercado.
    após capturar os 10 itenms, imprima-os separando por vírgula.
*/

/*
market = []
let ItemName
let items = []


for (let item = 0; item < 5; item++){
   ItemName = prompt("insira o item " + (item + 1))
   
   items[item] = ItemName
}   

[]

console.log(items)
*/

/*
    capture 10 items para compor a lista de um supermercado.
    após capturar os 10 itenms, imprima-os separando por vírgula.
*/

let items = []

for (item = 0; item < 5; item++) {
    let newItem = prompt("Insira o nome do item" + (item + 1))
    items[item] = newItem
}

alert(items)
console.log(items)
alert(items[3])