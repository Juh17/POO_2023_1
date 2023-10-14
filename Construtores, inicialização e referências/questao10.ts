class Jogador {
    f: number;
    n: number;
    p:number;

    constructor(f: number, n: number, p: number){
        this.f = f
        this.n = n
        this.p = p
    }

    calcularAtaque(){
        return this.f * this.n
    }
    atacar(jogador: Jogador){
        if (!jogador.estaVivo()){
            return
        }
        else {
            jogador.p = jogador.p - this.f
        }
        }
    estaVivo(){
        if (this.p > 0){
            return true
        }
        else{
            return false
        }
    }
    toString(){
        return `
        Força: ${this.f}
        Nível: ${this.n}
        Pontos atuais: ${this.p}`
    }
}

let p1: Jogador = new Jogador(20, 50, 200)
let p2: Jogador = new Jogador(25, 30, 180)
p1.atacar(p2)
p2.atacar(p1)

console.log(`Jogador 1: ${p1.toString()}\n`) 
console.log(`Jogador 2: ${p2.toString()}\n`) 