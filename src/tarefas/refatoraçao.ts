// 1. Definição da Classe Consumidor com construtor, encapsulamento e validações
class Consumidor {
  private privNome: string;
  private privIdade: number;
  private privEmail: string;

  constructor(nome: string, idade: number, email: string) {
    if (!nome || nome.trim() === "") {
      throw new Error("O nome do consumidor não pode estar vazio preecha.");
    }
    if (idade < 0) {
      throw new Error("A idade não pode ser um valor negativo.");
    }
    if (!email || !email.includes("@")) {
      throw new Error("O e-mail fornecido é inválido.");
    }

    this.privNome = nome;
    this.privIdade = idade;
    this.privEmail = email;
  }

  // Getters para acesso controlado aos atributos privados
  public get nome(): string {
    return this.privNome;
  }

  public get idade(): number {
    return this.privIdade;
  }

  public get email(): string {
    return this.privEmail;
  }

  // Método de instância para formatar a exibição
  public formatarExibicao(): string {
    return "Consumidor: " + this.privNome + " (" + this.privIdade + " anos) - " + this.privEmail;
  }
}

// 2. Classe Gerenciadora para manipular a lista e as regras de negócio estatísticas
class GerenciadorConsumidores {
  private lista: Consumidor[] = [];

  public adicionar(consumidor: Consumidor): void {
    this.lista.push(consumidor);
  }

  public getLista(): Consumidor[] {
    return this.lista;
  }

  // Método para calcular a média de idade
  public calcularMediaIdade(): number {
    if (this.lista.length === 0) return 0;
    const somaIdades = this.lista.reduce((acc, c) => acc + c.idade, 0);
    return somaIdades / this.lista.length;
  }

  // Método para encontrar extremos de idade
  public obterExtremosIdade(): { maisVelho: Consumidor | undefined; maisNovo: Consumidor | undefined } {
    if (this.lista.length === 0) {
      return { maisVelho: undefined, maisNovo: undefined };
    }

    let maisVelho: Consumidor = this.lista[0];
    let maisNovo: Consumidor = this.lista[0];

    for (const c of this.lista) {
      if (c.idade > maisVelho.idade) maisVelho = c;
      if (c.idade < maisNovo.idade) maisNovo = c;
    }

    return { maisVelho, maisNovo };
  }
}

// EXECUÇÃO DE TESTE
try {
  const gerenciador = new GerenciadorConsumidores();

  gerenciador.adicionar(new Consumidor("Ana Silva", 30, "ana@email.com"));
  gerenciador.adicionar(new Consumidor("Carlos Souza", 22, "carlos@email.com"));
  gerenciador.adicionar(new Consumidor("Mariana Lima", 45, "mariana@email.com"));
  gerenciador.adicionar(new Consumidor("Roberto Alves", 19, "roberto@email.com"));
  gerenciador.adicionar(new Consumidor("Fernanda Dias", 33, "fernanda@email.com"));

  console.log("LISTA DE CONSUMIDORES");
  gerenciador.getLista().forEach(c => console.log(c.formatarExibicao()));

  console.log("ANÁLISE ESTATÍSTICA ");
  console.log("Média das Idades: " + gerenciador.calcularMediaIdade().toFixed(1) + " anos");

  const { maisVelho, maisNovo } = gerenciador.obterExtremosIdade();
  if (maisVelho && maisNovo) {
    console.log("Mais Velho(a): " + maisVelho.nome + " (" + maisVelho.idade + " anos)");
    console.log("Mais Novo(a): " + maisNovo.nome + " (" + maisNovo.idade + " anos)");
  } else {
    console.log("Não foi possível calcular os extremos de idade.");
  }
} catch (error: any) {
  console.error("Erro na execução:", error.message);
}