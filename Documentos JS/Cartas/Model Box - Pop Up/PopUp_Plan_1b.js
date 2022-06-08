function PopUp_Plan_1b() {
    // Model Box del Plan 1b
    // Cogemos los valores
    var popPlan = document.getElementById("myHistoria_plan")
    var popUp_plan_1b = document.getElementById("myPlan_1b")
    var spanPlan_1b = document.getElementsByClassName("Close_Plan1b")[0];

    popUp_plan_1b.style.display = "block";                              // Activamos el contenido [ P1b ]

    spanPlan_1b.addEventListener("click", () => {                       // Si pincha en la [ x ]
        popUp_plan_1b.style.display = "none";                           // Desactivamos el contenido
        prueba_plan_1b()                                                // Hacemos la prueba (El usuario recibe 2 puntos de Horror || Descarta 1 Carta aleatoria de la mano)
    })

    window.addEventListener("click", (event) => {                       // Si pincha por fuera de la ventana
        if (event.target == popUp_plan_1b) {
            popUp_plan_1b.style.display = "none";
            prueba_plan_1b()
        }
    })

    siguientePlan1b = document.getElementById("Siguiente_Plan_1b")
    anteriorPlan1a = document.getElementById("Anterior_plan_1a")

    siguientePlan1b.addEventListener("click", () => {                   // Si pincha pasa de [ plan1a -> plan1b ]
        popPlan.style.display = "none";                                 // Desactivamos el contenido o model box de: [ plan1a ]
        popUp_plan_1b.style.display = "block";                          // Activamos el contenido o model box de: [ pla1b ]

    })

    anteriorPlan1a.addEventListener("click", () => {                    // Si pincha en anterior pasa de [ plan1b -> plan1a ]
        popUp_plan_1b.style.display = "none";                           // Desactivamos el contenido o model box de: [ plan 1b ]
        popPlan.style.display = "block";                                // Activamos el contenido o model box de: [ plan 1a ]
    })

    PopUp_Plan_2a = document.getElementById("myPlan_2a")                // Cogemos los valores
    siguientePlan2a = document.getElementById("Siguiente_plan_2a")

    siguientePlan2a.addEventListener("click", () => {                   // Si pinchamos el siguiente pasa [ plan1b -> plan2a]
        popUp_plan_1b.style.display = "none";                           // Desactivamos el contenido o model box de: [ plan1b ]
        PopUp_Plan_2a.style.display = "block";                          // Activamos el contenido o model box de: [ plan2a]

    })

    anteriorPlan1b = document.getElementById("Anterior_plan_1b")
    anteriorPlan1b.addEventListener("click", () => {                    // Si pincha en el anterior [ plan 2a -> plan 1b] 
        PopUp_Plan_2a.style.display = "none";                           // Desactivamos el contenido o model box de: [ plan2a ]
        popUp_plan_1b.style.display = "block";                          // Activamos el contenido o model box de: [ plan1b ]

    })

    var spanPlan_2a = document.getElementsByClassName("Close_Plan2a")[0];   // Si pincha en la [ x - plan2a ] cierra el contenido o model box
    spanPlan_2a.addEventListener("click", () => {
        PopUp_Plan_2a.style.display = "none";                           // Desactivamos el contenido o model box de: [ plan2a ]
        prueba_plan_1b()                                                // Hacemos la prueba (El usuario recibe 2 puntos de Horror || Descarta 1 Carta aleatoria de la mano)
    })

    window.addEventListener("click", (event) => {                        // Si pincha fuera del model box o ventana de [ plan 2a ]
        if (event.target == PopUp_Plan_2a) {
            PopUp_Plan_2a.style.display = "none";                       // Desactivamos el contenido o model box de: [ plan2a ]
            prueba_plan_1b()                                            // Hacemos la prueba (El usuario recibe 2 puntos de Horror || Descarta 1 Carta aleatoria de la mano)
        }
    })
}

