/* 
    ** Jogo de adivinhação **

    apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando está entre 0 e 10"

    crie uma lógica para gerar um número aleatório e verfificar se o número digitado é o mesmo que o aleatório gerado pelo sistema

    enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro tente novamente"

    caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! você acertou o número em x tentativas"

    substitua o x da mensagem pelo número de tentativas
    */

    /* antes de ver o video -- fracasso kkkkkk
    let Result = prompt('Advinhe o número que estou pensando, está entre 0 e 10!')

    let randomNumber

    randomNumber = prompt("Digite o número")
    randomNumber = Number(randomNumber)

    while( randomNumber != 4 && randomNumber < 10, randomNumber++){}
    */

    // vendo o video

    let result = prompt('Advinhe o número que estou pensando, está entre 0 e 10!')
    const randomNumber = Math.round(Math.random() * 10)
    let xAttempts = 1;

    while(Number(result) != randomNumber) {
        xAttempts++
        result = prompt("Número errado tente novamente")
        
    }

    if (xAttempts == 1){
        alert(`Parabéns! você acertou o número que eu estava pensando (${randomNumber}) na primeira tentativa!`)
    } else {
        alert(`Parabéns! você acertou o número que eu estava pensando (${randomNumber}) em ${xAttempts} tentativas`)
    }
    console.log(result, randomNumber)