class Heroi {
    constructor(nome, idade, tipo)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        if(this.tipo == 'mago'){
            ataque = 'magia';
        }
        else if(this.tipo == 'guerreiro'){
            ataque = 'espada';
        }
        else if(this.tipo == 'monge'){
            ataque = 'artes marciais';
        }
        else if(this.tipo == 'ninja'){
            ataque = 'shuriken';
        }
        
        const mensagem = `O ${this.tipo} atacou usando ${ataque}`
        console.log(mensagem);
    }
}

const heroi1 = new Heroi('Gandalf', 1000, 'mago');
heroi1.atacar();
const heroi2 = new Heroi('Minato', 32, 'ninja');
heroi2.atacar();