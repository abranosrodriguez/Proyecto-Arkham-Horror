function robar_carta_mitos() {
    for (i = 0; i < mazo_mitos.length; i++) {
        numero_aleatorio_m = Math.round(Math.random() * (i - 0))
    }

    carta_robada_mitos = (mazo_mitos[numero_aleatorio_m])
    console.log(carta_robada_mitos)
    carta_nueva_mano(carta_robada_mitos, mazo_mitos)

}