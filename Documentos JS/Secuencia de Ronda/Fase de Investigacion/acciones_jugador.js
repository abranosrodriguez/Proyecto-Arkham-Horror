function acciones_Jugador(acciones_jugador) {
    ubicacion_estudio = true    // Declaramos las variables para saber donde está el jugador
    ubicacion_pasillo = false
    ubicacion_atico = false
    ubicacion_sotano = false

    // Temporizador que comprueba donde está el usuario
    let timerId = setTimeout(function tick() {
        if (ubicacion_estudio == true) {                                                        // Si el usuario está en el estudio
            if (estudio.pistas_investigador != 0) {                                             // Si el usuario sigue estando en el estudio y hay pistas en la zona
                // console.log("Ubicacion Estudio")
            } else if (estudio.pistas_investigador == 0) {                                      // Si el usuario sigue estando en el estudio pero ya no hay pistas
                ubicacion_estudio == false                                                      // Cambiamos la ubicacion del usuario
                ubicacion_pasillo == true                                                       // Le decimos donde estará ahora
                // setTimeout(() => { clearInterval(timerId); console.log("Tiempo Parado") })
                PopUp_Acto_1b()                                                                 // Ponemos el model box de la historia buena
                RolandBanks.pistas = 0                                                          // Bajamos el numero de pistas del personaje
                $("#Pistas_Personaje").html(RolandBanks.pistas)                                 // Actualizamos el numero de pistas del usuario
                return [ubicacion_estudio = false, ubicacion_pasillo = true]                    //Devolvemos la ubicacion del usuario
            }
        }
        timerId = setTimeout(tick, 2000); // (*)
    }, 2000);

    // Temporizador que comprueba las estadisticas del jugador
    let comprobar_jugador = setTimeout(function comprobar_estadisticas_jugador() {
        if (RolandBanks.cordura <= 0) {                                                         // Si la cordura del personaje es menor que 0
            setTimeout(() => { clearInterval(comprobar_jugador); })                             // Paramos el temporizador
            alert("Has muerto")                                                                 // Le decimos que ha muerto
            location.reload();                                                                  // Recargamos el juego

        } else if (RolandBanks.vida <= 0) {                                                     // Si la vida del jugador es menor que '
            setTimeout(() => { clearInterval(comprobar_jugador); })                             // Paramos el temporizador
            alert("Has muerto")                                                                 // Le decimos que ha muerto
            location.reload();                                                                  // Recargamos el juego
        }
        comprobar_jugador = setTimeout(comprobar_estadisticas_jugador, 100); // (*)
    }, 2000);


    // -------------------------------------------------------------------------------------------------
    // ---------------------------------------  Moverse -----------------------------------------------
    // -------------------------------------------------------------------------------------------------
    document.getElementById("Moverse").addEventListener("click", () => {
        if (acciones_jugador != 0) {    // Si las acciones del jugador no es 0 que le permita hacerlo
            moverse_tablero()   // Funcion para moverse
            if (moverse == "") {
            } else if (moverse == "Sotano" || moverse == "sotano" || moverse == "Atico" | moverse == "atico") { // Si escogió una zona
                acciones_jugador--                                                              // Restamos la accion conforme se ha movido
            }
        } else if (acciones_jugador == 0) {                                                     // Si el jugador pincha en moverse y es 0
            alert("Sin Acciones")                                                               // Le decimos que no tiene acciones
            acciones_jugador = 3                                                                // Le damos sus acciones
            ficha_mitos++                                                                       // Sumamos la ficha de mitos
            turno_acabado()                                                                     // Funcion cuando acabe el turno
        }
    })


    // -------------------------------------------------------------------------------------------------
    // ----------------------------------  Suministros Jugador -----------------------------------------
    // -------------------------------------------------------------------------------------------------
    document.getElementById("suministros").addEventListener("click", () => {
        if (acciones_jugador != 0) {                                                            // Si le da click a suministros y le quedan acciones
            sumarSuministrosRoland()                                                            // Le sumamos suministros
            acciones_jugador--                                                                  // Restamos una accion
        } else if (acciones_jugador == 0) {                                                     // Si le da click y no le quedan accion
            alert("Sin Acciones")                                                               // Le decimos que no le quedan acciones
            acciones_jugador = 3                                                                // Restauramos las acciones
            ficha_mitos++                                                                       // Sumamos la ficha de mitos
            turno_acabado()                                                                     // Funcion final de turno
        }

    })


    // -------------------------------------------------------------------------------------------------
    // -------------------------------------- Robar Carta Jugador --------------------------------------
    // -------------------------------------------------------------------------------------------------
    document.getElementById("zona_jugador_robar_carta").addEventListener("click", () => {
        if (acciones_jugador != 0) {                                                            // Si le da click a robar y le quedan acciones
            robar_carta()                                                                       // Robamos carta
            acciones_jugador--                                                                  // Restamos una accion
            anadir_carta_robada_graficamente()                                                  // Añadimos la carta graficamente
        } else if (acciones_jugador == 0) {                                                     // Si le da click y no le quedan accion
            alert("Sin acciones")                                                               // Le decimos que no le quedan acciones
            acciones_jugador = 3                                                                // Restauramos las acciones
            ficha_mitos++                                                                       // Sumamos la ficha de mitos
            turno_acabado()                                                                     // Funcion final de turno
        }
    })


    // -------------------------------------------------------------------------------------------------
    // ----------------------------------------- Jugar Carta -------------------------------------------
    // -------------------------------------------------------------------------------------------------
    document.getElementById("Jugar_Cartas").addEventListener("click", () => {
        if (acciones_jugador != 0) {                                                            // Si pincha en jugar carta
            jugar_cartas()                                                                      // Funcion de jugar cartas
            acciones_jugador--                                                                  // Restamos de acciones
        } else if (acciones_jugador == 0) {                                                     // Si le da click y no le quedan accion
            alert("Sin acciones")                                                               // Le decimos que no le quedan acciones
            acciones_jugador = 3                                                                // Restauramos las acciones
            ficha_mitos++                                                                       // Sumamos la ficha de mitos
            turno_acabado()                                                                     // Funcion final de turno
        }
    })

    // -------------------------------------------------------------------------------------------------
    // ----------------------------------------- Investigar --------------------------------------------
    // -------------------------------------------------------------------------------------------------
    document.getElementById("Investigar").addEventListener("click", () => {
        document.getElementById("Sin_Potenciar").style.visibility = "visible"                   // Mostramos los botones
        document.getElementById("Potenciar").style.visibility = "visible"
        if (ubicacion_estudio == true) {                                                        // Si el personaje está en el estudio y tiene acciones actualizamos los datos de estudio
            if (acciones_jugador != 0) {
                actualizar_dificultad_estudio()
            } else if (acciones_jugador == 0) {                                                 // Si le da click y no le quedan accion
                alert("Sin acciones")                                                           // Le decimos que no le quedan acciones
                acciones_jugador = 3                                                            // Restauramos las acciones
                ficha_mitos++                                                                   // Sumamos la ficha de mitos
                turno_acabado()                                                                 // Funcion final de turno
            }

        } else if (ubicacion_pasillo == true) {
            // console.log("Ubicacion pasillo Investigar")
        } else if (ubicacion_atico == true) {                                                   // Ubicacion del personaje
            if (atico.pistas_investigador == 0) {
                document.getElementById("Investigar").disabled = true                           // Si las pistas del atico son 0 desactiva los botones
                document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                document.getElementById("Potenciar").style.visibility = 'hidden'
            }
            console.log("Ubicacion atico Investigar")
        } else if (ubicacion_sotano == true) {                                                  // Ubicacion del personaje
            if (sotano.pistas_investigador == 0) {
                document.getElementById("Investigar").disabled = true                           // Si las pistas del sotano son 0 desactiva los botones
                document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                document.getElementById("Potenciar").style.visibility = 'hidden'
            }
        }


    })


    document.getElementById("Sin_Potenciar").addEventListener("click", () => {
        if (ubicacion_estudio == true) {                                                        // Ubicacion del personaje
            if (acciones_jugador != 0) {
                acciones_jugador--                                                              // Restamos accion
                Prueba_Intelecto()
                document.getElementById("Sin_Potenciar").style.visibility = 'hidden'            // Escondemos los botones
                document.getElementById("Potenciar").style.visibility = 'hidden'
            } else if (acciones_jugador == 0) {
                alert("Sin acciones")
                acciones_jugador = 3
                ficha_mitos++
                turno_acabado()
            }

        } else if (ubicacion_pasillo == true) {                                                 // Ubicacion del personaje
            if (pasillo.pistas_investigador != 0) {
                if (acciones_jugador != 0) {
                    acciones_jugador--
                    console.log(acciones_jugador)
                    Prueba_Intelecto()
                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'        // Escondemos los botones
                    document.getElementById("Potenciar").style.visibility = 'hidden'
                }
            } else if (acciones_jugador == 0) {
                alert("Sin acciones")
                acciones_jugador = 3
                ficha_mitos++
                turno_acabado()
            }
        }
        else if (ubicacion_atico == true) { // Ubicacion del personaje

            if (atico.pistas_investigador != 0) {
                if (acciones_jugador != 0) {
                    acciones_jugador--
                    Prueba_Intelecto()
                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'         // Escondemos los botones
                    document.getElementById("Potenciar").style.visibility = 'hidden'
                } else if (acciones_jugador == 0) {
                    alert("Sin acciones")
                    acciones_jugador = 3
                    ficha_mitos++

                    turno_acabado()
                }
            } else if (atico.pistas_investigador == 0) {
                document.getElementById("Investigar").disabled = true
                document.getElementById("Sin_Potenciar").style.visibility = 'hidden'          // Escondemos los botones
                document.getElementById("Potenciar").style.visibility = 'hidden'
            }
        } else if (ubicacion_sotano == true) {  // Ubicacion del personaje
            if (sotano.pistas_investigador != 0) {
                if (acciones_jugador != 0) {
                    acciones_jugador--
                    Prueba_Intelecto()
                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'        // Escondemos los botones
                    document.getElementById("Potenciar").style.visibility = 'hidden'
                } else if (acciones_jugador == 0) {
                    alert("Sin acciones")
                    acciones_jugador = 3
                    ficha_mitos++
                    turno_acabado()
                }
            }
            else if (sotano.pistas_investigador == 0) {
                document.getElementById("Investigar").disabled = true
                document.getElementById("Sin_Potenciar").style.visibility = 'hidden'            // Escondemos los botones
                document.getElementById("Potenciar").style.visibility = 'hidden'
            }
        }
    })

    document.getElementById("Potenciar").addEventListener("click", () => {
        if (ubicacion_estudio == true) {
            if (estudio.pistas_investigador != 0) {
                Investigar_Lugar_Estudio()                                                      // Investigamos el estudio si estamos en su ubicacion
            } else if (estudio.pistas_investigador == 0) {
                ubicacion_pasillo == true                                                       // Si las pistas del estudio son 0 cambiamos la ubicacion del usuario
                ubicacion_estudio == false
                return [ubicacion_pasillo = true, ubicacion_estudio = false]                    // Devolvemos la ubicacion
            }
        } else if (ubicacion_pasillo == true) {
            Investigar_Lugar_Pasillo()
        } else if (ubicacion_atico == true) {
            Investigar_Lugar_Atico()                                                             // Si estamos en el atico investigamos
        } else if (ubicacion_sotano == true) {
            Investigar_Lugar_Sotano()                                                            // Si estamos en el sotano investigamos
        }

    })

}