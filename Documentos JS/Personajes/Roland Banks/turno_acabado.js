function turno_acabado() {
    robar_carta()
    anadir_carta_robada_graficamente()
    sumarSuministrosRoland()
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
    console.log(cartas_mano)
    for (i = 0; i < cartas_mano.length; i++) {
        if (cartas_mano.length >= 9) {
            console.log("Solo Puede Tener 8 cartas en la mano")
        }
    }
}