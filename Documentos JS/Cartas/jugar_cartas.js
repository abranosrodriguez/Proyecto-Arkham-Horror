function jugar_cartas() {

    if (mano_3 == true) {
        let eliminar_una_carta_mano = prompt("Quieres eliminar una carta de la mesa co el hueco de la mano: Si | No?")
        if (eliminar_una_carta_mano == "si" || eliminar_una_carta_mano == "Si") {
            let numero_mano = prompt("Que hueco queires: 1 | 2")
            if (numero_mano == 1) {
                mano_1 = true
                mano_2 = false
                mano_3 = false
                jugar_cartas()
                mano_3 = true
            } else if (numero_mano == 2) {
                mano_2 = true
                mano_1 = false
                mano_3 = false
                jugar_cartas()
                mano_3 = true
            }
        } else if (eliminar_una_carta_mano == "no" || eliminar_una_carta_mano == "No") {
            console.log("No se jugo ninguna carta")
        }
    } else {
        jugar_carta = prompt("Dame el nombre de una carta")

        for (i = 0; i < cartas_mano.length; i++) {
            // console.log(cartas_mano[i].nombre)
            datos_carta = cartas_mano[i]
            if (jugar_carta === cartas_mano[i].nombre) {
                if (datos_carta.tipo_carta == "Apoyo") {
                    if (RolandBanks.suministros >= cartas_mano[i].coste) {
                        if (datos_carta.tipo_espacio == "Mano") {
                            RolandBanks.restar_Suministros(cartas_mano[i].coste)
                            carta_a_jugar = cartas_mano.indexOf(datos_carta)
                            cartas_mesa_jugador.push(datos_carta)

                            console.log("11111111111111111111111")
                            console.log(datos_carta)
                            if (carta_a_jugar > -1) {
                                cartas_mano.splice(carta_a_jugar, 1)
                            }
                            console.log("0000000000000000000000")
                            console.log(datos_carta.tipo_espacio)
                            añadir_graficamente_carta_a_la_mesa_apoyo()
                            eliminar_carta_graficamente(jugar_carta)
                        }
                    }

                } else {
                    alert("Suministros insuficientes")
                }
            }
            $("#Cuenta_Suministros").html(RolandBanks.suministros)

        }
    }
}
