/*
Crie um sistema de pontuação para um jogo.
Se a pontuação for maior ou igual a 100,
mostre "Parabéns, você venceu!".
Caso contrário,
mostre "Tente novamente para ganhar.".
*/

const inPontuacaoJogo = Number(prompt("Digite sua pontuação no jogo"));

const condVencedor = inPontuacaoJogo >= 100;

let outMensagem = "Tente novamente para ganhar.";

if (condVencedor) {
  outMensagem = "Parabéns, você venceu!";
}

console.log(outMensagem);
