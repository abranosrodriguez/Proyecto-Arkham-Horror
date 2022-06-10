function añadir_graficamente_carta_a_la_mesa_apoyo() {
    if (mano_1 == true) {                                                   // Si el espacio de mano 1 no esta ocupado la añade a la mano
        mano_1 = false                                                      // Cambiamos los valores para que ocupe el segundo espacio
        mano_2 = true

        let ubicacion_carta_1 = document.getElementById("Mano 1")           // Cogemos donde se irá a poner la carta
        let buscador = -1
        ubicacion_carta_1.src = (cartas_mesa_jugador.at(buscador).imagen)   // Añadimos la url de la carta y la cambia
    } else if (mano_2 == true) {                                            // Si el espacio de mano 2 no está ocupado lo añade
        mano_2 = false                                                      // Cambia los valores
        mano_1 = false
        mano_3 = true
        let ubicacion_carta_1 = document.getElementById("Mano 2")           // Cogemos donde se irá a poner la carta
        let buscador = -1   // Ultimo carta 
        ubicacion_carta_1.src = (cartas_mesa_jugador.at(buscador).imagen)   // Añadimos la url de la carta
    }
}