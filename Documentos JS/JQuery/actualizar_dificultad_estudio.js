function actualizar_dificultad_estudio() {
    // Actualizamos los datos del estudio
    $("#Dificultad").html(estudio.dificultad)
    $("#Intelecto_Personaje").html(RolandBanks.intelecto)
    $("#Pistas_Restantes").html(estudio.pistas_investigador)
    $("#Ubicacion_actual").html(estudio.nombre)
}