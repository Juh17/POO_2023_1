class Triangulo{
    l1:number
    l2:number
    l3:number

    constructor(l1:number, l2:number, l3:number){
        this.l1=l1
        this.l2=l2
        this.l3=l3
    }
    verificarTrianguloValido():boolean{
       if( (this.l2-this.l3)<this.l1 && this.l1<(this.l2+this.l3)){
            return true
       }
       else{
           return false
       }
    }
    escaleno(){
        if(this.verificarTrianguloValido()==false){
            return false
        }
        else{
            return this.l1!=this.l2 && this.l1!=this.l3
        }
    }
    isoceles(){
        if(this.verificarTrianguloValido()==false){
            return false
        }
        else{
            let caso1= this.l1==this.l2 && this.l1!=this.l3
            let caso2=  this.l1==this.l3 && this.l1!=this.l2

            return caso1 || caso2
        }
    }
    
    equilatero(){
        //fail fast
        if(this.verificarTrianguloValido()==false){
            return false
        }
        else{
            return this.l1==this.l2 && this.l2==this.l3
        }
    }
}


let t=new Triangulo(2,2,5)
console.log(`Triagulo Escaleno: ${t.escaleno()}`)
console.log(`Triagulo Isoceles: ${t.isoceles()}`)
console.log(`Triagulo Equilatero: ${t.equilatero()}`)