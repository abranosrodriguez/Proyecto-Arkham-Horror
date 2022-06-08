function eliminar_carta_graficamente(nombre_carta_id) {
    // Funcion para eliminar la carta graficamenete del html
    carta_a_eliminar = document.getElementById(nombre_carta_id) // Buscamos donde se encuentra esta carta en el html
    carta_a_eliminar.remove()   // La eliminamos del html
}