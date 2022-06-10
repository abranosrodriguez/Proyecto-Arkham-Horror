function quitar_carta_azar_mano() {
    // Funcion para cuando el usuario le toque el plan 1b, si escogió quitar una carta aleatoria de mano en vez de 2 puntos de horror
    for (i = 0; i < cartas_mano.length; i++) {
        numero_aleatorio = Math.round(Math.random() * (i - 0))          // Nos dará un número aleatorio del total de las cartas
    }
    carta_eliminada = (cartas_mano[numero_aleatorio])                   // Esta será la carta a eliminar
    nombre_carta = carta_eliminada.nombre
    for (j = 0; j < cartas_mano.length; j++) {
        if (nombre_carta === cartas_mano[j].nombre) {                   // Comprobamos si es la misma carta
            carta_para_descartar = cartas_mano.indexOf(cartas_mano[j])  // Buscamos la carta
            cartas_descartadas.push(cartas_mano[j])                         // Metemos la carta en la zona de descartadas
            if (carta_para_descartar > -1) {
                cartas_mano.splice(carta_para_descartar, 1)                 // Eliminamos la carta de la mano
            }
            eliminar_carta_graficamente(nombre_carta)                       // Eliminamos la carta graficamente de la mano
            anadir_carta_descarte_graficamente()                            // Añadimos la imagen de la carta a la zona de descarte

        }
    }

}