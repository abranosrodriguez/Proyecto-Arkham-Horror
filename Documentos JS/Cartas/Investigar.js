function Investigar_Lugar() {
    // for (i = 0; i < grupo_lugares_revelados.length; i++) {
    //     console.log(grupo_lugares_revelados[i])

    // }
    estudio = grupo_lugares_revelados[0]
    pasillo = grupo_lugares_revelados[1]
    atico = grupo_lugares_revelados[2]
    sotano = grupo_lugares_revelados[3]
    console.log(estudio)
    ubicacion_pasillo = true

    if (ubicacion_pasillo == true) {
        investigar = prompt(`Nombre del Lugar: ${estudio.nombre} \nNumero de pistas en el lugar: ${estudio.pistas_investigador} \nQuieres usar alguna carta para potenciarte? Si | No | Comprobar`)
        if (investigar == "no" || investigar == "no") {
            Prueba_Intelecto()

        } else if (investigar == "si" || investigar == "Si") {
            carta_usuario_usar = prompt("Dame un nombre de la carta")
            for (i = 0; i < cartas_mano.length; i++) {
                if (carta_usuario_usar == cartas_mano[i].nombre) {
                    carta_para_descartar = cartas_mano.indexOf(cartas_mano[i])

                    cartas_descartadas.push(cartas_mano[i])
                    console.log("Cartas Descartadas:")
                    console.log(cartas_descartadas)
                    console.log("                                   ")
                    console.log("Cartas Mano:")
                    console.log(cartas_mano[i])

                    if (carta_para_descartar > -1) {
                        cartas_mano.splice(carta_para_descartar, 1)
                    }
                    // RolandBanks.sumar_Intelecto(cartas_mano[i].icono_intelecto)
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
    }
}
//\nEl numero de pistal total: ${carta_lugar_revelado_estudio.pistas_investigador}