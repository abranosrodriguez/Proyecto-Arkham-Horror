function añadir_graficamente_pasillo_sotano_atico() {
    function cartas_pasillo_sotano_atico() {
        clase_pasillo = document.getElementsByClassName("lugares_cartas")
        clase_sotano = document.getElementsByClassName("lugares_cartas")
        clase_atico = document.getElementsByClassName("lugares_cartas")
        clase_salita = document.getElementsByClassName("lugares_cartas")
        //console.log(clase_carta[4])
        clase_atico[1].src = ("Imagenes/Capitulo 1/Escenario/5_salita.png")
        clase_atico[3].src = ("Imagenes/Capitulo 1/Escenario/3_atico.png")
        clase_pasillo[4].src = ("Imagenes/Capitulo 1/Escenario/2_pasillo.png")
        clase_sotano[5].src = ("Imagenes/Capitulo 1/Escenario/4_sotano.png")

        acto_1a = document.getElementById("imagen_historia_acto")
        acto_1a.src = ("Imagenes/Capitulo 1/Acto/encuentro_2.jpg")
    }

    setTimeout(cartas_pasillo_sotano_atico, 3000)
}