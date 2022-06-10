function jugar_cartas() {
    /**
     * @param {boolean} mano_1 - Hueco 2 de la mesa para cartas de tipo apoyo de hueco mano
     * @param {boolean} mano_2 - Hueco 2 de la mesa para cartas de tipo apoyo de hueco mano
     * @param {boolean} mano_3 - Comprobacion de si las cartas de la mesa estan ocupadas
     * @param {string} numero_mano - El usuario escoge que hueco de la mesa quiere eliminar
     * @param {string} eliminar_una_carta_mano - Confirmación conforme el usuario desea borrar una carta de la mano
     * @param {string} jugar_carta - Carta que el jugadro desea jugar
     * 
     * @param {Array} cartas_mano - Array de las cartas del jugador
     * @param {Array} cartas_mesa_jugador -  Array de las cartas en la mesa
     * 
     */
    if (mano_3 == true) { // Si los 2 espacios de mano están ocupados
        let eliminar_una_carta_mano = prompt("Quieres eliminar una carta de la mesa co el hueco de la mano: Si | No?") // Preguntamos al usuario cual quiere sustitur
        if (eliminar_una_carta_mano == "si" || eliminar_una_carta_mano == "Si") {                           //Si escoge una opcion
            let numero_mano = prompt("Que hueco queires: 1 | 2")                                            // El usuario escoge el hueco que quiere cambiar
            if (numero_mano == 1) {
                mano_1 = true                                                                               // Cambiamos los valores para que la carte se cambie en el primer slot
                mano_2 = false
                mano_3 = false
                jugar_cartas()                                                                              // Volvemos a lanzar la esta misma funcion que entrará directamente en pedirle el nombre
                mano_3 = true                                                                               // Volveremos a decir que nuestra mano está ocupada
            } else if (numero_mano == 2) {
                mano_2 = true                                                                               // Cambiamos los valores para que la carte se cambie en el segundo slot
                mano_1 = false
                mano_3 = false
                jugar_cartas()
                mano_3 = true
            }
        } else if (eliminar_una_carta_mano == "no" || eliminar_una_carta_mano == "No") { }
    } else {
        jugar_carta = prompt("Dame el nombre de una carta")                                                 // Pedimos al usuarios que nos de el nombre de una carta para bajar
        nombre_carta_id = jugar_carta
        for (i = 0; i < cartas_mano.length; i++) {                                                          // Recorremos la mano
            datos_carta = cartas_mano[i]
            if (jugar_carta === cartas_mano[i].nombre) {                                                    // Si el nombre que nos dio el usuario coincide con un nombre de la carta de la mano del jugador
                if (datos_carta.tipo_carta == "Apoyo") {                                                    // Si esa carta que nos ha dado el jugador es tipo apoyo
                    if (RolandBanks.suministros >= cartas_mano[i].coste) {                                  // Y si el usuario tiene recursos suficientes para pagar la carta
                        if (datos_carta.tipo_espacio == "Mano") {                                           // Cumpliendo todo lo anterior más que si la carta es de tipo mano
                            RolandBanks.restar_Suministros(cartas_mano[i].coste)                            // Restamos los suministros del coste de la carta al personaje
                            jugar_carta = cartas_mano.indexOf(cartas_mano[i])                               // Buscamos la carta
                            cartas_mesa_jugador.push(cartas_mano[i])                                        // Metemos la carta dentro de la mesa
                            if (jugar_carta > -1) {                                                         // Eliminamos la carta de la mano
                                cartas_mano.splice(jugar_carta, 1)
                                i--                                                                         // Quitamos una acciom
                            }
                            eliminar_carta_graficamente(nombre_carta_id)                                    // Eliminamos graficamente la carta
                            añadir_graficamente_carta_a_la_mesa_apoyo()

                        }
                    } else {
                        alert("Suministros insuficientes")                                                   // Si el usuario no tiene recursos suficiente se lo notificaremos
                    }
                }
            }
            $("#Cuenta_Suministros").html(RolandBanks.suministros)                                          // Actualizamos los suministros del jugador
        }
    }
}
