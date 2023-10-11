const _array = [2, 4, 6, 8, 10]
console.log(_array)

let array_2 = _array.map((num: number) => num * 2)
console.log(array_2)

let array_3 = array_2.reduce((elemento_anterior, elemento_atual) =>  elemento_anterior + elemento_atual, 0)
console.log(array_3)