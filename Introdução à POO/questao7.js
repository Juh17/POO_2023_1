var retangulo = /** @class */ (function () {
    function retangulo() {
        this.lado1 = 0;
        this.lado2 = 0;
    }
    retangulo.prototype.areaRetangulo = function () {
        return this.lado1 * this.lado2;
    };
    retangulo.prototype.perimetroRetangulo = function () {
        return (this.lado1 * 2) + (this.lado2 * 2);
    };
    return retangulo;
}());
function main() {
    var R1 = new retangulo();
    R1.lado1 = 7;
    R1.lado2 = 9;
    var AreaR1 = R1.areaRetangulo();
    var PerimetroR1 = R1.perimetroRetangulo();
    console.log(AreaR1.toFixed(2));
    console.log(PerimetroR1.toFixed(2));
}
main();
