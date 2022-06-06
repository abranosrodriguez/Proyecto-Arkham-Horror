function PopUp_Acto_1b() {
    function temporizador_Acto_1b() {
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

    }
    setTimeout(temporizador_Acto_1b, 2000)
}
