function quitar_carta_azar_mano() {
    for (i = 0; i < cartas_mano.length; i++) {
        numero_aleatorio = Math.round(Math.random() * (i - 0))
    }
    //Sacamos una carta aleatoria del mazo
    carta_eliminada = (cartas_mano[numero_aleatorio])
    nombre_carta = carta_eliminada.nombre
    for (j = 0; j < cartas_mano.length; j++) {
        if (nombre_carta === cartas_mano[j].nombre) {
            // carta_eliminada = cartas_mano.indexOf(cartas_mano[j])
            console.log("Carta descartada")
            console.log(carta_eliminada.imagen)
            carta_para_descartar = cartas_mano.indexOf(cartas_mano[j])
            cartas_descartadas.push(cartas_mano[j])
            if (carta_para_descartar > -1) {
                cartas_mano.splice(carta_para_descartar, 1)
            }
            eliminar_carta_graficamente(nombre_carta)
            anadir_carta_descarte_graficamente()

        }
    }

}