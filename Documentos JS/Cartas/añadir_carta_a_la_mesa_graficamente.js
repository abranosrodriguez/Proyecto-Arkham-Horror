function añadir_graficamente_carta_a_la_mesa_apoyo(imagen) {

    if (mano_1 == true) {
        mano_1 = false
        mano_2 = true

        let ubicacion_carta_1 = document.getElementById("Mano 1")
        let buscador = -1
        ubicacion_carta_1.src = (cartas_mesa_jugador.at(buscador).imagen)
    } else if (mano_2 == true) {
        mano_2 = false
        mano_1 = false
        mano_3 = true
        let ubicacion_carta_1 = document.getElementById("Mano 2")
        let buscador = -1
        ubicacion_carta_1.src = (cartas_mesa_jugador.at(buscador).imagen)
    }
    console.log("plapaal")
    // console.log(ubicacion_carta_1.src)


    // console.log(ubicacion_carta_1.src)
    // console.log(carta_para_poner)

}