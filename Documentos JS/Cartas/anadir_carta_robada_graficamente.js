function anadir_carta_robada_graficamente() {
    newDiv = document.createElement('div')
    document.getElementById("Tablero_Cartas_Jugador_Mano").appendChild(newDiv)
    newDiv.classList.add("Cartas")

    var img = document.createElement("img")
    buscador = -1
    console.log()
    img.src = (cartas_mano.at(buscador).imagen)

    img.classList.add("Cartas_Mano")
    for (i = 0; i < cartas_mano.length; i++) {
        // img.src = (cartas_mano[i].imagen)
        // console.log(img.src)
        nombre_carta_id = (cartas_mano[i].nombre)
        // console.log("--------------------------")
        // console.log(nombre_carta_id)
        img.setAttribute("id", nombre_carta_id)
        document.getElementsByClassName("Cartas")[i].appendChild(img)
    }
}