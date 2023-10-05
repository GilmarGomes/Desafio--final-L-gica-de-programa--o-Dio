class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    return `O ${this.nome} tem ${this.idade} anos de idade e atacou usando ${this.tipo}`;
  }
}

const heroi1 = new Heroi("Mago", 100, "varinha mágica");
console.log(heroi1.atacar());

console.log("-------------------------------------------");

const heroi2 = new Heroi("Batman", 40, "bala especial");
console.log(heroi2.atacar());

console.log("-------------------------------------------");

const heroi3 = new Heroi("Lutador", 30, "jiu jitsu");
console.log(heroi3.atacar());
