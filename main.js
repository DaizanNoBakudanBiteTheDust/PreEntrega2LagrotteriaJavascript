// Segunda pre Entrega Gabriel Lagrotteria RPG DE TEXTO para CoderHouse

//Objeto personaje a usar

let nombrePj = document.getElementById("nombre");
nombrePj.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombreAventurero = e.target.children;
    if (nombreAventurero[0].value === "") {
        alert("No puedes continuar con este campo Vacio")
    }
    const personaje = {
        nombre: nombreAventurero[0].value,
        hp: 100,
        ataque: 1
    }
});

/*
let div = document.createElement("div");
        div.innerHTML = "Campo vacio";
        document.getElementById("cuadroDeTexto").append(div);
*/
// Objeto  Enemigos

class enemigo {
    constructor(nombre, hp, ataque) {
        this.nombre = nombre,
            this.hp = hp,
            this.ataque = ataque
    }
    recibiDaño(){
        this.hp = this.hp - 1
    }
}

const slime = new enemigo("Slime", 10, 1);
const esqueleto = new enemigo("Esqueleto", 20, 2);
const dragon = new enemigo("Dragon", 50, 3);

console.log(slime, esqueleto, dragon);

// Atacar

// Recibir daño git