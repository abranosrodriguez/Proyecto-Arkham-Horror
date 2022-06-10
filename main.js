function main() {
    cambio_imagen_roland()  // Cuando el usuario pinche en la imagen

    console_log_nombres()           //Traduccion de los nombres


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

    //Seccion de mano
    mano_1 = true
    mano_2 = false
    mano_3 = false

    estudio = grupo_lugares_revelados[0]
    pasillo = grupo_lugares_revelados[1]
    atico = grupo_lugares_revelados[2]
    sotano = grupo_lugares_revelados[3]

    $("#Cuenta_Suministros").html(RolandBanks.suministros)
    $("#Pistas_Personaje").html(RolandBanks.pistas)
    $("#Vida_Personaje").html(RolandBanks.vida)
    $("#Cordura_Personaje").html(RolandBanks.cordura)
    document.getElementById("Sin_Potenciar").style.visibility = 'hidden'
    document.getElementById("Potenciar").style.visibility = 'hidden'
    document.getElementById("Moverse").style.visibility = 'hidden'

    fase_1 = true
    fase_2 = false
    fase_3 = false

    //pruebas_prompt()

    acciones_Jugador(acciones_jugador)
}
main()