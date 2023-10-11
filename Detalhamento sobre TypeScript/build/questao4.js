function _array(num) {
    var exibir = "";
    num.forEach(function (item, index) { return index != num.length - 1 ? exibir += "".concat(item, "-") : exibir += "".concat(item); });
    return exibir;
}
var numeros = new Array(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);
var exibir = _array(numeros);
console.log(exibir);
