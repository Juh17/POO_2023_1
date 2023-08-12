var circulo = /** @class */ (function () {
    function circulo(raio) {
        this.raio = 0;
        this.raio = raio;
    }
    circulo.prototype.area = function () {
        return Math.PI * Math.pow(this.raio, 2);
    };
    circulo.prototype.perimetro = function () {
        return (2 * Math.PI) * this.raio;
    };
    return circulo;
}());
function main() {
    var C1 = new circulo(4);
    var areaC = C1.area();
    var perimetroC = C1.perimetro();
    console.log(areaC.toFixed(2));
    console.log(perimetroC.toFixed(2));
}
main();
