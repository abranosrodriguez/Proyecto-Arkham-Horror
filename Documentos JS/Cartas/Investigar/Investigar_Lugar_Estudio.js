function Investigar_Lugar_Estudio() {
    if (estudio.pistas_investigador != 0) {

        // investigar = prompt(`Nombre del Lugar: ${estudio.nombre} \nNumero de pistas en el lugar: ${estudio.pistas_investigador} \nQuieres usar alguna carta para potenciarte? Si | No | Comprobar`)

        // if (investigar == "no" || investigar == "no") {
        //     Prueba_Intelecto()

        // } else if (investigar == "si" || investigar == "Si") {
        carta_usuario_usar = prompt("Dame un nombre de la carta")
        nombre_carta_id = carta_usuario_usar
        for (i = 0; i < cartas_mano.length; i++) {
            if (cartas_mano[i].icono_intelecto >= 1) {
                // imagen_carta = (cartas_mano[i].imagen)
                if (carta_usuario_usar == cartas_mano[i].nombre) {
                    carta_para_descartar = cartas_mano.indexOf(cartas_mano[i])
                    cartas_descartadas.push(cartas_mano[i])
                    intelecto_carta = (cartas_mano[i].icono_intelecto)
                    RolandBanks.sumar_Intelecto(intelecto_carta)
                    Prueba_Intelecto()

                    if (carta_para_descartar > -1) {
                        cartas_mano.splice(carta_para_descartar, 1)
                    }
                    RolandBanks.restar_Intelecto_prueba_Anterior(intelecto_carta)


                    eliminar_carta_graficamente(nombre_carta_id)
                    anadir_carta_descarte_graficamente()
                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                    document.getElementById("Potenciar").style.visibility = 'hidden'

                    acciones_jugador--
                }

            } else if (cartas_mano[i].icono_comodin >= 1) {
                if (carta_usuario_usar == cartas_mano[i].nombre) {
                    // imagen_carta = (cartas_mano[i].imagen) Por si acaso dentro de añadir carta
                    carta_para_descartar = cartas_mano.indexOf(cartas_mano[i])
                    cartas_descartadas.push(cartas_mano[i])
                    comodin_carta = (cartas_mano[i].icono_comodin)
                    RolandBanks.sumar_Intelecto(comodin_carta)
                    Prueba_Intelecto()

                    if (carta_para_descartar > -1) {
                        cartas_mano.splice(carta_para_descartar, 1)
                    }
                    RolandBanks.restar_Intelecto_prueba_Anterior(comodin_carta)

                    //Eliminanos las cartas de la mano y pasa a la zona de descarte
                    anadir_carta_descarte_graficamente()
                    eliminar_carta_graficamente(nombre_carta_id)

                    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
                    document.getElementById("Potenciar").style.visibility = 'hidden'

                    acciones_jugador--
                }
            }

        }



        // } else if (investigar == "comprobar" || investigar == "Comprobar") {
        //     for (i = 0; i < cartas_mano.length; i++) {
        //         if (cartas_mano[i].icono_intelecto >= 1) {
        //             alert(`Nombre carta: ${cartas_mano[i].nombre} \nIntelecto: ${cartas_mano[i].icono_intelecto}`)
        //         } else if (cartas_mano[i].icono_comodin >= 1) {
        //             alert(`Nombre carta: ${cartas_mano[i].nombre} \nComodin: ${cartas_mano[i].icono_comodin}`)
        //         }

        //         // alert(`Escoge una carta: \n${JSON.stringify(cartas_mano[i])}`)
        //     }


        // }
    } // else if (estudio.pistas_investigador == 0) {
    //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    //     return [ubicacion_pasillo = true, ubicacion_estudio = false]
    // }
}
//\nEl numero de pistal total: ${carta_lugar_revelado_estudio.pistas_investigador}