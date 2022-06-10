function prueba_plan_1b() {
    // Funcion que se monstrará cuando la ficha de mitos sea 3 y después de salir de la plan 1b o 2a
    let opcion = prompt("Escoge una opcion: \n1 - Descarta una carta al azar \n2 - El investigador jefe recibe 2 puntos de horror") // El usuario tendrá que escoger una opcion
    if (opcion != 1 || opcion != 2) {
        quitar_carta_azar_mano()
        actualizar_carta_plan_2a()
    } else if (opcion == 1) {
        quitar_carta_azar_mano()                            // Si el usuario escogió uno quitaremos una carta al azar de la mano
        actualizar_carta_plan_2a()                          // Actualizamos graficamente la carta al plan 2a
    } else if (opcion == 2) {
        RolandBanks.dano_Horror(2)                          // Si el usuario escogió la segunda opcion hacemos que reciba 2 puntos de horror o cordura
        $("#Vida_Personaje").html(RolandBanks.vida)         // Actualizamos los datos de vida
        $("#Cordura_Personaje").html(RolandBanks.cordura)   // Actualizamos los datos de cordura
        actualizar_carta_plan_2a()                          // Actualizamos graficamente la carta al plan 2a
    }
}