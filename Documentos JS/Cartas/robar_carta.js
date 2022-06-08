function robar_carta() {
    for (i = 0; i < mazo_cartas.length; i++) {
        numero_aleatorio = Math.round(Math.random() * (i - 0))  // Sacaremos un numero aleatorio
    }
    carta_robada = (mazo_cartas[numero_aleatorio])  // Donde el numero aleatorio será la carta que vamos a robar del mazo
    carta_nueva_mano(carta_robada, mazo_cartas) // Funcion para añadirla a la mano
}