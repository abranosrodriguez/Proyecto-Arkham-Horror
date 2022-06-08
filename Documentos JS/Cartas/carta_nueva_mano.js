function carta_nueva_mano(carta_robada, mazo_cartas) {
    cartas_mano.push(carta_robada)  // Metemos la carta robada dentro de la mano
    carta_a_eliminar = mazo_cartas.indexOf(carta_robada)    // Buscamos la carta que hemos robado
    if (carta_a_eliminar > -1) {
        mazo_cartas.splice(carta_a_eliminar, 1) //La eliminamos del mazo
    }
}