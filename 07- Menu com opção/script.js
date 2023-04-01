/*

    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    olá usuário! Digite o número da opção desejada
        
        1. Cadastrar um item na lista
        2. Mostrar Itens cadastrados
        3. Sair do programa.

    ---

    O Programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
        se não houver nenhum item cadastrado, mostrara a mensagem:
            "Não existem itens cadasrtrados"
    caso o usuário digite 3, a apliacação deverá ser encerrada.
*/

/* dados de entrada do usuário
    1. Número desejado
    2. Item da lista

   Quais são as variaveis?
    1. Opção digitada
    2. Lista de itens
    3.

    */
    let option
    let items = []
    // let index = 0; //Jeito alternativo de colocar info no array (index = 0 quando roda acrescente 1 numero em index)


while(option != 3){

    let option = Number(prompt(` 
    olá usuário! Digite o número da opção desejada
            
    1. Cadastrar um item na lista
    2. Mostrar Itens cadastrados
    3. Sair do programa.`))

switch (option){
    case 1:
        let item = prompt("Digite o nome do item")
        items.push(item)
        //index++
        break;
    case 2:
        if(items.length == 0){
            alert("não existe itens cadastrados")
        } else{
            alert(items) 
        }    
        break;
    case 3:
        alert("Aplicação encerrada")
        break;
    default:
       alert("Opção invalida, tente novamente.")  //caminho padrão quando não é um dos casos acima
       break;
       
}
}