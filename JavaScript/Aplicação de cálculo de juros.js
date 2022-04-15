// Aplicação de cálculo de juros

//O objetivo da aplicação é calcular o valor total da dívida com juros com base nas informações fornecidas a ela.

//Requisitos:

//O usuário da aplicação deve informar o valor da dívida e o número de dias que ela se encontra em atraso.
// O valor da dívida deve ser maior que zero, caso contrário, a aplicação deve informar ao usuário do problema e encerrar
//O número de dias nos ajuda a determinar a taxa de juros.
// Dívidas com mais de 15 de atraso tem uma taxa de 10% de juros aplicada sobre o valor da dívida,
//já dividas com menos de 15 dias de atraso tem uma taxa de apenas 5% de juros sobre o valor da dívida.
//Os juros só devem ser aplicados, se houver ao menos um dia de atraso, do contrário, o usuário é considerado "em dia" e a aplicação deve ser encerrada com uma mensagem de aviso.

import aplicacaoJuros from "readline-sync";

console.log("Aplicação de Juros: ");

let juros;

let valor = aplicacaoJuros.question("\n Informe o valor devido: ");

if (valor > 0) {
  let dias = aplicacaoJuros.question(
    "Informe quantos dias se passaram desde o vencimento  do boleto: "
  );
  if (dias > 0) {
    if (dias > 15) {
      juros = 10;
    } else {
      juros = 5;
    }
    valor = Number(valor);
    dias = Number(dias);

    var valorJuros = (valor / 100) * juros;
    var total = valor + valorJuros;

    console.log("valor original da dívida: " + valor);
    console.log("Dias atrasados: " + dias);
    console.log("Taxa de Juros: " + juros + "%");
    console.log("Valor total com juros: R$ " + total);
  } else {
    console.log("Voce está em dia!");
  }
} else {
  console.log("O valor da dívida deve ser maior que zero!");
}
