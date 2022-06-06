function PopUpPlan() {
    var popPlan = document.getElementById("myHistoria_plan")
    var btnPlan = document.getElementById("Boton_Historia_Plan")
    var spanPlan = document.getElementsByClassName("Close_Plan")[0];

    // When the user clicks on the button, open the modal
    btnPlan.addEventListener("click", () => {
        popPlan.style.display = "block";
    })

    // When the user clicks on <span> (x), close the modal
    spanPlan.addEventListener("click", () => {
        popPlan.style.display = "none";

    })

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", (event) => {
        if (event.target == popPlan) {
            popPlan.style.display = "none";

        }
    })
}