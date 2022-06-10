function PopUpHistoria() {
    //ModelBox de la historia (h1) - [Los gules tienen hambre]
    var popUp = document.getElementById("myPopUp")
    var btnPopUp = document.getElementById("Boton_PopUp")
    var spanPopUp = document.getElementsByClassName("Close")[0];

    // Si le al boton mostrará el contenido
    btnPopUp.addEventListener("click", () => {
        popUp.style.display = "block";
    })

    // Si el usuario pincha en la [x] cerrará la ventana
    spanPopUp.addEventListener("click", () => {
        popUp.style.display = "none";
        carta_estudio()                                         // Actualizamos la carta del estudio a la trasera, donde está las pistas y dificultad
    })

    // Si le da a otro sitio cerrará la ventana
    window.addEventListener("click", (event) => {
        if (event.target == popUp) {
            popUp.style.display = "none";
            carta_estudio()
        }
    })

    // Model Box historia 2 (h2) - [Parte I: El encuentro]
    // Cogemos los valores correspondientes
    var popUp2 = document.getElementById("myPopUp2")
    var siguientePopUp = document.getElementById("Siguiente")
    var spanPopUp2 = document.getElementsByClassName("Close")[1]
    var anteriorPopUp = document.getElementById("Anterior1")
    siguientePopUp.addEventListener("click", () => {            // Si el usuario le da a siguiente [ h1 -> h2 ]
        popUp.style.display = "none";                           // Descativamos el [ h1]
        popUp2.style.display = "block";                         // Activamos el [ h2 ]

    })

    spanPopUp2.addEventListener("click", () => {                // Si pincha en la [ x = h2]
        popUp2.style.display = "none";                          // Desactivamos el contenido
        carta_estudio()
    })

    window.addEventListener("click", (event) => {               // Si pincha por fuera se cierra
        if (event.target == popUp2) {
            popUp2.style.display = "none";
            carta_estudio()
        }
    })

    anteriorPopUp.addEventListener("click", () => {             // Si pincha en el anterior [ h2 -> h1]
        popUp2.style.display = "none";                          // Desactivamos el [ h2 ]
        popUp.style.display = "block";                          // Activamos el [ h1 ]
    })

    // ------------------------------------------------------------------------------------------------------------------------
    //Temporizador para lanzar el pop Up
    function temporizador_PopUp() {
        popUp.style.display = "block";
    }

    setTimeout(temporizador_PopUp, 3000)
}