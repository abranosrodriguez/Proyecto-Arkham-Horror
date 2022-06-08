function Investigar_Lugar_Atico() {
    // Función que permite investigar el Ático
    // Si las pistas del ático no es 0 podrá hacer :
    if (atico.pistas_investigador != 0) {
        carta_usuario_usar = prompt("Dame un nombre de la carta")                           // Pediremos el nombre de la carta para potencia
        nombre_carta_id = carta_usuario_usar
        for (i = 0; i < cartas_mano.length; i++) {                                          // Buscaremos la carta en la mano
            if (cartas_mano[i].icono_intelecto >= 1) {                                      // Si la carta tiene almenos un icono de intelecto
                if (carta_usuario_usar == cartas_mano[i].nombre) {                          // Si la carta que escribimos tiene el mismo nombre que una carta de la mano
                    carta_para_descartar = cartas_mano.indexOf(cartas_mano[i])              // Si la carta que escribio es la que está en la mano
                    cartas_descartadas.push(cartas_mano[i])                                 // Metemos la carta en descartadas
                    intelecto_carta = (cartas_mano[i].icono_intelecto)                      // Cogemos el intelecto de la carta
                    RolandBanks.sumar_Intelecto(intelecto_carta)                            // Sumamos el intelecto de la carta al actual de personaje
                    Prueba_Intelecto()                                                      // Hacemos la prueba
                    if (carta_para_descartar > -1) {                                        // Buscamos la carta a descarta de la mano y eliminamos 1
                        cartas_mano.splice(carta_para_descartar, 1)
                    }
                    RolandBanks.restar_Intelecto_prueba_Anterior(intelecto_carta)           // Quitamos el intelecto de la carta "quemada", para que no quede todo el rato
                    anadir_carta_descarte_graficamente()                                    // Añadimos la carta graficamente a la zona de descarte  
                    eliminar_carta_graficamente(nombre_carta_id)                            // Eliminamos la imagen de la carta que usamos de la mano
                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'    // Ocultamos los botones de investigar
                    document.getElementById("Potenciar").style.visibility = 'hidden'

                    acciones_jugador--                                                      // Restamos las acciones del jugador
                }
            } else if (cartas_mano[i].icono_comodin >= 1) {                                 // Si la carta tiene un icono comodin
                if (carta_usuario_usar == cartas_mano[i].nombre) {                          // Si la carta que escribimos tiene el mismo nombre que una carta de la mano
                    carta_para_descartar = cartas_mano.indexOf(cartas_mano[i])
                    cartas_descartadas.push(cartas_mano[i])
                    comodin_carta = (cartas_mano[i].icono_comodin)                          //Sería lo mismo que el de intelecto, pero con comodin
                    RolandBanks.sumar_Intelecto(comodin_carta)
                    Prueba_Intelecto()

                    if (carta_para_descartar > -1) {
                        cartas_mano.splice(carta_para_descartar, 1)
                    }
                    RolandBanks.restar_Intelecto_prueba_Anterior(comodin_carta)
                    anadir_carta_descarte_graficamente()
                    eliminar_carta_graficamente(nombre_carta_id)

                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                    document.getElementById("Potenciar").style.visibility = 'hidden'

                    acciones_jugador--
                }
            }

        }
    }
}