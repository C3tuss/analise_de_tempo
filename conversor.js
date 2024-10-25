const fs = require('fs');

// Função para corrigir e converter os tempos em um arquivo CSV
function corrigirEConverterArquivoCSV(arquivo) {
    // Ler o conteúdo do arquivo
    const conteudo = fs.readFileSync(arquivo, 'utf8');
    // Dividir em linhas
    const linhas = conteudo.split('\n');
    // Processar cada linha para converter milissegundos em segundos, arredondar e substituir pontos por vírgulas
    const novoConteudo = linhas.map(linha => {
        if (linha.trim() === '') return ''; // Ignorar linhas vazias
        const valorMs = parseFloat(linha.replace(',', '.')); // Converter para número (assumindo milissegundos)
        const valorSegundos = (valorMs / 1000).toFixed(5); // Converter para segundos e arredondar
        return valorSegundos.replace('.', ','); // Substituir ponto por vírgula
    }).join('\n');
    // Salvar o conteúdo corrigido de volta no mesmo arquivo
    fs.writeFileSync(arquivo, novoConteudo, 'utf8');
    console.log(`Arquivo ${arquivo} corrigido e convertido para segundos!`);
}

// Lista de arquivos a serem corrigidos
const arquivos = ['times_1000.csv', 'times_10000.csv', 'times_100000.csv', 'total_times.csv'];

// Corrigir e converter cada arquivo
arquivos.forEach(arquivo => {
    corrigirEConverterArquivoCSV(arquivo);
});
