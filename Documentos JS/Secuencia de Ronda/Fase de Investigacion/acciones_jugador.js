function acciones_Jugador(acciones_jugador) {

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
        // jugar_cartas()
        if (ubicacion_estudio = true) {
            actualizar_dificultad_estudio()
        }
        for (let i = 0; i < cartas_mano.length; i++) {
            if (cartas_mano[i].icono_intelecto >= 1) {
                console.log(cartas_mano[i])
            }
        }

    })

    document.getElementById("Sin_Potenciar").addEventListener("click", () => {
        Prueba_Intelecto()
        document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
    })

}