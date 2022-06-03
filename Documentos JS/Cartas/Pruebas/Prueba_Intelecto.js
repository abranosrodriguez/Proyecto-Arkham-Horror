function Prueba_Intelecto() {
    ficha = sacar_ficha_facil()
    resultado_prueba = (RolandBanks.intelecto - ficha)
    console.log("Dificultad:" + estudio.dificultad)
    console.log("Intelecto: " + RolandBanks.intelecto)
    console.log("Ficha: " + ficha)
    console.log("Resultado: " + resultado_prueba)

    if (estudio.dificultad <= resultado_prueba) {
        alert("Ganas")
    } else {
        alert("Pierdes")
    }
}