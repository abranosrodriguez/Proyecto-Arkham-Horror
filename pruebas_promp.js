function pruebas_prompt() {
    acciones_jugador = 3
    robar_cinco_cartas = true
    while (incio != 4) {
        if (acciones_jugador == 0) {
            alert("Fase de Enemigos \n Los enemigos con Cazador se mueven \n Cada Enemigo enfrentado ataca")
            alert("Fase de Mantenimiento")
            alert("Fase de Mitos")
            acciones_jugador = 3
        } else {
            if (robar_cinco_cartas == true) {
                robar_cinco_cartas_turno_inicial()
                robar_cinco_cartas = false

            } else if (robar_cinco_cartas == false) {
                var incio = prompt(`Turnos Restantes: ${acciones_jugador} \nEstas en tu turno, que quieres hacer? \n1 - Robar Carta \n2 - Suministro \n3 - Comprobar Cartas de Mano \n4 - Salir`)
                if (incio == 1) {
                    robar_carta()
                    acciones_jugador--
                } else if (incio == 2) {
                    var suministros = prompt("1 - Para robar suministros \n2 - Para quitar suministros \n3 - Comprobar Suministros")
                    if (suministros == 1) {
                        RolandBanks.sumar_Suministros()
                        acciones_jugador--
                    } else if (suministros == 2) {
                        RolandBanks.restar_Suministros()
                        acciones_jugador--
                    } else if (suministros == 3) {
                        alert(RolandBanks.suministros)
                    }
                } else if (incio == 3) {
                    for (i = 0; i < cartas_mano.length; i++) {
                        alert(JSON.stringify(cartas_mano[i], null, 4));
                    }
                    console.log(mazo_cartas)

                }
            }
        }
    }
}