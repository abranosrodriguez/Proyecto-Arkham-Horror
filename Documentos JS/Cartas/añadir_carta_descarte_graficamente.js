function anadir_carta_descarte_graficamente() {
    //Funcion que nos permite añadir la ultima carta graficamente de la zona de descarte
    nombre = document.getElementById("Zona_Descarte")   //Cogemos los datos
    buscador = -1   //Ultimo valor del array  
    nombre.src = (cartas_descartadas.at(buscador).imagen) //Hacemos que actualice el src al ultima imagen del array
}