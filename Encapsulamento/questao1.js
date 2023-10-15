var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.prototype.multiplicar = function () {
        return this.operando1 * this.operando2;
    };
    Calculadora.prototype.dividir = function () {
        return this.operando1 / this.operando2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(6, 3);
console.log("");
console.log("------------ CALCULADORA----------");
console.log("");
console.log("Multiplica\u00E7\u00E3o: ".concat(calculadora.multiplicar()));
console.log("Divis\u00E3o: ".concat(calculadora.dividir()));
