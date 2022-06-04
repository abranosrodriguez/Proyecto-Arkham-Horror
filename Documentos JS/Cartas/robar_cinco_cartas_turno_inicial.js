function robar_cinco_cartas_turno_inicial() {
    let i = 0
    while (i < 5) {
        robar_carta()
        i++
    }
    for (i = 0; i < cartas_mano.length; i++) {

        if (cartas_mano[i].tipo == "Traicion" || cartas_mano[i].tipo == "Debilidad Basica") {
            robar_carta()
            console.log()
            volver_al_mazo = cartas_mano.indexOf(cartas_mano[i])
            mazo_cartas.push(cartas_mano[i])

            console.log("Se robo carta de Debilidad o Traicion, volviendo al mazo")
            // console.log(volver_al_mazo)
            if (volver_al_mazo > -1) {
                cartas_mano.splice(volver_al_mazo, 1)
            }

        }
    }
    // Grafico Muestra las 5 Cartas para el usuario
    for (i = 0; i < cartas_mano.length; i++) {
        //Creamos el div
        newDiv = document.createElement('div')
        document.getElementById("Tablero_Cartas_Jugador_Mano").appendChild(newDiv)
        //Le añadimos la clase al div
        newDiv.classList.add("Cartas")

        //Creamos la img
        var img = document.createElement("img")
        img.src = (cartas_mano[i].imagen)
        //Le añadimos la clase para el css
        img.classList.add("Cartas_Mano")
        //Lo juntamos
        document.getElementsByClassName("Cartas")[i].appendChild(img)


    }
}