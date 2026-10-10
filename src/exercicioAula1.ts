const entrada = require("prompt-sync")();

// Tipo do consumidor
type Consumidor = {
    nome: string,
    idade: number,
    email: string  
};


const criarConsumidor = (nome: string, idade: number, email: string): Consumidor => {
    const consumidor: Consumidor = {
        nome: nome,
        idade: idade,
        email: email
    };
    return consumidor;
}


const calcularMediaIdade = (lista: Consumidor[]): number => {
    let soma = 0;

    for (const consumidor of lista) {
        soma = soma + consumidor.idade;
    }

    return soma / lista.length;
}


const obterMaiorEMenorIdade = (lista: Consumidor[]) => {
    let maisVelho = lista[0] as Consumidor;
    let maisNovo = lista[0] as Consumidor;

    for (const consumidor of lista) {
        if (consumidor.idade > maisVelho.idade) {
            maisVelho = consumidor;
        }
        if (consumidor.idade < maisNovo.idade) {
            maisNovo = consumidor;
        }
    }

    return { maisVelho: maisVelho, maisNovo: maisNovo };
}

const consumidores: Consumidor[] = [];

for (let i = 1; i <= 5; i++) {
    const nome = entrada("Digite o nome do consumidor " + i + ": ");
    const idade = Number(entrada("Digite a idade do consumidor " + i + ": "));
    const email = entrada("Digite o email do consumidor " + i + ": ");

    const novo = criarConsumidor(nome, idade, email);
    consumidores.push(novo);
}

const media = calcularMediaIdade(consumidores);
const resultado = obterMaiorEMenorIdade(consumidores);

console.log("Consumidores cadastrados:");
console.log(consumidores);
console.log("Média das idades: " + media.toFixed(1));
console.log("Mais velho: " + resultado.maisVelho.nome + " - " + resultado.maisVelho.idade + " anos");
console.log("Mais novo: " + resultado.maisNovo.nome + " - " + resultado.maisNovo.idade + " anos");