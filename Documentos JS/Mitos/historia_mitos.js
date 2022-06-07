function historia_mitos() {
    let timeHistoria_Mala = setTimeout(function temporizador_historia_mitos_malo() {
        console.log("Comprobando fichas de mitos...")
        if (ficha_mitos == 10 && fase_3 == true) {
            alert("FASE 3")
        } else if (ficha_mitos == 7 && fase_2 == true) {
            alert("FASE 2")
        } else if (ficha_mitos == 3 && fase_1 == true) {
            fase_1 = false
            fase_2 = true
            ficha_mitos = 0
            alert("FASE 1")
            PopUp_Plan_1b()
            setTimeout(() => { clearInterval(timeHistoria_Mala); console.log("Tiempo Parado") })

        }
        timeHistoria_Mala = setTimeout(temporizador_historia_mitos_malo, 2000); // (*)
    }, 2000);



}