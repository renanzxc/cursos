Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }    
}

// Implementando legth // Não tem na aula
Array.prototype.length2 = function(){
    let i = 0
    let cont = 0
    while(this[i]!=undefined){
        cont++
        i++
    }
    return cont
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
})

console.log(aprovados.length2())
