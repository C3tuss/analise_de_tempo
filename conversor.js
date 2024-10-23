const fs = require('fs');

// Função para substituir pontos por vírgulas em um arquivo CSV
function corrigirArquivoCSV(arquivo) {
    // Ler o conteúdo do arquivo
    const conteudo = fs.readFileSync(arquivo, 'utf8');
    // Substituir pontos por vírgulas
    const novoConteudo = conteudo.replace(/\./g, ',');
    // Salvar o conteúdo corrigido de volta no mesmo arquivo
    fs.writeFileSync(arquivo, novoConteudo, 'utf8');
    console.log(`Arquivo ${arquivo} corrigido com sucesso!`);
}

// Lista de arquivos a serem corrigidos
const arquivos = ['times_1000.csv', 'times_10000.csv', 'times_100000.csv', 'total_times.csv'];

// Corrigir cada arquivo
arquivos.forEach(arquivo => {
    corrigirArquivoCSV(arquivo);
});
