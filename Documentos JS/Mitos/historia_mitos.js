function historia_mitos() {
    function temporizador_historia_mitos_malo() {
        console.log("hola")
    }

    setTimeout(temporizador_historia_mitos_malo, 1000)
    if (ficha_mitos == 3) {
        alert("FASE 1")
    } else if (ficha_mitos == 7) {
        alert("FASE 2")
    } else if (ficha_mitos == 10) {
        alert("FASE 3")
    }
}