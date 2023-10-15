class Conta {
	numero: String;
	saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		if (this.saldo >= valor) {
			this.saldo = this.saldo - valor;
		}
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

	obterSaldo(): number {
		return this.saldo;
	}

}

class Banco {
	contas: Conta[] = [];

	inserir(conta: Conta): void {
		let contaConsultada = this.consultar(conta.numero);

		if (contaConsultada == null) {
			this.contas.push(conta);
		}
	}

	consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);

		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);

		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i + 1];
			}

			this.contas.pop();
		}
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

	sacar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.sacar(valor);
		}
	}

	transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
		let contaCredito = this.consultar(numeroCredito);
		let contaDebito = this.consultar(numeroDebito);

		if (contaDebito && contaCredito) {
			contaDebito.transferir(contaCredito, valor);
		}
	}

	getTotalDepositado(): number {

		// solução 1
		let totalDepositado = 
			this.contas.reduce((totalAcumulado: number, conta: Conta) => {
				return totalAcumulado + conta.obterSaldo();
			}, 0);

		return totalDepositado;
	}

	getTotalContas(): number {
		return this.contas.length;
	}

	getMediaDepositada(): number {
		return this.getTotalDepositado()/this.getTotalContas();
	}

}

let b: Banco = new Banco();
b.inserir(new Conta("11111-1", 100));
b.inserir(new Conta("22222-2", 150));
b.inserir(new Conta("33333-3", 300));

b.transferir("11111-1", "22222-2", 71);
console.log(b.consultar("11111-1"));
console.log(b.consultar("22222-2"));
console.log(b.consultar("33333-3"));
console.log(b.getTotalDepositado());
console.log(b.getMediaDepositada());

export { Banco, Conta }