let num1 = 1
let num2 = 2

num1++  //posfixo
console.log(num1)

--num1 // tem maior prioridade que o posfixo // prefixo
console.log(num1)

console.log(++num1 === num2--) // evitar
console.log(num1 === num2)