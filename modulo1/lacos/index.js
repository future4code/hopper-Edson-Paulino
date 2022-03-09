//                                      INTERPRETAÇÃO DE CÓDIGO

// 1 - O código irá repetir e somar enquanto o valor for menor que 5, o resultado é 10. 

// 2 - 

// A - Irá ser impresso no console todos os números maiores que 18, que são: 19, 21, 23, 25, 27, 30.

// B - Não dá, para isso recomenda-se usar o "FOR"

// 3 - Quatro linhas com 1, 2, 3 e 4 asteriscos.

//                                      ESCRITA DE CÓDIGO


// 1 -

// let quantidadePets = Number(prompt("Quantos pets você tem?"))
// let arrayNomePets = []

// if (quantidadePets === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }
// else if (quantidadePets > 0){
//     for (let i = 0; i < quantidadePets; i++) {
//         let nomePets = prompt("Qual o nome deles?")
//         arrayNomePets.push(nomePets);
//     }
// }

// console.log(arrayNomePets)

// 2 - 

// const arrayOriginal = [12, 47, 18, 25, 30, 69, 80]

// A - 

// for (let num of arrayOriginal) {
//     console.log(num)
// }

// B - 

// for (let num of arrayOriginal) {
//     console.log(num/10)
// }

// C - 

// let arrayNovo = []
// for (let num of arrayOriginal) {
//     if ((num % 2) === 0) {
//         arrayNovo.push(num)
//     }    
// }

// console.log(arrayNovo)

// D - 

// let arryString = [];
// for (let num of arrayOriginal) {
//     arryString.push(`O elemento na índex ${arrayOriginal.indexOf(num)} é ${num}`)        
// }
// console.log(arryString)

// E - 

// let maiorNumero = 0
// for (let num of arrayOriginal) {
//     if (num > maiorNumero) {
//         maiorNumero = num
//     }
// }

// let menorNumero = maiorNumero
// for(var i = 0; i < arrayOriginal.length-1; i++){
//     if(menorNumero>arrayOriginal[i]){
//         menorNumero = arrayOriginal[i]
//     }
// }

// console.log(`O maior número é ${maiorNumero}, e o menor número é ${menorNumero}`)


//exemplo de estudo

// const maiorEMenorNumero = (arrayDeNumeros) => {
//     let maiorNumero = 0
//     let menorNumero = 0
//     for (let i = 0; i < arrayDeNumeros.length; i++) {
//         let valorMaximo = arrayDeNumeros[i]
        
//         if (i === 0) {
//             console.log(valorMaximo)
//             maiorNumero = menorNumero = valorMaximo
//         }
//         if (valorMaximo > maiorNumero) {
//             maiorNumero = valorMaximo
//         }
//         if (valorMaximo < menorNumero) {
//             menorNumero = valorMaximo
//         }
//     }
//     console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
//   }
  
//   const array = [20, 30, 40, 10, 5, 26, 70, 1]
//   maiorEMenorNumero(array)
  