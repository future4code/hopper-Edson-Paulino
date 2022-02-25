//                                         EXERCÍCIOS DE INTERPRETAÇÃO

// 1 - 

/* O código pede que o usuário envie um número qualquer e em seguida ele faz a conversão do valor para "Number". para números pares o console imprime "Passou no teste" e para impares "Não passou no teste". */

// 2 - 

// A - O código serve para pedir ao usuário uma fruta e retornar o valor dela.
// B - O valor será R$ 2.25.
// C - O código não iria parar no preço da pera e iria mostrar o valor de "default".

// 3 - 


// A - Está sendo comparado o número atrelado a variável pelo usuário.
// B - O número sendo 10 irá ser impresso a mensagem "Esse número passou no teste" e se for -10 irá acontecer um erro.
// C - Acontecerá um erro pois a variável mensagem está dentro da condicional e não pode ser impressa fora dela.

//                                         EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1 -

// const idadeUsuario = Number(prompt('Qual é a sua idade?? 🤔'))
 
//     if (idadeUsuario >= 18) {
//         console.log('Você pode dirigir! 🥳')
//     } else {
//         console.log('Você não pode dirigir... 😕')
//     }

// 2 - 

// const verificarUsuario = prompt('Digite em qual turno estuda? M(matutino), V (Vespertino), N (Noturno). ✍️').toUpperCase();

//     if (verificarUsuario === "M") {
//         console.log('Boa dia! 😎');;
//     } else if (verificarUsuario === "V") {
//         console.log('Boa tarde! 😎');
//     } else if (verificarUsuario === "N"){
//         console.log('Boa noite! 😊');
//     } else {
//         console.log('Não entendi... 😕')
//     }

// 3 - 

// const verificarUsuario = prompt('Digite em qual turno estuda? M(matutino), V (Vespertino), N (Noturno). ✍️').toUpperCase();

// switch (verificarUsuario) {
//     case 'M':
//         console.log('Boa dia! 😎')
//         break;
//     case 'V': 
//         console.log('Boa tarde! 😎')
//         break;
//     case 'N':
//         console.log('Boa noite! 😊')
//         break;
//     default:
//         console.log('Não entendi... 😕')

// }

// 4 - 

// const filme = prompt('Qual gênero de filme irá assistir? 🤔').toLowerCase();
// const preco = Number(prompt('Qual é o preço do ingresso? 🤔'));

// function cinema (parametro1, parametro2) {

//     if (parametro1 === "FANTASIA" && parametro2 < 15) {
//         console.log('Bom filme! 😉');
//     } else {
//         console.log('Escolha outro filme 🙁');
//     }
// };

// cinema(filme, preco);

