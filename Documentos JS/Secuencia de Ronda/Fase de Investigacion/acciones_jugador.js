function acciones_Jugador(acciones_jugador) {

    ubicacion_estudio = true
    ubicacion_pasillo = false
    ubicacion_atico = false
    ubicacion_sotano = false

    document.getElementById("suministros").addEventListener("click", () => {
        if (acciones_jugador != 0) {
            sumarSuministrosRoland()
            acciones_jugador--
        } else if (acciones_jugador == 0) {
            alert("Sin Acciones")
            acciones_jugador = 3
            ficha_mitos++

            turno_acabado()
        }

    })

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

    document.getElementById("Investigar").addEventListener("click", () => {
        document.getElementById("Sin_Potenciar").style.visibility = "visible"
        document.getElementById("Potenciar").style.visibility = "visible"
        // jugar_cartas()
        if (ubicacion_estudio = true) {
            console.log("Ubicacion Estudio: Investigar")
            actualizar_dificultad_estudio()
        } if (ubicacion_pasillo == true) {
            console.log("Ubicacion Pasillo: Investigar")
        }
        // for (let i = 0; i < cartas_mano.length; i++) {
        //     if (cartas_mano[i].icono_intelecto >= 1) {
        //         // console.log(cartas_mano[i])
        //     }
        // }

    })

    document.getElementById("Sin_Potenciar").addEventListener("click", () => {
        if (ubicacion_estudio == true) {
            if (estudio.pistas_investigador != 0) {
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
            } else if (estudio.pistas_investigador == 0) {
                ubicacion_pasillo == true
                ubicacion_estudio == false
            }
        } else if (ubicacion_pasillo == true) {
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
    })

    document.getElementById("Potenciar").addEventListener("click", () => {
        if (ubicacion_estudio == true) {
            if (estudio.pistas_investigador != 0) {
                console.log("Ubicacion Estudio")
                Investigar_Lugar_Estudio()
            } else if (estudio.pistas_investigador == 0) {
                ubicacion_pasillo == true
                ubicacion_estudio == false
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