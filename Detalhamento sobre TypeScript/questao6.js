function exibir() {
    var argumentos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argumentos[_i] = arguments[_i];
    }
    argumentos.forEach(function (str) { return console.log(str); });
}
exibir('a', 'b');
exibir('a', 'b', 'c');
exibir('a', 'b', 'c', 'd');
