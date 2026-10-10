import console = require("node:console");

class Cliente {



constructor(
    private id: number, 
    private nome: string,
    private endereço: string,
    private idade: number) {

}

private apresentar = ()=>{
    console.log(this.nome);
}

}

const cliente = new Cliente(1, "João", "rua 231", 30);
