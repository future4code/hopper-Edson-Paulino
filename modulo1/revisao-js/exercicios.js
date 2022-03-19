// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const sortear = array.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0
    });
    return sortear;
};
    
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const filterPar = array.filter((arr) => {
        if (arr % 2 === 0) {
            return array; 
        }
    });
    return filterPar;
};

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const mapParesElevado = array.map((num) => {
        return num * num;
    });

    const filterParesElevados = mapParesElevado.filter((pares) => {
        if (pares % 2 === 0) {
            return array
        }
    });
    return filterParesElevados;
};


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array);
};

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const obj = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.max(num1, num2) - Math.min(num1, num2)
    };
    return obj;
};

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
        for (let i = 0; numerosPares.length < n; i += 2) {
            numerosPares.push(i);
        }
        return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
        if (ladoA === ladoB && ladoB === ladoC) {
            return 'Equilátero';
        } else if (ladoA === ladoB || ladoA === ladoC || ladoC === ladoB) {
            return 'Isósceles';
        } else {
            return 'Escaleno';
        };
    };
};

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maiorMenor = array.sort((a, b) => a - b)
    return [maiorMenor[array.length-2], maiorMenor[1]]
};
    
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`;
};

    

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const newPerson = {
        ...pessoa,
        nome: 'ANÔNIMO'
    };
    return newPerson;
};


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizedFilter = pessoas.filter((person) => {
        if (person.altura >= 1.5 && person.idade > 14 && person.idade < 60) {
            return pessoas;
        };
    });
    return autorizedFilter;
};


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const notAutorizedFilter = pessoas.filter((person) => {
        if (person.altura <= 1.4 || person.idade <= 14 || person.idade > 60) {
            return pessoas;
        }
    });
    return notAutorizedFilter;
};

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
};

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
};