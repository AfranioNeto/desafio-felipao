const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Digite o nome do seu herói: ', (nomeHero) => {
  readline.question('Digite a idade do seu herói: ', (idadeHero) => {
    const idadeHeroNumero = parseInt(idadeHero);
    
    readline.question('Digite a classe do seu herói: ', (classeHero) => {
      class Hero {
        constructor(nome, idade, classe) {
          this.nome = nome;
          this.idade = idade;
          this.classe = classe;
        }

        atacar() {
          let ataque = "";

          if (this.classe === "mago") {
            ataque = "magia";
          } else if (this.classe === "guerreiro") {
            ataque = "espada";
          } else if (this.classe === "monge") {
            ataque = "artes marciais";
          } else if (this.classe === "ninja") {
            ataque = "shuriken";
          } else {
            ataque = "um ataque desconhecido";
          }

          console.log(`${this.nome} atacou usando ${ataque}`);
        }
      }

      const novoHero = new Hero(nomeHero, idadeHeroNumero, classeHero);
      console.log(novoHero);
      novoHero.atacar();
      
      readline.close();
    });
  });
});