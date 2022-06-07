function moverse_tablero() {
    if (ubicacion_pasillo == true) {
        moverse = prompt("Donde te quieres mover: Atico| Sotano")
        if (moverse == "sotano" || moverse == "Sotano") {

            ubicacion_pasillo = false
            ubicacion_sotano = true
            acciones_jugador--
            RolandBanks.obligado_Sotano()
            actualizar_datos_sala_sotano()
            return [ubicacion_pasillo = false, ubicacion_sotano = true, moverse]
        } else if (moverse == "atico" || moverse == "Atico") {

            ubicacion_pasillo = false
            ubicacion_atico = true
            acciones_jugador--
            RolandBanks.obligado_Atico()
            actualizar_datos_sala_atico()
            return [ubicacion_pasillo = false, ubicacion_atico = true]
        }
    } else if (ubicacion_atico == true || ubicacion_sotano == true) {
        alert("Moviendo al pasillo")
        document.getElementById("Investigar").disabled = false
        ubicacion_atico = false
        ubicacion_sotano = false
        ubicacion_pasillo = true
        acciones_jugador--
        return [ubicacion_pasillo = true, ubicacion_atico = false, ubicacion_sotano = false]
    }
}