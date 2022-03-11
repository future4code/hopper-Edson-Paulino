//                            Interpretação de Código

// 1 - 

// A - Será impresso os itens em suas posições do índece, contendo a array inteira em cada índece.

// 2 - 

// A - Será impresso apenas o nome de cada item dos objetos das Arrays.

// 3 - 

// A - Será impresso apenas os itens que sejam diferente do apelido "CHIJO".

//                           Escrita de Código




let pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  A - 

// const selecionarNomes = (item) => {
//     return item.nome;
// }

// const nomesPets = pets.map(selecionarNomes);
// console.log(nomesPets);

// B - 

// const selecionarDog = (item) => {
//     return item.raca === "Salsicha"; 
// }

// const nomesPets = pets.filter(selecionarDog);
// console.log(nomesPets);

// C - 

// const cliente = (item) => {
//     return item.raca === 'Poodle';  
// }

// const filterRaca = pets.filter(cliente) 

// const pegarCliente = (item) => {
//     return item.nome;
// }

// const nomeCliente = filterRaca.map(pegarCliente)
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeCliente}!`)

// 2 -

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// A - 

//  const nomeProdutosItem = (item, index, array) => {
//      return item.nome
//  }

//  const pegarNomes = produtos.map(nomeProdutosItem);
//  console.log(pegarNomes) 

// B - 

// const promocao = produtos.map((produto) => {
//     const novaArrayObjeto = {
//       nome: produto.nome,
//       preco: (produto.preco * 0.95).toFixed(2),
//     };
//     return novaArrayObjeto;
//   });

// console.log (promocao)

// C - 

// const produtosLimpeza = produtos.filter((produto) => {
//     return produto.categoria === "Limpeza"
// })

// console.log(produtosLimpeza)

// D - 

// const ypeNome = produtos.filter((produto) => produto.nome.includes("Ypê"));
// console.log(ypeNome);

// E - 

// const ype = produtos.map((produto) => {
//     return `Compre ${produto.nome} por ${produto.preco}`
// })
// console.log(ype)


















