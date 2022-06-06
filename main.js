function main() {
    //Traduccion de los nombres
    console_log_nombres()

    //Pop Up

    PopUpHistoria()
    PopUpPlan()
    PopUpActo()

    //Datos del mazo donde están las 3 clases de cartas: [ Apoyo | Evento | Habilidad ]
    datos_mazo()
    datos_mazo_mitos()
    Datos_Cartas_Lugares_Descubiertos()

    RolandBanks = Datos_Roland_Banks()

    cartas_mano = []
    cartas_descartadas = []
    cartas_mesa_jugador = []

    robar_cinco_cartas_turno_inicial()
    acciones_jugador = 3
    ficha_mitos = 0

    //Quitar despues
    carta_estudio()


    estudio = grupo_lugares_revelados[0]
    pasillo = grupo_lugares_revelados[1]
    atico = grupo_lugares_revelados[2]
    sotano = grupo_lugares_revelados[3]

    $("#Cuenta_Suministros").html(RolandBanks.suministros)
    $("#Pistas_Personaje").html(RolandBanks.pistas)
    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
    document.getElementById("Potenciar").style.visibility = 'hidden'

    // console.log(
    //     "Fase Investigacion" + "\n     3 Acciones" + "\nFase de Enemigo" + "\nFase de Mantenimiento" + "\nFase de Mitos"
    // )
    // console.log(RolandBanks)



    //pruebas_prompt()


    acciones_Jugador(acciones_jugador)

    // if (ubicacion_estudio == true) {

    //     // alert("Ubicacion estudio")
    // }
    // if (ubicacion_pasillo == true) {
    //     alert("Ubicacion pasillo")
    //     acciones_Jugador(acciones_jugador)
    // }
    // if (ubicacion_atico == true) {
    //     alert("Ubicacion Atico")
    // }
    // if (ubicacion_sotano == true) {
    //     alert("Ubicacion Sotano")
    // }

}
main()