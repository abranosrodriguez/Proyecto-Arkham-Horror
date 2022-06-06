function PopUp_Acto_1b() {
    function temporizador_Acto_1b() {
        var popActo = document.getElementById("myActo_plan")
        var popUp_acto_1b = document.getElementById("myActo_1b")
        var spanActo_1b = document.getElementsByClassName("Close_Acto1b")[0];

        popUp_acto_1b.style.display = "block";

        spanActo_1b.addEventListener("click", () => {
            popUp_acto_1b.style.display = "none";
            añadir_graficamente_pasillo_sotano_atico()
        })

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener("click", (event) => {
            if (event.target == popUp_acto_1b) {
                popUp_acto_1b.style.display = "none";
                añadir_graficamente_pasillo_sotano_atico()
            }
        })


        siguienteActo1b = document.getElementById("Siguiente_Acto_1b")
        anteriorActo1a = document.getElementById("Anterior_acto_1a")

        //Siguiente Acto desde 1a para 1b
        siguienteActo1b.addEventListener("click", () => {
            popActo.style.display = "none";
            popUp_acto_1b.style.display = "block";

        })

        //Anterior acto desde 1b a 1a
        anteriorActo1a.addEventListener("click", () => {
            popUp_acto_1b.style.display = "none";
            popActo.style.display = "block";
        })

        //Siguiente acto desde 1b para 2A
        PopUp_Acto_2a = document.getElementById("myActo_2a")
        siguienteActo2a = document.getElementById("Siguiente_acto_2a")
        siguienteActo2a.addEventListener("click", () => {
            popUp_acto_1b.style.display = "none";
            PopUp_Acto_2a.style.display = "block";
        })


        //Boton anterior desde el acto 2A para el acto 1b
        anteriorActo1b = document.getElementById("Anterior_acto_1b")
        anteriorActo1b.addEventListener("click", () => {
            PopUp_Acto_2a.style.display = "none";
            popUp_acto_1b.style.display = "block";

        })

        //Acto A2 cuando presione en la x se cierra
        var spanActo_2a = document.getElementsByClassName("Close_Acto2a")[0];
        spanActo_2a.addEventListener("click", () => {
            PopUp_Acto_2a.style.display = "none";
            añadir_graficamente_pasillo_sotano_atico()
        })

        //Acto A2 cuando presione fuera de la ventana se cierra
        window.addEventListener("click", (event) => {
            if (event.target == PopUp_Acto_2a) {
                PopUp_Acto_2a.style.display = "none";
                añadir_graficamente_pasillo_sotano_atico()
            }
        })
    }
    setTimeout(temporizador_Acto_1b, 2000)
}
