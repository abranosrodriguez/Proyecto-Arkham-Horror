function main() {
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
    $("#Cuenta_Suministros").html(RolandBanks.suministros)

    // console.log(
    //     "Fase Investigacion" + "\n     3 Acciones" + "\nFase de Enemigo" + "\nFase de Mantenimiento" + "\nFase de Mitos"
    // )
    // console.log(RolandBanks)



    //pruebas_prompt()


    acciones_Jugador(acciones_jugador)

}
main()