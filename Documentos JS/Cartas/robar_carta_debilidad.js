function robar_carta_debilidad() {
    for (i = 0; i < mazo_cartas_debilidades.length; i++) {
        numero_aleatorio = Math.round(Math.random() * (i - 0))
    }

    let carta_robada_debilidad = (mazo_cartas_debilidades[numero_aleatorio])
    return carta_robada_debilidad
}