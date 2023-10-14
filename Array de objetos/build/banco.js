"use strict";
exports.__esModule = true;
exports.Conta = exports.Banco = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Conta.prototype.obterSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
exports.Conta = Conta;
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        var contaConsultada = this.consultar(conta.numero);
        if (contaConsultada == null) {
            this.contas.push(conta);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaConsultada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        return contaConsultada;
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var contaCredito = this.consultar(numeroCredito);
        var contaDebito = this.consultar(numeroDebito);
        if (contaDebito && contaCredito) {
            contaDebito.transferir(contaCredito, valor);
        }
    };
    Banco.prototype.getTotalDepositado = function () {
        // solução 1
        var totalDepositado = this.contas.reduce(function (totalAcumulado, conta) {
            return totalAcumulado + conta.obterSaldo();
        }, 0);
        return totalDepositado;
        /* solução 2
        let totalDepositado: number = 0
        this.contas.forEach(conta => totalDepositado += conta.saldo);

        return totalDepositado;
        */
    };
    Banco.prototype.getTotalContas = function () {
        return this.contas.length;
    };
    Banco.prototype.getMediaDepositada = function () {
        return this.getTotalDepositado() / this.getTotalContas();
    };
    return Banco;
}());
exports.Banco = Banco;
var b = new Banco();
b.inserir(new Conta("11111-1", 100));
b.inserir(new Conta("22222-2", 150));
b.inserir(new Conta("33333-3", 300));
b.transferir("11111-1", "22222-2", 71);
console.log(b.consultar("11111-1"));
console.log(b.consultar("22222-2"));
console.log(b.consultar("33333-3"));
console.log(b.getTotalDepositado());
console.log(b.getMediaDepositada());
