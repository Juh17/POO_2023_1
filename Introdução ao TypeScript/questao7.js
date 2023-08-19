var Pessoa = /** @class */ (function () {
    function Pessoa(name, payment, lang) {
        this.name = name;
        this.payment = payment;
        this.lang = lang;
    }
    Pessoa.prototype.output = function () {
        console.log("\n        ".concat(this.name, "\n        My payment time is ").concat(this.payment, "\n        and\n        my preffered language is ").concat(this.lang, "\n        "));
    };
    return Pessoa;
}());
function main() {
    var ely = new Pessoa('Ely', 120.56, 'TypeScript');
    ely.output();
}
main();
