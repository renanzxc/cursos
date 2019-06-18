// Funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Se passar somente um parâmetro o outro será undefined // Imprime Not a Number
imprimirSoma(2, 3, 4, 5, 6, 7) //Ignora os outros parâmetros
imprimirSoma() // Imprime Not a Number

//Funcao com retorno
function soma(a, b = 1){ // Valor padrão
    return a + b 
}

console.log(soma(1, 2))
console.log(soma(1))
