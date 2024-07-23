function jogoAdivinhar() {
    //o Método Math.floor() devolve o menor número inteiro 
    //o Método Math.random() retorna um número aleatório no intervalo [0, 1[
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let adivinha = prompt('Adivinhe um número de 1 a 10.');

    if (parseInt(adivinha) === numeroAleatorio) {
        alert('Muito bem! É mesmo esse o número.');
    } else {
        alert('Não foi desta! O número era o ' + numeroAleatorio + '.');
    }
}
