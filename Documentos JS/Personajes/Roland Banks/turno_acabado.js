function turno_acabado() {
    array_url = []

    while (cartas_mano.length >= 8) {
        eliminar_carta = prompt("Dame el nombre de una carta")
        nombre_carta_id = eliminar_carta
        for (i = 0; i < cartas_mano.length; i++) {
            enlace = cartas_mano[i].imagen
            if (eliminar_carta === cartas_mano[i].nombre) {

                eliminar_carta = cartas_mano.indexOf(cartas_mano[i])
                cartas_descartadas.push(cartas_mano[i])
                if (eliminar_carta > -1) {
                    cartas_mano.splice(eliminar_carta, 1)
                    i--
                }

                carta_a_eliminar = document.getElementById(nombre_carta_id)
                carta_a_eliminar.remove()
                console.log("Tamaño mano")
                console.log(cartas_mano.length)

            }

        }
    }
    robar_carta()
    anadir_carta_robada_graficamente()
    sumarSuministrosRoland()
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
    console.log(cartas_mano)

}