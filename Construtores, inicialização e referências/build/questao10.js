var Jogador = /** @class */ (function () {
    function Jogador(f, n, p) {
        this.f = f;
        this.n = n;
        this.p = p;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.f * this.n;
    };
    Jogador.prototype.atacar = function (jogador) {
        if (!jogador.estaVivo()) {
            return;
        }
        else {
            jogador.p = jogador.p - this.f;
        }
    };
    Jogador.prototype.estaVivo = function () {
        if (this.p > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Jogador.prototype.toString = function () {
        return "\n        For\u00E7a: ".concat(this.f, "\n        N\u00EDvel: ").concat(this.n, "\n        Pontos atuais: ").concat(this.p);
    };
    return Jogador;
}());
var p1 = new Jogador(20, 50, 200);
var p2 = new Jogador(25, 30, 180);
p1.atacar(p2);
p2.atacar(p1);
console.log("Jogador 1: ".concat(p1.toString(), "\n"));
console.log("Jogador 2: ".concat(p2.toString(), "\n"));
