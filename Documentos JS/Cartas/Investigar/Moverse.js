function moverse_tablero() {
    if (ubicacion_pasillo == true) {
        moverse = prompt("Donde te quieres mover: Atico| Sotano")
        if (moverse == "sotano" || moverse == "Sotano") {

            ubicacion_pasillo = false
            ubicacion_sotano = true
            acciones_jugador--
            RolandBanks.obligado_Sotano()
            actualizar_datos_sala_sotano()
            document.getElementById("Investigar").disabled = false
            clase_carta = document.getElementsByClassName("lugares_cartas")
            clase_carta[5].src = ("Imagenes/Capitulo 1/Escenario/4_sotano_trasero.png")
            return [ubicacion_pasillo = false, ubicacion_sotano = true, moverse]
        } else if (moverse == "atico" || moverse == "Atico") {

            ubicacion_pasillo = false
            ubicacion_atico = true
            acciones_jugador--
            RolandBanks.obligado_Atico()
            actualizar_datos_sala_atico()

            document.getElementById("Investigar").disabled = false
            clase_carta = document.getElementsByClassName("lugares_cartas")
            clase_carta[3].src = ("Imagenes/Capitulo 1/Escenario/3_atico_trasero.png")
            return [ubicacion_pasillo = false, ubicacion_atico = true]
        }
    } else if (ubicacion_atico == true || ubicacion_sotano == true) {
        alert("Moviendo al pasillo")
        document.getElementById("Investigar").disabled = false
        ubicacion_atico = false
        ubicacion_sotano = false
        ubicacion_pasillo = true
        acciones_jugador--
        actualizar_datos_sala_pasillo()
        document.getElementById("Investigar").disabled = true
        return [ubicacion_pasillo = true, ubicacion_atico = false, ubicacion_sotano = false]
    }
}