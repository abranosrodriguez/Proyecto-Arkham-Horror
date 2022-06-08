function sacar_ficha_facil() {
    // Funcion que nos permitirá sacar una ficha cuando el usuario haga una prueba
    ficha_calavera = 0  // Fichas
    ficha_acolito = 1
    ficha_ataud = 2
    ficha_tentaculos = 999
    if (ubicacion_estudio == true) {
        estrella = -(estudio.pistas_investigador)   // Si el usuario está en el estudio estrella es igual al numero de pistas
    } else if (ubicacion_atico == true) {
        estrella = -(atico.pistas_investigador) // Si el usuario está en el atico estrella es igual al numero de pistas
    } else if (ubicacion_sotano == true) {
        estrella = -(sotano.pistas_investigador)    // Si el usuario está en el sotano estrella es igual al numero de pistas
    }

    // Este array sería como la bolsa donde está todas las fichas
    fichas_facil = [-1, -1, 0, 0, 0, 1, 1, 1, 2, 2, ficha_calavera, ficha_calavera, ficha_acolito, ficha_ataud, ficha_tentaculos, estrella]


    for (i = 0; i < fichas_facil.length; i++) {
        numero_aleatorio_facil = Math.round(Math.random() * (i - 0))    // Sacamos un numero aleatorio del array
    }
    ficha_sacada_facil = (fichas_facil[numero_aleatorio_facil]) // La ficha sacada será la de la posicion del numero aleatorio
    return ficha_sacada_facil // Devolvemos la ficha que hemos sacado
}
