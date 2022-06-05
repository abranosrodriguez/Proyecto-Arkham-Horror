function turno_acabado() {
    robar_carta()
    anadir_carta_robada_graficamente()
    sumarSuministrosRoland()
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
    console.log(cartas_mano)
    array_url = []
    while (cartas_mano.length >= 9) {
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


    // for (i = 0; i < cartas_mano.length; i++) {
    //     numero_cartas_mano = cartas_mano.length
    //     console.log(numero_cartas_mano)
    //     if (numero_cartas_mano >= 9) {
    //         eliminar_carta = prompt("Dame le nombre de una carta")
    //         if (eliminar_carta == cartas_mano[i].nombre) {
    //             console.log("Carta a eliminar:")
    //             console.log(eliminar_carta)
    //             numero_cartas_mano--
    //         }
    //     }


    // if (cartas_mano.length >= 9) {
    //     carta_a_eliminar = prompt("Dame el nombre de la carta")
    //     carta_a_descartar = cartas_mano.indexOf(carta_a_eliminar)
    //     console.log(carta_a_descartar)
    // cartas_descartadas.push(carta_a_descartar)
    // for (let m = 0; m < cartas_descartadas.length; m++) {
    //     console.log("777777777777")
    //     console.log(cartas_descartadas)
    // }

    // console.log("Solo Puede Tener 8 cartas en la mano")

    // bb = document.getElementsByClassName("Cartas_Mano")
    // console.log(bb[i])
    // for (let j = 0; j < bb.length; j++) {
    //     console.log("----------------")
    //     console.log(bb[j])
    //     bb[j].addEventListener("click", () => {
    //         console.log(bb[j])
    //         console.log(bb[j].src)
    //         carta_a_descartar = cartas_mano.indexOf(cartas_mano[j])
    //         console.log(carta_a_descartar)
    //         console.log(cartas_mano[carta_a_descartar])
    //         descartada = (cartas_mano[carta_a_descartar])
    //         cartas_descartadas.push(descartada)
    //         // if (descartada > -1) {
    //         //     cartas_mano.splice(descartada, 1)
    //         // }
    //     })

    // }


    // }
}