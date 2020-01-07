// pessoa -> 123 // Aponta para o endereço de memória
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 // Constante tenta apontar para outro endereço
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)


