class retangulo{
    lado1: number = 0;
    lado2: number = 0;
 
    areaRetangulo(): number {
       return this.lado1 * this.lado2;
    }

    perimetroRetangulo(): number{
       return (this.lado1 * 2) + (this.lado2 *2)
    }
}

function main(){
   let R1 = new retangulo();
   
   R1.lado1 = 7;
   R1.lado2 = 9;

  
   let AreaR1: number = R1.areaRetangulo();
   let PerimetroR1 : number = R1.perimetroRetangulo();

   console.log(AreaR1.toFixed(2));
   console.log(PerimetroR1.toFixed(2));
}

main(); 
     
