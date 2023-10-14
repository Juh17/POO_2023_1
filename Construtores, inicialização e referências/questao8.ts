class Equipamento{
  ligado:boolean

  liga(){
    if (this.ligado == false){
      this.ligado = true
    }
    if (this.ligado == true){
      return `Ligado`
    }
  }

  desliga(){
    if (this.ligado == true){
      this.ligado = false
    }
    return `Desligado`
  }
  inverte(){
    if (this.ligado == true){
      this.desliga()
    }
    this.liga()
  }

  ligado1():boolean{
    return this.ligado
  }
}


let e1 = new Equipamento()
e1.ligado = false
console.log(e1.ligado)

e1.liga()
console.log(e1.ligado)
e1.inverte()

console.log(e1.ligado)
e1.ligado = false
e1.desliga()

console.log(e1.ligado1())
