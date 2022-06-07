function PopUp_Plan_1b() {
    // function temporizador_Plan_1b() {

    var popPlan = document.getElementById("myHistoria_plan")
    var popUp_plan_1b = document.getElementById("myPlan_1b")
    var spanPlan_1b = document.getElementsByClassName("Close_Plan1b")[0];

    popUp_plan_1b.style.display = "block";

    spanPlan_1b.addEventListener("click", () => {
        popUp_plan_1b.style.display = "none";
        prueba_plan_1b()
    })

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", (event) => {
        if (event.target == popUp_plan_1b) {
            popUp_plan_1b.style.display = "none";
            prueba_plan_1b()
        }
    })


    siguientePlan1b = document.getElementById("Siguiente_Plan_1b")
    anteriorPlan1a = document.getElementById("Anterior_plan_1a")

    //Siguiente Plan desde 1a para 1b
    siguientePlan1b.addEventListener("click", () => {
        popPlan.style.display = "none";
        popUp_plan_1b.style.display = "block";

    })

    //Anterior plan desde 1b a 1a
    anteriorPlan1a.addEventListener("click", () => {
        popUp_plan_1b.style.display = "none";
        popPlan.style.display = "block";
    })

    //Siguiente plan desde 1b para 2A
    PopUp_Plan_2a = document.getElementById("myPlan_2a")
    siguientePlan2a = document.getElementById("Siguiente_plan_2a")
    siguientePlan2a.addEventListener("click", () => {
        popUp_plan_1b.style.display = "none";
        PopUp_Plan_2a.style.display = "block";

    })


    // Boton anterior desde el plan 2A para el plan 1b
    anteriorPlan1b = document.getElementById("Anterior_plan_1b")
    anteriorPlan1b.addEventListener("click", () => {
        PopUp_Plan_2a.style.display = "none";
        popUp_plan_1b.style.display = "block";

    })

    //Plan A2 cuando presione en la x se cierra
    var spanPlan_2a = document.getElementsByClassName("Close_Plan2a")[0];
    spanPlan_2a.addEventListener("click", () => {
        PopUp_Plan_2a.style.display = "none";
        prueba_plan_1b()
    })

    //Plan A2 cuando presione fuera de la ventana se cierra
    window.addEventListener("click", (event) => {
        if (event.target == PopUp_Plan_2a) {
            PopUp_Plan_2a.style.display = "none";
            prueba_plan_1b()
        }
    })
}

