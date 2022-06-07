function sacar_ficha_facil() {

    ficha_calavera = 0
    ficha_acolito = 1
    ficha_ataud = 2
    ficha_tentaculos = 999

    // if (ubicacion_estudio == true) {
    //     console.log("comprobanod ficha")
    // } else if (ubicacion_pasillo == true) {
    //     console.log("comprobando_pasillo")
    // }

    if (ubicacion_estudio == true) {
        estrella = -(estudio.pistas_investigador)
    } else if (ubicacion_atico == true) {
        estrella = -(atico.pistas_investigador)
    } else if (ubicacion_sotano == true) {
        estrella = -(sotano.pistas_investigador)
    }
    //-1, -1, 0, 0, 0, 1, 1, 1, 2, 2, ficha_calavera, ficha_calavera, ficha_acolito, ficha_ataud, ficha_tentaculos, 
    fichas_facil = [-1, -1, 0, 0, 0, 1, 1, 1, 2, 2, ficha_calavera, ficha_calavera, ficha_acolito, ficha_ataud, ficha_tentaculos, estrella]
    for (i = 0; i < fichas_facil.length; i++) {
        numero_aleatorio_facil = Math.round(Math.random() * (i - 0))
    }
    ficha_sacada_facil = (fichas_facil[numero_aleatorio_facil])
    // console.log("Ficha Sacada")
    // console.log(ficha_sacada_facil)
    return ficha_sacada_facil
}
