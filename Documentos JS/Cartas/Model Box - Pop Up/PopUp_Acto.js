function PopUpActo() {
    var popActo = document.getElementById("myActo_plan")
    var btnActo = document.getElementById("Boton_Historia_Acto")
    var spanActo = document.getElementsByClassName("Close_Acto")[0];

    // When the user clicks on the button, open the modal
    btnActo.addEventListener("click", () => {
        popActo.style.display = "block";
    })

    // When the user clicks on <span> (x), close the modal
    spanActo.addEventListener("click", () => {
        popActo.style.display = "none";

    })

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", (event) => {
        if (event.target == popActo) {
            popActo.style.display = "none";

        }
    })



}