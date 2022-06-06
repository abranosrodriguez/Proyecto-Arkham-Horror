function datos_mazo() {
    grupo_apoyo = Datos_Cartas_Apoyo()
    grupo_evento = Datos_Cartas_Evento()
    grupo_habilidad = Datos_Cartas_Habilidad()

    // Debilidades_Basica
    grupo_debilidades_traiciones_basicas = Datos_Cartas_Debilidad_Basica_Traicion()
    grupo_debilidades_enemigos_basicas = Datos_Cartas_Debilidad_Basica_Enemigo()

    mazo_debilidades(grupo_debilidades_traiciones_basicas, grupo_debilidades_enemigos_basicas)
    carta_debilidad = robar_carta_debilidad()
    // console.log(carta_debilidad)

    mazo(grupo_apoyo, grupo_evento, grupo_habilidad, carta_debilidad)
}