/*------------- JOGO DA MEMÓRIA COM POKÉMONS ---------------*/
//declaração da variável com a atribuição de um array com as imagens das cartas
const cartas = ['./img/jogo_memoria/sandslash.svg',  './img/jogo_memoria/sandslash.svg',
    './img/jogo_memoria/pikachu.svg',    './img/jogo_memoria/pikachu.svg',
    './img/jogo_memoria/meowth.svg',     './img/jogo_memoria/meowth.svg',
    './img/jogo_memoria/bulbasaur.svg',  './img/jogo_memoria/bulbasaur.svg',
    './img/jogo_memoria/charmander.svg', './img/jogo_memoria/charmander.svg',
    './img/jogo_memoria/lapras.svg',     './img/jogo_memoria/lapras.svg'];

let atual = [];             //declaração da variável atual com um array vazio
let adivinhar = false;    //declaração da variável adivinhar com o valor false
let correspondencias = 0;   //declaração da variável correspondencias com o valor 0
let contagemJogadas = 0; //declaração da variável contagemJogadas com o valor 0
let pontuacao = 100;        //declaração da variável pontuacao com o valor 100
let vitorias = 0;           //declaração da variável vitorias com o valor 0
let derrotas = 0;           //declaração da variável derrotas com o valor 0

//declaração da função baralharArray
//o algoritmo de Fisher-Yates  é uma maneira eficiente colocar os elementos de um array de forma aleatória
//A função baralha, de forma aleatória, os elementos do array, passado como argumento, alterando a ordem dos elementos de maneira não determinística. 
function baralharArray(array){
for (let i = array.length - 1; i > 0; i--) {    //o ciclo for inicia com i (que é igual ao último elemento do array)
const j = Math.floor(Math.random() *(i + 1)) //o método Math.random gera um número aleatório entre 0 e 1 e o o método Math.floor arredonda o número para baixo
const temp = array[i]                       //o valor do array é armazenado em temp
array[i] = array[j]                         //o array i recebe o valor do array j
array[j] = temp                             //o array j recebe o valor de temp
}
}

//declaração da função configurarCartas que cria o tabuleiro de jogo com as cartas baralhadas
function configurarCartas() {
const tabuleiro = document.getElementById('tabuleiro');   //as cartas serão colocadas no tabuleiro, no html há a div com id=tabuleiro
baralharArray(cartas);                           //chama a função baralharArray para baralhar as cartas
for (let i = 0; i < cartas.length; i++) {        //o ciclo for age sobre cada carta do array       
let carta = document.createElement('div');   //cria uma div que representa uma carta
carta.dataset.item = cartas[i];              //armazena informações sobre a carta
carta.dataset.index = i;                     //armazena informações sobre a carta
carta.innerHTML = "<img class='card-img' src='" + cartas[i] + "' alt='imagem' draggable=''false'><div class='cover'></div>";   //o conteúdo HTML inclui uma imagem e um cover
carta.onclick = aoClicarCarta;      //evento onclick que chama a função aoClicarCarta (quando se clicar na carta)
tabuleiro.appendChild(carta);       //adição da carta (filha) no tabuleiro (pai)
}
}

//declaração da função aoClicarCarta que aceita o parâmetro e
//gere a lógica do jogo: verifica se pode ser feita uma nova tentativa
//vira a carta clicada e armazena a carta clicada ao array para verificação
function aoClicarCarta(e) {
if (adivinhar) return;        //verifica se a variável adivinhar é true. Evita que o jogador interaja com mais cartas no meio de uma combinação de duas cartas
let alvo = e.currentTarget;     //obtém o elemento que foi clicado: a carta
if (atual.length < 2) {         //verifica se menos do que duas cartas foram clicadas
alvo.classList.add('virada');  //adiciona a class virada para mostrar o verso da carta (ver css)
atual.push(alvo);           //adiciona a carta clicada ao array atual que verifica as cartas clicadas
}


contagemJogadas++;   //incrementa o valor da variável contagemJogadas
document.getElementById('jogadas').textContent = 'Jogadas: ' + contagemJogadas; //seleciona o id do HTML denominado de jogadas, adiciona texto e adiciona o valor da variável contagemJogadas

//ciclo se (if)
//verifica se duas cartas viradas correspondem
if (atual.length == 2) {    //se duas cartas foram viradas
adivinhar = true;       //adivinhar é verdadeiro, então mais nenhuma pode ser virada
if (atual[0].dataset.item == atual[1].dataset.item) {   //compara o valor do dataset.item das cartas viradas
  correspondencias++;                                 //se forem iguais,  incrementa a variável correspondências
  adivinhar = false;                                  //altera adivinhar para false para poder clicar em mais cartas
  atual = [];                                         //esvazia o array
  if (correspondencias == cartas.length / 2) {        //Verifica se o número de correspondências é igual à metade do número total de cartas (cartas.length / 2), o que significa que todas as cartas foram combinadas
      vitorias++;                                     // incrementa a variável vitorias 
      document.getElementById('vitorias').textContent = 'Vitórias: ' + vitorias;  //atualiza o elemento HTML com id=vitorias para refletir o novo número de vitórias.
      alert('Boa! Ganhaste!');                        //mensagem de vitória (alert)
  }
} else {                                        //Se as cartas não corresponderem           
  setTimeout(function () {                    //define um tempo para criar um atraso antes de virar as cartas de volta 
      atual[0].classList.remove('virada');    //remove a classe virada permitindo que o jogador vire novas cartas.
      atual[1].classList.remove('virada');    //remove a classe virada permitindo que o jogador vire novas cartas.
      atual = [];                             //esvazia o array atual 
      adivinhar = false;                      //redefine a variável adivinhar para false
  }, 1000);                                   //define um tempo de 1 segundo (1000 milissegundos)
}
}

pontuacao--;    //decrementa o valor da variável pontuação
document.getElementById('pontos').textContent = 'Pontuação: ' + pontuacao; //seleciona o id do HTML denominado de pontos, adiciona texto e adiciona o valor da variável pontuacao
if (pontuacao <= 0) {       //se o valor da variável pontuacao é menor ou igual a 0
alert('Infelizmente não conseguiste! Tenta novamente!');    //mensagem de derrota (alert)
derrotas++;                                                 // incrementa a variável derrotas 
document.getElementById('derrotas').textContent = 'Derrotas: ' + derrotas;  //atualiza o elemento HTML com id=derrotas para refletir o novo número de derrotas.
reiniciarJogo();                                            //função que permite reiniciar o jogo 
}
}
//função reiniciar o jogo
function reiniciarJogo() {
atual = [];             //esvazia o array atual 
adivinhar = false;      //redefine a variável adivinhar para false
correspondencias = 0;   //variável correspondencias com o valor 0
contagemJogadas = 0;    //variável contagemJogadas com o valor 0
pontuacao = 100;        //variável pontuacao com o valor 100
//reinicialização do tabuleiro e atualização dos contadores de jogadas e pontuação na interface do utilizador. 
document.getElementById('tabuleiro').innerHTML = ''; //Seleciona o elemento de HTML com id=tabuleiro e atribui-lhe uma string vazia
document.getElementById('jogadas').textContent = 'Jogadas: ' + contagemJogadas; //Seleciona o elemento de HTML com id=jogadas e atribui-lhe o valor da variável contagemJogadas (0)
document.getElementById('pontos').textContent = 'Pontuação: ' + pontuacao;  //Seleciona o elemento de HTML com id=pontos e atribui-lhe o valor da variável pontuacao (0)

configurarCartas(); //chama a função configurarCartas
}

configurarCartas();  //chama a função configurarCartas