function acciones_Jugador(acciones_jugador) {

    ubicacion_estudio = true
    ubicacion_pasillo = false
    ubicacion_atico = false
    ubicacion_sotano = false

    let timerId = setTimeout(function tick() {
        if (ubicacion_estudio == true) {
            if (estudio.pistas_investigador != 0) {
                console.log("Ubicacion Estudio")
            } else if (estudio.pistas_investigador == 0) {
                console.log("Se acabaron las pistas del estudio")
                ubicacion_estudio == false
                ubicacion_pasillo == true
                // setTimeout(() => { clearInterval(timerId); console.log("Tiempo Parado") })
                PopUp_Acto_1b()
                RolandBanks.pistas = 0
                $("#Pistas_Personaje").html(RolandBanks.pistas)

                return [ubicacion_estudio = false, ubicacion_pasillo = true]
            }
        }

        timerId = setTimeout(tick, 2000); // (*)
    }, 2000);


    let comprobar_jugador = setTimeout(function comprobar_estadisticas_jugador() {
        console.log("Comprobando estadisticas")
        if (RolandBanks.cordura == 0) {
            console.log("Has muerto por la cordura")
            // document.getElementById("Investigar").disabled = true
            // document.getElementById("Jugar_Cartas").disabled = true
            // document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
            // document.getElementById("Potenciar").style.visibility = 'hidden'
            setTimeout(() => { clearInterval(comprobar_jugador); })
            alert("Has muerto")
            location.reload();

        } else if (RolandBanks.vida == 0) {
            console.log("Has muerto por vida")
            setTimeout(() => { clearInterval(comprobar_jugador); })
            alert("Has muerto")
            location.reload();
        }
        comprobar_jugador = setTimeout(comprobar_estadisticas_jugador, 100); // (*)
    }, 2000);


    document.getElementById("Moverse").addEventListener("click", () => {
        if (acciones_jugador != 0) {
            moverse_tablero()
            if (moverse == "") {
                console.log("No se resta movimiento")
            } else if (moverse == "Sotano" || moverse == "sotano" || moverse == "Atico" | moverse == "atico") {
                acciones_jugador--
            }
        } else if (acciones_jugador == 0) {
            alert("Sin Acciones")
            acciones_jugador = 3
            ficha_mitos++

            turno_acabado()
        }
    })

    // -------------------------------------------------------------------------------------------------
    //Suministros Jugador
    sumi = document.getElementById("suministros")

    document.getElementById("suministros").addEventListener("click", () => {
        if (acciones_jugador != 0) {
            sumarSuministrosRoland()
            acciones_jugador--
            console.log(acciones_jugador)
        } else if (acciones_jugador == 0) {
            alert("Sin Acciones")
            acciones_jugador = 3
            ficha_mitos++

            turno_acabado()
        }

    })

    // -------------------------------------------------------------------------------------------------
    // Robar Carta Jugador 

    document.getElementById("zona_jugador_robar_carta").addEventListener("click", () => {
        if (acciones_jugador != 0) {
            robar_carta()
            acciones_jugador--
            anadir_carta_robada_graficamente()
        } else if (acciones_jugador == 0) {
            alert("Sin acciones")
            acciones_jugador = 3
            ficha_mitos++

            turno_acabado()
        }
    })








    // -------------------------------------------------------------------------------------------------
    // Jugar Carta
    document.getElementById("Jugar_Cartas").addEventListener("click", () => {
        if (acciones_jugador != 0) {
            jugar_cartas()
            acciones_jugador--
        } else if (acciones_jugador == 0) {
            alert("Sin acciones")
            acciones_jugador = 3
            ficha_mitos++

            turno_acabado()
        }
    })

    invest = document.getElementById("Investigar")
    document.getElementById("Investigar").addEventListener("click", () => {
        document.getElementById("Sin_Potenciar").style.visibility = "visible"
        document.getElementById("Potenciar").style.visibility = "visible"
        // jugar_cartas()
        if (ubicacion_estudio == true) {
            if (acciones_jugador != 0) {
                console.log("Ubicacion Estudio: Investigar")
                actualizar_dificultad_estudio()
            } else if (acciones_jugador == 0) {
                alert("Sin acciones")
                acciones_jugador = 3
                ficha_mitos++

                turno_acabado()
            }

        } else if (ubicacion_pasillo == true) {
            console.log("Ubicacion pasillo Investigar")
        } else if (ubicacion_atico == true) {
            if (atico.pistas_investigador == 0) {
                document.getElementById("Investigar").disabled = true
                document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                document.getElementById("Potenciar").style.visibility = 'hidden'
            }
            console.log("Ubicacion atico Investigar")
        } else if (ubicacion_sotano == true) {
            if (sotano.pistas_investigador == 0) {
                document.getElementById("Investigar").disabled = true
                document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                document.getElementById("Potenciar").style.visibility = 'hidden'
            }
        }


    })


    document.getElementById("Sin_Potenciar").addEventListener("click", () => {
        if (ubicacion_estudio == true) {

            if (acciones_jugador != 0) {
                acciones_jugador--
                console.log(acciones_jugador)
                Prueba_Intelecto()
                document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                document.getElementById("Potenciar").style.visibility = 'hidden'
            } else if (acciones_jugador == 0) {
                alert("Sin acciones")
                acciones_jugador = 3
                ficha_mitos++

                turno_acabado()
            }

        } else if (ubicacion_pasillo == true) {
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            if (pasillo.pistas_investigador != 0) {
                if (acciones_jugador != 0) {
                    acciones_jugador--
                    console.log(acciones_jugador)
                    Prueba_Intelecto()
                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                    document.getElementById("Potenciar").style.visibility = 'hidden'
                }
            } else if (acciones_jugador == 0) {
                alert("Sin acciones")
                acciones_jugador = 3
                ficha_mitos++

                turno_acabado()
            }
        }
        else if (ubicacion_atico == true) {
            console.log("Ubicacion atico Investigar sin pont")
            if (atico.pistas_investigador != 0) {
                if (acciones_jugador != 0) {
                    acciones_jugador--
                    // console.log(acciones_jugador)
                    // console.log("Haciendo la prueba")
                    Prueba_Intelecto()
                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                    document.getElementById("Potenciar").style.visibility = 'hidden'
                } else if (acciones_jugador == 0) {
                    alert("Sin acciones")
                    acciones_jugador = 3
                    ficha_mitos++

                    turno_acabado()
                }
            } else if (atico.pistas_investigador == 0) {
                document.getElementById("Investigar").disabled = true
                document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                document.getElementById("Potenciar").style.visibility = 'hidden'
            }
        } else if (ubicacion_sotano == true) {
            if (sotano.pistas_investigador != 0) {
                if (acciones_jugador != 0) {
                    acciones_jugador--
                    Prueba_Intelecto()
                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                    document.getElementById("Potenciar").style.visibility = 'hidden'
                } else if (acciones_jugador == 0) {
                    alert("Sin acciones")
                    acciones_jugador = 3
                    ficha_mitos++

                    turno_acabado()
                }
            }
        }
    })

    document.getElementById("Potenciar").addEventListener("click", () => {
        if (ubicacion_estudio == true) {
            if (estudio.pistas_investigador != 0) {
                console.log("Ubicacion Estudio")
                Investigar_Lugar_Estudio()
            } else if (estudio.pistas_investigador == 0) {
                ubicacion_pasillo == true
                ubicacion_estudio == false
                return [ubicacion_pasillo = true, ubicacion_estudio = false]
            }
        } else if (ubicacion_pasillo == true) {
            console.log("Ubicacion Pasillo")
            Investigar_Lugar_Pasillo()
        } else if (ubicacion_atico == true) {
            Investigar_Lugar_Atico()
        } else if (ubicacion_sotano == true) {
            Investigar_Lugar_Sotano()
        }

    })

}