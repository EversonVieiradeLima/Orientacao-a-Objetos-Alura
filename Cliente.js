/* (Molde) */
/* The class Cliente has a constructor that takes two parameters, nome and cpf, and assigns them to the
class properties nome and _cpf. The class also has a getter for the cpf property */
export class Cliente {
  nome;
  _cpf;

  /**
   * It returns the value of the private variable _cpf.
   * @returns The value of the private property _cpf.
   */
  get cpf() {
    return this._cpf;
  }

  /**
   * The constructor function is a special function that is used to create and initialize an object
   * created within a class.
   * @param nome - The name of the person.
   * @param cpf - The CPF number of the person.
   */
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
}
