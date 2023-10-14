var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo < 0) {
            return false;
        }
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (this.saldo > 0) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
        return false;
    };
    return Conta;
}());
var c1 = new Conta('1', 100);
var c2 = new Conta('2', 100);
c1.sacar(10);
c2.depositar(20);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
c1.saldo = -10;
console.log(c1.transferir(c2, 5));
