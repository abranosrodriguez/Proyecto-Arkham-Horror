function anadir_carta_robada_graficamente() {
    // Añadir una carta graficamente
    newDiv = document.createElement('div')                                      // Creamos un div
    document.getElementById("Tablero_Cartas_Jugador_Mano").appendChild(newDiv)  // Cogemos el document id y le añadimos el nuevo div
    newDiv.classList.add("Cartas")                                              // Añadimos la clase cartas al div creado

    var img = document.createElement("img")                                     // Creamos el documento imagen
    buscador = -1                                                               // Ultimo valor de un array
    img.src = (cartas_mano.at(buscador).imagen)                                 // Nos da la url de la imagen
    img.classList.add("Cartas_Mano")                                            // Añadimos la clase al elemento creado imagen
    for (i = 0; i < cartas_mano.length; i++) {
        nombre_carta_id = (cartas_mano[i].nombre)                               //El nombre de la carta será la carta a jugar
        img.setAttribute("id", nombre_carta_id)                                 // Añadimos al elemento imagen un identificador, el identificador del nombre de la carta
        newDiv.setAttribute("id", nombre_carta_id)                              // Al elemento div le añadimos el identificador del nombre de la carta
        document.getElementsByClassName("Cartas")[i].appendChild(img)           // Añadimos la imagen correspondiente de cada carta
    }
}