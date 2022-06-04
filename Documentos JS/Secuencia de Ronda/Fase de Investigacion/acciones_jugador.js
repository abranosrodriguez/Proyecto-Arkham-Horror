function acciones_Jugador(acciones_jugador) {
    document.getElementById("suministros").addEventListener("click", () => {
        if (acciones_jugador != 0) {
            sumarSuministrosRoland()
            acciones_jugador--
        } else if (acciones_jugador == 0) {
            alert("SinAcciones")
        }

    })

    document.getElementById("zona_jugador_robar_carta").addEventListener("click", () => {
        if (acciones_jugador != 0) {
            robar_carta()
            acciones_jugador--
            anadir_carta_robada_graficamente()
        } else if (acciones_jugador == 0) {
            alert("Sin acciones")
        }
    })

}