var Hora = /** @class */ (function () {
    function Hora(hora, minutos, segundos) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    Hora.prototype.Hora = function () {
        return this.hora;
    };
    Hora.prototype.Minutos = function () {
        return this.minutos;
    };
    Hora.prototype.Segundos = function () {
        return this.segundos;
    };
    Hora.prototype.Horario = function () {
        return "".concat(this.hora, ":").concat(this.minutos, ":").concat(this.segundos);
    };
    return Hora;
}());
var hora = new Hora(17, 10, 23);
console.log(hora.Hora());
console.log(hora.Minutos());
console.log(hora.Segundos());
console.log(hora.Horario());
