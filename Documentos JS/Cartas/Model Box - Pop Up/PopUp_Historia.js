function PopUpHistoria() {
    //PopUp 1
    var popUp = document.getElementById("myPopUp")
    var btnPopUp = document.getElementById("Boton_PopUp")
    var spanPopUp = document.getElementsByClassName("Close")[0];

    // When the user clicks on the button, open the modal
    btnPopUp.addEventListener("click", () => {
        popUp.style.display = "block";
    })

    // When the user clicks on <span> (x), close the modal
    spanPopUp.addEventListener("click", () => {
        popUp.style.display = "none";
        carta_estudio()
    })

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", (event) => {
        if (event.target == popUp) {
            popUp.style.display = "none";
            carta_estudio()
        }
    })

    //PopUp 2
    var popUp2 = document.getElementById("myPopUp2")
    var siguientePopUp = document.getElementById("Siguiente")
    var spanPopUp2 = document.getElementsByClassName("Close")[1]
    var anteriorPopUp = document.getElementById("Anterior1")
    siguientePopUp.addEventListener("click", () => {
        popUp.style.display = "none";
        popUp2.style.display = "block";

    })

    spanPopUp2.addEventListener("click", () => {
        popUp2.style.display = "none";
        carta_estudio()
    })

    window.addEventListener("click", (event) => {
        if (event.target == popUp2) {
            popUp2.style.display = "none";
            carta_estudio()
        }
    })

    anteriorPopUp.addEventListener("click", () => {
        popUp2.style.display = "none";
        popUp.style.display = "block";
    })

    // ------------------------------------------------------------------------------------------------------------------------
    //Temporizador para lanzar el pop Up
    // function temporizador_PopUp() {
    //     popUp.style.display = "block";
    // }

    // setTimeout(temporizador_PopUp, 3000)
}