function cambio_imagen_roland() {
    let cara = 0
    document.getElementById("Carta_Personaje").addEventListener("click", () => {
        if (cara == 0) {
            document.getElementById("Carta_Personaje").src = "Imagenes/Personajes/Rolland_Banks/roland_trasero.png"
            cara = -1


        } else if (cara == -1) {
            document.getElementById("Carta_Personaje").src = "Imagenes/Personajes/Rolland_Banks/roland_delantero.png"
            cara = 0
        }
    })

}