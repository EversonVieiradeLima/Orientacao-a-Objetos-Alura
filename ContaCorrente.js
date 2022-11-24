/* Importing the Cliente class from the Cliente.js file. */
import { Cliente } from "./Cliente.js";

/* (Molde) */
/* ContaCorrente is a class that has a static property numeroDeContas, a property agencia, a property
_cliente, a property _saldo, a setter cliente, a getter cliente, a getter saldo, a constructor, a
method sacar, a method depositar, and a method transferir. */
export class ContaCorrente {
  /* Creating a static property called numeroDeContas and assigning it the value of 0. */
  static numeroDeContas = 0;
  agencia;
  _cliente;
  // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;

  /**
   * It checks if the new value is an instance of the Cliente class.
   * @param novoValor - The value that is being passed to the setter.
   */
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  /**
   * It returns the value of the private variable _cliente.
   * @returns The value of the private property _cliente.
   */
  get cliente() {
    return this._cliente;
  }

  /**
   * The getter function is a function that returns the value of the property.
   * @returns The value of the _saldo property.
   */
  get saldo() {
    return this._saldo;
  }

  /**
   * The constructor function is a special function that is called when a new object is created.
   * @param agencia - number
   * @param cliente - Cliente
   */
  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  /**
   * If the account has enough money, subtract the amount from the balance and return the amount.
   * @param valor - the amount to be withdrawn
   * @returns The value of the parameter valor.
   */
  sacar(valor) {
    if (this._saldo >= valor) {
      //this => "dessa conta", da conta manipulada
      this._saldo -= valor;
      return valor;
    }
  }

  /**
   * If the value to be deposited is less than or equal to zero, the function ends. Otherwise, the
   * value is added to the balance.
   * @param valor - the value to be deposited
   * @returns the value of the balance.
   */
  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  /**
   * The transferir function takes a value and a conta as arguments, and then it calls the sacar
   * function on the value, and then it calls the depositar function on the conta.
   * @param valor - the amount to be transferred
   * @param conta - the account that will receive the money
   */
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
