# Análise de Algoritmos - Selection Sort

Este projeto implementa uma análise de desempenho do algoritmo de ordenação **Selection Sort** usando JavaScript. O objetivo é medir o tempo de execução do algoritmo para diferentes tamanhos de arrays, executando-o múltiplas vezes e registrando os resultados em arquivos CSV. Além disso, o programa calcula o tempo total para cada conjunto de execuções.

## Funcionalidades

- Executa o **Selection Sort** para arrays de 1.000, 10.000 e 100.000 elementos.
- Mede o tempo de execução de cada ordenação e salva os resultados em arquivos CSV (`times_1000.csv`, `times_10000.csv`, `times_100000.csv`).
- Calcula o tempo total para cada conjunto de 1.000 execuções e salva esses tempos em um arquivo separado (`total_times.csv`).
- Utiliza uma barra de progresso para acompanhar o andamento das execuções.

## Pré-requisitos

- **Node.js** (versão 12 ou superior)
- **Biblioteca `cli-progress`** para a barra de progresso
    npm install cli-progress


## Instalação

1. Certifique-se de ter o **Node.js** instalado. Você pode verificar a instalação com:
   ```bash
   node -v
