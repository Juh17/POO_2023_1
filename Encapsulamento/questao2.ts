class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    public Hora() : number {
        return this.hora;
    }
    
    public Minutos() : number {
        return this.minutos;
    }
    
    public Segundos() : number {
        return this.segundos;
    }

    public Horario() : string {
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}



let hora: Hora = new Hora(17, 10, 23);
console.log(hora.Hora());
console.log(hora.Minutos());
console.log(hora.Segundos());
console.log(hora.Horario());