function acciones_jugador(RolandBanks) {
    for (i = 0; i <= 4; i++) {
        numero_aleatorio();
        i++;
    }

    function numero_aleatorio() {
        numero_random = Math.floor(Math.random() * (3 - 1) + 1) //7
        if (numero_random == 1) {
            robar_carta()
        } else if (numero_random == 2) {
            sumarSuministrosRoland(RolandBanks)
        }
    }




    function robar_carta() {
        console.log("Robo Carta")
    }

    // function robar_suministro() {
    //     console.log("Robo Suministro")
    // }
}