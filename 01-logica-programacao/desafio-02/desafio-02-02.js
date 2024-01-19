/*
Verifique se um número digitado pelo usuário é positivo ou negativo.
Mostre um alerta informando.
*/

const inNumeroUsuario = Number(prompt("Digite um número: "));

const condNumeroNegativo = inNumeroUsuario < 0;
const condNumeroPositivo = inNumeroUsuario > 0;

const outMensagemNumeroPositivo = "Número Positivo";
const outMensagemNumeroNegativo = "Número Negativo";
const outMensagemNumeroNeutro = "Número Neutro";
let outMensagem;

if (condNumeroNegativo) {
  outMensagem = outMensagemNumeroNegativo;
} else if (condNumeroPositivo) {
  outMensagem = outMensagemNumeroPositivo;
} else {
  outMensagem = outMensagemNumeroNeutro;
}

alert(outMensagem);
