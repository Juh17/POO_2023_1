var Hotel = /** @class */ (function () {
    function Hotel(reservaInicial) {
        this.quantReservas = reservaInicial;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
var hotel = new Hotel(2);
console.log(hotel.quantReservas);
