function turno_acabado() {
    array_url = []
    robar_carta()                                                                                                //Robamos carta
    anadir_carta_robada_graficamente()                                                                           //Añadimos la carta graficamente al usuario
    function descartar_carta_temporizador() {                                                                    // Temporizador para que pueda añadir la carta a la mano y mostrarla graficamente
        while (cartas_mano.length >= 9) {                                                                        // Si el jugador tiene más de 8 caras en la mano
            // Le pedimos al usuario que nos de nombre de cartas para que se fueran eliminando hasta quedar en el tamaño maximo de cartas
            eliminar_carta = prompt("Maximo 8 cartas en la mano: \nDame el nombre de las cartas que quieras eliminar")
            nombre_carta_id = eliminar_carta
            for (i = 0; i < cartas_mano.length; i++) {
                enlace = cartas_mano[i].imagen
                if (eliminar_carta === cartas_mano[i].nombre) {
                    eliminar_carta = cartas_mano.indexOf(cartas_mano[i])                                        // Buscamos la carta que nos dio en la mano
                    cartas_descartadas.push(cartas_mano[i])                                                     // Metemos la carta en la zona descartada
                    if (eliminar_carta > -1) {
                        cartas_mano.splice(eliminar_carta, 1)                                                   // Eliminamos la carta que nos dio de la mano, solo 1
                        i--                                                                                     // Restamos acciones
                    }
                    eliminar_carta_graficamente(nombre_carta_id)                                                // Eliminamos la carta graficamente
                    anadir_carta_descarte_graficamente()                                                        // Añadimos la carta a la zona de descarte graficamente
                }
            }
        }
    }
    setTimeout(descartar_carta_temporizador, 1000)
    sumarSuministrosRoland()                                                                                    //Sumamos los suministros correspondientes
    historia_mitos()                                                                                            // Hacemos la historia de mitos
    // robar_carta_mitos()
}