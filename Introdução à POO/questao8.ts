
class circulo{
    raio: number = 0;

    constructor(raio:number){
        this.raio = raio;
    }

    area(){
        return Math.PI * this.raio**2;
    }

    perimetro(){
       return (2*Math.PI) * this.raio;
    }
}

function main(){

    let C1 = new circulo(4);

    let areaC: number = C1.area();
    let perimetroC: number = C1.perimetro();

    console.log(areaC.toFixed(2));
    console.log(perimetroC.toFixed(2));
}

main();
   
