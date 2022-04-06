
```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let qtdNum = arrayDeNumeros.filter((num) => {
    return num === numeroEscolhido;
 });
  
  let qtdTotal = qtdNum.length
  
  if (qtdTotal !== 0) {
    return `O número ${numeroEscolhido} aparece ${qtdTotal}x`
  } else if (qtdTotal === 0) {
      return "Número não encontrado"
  };
}
```