function jugar_cartas() {
    jugar_carta = prompt("Dame el nombre de una carta")
    for (i = 0; i < cartas_mano.length; i++) {
        if (cartas_mano[i].tipo_carta == "Apoyo") {
            alert("Carta Apoyo")
            if (jugar_carta == cartas_mano[i].nombre) {
                jugar_carta = cartas_mano.indexOf(cartas_mano[i])
                cartas_mesa_jugador.push(cartas_mano[i])


                if (jugar_carta > -1) {
                    cartas_mano.splice(jugar_carta, 1)
                }

            }
        }

        // if (cartas_mano[i].tipo_carta != "Habilidad") {



        //     if (jugar_carta == cartas_mano[i].nombre) {
        //         jugar_carta = cartas_mano.indexOf(cartas_mano[i])
        //         cartas_mesa_jugador.push(cartas_mano[i])


        //         if (jugar_carta > -1) {
        //             cartas_mano.splice(jugar_carta, 1)
        //         }

        //     }
        // }
    }
}