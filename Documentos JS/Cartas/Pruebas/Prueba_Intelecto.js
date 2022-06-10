function Prueba_Intelecto() {
    ficha = sacar_ficha_facil()                                                 // Saca la ficha de la bolsa aleatoriamente
    resultado_prueba = (RolandBanks.intelecto - ficha)                          // El resultado de la prueba es el intelecto del personaje - ficha sacada

    if (ubicacion_estudio == true) {                                            // Si el usuario se encuentra del estudio
        if (estudio.dificultad <= resultado_prueba) {                           // Si el resultado es mayor o igual a la dificultad gana la prueba
            alert("Ganas")
            datos_estudio = grupo_lugares_revelados[0]                          // Cogemos los datos del estudio
            datos_estudio.restar_pistas_lugares(1)                              // Restamos el numero de pistas en el estudio
            RolandBanks.sumar_Pistas()                                          // Sumamos el número de pistas que ganó el usuario
            acciones_jugador--                                                  // Restamos acciones
            actualizar_datos_bolsa_jq_estudio()                                 // Actualizamos los datos de bolsa del estudio
            actualizar_dificultad_estudio()                                     // Actualizamos los datos de donde nos encontramos
        } else {
            alert("Pierdes")
            acciones_jugador--
            actualizar_datos_bolsa_jq_estudio()
            actualizar_dificultad_estudio()
        }
    } else if (ubicacion_pasillo == true) {                                      // Si se encuentra en el pasillo (Pero investigar no va a poder ya que no hay pistas, pero si hubiera en un futuro x)
        if (pasillo.dificultad <= resultado_prueba) {                           // Si el resultado es mayor o igual a la dificultad gana la prueba
            alert("Ganas")
            datos_pasillo = grupo_lugares_revelados[1]                          // Cogemos los datos del pasillo
            datos_pasillo.restar_pistas_lugares(1)                              // Restamos las pistas del lugar
            RolandBanks.sumar_Pistas()                                          // Sumamos las pistas al jugador
            acciones_jugador--                                                  // Restamos la accion
        } else {
            alert("Pierdes")
            acciones_jugador--
        }
    } else if (ubicacion_atico == true) {
        if (atico.dificultad <= resultado_prueba) {                             // Si el resultado es mayor o igual a la dificultad gana la prueba
            alert("Ganas")
            datos_atico = grupo_lugares_revelados[2]                            // Cogemos los datos del atico
            datos_atico.restar_pistas_lugares(1)
            RolandBanks.sumar_Pistas()                                          // Sumamos las pistas ganadas al jugador
            acciones_jugador--                                                  // Restamos las acciones
            actualizar_datos_bolsa_jq_atico()                                   // Actualizamos los datos de bolsa del atico
            actualizar_datos_sala_atico()                                       // Actualizamos los datos de donde nos encontramos

        } else {
            alert("Pierdes")
            acciones_jugador--
            actualizar_datos_bolsa_jq_atico()
            actualizar_datos_sala_atico()
        }

    } else if (ubicacion_sotano == true) {
        if (sotano.dificultad <= resultado_prueba) {                            // Si el resultado es mayor o igual a la dificultad gana la prueba
            alert("Ganas")
            datos_sotano = grupo_lugares_revelados[3]
            datos_sotano.restar_pistas_lugares(1)                               // Restamos las pistas del lugar
            RolandBanks.sumar_Pistas()                                          // Sumamos las pistas al jugador
            acciones_jugador--                                                  // Restamos la accion
            actualizar_datos_bolsa_jq_sotano()                                  // Actualizamos los datos de bolsa del atico
            actualizar_datos_sala_sotano()                                      // Actualizamos los datos de donde nos encontramos

        } else {
            alert("Pierdes")
            acciones_jugador--                                                  // Restamos la accion
            actualizar_datos_bolsa_jq_sotano()                                  // Actualizamos los datos de bolsa del atico
            actualizar_datos_sala_sotano()                                      // Actualizamos los datos de donde nos encontramos
        }
    }
    return ficha                                                                // Devolvemos la ficha
}