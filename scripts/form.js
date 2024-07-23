function enviarDados(event) {
    // Prevenir o envio padrão do formulário
    event.preventDefault();

    // Capturar os dados do formulário
    const nome = document.getElementById('pokename').value;
    const tipo = document.getElementById('tipopokemon').value;
    const origemNome = document.getElementById('origemnome').value;

    // Criar um objeto com os dados
    const dados = {
        nome: nome,
        tipo: tipo,
        origemNome: origemNome
    };

    // Converter o objeto para uma string JSON
    const dadosJSON = JSON.stringify(dados, null, 2);

    // Criar um ficheiro com os dados
    const blob = new Blob([dadosJSON], { type: 'application/json' });

    // Criar um link para download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'pokemon.json';

    // Adicionar o link ao corpo do documento e clicar nele para iniciar o download
    document.body.appendChild(link);
    link.click();

    // Remover o link do documento
    document.body.removeChild(link);
}