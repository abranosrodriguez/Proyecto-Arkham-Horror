function PopUpPlan() {
    // Model Box de la Historia del Plan
    var popPlan = document.getElementById("myHistoria_plan")                // Cogemos los datos correspondientes
    var btnPlan = document.getElementById("Boton_Historia_Plan")
    var spanPlan = document.getElementsByClassName("Close_Plan")[0];

    btnPlan.addEventListener("click", () => {                                // Si el usuario le da click en el boton activa el contenido de del plan
        popPlan.style.display = "block";                                    // Activamos el contenido
    })

    spanPlan.addEventListener("click", () => {                              // Si el usuario pincha en la [ x ] cierra el contenido
        popPlan.style.display = "none";                                     // Desactivamos el contenido

    })

    window.addEventListener("click", (event) => {                           // Si el usuario pincha fuera de la ventana o model box cierra el contenido
        if (event.target == popPlan) {
            popPlan.style.display = "none";

        }
    })
}