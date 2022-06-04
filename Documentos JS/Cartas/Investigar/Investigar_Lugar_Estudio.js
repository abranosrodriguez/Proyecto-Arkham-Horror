function Investigar_Lugar_Estudio() {
    if (estudio.pistas_investigador != 0) {

        investigar = prompt(`Nombre del Lugar: ${estudio.nombre} \nNumero de pistas en el lugar: ${estudio.pistas_investigador} \nQuieres usar alguna carta para potenciarte? Si | No | Comprobar`)

        if (investigar == "no" || investigar == "no") {
            Prueba_Intelecto()

        } else if (investigar == "si" || investigar == "Si") {
            carta_usuario_usar = prompt("Dame un nombre de la carta")
            for (i = 0; i < cartas_mano.length; i++) {
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

                }
            }


        } else if (investigar == "comprobar" || investigar == "Comprobar") {
            for (i = 0; i < cartas_mano.length; i++) {
                if (cartas_mano[i].icono_intelecto >= 1) {
                    alert(`Nombre carta: ${cartas_mano[i].nombre} \nIntelecto: ${cartas_mano[i].icono_intelecto}`)
                } else if (cartas_mano[i].icono_comodin >= 1) {
                    alert(`Nombre carta: ${cartas_mano[i].nombre} \nComodin: ${cartas_mano[i].icono_comodin}`)
                }

                // alert(`Escoge una carta: \n${JSON.stringify(cartas_mano[i])}`)
            }


        }
    } else {
        return [ubicacion_pasillo = true, ubicacion_estudio = false]
    }
}
//\nEl numero de pistal total: ${carta_lugar_revelado_estudio.pistas_investigador}