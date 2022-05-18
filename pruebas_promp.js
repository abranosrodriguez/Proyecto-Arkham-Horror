function pruebas_prompt() {
    while (incio != 4) {
        var incio = prompt("Estas en tu turno, que quieres hacer? \n1 - Robar Carta \n2 - Suministro \n3 - Comprobar Cartas de Mano \n4 - Salir")
        if (incio == 1) {
            robar_carta()
        } else if (incio == 2) {
            var suministros = prompt("1 - Para robar suministros \n2 - Para quitar suministros \n3 - Comprobar Suministros")
            if (suministros == 1) {
                RolandBanks.sumar_Suministros()
            } else if (suministros == 2) {
                RolandBanks.restar_Suministros()
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