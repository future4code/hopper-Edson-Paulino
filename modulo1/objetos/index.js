//                               Exercíios de interpretação

// 1 -

// A - 

// No primeiro console.log irá imprimir o primeiro índice do elenco que se chama "Matheus Nachtergaele".
//  O segundo console.log imprime o ultimo índece do elenco que se chama "Virginia Cavendish".
// E o terceiro console.log irá imprimir as transmissões do dia, que será na Globo, no horário de 14h. 

// 2 -

// A - 

// No primeiro console.log irá imprimir o objeto "cachorro" com informações de nome, idade e raça.
// No segundo console.log irá ser armazenado em uma const chamada "gato" a copia de cachorro e além disso o nome de juca passará a ser "Juba".
// No terceiro console.log irá ser armazenado na const "tartaruga" a copia da const gato e será alterado o nome de juba, sendo usado o replaceAll para trocar todos os "A" por "O".

// B - 

// A sintaxe de "..." permite fazer copias e altera o nome dos objetos nessa resolução.

// 3 - 

// A -

// Será impresso: "false" e "undefined" um para cada console.log.

// B -

// será impresso "false" pois existe uma propriedade chamada "backender" retornando false no objeto. assim a função é chamada trazendo o objeto e a propriedade que é "backender: false". e no segundo console.log irá retornar "undefined" por não ter a propriedade "Altura" no objeto


//                              Exercícios de escrita de código

// 1 - 

// const pessoa = {
//     nome: "Edson", 
//     apelido: ["Galego", "Nem", "Holandes"]  
// }

// function apelidosArray (recebeObjeto) {
//     let imprimeMensagem = `Eu sou ${recebeObjeto.nome}, mas pode me chamar de: ${recebeObjeto.apelido[0]}, ${recebeObjeto.apelido[1]} ou ${recebeObjeto.apelido[2]}` 

//     return imprimeMensagem
// }

// const novaPessoa = {
//     ...pessoa,
//     apelido: ["Alemão", "Sasuke", "Lolzeiro"]
// }

// console.log(apelidosArray(novaPessoa))

// 2 - 


// const pessoa1 = {
//     nome: "Edson",
//     idade: 22,
//     profissao: "Estudante"
// }

// const pessoa2 = {
//     nome: "Eduardo",
//     idade: 21,
//     profissao: "Estudante"
// }

// function array(recebeObjeto) {
//     let arrayPessoa = [recebeObjeto.nome, recebeObjeto.nome.length, recebeObjeto.idade, recebeObjeto.profissao, recebeObjeto.profissao.length]  

//     return arrayPessoa
  
// }

// console.log(array(pessoa1))
// console.log(array(pessoa2))


// 3 - 

// let carrinho = []

// let frutaUm = {
//     nome: "manga",
//     disponibilidade: true
// }

// let frutaDois = {
//     nome: "banana",
//     disponibilidade: true
// }

// let frutaTres = {
//     nome: "laranja",
//     disponibilidade: true
// }

// function recebeFrutas(objetoFruta) {
//      carrinho.push(objetoFruta)     
    
//     return [frutaUm, frutaDois, frutaTres]
// }
// recebeFrutas(frutaUm, frutaDois, frutaTres)
// console.log(recebeFrutas(carrinho))



