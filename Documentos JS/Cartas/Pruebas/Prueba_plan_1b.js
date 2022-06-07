function prueba_plan_1b() {
    let opcion = prompt("Escoge una opcion: \n1 - Descarta una carta al azar \n2 - El investigador jefe recibe 2 puntos de horror")
    if (opcion == 1) {
        console.log("Descarta una carta al azar")
        quitar_carta_azar_mano()
        actualizar_carta_plan_2a()
    } else if (opcion == 2) {
        console.log("Recibe 2 puntos de horror")
        RolandBanks.dano_Horror(2)
        $("#Vida_Personaje").html(RolandBanks.vida)
        $("#Cordura_Personaje").html(RolandBanks.cordura)
        actualizar_carta_plan_2a()
    }
}