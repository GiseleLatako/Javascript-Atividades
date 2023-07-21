//do while e uma estrutura de repeticao que conforme a sua condicao for verdadeira continua executando 
//importa o pacote promptsync
import promptSync from "prompt-sync";
import { exercicioUm, exercicioDois, exercicioTres } from "../aula2-estrutura repetição.js/exercicios.js";

//chamar a funcao prompt que permite que o usuario digite
const prompt = promptSync();
let exercicio;// aqui foi somente declarado a variavel
do {
    exercicio = parseInt(prompt("Digite um numero de 1 a 6 : "))
    switch (exercicio) {
        case 1:
            exercicioUm()
            break

        case 2:
            exercicioDois()
            break

        case 3:
            exercicioTres()
            break

            default:
            break;
    }
} while (exercicio != 0);



