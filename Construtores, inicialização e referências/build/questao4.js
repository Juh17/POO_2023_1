var Radio = /** @class */ (function () {
    function Radio(volume) {
        this.volume = volume;
    }
    return Radio;
}());
var r = new Radio(5);
r.volume = 10;
console.log(r.volume);
/* O erro de compilação ocorre devido a não definição de um parâmetro ao declarar r como uma instância
de Radio para que o construtor inicialize a variável "volume". Um solução viável seria o
fornecimento de um parâmetro  => "let r: Radio - new Radio(5)". */
