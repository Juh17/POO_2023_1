class Conta {
    numero: String;
    saldo: number;
    constructor(numero: String, saldo: number) {
      this.numero = numero;
      this.saldo = saldo;
    }
    sacar(valor: number){
      if (this.saldo < 0){
        return false
      }
      this.saldo = this.saldo - valor;
    }
  
    depositar(valor: number): void {
      this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
      return this.saldo;
    }
  
    transferir(contaDestino: Conta, valor: number){
      if (this.saldo > 0){
        this.sacar(valor);
        contaDestino.depositar(valor);
      }
      return false
    }
  }
  
  let c1 = new Conta('1', 100)
  let c2 = new Conta('2', 100)
  
  c1.sacar(10)
  c2.depositar(20)
  
  console.log(c1.consultarSaldo())
  console.log(c2.consultarSaldo())
  
  c1.saldo = -10
  console.log(c1.transferir(c2, 5))