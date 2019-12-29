// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) { 
    a = a || 1 // Se tiver um valor ele salva na variável, se não ele seta o valor como 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // 0 é falso

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // 'a' é diferente de undefined? Se sim salva o valor, se não seta 1
    b = 1 in arguments ? b : 1 // Na posição 1 tem argumento? Se sim salva o valor, se não seta 1
    c = isNaN(c) ? 1 : c // É um NotANumber? Se sim seta 1, se não salva o valor
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
