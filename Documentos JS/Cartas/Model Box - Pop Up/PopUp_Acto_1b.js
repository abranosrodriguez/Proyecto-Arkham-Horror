function PopUp_Acto_1b() {
    function temporizador_Acto_1b() { //Temporizador que cuando se haya finalizado con todas las pistas del estudio saltará el model box
        // [ --- Acto 1B --- ]
        var popActo = document.getElementById("myActo_plan")                        //Recogemos los valores
        var popUp_acto_1b = document.getElementById("myActo_1b")
        var spanActo_1b = document.getElementsByClassName("Close_Acto1b")[0];

        popUp_acto_1b.style.display = "block";                                      //Activamos el ModelBox [ 1b ]

        spanActo_1b.addEventListener("click", () => {                               //Cuando el usuario le de a la [x] cerrará la ventana
            popUp_acto_1b.style.display = "none";
            añadir_graficamente_pasillo_sotano_atico()                              //Añadimos graficamente las cartas
        })

        window.addEventListener("click", (event) => {                               //Cuando pinche fuera de la ventana se cerrará
            if (event.target == popUp_acto_1b) {
                popUp_acto_1b.style.display = "none";
                añadir_graficamente_pasillo_sotano_atico()
            }
        })


        // Siguiente historia
        // [ --- Acto 2A --- ]
        siguienteActo1b = document.getElementById("Siguiente_Acto_1b")              // Declaramos el boton siguiente [ 1b -> 2a ]
        anteriorActo1a = document.getElementById("Anterior_acto_1a")                // Declaramos el boton anterior acto [ 1b -> 1a ]

        siguienteActo1b.addEventListener("click", () => {                           // Si pincha en el siguien acto avanza a la historia del [ Acto 1b ]
            popActo.style.display = "none";                                         // Desactivamos el Model Box de [ 1a ]
            popUp_acto_1b.style.display = "block";                                  // Activamos el [ 1b ]
        })

        anteriorActo1a.addEventListener("click", () => {                            // Si pincha en el anterior [ 1b -> 1a ]
            popUp_acto_1b.style.display = "none";                                   // Desactivamos el [ 1b ]
            popActo.style.display = "block";                                        // Activamos el [ 1a ]
        })

        PopUp_Acto_2a = document.getElementById("myActo_2a")                        //Si pincha en el siguiente [ 1b -> 2a ]
        siguienteActo2a = document.getElementById("Siguiente_acto_2a")
        siguienteActo2a.addEventListener("click", () => {
            popUp_acto_1b.style.display = "none";                                   // Desactivamos el [ 1b ]
            PopUp_Acto_2a.style.display = "block";                                  // Activamos el [ 1a ]
        })

        anteriorActo1b = document.getElementById("Anterior_acto_1b")                // Si pincha en el anterior [ 2a -> 1b ]
        anteriorActo1b.addEventListener("click", () => {
            PopUp_Acto_2a.style.display = "none";                                   // Desactivamos el [ 2a ]
            popUp_acto_1b.style.display = "block";                                  // Activamos el [ 1b ]

        })

        //Acto A2 cuando presione en la x se cierra
        var spanActo_2a = document.getElementsByClassName("Close_Acto2a")[0];       // Si pincha en la [x]
        spanActo_2a.addEventListener("click", () => {
            PopUp_Acto_2a.style.display = "none";                                   // Desactivamos el [ 2a ]
            añadir_graficamente_pasillo_sotano_atico()
        })

        //Acto A2 cuando presione fuera de la ventana se cierra
        window.addEventListener("click", (event) => {                               // Si por fuera
            if (event.target == PopUp_Acto_2a) {
                PopUp_Acto_2a.style.display = "none";                               // Desactivamos el [ 2a ]
                añadir_graficamente_pasillo_sotano_atico()
            }
        })

    }
    setTimeout(temporizador_Acto_1b, 2000)
}
