function datos_mazo() {
    grupo_apoyo = Datos_Cartas_Apoyo()                                              // Cogemos las cartas de apoyo
    grupo_evento = Datos_Cartas_Evento()                                            // Cogemos las cartas de evento
    grupo_habilidad = Datos_Cartas_Habilidad()                                      // Cogemos las cartas de habilidad

    // Debilidades_Basica
    grupo_debilidades_traiciones_basicas = Datos_Cartas_Debilidad_Basica_Traicion() // Cogemos las cartas de debilidades traiciones
    grupo_debilidades_enemigos_basicas = Datos_Cartas_Debilidad_Basica_Enemigo()    // Cogemos las cartas de debilidades de enemigo

    mazo_debilidades(grupo_debilidades_traiciones_basicas, grupo_debilidades_enemigos_basicas) //Metemos los datos dentro de los mazos de debilidades
    carta_debilidad = robar_carta_debilidad()   // Robamos carta de debilidad

    mazo(grupo_apoyo, grupo_evento, grupo_habilidad, carta_debilidad)               // Metemos las cartas correspondientes de evento, habilidad y apoyo al mazo
}