
                    // Exercícios de interpretação


/* 1 - Foi atribuído o valor 10 para as variáveis 'a' e 'b', mas foi apenas imprimida a 'b'. mais abaixo o valor atribuído ao 'b' passou a ser 5 e após isso foi imprimido o valor de 'a' e 'b' que agora será 10 para 'a' e 5 para 'b' */

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

/* 2 - Foi atribuído o valor 10 para a variável 'a' e 20 para a 'b' após isso o valor de 'c' virou 'a', 'b' virou 'c' e o valor de 'a' virou o de 'b'. ou seja, todos os valores das variáveis passaram a ser de 10 */

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

/* 3 - Aqui aparecerá 2 pop-ups com caixa de texto e um alerta, o primeiro pop-up irá perguntar quantas horas eu trabalho por dia, o segundo irá perguntar quanto recebo por dia e no final, o alerta irá me informar quanto recebo por hora */

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)


                    // Exercícios de escrita de código

// 1 -

let nome
let idade

console.log(typeof nome, typeof idade)

// As variáveis ficaram como "Undefined" por não ter valor atribuído a elas 

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome, typeof idade)

// Agora as variáveis são definidas como "string", mesmo escrevendo a idade como um número

console.log("Olá", nome, "você tem", idade ,"anos")

// 2 - 

let roupaAzul = prompt("Você está usando uma roupa azul hoje?")
let gostaLer = prompt("Gosta de ler?")
let gostaJogar = prompt("Gosta de jogar Video-Game?")

roupaAzul = "Sim"
gostaLer = "Sim"
gostaJogar = "Sim"

console.log("Você está usando uma roupa azul hoje?" , roupaAzul)
console.log("Gosta de ler?" , gostaLer)
console.log("Gosta de jogar Video-Game?" , gostaJogar)

// 3 - 

let a = 10
let b = 25

// Lógica

let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

