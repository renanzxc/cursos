const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + "!"
const template = `
    Olá
    ${nome}` // Pega tudo que colocar entre `` inclusive espaços e quebra de linhas

console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Função arrow
console.log(`Ei... ${up('cuidado')}`)