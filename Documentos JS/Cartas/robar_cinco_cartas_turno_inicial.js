function robar_cinco_cartas_turno_inicial() {
    let i = 0
    while (i < 5) {
        robar_carta()                                                                           // Robará un total de 5 cartas el jugador
        i++
    }
    for (i = 0; i < cartas_mano.length; i++) {                                                  // Comprueba la mano
        if (cartas_mano[i].tipo == "Traicion" || cartas_mano[i].tipo == "Debilidad Basica") {   // Si en la mano hay alguna carta mala
            robar_carta()                                                                       // Volvemos a robar carta
            volver_al_mazo = cartas_mano.indexOf(cartas_mano[i])                                // Buscamos la carta mala
            mazo_cartas.push(cartas_mano[i])                                                    // Volvemos a meter la carta mala al mazo
            if (volver_al_mazo > -1) {
                cartas_mano.splice(volver_al_mazo, 1)                                           // Eliminamos la carta de la mano
            }

        }
    }
    // Grafico Muestra las 5 Cartas para el usuario
    for (i = 0; i < cartas_mano.length; i++) {
        newDiv = document.createElement('div')                                                  //Creamos el div
        document.getElementById("Tablero_Cartas_Jugador_Mano").appendChild(newDiv)              // Le añadimos el elemento el elemento creado
        newDiv.classList.add("Cartas")                                                          //Le añadimos la clase al div        
        var img = document.createElement("img")                                                 //Creamos la img
        img.src = (cartas_mano[i].imagen)                                                       // Buscamos la url de la imagen
        nombre_carta_id = (cartas_mano[i].nombre)                                               //Le añadimos la clase para el css
        img.classList.add("Cartas_Mano")                                                        // Añadimos la clase
        img.setAttribute("id", nombre_carta_id)                                                 // A la etiqueta imagen le damos el identificador del nombre de la carta
        newDiv.setAttribute("id", nombre_carta_id)                                              // A la etiqueta div le damos el identificador del nombre de la carta
        document.getElementsByClassName("Cartas")[i].appendChild(img)                           // Añadimos la imagen



    }
}