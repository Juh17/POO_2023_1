var Equipamento = /** @class */ (function () {
    function Equipamento() {
    }
    Equipamento.prototype.liga = function () {
        if (this.ligado == false) {
            this.ligado = true;
        }
        if (this.ligado == true) {
            return "Ligado";
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado == true) {
            this.ligado = false;
        }
        return "Desligado";
    };
    Equipamento.prototype.inverte = function () {
        if (this.ligado == true) {
            this.desliga();
        }
        this.liga();
    };
    Equipamento.prototype.ligado1 = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var e1 = new Equipamento();
e1.ligado = false;
console.log(e1.ligado);
e1.liga();
console.log(e1.ligado);
e1.inverte();
console.log(e1.ligado);
e1.ligado = false;
e1.desliga();
console.log(e1.ligado1());
