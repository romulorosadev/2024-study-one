/*
Pergunte ao usuário qual é o dia da semana.
Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
Caso contrário, mostre "Boa semana!".
*/

const inDia = prompt("Digite o dia da semana");

const condFimSemana = inDia === "Sábado" || inDia === "Domingo";

let outResposta = "Boa semana!";

if (condFimSemana) {
  outResposta = "Bom fim de semana!";
}

console.log(outResposta);
