class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor (operando1: number, operando2: number) {
        this.operando1 = operando1
        this.operando2 = operando2
    }

    public multiplicar(): number{
        return this.operando1 * this.operando2
    }

    public dividir(): number{
        return this.operando1 / this.operando2
    }
}

let calculadora = new Calculadora(6, 3);
console.log(``)
console.log(`------------ CALCULADORA ----------`)
console.log(``)
console.log(`Multiplicação: ${calculadora.multiplicar()}`)
console.log(`Divisão: ${calculadora.dividir()}`)