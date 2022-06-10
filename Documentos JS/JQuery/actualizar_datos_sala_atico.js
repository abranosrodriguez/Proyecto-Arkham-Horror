function actualizar_datos_sala_atico() {
    // Actualizamos los datos del atico
    $("#Dificultad").html(atico.dificultad)
    $("#Intelecto_Personaje").html(RolandBanks.intelecto)
    $("#Ficha_Sacada").html("")
    $("#Resultado").html("")
    $("#Pistas_Personaje").html(RolandBanks.pistas)
    $("#Vida_Personaje").html(RolandBanks.vida)
    $("#Cordura_Personaje").html(RolandBanks.cordura)
    $("#Pistas_Restantes").html(atico.pistas_investigador)
    $("#Ubicacion_actual").html("Atico")
}