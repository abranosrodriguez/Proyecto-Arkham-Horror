function robar_carta() {
    for (i = 0; i < mazo_cartas.length; i++) {
        numero_aleatorio = Math.round(Math.random() * (i - 0))
    }
    //Sacamos una carta aleatoria del mazo
    carta_robada = (mazo_cartas[numero_aleatorio])
    // console.log(carta_robada)

    carta_nueva_mano(carta_robada, mazo_cartas)

    // console.log(carta_robada)
}