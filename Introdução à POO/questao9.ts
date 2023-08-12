

class SituacaoFinanceira {
   valorCredito: number = 0;
   valorDebito: number = 0;

   constructor (valorCredito: number, valorDebito: number){
       this.valorCredito = valorCredito;
       this.valorDebito = valorDebito;
   }

   saldo(){
       return this.valorCredito - this.valorDebito;
   }
} 


function main(){
   let situacaoJuliana = new SituacaoFinanceira(1000,500);

   console.log(situacaoJuliana.saldo());
}

main();   

