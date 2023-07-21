import PromptSync from "prompt-sync";

// const prompt = PromptSync();

//menu para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt("digite um numero que represente um exercício de 1 a 4 "))

    switch (exercicio) {
        case 1:
            //chamando funcao helloWorld()
            // helloWorld("Hello World!!";
            console.log("Digite um numero de 1 a 4: ");
            break;
        case 2:
            let aluno = {
                nome: "Rebeca",
                idade: 19,
                hardskills: ["figma", "html", "css", "web responsive"]
            }

            // acessando objeto pela propriedade
            console.log(aluno.nome, aluno.idade, aluno.hardskills);

            //exibindo objeto inteiro
            console.log("objeto aluno", aluno);
            break;
        default:
            break; //serve para sair, finalizar
    }

    continuar = prompt("Deseja continuar e ver outros exercicios? Digite s para sim e digite n para nao: ").toLocaleLowerCase; //toLocaleLowerCase transforma o texto em minusculo

} while (continuar === "s");

function helloWorld(frase) {
    console.log(frase);

}

import promptSync from "prompt-sync";

const prompt = promptSync();

export function verificarMaiorIdade() {
    console.log("Exercício 5 - Faça um programa que receba nome e idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18");

    let pessoa = {
        nome: "",
        idade: 0
    }


    console.log("Sua idade deve ser maior que 18.");

    do {
        pessoa.idade = parseInt(prompt("Digite sua idade: "));
        pessoa.nome = prompt("Digite seu nome: ");

    } while (pessoa.idade < 18);
    console.log("Idade válida!");
    console.log("Objeto:", pessoa);
    console.log(`${pessoa.nome}, sua idade ${pessoa.idade}, é válida!`);

}