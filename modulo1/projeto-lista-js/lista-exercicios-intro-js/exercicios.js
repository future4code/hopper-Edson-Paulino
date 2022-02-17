// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Qual é a altura do retângulo?"))
  let largura = Number(prompt("Qual é a largura do retângulo?"))

  const areaRetangulo = altura * largura 
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Ano atual?"))
  let anoNascimento = Number(prompt("Ano de nascimento?"))

  const idade = anoAtual - anoNascimento
  console.log(idade) 

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
return peso / (altura * altura) 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Nome: ")
  let idade = prompt("Idade: ")
  let email = prompt("email: ")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Cor favorita: ")
  let cor2 = prompt("Cor favorita: ")
  let cor3 = prompt("Cor favorita: ")

  const corFavorita = [cor1, cor2, cor3]
  console.log(corFavorita)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

 const stringMaiuscula = string.toUpperCase()
 return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const vendaTotal = custo / valorIngresso
  return vendaTotal
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let stringMaior = string1.length === string2.length

return stringMaior
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  console.log(array)
  return array [0]
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  let ArrayUltima = array.pop()
  return ArrayUltima
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const primeiraPosicao = array[0]
  const ultimaPosicao = array[array.length -1]
  const removerPrimeira = array.shift()
  const removeUltima = array.pop()
  const addUltima = array.push(primeiraPosicao)
  const addPrimeira = array.unshift(ultimaPosicao)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let checagem = string1.toUpperCase == string2.toUpperCase

  return checagem 

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}