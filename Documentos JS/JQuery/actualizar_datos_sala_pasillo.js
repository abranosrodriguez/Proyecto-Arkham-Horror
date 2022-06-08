function actualizar_datos_sala_pasillo() {
    // Actualizamos los datos del pasillo
    $("#Dificultad").html(pasillo.dificultad)
    $("#Intelecto_Personaje").html(RolandBanks.intelecto)
    $("#Ficha_Sacada").html("")
    $("#Resultado").html("")
    $("#Pistas_Personaje").html(RolandBanks.pistas)
    $("#Vida_Personaje").html(RolandBanks.vida)
    $("#Cordura_Personaje").html(RolandBanks.cordura)
    $("#Pistas_Restantes").html(pasillo.pistas_investigador)
    $("#Ubicacion_actual").html(pasillo.nombre)
}