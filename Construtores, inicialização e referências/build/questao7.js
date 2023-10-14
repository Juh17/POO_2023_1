var Triangulo = /** @class */ (function () {
    function Triangulo(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    Triangulo.prototype.verificarTrianguloValido = function () {
        if ((this.l2 - this.l3) < this.l1 && this.l1 < (this.l2 + this.l3)) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangulo.prototype.escaleno = function () {
        if (this.verificarTrianguloValido() == false) {
            return false;
        }
        else {
            return this.l1 != this.l2 && this.l1 != this.l3;
        }
    };
    Triangulo.prototype.isoceles = function () {
        if (this.verificarTrianguloValido() == false) {
            return false;
        }
        else {
            var caso1 = this.l1 == this.l2 && this.l1 != this.l3;
            var caso2 = this.l1 == this.l3 && this.l1 != this.l2;
            return caso1 || caso2;
        }
    };
    Triangulo.prototype.equilatero = function () {
        //fail fast
        if (this.verificarTrianguloValido() == false) {
            return false;
        }
        else {
            return this.l1 == this.l2 && this.l2 == this.l3;
        }
    };
    return Triangulo;
}());
var t = new Triangulo(2, 2, 5);
console.log("Triagulo Escaleno: ".concat(t.escaleno()));
console.log("Triagulo Isoceles: ".concat(t.isoceles()));
console.log("Triagulo Equilatero: ".concat(t.equilatero()));
