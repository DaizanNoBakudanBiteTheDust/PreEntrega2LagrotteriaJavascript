// Segunda pre Entrega Gabriel Lagrotteria RPG DE TEXTO para CoderHouse

//Objeto personaje a usar

alert("Bienvenido al RPG de Texto, en este viaje usaremos la imaginacion para tratar de meternos en un mundo plagado de monstruos, lo ideal seria que nos conocieramos mejor antes de continuar..");

let nombrePj = prompt("¿Podria decirme su nombre por favor?");

do {
    alert("disculpa no te he oido bien..");
    nombrePj = prompt("¿Podria decirme su nombre por favor?");
}
while (nombrePj === "") {}

alert("Excelente " + nombrePj + " mi nombre es Kaine no se si te haz enterado pero aqui han pasado muchas cosas, un Dragon ha estado atacando esta aldea y necesitamos de un valiente guerrero para que nos ayude a derrotarlo, actualmente no contamos con nadie que sepa utilzar un arma, pero veo que tu cargas una, quizas puedas ayudarnos derrotando unos slimes que se encuentran en el pueblo");


const personaje = {
    nombre: nombrePj,
    hp: 100,
    ataque: 1
}

// Objeto  Enemigos

class enemigo {
    constructor(nombre, hp, ataque) {
        this.nombre = nombre,
            this.hp = hp,
            this.ataque = ataque
    }
    recibiDaño() {
        this.hp = this.hp - 1
    }
}

const slime = new enemigo("Slime", 10, 1);
const esqueleto = new enemigo("Esqueleto", 20, 2);
const dragon = new enemigo("Dragon", 50, 3);



// Atacar

// Recibir daño git