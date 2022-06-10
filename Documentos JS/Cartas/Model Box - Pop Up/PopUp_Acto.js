function PopUpActo() {
    //Model Box del plan [1a]
    var popActo = document.getElementById("myActo_plan")
    var btnActo = document.getElementById("Boton_Historia_Acto")
    var spanActo = document.getElementsByClassName("Close_Acto")[0];

    // Cuando el usuario pinche en el boton abrirá el contenido
    btnActo.addEventListener("click", () => {
        popActo.style.display = "block";
    })

    //Si le da a la (x) cerrará el contenido
    spanActo.addEventListener("click", () => {
        popActo.style.display = "none";

    })

    // Si pincha en otra zona fuera de la ventana se cierra
    window.addEventListener("click", (event) => {
        if (event.target == popActo) {
            popActo.style.display = "none";

        }
    })



}