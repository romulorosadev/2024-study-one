/*
Crie uma mensagem
que informa o usuário sobre o saldo da conta,
usando uma template string
para incluir o valor do saldo.
*/

const inSaldo = Number(prompt("Digite seu saldo em conta: "));

const condSaldoNegativo = inSaldo < 0;
const condSaldoPositivo = inSaldo > 0;

let outSaldoStatus;

if (condSaldoNegativo) {
  outSaldoStatus = "Negativo";
} else if (condSaldoPositivo) {
  outSaldoStatus = "Positivo";
} else {
  outSaldoStatus = "Nulo";
}

console.log(`SALDO: ${outSaldoStatus} \nVALOR: R$ ${inSaldo}`);
