function historia_mitos() {
    // Funcion que nos permite comprobar constantemente si el numero de fichas de mitos es el indicado.
    // Para poder pasar la historia de mitos
    let timeHistoria_Mala = setTimeout(function temporizador_historia_mitos_malo() {
        if (ficha_mitos == 10 && fase_3 == true) {
            alert("FASE 3")
        } else if (ficha_mitos == 7 && fase_2 == true) {
            alert("FASE 2")
            fase_2 = false
            fase_3 = true
            ficha_mitos = 0
        } else if (ficha_mitos == 3 && fase_1 == true) {    // Si se completa estos requisitos
            fase_1 = false                                                                          // Completamos el primero
            fase_2 = true                                                                           // Para poder pasar al segundo mas tarde
            ficha_mitos = 0                                                                         // Reseteamos la ficha de mitos
            alert("FASE 1")
            PopUp_Plan_1b()
            // Historia para el usuario
            setTimeout(() => { clearInterval(timeHistoria_Mala); console.log("Tiempo Parado") })
            prueba_plan_1b()
        }
        timeHistoria_Mala = setTimeout(temporizador_historia_mitos_malo, 2000); // (*)
    }, 2000);



}