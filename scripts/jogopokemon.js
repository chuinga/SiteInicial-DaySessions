/*------------- JOGO DA MEMÓRIA COM POKÉMONS ---------------*/
//declaração da variável com a atribuição de um array com as imagens das cartas
const cartas = ['./img/jogo_memoria/sandslash.svg', './img/jogo_memoria/sandslash.svg',
    './img/jogo_memoria/pikachu.svg', './img/jogo_memoria/pikachu.svg',
    './img/jogo_memoria/meowth.svg', './img/jogo_memoria/meowth.svg',
    './img/jogo_memoria/bulbasaur.svg', './img/jogo_memoria/bulbasaur.svg',
    './img/jogo_memoria/charmander.svg', './img/jogo_memoria/charmander.svg',
    './img/jogo_memoria/lapras.svg', './img/jogo_memoria/lapras.svg'];

let atual = [];             //declaração da variável atual com um array vazio
let adivinhar = false;    //declaração da variável adivinhar com o valor false
let correspondencias = 0;   //declaração da variável correspondencias com o valor 0
let contagemJogadas = 0; //declaração da variável contagemJogadas com o valor 0
let pontuacao = 100;        //declaração da variável pontuacao com o valor 100
let vitorias = 0;           //declaração da variável vitorias com o valor 0
let derrotas = 0;           //declaração da variável derrotas com o valor 0

// Função para baralhar o array usando o algoritmo de Fisher-Yates
function baralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {        //o ciclo for inicia com i (que é igual ao último elemento do array)
        const j = Math.floor(Math.random() * (i + 1)); //o método Math.random gera um número aleatório entre 0 e 1 e o o método Math.floor arredonda o número para baixo
        [array[i], array[j]] = [array[j], array[i]];  // o valor do array é armazenado e modificado
    }
}

// Função para configurar o tabuleiro com cartas baralhadas
function configurarCartas() {
    const tabuleiro = document.getElementById('tabuleiro');
    baralharArray(cartas);
    tabuleiro.innerHTML = '';  // Limpa o tabuleiro antes de adicionar cartas

    cartas.forEach((item, index) => {
        const carta = document.createElement('div');
        carta.dataset.item = item;
        carta.dataset.index = index;
        carta.innerHTML = `
            <img class='card-img' src='${item}' alt='imagem' draggable='false'>
            <div class='cover'></div>
        `;
        carta.onclick = aoClicarCarta;
        carta.ondragstart = (e) => e.preventDefault();  // Desativa o arrastar para não permitir ver a carta sem a virar
        tabuleiro.appendChild(carta);
    });
}

// Função para lidar com o clique nas cartas
function aoClicarCarta(e) {
    if (adivinhar) return;
    const alvo = e.currentTarget;

    if (atual.length < 2 && !alvo.classList.contains('virada')) {
        alvo.classList.add('virada');
        atual.push(alvo);
    }

    if (atual.length === 2) {
        contagemJogadas++;
        atualizarContadores();

        if (atual[0].dataset.item === atual[1].dataset.item) {
            correspondencias++;
            atual = [];
            adivinhar = false;
            verificarVitoria();
        } else {
            adivinhar = true;
            setTimeout(() => {
                atual.forEach(carta => carta.classList.remove('virada'));
                atual = [];
                adivinhar = false;
            }, 1000);
        }

        pontuacao--;
        atualizarContadores();

        if (pontuacao <= 0) {
            derrotas++;
            alert('Infelizmente não conseguiste! Tenta novamente!');
            atualizarContadores();
            reiniciarJogo();
        }
    }
}

// Função para atualizar os contadores na interface do utilizador
function atualizarContadores() {
    document.getElementById('jogadas').textContent = `Jogadas: ${contagemJogadas}`;
    document.getElementById('pontos').textContent = `Pontuação: ${pontuacao}`;
    document.getElementById('vitorias').textContent = `Vitórias: ${vitorias}`;
    document.getElementById('derrotas').textContent = `Derrotas: ${derrotas}`;
}

// Função para verificar se o jogador venceu
function verificarVitoria() {
    if (correspondencias === cartas.length / 2) {
        vitorias++;
        alert('Boa! Ganhaste!');
        atualizarContadores();
        reiniciarJogo();
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    atual = [];
    adivinhar = false;
    correspondencias = 0;
    contagemJogadas = 0;
    pontuacao = 100;
    configurarCartas();
    atualizarContadores();
}

// Inicializa o jogo configurando as cartas
configurarCartas();
atualizarContadores();