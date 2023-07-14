let prompt = require("prompt-sync")()


// // exercicio 5
// 5. Faça um programa receba dois valores e imprima qual é o maior
// número digitado.

// let value1 = prompt("Digite o primeiro valor: ")
// let value2 = prompt("Digite o segundo valor: ")

// if (value1 > value2) {
//     console.log("o primeiro valor é maior")

// }
// else if (value2 > value1) {
//     console.log("o segundo valor é maior")

// }
// else {console.log("os dois valores são iguais")}



// // exercicio 1
// 1. Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.

// let nome = prompt('Digite o seu nome: ')
// let cargo = prompt('Digite o seu cargo: ')
// let salario = parseFloat(prompt('Digite o seu salario: '))

// if (salario < 1000) {
//     let novosalario = salario + (salario * 0.1)
//     console.log(' Nome: ' + nome + ' Cargo: ' + cargo + ' Salario: ' + novosalario)
// }
// else {
//     console.log('Sucesso!!')

// }


// // exercicio 2
// 2. Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// // uma mensagem caso o funcionário não tenha direito a aumento.

// let salario = parseFloat(prompt('Digite o seu salario: '))

// if (salario < 500) {
//     salarioReajuste = (salario * 0.3) + salario; 
//     console.log("Seu salario foi reajustado em 30%, ficando R$ " + salarioReajuste)

// }
// else{
//     console.log('Vocë náo tem direito a reajuste! :(')
// }


// // exercicio 3
// // 3. Faça um programa que receba um número inteiro do usuário e informe
// // se este número é positivo ou negativo.

// let numero = parseInt(prompt ("Digite um numero: "))

// if (numero > 0) {
//     console.log(" O numero digitado e positivo ")

// }
// else{
//     console.log(" O numero digitado e negativo ")
// }

// exercicio 6
// 6. Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

// let nota1 = parseFloat(prompt ("Digite a primeira nota:" ))
// let nota2 = parseFloat(prompt ("Digite a primeira nota:" ))
// let nota3 = parseFloat(prompt ("Digite a primeira nota:" ))
// let nota4 = parseFloat(prompt ("Digite a primeira nota:" ))

// let mediaNota = (nota1 + nota2 + nota3 + nota4) / 4
// if (mediaNota >= 7.0 ) {
//     console.log("Parabens, Aprovado!")
// }
// else if (mediaNota >=5.0 && mediaNota <=7.0) {
//     console.log("mediaNota:'" + mediaNota +  "Voce esta em recuperacao!")

// }
// else{
//     console.log("mediaNota" + mediaNota + " Voce esta Reprovado! ")
// }


// EXercícios 13/07

// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123" . Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

// let nomeDoUsuario = prompt( "Digite o nome do usuario: " )
// let senha = prompt ( "Digite a senha: ")

// if (nomeDoUsuario == "admin" && senha == "senha123") {
//     console.log (" login bem sucedido ")

// }
// else{
//     console.log( " login ou senha incorretos!! " )
// }


// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

// let numero = parseInt(prompt("Digite um número de 1 a 7: "))

// switch (numero) {
//     case 1:
//         console.log("segunda-feira");
//         break;

//     case 2:
//         console.log("terça-feira")
//         break;

//     case 3:
//         console.log("quarta-feira")
//         break;

//     case 4:
//         console.log("quinta-feira")
//         break;

//     case 5:
//         console.log("sexta-feira")
//         break;

//     case 6:
//         console.log("sábado")
//         break;

//     case 7:
//         console.log("domingo")
//         break;


//     default: 
//         console.log("Coloque um número válido")
//         break;
// }

// // Exercício 3: Verificação de números em ordem crescente
// // Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// // crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// // não.

// let numero1  = parseInt(prompt( "Digite o primeiro número: "))
// let numero2  = parseInt(prompt( "Digite o segundo número: "))
// let numero3  = parseInt(prompt( "Digite o terceiro número: "))

// if (numero1 < numero2 && numero3 > numero2) {
//     console.log(" Ok! Os números estão em ordem crescente! ");
// }
// else{
//     console.log ( "Os números não estão em ordem crescente ")
// }

// // Exercício 4: Verificação de idade
// // Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// // de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

// let anodenascimento = prompt( "Digite o ano do seu nascimento: " )
// let idade = 2023 - anodenascimento
// if ( idade >= 18) {
//     console.log("Ok! Maior de idade! ");

// }
// else{
//     console.log(" Menor idade ");
// }





    
