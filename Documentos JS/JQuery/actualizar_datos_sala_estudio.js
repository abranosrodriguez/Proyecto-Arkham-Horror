function actualizar_datos_sala_estudio() {
    // Actualizamos los datos del estudio
    $("#Ubicacion_actual").html(" Estudio")

    $("#Dificultad").html(estudio.dificultad)
    $("#Intelecto_Personaje").html(RolandBanks.intelecto)
    $("#Ficha_Sacada").html("")
    $("#Resultado").html("")
    $("#Pistas_Personaje").html(RolandBanks.pistas)
    $("#Vida_Personaje").html(RolandBanks.vida)
    $("#Cordura_Personaje").html(RolandBanks.cordura)
    $("#Pistas_Restantes").html(estudio.pistas_investigador)
}   