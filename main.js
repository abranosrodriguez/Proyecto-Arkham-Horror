function main() {
    Datos_Personajes()
    var Carta_Automatica_45 = new Cartas_Apoyo(4, "apoyo", "automatica 45", "guardian", "1-agilidad", 0, 1, 1)
    var Carta_Entrenamiento_fisico = new Cartas_Apoyo(2, "apoyo", "Entrenamiento Fisico", "Guardian", "1 Cabenza, 1 puño", false, false, 2)
    var Carta_Una_Prueba = new Cartas_Evento(1, "evento", "Una Prueba", "Guardia", "2 libros", true, "a")
    var Carta_Agallas = new Cartas_Habilidad(0, "Habilidad", "Agallas", "Neutral", "2 cabezas", 1, "aaaaaa")
    console.log(Carta_Automatica_45, Carta_Entrenamiento_fisico, Carta_Una_Prueba, Carta_Agallas)
}
main()