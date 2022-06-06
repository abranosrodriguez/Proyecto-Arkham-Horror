function sacar_ficha_facil() {

    ficha_calavera = 0
    ficha_acolito = 1
    ficha_ataud = 2
    ficha_tentaculos = 999
    fichas_facil = [-1, -1, 0, 0, 0, 1, 1, 1, 2, 2, ficha_calavera, ficha_calavera, ficha_acolito, ficha_ataud, ficha_tentaculos, "estrella"]
    for (i = 0; i < fichas_facil.length; i++) {
        numero_aleatorio_facil = Math.round(Math.random() * (i - 0))
    }
    ficha_sacada_facil = (fichas_facil[numero_aleatorio_facil])
    // console.log(ficha_sacada_facil)
    return ficha_sacada_facil
}
