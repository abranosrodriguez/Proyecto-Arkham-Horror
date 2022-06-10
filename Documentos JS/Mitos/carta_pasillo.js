function carta_pasillo() {
    function carta_imagen_pasillo() {
        clase_carta = document.getElementsByClassName("lugares_cartas")                 // Cogemos la imagen que queremos
        clase_carta[4].src = ("Imagenes/Capitulo 1/Escenario/2_pasillo_trasero.png")    // Cambiamos la imagen del pasillo a la parte trasera donde está la dificultad y el numero de pistas
        if (pasillo.pistas_investigador == 0) {                                         // Si la pistas de investigador de la ubicacion es 0
            document.getElementById("Investigar").disabled = true                       // Desactiva investigar
        }
        actualizar_datos_sala_pasillo()                                                 // Actualizamos los datos del pasillo
    }

    setTimeout(carta_imagen_pasillo, 3000)
}