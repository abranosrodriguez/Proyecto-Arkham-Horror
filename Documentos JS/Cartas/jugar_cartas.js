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
        nombre_carta_id = jugar_carta
        for (i = 0; i < cartas_mano.length; i++) {
            // console.log(cartas_mano[i].nombre)
            datos_carta = cartas_mano[i]
            if (jugar_carta === cartas_mano[i].nombre) {

                if (datos_carta.tipo_carta == "Apoyo") {
                    if (RolandBanks.suministros >= cartas_mano[i].coste) {
                        if (datos_carta.tipo_espacio == "Mano") {
                            RolandBanks.restar_Suministros(cartas_mano[i].coste)
                            jugar_carta = cartas_mano.indexOf(cartas_mano[i])
                            cartas_mesa_jugador.push(cartas_mano[i])

                            if (jugar_carta > -1) {
                                cartas_mano.splice(jugar_carta, 1)
                                i--
                            }
                            eliminar_carta_graficamente(nombre_carta_id)
                            añadir_graficamente_carta_a_la_mesa_apoyo()

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
