function eliminar_carta_graficamente(nombre_carta_id) {
    carta_a_eliminar = document.getElementById(nombre_carta_id)
    carta_a_eliminar.remove()
    console.log("Carta Eliminada")
    console.log(carta_a_eliminar)
}