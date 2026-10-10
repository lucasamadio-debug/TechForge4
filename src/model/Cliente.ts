export class Cliente {

constructor( 
    public id: number, 
    public nome: string, 
    public endereço: string, 
    public idade: number) {}


    apresentar = ()=>{
      return "ola meu nome é " + this.nome + " e tenho " + this.idade + " anos";
}

}