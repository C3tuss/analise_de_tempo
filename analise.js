const fs = require('fs');
const { performance } = require('perf_hooks'); // Para usar performance no Node.js
const cliProgress = require('cli-progress');

// Função de Selection Sort
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Troca
        }
    }
    return arr;
}

// Função para gerar um array ordenado de trás para frente
function generateReverseArray(size) {
    return Array.from({ length: size }, (_, i) => size - i);
}

// Função para medir o tempo de execução com barra de progresso
function measureExecutionTime(size, runs) {
    const times = [];
    
    // Criar e configurar a barra de progresso
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    progressBar.start(runs, 0);

    for (let i = 0; i < runs; i++) {
        const arr = generateReverseArray(size);
        const startTime = performance.now();
        selectionSort(arr); // Use o Selection Sort
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        times.push(executionTime);
        
        // Atualizar a barra de progresso
        progressBar.update(i + 1);
    }
    
    // Finalizar a barra de progresso
    progressBar.stop();
    return times;
}

// Função para salvar os resultados em um arquivo CSV
function saveToCSV(times, filename) {
    const csvContent = times.join('\n');
    fs.writeFileSync(filename, csvContent, 'utf8');
    console.log(`Resultados salvos em ${filename}`);
}

// Função para medir e registrar o tempo total de execução para cada tamanho de array
function executeAndMeasureTotalTime(size, runs, filename) {
    const totalStartTime = performance.now();
    const times = measureExecutionTime(size, runs);
    const totalEndTime = performance.now();
    
    const totalExecutionTime = (totalEndTime - totalStartTime) / 1000; // em segundos
    console.log(`Tempo total para ${runs} execuções com ${size} elementos: ${totalExecutionTime.toFixed(2)} segundos`);
    
    // Salvar tempos individuais em CSV
    saveToCSV(times, filename);
    
    // Retornar tempo total
    return totalExecutionTime;
}

// Função para salvar os tempos totais em um arquivo
function saveTotalTimesToCSV(totalTimes, filename) {
    const csvContent = totalTimes.map(entry => `${entry.size},${entry.time}`).join('\n');
    fs.writeFileSync(filename, csvContent, 'utf8');
    console.log(`Tempos totais salvos em ${filename}`);
}

// Executar para 1.000, 10.000 e 100.000 elementos, 1.000 vezes cada
const totalTimes = [];

totalTimes.push({ size: 1000, time: executeAndMeasureTotalTime(1000, 1000, 'times_1000.csv') });
totalTimes.push({ size: 10000, time: executeAndMeasureTotalTime(10000, 1000, 'times_10000.csv') });
totalTimes.push({ size: 100000, time: executeAndMeasureTotalTime(100000, 1000, 'times_100000.csv') });

// Salvar tempos totais em um arquivo CSV separado
saveTotalTimesToCSV(totalTimes, 'total_times.csv');
