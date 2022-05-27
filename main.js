function main() {
    //Datos del mazo donde están las 3 clases de cartas: [ Apoyo | Evento | Habilidad ]
    datos_mazo()
    cartas_mano = []

    RolandBanks = Datos_Roland_Banks()
    // var Carta_Automatica_45 = new Cartas_Apoyo(4, "apoyo", "automatica 45", "guardian", "1-agilidad", 0, 1, 1)
    // var Carta_Entrenamiento_fisico = new Cartas_Apoyo(2, "apoyo", "Entrenamiento Fisico", "Guardian", "1 Cabenza, 1 puño", false, false, 2)
    // var Carta_Una_Prueba = new Cartas_Evento(1, "evento", "Una Prueba", "Guardia", "2 libros", true, "a")
    // var Carta_Agallas = new Cartas_Habilidad(0, "Habilidad", "Agallas", "Neutral", "2 cabezas", 1, "aaaaaa")
    // console.log(Carta_Automatica_45, Carta_Entrenamiento_fisico, Carta_Una_Prueba, Carta_Agallas)
    console.log(
        "Fase Investigacion" + "\n     3 Acciones" + "\nFase de Enemigo" + "\nFase de Mantenimiento" + "\nFase de Mitos"
    )
    console.log(RolandBanks)

    acciones_jugador(RolandBanks)
    Datos_Cartas_Lugares_Descubiertos()

    pruebas_prompt()

    //Nos permitirá robar la carta
    //robar_carta()


}
main()