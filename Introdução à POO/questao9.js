var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira(valorCredito, valorDebito) {
        this.valorCredito = 0;
        this.valorDebito = 0;
        this.valorCredito = valorCredito;
        this.valorDebito = valorDebito;
    }
    SituacaoFinanceira.prototype.saldo = function () {
        return this.valorCredito - this.valorDebito;
    };
    return SituacaoFinanceira;
}());
function main() {
    var situacaoJuliana = new SituacaoFinanceira(1000, 500);
    console.log(situacaoJuliana.saldo());
}
main();
