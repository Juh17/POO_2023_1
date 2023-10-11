function _array(num: Array<number>) : string {
    let exibir: string = "";
    
    num.forEach((item, index) => index != num.length -1 ? exibir += `${item}-` :exibir += `${item}`);

    return exibir;
}

let numeros : Array<number> = new Array(2,4,6,8,10,12,14,16,18,20);

let exibir: string = _array(numeros);
console.log(exibir);