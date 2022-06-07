function Prueba_Intelecto() {
    ficha = sacar_ficha_facil()
    resultado_prueba = (RolandBanks.intelecto - ficha)



    if (ubicacion_estudio == true) {
        console.log("Dificultad:" + estudio.dificultad)
        console.log("Intelecto: " + RolandBanks.intelecto)
        console.log("Ficha: " + ficha)
        console.log("Resultado: " + resultado_prueba)
        if (estudio.dificultad <= resultado_prueba) {
            alert("Ganas")
            // carta_lugar_revelado_estudio.restar_pistas_lugares(1)
            console.log("aaaa")
            datos_estudio = grupo_lugares_revelados[0]
            datos_estudio.restar_pistas_lugares(1)
            RolandBanks.sumar_Pistas()
            console.log(datos_estudio)
            console.log("Pistas:" + RolandBanks.pistas)
            acciones_jugador--
            actualizar_datos_bolsa_jq_estudio()
        } else {
            alert("Pierdes")
            acciones_jugador--
            actualizar_datos_bolsa_jq_estudio()
        }
    }
    if (ubicacion_pasillo == true) {
        console.log("Dificultad:" + pasillo.dificultad)
        console.log("Intelecto: " + RolandBanks.intelecto)
        console.log("Ficha: " + ficha)
        console.log("Resultado: " + resultado_prueba)
        if (pasillo.dificultad <= resultado_prueba) {
            alert("Ganas")
            // carta_lugar_revelado_pasillo.restar_pistas_lugares(1)
            console.log("Pasillo")
            datos_pasillo = grupo_lugares_revelados[1]
            datos_pasillo.restar_pistas_lugares(1)
            RolandBanks.sumar_Pistas()
            console.log(datos_pasillo)
            console.log("Pistas:" + RolandBanks.pistas)
            acciones_jugador--


        } else {
            alert("Pierdes")
            acciones_jugador--
        }
    }

    if (ubicacion_atico == true) {
        console.log("Estamo en el atico")
        console.log("Dificultad:" + atico.dificultad)
        console.log("Intelecto: " + RolandBanks.intelecto)
        console.log("Ficha: " + ficha)
        console.log("Resultado: " + resultado_prueba)
        if (atico.dificultad <= resultado_prueba) {
            alert("Ganas")
            // carta_lugar_revelado_atico.restar_pistas_lugares(1)
            console.log("atico")
            datos_atico = grupo_lugares_revelados[2]
            datos_atico.restar_pistas_lugares(1)
            RolandBanks.sumar_Pistas()
            console.log(datos_atico)
            console.log("Pistas Personaje:" + RolandBanks.pistas)
            acciones_jugador--
            actualizar_datos_bolsa_jq_atico()

        } else {
            alert("Pierdes")
            acciones_jugador--
            actualizar_datos_bolsa_jq_atico()
        }

    }

    if (ubicacion_sotano == true) {
        console.log("Dificultad:" + sotano.dificultad)
        console.log("Intelecto: " + RolandBanks.intelecto)
        console.log("Ficha: " + ficha)
        console.log("Resultado: " + resultado_prueba)
        if (sotano.dificultad <= resultado_prueba) {
            alert("Ganas")
            // carta_lugar_revelado_sotano.restar_pistas_lugares(1)
            console.log("Sotano")
            datos_sotano = grupo_lugares_revelados[3]
            datos_sotano.restar_pistas_lugares(1)
            RolandBanks.sumar_Pistas()
            console.log(datos_sotano)
            console.log("Pistas:" + RolandBanks.pistas)
            acciones_jugador--
            actualizar_datos_bolsa_jq_estudio()

        } else {
            alert("Pierdes")
            acciones_jugador--
            actualizar_datos_bolsa_jq_estudio()
        }
    }

    return ficha
}