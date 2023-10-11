function main() {
    var _array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var filtro = _array.filter(num_par);
    console.log(filtro);
}
function num_par(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
