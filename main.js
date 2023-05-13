// Segunda pre Entrega Gabriel Lagrotteria RPG DE TEXTO para CoderHouse

//Objeto personaje a usar

let nombrePj = document.getElementById("nombre");
nombrePj.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombreAventurero = e.target.children;
    if (nombreAventurero[0].value === ""){
        let div = document.createElement("div");
        div.innerHTML = "Campo vacio";
        document.getElementById("cuadroDeTexto").append(div);
    }
    const personaje = {
        Nombre: nombreAventurero[0].value,
        hp: 100,
        ataque: 1
    }    
    console.log(personaje);
});



// Objeto  Enemigos

// Atacar

// Recibir daño git