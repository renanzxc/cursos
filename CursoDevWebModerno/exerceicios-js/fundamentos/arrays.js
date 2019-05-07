const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // Retorn undefined

valores[4] = 10 
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // Coloca os valores no fim do array
console.log(valores)

console.log(valores.pop()) // Remove e retorna o último valor do array
delete valores[0] // Deleta o valor de qualquer posição e deixa o espaço vazio
console.log(valores)

console.log(typeof valores)