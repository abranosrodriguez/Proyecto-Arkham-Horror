function moverse_tablero() {
    // Función que nos permite movernos por el tablero
    if (ubicacion_pasillo == true) {
        moverse = prompt("Donde te quieres mover: Atico| Sotano")                                   //Le pediremos al a donde quiere ir
        if (moverse == "sotano" || moverse == "Sotano") {                                           //Si es sotano
            ubicacion_pasillo = false                                                               //Quitamos que el usuario ya no está en el pasillo
            ubicacion_sotano = true                                                                 //Decimos que está en el sótano
            acciones_jugador--                                                                      // Restamos una accion de moverse
            RolandBanks.obligado_Sotano()                                                           //Cuando el usuario entra en el sótano se le quitará uno de vida
            actualizar_datos_sala_sotano()                                                          //Actualizamos los datos del Personaje
            document.getElementById("Investigar").disabled = false                                  //Activamos el boton de investigar
            clase_carta = document.getElementsByClassName("lugares_cartas")                         //Obtenemos la clase de las cartas de las ubicaciones
            clase_carta[5].src = ("Imagenes/Capitulo 1/Escenario/4_sotano_trasero.png")             //Cogemos la carta que queremos y la cambiamos por la parte trasera de la carta
            return [ubicacion_pasillo = false, ubicacion_sotano = true, moverse]                    //Devolvemos los datos de donde se encuentra el jugador
        } else if (moverse == "atico" || moverse == "Atico") {                                      // Si es Atico
            ubicacion_pasillo = false                                                               // Quitamos que el usuario ya no está en el pasillo
            ubicacion_atico = true                                                                  // Decimos que ahora se encuentra en el ático
            acciones_jugador--                                                                      // Restamos una accion de jugador por moverse
            RolandBanks.obligado_Atico()                                                            // Cuando un jugador entre en el atico se le quitará uno de cordura
            actualizar_datos_sala_atico()                                                           // Actualizamos los datos del atico
            document.getElementById("Investigar").disabled = false                                  //Desactivamos el boton investigar
            clase_carta = document.getElementsByClassName("lugares_cartas")                         //Buscamos la clase de las cartas
            clase_carta[3].src = ("Imagenes/Capitulo 1/Escenario/3_atico_trasero.png")              //Cogemos la carta que queremos y la cambiamos por la parte trasera
            return [ubicacion_pasillo = false, ubicacion_atico = true]                              //Devolvemos la ubicacion del jugador
        }
    } else if (ubicacion_atico == true || ubicacion_sotano == true) {                               // Si la ubicacion es pasillo
        alert("Moviendo al pasillo")
        ubicacion_atico = false                                                                     // Decimos que no está en el atico
        ubicacion_sotano = false                                                                    // Ni en el sotano
        ubicacion_pasillo = true                                                                    // Que está en el pasillo
        acciones_jugador--                                                                          //Restamos accion de jugador
        actualizar_datos_sala_pasillo()                                                             //Actualizamos datos 
        document.getElementById("Investigar").disabled = true                                       //Desactivamos el boton
        return [ubicacion_pasillo = true, ubicacion_atico = false, ubicacion_sotano = false]        //Devolvemos la ubicacion actual del jugador
    }
}