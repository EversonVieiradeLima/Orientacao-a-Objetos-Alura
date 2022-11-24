import { Cliente } from "./Cliente.js";

//Criando uma classe para colocar os dados dos clientes de uma banco (Molde)
export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _cliente;
  // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  //Criando o método sacar
  sacar(valor) {
    if (this._saldo >= valor) {
      //this => "dessa conta", da conta manipulada
      this._saldo -= valor;
      return valor;
    }
  }

  //Cricando o método depositar
  depositar(valor) {
    if (valor <= 0) return; //se o valor para deposito for menor ou igual a 0 a função encerra
    this._saldo += valor;
  }

  //Criando o método transferir
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
