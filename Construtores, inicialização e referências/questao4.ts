
class Radio {
    volume: number;
    constructor(volume: number) {
        this.volume = volume;
    }
}
let r: Radio = new Radio(5);
r.volume = 10;
console.log(r.volume)

/* O erro de compilação ocorre devido a não definição de um parâmetro ao declarar r como uma instância 
de Radio para que o construtor inicialize a variável "volume". Um solução viável seria o 
fornecimento de um parâmetro  => "let r: Radio - new Radio(5)". */
