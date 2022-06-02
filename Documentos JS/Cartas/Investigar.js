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
        investigar = prompt(`Nombre del Lugar: ${estudio.nombre} \nNumero de pistas en el lugar: ${estudio.pistas_investigador} \nQuieres usar alguna carta para potenciarte? Si | No`)
        if (investigar == "no" || investigar == "no") {
            ficha = sacar_ficha_facil()
            resultado_prueba = (RolandBanks.intelecto - ficha)
            console.log("Dificultad:" + estudio.dificultad)
            console.log("Intelecto: " + RolandBanks.intelecto)
            console.log("Ficha: " + ficha)
            console.log("Resultado: " + resultado_prueba)

            if (estudio.dificultad <= resultado_prueba) {
                alert("Ganas")
            } else {
                alert("Pierdes")
            }
        } else if (investigar == "si" || investigar == "Si") {
            for (i = 0; i < cartas_mano.length; i++) {
                alert(`Escoge una carta: \n${JSON.stringify(cartas_mano[i])}`)
            }


        }
    }
}
//\nEl numero de pistal total: ${carta_lugar_revelado_estudio.pistas_investigador}