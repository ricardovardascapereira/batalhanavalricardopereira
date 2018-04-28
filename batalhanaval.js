 var parte1 =   1+ (Math.floor(Math.random() *6)); // variável determinada pela função Math.random de modo a ser aleatória
 var parte2 = parte1+1; // parte da frente do navio
 var parte3 = parte1 -1; // parte de tráz do navio

 // condição if que exclui o resultado 7
if (parte1==7) { 
	parte1=parte1-1
} 
// condição if que exclui o resultado 1
if (parte1==1) {
	parte1=parte1+1
}
var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;

// ciclo while que configura a lógica do jogo todo
while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:");

   if (jogada < 1 || jogada > 7) {

      alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 3) {

            foiAfundado = true;

            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste...");

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica);