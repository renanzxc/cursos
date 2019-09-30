class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(sobrenome){
        super(sobrenome)
    }
}

const filho = new Filho('Silva')
const pai = new Pai()
console.log(filho)
console.log(pai)

