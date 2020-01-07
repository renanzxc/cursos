const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o char na posição 4, string começando da posição 0
console.log(escola.charAt(5)) // Não retorna nada
console.log(escola.charCodeAt(3)) // Retorna valor na tabela Unicode
console.log(escola.indexOf('3')) // Retorna o índice

console.log(escola.substring(1)) // Retorna a string apartir do índice passado como parâmetro
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!")) // Concatenação
console.log('Escola ' + escola + "!") // Concatenação
console.log(escola.replace(3, "e")) // Substituir o sengundo parâmetro na posição do índice
console.log(escola.replace(/\d/, "e")) // Substituir o segundo parâmetro por um dígito, hegex

console.log('Ana,Maria,Pedro'.split(',')) // Seraparar a string por ',' e criando um array