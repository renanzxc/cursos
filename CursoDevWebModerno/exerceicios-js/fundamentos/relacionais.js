console.log('01)', '1' == 1)
console.log('02)', '1' === 1) //Comparação extritamente igual === //Mais recomendado
console.log('03)', '3' != 3) //Copara os valores
console.log('04)', '3' !== 3) //Compara os tipos

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date()
const d2 = new Date()
console.log('09)', d1 === d2) //Compara endereços de memória
console.log('10)', d1 == d2) //Compara endereços de memória
console.log('11)', d1.getTime() === d2.getTime()) // Compara tipo number
console.log('12)', undefined == null)
console.log('13)', undefined === null)