class Hotel{
    quantReservas:number;
    
    constructor(reservaInicial:number){
        this.quantReservas=reservaInicial
    }

    adicionarReserva():void{
        this.quantReservas++
    }
}

let hotel:Hotel=new Hotel(2)
console.log(hotel.quantReservas)
