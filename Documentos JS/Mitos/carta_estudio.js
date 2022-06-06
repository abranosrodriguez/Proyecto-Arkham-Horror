function carta_estudio() {
    function carta_imagen_estudio() {
        clase_carta = document.getElementsByClassName("lugares_cartas")
        //console.log(clase_carta[4])
        clase_carta[4].src = ("Imagenes/Capitulo 1/Escenario/1_escenario_trasero.png")
    }

    setTimeout(carta_imagen_estudio, 3000)
}