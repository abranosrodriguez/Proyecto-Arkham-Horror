function actualizar_datos_sala_sotano() {
    // Actualizamos los datos de sotano
    $("#Dificultad").html(sotano.dificultad)
    $("#Intelecto_Personaje").html(RolandBanks.intelecto)
    $("#Ficha_Sacada").html("")
    $("#Resultado").html("")
    $("#Pistas_Personaje").html(RolandBanks.pistas)
    $("#Vida_Personaje").html(RolandBanks.vida)
    $("#Cordura_Personaje").html(RolandBanks.cordura)
    $("#Pistas_Restantes").html(sotano.pistas_investigador)
    $("#Ubicacion_actual").html("Sotano")
}