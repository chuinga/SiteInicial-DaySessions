//Enviar código para o browser
//Opção 1
let div = document.getElementById('origem');
div.innerHTML = "<h2>A origem</h2>";
/*document.getElementById é um método que permite selecionar elementos 
com base no valor do atributo id. */
/*innerHTML é um método que permite obter ou definir o conteúdo HTML de um elemento.*/

//Opção 2
document.getElementById('texto').innerHTML = '<p>Pokémon tem cerca de 1015 espécies fictícias de monstros colecionáveis, cada um com designs e habilidades únicas. </p><p>Concebido por <em>Satoshi Tajiri</em> no início de 1989, os Pokémon são criaturas que habitam o mundo fictício Pokémon. </p><p>Os projetos para a multiplicidade de espécies podem inspirar-se em qualquer coisa como animais, plantas, criaturas mitológicas e até objetos inanimados. </p><p>Muitos Pokémon são capazes de evoluir para espécies mais poderosas, enquanto outros podem sofrer mudanças de forma e obter resultados semelhantes. Existem até alguns deles que não podem evoluir. Originalmente, apenas um punhado de artistas liderados por Ken Sugimori que projetou Pokémon. </p><p>No entanto, até 2013, uma equipa de 20 artistas trabalharam juntos para criar novos desenhos de espécies. Sugimori e Hironobu Yoshida lideram a equipa e determinam os projetos finais. </p>';







/*

function mostraResultado(){
    const idadePicachu = 15;
    const idadeBulbasaur = 10;
    const resultado = idadePicachu + idadeBulbasaur;
    document.getElementById('resultado').innerHTML = resultado;
}*/

/*

// Declaração de variáveis com 'let'
let idade = 25; // Tipo de dado: Number
let nome = "João"; // Tipo de dado: String
let estaChovendo = false; // Tipo de dado: Boolean
console.log('idade: ', idade);
*/
/*
// Declaração de constantes com 'const'
const PI = 3.14159; // Tipo de dado: Number (constante)
const saudacao = "Olá, mundo!"; // Tipo de dado: String (constante)

document.writeln('PI: ', PI);
document.write('saudação: ', saudacao);

// Tipos de dados adicionais

// Tipo de dado: Undefined
let indefinido;
document.write(indefinido); // Output: undefined

// Tipo de dado: Null
let nulo = null;
document.write(nulo); // Output: null

// Tipo de dado: Object
let pessoa = {
    nome: "Ana",
    idade: 30,
    cidade: "São Paulo"
};
document.write(pessoa); // Output: {nome: "Ana", idade: 30, cidade: "São Paulo"}

// Tipo de dado: Array (um tipo especial de objeto)
let numeros = [1, 2, 3, 4, 5];
document.write(numeros); // Output: [1, 2, 3, 4, 5]

// Tipo de dado: Function (também um tipo especial de objeto)
function cumprimentar() {
    return "Olá!";
}
document.write(cumprimentar()); // Output: "Olá!"

// Tipo de dado: Symbol (criado com ES6)
let simbolo = Symbol('descricao');
document.write(simbolo); // Output: Symbol(descricao)

// Tipo de dado: BigInt (para números inteiros muito grandes)
let numeroGrande = 1234567890123456789012345678901234567890n;
document.write(numeroGrande); // Output: 1234567890123456789012345678901234567890n

// Exemplo de reatribuição de 'let' e 'const'
let contador = 0;
contador += 1; // Reatribuição permitida
document.write(contador); // Output: 1

// PI = 3.14; // Erro: Assignment to constant variable.
*/