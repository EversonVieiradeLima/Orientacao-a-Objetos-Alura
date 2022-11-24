//Criando uma classe para colocar os dados dos clientes de uma banco (Molde)
export class Cliente {
  nome;
  _cpf;

  get cpf() {
    return this._cpf;
  }

  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
}
