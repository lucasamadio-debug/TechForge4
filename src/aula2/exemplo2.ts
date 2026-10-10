import { Cliente } from "../model/Cliente";


const cliente = new Cliente(1, "João", "rua 231", 30);

console.log(cliente.apresentar());
console.log(cliente);