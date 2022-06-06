function carta_nueva_mano(carta_robada, mazo_cartas) {

    cartas_mano.push(carta_robada)
    // console.log(cartas_mano)
    // console.log("Cartas Mano " + cartas_mano)

    carta_a_eliminar = mazo_cartas.indexOf(carta_robada)
    if (carta_a_eliminar > -1) {
        mazo_cartas.splice(carta_a_eliminar, 1)
    }
}