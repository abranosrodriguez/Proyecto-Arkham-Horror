function carta_pasillo() {
    function carta_imagen_pasillo() {
        clase_carta = document.getElementsByClassName("lugares_cartas")
        //console.log(clase_carta[4])
        clase_carta[4].src = ("Imagenes/Capitulo 1/Escenario/2_pasillo_trasero.png")
        if (pasillo.pistas_investigador == 0) {
            document.getElementById("Investigar").disabled = true
        }
        actualizar_datos_sala_pasillo()
    }

    setTimeout(carta_imagen_pasillo, 3000)
}