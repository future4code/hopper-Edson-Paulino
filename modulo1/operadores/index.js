//                  Exercícios de interpretação

/* 1 - 
A - Foi usado o comparador "E" em duas atribuições, porém este comparador retornou "false" porque ele apenas retornará true se todos booleanos forem true */

// 2 - O problema estava em não converter os dados a serem inseridos no prompt de string para number, será impresso no console a soma de dois numeros.

//                  Exercícios de Escrita de Código

// 1 - 

let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade de seu melhor amigo(a)?"))

let resultado = idade > idadeAmigo 
console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)

let dif = idade - idadeAmigo
console.log("Diferença de idade entre eu e meu melhor amigo:", dif) 

// 2 - 

let numPar = Number(prompt("Insira um número par:"))

let resto= numPar % 2

console.log(resto)  // O padrão da divisão com números pares é que sempre resulta em números inteiros, mas com números impares resulta em números quebrados.

// 3 - 

let idadeAnos = Number(prompt("Qual a sua idade em anos?")) 

let idadeMeses = idadeAnos * 12
console.log("Sua idade em meses:", idadeMeses)

let idadeDias = idadeAnos * 365
console.log("Sua idade em dias:", idadeDias)

let idadeHoras = idadeAnos * 1440
console.log("Sua idade em horas:", idadeHoras) 

// 4 - 

let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite outro número:"))

console.log(num1 > num2)
console.log(num1 === num2)
console.log(num1 > num2)
console.log(num1 % num2)
console.log(num2 % num1)











