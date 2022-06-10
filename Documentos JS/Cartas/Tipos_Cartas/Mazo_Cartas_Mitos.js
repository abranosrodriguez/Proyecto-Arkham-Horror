function datos_mazo_mitos() {
    grupo_cartas_mito_traiciones = Datos_Cartas_Mitos_Traiciones() // Cogemos las cartas de traiciones de mitos
    grupo_cartas_mito_enemigos = Datos_Cartas_Mitos_Enemigos() // Cogemos las carta de mitos de enemigos
    mazo_mitos = grupo_cartas_mito_enemigos.concat(grupo_cartas_mito_traiciones) // Concatenamos las cartas para que estea en el mazo de mitos
}