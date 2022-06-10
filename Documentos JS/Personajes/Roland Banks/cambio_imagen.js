function cambio_imagen_roland() {
    let cara = 0
    document.getElementById("Carta_Personaje").addEventListener("click", () => {    // Si el usuario le da click a la imagen del personaje
        if (cara == 0) {
            document.getElementById("Carta_Personaje").src = "Imagenes/Personajes/Rolland_Banks/roland_trasero.png" // Pone la imagen del personaje trasero
            cara = -1
        } else if (cara == -1) {
            document.getElementById("Carta_Personaje").src = "Imagenes/Personajes/Rolland_Banks/roland_delantero.png"   // Si le vuelve a dar lo pondrá por la parte delantera
            cara = 0
        }
    })

}