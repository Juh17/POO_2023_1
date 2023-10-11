var _array = [2, 4, 6, 8, 10];
console.log(_array);
var array_2 = _array.map(function (num) { return num * 2; });
console.log(array_2);
var array_3 = array_2.reduce(function (elemento_anterior, elemento_atual) { return elemento_anterior + elemento_atual; }, 0);
console.log(array_3);
