/* Importing the classes Cliente and ContaCorrente from the files Cliente.js and ContaCorrente.js. */
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

/* Creating two new objects of the class Cliente. */
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

/* Creating two new objects of the class ContaCorrente. */
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaCorrenteAlice = new ContaCorrente(102, cliente2);

contaCorrenteRicardo.depositar(500);

let valor = 300;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);

contaCorrenteAlice.sacar(50);

console.log(contaCorrenteRicardo, contaCorrenteAlice);
console.log("");

console.log("Número de contas criadas: ", ContaCorrente.numeroDeContas);
